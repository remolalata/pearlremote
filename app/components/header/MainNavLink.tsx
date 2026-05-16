'use client';

import { usePathname } from 'next/navigation';
import { TextLink } from '../ui/TextLink';

type MainNavLinkProps = {
  href: string;
  label: string;
};

export function MainNavLink({ href, label }: MainNavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return <TextLink href={href} isActive={isActive} label={label} />;
}
