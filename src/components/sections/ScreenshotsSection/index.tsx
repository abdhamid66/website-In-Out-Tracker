'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionTitle } from '@/components/common/SectionTitle';

const SCREENS = [
  {
    id: 'home',
    label: 'Beranda',
    bg: 'from-indigo-600 to-violet-700',
    description: 'Dashboard utama dengan ringkasan saldo dan transaksi terbaru',
  },
  {
    id: 'transactions',
    label: 'Transaksi',
    bg: 'from-slate-800 to-slate-900',
    description: 'Daftar lengkap transaksi dengan filter dan pencarian canggih',
  },
  {
    id: 'reports',
    label: 'Laporan',
    bg: 'from-violet-600 to-purple-700',
    description: 'Laporan keuangan visual dengan grafik dan diagram interaktif',
  },
  {
    id: 'categories',
    label: 'Kategori',
    bg: 'from-emerald-600 to-teal-700',
    description: 'Manajemen kategori custom untuk organisasi transaksi yang lebih baik',
  },
];

export function ScreenshotsSection(): JSX.Element {
  const [current, setCurrent] = useState<number>(0);

  const prev = (): void => setCurrent((c) => (c - 1 + SCREENS.length) % SCREENS.length);
  const next = (): void => setCurrent((c) => (c + 1) % SCREENS.length);

  return (
    <section
      id="screenshots"
      className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950"
      aria-labelledby="screenshots-title"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            id="screenshots-title"
            badge="Screenshot Aplikasi"
            title="Intip Tampilan Nyata Aplikasinya"
            subtitle="Lihat setiap halaman In-Out Tracker dengan tampilan yang bersih, modern, dan intuitif."
          />
        </motion.div>

        {/* Carousel */}
        <div className="mt-16 flex flex-col items-center gap-8">
          {/* Phone Display */}
          <div className="relative flex items-center gap-6">
            {/* Prev Button */}
            <button
              onClick={prev}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md hover:border-indigo-300 hover:shadow-indigo-100 dark:hover:border-indigo-700 transition-all duration-200 flex-shrink-0"
              aria-label="Screenshot sebelumnya"
            >
              <ChevronLeft className="h-5 w-5 text-slate-600 dark:text-slate-300" />
            </button>

            {/* Phone Mockups */}
            <div className="relative flex items-center justify-center h-[560px] w-[260px]" aria-live="polite" aria-label="Gallery screenshot aplikasi">
              {/* Background Phones */}
              {[-1, 1].map((offset) => {
                const idx = (current + offset + SCREENS.length) % SCREENS.length;
                const screen = SCREENS[idx];
                return (
                  <div
                    key={screen.id}
                    className={`absolute ${offset === -1 ? '-left-16 -rotate-6' : '-right-16 rotate-6'} h-[500px] w-[230px] rounded-[44px] bg-slate-800 p-3 opacity-40 scale-90 shadow-xl transition-all duration-500`}
                    aria-hidden="true"
                  >
                    <div className={`h-full w-full rounded-[36px] bg-gradient-to-b ${screen.bg}`} />
                  </div>
                );
              })}

              {/* Main Phone */}
              <div className="relative h-[540px] w-[260px] rounded-[44px] bg-slate-900 p-3 shadow-2xl shadow-slate-900/40 ring-1 ring-slate-700/50 z-10">
                {/* Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 h-6 w-20 rounded-full bg-slate-800 z-20" aria-hidden="true" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.35 }}
                    className={`h-full w-full rounded-[36px] bg-gradient-to-b ${SCREENS[current].bg} overflow-hidden`}
                    aria-label={`Screenshot: ${SCREENS[current].label}`}
                  >
                    {/* Screen Content */}
                    <div className="pt-10 px-4 pb-4 h-full flex flex-col">
                      <div className="mb-4">
                        <div className="h-3 w-24 rounded-full bg-white/30 mb-2" aria-hidden="true" />
                        <div className="h-6 w-36 rounded-full bg-white/50" aria-hidden="true" />
                      </div>

                      <div className="rounded-2xl bg-white/20 p-3 border border-white/20 mb-3">
                        <div className="h-3 w-16 rounded-full bg-white/40 mb-2" aria-hidden="true" />
                        <div className="h-8 w-28 rounded-full bg-white/60 mb-3" aria-hidden="true" />
                        <div className="flex gap-2">
                          <div className="flex-1 h-12 rounded-xl bg-white/20" aria-hidden="true" />
                          <div className="flex-1 h-12 rounded-xl bg-white/20" aria-hidden="true" />
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 flex-1">
                        {[1,2,3,4,5].map(i => (
                          <div key={i} className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                            <div>
                              <div className="h-3 w-20 rounded-full bg-white/40 mb-1" aria-hidden="true" />
                              <div className="h-2 w-12 rounded-full bg-white/20" aria-hidden="true" />
                            </div>
                            <div className={`h-4 w-16 rounded-full ${i % 2 === 0 ? 'bg-rose-400/60' : 'bg-emerald-400/60'}`} aria-hidden="true" />
                          </div>
                        ))}
                      </div>

                      {/* Bottom Nav */}
                      <div className="flex justify-around pt-3 border-t border-white/20 mt-2">
                        {['🏠','💳','📊','⚙️'].map((icon, i) => (
                          <div key={i} className={`h-8 w-8 flex items-center justify-center rounded-xl ${i === 0 ? 'bg-white/30' : ''}`} aria-hidden="true">
                            <span className="text-sm">{icon}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={next}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md hover:border-indigo-300 hover:shadow-indigo-100 dark:hover:border-indigo-700 transition-all duration-200 flex-shrink-0"
              aria-label="Screenshot berikutnya"
            >
              <ChevronRight className="h-5 w-5 text-slate-600 dark:text-slate-300" />
            </button>
          </div>

          {/* Description */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                {SCREENS[current].label}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm">
                {SCREENS[current].description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex gap-2" role="tablist" aria-label="Navigasi screenshot">
            {SCREENS.map((s, i) => (
              <button
                key={s.id}
                role="tab"
                aria-selected={i === current}
                aria-label={`Screenshot ${s.label}`}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? 'w-8 bg-indigo-500'
                    : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600'
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
