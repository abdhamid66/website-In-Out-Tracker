'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, Mail, MessageSquare, User, CheckCircle } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionTitle } from '@/components/common/SectionTitle';
import { Button } from '@/components/common/Button';
import { cn } from '@/lib/utils';

const contactSchema = z.object({
  name: z.string().min(1, 'Nama wajib diisi').max(50, 'Nama maksimal 50 karakter'),
  email: z.string().email('Format email tidak valid'),
  subject: z.string().min(1, 'Subjek wajib diisi').max(100, 'Subjek maksimal 100 karakter'),
  message: z.string().min(1, 'Pesan wajib diisi').max(1000, 'Pesan maksimal 1000 karakter'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData): Promise<void> => {
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          // Access Key Web3Forms
          access_key: '00608ebd-7b3e-4e51-b6f1-d2f388f06601',
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        console.error('Form submission error:', result);
        alert('Gagal mengirim pesan. Silakan coba lagi nanti.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Terjadi kesalahan jaringan.');
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-slate-50 dark:bg-slate-950"
      aria-labelledby="contact-title"
    >
      <Container size="md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            id="contact-title"
            badge="Hubungi Kami"
            title="Ada Pertanyaan? Kami Siap Membantu"
            subtitle="Tim support kami siap membantu Anda 7 hari seminggu. Kirimkan pesan dan kami akan merespons dalam 24 jam."
          />
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Contact Info */}
            <div className="flex flex-col gap-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Informasi Kontak</h3>
              {[
                { icon: Mail, label: 'Email', value: 'hamnsxx@gmail.com', href: 'mailto:hamnsxx@gmail.com' },
                { icon: MessageSquare, label: 'Respons', value: 'Dalam 24 jam', href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-teal-100 dark:bg-teal-900/40">
                    <Icon className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-4 rounded-3xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/30 p-12 text-center"
                >
                  <CheckCircle className="h-16 w-16 text-emerald-500" />
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">Pesan Terkirim!</h4>
                  <p className="text-slate-500 dark:text-slate-400">
                    Terima kasih telah menghubungi kami. Kami akan membalas dalam 24 jam.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-5"
                  noValidate
                  aria-label="Form kontak"
                >
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-name" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Nama Lengkap <span className="text-rose-500" aria-label="wajib diisi">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" aria-hidden="true" />
                        <input suppressHydrationWarning
                          id="contact-name"
                          type="text"
                          {...register('name')}
                          placeholder="Budi Santoso"
                          className={cn(
                            'w-full rounded-xl border bg-white dark:bg-slate-800 pl-10 pr-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent',
                            errors.name ? 'border-rose-500' : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                          )}
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? 'contact-name-error' : undefined}
                        />
                      </div>
                      {errors.name && (
                        <p id="contact-name-error" className="text-xs text-rose-500" role="alert">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-email" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Email <span className="text-rose-500" aria-label="wajib diisi">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" aria-hidden="true" />
                        <input suppressHydrationWarning
                          id="contact-email"
                          type="email"
                          {...register('email')}
                          placeholder="budi@email.com"
                          className={cn(
                            'w-full rounded-xl border bg-white dark:bg-slate-800 pl-10 pr-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent',
                            errors.email ? 'border-rose-500' : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                          )}
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'contact-email-error' : undefined}
                        />
                      </div>
                      {errors.email && (
                        <p id="contact-email-error" className="text-xs text-rose-500" role="alert">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-subject" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Subjek <span className="text-rose-500" aria-label="wajib diisi">*</span>
                    </label>
                    <input suppressHydrationWarning
                      id="contact-subject"
                      type="text"
                      {...register('subject')}
                      placeholder="Pertanyaan tentang fitur..."
                      className={cn(
                        'w-full rounded-xl border bg-white dark:bg-slate-800 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent',
                        errors.subject ? 'border-rose-500' : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                      )}
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
                    />
                    {errors.subject && (
                      <p id="contact-subject-error" className="text-xs text-rose-500" role="alert">{errors.subject.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-message" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Pesan <span className="text-rose-500" aria-label="wajib diisi">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      {...register('message')}
                      rows={5}
                      placeholder="Tuliskan pesan atau pertanyaan Anda di sini..."
                      className={cn(
                        'w-full resize-none rounded-xl border bg-white dark:bg-slate-800 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent',
                        errors.message ? 'border-rose-500' : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                      )}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'contact-message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="contact-message-error" className="text-xs text-rose-500" role="alert">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    isLoading={isSubmitting}
                    rightIcon={!isSubmitting ? <Send className="h-4 w-4" /> : undefined}
                    className="self-start"
                    aria-label="Kirim pesan kontak"
                  >
                    {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
