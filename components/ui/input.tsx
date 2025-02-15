import * as React from 'react';

import { cn } from '@/lib/utils';
import type { IconType } from 'react-icons/lib';
// import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  Icon?: IconType;
  variant?: 'brand';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, Icon, type, variant, ...props }, ref) => {
  return (
    <div className="relative flex items-center">
      <div className="absolute left-1 flex aspect-square h-[80%] items-center justify-center rounded-full bg-brand">
        {Icon && <Icon className="text-white" />}
      </div>
      <input
        type={type}
        className={cn(
          'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 pl-14 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
          className,
          `${variant === 'brand' && 'rounded-full shadow-none'}`,
        )}
        ref={ref}
        {...props}
      />
    </div>
  );
});
Input.displayName = 'Input';

export { Input };
