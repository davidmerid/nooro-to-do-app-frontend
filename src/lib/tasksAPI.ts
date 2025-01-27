import { api } from '@/lib/baseAPI';
import { Task } from '@/types/index';

export const taskApi = {
  // Fetch all tasks from the API
  getTasks: async () => {
    const { data } = await api.get<Task[]>('/tasks'); // Get tasks from the endpoint
    // Format dates for each task
    return data.map((task) => ({
      ...task,
      createdAt: new Date(task.createdAt), // Convert createdAt to Date object
      updatedAt: new Date(task.updatedAt), // Convert updatedAt to Date object
    }));
  },

  // Toggle task completion status
  toggleTask: async (id: string, completed: boolean) => {
    const { data } = await api.put<Task>(`/tasks/${id}`, { completed }); // Update task status
    // Format dates for the updated task
    return {
      ...data,
      createdAt: new Date(data.createdAt),
      updatedAt: new Date(data.updatedAt),
    };
  },

  // Delete a task
  deleteTask: async (id: string) => {
    await api.delete(`/tasks/${id}`); // Delete task by id
    return id; // Return deleted task's id
  },

  // Create a new task
  createTask: async (input: { title: string; color: string }) => {
    const { data } = await api.post<Task>('/tasks', input); // Post new task
    // Format dates for the new task
    return {
      ...data,
      createdAt: new Date(data.createdAt),
      updatedAt: new Date(data.updatedAt),
    };
  },
};
