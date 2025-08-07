import type { ReactNode } from 'react';
import { cn } from '../../core/utils';

interface TagProps {
  label: string;
  extra?: ReactNode;
  className?: string;
}

export const Tag = ({ label, className, extra }: TagProps) => (
  <span className={cn('px-3 py-1 text-white rounded-full text-sm font-medium capitalize truncate flex items-center gap-2 min-w-0', className)}>
    {extra}
    {label}
  </span>
);
