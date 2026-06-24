'use client';

import { useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/common/Button';
import { NAV_ITEMS, PLAYSTORE_URL } from '@/constants';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavClick: (href: string) => void;
}

export function MobileMenu({ isOpen, onClose, onNavClick }: MobileMenuProps): JSX.Element {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return (): void => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={cn(
          'fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300 ease-out lg:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        aria-label="Menu navigasi mobile"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 p-5">
          <span className="font-bold text-lg text-slate-900 dark:text-white">Menu</span>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Tutup menu"
          >
            <X className="h-5 w-5 text-slate-600 dark:text-slate-300" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-5">
          <ul className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => onNavClick(item.href)}
                  className="w-full text-left px-4 py-3 text-base font-medium text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 rounded-xl transition-all duration-200"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-3">
            <Button
              size="md"
              className="w-full"
              onClick={() => {
                window.open(PLAYSTORE_URL, '_blank');
                onClose();
              }}
            >
              Download di Google Play
            </Button>
          </div>
        </nav>
      </aside>
    </>
  );
}
