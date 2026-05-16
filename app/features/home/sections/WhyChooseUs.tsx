import Image from 'next/image';
import { BiTachometer } from 'react-icons/bi';
import { GrShield } from 'react-icons/gr';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';
import { PiPiggyBank } from 'react-icons/pi';
import { MotionSection } from '../../../components/layout/MotionSection';
import type { WhyChooseUsProps } from '../../../types/home/sections.types';

const reasonIcons = {
  check: IoCheckmarkDoneSharp,
  savings: PiPiggyBank,
  shield: GrShield,
  speed: BiTachometer,
};

export function WhyChooseUs({ content }: WhyChooseUsProps) {
  return (
    <MotionSection
      aria-labelledby='why-choose-us-title'
      className='bg-why-section-surface text-page-surface'
    >
      <div className='container mx-auto flex items-stretch justify-between gap-10 px-6 py-10 lg:py-20 xl:gap-20'>
        <figure className='bg-why-visual-surface relative hidden w-full overflow-hidden rounded-4xl lg:block lg:flex-1'>
          <Image
            src={content.image.src}
            alt={content.image.alt}
            fill
            sizes='(max-width: 1024px) 100vw, 50vw'
            className='object-contain object-center'
          />
        </figure>
        <div className='lg:flex-1'>
          <h2
            id='why-choose-us-title'
            className='font-display mb-6 text-3xl font-semibold'
          >
            {content.heading}
          </h2>
          <ol className='flex flex-col gap-4'>
            {content.reasons.map(({ description, icon, title }) => {
              const Icon = reasonIcons[icon];

              return (
                <li
                  key={title}
                  className='flex gap-6 px-0 py-2 lg:px-4 lg:py-4'
                >
                  <div
                    aria-hidden='true'
                    className='bg-primary flex h-10 min-w-10 items-center justify-center rounded-full'
                  >
                    <Icon aria-hidden='true' focusable='false' />
                  </div>
                  <div>
                    <h3 className='mb-1 font-bold'>{title}</h3>
                    <p className='text-why-copy-muted'>{description}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </MotionSection>
  );
}
