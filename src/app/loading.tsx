export default function Loading(): JSX.Element {
  return (
    <div
      className="flex min-h-screen items-center justify-center bg-white dark:bg-slate-900"
      role="status"
      aria-label="Memuat halaman..."
    >
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-4 border-indigo-200 dark:border-indigo-900" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-indigo-600 animate-spin" />
        </div>
        <p className="text-sm font-medium text-slate-400 dark:text-slate-500">Memuat...</p>
      </div>
    </div>
  );
}
