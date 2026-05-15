import Link from 'next/link';
import { HiMiniComputerDesktop } from 'react-icons/hi2';
import { IoArrowForward, IoShareSocialOutline } from 'react-icons/io5';
import {
  MdOutlineAdminPanelSettings,
  MdOutlineShoppingCart,
  MdOutlineSupportAgent,
} from 'react-icons/md';
import { CoreServiceCard } from '../../../components/home/CoreServiceCard';
import type { CoreServicesProps } from '../../../types/home/sections.types';

const coreServiceIcons = {
  admin: MdOutlineAdminPanelSettings,
  commerce: MdOutlineShoppingCart,
  computer: HiMiniComputerDesktop,
  social: IoShareSocialOutline,
  support: MdOutlineSupportAgent,
};

export function CoreServices({ content }: CoreServicesProps) {
  return (
    <section
      aria-labelledby='core-services-title'
      className='container mx-auto px-10 py-10 lg:py-20'
    >
      <div className='flex items-end justify-between'>
        <div>
          <h2
            id='core-services-title'
            className='font-display text-heading mb-4 text-2xl font-semibold lg:text-3xl'
          >
            {content.heading}
          </h2>
          <p>{content.description}</p>
        </div>
        <Link
          href={content.action.href}
          className='text-primary hidden items-center gap-1 font-bold lg:flex'
        >
          {content.action.label}{' '}
          <IoArrowForward aria-hidden='true' focusable='false' />
        </Link>
      </div>
      <div className='mt-12 lg:mt-20'>
        <ol className='grid grid-cols-1 gap-6 lg:grid-cols-6'>
          {content.items.map((service, index) => {
            const Icon = coreServiceIcons[service.icon];

            return (
              <CoreServiceCard
                key={service.title}
                description={service.description}
                featured={service.featured === true}
                icon={Icon}
                title={service.title}
                wide={index < 2}
              />
            );
          })}
        </ol>
        <Link
          href={content.action.href}
          className='text-primary mx-auto mt-6 flex w-fit items-center justify-center gap-1 text-center font-bold lg:hidden'
        >
          {content.action.label}{' '}
          <IoArrowForward aria-hidden='true' focusable='false' />
        </Link>
      </div>
    </section>
  );
}
