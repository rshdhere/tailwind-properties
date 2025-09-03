import cn from '@/lib/utils';
import React from 'react';

export default function Component() {
  return (
    <div
      className={cn(
        // styles applied to the primary dotted area of the component
        'min-h-100 w-full rounded-2xl bg-neutral-100',
        // adding dots onto the component
        'bg-[radial-gradient(var(--color-neutral-200)_1px,transparent_1px)]',
        '[background-size:10px_10px]',
        'flex items-center justify-center p-8',
        // if you wanna name the group -> group/name
        'group',
      )}
    >
      <div
        className={cn(
          // the shadow effect for the dotted area is configured below
          'size-60 rounded-2xl border border-neutral-200 bg-neutral-100 transition-all duration-200 group-hover:border-neutral-300 group-hover:bg-neutral-200',
          'bg-[radial-gradient(var(--color-neutral-300)_1px,transparent_1px)]',
          '[background-size:10px_10px]',
          'relative shadow-2xl',
          // to make it look 3D
          'perspective-distant',
        )}
      >
        {/* eslint-disable @next/next/no-img-element */}
        <img
          src="https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="avatar"
          className={cn(
            'h-full w-full rounded-2xl object-cover object-top',
            'translate-z-20 rotate-x-30 -rotate-y-30 rotate-z-30 transform',
            // wanna make the animation smoother using tailwind
            'transition-transform duration-200',
            // wanna write your own easing-function
            '[transition-timing-function:cubic-bezier(.4,0,.2,.1)]',
            'group-hover:scale-85 group-hover:rotate-x-0 group-hover:rotate-y-0 group-hover:rotate-z-0',
          )}
        />
      </div>
    </div>
  );
}
