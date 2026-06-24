'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { STATISTICS } from '@/constants';
import { useCounter } from '@/hooks/useCounter';

interface StatCardProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description: string;
  enabled: boolean;
  index: number;
}

function StatCard({ value, suffix, prefix, label, description, enabled, index }: StatCardProps) {
  const count = useCounter({ end: value, duration: 2500, enabled });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center gap-2 text-center p-6"
      aria-label={`${label}: ${prefix || ''}${value}${suffix || ''}`}
    >
      <div className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
        {prefix && <span>{prefix}</span>}
        {count.toLocaleString('id-ID')}
        {suffix && <span className="text-teal-300">{suffix}</span>}
      </div>
      <div className="mt-1">
        <p className="text-lg font-semibold text-white/90">{label}</p>
        <p className="text-sm text-white/50">{description}</p>
      </div>
    </motion.div>
  );
}

export function StatisticsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="statistics"
      ref={ref}
      className="py-24 relative overflow-hidden bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900"
      aria-labelledby="statistics-title"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-emerald-600/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-teal-400/20 blur-3xl" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle at 25% 50%, rgba(99,102,241,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 50%, rgba(139,92,246,0.3) 0%, transparent 50%)',
          }}
        />
      </div>

      <Container className="relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/80 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
            Statistik Kami
          </span>
          <h2
            id="statistics-title"
            className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
          >
            Dipercaya Ribuan Pengguna
          </h2>
          <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
            Bergabunglah dengan komunitas pengguna In-Out Tracker yang terus berkembang setiap harinya.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 divide-x divide-y divide-white/10 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 lg:grid-cols-4 lg:divide-y-0">
          {STATISTICS.map((stat, index) => (
            <StatCard
              key={stat.id}
              value={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix}
              label={stat.label}
              description={stat.description}
              enabled={isInView}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
