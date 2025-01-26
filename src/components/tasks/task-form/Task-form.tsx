// components/tasks/task-form/index.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Plus, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ColorPicker } from './Color-picker';

export function TaskForm() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('blue');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!title.trim()) return;

    setIsSubmitting(true);
    // Add API call here
    console.log({ title, color });

    // Simulate API delay
    setTimeout(() => {
      router.push('/');
    }, 1000);
  };

  return (
    <div className='max-w-[var(--content-max-width)] mx-auto px-4 space-y-[var(--section-spacing)] py-6'>
      <div></div>
      <div className='max-w-[736px] mx-auto px-4 space-y-4'>
        <Button
          variant='ghost'
          size='icon'
          onClick={() => router.push('/')}
          className='hover:bg-transparent   w-8 h-8'
        >
          <ArrowLeft className='text-white scale-150 ' />
        </Button>

        <div className='space-y-4'>
          <label className='text-sm text-primary font-bold'>Title</label>
          <Input
            placeholder='Ex. Brush your teeth'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='bg-taskCardBackground border-1 border-inputBorder text-sm text-primary-foreground py-6'
          />
        </div>

        <div className='space-y-3 mb-3'>
          <label className='text-sm text-primary font-bold'>Color</label>
          <ColorPicker selectedColor={color} onColorSelect={setColor} />
        </div>

        <Button
          onClick={handleSubmit}
          disabled={!title.trim() || isSubmitting}
          className=' w-full bg-primary text-primary-foreground font-bold py-6'
        >
          {isSubmitting ? 'Save' : 'Add Task'}
          <span className='w-5 h-5 font-bold flex items-center justify-center'>
            {isSubmitting ? (
              <Check className='w-3 h-3' strokeWidth={3} />
            ) : (
              <Plus className='w-3 h-3' strokeWidth={3} />
            )}
          </span>
        </Button>
      </div>
    </div>
  );
}
