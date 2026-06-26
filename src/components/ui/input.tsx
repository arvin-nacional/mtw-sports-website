import { cn } from '@/utilities/ui'
import * as React from 'react'

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  type,
  ...props
}) => {
  return (
    <input
      data-slot="input"
      className={cn(
        'border-input placeholder:text-on-surface-variant selection:bg-secondary selection:text-on-secondary focus:border-secondary focus:ring-2 focus:ring-secondary/20 flex h-10 w-full min-w-0 rounded border bg-surface-container-lowest px-3 py-2 text-body-md text-on-surface transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      type={type}
      {...props}
    />
  )
}

export { Input }
