'use client';

import { motion } from 'framer-motion';
import { Download, ArrowDown } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/common/Button';
import { Container } from '@/components/common/Container';
import { PLAYSTORE_URL, APK_URL } from '@/constants';

export function HeroSection() {
  const handleScrollToFeatures = (): void => {
    document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 via-teal-50/30 to-white dark:from-slate-950 dark:via-teal-950/20 dark:to-slate-900 pt-16 lg:pt-20"
      aria-label="Halaman utama In-Out Tracker"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-teal-500/5 blur-3xl" />
      </div>

      <Container>
        <div className="relative flex min-h-[calc(100vh-80px)] flex-col items-center justify-center py-20 lg:flex-row lg:justify-between lg:gap-12">
          {/* Text Content */}
          <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left lg:max-w-xl">
            <motion.h1
              className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Kelola{' '}
              <span className="bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent">
                Keuangan Anda
              </span>{' '}
              Lebih Cerdas
            </motion.h1>

            <motion.p
              className="max-w-lg text-lg leading-relaxed text-slate-500 dark:text-slate-400"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              In-Out Tracker membantu Anda mencatat pemasukan dan pengeluaran, memantau saldo,
              dan menganalisis keuangan pribadi dengan antarmuka yang intuitif dan mudah dipahami.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col gap-3 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                size="lg"
                onClick={() => window.open(PLAYSTORE_URL, '_blank')}
                leftIcon={<Download className="h-5 w-5" />}
                aria-label="Download In-Out Tracker di Google Play Store"
              >
                Google Play Store
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open(APK_URL, '_blank')}
                leftIcon={<Download className="h-5 w-5" />}
                aria-label="Download file APK In-Out Tracker"
              >
                Download APK
              </Button>
            </motion.div>

            <motion.p
              className="text-xs text-slate-400 dark:text-slate-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Gratis sepenuhnya • Tanpa iklan • Privasi terjaga
            </motion.p>
          </div>

          <motion.div
            className="relative mt-12 lg:mt-0 lg:flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="relative mx-auto h-[560px] w-[260px] rounded-[44px] bg-slate-900 p-3 shadow-2xl shadow-slate-900/40 ring-1 ring-slate-700/50">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 h-6 w-20 rounded-full bg-slate-800 z-10" aria-hidden="true" />
                <div className="h-full w-full overflow-hidden rounded-[36px] bg-slate-100 relative">
                  <Image 
                    src="/screenshots/home.png" 
                    alt="Beranda In-Out Tracker" 
                    fill 
                    className="object-cover" 
                    priority 
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 hover:text-teal-600 transition-colors"
        onClick={handleScrollToFeatures}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll ke bagian fitur"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Jelajahi</span>
        <ArrowDown className="h-4 w-4" />
      </motion.button>
    </section>
  );
}
