'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Plus, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ColorPicker } from './Color-picker';
import { useCreateTask } from '@/hooks/use-create-task';

export function TaskForm() {
  const router = useRouter();
  const [title, setTitle] = useState(''); // State for task title
  const [color, setColor] = useState('blue'); // State for selected color

  const { createTask, isLoading, errors } = useCreateTask(); // Custom hook for creating tasks

  const handleSubmit = async () => {
    createTask({ title, color }); // Call the createTask function on form submit
  };

  return (
    <div className='max-w-[var(--content-max-width)] mx-auto px-4 space-y-[var(--section-spacing)] py-6'>
      <div></div>
      {/* Container for the task form */}
      <div className='max-w-[736px] mx-auto px-4 space-y-4'>
        {/* Back button to return to the task list */}
        <Button
          variant='ghost'
          size='icon'
          onClick={() => router.push('/')}
          className='hover:bg-transparent w-8 h-8'
        >
          <ArrowLeft className='text-white scale-150' />
        </Button>

        <div className='space-y-4'>
          {/* Title input field */}
          <label className='text-sm text-primary font-bold'>Title</label>
          <Input
            placeholder='Ex. Brush your teeth'
            value={title}
            onChange={(e) => setTitle(e.target.value)} // Update title on input change
            className={`bg-taskCardBackground border-1 ${
              errors.title ? 'border-destructive' : 'border-inputBorder'
            } text-sm text-primary-foreground py-6`}
          />
          {errors.title && (
            // Show error message if title is invalid
            <p className='text-sm text-destructive'>{errors.title}</p>
          )}
        </div>

        <div className='space-y-3 mb-3'>
          {/* Color picker component */}
          <label className='text-sm text-primary font-bold'>Color</label>
          <ColorPicker selectedColor={color} onColorSelect={setColor} />
        </div>

        {/* Submit button for adding a task */}
        <Button
          onClick={handleSubmit} // Trigger task creation on click
          disabled={isLoading} // Disable button when loading
          className='w-full bg-primary text-primary-foreground font-bold py-6'
        >
          {isLoading ? 'Save' : 'Add Task'}
          <span className='w-5 h-5 font-bold flex items-center justify-center'>
            {isLoading ? (
              // Show Check icon when saving
              <Check className='w-3 h-3' strokeWidth={3} />
            ) : (
              // Show Plus icon when not saving
              <Plus className='w-3 h-3' strokeWidth={3} />
            )}
          </span>
        </Button>
      </div>
    </div>
  );
}
