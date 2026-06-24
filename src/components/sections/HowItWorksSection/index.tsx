'use client';

import type { ComponentType } from 'react';
import { motion } from 'framer-motion';
import { PlusCircle, MinusCircle, LayoutDashboard, FileBarChart } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionTitle } from '@/components/common/SectionTitle';
import { HOW_IT_WORKS } from '@/constants';

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  PlusCircle, MinusCircle, LayoutDashboard, FileBarChart,
};

export function HowItWorksSection(): JSX.Element {
  return (
    <section
      id="how-it-works"
      className="py-24 bg-white dark:bg-slate-900"
      aria-labelledby="how-it-works-title"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            id="how-it-works-title"
            badge="Cara Kerja"
            title="Mulai dalam 4 Langkah Mudah"
            subtitle="Tidak perlu keahlian khusus. In-Out Tracker dirancang agar siapapun bisa langsung menggunakannya dalam hitungan menit."
          />
        </motion.div>

        <div className="mt-16 relative">
          {/* Connection Line (Desktop) */}
          <div
            className="absolute top-[60px] left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-200 via-violet-300 to-indigo-200 dark:from-indigo-800 dark:via-violet-700 dark:to-indigo-800 hidden lg:block mx-20"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {HOW_IT_WORKS.map((step, index) => {
              const Icon = iconMap[step.icon];

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex flex-col items-center text-center gap-5 relative"
                >
                  {/* Step Number + Icon */}
                  <div className="relative">
                    <div className="flex h-[120px] w-[120px] items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-violet-700 shadow-2xl shadow-indigo-500/30 relative z-10">
                      {Icon && <Icon className="h-10 w-10 text-white" />}
                    </div>
                    <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-slate-900 border-2 border-indigo-500 shadow-md z-20">
                      <span className="text-sm font-bold text-indigo-600">{step.step}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
