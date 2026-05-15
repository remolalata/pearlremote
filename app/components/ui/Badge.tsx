import type { ReactNode } from 'react';

type BadgeProps = {
  children: ReactNode;
  className?: string;
  full?: boolean;
  icon?: ReactNode;
};

export function Badge({
  children,
  className = '',
  full = false,
  icon,
}: BadgeProps) {
  return (
    <div
      className={`bg-badge-surface text-badge-foreground flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold ${full ? 'w-full' : 'w-fit'} ${className}`}
    >
      {icon}
      {children}
    </div>
  );
}
