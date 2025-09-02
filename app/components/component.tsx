import cn from '@/lib/utils';
import React from 'react';

export default function Component() {
  return (
    <div
      className={cn(
        'min-h-100 w-full rounded-2xl bg-neutral-100',
        // adding dots onto the component
        'bg-[radial-gradient(var(--color-neutral-200)_1px,transparent_1px)]',
        '[background-size:10px_10px]',
      )}
    />
  );
}
