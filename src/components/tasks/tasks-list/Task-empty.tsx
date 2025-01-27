import { ClipboardList } from 'lucide-react';

export function EmptyState() {
  return (
    <div className='flex flex-col items-center text-center'>
      {/* Empty state icon */}
      <ClipboardList className='w-14 h-14 text-[hsl(var(--text-muted))] mb-4' />

      {/* Message indicating no tasks are present */}
      <p className='text-[hsl(var(--text-muted))] font-bold mb-2'>
        You don&apos;t have any tasks registered yet.
      </p>

      {/* Suggestion to create tasks */}
      <p className='text-[hsl(var(--text-muted))]'>
        Create tasks and organize your to-do items.
      </p>
    </div>
  );
}
