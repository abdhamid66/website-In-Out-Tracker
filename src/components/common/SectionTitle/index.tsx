import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  id?: string;
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  children?: ReactNode;
}

export function SectionTitle({
  id,
  badge,
  title,
  subtitle,
  align = 'center',
  className,
  titleClassName,
  subtitleClassName,
  children,
}: SectionTitleProps): JSX.Element {
  const alignStyles = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right',
  };

  return (
    <div className={cn('flex flex-col gap-4', alignStyles[align], className)}>
      {badge && (
        <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-semibold text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
          {badge}
        </span>
      )}
      <h2
        id={id}
        className={cn(
          'text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl',
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'max-w-2xl text-lg leading-relaxed text-slate-500 dark:text-slate-400',
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}
