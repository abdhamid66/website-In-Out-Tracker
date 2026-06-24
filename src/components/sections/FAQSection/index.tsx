'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionTitle } from '@/components/common/SectionTitle';
import { FAQS } from '@/constants';
import { cn } from '@/lib/utils';

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string): void => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="py-24 bg-white dark:bg-slate-900"
      aria-labelledby="faq-title"
    >
      <Container size="md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            id="faq-title"
            badge="FAQ"
            title="Pertanyaan yang Sering Diajukan"
            subtitle="Temukan jawaban atas pertanyaan umum tentang In-Out Tracker. Tidak menemukan jawaban yang Anda cari? Hubungi tim kami."
          />
        </motion.div>

        <div
          className="mt-12 flex flex-col gap-3"
          role="region"
          aria-label="Pertanyaan yang sering diajukan"
        >
          {FAQS.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div
                className={cn(
                  'rounded-2xl border transition-all duration-200',
                  openId === faq.id
                    ? 'border-teal-200 bg-teal-50/50 dark:border-teal-700/50 dark:bg-teal-950/20 shadow-sm'
                    : 'border-slate-100 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-800/30 hover:border-slate-200 dark:hover:border-slate-700'
                )}
              >
                <button suppressHydrationWarning
                  onClick={() => toggle(faq.id)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={openId === faq.id}
                  aria-controls={`faq-answer-${faq.id}`}
                  id={`faq-btn-${faq.id}`}
                >
                  <span className="text-sm font-semibold text-slate-900 dark:text-white sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 flex-shrink-0 text-slate-400 transition-transform duration-300',
                      openId === faq.id ? 'rotate-180 text-teal-500' : ''
                    )}
                    aria-hidden="true"
                  />
                </button>

                <AnimatePresence initial={false}>
                  {openId === faq.id && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      role="region"
                      aria-labelledby={`faq-btn-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5">
                        <div className="h-px bg-teal-100 dark:bg-teal-800/50 mb-4" aria-hidden="true" />
                        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                          {faq.answer}
                        </p>
                        {faq.category && (
                          <span className="mt-3 inline-block rounded-full bg-teal-100 dark:bg-teal-900/40 px-3 py-0.5 text-xs font-medium text-teal-600 dark:text-teal-400">
                            {faq.category}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Still have questions? */}
        <motion.div
          className="mt-10 text-center rounded-3xl bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-950/30 dark:to-emerald-950/30 border border-teal-100 dark:border-teal-800/30 p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-slate-600 dark:text-slate-300 mb-3">
            Masih punya pertanyaan lain?
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 font-semibold hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
          >
            Hubungi Tim Support Kami →
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
