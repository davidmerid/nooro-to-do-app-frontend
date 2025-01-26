import { ClipboardList } from 'lucide-react';

export function EmptyState() {
  return (
    <div className='flex flex-col items-center text-center'>
      <ClipboardList className='w-14 h-14 text-[hsl(var(--text-muted))] mb-4' />
      <p className='text-[hsl(var(--text-muted))] font-bold mb-2'>
        You don't have any tasks registered yet.
      </p>
      <p className='text-[hsl(var(--text-muted))]'>
        Create tasks and organize your to-do items.
      </p>
    </div>
  );
}
