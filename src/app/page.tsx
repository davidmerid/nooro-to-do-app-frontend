'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { TaskListContainer } from '@/components/tasks/tasks-list/Index';
import { TaskForm } from '@/components/tasks/task-form/Index';

// Separate component for content that uses useSearchParams
function HomeContent() {
  const searchParams = useSearchParams();
  const isCreating = searchParams.get('new') === 'true';

  return (
    <div className='max-w-[var(--content-max-width)] mx-auto px-4 space-y-[var(--section-spacing)]'>
      {isCreating ? <TaskForm /> : <TaskListContainer />}
    </div>
  );
}

// Main page component with Suspense wrapper
export default function Home() {
  return (
    <main className=''>
      <Suspense
        fallback={
          <div className='max-w-[var(--content-max-width)] mx-auto px-4 space-y-[var(--section-spacing)]'>
            Loading...
          </div>
        }
      >
        <HomeContent />
      </Suspense>
    </main>
  );
}
