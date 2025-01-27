import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

// List of colors for the picker with unique ids and background classes. Values are picked from the tailwind.config.ts file
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
  selectedColor: string; // Currently selected color id
  onColorSelect: (color: string) => void; // Callback to handle color selection
}

export function ColorPicker({
  selectedColor,
  onColorSelect,
}: ColorPickerProps) {
  return (
    <div className='flex flex-wrap gap-3'>
      {/* Map over color options to create a button for each */}
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
          {/* Show check icon if the color is selected */}
          {selectedColor === color.id && (
            <Check className='w-5 h-5 text-white' />
          )}
        </button>
      ))}
    </div>
  );
}
