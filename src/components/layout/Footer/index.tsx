'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Twitter, Mail, Github } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { APP_NAME, PLAYSTORE_URL, APK_URL } from '@/constants';

const SOCIAL_LINKS = [
  { icon: Instagram, href: 'https://instagram.com/inouttracker', label: 'Instagram' },
  { icon: Twitter, href: 'https://twitter.com/inouttracker', label: 'Twitter' },
  { icon: Mail, href: 'mailto:support@inouttracker.app', label: 'Email' },
  { icon: Github, href: 'https://github.com/inouttracker', label: 'GitHub' },
];

const FOOTER_LINKS = [
  {
    title: 'Produk',
    links: [
      { label: 'Fitur', href: '#features' },
      { label: 'Screenshot', href: '#screenshots' },
      { label: 'Cara Kerja', href: '#how-it-works' },
    ],
  },
  {
    title: 'Download',
    links: [
      { label: 'Google Play Store', href: PLAYSTORE_URL, external: true },
      { label: 'Download APK', href: APK_URL, external: true },
    ],
  },
  {
    title: 'Bantuan',
    links: [
      { label: 'FAQ', href: '#faq' },
      { label: 'Hubungi Kami', href: '#contact' },
      { label: 'Kebijakan Privasi', href: 'https://www.termsfeed.com/live/87b1bb38-9f3e-4c61-8a4d-46a5db97f9ee', external: true },
      { label: 'Syarat & Ketentuan', href: '/terms', external: false },
    ],
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300" role="contentinfo">
      {/* Main Footer */}
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link
                href="/"
                className="inline-flex items-center gap-2.5 font-bold text-xl text-white hover:opacity-80 transition-opacity"
                aria-label={`${APP_NAME} - Beranda`}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 shadow-lg overflow-hidden">
                  <img 
                    src="/ikon-copy.png" 
                    alt="Logo In-Out Tracker" 
                    className="h-full w-full object-contain scale-110"
                  />
                </div>
                <span>
                  <span className="text-teal-400">In-Out</span> Tracker
                </span>
              </Link>

              <p className="mt-4 text-sm leading-relaxed text-slate-400 max-w-xs">
                Aplikasi pencatat keuangan pribadi yang membantu Anda mengelola pemasukan dan
                pengeluaran dengan mudah, cerdas, dan efisien.
              </p>

              {/* Social Links */}
              <div className="mt-6 flex items-center gap-3">
                {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800 text-slate-400 hover:bg-teal-600 hover:text-white transition-all duration-200"
                    aria-label={`Kunjungi ${label} kami`}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-2 gap-8 lg:col-span-3 sm:grid-cols-3">
              {FOOTER_LINKS.map((section) => (
                <div key={section.title}>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                    {section.title}
                  </h3>
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        {link.external ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-slate-400 hover:text-teal-400 transition-colors"
                          >
                            {link.label}
                          </a>
                        ) : link.href.startsWith('#') ? (
                          <button suppressHydrationWarning
                            onClick={() => {
                              const el = document.querySelector(link.href);
                              el?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="text-sm text-slate-400 hover:text-teal-400 transition-colors"
                          >
                            {link.label}
                          </button>
                        ) : (
                          <Link
                            href={link.href}
                            className="text-sm text-slate-400 hover:text-teal-400 transition-colors"
                          >
                            {link.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
            <p className="text-sm text-slate-500">
              &copy; {currentYear} {APP_NAME}. Seluruh hak cipta dilindungi.
            </p>
            <p className="text-sm text-slate-500">
              Dibuat dengan{' '}
              <span className="text-rose-400" aria-label="cinta">
                ♥
              </span>{' '}
              di Indonesia
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
