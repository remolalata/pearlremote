'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ButtonLink } from '../ui/Button';
import { TextLink } from '../ui/TextLink';
import { IoClose, IoMenu } from 'react-icons/io5';

type HeaderMobileNavItem = {
  href: string;
  label: string;
};

type HeaderMobileMenuProps = {
  actions: {
    bookCall: {
      href: string;
      label: string;
    };
    hireStaff: {
      href: string;
      label: string;
    };
  };
  items: HeaderMobileNavItem[];
};

export function HeaderMobileMenu({ actions, items }: HeaderMobileMenuProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const iconMotion = shouldReduceMotion
    ? { initial: false, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0, rotate: -90, scale: 0.85 },
        animate: { opacity: 1, rotate: 0, scale: 1 },
        exit: { opacity: 0, rotate: 90, scale: 0.85 },
      };

  const panelMotion = shouldReduceMotion
    ? { initial: false, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0, y: -8 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -8 },
      };

  return (
    <div className='md:hidden'>
      <button
        type='button'
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        aria-controls='mobile-menu'
        onClick={() => setIsOpen((current) => !current)}
        className='focus-visible:ring-primary inline-flex h-11 w-11 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-xl focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none'
      >
        <AnimatePresence mode='wait' initial={false}>
          <motion.span
            key={isOpen ? 'close-menu' : 'open-menu'}
            {...iconMotion}
            transition={{ duration: 0.16, ease: 'easeOut' }}
          >
            {isOpen ? (
              <IoClose aria-hidden='true' className='text-heading h-5 w-5' />
            ) : (
              <IoMenu aria-hidden='true' className='text-heading h-5 w-5' />
            )}
          </motion.span>
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            id='mobile-menu'
            key='mobile-menu'
            {...panelMotion}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className='border-page-surface absolute top-full right-0 left-0 z-50 border-b bg-white px-6 py-6 shadow-lg'
          >
            <nav aria-label='Mobile navigation' className='grid gap-5'>
              {items.map((item) => (
                <TextLink
                  key={item.href}
                  href={item.href}
                  isActive={pathname === item.href}
                  label={item.label}
                  onClick={() => setIsOpen(false)}
                  className='w-fit'
                />
              ))}
            </nav>
            <div className='border-button-border mt-8 grid gap-4 border-t pt-6'>
              <TextLink
                href={actions.bookCall.href}
                label={actions.bookCall.label}
                underline={false}
                onClick={() => setIsOpen(false)}
                className='w-fit'
              />
              <ButtonLink
                href={actions.hireStaff.href}
                label={actions.hireStaff.label}
                onClick={() => setIsOpen(false)}
                className='w-full text-center'
              />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
