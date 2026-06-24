'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionTitle } from '@/components/common/SectionTitle';
import { TESTIMONIALS } from '@/constants';
import { generateAvatarColor } from '@/lib/utils';

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 overflow-hidden"
      aria-labelledby="testimonials-title"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            id="testimonials-title"
            badge="Testimoni"
            title="Apa Kata Pengguna Kami?"
            subtitle="Lebih dari 10.000 pengguna telah merasakan manfaat In-Out Tracker. Ini pengalaman nyata mereka."
          />
        </motion.div>

        {/* Two Row Marquee */}
        <div className="mt-16 flex flex-col gap-6 overflow-hidden">
          {/* Row 1 */}
          <div className="flex gap-6 animate-scroll-left">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, index) => (
              <TestimonialCard key={`row1-${index}`} testimonial={testimonial} index={index} />
            ))}
          </div>

          {/* Row 2 (Reverse) */}
          <div className="flex gap-6 animate-scroll-right">
            {[...TESTIMONIALS.slice().reverse(), ...TESTIMONIALS.slice().reverse()].map((testimonial, index) => (
              <TestimonialCard key={`row2-${index}`} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

interface TestimonialCardProps {
  testimonial: typeof TESTIMONIALS[number];
  index: number;
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const avatarColor = generateAvatarColor(testimonial.name);

  return (
    <article
      className="flex-shrink-0 w-80 rounded-3xl bg-white dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700/50 p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
      aria-label={`Testimoni dari ${testimonial.name}`}
    >
      {/* Quote Icon */}
      <Quote className="h-6 w-6 text-teal-300 dark:text-teal-600 mb-4 flex-shrink-0" aria-hidden="true" />

      {/* Stars */}
      <div className="flex gap-0.5 mb-3" aria-label={`Rating ${testimonial.rating} dari 5 bintang`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200 dark:text-slate-600'}`}
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 mb-4">
        &ldquo;{testimonial.content}&rdquo;
      </p>

      {/* User */}
      <div className="flex items-center gap-3">
        <div
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-white text-sm font-bold shadow-md"
          style={{ backgroundColor: avatarColor }}
          aria-hidden="true"
        >
          {testimonial.avatar}
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900 dark:text-white">{testimonial.name}</p>
          <p className="text-xs text-slate-400 dark:text-slate-500">{testimonial.role}</p>
        </div>
      </div>
    </article>
  );
}
