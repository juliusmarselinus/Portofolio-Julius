/**
 * =========================================================================
 * KONFIGURASI PROJEK & PORTOFOLIO (PROJECTS CONFIG)
 * =========================================================================
 * File ini adalah satu-satunya tempat untuk menambah, mengubah, atau mengisi
 * link website (Live URL), deskripsi, dan data projek kamu.
 * 
 * CARA PAKAI:
 * 1. Untuk mengisi link web: Cukup ubah nilai 'liveUrl' pada projek terkait.
 * 2. Untuk menambah projek baru: Cukup copy salah satu objek di bawah,
 *    lalu paste di dalam array 'PROJECTS_LIST'.
 * =========================================================================
 */

export interface ProjectItem {
  id: string              // Slug URL (contoh: 'gate', 'bridegu', dll - harus unik, huruf kecil tanpa spasi)
  title: string           // Nama projek (contoh: 'GATE')
  subtitle: string        // Tagline / Deskripsi singkat
  category: string        // Kategori (contoh: 'Enterprise Platform', 'Web Application', 'E-Commerce')
  year: string            // Tahun pembuatan (contoh: '2026')
  role: string            // Peran kamu (contoh: 'Full-stack Developer', 'Frontend Engineer')
  team: string            // Nama tim / pengembang
  liveUrl: string        
  githubUrl?: string      // Link repository GitHub (opsional)
  previewImage?: string   // Path screenshot di folder public (opsional, contoh: '/dapurtwin-preview.jpg')
  tags: string[]          // Tech stack (contoh: ['Next.js', 'TypeScript', 'Tailwind CSS'])
  description: string     // Ringkasan singkat untuk kartu di halaman utama
  overview: string        // Penjelasan detail untuk halaman studi kasus
  problem: string         // Masalah yang diselesaikan
  solution: string        // Solusi rekayasa yang diterapkan
  features: {             // Fitur-fitur utama projek
    title: string
    description: string
  }[]
  metrics?: {             // Metrik singkat tampilan mockup
    label: string
    value: string
  }[]
}

// =========================================================================
// DAFTAR PROJEK (TAMBAH / UBAH PROJEK DI SINI)
// =========================================================================
export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: 'gate',
    title: 'GATE',
    subtitle: 'Smart Campus & Enterprise Access Management',
    category: 'Enterprise Platform',
    year: '2026',
    role: 'Full-stack Developer',
    team: 'GATE Core Team',
    // GANTI LINK DI BAWAH INI DENGAN LINK WEB GATE KAMU:
    liveUrl: 'https://gate.example.com',
    githubUrl: 'https://github.com',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'REST API'],
    description: 'Platform sistem verifikasi dan otorisasi akses terpadu dengan logging aktivitas real-time serta dashboard manajemen izin terpusat.',
    overview: 'GATE dirancang untuk mengotomatisasi dan memvalidasi izin akses pada skala kampus dan enterprise. Sistem ini memproses verifikasi identitas secara cepat, mencatat log kedatangan secara real-time, dan menyediakan dashboard visual untuk pemantauan arus akses.',
    problem: 'Pemeriksaan akses manual sering kali memicu antrean panjang, ketidaksinkronan data izin keluar-masuk, serta kesulitan dalam melacak riwayat kehadiran secara akurat.',
    solution: 'Membangun arsitektur web berbasis Next.js dengan validasi token terenkripsi dan API terdistribusi yang mampu memvalidasi kredensial dalam hitungan milidetik.',
    features: [
      {
        title: 'Verifikasi Akses Real-time',
        description: 'Pemeriksaan kredensial dan izin masuk instan dengan respons server di bawah 25ms.'
      },
      {
        title: 'Dashboard Analitik Terpusat',
        description: 'Visualisasi metrik volume akses harian, traffic jam sibuk, dan pelaporan otomatis.'
      },
      {
        title: 'Otorisasi Multi-Role',
        description: 'Hierarki izin bertingkat untuk Superadmin, Verifikator Lapangan, dan Pengguna umum.'
      }
    ],
    metrics: [
      { label: 'Daily Logs', value: '3,420+' },
      { label: 'Success Rate', value: '99.8%' },
      { label: 'Avg Latency', value: '18 ms' }
    ]
  },
  {
    id: 'bridegu',
    title: 'BridgeU',
    subtitle: 'University & Industry Collaboration Platform',
    category: 'Collaboration Platform',
    year: '2026',
    role: 'Lead Frontend Developer',
    team: 'Tim Lotus Biru',
    // GANTI LINK DI BAWAH INI DENGAN LINK WEB BRIDGEU KAMU:
    liveUrl: 'https://bridgeu.vercel.app/',
    githubUrl: 'https://github.com/juliusmarselinus/BridgeU',
    tags: ['Next.js', 'React', 'PostgreSQL', 'Tailwind CSS', 'Supabase'],
    description: 'Platform kolaboratif yang menjembatani mahasiswa dengan industri melalui studi kasus nyata, penelitian terapan, dan proyek bersama.',
    overview: 'BridgeU menyediakan wadah digital interaktif bagi mahasiswa dan institusi industri untuk berkolaborasi dalam pemecahan masalah bisnis riil dan penelitian inovatif.',
    problem: 'Mahasiswa kerap kesulitan memperoleh pengalaman proyek industri terverifikasi, sementara mitra perusahaan memerlukan saluran terpercaya untuk menemukan talenta unggul.',
    solution: 'Mengembangkan sistem pencocokan berbasis kompetensi, papan pelacakan milestone tugas, dan showcase portofolio terpadu untuk evaluasi performa mahasiswa.',
    features: [
      {
        title: 'Pencocokan Kompetensi',
        description: 'Algoritma penyaringan yang menyesuaikan keahlian mahasiswa dengan kualifikasi proyek mitra.'
      },
      {
        title: 'Showcase Portofolio Terverifikasi',
        description: 'Katalog hasil riset dan produk digital yang dapat diakses langsung oleh mitra industri.'
      },
      {
        title: 'Milestone Tracking',
        description: 'Manajemen alur kerja terstruktur bersama dosen pembimbing dan mentor profesional.'
      }
    ],
    metrics: [
      { label: 'Match Rate', value: '94%' },
      { label: 'Partner Co.', value: '12 Industry' },
      { label: 'Projects', value: '34 Active' }
    ]
  },
  {
    id: 'isfestumn',
    title: 'ISFEST UMN',
    subtitle: 'Information Systems Festival Portal',
    category: 'Major Event Portal',
    year: '2026',
    role: 'Full-stack & UI Engineer',
    team: 'Panitia ISFEST UMN',
    // GANTI LINK DI BAWAH INI DENGAN LINK WEB ISFEST UMN KAMU:
    liveUrl: 'https://isfestumn.my.id',
    githubUrl: 'https://github.com/isfestival2026/Isfest',
    previewImage: '/isfestumn-preview.jpg',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'PostgreSQL'],
    description: 'Website festival resmi HIMSI UMN yang menaungi registrasi multi-kompetisi nasional, seminar teknologi, dan portal administrasi panitia.',
    overview: 'ISFEST UMN adalah portal utama festival tahunan program studi Sistem Informasi Universitas Multimedia Nusantara yang melayani ribuan peserta dari berbagai universitas di Indonesia.',
    problem: 'Pendaftaran kompetisi berskala besar dengan berbagai cabang lomba memerlukan pengelolaan berkas tim, validasi pembayaran, dan distribusi informasi yang rapi tanpa kendala server down.',
    solution: 'Membangun arsitektur serverless Next.js dengan database realtime Supabase untuk pendaftaran cepat, validasi dokumen otomatis, dan dashboard panitia LO.',
    features: [
      {
        title: 'Registrasi Tim Multi-Kompetisi',
        description: 'Formulir dinamis untuk berbagai cabang lomba dengan upload berkas instan.'
      },
      {
        title: 'Dashboard Administrasi Panitia',
        description: 'Panel terpusat untuk verifikasi berkas peserta, status pembayaran, dan rekap data.'
      },
      {
        title: 'Pusat Informasi & Jadwal Live',
        description: 'Distribusi buku panduan (rulebook), pengumuman linimasa, dan leaderboard perlombaan.'
      }
    ],
    metrics: [
      { label: 'Total Teams', value: '180+' },
      { label: 'Universities', value: '32 Kampus' },
      { label: 'Uptime', value: '99.9%' }
    ]
  },
  {
    id: 'dapurtwin',
    title: 'Dapur Twin',
    subtitle: 'Culinary E-Commerce & Order System',
    category: 'E-Commerce Platform',
    year: '2026',
    role: 'Frontend & UI Developer',
    team: 'Dapur Twin Dev Team',
    // GANTI LINK DI BAWAH INI DENGAN LINK WEB DAPUR TWIN KAMU:
    liveUrl: 'https://dapurtwin.vercel.app/',
    githubUrl: 'https://github.com/juliusmarselinus/gtnich',
    previewImage: '/dapurtwin-preview.jpg',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript', 'WhatsApp API'],
    description: 'Platform pemesanan kuliner dan katering modern dengan katalog menu interaktif, filter varian rasa, dan kalkulator pesanan otomatis.',
    overview: 'Dapur Twin memodernisasi pemesanan menu katering rumahan menjadi platform digital yang ramah pengguna dengan alur transaksi instan tanpa mengharuskan registrasi rumit.',
    problem: 'Pencatatan pesanan melalui pesan teks sering menimbulkan kesalahan porsi, salah pencatatan alamat, atau ketidakjelasan rekap biaya bagi pelanggan.',
    solution: 'Menyediakan katalog visual responsif dengan kalkulator harga otomatis dan fitur export ringkasan pesanan langsung terformat ke WhatsApp pengelola.',
    features: [
      {
        title: 'Katalog Menu Interaktif',
        description: 'Eksplorasi hidangan dengan foto tajam, spesifikasi porsi, dan filter varian rasa.'
      },
      {
        title: 'Order Builder & Kalkulator Porsi',
        description: 'Penghitungan subtotal porsi dan biaya secara real-time tanpa perlu login akun.'
      },
      {
        title: 'Format Rekap WhatsApp Otomatis',
        description: 'Penyusunan format pesanan terstandarisasi untuk konfirmasi jadwal kirim yang cepat.'
      }
    ],
    metrics: [
      { label: 'Checkout', value: 'Instant' },
      { label: 'Ordering Flow', value: 'Zero-Friction' },
      { label: 'Device', value: 'Mobile-First' }
    ]
  }
]

// =========================================================================
// INFORMASI PROFIL & KONTAK
// =========================================================================
export const SITE_INFO = {
  name: 'Portfolio',
  institution: 'Universitas Multimedia Nusantara',
  major: 'Sistem Informasi',
  badge: 'Sistem Informasi · Universitas Multimedia Nusantara',
  role: 'Web & Software Engineering',
  bio: 'Fokus pada pengembangan aplikasi web modern dengan performa tinggi, arsitektur kode terstruktur, dan antarmuka interaktif yang bersih.',
  email: 'student@student.umn.ac.id',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
}
