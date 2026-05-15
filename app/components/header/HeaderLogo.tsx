import Link from 'next/link';

type HeaderLogoProps = {
  href: string;
  label: string;
};

export function HeaderLogo({ href, label }: HeaderLogoProps) {
  return (
    <Link
      href={href}
      aria-label={`${label} home`}
      className='text-lg font-semibold tracking-tight text-slate-950'
    >
      {label}
    </Link>
  );
}
