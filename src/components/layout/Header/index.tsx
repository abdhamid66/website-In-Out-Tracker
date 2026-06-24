'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { MobileMenu } from '@/components/layout/MobileMenu';
import { NAV_ITEMS, PLAYSTORE_URL } from '@/constants';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return (): void => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string): void => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-slate-100/80 dark:bg-slate-900/80 dark:border-slate-800/80'
            : 'bg-transparent'
        )}
      >
        <Container>
          <nav className="flex h-16 items-center justify-between lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 font-bold text-xl text-slate-900 dark:text-white hover:opacity-80 transition-opacity"
              aria-label="In-Out Tracker - Beranda"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 shadow-lg shadow-teal-500/30 overflow-hidden">
                <img 
                  src="/ikon-copy.png" 
                  alt="Logo In-Out Tracker" 
                  className="h-full w-full object-contain scale-110"
                />
              </div>
              <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                In-Out
              </span>
              <span>Tracker</span>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Navigasi utama">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400 rounded-xl hover:bg-teal-50 dark:hover:bg-teal-950/30 transition-all duration-200"
                    aria-label={`Navigasi ke ${item.label}`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Button
                size="sm"
                className="hidden sm:inline-flex"
                onClick={() => window.open(PLAYSTORE_URL, '_blank')}
                aria-label="Download In-Out Tracker di Google Play"
              >
                Download Gratis
              </Button>
              <button
                className="lg:hidden flex h-9 w-9 items-center justify-center rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Buka menu navigasi"
                aria-expanded={isMobileMenuOpen}
              >
                <Menu className="h-5 w-5 text-slate-600 dark:text-slate-300" />
              </button>
            </div>
          </nav>
        </Container>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onNavClick={handleNavClick}
      />
    </>
  );
}
