'use client';

import { motion } from 'framer-motion';
import { Download, Smartphone, Package } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { PLAYSTORE_URL, APK_URL } from '@/constants';

export function DownloadSection(): JSX.Element {
  return (
    <section
      id="download"
      className="py-24 relative overflow-hidden"
      aria-labelledby="download-title"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-violet-600 to-indigo-800" aria-hidden="true">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.15\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }} />
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-indigo-300/20 blur-3xl" />
      </div>

      <Container className="relative">
        <div className="flex flex-col items-center gap-12 text-center lg:flex-row lg:text-left lg:items-center lg:justify-between">
          {/* Text */}
          <motion.div
            className="flex flex-col gap-6 lg:max-w-xl"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold text-white/90 mb-4">
                <Download className="h-3.5 w-3.5" />
                Download Gratis Sekarang
              </span>
              <h2
                id="download-title"
                className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl leading-tight"
              >
                Mulai Kelola Keuangan Anda Hari Ini
              </h2>
            </div>

            <p className="text-lg text-white/70 leading-relaxed">
              Unduh In-Out Tracker sekarang dan rasakan kemudahan mengelola keuangan pribadi.
              Gratis sepenuhnya, tanpa biaya tersembunyi, tanpa iklan.
            </p>

            {/* Features */}
            <ul className="flex flex-col gap-2 sm:flex-row sm:flex-wrap lg:flex-col lg:flex-nowrap">
              {['100% Gratis', 'Tanpa Iklan', 'Data Aman & Privat', 'Offline Mode'].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-white/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => window.open(PLAYSTORE_URL, '_blank')}
                leftIcon={<Smartphone className="h-5 w-5" />}
                className="shadow-xl shadow-emerald-500/30"
                aria-label="Download In-Out Tracker di Google Play Store"
              >
                Google Play Store
              </Button>
              <Button
                size="lg"
                onClick={() => window.open(APK_URL, '_blank')}
                className="bg-white text-indigo-700 hover:bg-indigo-50 shadow-xl shadow-indigo-900/30"
                leftIcon={<Package className="h-5 w-5" />}
                aria-label="Download file APK In-Out Tracker langsung"
              >
                Download APK
              </Button>
            </div>
          </motion.div>

          {/* Phone Mockups */}
          <motion.div
            className="relative flex-shrink-0"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            aria-hidden="true"
          >
            <div className="relative flex gap-4 items-end">
              {/* Left Phone (tilted) */}
              <div className="h-[440px] w-[200px] -rotate-6 rounded-[40px] bg-slate-800 p-2.5 shadow-2xl opacity-70 transform translate-y-8 ring-1 ring-slate-700/50">
                <div className="h-full w-full rounded-[32px] bg-gradient-to-b from-violet-600 to-indigo-700 flex flex-col p-4 overflow-hidden">
                  <div className="mt-6 space-y-3">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="h-10 rounded-xl bg-white/20" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Center Phone (main) */}
              <div className="h-[500px] w-[230px] rounded-[44px] bg-slate-900 p-3 shadow-2xl ring-1 ring-slate-700/50 z-10">
                <div className="h-full w-full rounded-[36px] bg-gradient-to-b from-indigo-600 to-violet-700 flex flex-col overflow-hidden">
                  <div className="px-5 pt-10 pb-4">
                    <div className="h-4 w-24 rounded-full bg-white/30 mb-2" />
                    <div className="h-8 w-36 rounded-full bg-white/20" />
                  </div>
                  <div className="mx-3 rounded-3xl bg-white/20 p-3 border border-white/20">
                    <div className="h-3 w-16 rounded-full bg-white/40 mb-2" />
                    <div className="h-7 w-28 rounded-full bg-white/60" />
                    <div className="mt-2 flex gap-2">
                      <div className="flex-1 h-10 rounded-2xl bg-white/20" />
                      <div className="flex-1 h-10 rounded-2xl bg-white/20" />
                    </div>
                  </div>
                  <div className="mx-3 mt-3 space-y-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="flex justify-between items-center py-1.5 border-b border-white/10">
                        <div>
                          <div className="h-3 w-20 rounded-full bg-white/40 mb-1" />
                          <div className="h-2 w-12 rounded-full bg-white/20" />
                        </div>
                        <div className={`h-4 w-16 rounded-full ${i % 2 === 0 ? 'bg-rose-400/60' : 'bg-emerald-400/60'}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Phone (tilted) */}
              <div className="h-[440px] w-[200px] rotate-6 rounded-[40px] bg-slate-800 p-2.5 shadow-2xl opacity-70 transform translate-y-8 ring-1 ring-slate-700/50">
                <div className="h-full w-full rounded-[32px] bg-gradient-to-b from-emerald-600 to-teal-700 flex flex-col p-4 overflow-hidden">
                  <div className="mt-6 space-y-3">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="h-10 rounded-xl bg-white/20" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
