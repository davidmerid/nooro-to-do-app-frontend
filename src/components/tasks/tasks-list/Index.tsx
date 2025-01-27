'use client';

import { useRouter } from 'next/navigation';
import { CirclePlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TaskCounter } from '@/components/tasks/tasks-list/Task-counter';
import { EmptyState } from '@/components/tasks/tasks-list/Task-empty';
import { TaskCard } from '@/components/tasks/tasks-list/Task-card';
import { useTasks } from '@/hooks/use-tasks';

export function TaskListContainer() {
  const router = useRouter();
  const { tasks, isLoading, isError, toggleTask, deleteTask } = useTasks(); // Custom hook to fetch tasks which uses React query

  return (
    <>
      {/* Button to navigate to task creation page */}
      <Button
        onClick={() => router.push('/?new=true')}
        className='w-full bg-primary text-primary-foreground font-bold py-6'
      >
        Create Task
        <span className='w-5 h-5 font-bold flex items-center justify-center'>
          <CirclePlus className='w-3 h-3' strokeWidth={3} />
        </span>
      </Button>

      <div className='space-y-4'>
        {/* Task counter showing total and completed tasks */}
        <TaskCounter
          totalTasks={tasks.length}
          completedTasks={tasks.filter((task) => task.completed).length}
        />

        <div className='border-t border-[hsl(var(--icon-muted))] pt-16 text-white'>
          {/* Display loading, error, or task list based on state */}
          {isLoading ? (
            <div>Loading tasks...</div> // Loading state
          ) : isError ? (
            <div>Error loading tasks</div> // Error state
          ) : tasks.length === 0 ? (
            <EmptyState /> // Empty state when no tasks
          ) : (
            // Display task list when tasks are available
            <div className='space-y-3'>
              {tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onToggle={toggleTask}
                  onDelete={deleteTask}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
