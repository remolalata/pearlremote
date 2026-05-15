import { MainNavLink } from './MainNavLink';

type HeaderNavItem = {
  href: string;
  label: string;
};

type HeaderNavProps = {
  items: HeaderNavItem[];
};

export function HeaderNav({ items }: HeaderNavProps) {
  return (
    <nav aria-label='Main navigation' className='flex flex-wrap gap-6'>
      {items.map((item) => (
        <MainNavLink key={item.href} href={item.href} label={item.label} />
      ))}
    </nav>
  );
}
