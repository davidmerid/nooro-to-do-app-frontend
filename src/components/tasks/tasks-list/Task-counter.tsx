interface TaskCounterProps {
  totalTasks: number;
  completedTasks: number;
}

export function TaskCounter({ totalTasks, completedTasks }: TaskCounterProps) {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex gap-2 items-center'>
        <span className='text-primary font-bold'>Tasks</span>
        <span className='bg-[hsl(var(--icon-muted))] px-2 py-0.5 rounded-full text-sm text-secondary-foreground'>
          {totalTasks}
        </span>
      </div>
      <div className='flex gap-2 items-center'>
        <span className='text-secondary font-bold'>Completed</span>
        <span className='bg-[hsl(var(--icon-muted))] px-2 py-0.5 rounded-full text-sm text-secondary-foreground'>
          {completedTasks} of {totalTasks}
        </span>
      </div>
    </div>
  );
}
