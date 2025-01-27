import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { type Task } from '@/types';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

interface TaskCardProps {
  task: Task; // Task data
  onToggle: (id: string) => void; // Function to toggle task completion
  onDelete: (id: string) => void; // Function to delete task
}

export function TaskCard({ task, onToggle, onDelete }: TaskCardProps) {
  return (
    <Card className='bg-taskCardBackground p-4 rounded-lg flex items-center justify-between group text-primary-foreground border-2 border-taskCardBorder'>
      <div className='flex items-center gap-4'>
        {/* Toggle button for task completion */}
        <button
          onClick={() => onToggle(task.id)} // Toggle task completion status
          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors
                ${
                  task.completed
                    ? 'bg-secondary border-secondary'
                    : 'border-primary hover:bg-primary/10'
                }`}
        >
          {task.completed && (
            // Checkmark icon for completed tasks
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

        {/* Task title with strike-through if completed */}
        <span
          className={`text-sm ${
            task.completed ? 'line-through text-muted-foreground' : ''
          }`}
        >
          {task.title}
        </span>
      </div>

      {/* Button to delete task */}
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            variant='ghost'
            size='icon'
            className='group-hover:visible text-muted-foreground hover:text-destructive hover:bg-transparent'
          >
            <Trash2 className='w-5 h-5' />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className='bg-taskCardBackground border-taskCardBorder'>
          <AlertDialogHeader>
            <AlertDialogTitle className='text-primary-foreground'>
              Delete Task
            </AlertDialogTitle>
            <AlertDialogDescription className='text-muted-foreground'>
              Are you sure you want to delete this task? This action cannot be
              undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className='text-primary-foreground border-taskCardBorder hover:bg-accent'>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => onDelete(task.id)}
              className='bg-destructive text-destructive-foreground hover:bg-destructive/90'
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  );
}
