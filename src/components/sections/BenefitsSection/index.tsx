'use client';

import type { ComponentType } from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Target, PiggyBank, TrendingUp, Check } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionTitle } from '@/components/common/SectionTitle';
import { BENEFITS } from '@/constants';

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Shield, Zap, Target, PiggyBank, TrendingUp,
};

export function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900"
      aria-labelledby="benefits-title"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            id="benefits-title"
            badge="Keuntungan"
            title="Mengapa Memilih In-Out Tracker?"
            subtitle="Ribuan pengguna telah merasakan manfaat nyata dari aplikasi ini dalam mengelola keuangan mereka."
          />
        </motion.div>

        <div className="mt-16 flex flex-col gap-12">
          {BENEFITS.map((benefit, index) => {
            const Icon = iconMap[benefit.icon];
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16 ${!isEven ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Visual */}
                <div className="flex-1 flex justify-center">
                  <div className="relative">
                    <div className="h-64 w-64 rounded-[40px] bg-gradient-to-br from-teal-100 to-emerald-100 dark:from-teal-950/50 dark:to-emerald-950/50 flex items-center justify-center">
                      {Icon && (
                        <div className="h-24 w-24 rounded-3xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center shadow-2xl shadow-teal-500/30">
                          <Icon className="h-12 w-12 text-white" />
                        </div>
                      )}
                    </div>

                    {/* Highlight Badge */}
                    {benefit.highlight && (
                      <div className="absolute -top-3 -right-3 rounded-2xl bg-gradient-to-r from-teal-600 to-emerald-600 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-teal-500/30">
                        {benefit.highlight}
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-slate-500 dark:text-slate-400 mb-6">
                    {benefit.description}
                  </p>

                  <ul className="flex flex-col gap-3" aria-label={`Keuntungan ${benefit.title}`}>
                    {['Mudah digunakan', 'Akurat & terpercaya', 'Hemat waktu'].map((point) => (
                      <li key={point} className="flex items-center gap-3">
                        <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/40">
                          <Check className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <span className="text-sm text-slate-600 dark:text-slate-300">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
