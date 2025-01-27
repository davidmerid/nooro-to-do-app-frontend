import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { taskApi } from '@/lib/tasksAPI';
import { type Task } from '@/types';

export const TASKS_QUERY_KEY = ['tasks'] as const;

export function useTasks() {
  const queryClient = useQueryClient();

  // Query for fetching tasks
  const {
    data: tasks = [], // Default to empty array if no data
    isLoading, // Loading state
    isError, // Error state
  } = useQuery({
    queryKey: TASKS_QUERY_KEY, // Query key for caching
    queryFn: taskApi.getTasks, // Fetch tasks API call
  });

  // Toggle task mutation (mark task as completed or not)
  const toggleTaskMutation = useMutation({
    mutationFn: ({ id, completed }: { id: string; completed: boolean }) =>
      taskApi.toggleTask(id, completed), // API call to toggle task
    onMutate: async ({ id, completed }) => {
      // Optimistically update the task state before API response
      await queryClient.cancelQueries({ queryKey: TASKS_QUERY_KEY });
      const previousTasks = queryClient.getQueryData(TASKS_QUERY_KEY);

      // Update task in cache
      queryClient.setQueryData(TASKS_QUERY_KEY, (old: Task[]) =>
        old.map((task) => (task.id === id ? { ...task, completed } : task))
      );

      return { previousTasks }; // Return previous data to revert on error
    },
    onError: (err, variables, context) => {
      // Revert to previous state if mutation fails
      queryClient.setQueryData(TASKS_QUERY_KEY, context?.previousTasks);
    },
    onSettled: () => {
      // Invalidate cache to refetch tasks after mutation
      queryClient.invalidateQueries({ queryKey: TASKS_QUERY_KEY });
    },
  });

  // Delete task mutation
  const deleteTaskMutation = useMutation({
    mutationFn: taskApi.deleteTask, // API call to delete task
    onMutate: async (id) => {
      // Optimistically update the task list before API response
      await queryClient.cancelQueries({ queryKey: TASKS_QUERY_KEY });
      const previousTasks = queryClient.getQueryData(TASKS_QUERY_KEY);

      // Remove deleted task from cache
      queryClient.setQueryData(TASKS_QUERY_KEY, (old: Task[]) =>
        old.filter((task) => task.id !== id)
      );

      return { previousTasks }; // Return previous data to revert on error
    },
    onError: (err, variables, context) => {
      // Revert to previous state if mutation fails
      queryClient.setQueryData(TASKS_QUERY_KEY, context?.previousTasks);
    },
    onSettled: () => {
      // Invalidate cache to refetch tasks after mutation
      queryClient.invalidateQueries({ queryKey: TASKS_QUERY_KEY });
    },
  });

  // Function to toggle task completion status
  const toggleTask = (id: string) => {
    const task = tasks.find((t) => t.id === id);
    if (!task) return; // If task doesn't exist, do nothing

    // Trigger toggle task mutation
    toggleTaskMutation.mutate({
      id,
      completed: !task.completed, // Toggle task's completed status
    });
  };

  // Function to delete a task
  const deleteTask = (id: string) => {
    deleteTaskMutation.mutate(id); // Trigger delete task mutation
  };

  return {
    tasks, // Return fetched tasks
    isLoading, // Return loading state
    isError, // Return error state
    toggleTask, // Return toggle task function
    deleteTask, // Return delete task function
  };
}
