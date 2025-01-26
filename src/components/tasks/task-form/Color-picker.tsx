import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const COLORS = [
  { id: 'red', value: 'bg-task-taskRed' },
  { id: 'orange', value: 'bg-task-taskOrange' },
  { id: 'yellow', value: 'bg-task-taskYellow' },
  { id: 'green', value: 'bg-task-taskGreen' },
  { id: 'blue', value: 'bg-task-taskBlue' },
  { id: 'indigo', value: 'bg-task-taskIndigo' },
  { id: 'purple', value: 'bg-task-taskPurple' },
  { id: 'pink', value: 'bg-task-taskPink' },
  { id: 'brown', value: 'bg-task-taskBrown' },
] as const;

interface ColorPickerProps {
  selectedColor: string;
  onColorSelect: (color: string) => void;
}

export function ColorPicker({
  selectedColor,
  onColorSelect,
}: ColorPickerProps) {
  return (
    <div className='flex flex-wrap gap-3'>
      {COLORS.map((color) => (
        <button
          key={color.id}
          onClick={() => onColorSelect(color.id)}
          className={cn(
            'w-10 h-10 rounded-full flex items-center justify-center',
            'transition-transform hover:scale-110 focus:outline-none',
            'focus:ring-2 focus:ring-offset-2 focus:ring-offset-background',
            color.value
          )}
        >
          {selectedColor === color.id && (
            <Check className='w-5 h-5 text-white' />
          )}
        </button>
      ))}
    </div>
  );
}
