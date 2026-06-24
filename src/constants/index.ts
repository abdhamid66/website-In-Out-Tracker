import type { NavItem, Feature, Benefit, HowItWorksStep, Statistic, Testimonial, FAQ } from '@/types';

export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'In-Out Tracker';
export const WEBSITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://inouttracker.app';
export const PLAYSTORE_URL = process.env.NEXT_PUBLIC_PLAYSTORE_URL || 'https://play.google.com/store/apps/details?id=com.inouttracker';
export const APK_URL = process.env.NEXT_PUBLIC_APK_URL || 'https://inouttracker.app/download/inouttracker.apk';
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Fitur', href: '#features' },
  { label: 'Cara Kerja', href: '#how-it-works' },
  { label: 'Screenshot', href: '#screenshots' },
  { label: 'Testimoni', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

export const FEATURES: Feature[] = [
  {
    id: 'income-tracking',
    icon: 'TrendingUp',
    title: 'Lacak Pemasukan',
    description: 'Catat setiap sumber penghasilan dengan mudah dan kategorikan secara otomatis untuk analisis yang lebih baik.',
  },
  {
    id: 'expense-tracking',
    icon: 'TrendingDown',
    title: 'Lacak Pengeluaran',
    description: 'Monitor setiap pengeluaran secara real-time. Ketahui ke mana uangmu pergi setiap saat.',
  },
  {
    id: 'transaction-history',
    icon: 'History',
    title: 'Riwayat Transaksi',
    description: 'Akses seluruh riwayat transaksi dengan filter canggih berdasarkan tanggal, kategori, dan jumlah.',
  },
  {
    id: 'financial-reports',
    icon: 'BarChart3',
    title: 'Laporan Keuangan',
    description: 'Dapatkan laporan keuangan visual yang komprehensif dengan grafik dan diagram yang mudah dipahami.',
  },
  {
    id: 'monthly-summary',
    icon: 'CalendarDays',
    title: 'Ringkasan Bulanan',
    description: 'Lihat ringkasan keuangan bulanan secara menyeluruh dan bandingkan performa dari bulan ke bulan.',
  },
  {
    id: 'balance-monitoring',
    icon: 'Wallet',
    title: 'Monitor Saldo',
    description: 'Pantau saldo keuangan secara real-time dan dapatkan notifikasi saat mendekati batas anggaran.',
  },
  {
    id: 'category-management',
    icon: 'Tags',
    title: 'Manajemen Kategori',
    description: 'Buat dan kelola kategori transaksi sesuai kebutuhan. Kategorisasi yang fleksibel untuk analisis mendalam.',
  },
  {
    id: 'user-friendly',
    icon: 'Smartphone',
    title: 'Antarmuka Ramah',
    description: 'Desain yang intuitif dan mudah digunakan. Tidak perlu keahlian khusus untuk mengelola keuangan Anda.',
  },
];

export const BENEFITS: Benefit[] = [
  {
    id: 'financial-control',
    icon: 'Shield',
    title: 'Kendali Keuangan Lebih Baik',
    description: 'Dengan visibilitas penuh atas pemasukan dan pengeluaran, Anda memiliki kendali penuh atas kondisi keuangan setiap saat.',
    highlight: 'Kendali Penuh',
  },
  {
    id: 'easy-management',
    icon: 'Zap',
    title: 'Manajemen Pengeluaran Mudah',
    description: 'Catat transaksi dalam hitungan detik. Interface yang simpel memastikan tidak ada transaksi yang terlewat.',
    highlight: 'Lebih Cepat',
  },
  {
    id: 'spending-habits',
    icon: 'Target',
    title: 'Pahami Kebiasaan Belanja',
    description: 'Analisis pola pengeluaran Anda dari waktu ke waktu dan identifikasi area yang perlu diperbaiki.',
    highlight: 'Insight Mendalam',
  },
  {
    id: 'budgeting',
    icon: 'PiggyBank',
    title: 'Perencanaan Anggaran Optimal',
    description: 'Buat anggaran yang realistis berdasarkan data nyata dan pantau progres pencapaian target keuangan Anda.',
    highlight: 'Budget Cerdas',
  },
  {
    id: 'savings',
    icon: 'TrendingUp',
    title: 'Tingkatkan Kesadaran Menabung',
    description: 'Visualisasikan potensi tabungan Anda dan dapatkan motivasi untuk mencapai tujuan keuangan jangka panjang.',
    highlight: 'Tabungan Meningkat',
  },
];

export const HOW_IT_WORKS: HowItWorksStep[] = [
  {
    step: 1,
    icon: 'PlusCircle',
    title: 'Catat Pemasukan',
    description: 'Tambahkan setiap sumber penghasilan dengan mudah. Dari gaji, freelance, hingga penghasilan pasif.',
  },
  {
    step: 2,
    icon: 'MinusCircle',
    title: 'Catat Pengeluaran',
    description: 'Record setiap transaksi pengeluaran secara real-time agar tidak ada yang terlewat.',
  },
  {
    step: 3,
    icon: 'LayoutDashboard',
    title: 'Monitor Saldo',
    description: 'Pantau saldo dan kondisi keuangan Anda melalui dashboard yang informatif dan mudah dipahami.',
  },
  {
    step: 4,
    icon: 'FileBarChart',
    title: 'Tinjau Laporan',
    description: 'Analisis laporan keuangan bulanan dan buat keputusan finansial yang lebih baik berdasarkan data.',
  },
];

export const STATISTICS: Statistic[] = [
  {
    id: 'transactions',
    value: 50000,
    suffix: '+',
    label: 'Total Transaksi',
    description: 'Transaksi tercatat',
  },
  {
    id: 'income',
    value: 5,
    prefix: 'Rp',
    suffix: 'M+',
    label: 'Total Pemasukan',
    description: 'Pemasukan terlacak',
  },
  {
    id: 'expenses',
    value: 3,
    prefix: 'Rp',
    suffix: 'M+',
    label: 'Total Pengeluaran',
    description: 'Pengeluaran termonitor',
  },
  {
    id: 'users',
    value: 10000,
    suffix: '+',
    label: 'Pengguna Aktif',
    description: 'Pengguna puas',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Budi Santoso',
    role: 'Freelancer',
    avatar: 'BS',
    rating: 5,
    content: 'In-Out Tracker benar-benar mengubah cara saya mengelola keuangan. Sekarang saya tahu persis ke mana uang saya pergi setiap bulan!',
    date: '2024-12-15',
  },
  {
    id: 'testimonial-2',
    name: 'Sari Dewi',
    role: 'Mahasiswi',
    avatar: 'SD',
    rating: 5,
    content: 'Aplikasi yang sangat membantu untuk mengontrol pengeluaran bulanan. Antarmukanya simple dan mudah dipahami bahkan untuk pemula.',
    date: '2024-12-10',
  },
  {
    id: 'testimonial-3',
    name: 'Ahmad Rizki',
    role: 'Pemilik UMKM',
    avatar: 'AR',
    rating: 5,
    content: 'Saya pakai untuk mencatat pemasukan dan pengeluaran bisnis kecil saya. Sangat praktis dan laporan keuangannya sangat membantu!',
    date: '2024-11-28',
  },
  {
    id: 'testimonial-4',
    name: 'Rina Kusuma',
    role: 'Karyawan Swasta',
    avatar: 'RK',
    rating: 4,
    content: 'Fitur laporan bulanannya luar biasa! Saya bisa melihat tren pengeluaran dan mulai menabung lebih konsisten.',
    date: '2024-11-20',
  },
  {
    id: 'testimonial-5',
    name: 'Doni Prasetyo',
    role: 'Guru',
    avatar: 'DP',
    rating: 5,
    content: 'Rekomendasi banget! In-Out Tracker membantu saya merencanakan keuangan keluarga dengan lebih baik dan teratur.',
    date: '2024-11-15',
  },
  {
    id: 'testimonial-6',
    name: 'Maya Indira',
    role: 'Dokter Muda',
    avatar: 'MI',
    rating: 5,
    content: 'Dengan jadwal kerja yang padat, saya tetap bisa pantau keuangan dengan mudah. Aplikasi ini sangat time-efficient!',
    date: '2024-11-05',
  },
];

export const FAQS: FAQ[] = [
  {
    id: 'faq-1',
    question: 'Apakah In-Out Tracker gratis?',
    answer: 'Ya, In-Out Tracker tersedia secara gratis dan dapat diunduh langsung dari Google Play Store atau melalui file APK. Semua fitur utama tersedia tanpa biaya apapun.',
    category: 'Umum',
  },
  {
    id: 'faq-2',
    question: 'Apakah data keuangan saya aman?',
    answer: 'Keamanan data Anda adalah prioritas kami. Semua data tersimpan secara lokal di perangkat Anda dan tidak dikirim ke server eksternal tanpa izin Anda. Data Anda sepenuhnya pribadi dan terlindungi.',
    category: 'Keamanan',
  },
  {
    id: 'faq-3',
    question: 'Apakah aplikasi memerlukan koneksi internet?',
    answer: 'Tidak! In-Out Tracker dirancang untuk bekerja secara offline. Anda dapat mencatat dan memantau keuangan bahkan tanpa koneksi internet. Koneksi internet hanya diperlukan jika Anda mengaktifkan fitur sinkronisasi cloud.',
    category: 'Teknis',
  },
  {
    id: 'faq-4',
    question: 'Perangkat apa yang didukung?',
    answer: 'In-Out Tracker saat ini tersedia untuk perangkat Android dengan versi OS 5.0 (Lollipop) ke atas. Kami sedang mengembangkan versi iOS untuk Apple iPhone dan iPad.',
    category: 'Kompatibilitas',
  },
  {
    id: 'faq-5',
    question: 'Bagaimana cara mengekspor data keuangan saya?',
    answer: 'Anda dapat mengekspor data transaksi dalam format CSV atau PDF langsung dari aplikasi. Cukup masuk ke menu Laporan, pilih periode yang diinginkan, lalu tekan tombol Ekspor.',
    category: 'Fitur',
  },
  {
    id: 'faq-6',
    question: 'Berapa banyak akun yang bisa saya kelola?',
    answer: 'In-Out Tracker mendukung pengelolaan multiple akun keuangan. Anda bisa menambahkan akun tabungan, dompet tunai, rekening bank, dan lainnya sesuai kebutuhan tanpa batas.',
    category: 'Fitur',
  },
  {
    id: 'faq-7',
    question: 'Apakah ada fitur backup data?',
    answer: 'Ya, In-Out Tracker menyediakan fitur backup data otomatis. Data Anda dapat dicadangkan ke Google Drive untuk keamanan ekstra dan kemudahan pemulihan jika berganti perangkat.',
    category: 'Data',
  },
  {
    id: 'faq-8',
    question: 'Bagaimana cara menambahkan kategori baru?',
    answer: 'Sangat mudah! Masuk ke menu Pengaturan > Kategori > Tambah Kategori. Anda bisa membuat kategori custom dengan nama dan icon pilihan sendiri untuk menyesuaikan dengan kebutuhan pengeluaran Anda.',
    category: 'Penggunaan',
  },
  {
    id: 'faq-9',
    question: 'Apakah ada fitur pengingat/reminder?',
    answer: 'Ya! In-Out Tracker memiliki fitur reminder untuk mengingatkan Anda mencatat transaksi atau ketika mendekati batas anggaran yang telah ditetapkan. Anda bisa mengatur jadwal reminder sesuai kebutuhan.',
    category: 'Fitur',
  },
  {
    id: 'faq-10',
    question: 'Bagaimana jika saya mengalami masalah teknis?',
    answer: 'Tim support kami siap membantu 7 hari seminggu. Anda dapat menghubungi kami melalui email support, form kontak di website, atau melalui media sosial kami. Kami berkomitmen merespons dalam 24 jam.',
    category: 'Support',
  },
];
