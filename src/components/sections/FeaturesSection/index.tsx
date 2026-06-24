'use client';

import type { ComponentType } from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp, TrendingDown, History, BarChart3,
  CalendarDays, Wallet, Tags, Smartphone,
} from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionTitle } from '@/components/common/SectionTitle';
import { FEATURES } from '@/constants';
import { cn } from '@/lib/utils';

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  TrendingUp,
  TrendingDown,
  History,
  BarChart3,
  CalendarDays,
  Wallet,
  Tags,
  Smartphone,
};

const gradients = [
  'from-teal-500 to-emerald-600',
  'from-rose-500 to-pink-600',
  'from-amber-500 to-orange-600',
  'from-emerald-500 to-teal-600',
  'from-blue-500 to-cyan-600',
  'from-purple-500 to-teal-600',
  'from-teal-500 to-emerald-600',
  'from-emerald-500 to-purple-600',
];

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-24 bg-white dark:bg-slate-900"
      aria-labelledby="features-title"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            id="features-title"
            badge="Fitur Unggulan"
            title="Semua yang Anda Butuhkan"
            subtitle="In-Out Tracker hadir dengan fitur lengkap untuk membantu Anda mengelola keuangan pribadi secara cerdas dan efisien."
          />
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            const gradient = gradients[index % gradients.length];

            return (
              <motion.article
                key={feature.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative flex flex-col gap-4 rounded-3xl bg-slate-50 dark:bg-slate-800/50 p-6 hover:bg-white dark:hover:bg-slate-800 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 hover:shadow-xl hover:shadow-slate-200/60 dark:hover:shadow-slate-900/60 transition-all duration-300 cursor-default"
                aria-label={`Fitur: ${feature.title}`}
              >
                {/* Icon */}
                <div
                  className={cn(
                    'flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg transition-transform duration-300 group-hover:scale-110',
                    gradient
                  )}
                  aria-hidden="true"
                >
                  {Icon && <Icon className="h-6 w-6 text-white" />}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Glow */}
                <div
                  className={cn(
                    'pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300',
                    `bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5`
                  )}
                  aria-hidden="true"
                />
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
