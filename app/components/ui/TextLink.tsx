import Link from 'next/link';
import type { ComponentProps } from 'react';

type TextLinkProps = Omit<
  ComponentProps<typeof Link>,
  'children' | 'className'
> & {
  className?: string;
  isActive?: boolean;
  label: string;
  underline?: boolean;
};

export function TextLink({
  className = '',
  isActive = false,
  label,
  underline = true,
  ...linkProps
}: TextLinkProps) {
  const underlineClassName = underline
    ? `pb-1 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-primary after:opacity-0 after:transition-[opacity,transform] after:duration-200 after:ease-out hover:after:scale-x-100 hover:after:opacity-100 ${
        isActive ? 'after:scale-x-100 after:opacity-100' : ''
      }`
    : '';

  return (
    <Link
      {...linkProps}
      aria-current={isActive ? 'page' : undefined}
      className={`text-foreground hover:text-primary relative inline-grid font-normal transition-colors duration-200 ease-out hover:font-semibold ${
        isActive ? 'text-primary font-semibold' : ''
      } ${underlineClassName} ${className}`}
    >
      <span className='col-start-1 row-start-1'>{label}</span>
      <span
        aria-hidden='true'
        className='invisible col-start-1 row-start-1 font-semibold'
      >
        {label}
      </span>
    </Link>
  );
}
