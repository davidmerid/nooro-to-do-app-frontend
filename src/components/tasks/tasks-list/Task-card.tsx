// components/task-card.tsx
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { type Task } from '@/types';

interface TaskCardProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TaskCard({ task, onToggle, onDelete }: TaskCardProps) {
  return (
    <Card className='bg-taskCardBackground p-4 rounded-lg flex items-center justify-between group text-primary-foreground border-2 border-taskCardBorder'>
      <div className='flex items-center gap-4'>
        <button
          onClick={() => onToggle(task.id)}
          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors
                ${
                  task.completed
                    ? 'bg-secondary border-secondary'
                    : 'border-primary hover:bg-primary/10'
                }`}
        >
          {task.completed && (
            <svg
              viewBox='0 0 10 8'
              className='w-2.5 h-2.5 text-primary-foreground'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path
                d='M1 4L3.5 6.5L9 1'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          )}
        </button>

        <span
          className={`text-sm ${
            task.completed ? 'line-through text-muted-foreground' : ''
          }`}
        >
          {task.title}
        </span>
      </div>

      <Button
        variant='ghost'
        size='icon'
        onClick={() => onDelete(task.id)}
        className=' group-hover:visible text-muted-foreground hover:text-destructive hover:bg-transparent'
      >
        <Trash2 className='w-5 h-5' />
      </Button>
    </Card>
  );
}
