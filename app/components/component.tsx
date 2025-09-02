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
        'flex items-center justify-center p-8',
      )}
    >
      <div
        className={cn(
          'size-60 rounded-lg border border-neutral-200 bg-neutral-100',
          'bg-[radial-gradient(var(--color-neutral-300)_1px,transparent_1px)]',
          '[background-size:10px_10px]',
          'relative overflow-hidden shadow-2xl',
        )}
      >
        {/* eslint-disable @next/next/no-img-element */}
        <img
          src="https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="avatar"
          className="h-full w-full object-cover object-top"
        />
      </div>
    </div>
  );
}
