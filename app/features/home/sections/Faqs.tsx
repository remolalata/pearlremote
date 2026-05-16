'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useId, useState } from 'react';
import { IoChevronDown } from 'react-icons/io5';
import { MotionSection } from '../../../components/layout/MotionSection';
import type { FaqsProps } from '../../../types/home/sections.types';

export function Faqs({ content }: FaqsProps) {
  const answerIdPrefix = useId();
  const [openQuestion, setOpenQuestion] = useState('');
  const shouldReduceMotion = useReducedMotion();
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.items.map(({ answer, question }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };

  return (
    <MotionSection
      aria-labelledby='faqs-title'
      className='container mx-auto px-6 py-10 lg:py-20'
    >
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c'),
        }}
      />
      <h2
        id='faqs-title'
        className='font-display text-heading text-center text-3xl font-semibold'
      >
        {content.heading}
      </h2>
      <div className='mx-auto mt-10 grid max-w-3xl gap-4 lg:mt-20'>
        {content.items.map(({ answer, question }, index) => {
          const isOpen = openQuestion === question;
          const answerId = `${answerIdPrefix}-answer-${index}`;

          return (
            <div
              key={question}
              className='bg-card-surface border-button-border rounded-2xl border p-5'
            >
              <button
                type='button'
                aria-controls={answerId}
                aria-expanded={isOpen}
                onClick={() =>
                  setOpenQuestion((currentQuestion) =>
                    currentQuestion === question ? '' : question
                  )
                }
                className='text-heading flex w-full cursor-pointer items-center justify-between gap-4 text-left font-semibold'
              >
                {question}
                <motion.span
                  aria-hidden='true'
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
                  className='text-primary flex shrink-0'
                >
                  <IoChevronDown focusable='false' />
                </motion.span>
              </button>
              <motion.div
                id={answerId}
                aria-hidden={!isOpen}
                animate={
                  isOpen
                    ? { height: 'auto', opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                initial={false}
                transition={{ duration: shouldReduceMotion ? 0 : 0.24 }}
                className='overflow-hidden'
              >
                <p className='mt-3'>{answer}</p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </MotionSection>
  );
}
