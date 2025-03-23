import React from 'react';
import { cn } from '../../utils';
export default function Button({ children, className, ...props }) {
  return (
    <button
      className={cn(
        'h-12 flex items-center justify-center font-bold font-league-spartan text-white cursor-pointer',
        className
      )}
      {...props}>
      {children}
    </button>
  );
}
