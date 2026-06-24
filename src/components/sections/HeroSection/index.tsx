'use client';

import { motion } from 'framer-motion';
import { Download, Star, ArrowDown } from 'lucide-react';
import { Button } from '@/components/common/Button';
import { Container } from '@/components/common/Container';
import { Badge } from '@/components/common/Badge';
import { PLAYSTORE_URL, APK_URL } from '@/constants';

export function HeroSection(): JSX.Element {
  const handleScrollToFeatures = (): void => {
    document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 via-indigo-50/30 to-white dark:from-slate-950 dark:via-indigo-950/20 dark:to-slate-900 pt-16 lg:pt-20"
      aria-label="Halaman utama In-Out Tracker"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-emerald-500/5 blur-3xl" />
      </div>

      <Container>
        <div className="relative flex min-h-[calc(100vh-80px)] flex-col items-center justify-center py-20 lg:flex-row lg:justify-between lg:gap-12">
          {/* Text Content */}
          <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left lg:max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="success">
                <Star className="h-3 w-3 fill-current" />
                4.9 Rating di Play Store
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Kendalikan{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Keuangan Anda
              </span>{' '}
              dengan Mudah
            </motion.h1>

            <motion.p
              className="max-w-lg text-lg leading-relaxed text-slate-500 dark:text-slate-400"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              In-Out Tracker membantu Anda mencatat pemasukan dan pengeluaran, memantau saldo,
              dan menganalisis keuangan pribadi dengan antarmuka yang intuitif dan modern.
            </motion.p>

            {/* Stats Row */}
            <motion.div
              className="flex items-center gap-6 text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {[
                { value: '10K+', label: 'Pengguna Aktif' },
                { value: '50K+', label: 'Transaksi' },
                { value: '100%', label: 'Gratis' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center lg:items-start">
                  <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                    {stat.value}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">{stat.label}</span>
                </div>
              ))}
            </motion.div>

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

          {/* Phone Mockup */}
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
              {/* Phone Frame */}
              <div className="relative mx-auto h-[580px] w-[280px] rounded-[48px] bg-slate-900 p-3 shadow-2xl shadow-slate-900/40 ring-1 ring-slate-700/50">
                {/* Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 h-6 w-20 rounded-full bg-slate-800 z-10" aria-hidden="true" />
                
                {/* Screen */}
                <div className="h-full w-full overflow-hidden rounded-[40px] bg-gradient-to-b from-indigo-600 to-violet-700">
                  {/* Status Bar */}
                  <div className="flex items-center justify-between px-6 pt-8 pb-4">
                    <span className="text-xs text-white/80 font-medium">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="h-2 w-2 rounded-full bg-white/80" />
                      <div className="h-2 w-2 rounded-full bg-white/80" />
                      <div className="h-2 w-2 rounded-full bg-white/80" />
                    </div>
                  </div>

                  {/* App Header */}
                  <div className="px-5 pb-4">
                    <p className="text-white/70 text-xs">Selamat datang,</p>
                    <h2 className="text-white text-lg font-bold">Budi Santoso 👋</h2>
                  </div>

                  {/* Balance Card */}
                  <div className="mx-4 rounded-3xl bg-white/20 backdrop-blur-sm p-4 border border-white/20">
                    <p className="text-white/70 text-xs mb-1">Total Saldo</p>
                    <p className="text-white text-2xl font-bold">Rp 4.250.000</p>
                    <div className="mt-3 flex gap-3">
                      <div className="flex-1 rounded-2xl bg-white/20 p-2.5">
                        <p className="text-white/60 text-xs">Pemasukan</p>
                        <p className="text-emerald-300 text-sm font-semibold">+Rp 7.5Jt</p>
                      </div>
                      <div className="flex-1 rounded-2xl bg-white/20 p-2.5">
                        <p className="text-white/60 text-xs">Pengeluaran</p>
                        <p className="text-rose-300 text-sm font-semibold">-Rp 3.25Jt</p>
                      </div>
                    </div>
                  </div>

                  {/* Recent Transactions */}
                  <div className="mx-4 mt-4">
                    <p className="text-white/70 text-xs mb-3">Transaksi Terbaru</p>
                    {[
                      { name: 'Gaji Bulanan', cat: 'Pemasukan', amount: '+5.000.000', color: 'text-emerald-300' },
                      { name: 'Makan Siang', cat: 'Makanan', amount: '-35.000', color: 'text-rose-300' },
                      { name: 'Freelance', cat: 'Pemasukan', amount: '+2.500.000', color: 'text-emerald-300' },
                    ].map((tx, i) => (
                      <div key={i} className="flex items-center justify-between py-2 border-b border-white/10 last:border-0">
                        <div>
                          <p className="text-white text-xs font-medium">{tx.name}</p>
                          <p className="text-white/50 text-xs">{tx.cat}</p>
                        </div>
                        <span className={`text-xs font-semibold ${tx.color}`}>{tx.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Cards */}
            <motion.div
              className="absolute -left-12 top-16 rounded-2xl bg-white dark:bg-slate-800 p-3 shadow-xl border border-slate-100 dark:border-slate-700"
              animate={{ y: [0, 8, 0], rotate: [-2, 0, -2] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              aria-hidden="true"
            >
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <span className="text-base">📈</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-700 dark:text-slate-200">+Rp 5Jt</p>
                  <p className="text-xs text-slate-400">Pemasukan</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -right-10 bottom-24 rounded-2xl bg-white dark:bg-slate-800 p-3 shadow-xl border border-slate-100 dark:border-slate-700"
              animate={{ y: [0, -8, 0], rotate: [2, 0, 2] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              aria-hidden="true"
            >
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-xl bg-indigo-100 flex items-center justify-center">
                  <span className="text-base">📊</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-700 dark:text-slate-200">Laporan</p>
                  <p className="text-xs text-emerald-500">Sudah dianalisis</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 hover:text-indigo-500 transition-colors"
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
