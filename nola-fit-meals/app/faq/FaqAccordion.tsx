"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: FaqItem[];
}

export default function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;

        return (
          <div
            key={i}
            className={`rounded-lg border transition-colors ${
              isOpen
                ? "border-brand-gold/60 bg-brand-card"
                : "border-brand-gold/20 bg-brand-card hover:border-brand-gold/40"
            }`}
          >
            <button
              className="w-full flex items-center justify-between px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-lg"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-inter text-brand-white text-sm sm:text-base font-medium pr-4">
                {faq.question}
              </span>
              <span
                className={`flex-shrink-0 w-6 h-6 rounded-full border border-brand-gold flex items-center justify-center transition-transform duration-200 ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden="true"
              >
                <svg
                  className="w-3 h-3 text-brand-gold"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="6" y1="1" x2="6" y2="11" />
                  <line x1="1" y1="6" x2="11" y2="6" />
                </svg>
              </span>
            </button>

            {isOpen && (
              <div className="px-5 pb-4">
                <div className="h-px bg-brand-gold/20 mb-3" />
                {faq.answer.split("\n").map((line, idx) => (
                  <p
                    key={idx}
                    className="font-inter text-brand-muted text-sm leading-relaxed mb-2 last:mb-0"
                  >
                    {line}
                  </p>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
