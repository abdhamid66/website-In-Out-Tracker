'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { Container } from '@/components/common/Container';
import { SectionTitle } from '@/components/common/SectionTitle';

const SCREENS = [
  {
    id: 'home',
    label: 'Beranda',
    src: '/screenshots/home.png',
    description: 'Dashboard utama dengan ringkasan saldo dan transaksi terbaru',
  },
  {
    id: 'reports',
    label: 'Statistik',
    src: '/screenshots/statistics.png',
    description: 'Laporan keuangan visual dengan grafik dan diagram interaktif',
  },
  {
    id: 'categories',
    label: 'Kategori',
    src: '/screenshots/categories.png',
    description: 'Manajemen kategori custom untuk organisasi transaksi yang lebih baik',
  },
  {
    id: 'settings',
    label: 'Pengaturan',
    src: '/screenshots/settings.png',
    description: 'Atur profil, anggaran bulanan, dan backup data ke Cloud',
  },
];

export function ScreenshotsSection() {
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
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md hover:border-teal-300 hover:shadow-teal-100 dark:hover:border-teal-700 transition-all duration-200 flex-shrink-0"
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
                    <div className="h-full w-full rounded-[36px] bg-slate-100 overflow-hidden relative">
                      <Image
                        src={screen.src}
                        alt={screen.label}
                        fill
                        className="object-cover"
                      />
                    </div>
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
                    className="h-full w-full rounded-[36px] bg-slate-100 overflow-hidden relative"
                    aria-label={`Screenshot: ${SCREENS[current].label}`}
                  >
                    <Image
                      src={SCREENS[current].src}
                      alt={SCREENS[current].label}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={next}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md hover:border-teal-300 hover:shadow-teal-100 dark:hover:border-teal-700 transition-all duration-200 flex-shrink-0"
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
                    ? 'w-8 bg-teal-500'
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
