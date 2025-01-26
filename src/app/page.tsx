'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { TaskListContainer } from '@/components/tasks/tasks-list/Task-list-container';
import { TaskForm } from '@/components/tasks/task-form/Task-form';

export default function Home() {
  const searchParams = useSearchParams();
  const isCreating = searchParams.get('new') === 'true';

  return (
    <main className=''>
      <div className='max-w-[var(--content-max-width)] mx-auto px-4 space-y-[var(--section-spacing)]'>
        {isCreating ? <TaskForm /> : <TaskListContainer />}
      </div>
    </main>
  );
}
