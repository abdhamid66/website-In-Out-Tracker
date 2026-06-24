'use client';

import { useEffect, useRef, useState } from 'react';

interface UseCounterOptions {
  start?: number;
  end: number;
  duration?: number;
  enabled?: boolean;
}

export function useCounter({
  start = 0,
  end,
  duration = 2000,
  enabled = true,
}: UseCounterOptions): number {
  const [count, setCount] = useState<number>(start);
  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const animate = (timestamp: number): void => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (end - start) * eased);

      setCount(current);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return (): void => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      startTimeRef.current = null;
    };
  }, [start, end, duration, enabled]);

  return count;
}
