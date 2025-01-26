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
    <div className='max-w-[736px] mx-auto px-4 space-y-16'>
      <Button
        variant='ghost'
        size='icon'
        onClick={() => router.push('/')}
        className='hover:bg-transparent'
      >
        <ArrowLeft className='w-5 h-5 text-muted-foreground' />
      </Button>

      <div className='space-y-8'>
        <div className='space-y-3'>
          <label className='text-sm text-muted-foreground'>Title</label>
          <Input
            placeholder='Task title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='bg-card border-none text-sm'
          />
        </div>

        <div className='space-y-3'>
          <label className='text-sm text-muted-foreground'>Color</label>
          <ColorPicker selectedColor={color} onColorSelect={setColor} />
        </div>

        <Button
          onClick={handleSubmit}
          disabled={!title.trim() || isSubmitting}
          className='w-full bg-primary text-primary-foreground font-bold py-6'
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
