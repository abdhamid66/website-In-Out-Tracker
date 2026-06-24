'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { SectionTitle } from '@/components/common/SectionTitle';

const SCREENS = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    emoji: '📊',
    bgFrom: 'from-teal-600',
    bgTo: 'to-emerald-700',
    content: {
      title: 'Dashboard Utama',
      subtitle: 'Semua informasi keuangan dalam satu tampilan',
      balance: 'Rp 4.250.000',
      income: '+Rp 7.500.000',
      expense: '-Rp 3.250.000',
      items: [
        { name: 'Gaji Bulanan', cat: 'Pemasukan', amount: '+Rp 5.000.000', positive: true },
        { name: 'Makan Siang', cat: 'Makanan', amount: '-Rp 35.000', positive: false },
        { name: 'Freelance', cat: 'Pemasukan', amount: '+Rp 2.500.000', positive: true },
        { name: 'Bensin', cat: 'Transportasi', amount: '-Rp 150.000', positive: false },
      ],
    },
  },
  {
    id: 'expense',
    label: 'Pengeluaran',
    emoji: '💸',
    bgFrom: 'from-rose-600',
    bgTo: 'to-pink-700',
    content: {
      title: 'Lacak Pengeluaran',
      subtitle: 'Pantau setiap pengeluaran dengan detail',
      balance: 'Rp 3.250.000',
      income: 'Total bulan ini',
      expense: '24 transaksi',
      items: [
        { name: 'Belanja Bulanan', cat: 'Kebutuhan', amount: '-Rp 800.000', positive: false },
        { name: 'Listrik & Air', cat: 'Tagihan', amount: '-Rp 350.000', positive: false },
        { name: 'Makan Siang', cat: 'Makanan', amount: '-Rp 35.000', positive: false },
        { name: 'Transportasi', cat: 'Bensin', amount: '-Rp 150.000', positive: false },
      ],
    },
  },
  {
    id: 'income',
    label: 'Pemasukan',
    emoji: '💰',
    bgFrom: 'from-emerald-600',
    bgTo: 'to-teal-700',
    content: {
      title: 'Lacak Pemasukan',
      subtitle: 'Catat semua sumber penghasilan Anda',
      balance: 'Rp 7.500.000',
      income: 'Total bulan ini',
      expense: '5 sumber',
      items: [
        { name: 'Gaji Bulanan', cat: 'Pekerjaan', amount: '+Rp 5.000.000', positive: true },
        { name: 'Freelance Design', cat: 'Freelance', amount: '+Rp 2.500.000', positive: true },
        { name: 'Cashback', cat: 'Bonus', amount: '+Rp 50.000', positive: true },
        { name: 'Investasi', cat: 'Dividen', amount: '+Rp 150.000', positive: true },
      ],
    },
  },
];

export function AppMockupSection() {
  const [activeScreen, setActiveScreen] = useState<string>('dashboard');
  const screen = SCREENS.find((s) => s.id === activeScreen) || SCREENS[0];

  return (
    <section
      id="app-mockup"
      className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950"
      aria-labelledby="app-mockup-title"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            id="app-mockup-title"
            badge="Tampilan Aplikasi"
            title="Lihat Aplikasinya Secara Langsung"
            subtitle="Jelajahi tampilan nyata In-Out Tracker dan rasakan kemudahannya sebelum mengunduh."
          />
        </motion.div>

        <div className="mt-16 flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          {/* Tab Selector */}
          <div className="flex flex-col gap-8 lg:flex-1">
            {/* Tabs */}
            <div className="flex gap-2 rounded-2xl bg-slate-100 dark:bg-slate-800 p-1.5" role="tablist" aria-label="Pilih tampilan aplikasi">
              {SCREENS.map((s) => (
                <button suppressHydrationWarning
                  key={s.id}
                  role="tab"
                  aria-selected={activeScreen === s.id}
                  aria-controls={`panel-${s.id}`}
                  onClick={() => setActiveScreen(s.id)}
                  className={`flex-1 rounded-xl py-2.5 text-sm font-semibold transition-all duration-200 ${
                    activeScreen === s.id
                      ? 'bg-white dark:bg-slate-700 text-teal-600 dark:text-teal-400 shadow-sm'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                  }`}
                >
                  <span className="mr-1.5">{s.emoji}</span>
                  {s.label}
                </button>
              ))}
            </div>

            {/* Feature List */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeScreen}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                role="tabpanel"
                id={`panel-${activeScreen}`}
                className="flex flex-col gap-4"
              >
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {screen.content.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400">{screen.content.subtitle}</p>

                <ul className="flex flex-col gap-3 mt-2">
                  {[
                    'Tampilan yang bersih dan modern',
                    'Kategorisasi otomatis transaksi',
                    'Filter berdasarkan tanggal & kategori',
                    'Export data ke PDF & CSV',
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                      <span className="h-5 w-5 rounded-full bg-teal-100 dark:bg-teal-900/40 flex items-center justify-center flex-shrink-0">
                        <span className="h-2 w-2 rounded-full bg-teal-500" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Phone Mockup */}
          <div className="relative flex-shrink-0">
            <div className="relative mx-auto h-[600px] w-[300px] rounded-[48px] bg-slate-900 p-3 shadow-2xl shadow-slate-900/50 ring-1 ring-slate-700/50">
              {/* Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 h-6 w-20 rounded-full bg-slate-800 z-10" aria-hidden="true" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeScreen}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`h-full w-full overflow-hidden rounded-[40px] bg-gradient-to-b ${screen.bgFrom} ${screen.bgTo}`}
                >
                  {/* Status Bar */}
                  <div className="flex items-center justify-between px-6 pt-8 pb-2">
                    <span className="text-xs text-white/70 font-medium">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="h-2 w-2 rounded-full bg-white/70" />
                      <div className="h-2 w-2 rounded-full bg-white/70" />
                      <div className="h-2 w-2 rounded-full bg-white/70" />
                    </div>
                  </div>

                  {/* Header */}
                  <div className="px-5 pb-4">
                    <h4 className="text-white/70 text-xs">{screen.content.subtitle}</h4>
                    <p className="text-white text-lg font-bold">{screen.content.title}</p>
                  </div>

                  {/* Balance */}
                  <div className="mx-4 rounded-3xl bg-white/20 backdrop-blur-sm p-4 border border-white/20">
                    <p className="text-white/70 text-xs mb-1">{screen.id === 'dashboard' ? 'Total Saldo' : screen.content.income}</p>
                    <p className="text-white text-2xl font-bold">{screen.content.balance}</p>
                    {screen.id === 'dashboard' && (
                      <div className="mt-3 flex gap-3">
                        <div className="flex-1 rounded-2xl bg-white/20 p-2.5">
                          <p className="text-white/60 text-xs">Pemasukan</p>
                          <p className="text-emerald-300 text-sm font-semibold">{screen.content.income}</p>
                        </div>
                        <div className="flex-1 rounded-2xl bg-white/20 p-2.5">
                          <p className="text-white/60 text-xs">Pengeluaran</p>
                          <p className="text-rose-300 text-sm font-semibold">{screen.content.expense}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Transactions */}
                  <div className="mx-4 mt-4">
                    <p className="text-white/70 text-xs mb-2">
                      {screen.id === 'dashboard' ? 'Transaksi Terbaru' : `Daftar ${screen.label}`}
                    </p>
                    {screen.content.items.map((item, i) => (
                      <div key={i} className="flex items-center justify-between py-2 border-b border-white/10 last:border-0">
                        <div>
                          <p className="text-white text-xs font-medium">{item.name}</p>
                          <p className="text-white/50 text-xs">{item.cat}</p>
                        </div>
                        <span className={`text-xs font-semibold ${item.positive ? 'text-emerald-300' : 'text-rose-300'}`}>
                          {item.amount}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Glow */}
            <div className="absolute inset-0 rounded-[48px] bg-gradient-to-b from-teal-500/20 to-emerald-500/20 blur-3xl -z-10 scale-110" aria-hidden="true" />
          </div>
        </div>
      </Container>
    </section>
  );
}
