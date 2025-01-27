interface TaskCounterProps {
  totalTasks: number; // Total number of tasks
  completedTasks: number; // Number of completed tasks
}

export function TaskCounter({ totalTasks, completedTasks }: TaskCounterProps) {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex gap-2 items-center'>
        {/* Display total task count */}
        <span className='text-primary font-bold'>Tasks</span>
        <span className='bg-[hsl(var(--icon-muted))] px-2 py-0.5 rounded-full text-sm text-secondary-foreground'>
          {totalTasks} {/* Display total task number */}
        </span>
      </div>
      <div className='flex gap-2 items-center'>
        {/* Display completed task count */}
        <span className='text-secondary font-bold'>Completed</span>
        <span className='bg-[hsl(var(--icon-muted))] px-2 py-0.5 rounded-full text-sm text-secondary-foreground'>
          {completedTasks} of {totalTasks}{' '}
          {/* Display completed/total task count */}
        </span>
      </div>
    </div>
  );
}
