import headerContent from '../../content/header.json';
import { HeaderActions } from './HeaderActions';
import { HeaderLogo } from './HeaderLogo';
import { HeaderMobileMenu } from './HeaderMobileMenu';
import { HeaderNav } from './HeaderNav';

export function Header() {
  return (
    <header className='relative border-b border-[#FDF7FF] bg-white shadow-xs'>
      <div className='mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4'>
        <HeaderLogo
          href={headerContent.logo.href}
          label={headerContent.logo.label}
        />

        <div className='hidden items-center gap-6 md:flex'>
          <HeaderNav items={headerContent.navigation} />
          <HeaderActions
            bookCall={headerContent.actions.bookCall}
            hireStaff={headerContent.actions.hireStaff}
          />
        </div>

        <HeaderMobileMenu
          actions={headerContent.actions}
          items={headerContent.navigation}
        />
      </div>
    </header>
  );
}
