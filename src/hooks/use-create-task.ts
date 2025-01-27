import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { taskApi } from '@/lib/tasksAPI';
import { TASKS_QUERY_KEY } from './use-tasks';
import { useState } from 'react';

interface CreateTaskInput {
  title: string; // Task title
  color: string; // Task color
}

interface ValidationErrors {
  title?: string; // Validation error for task title
}

export function useCreateTask() {
  const router = useRouter(); // For navigation after task creation
  const queryClient = useQueryClient(); // For cache management
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>(
    {}
  ); // State for validation errors

  // Task validation function
  const validateTask = (input: CreateTaskInput) => {
    const errors: ValidationErrors = {};

    if (!input.title.trim()) {
      errors.title = 'Title is required';
    } else if (input.title.trim().length < 3) {
      errors.title = 'Title must be at least 3 characters';
    } else if (input.title.trim().length > 50) {
      errors.title = 'Title must be less than 50 characters';
    }

    setValidationErrors(errors); // Set validation errors
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  // Mutation to create task
  const createTaskMutation = useMutation({
    mutationFn: taskApi.createTask, // API call to create a task
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: TASKS_QUERY_KEY }); // Invalidate tasks cache
      router.push('/'); // Navigate to home page after task creation
    },
  });

  // Main function to create task
  const createTask = (input: CreateTaskInput) => {
    if (!validateTask(input)) return; // Validate task before mutation
    createTaskMutation.mutate(input); // Call mutation to create task
  };

  return {
    createTask, // Expose createTask function
    isLoading: createTaskMutation.isPending, // Loading state for task creation
    errors: validationErrors, // Validation errors
    error: createTaskMutation.error, // API error
  };
}
