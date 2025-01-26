import React from 'react';
import { Rocket } from 'lucide-react';

export function Header() {
  return (
    <header className='w-full bg-headerBackground py-[72px]'>
      <div className='max-w-[90%] mx-auto flex justify-center'>
        <div className='flex items-center gap-3'>
          <Rocket className='w-[22px] h-[36px] text-[hsl(var(--logo-todo))]' />
          <h1 className='text-4xl font-black'>
            <span className='text-[hsl(var(--logo-todo))]'>Todo</span>
            <span className='text-[hsl(var(--logo-app))]'>App</span>
          </h1>
        </div>
      </div>
    </header>
  );
}
