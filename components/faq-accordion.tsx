'use client';

import { useState } from 'react';

type FaqItem = {
  question: string;
  answer: string;
};

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mt-4 divide-y divide-[var(--line)] overflow-hidden rounded-2xl border border-[var(--line)]">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className="bg-white">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-sm font-bold text-ink transition hover:bg-[#fafafa]"
            >
              {item.question}
              <span
                className={`shrink-0 text-lg text-accent transition-transform duration-200 ${
                  isOpen ? 'rotate-45' : ''
                }`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-5 text-sm leading-6 text-[#666]">{item.answer}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}