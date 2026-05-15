import Link from 'next/link';
import type { ButtonHTMLAttributes } from 'react';
import type { ComponentProps } from 'react';

type ButtonVariant = 'black' | 'primary' | 'white' | 'transparent';

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
  label: string;
  variant?: ButtonVariant;
};

type ButtonLinkProps = Omit<
  ComponentProps<typeof Link>,
  'children' | 'className'
> & {
  className?: string;
  label: string;
  variant?: ButtonVariant;
};

const buttonVariants: Record<ButtonVariant, string> = {
  black:
    'bg-button-black text-button-white shadow-sm hover:bg-button-black-hover hover:shadow-md active:bg-heading',
  primary:
    'bg-primary text-button-white shadow-sm hover:bg-primary-dark hover:shadow-md active:bg-primary-darker',
  white:
    'border border-button-border bg-button-white text-heading shadow-sm hover:border-button-border-hover hover:bg-primary-surface hover:text-primary hover:shadow-md active:bg-primary-surface-hover',
  transparent:
    'bg-transparent text-primary hover:bg-primary-surface hover:text-primary active:bg-primary-surface-hover',
};

function getButtonClassName(variant: ButtonVariant, className: string) {
  return `focus-visible:ring-primary cursor-pointer rounded-xl px-6 py-3 font-semibold transition-[background-color,border-color,color,box-shadow] duration-200 ease-out focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 ${buttonVariants[variant]} ${className}`;
}

export function Button({
  className = '',
  label,
  variant = 'black',
  type = 'button',
  ...buttonProps
}: ButtonProps) {
  return (
    <button
      {...buttonProps}
      type={type}
      className={getButtonClassName(variant, className)}
    >
      {label}
    </button>
  );
}

export function ButtonLink({
  className = '',
  label,
  variant = 'black',
  ...linkProps
}: ButtonLinkProps) {
  return (
    <Link {...linkProps} className={getButtonClassName(variant, className)}>
      {label}
    </Link>
  );
}
