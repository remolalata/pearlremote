import { FaUsers } from 'react-icons/fa';
import { PiChatBold } from 'react-icons/pi';
import { MdOutlineRocketLaunch } from 'react-icons/md';
import type { HowItWorksProps } from '../../../types/home/sections.types';

const processStepIcons = {
  chat: PiChatBold,
  staff: FaUsers,
  launch: MdOutlineRocketLaunch,
};

export function HowItWorks({ content }: HowItWorksProps) {
  return (
    <section
      aria-labelledby='how-it-works-title'
      className='bg-section-surface'
    >
      <div className='container mx-auto px-6 py-10 lg:py-20'>
        <h2
          id='how-it-works-title'
          className='font-display text-heading mb-4 text-center text-2xl font-semibold lg:text-3xl'
        >
          {content.heading}
        </h2>
        <p className='text-center'>{content.description}</p>
        <div className='mt-12 lg:mt-20'>
          <ol className='grid gap-6 lg:grid-cols-3'>
            {content.steps.map((step, index) => {
              const Icon = processStepIcons[step.icon];
              const stepNumber = index + 1;

              return (
                <li
                  key={step.title}
                  className='bg-card-surface relative flex flex-col gap-6 overflow-hidden rounded-3xl p-8 lg:p-12'
                >
                  <div
                    aria-hidden='true'
                    className='bg-step-icon-surface flex h-12 w-12 items-center justify-center rounded-xl'
                  >
                    <Icon
                      aria-hidden='true'
                      className='text-step-icon-foreground text-xl'
                      focusable='false'
                    />
                  </div>
                  <div className='relative z-10'>
                    <h3 className='font-display text-heading mb-2 text-2xl font-semibold'>
                      {step.title}
                    </h3>
                    <p>{step.description}</p>
                  </div>
                  <span className='sr-only'>Step {stepNumber}</span>
                  <span
                    aria-hidden='true'
                    className='text-step-number absolute top-4 -right-4 text-9xl font-black'
                  >
                    {stepNumber}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
