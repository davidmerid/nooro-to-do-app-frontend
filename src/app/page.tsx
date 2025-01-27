'use client';

import { useSearchParams } from 'next/navigation';
import { TaskListContainer } from '@/components/tasks/tasks-list/Index';
import { TaskForm } from '@/components/tasks/task-form/Index';

export default function Home() {
  // Get search parameters to determine if the user is creating a new task
  const searchParams = useSearchParams();
  const isCreating = searchParams.get('new') === 'true';

  return (
    <main className=''>
      <div className='max-w-[var(--content-max-width)] mx-auto px-4 space-y-[var(--section-spacing)]'>
        {/* Conditionally render TaskForm if creating, otherwise show TaskListContainer */}
        {isCreating ? <TaskForm /> : <TaskListContainer />}
      </div>
    </main>
  );
}
