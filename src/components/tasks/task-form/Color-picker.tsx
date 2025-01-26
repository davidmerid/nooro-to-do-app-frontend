import { Check } from 'lucide-react';

const COLORS = [
  { id: 'red', value: 'task-red' },
  { id: 'orange', value: 'task-orange' },
  { id: 'yellow', value: 'task-yellow' },
  { id: 'green', value: 'task-green' },
  { id: 'blue', value: 'task-blue' },
  { id: 'indigo', value: 'task-indigo' },
  { id: 'purple', value: 'task-purple' },
  { id: 'pink', value: 'task-pink' },
  { id: 'brown', value: 'task-brown' },
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
          className={`w-10 h-10 rounded-full flex items-center justify-center
            transition-transform hover:scale-110 focus:outline-none
            focus:ring-2 focus:ring-offset-2 focus:ring-offset-background
            bg-${color.value}`}
        >
          {selectedColor === color.id && (
            <Check className='w-5 h-5 text-white' />
          )}
        </button>
      ))}
    </div>
  );
}
