import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gradient-to-b from-teal-50 to-white dark:from-slate-950 dark:to-slate-900 px-4 text-center">
      <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-teal-600 to-emerald-600 shadow-2xl shadow-teal-500/30">
        <span className="text-4xl" aria-hidden="true">🔍</span>
      </div>

      <div>
        <h1 className="text-6xl font-extrabold text-teal-600 dark:text-teal-400">404</h1>
        <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
          Halaman Tidak Ditemukan
        </h2>
        <p className="mt-3 text-slate-500 dark:text-slate-400 max-w-sm">
          Halaman yang Anda cari tidak ada atau telah dipindahkan.
        </p>
      </div>

      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-teal-600 to-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 transition-all duration-200 hover:-translate-y-0.5"
      >
        ← Kembali ke Beranda
      </Link>
    </div>
  );
}
