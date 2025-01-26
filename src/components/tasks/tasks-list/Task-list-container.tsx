'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { TaskCounter } from './Task-counter';
import { EmptyState } from './Task-empty';
import { CirclePlus } from 'lucide-react';
import { TaskCard } from './Task-card';
import { useRouter } from 'next/navigation';

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

// Sample tasks for development
const sampleTasks = [
  {
    id: '1',
    title: 'Integer urna interdum massa libero auctor neque',
    completed: false,
  },
  { id: '2', title: 'Complete the task management project', completed: true },
  { id: '3', title: 'Add task filtering functionality', completed: false },
  { id: '4', title: 'Implement dark mode support', completed: false },
  { id: '5', title: 'Write documentation', completed: true },
];

export function TaskListContainer() {
  const router = useRouter();
  const [tasks, setTasks] = useState<Task[]>(sampleTasks); // Using sample tasks initially

  const handleCreateTask = () => {
    router.push('/tasks/new'); // Navigate to the new task form
  };

  const handleToggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div className='max-w-[var(--content-max-width)] mx-auto px-4 space-y-[var(--section-spacing)]'>
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
        <TaskCounter
          totalTasks={tasks.length}
          completedTasks={completedTasks}
        />

        <div className='border-t border-[hsl(var(--icon-muted))] pt-16'>
          {tasks.length === 0 ? (
            <EmptyState />
          ) : (
            <div className='space-y-3'>
              {tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onToggle={handleToggleTask}
                  onDelete={handleDeleteTask}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
