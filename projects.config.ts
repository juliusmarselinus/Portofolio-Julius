/**
 * =========================================================================
 * KONFIGURASI PROJEK & PORTOFOLIO - JULIUS MARSELINUS
 * =========================================================================
 * File ini memuat 4 proyek riil yang telah dibangun dan diuji:
 * 1. Dapur Twin (C:\gtnich)
 * 2. ISFEST UMN (C:\Isfest)
 * 3. BridgeU (C:\BridgeU)
 * 4. GATE (C:\Kampus\Group 1 GATE - IS556 A - WDD - Code)
 * =========================================================================
 */

export interface ProjectItem {
  id: string              // Slug URL (huruf kecil tanpa spasi)
  title: string           // Nama projek
  subtitle: string        // Tagline / Deskripsi singkat
  category: string        // Kategori projek
  year: string            // Tahun pembuatan
  role: string            // Peran pengembang
  team: string            // Tim / Pengembang
  liveUrl: string         // Link Live URL aktif atau demo repo
  githubUrl?: string      // Link repository GitHub
  previewImage?: string   // Path screenshot di folder public
  certificateImage?: string // Path sertifikat penghargaan di folder public
  tags: string[]          // Tech stack & tools
  description: string     // Ringkasan singkat kartu depan
  overview: string        // Penjelasan komprehensif studi kasus
  problem: string         // Masalah riil yang diselesaikan
  solution: string        // Solusi arsitektur yang dibangun
  features: {             // Fitur utama projek
    title: string
    description: string
  }[]
  metrics?: {             // Metrik ringkas tampilan mockup
    label: string
    value: string
  }[]
}

// =========================================================================
// DAFTAR PROJEK RIIL (Dapur Twin, ISFEST UMN, BridgeU, GATE)
// =========================================================================
export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: 'dapurtwin',
    title: 'Dapur Twin',
    subtitle: 'Kitchen Ops, POS & Automated HPP Management',
    category: 'F&B Operations & POS Platform',
    year: '2026',
    role: 'Full-stack Developer',
    team: 'Julius Marselinus, Kevin Sakia, Audrey Imanuella',
    liveUrl: 'https://dapurtwin.vercel.app/',
    githubUrl: 'https://github.com/juliusmarselinus/gtnich',
    previewImage: '/dapurtwin-preview.jpg',
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'Supabase (PostgreSQL)', 'Recharts', 'Midtrans QRIS', 'Resend API'],
    description: 'Sistem operasional dapur & POS kasir terpadu untuk UMKM kuliner: pemesanan mandiri via QR meja, pemotongan stok otomatis berbasis resep (BOM), kalkulator HPP instan, AI OCR scan nota, dan analitik penjualan.',
    overview: 'Dapur Twin adalah platform operasional kuliner modern yang mengatasi ketidakpastian stok bahan baku, resep yang belum terstandarisasi, serta kesulitan menghitung margin dan HPP (Harga Pokok Penjualan) per porsi. Mengintegrasikan alur pemesanan mandiri pelanggan via QR meja dengan Kitchen Display System (KDS), kasir POS multi-channel, pemotongan stok otomatis dari resep gudang, serta maskot interaktif Dapi yang responsif terhadap data dapur secara real-time.',
    problem: 'Pencatatan manual stok bahan dan pesanan meja rentan memicu selisih stok, pemborosan bahan baku (waste), ketidaktahuan margin profit aktual per porsi sajian, serta antrean pesanan yang terfragmentasi di kasir.',
    solution: 'Membangun arsitektur web modern yang menghubungkan modul Self-Order QR meja dengan pembayaran QRIS Dinamis Midtrans, sinkronisasi antrean pesanan ke KDS dapur, engine konversi satuan takaran resep, pemindaian struk belanja pasar via AI OCR Vision, dan visualisasi tren penjualan Recharts.',
    features: [
      {
        title: 'Self-Order QR Meja & QRIS Dinamis',
        description: 'Pelanggan memindai QR code di meja untuk membuka katalog menu interaktif dan membayar instan via QRIS Midtrans atau bayar di kasir dengan struk email otomatis via Resend.'
      },
      {
        title: 'Kitchen Display System & Auto-BOM',
        description: 'Papan antrean dapur real-time dengan indikator kesiapan bahan resep. Stok gudang otomatis terpotong saat pesanan selesai berdasarkan Bill of Materials (BOM).'
      },
      {
        title: 'Kalkulator HPP, AI OCR & Laporan Recharts',
        description: 'Penghitungan modal bahan dan margin profit secara live, digitalisasi nota belanja fisik pasar via AI OCR Vision, serta visualisasi data omzet dan performa menu interaktif.'
      }
    ],
    metrics: [
      { label: 'Inventory', value: 'Auto-BOM' },
      { label: 'Ordering Flow', value: 'Zero-Queue QR' },
      { label: 'Analytics', value: 'Live Recharts' }
    ]
  },
  {
    id: 'isfestumn',
    title: 'ISFEST UMN',
    subtitle: 'National Tech Festival, Multi-Competition & 3D Interactive Portal',
    category: 'National Event Platform',
    year: '2026',
    role: 'Full-stack & 3D Web Engineer',
    team: 'Julius Marselinus, Kevin Sakia',
    liveUrl: 'https://isfestumn.my.id',
    githubUrl: 'https://github.com/isfestival2026/Isfest',
    previewImage: '/isfestumn-preview.jpg',
    tags: ['Next.js 16', 'Three.js / React Three Fiber', 'TypeScript', 'Supabase (PostgreSQL)', 'AWS S3', 'Tailwind CSS'],
    description: 'Portal resmi festival teknologi berskala nasional: platform registrasi multi-lomba (Data Competition & UI/UX), unggah berkas karya aman via AWS S3 Presigned URLs, sistem tiket seminar berbayar, dan maskot 3D interaktif.',
    overview: 'ISFEST UMN adalah portal digital berskala besar yang menaungi rangkaian kompetisi teknologi nasional dan seminar dengan ribuan partisipan dari berbagai universitas di Indonesia. Dibangun dengan fokus pada keandalan upload data bervolume tinggi, visualisasi 3D Three.js interaktif, dashboard multi-role panitia, serta sinkronisasi data Google Sheets otomatis.',
    problem: 'Pendaftaran massal dengan berkas perlombaan berukuran besar rawan gagal kirim jika diproses langsung lewat server reguler, disertai kebutuhan verifikasi bertingkat panitia (LO & BPH), serta sistem check-in dan tiket doorprize seminar secara realtime.',
    solution: 'Menerapkan arsitektur upload terdistribusi via AWS S3 Signed URLs langsung dari browser peserta, sistem dashboard administrasi multi-role (BPH, LO, Akademik, Regis, Vault kas/denda), database realtime Supabase, integrasi visual 3D Three.js, dan sinkronisasi Google Sheets.',
    features: [
      {
        title: 'Arena Lomba & AWS S3 Direct Upload',
        description: 'Portal submission karya Data Competition dan UI/UX Design dengan URL unggah terenkripsi langsung ke AWS S3 bucket secara aman dan cepat.'
      },
      {
        title: 'Dashboard Administrasi Multi-Role',
        description: 'Panel terpadu untuk verifikasi tim peserta oleh LO, validasi pembayaran, pencatatan kas/denda divisi (Vault), dan rekapitulasi data dinamis.'
      },
      {
        title: 'Visual 3D Three.js & Seminar Engine',
        description: 'Pengalaman interaktif 3D menggunakan React Three Fiber, sistem ticketing seminar dinamis, check-in kehadiran peserta, dan kupon undian doorprize.'
      }
    ],
    metrics: [
      { label: 'Storage', value: 'AWS S3 Direct' },
      { label: 'Visual', value: 'Three.js 3D' },
      { label: 'Multi-Role', value: 'Granular RBAC' }
    ]
  },
  {
    id: 'bridegu',
    title: 'BridgeU',
    subtitle: 'University & Industry Collaboration Platform',
    category: 'Collaboration & Talent Ecosystem',
    year: '2026',
    role: 'Full-stack & Frontend Engineer',
    team: 'Julius Marselinus, Kevin Sakia, Audrey Imanuella',
    liveUrl: 'https://bridgeu.vercel.app/',
    githubUrl: 'https://github.com/juliusmarselinus/BridgeU',
    certificateImage: '/bridgeu-certificate.png',
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Supabase (PostgreSQL)', 'Framer Motion', 'jsPDF', 'Resend API'],
    description: 'Platform kolaborasi terpadu penghubung talenta universitas dengan tantangan riil industri melalui riset terapan, pencocokan kompetensi, milestone tracking terstruktur, dan generator portofolio PDF otomatis.',
    overview: 'BridgeU hadir untuk memecahkan kesenjangan antara dunia akademik dan kebutuhan industri riil. Platform ini menyediakan wadah terstruktur bagi institusi dan perusahaan mitra untuk mempublikasikan proyek studi kasus nyata, sementara mahasiswa dapat melamar, berkolaborasi secara terpandu, dan mengonversi hasil proyek menjadi portofolio terverifikasi.',
    problem: 'Mahasiswa kerap kesulitan memperoleh pengalaman proyek industri nyata yang terverifikasi, sementara mitra perusahaan memerlukan saluran terpercaya untuk menemukan talenta yang memiliki bukti kemampuan terukur.',
    solution: 'Membangun platform ekosistem multi-peran (Mahasiswa, Perusahaan Mitra, Admin Kampus) yang dilengkapi papan pelacakan milestone progress proyek, sistem lamaran terpusat, notifikasi transaksional via Resend, dan generator rekam jejak portofolio resmi PDF via jsPDF.',
    features: [
      {
        title: 'Ekosistem Kolaborasi Multi-Role',
        description: 'Perusahaan dapat mempublikasikan proyek riset/studi kasus nyata, dan mahasiswa dapat mengeksplorasi serta melamar kolaborasi sesuai minat dan keahlian.'
      },
      {
        title: 'Milestone Progress Tracker',
        description: 'Papan manajemen progres terstruktur untuk memastikan pengerjaan proyek deliverables berjalan tepat waktu bersama bimbingan mentor industri.'
      },
      {
        title: 'Export Portofolio PDF & Notifikasi Resend',
        description: 'Penerbitan dokumen rekam jejak portofolio dan resume resmi dalam format PDF dinamis via jsPDF serta notifikasi status lamaran otomatis melalui email.'
      }
    ],
    metrics: [
      { label: 'Multi-Role', value: 'Student & Industry' },
      { label: 'Tracking', value: 'Milestone-Based' },
      { label: 'Document', value: 'Auto-PDF Export' }
    ]
  },
  {
    id: 'gate',
    title: 'GATE',
    subtitle: 'Freelance Marketplace & Social Impact Ecosystem with GatePay',
    category: 'Marketplace & Social Impact',
    year: '2026',
    role: 'Full-stack Developer',
    team: 'Julius Marselinus',
    liveUrl: 'https://github.com/juliusmarselinus/Gate',
    githubUrl: 'https://github.com/juliusmarselinus/Gate',
    previewImage: '/gate-preview.jpg',
    tags: ['Laravel 8', 'PHP', 'MySQL', 'Bootstrap 4', 'GatePay Engine', 'REST API', 'JavaScript'],
    description: 'Platform terpadu penghubung freelancer, pemberi kerja (employer), dan yayasan sosial dengan sistem dompet virtual GatePay untuk transparansi pembayaran proyek dan penyaluran donasi sosial.',
    overview: 'GATE (Your Gate to Work and Social Impact) menghubungkan dunia profesional kerja lepas dengan kontribusi sosial nyata. Platform ini memfasilitasi pemberi kerja (employer) dalam merekrut talenta freelancer terverifikasi, sekaligus mengintegrasikan sistem donasi otomatis ke berbagai yayasan sosial melalui modul dompet terintegrasi GatePay.',
    problem: 'Kerap terjadi kendala transparansi pembayaran dalam sistem kerja lepas konvensional serta minimnya saluran terintegrasi bagi profesional dan perusahaan untuk menyalurkan dampak sosial (donasi) secara langsung dari hasil pengerjaan proyek.',
    solution: 'Membangun platform multi-peran (Freelancer, Employer, Yayasan Sosial) berbasis Laravel dan MySQL yang didukung oleh sistem dompet digital GatePay untuk alur transaksi kontrak kerja yang aman (escrow), penarikan saldo, serta rekonsiliasi donasi sosial terpadu.',
    features: [
      {
        title: 'Multi-Role Hub (Freelancer, Klien & Yayasan)',
        description: 'Portal terdedikasi untuk freelancer melamar pekerjaan, employer mempublikasikan lowongan proyek, dan yayasan sosial mempublikasikan kampanye bantuan.'
      },
      {
        title: 'GatePay Wallet & Escrow Engine',
        description: 'Sistem dompet virtual untuk pencatatan transaksi kontrak kerja, penahanan dana aman, penarikan saldo freelancer, serta penyaluran donasi otomatis.'
      },
      {
        title: 'Project & Milestone Management',
        description: 'Alur pemrosesan proyek mulai dari peninjauan proposal pelamar, pemantauan progress pekerjaan, konfirmasi penyelesaian (mark completed), hingga sistem ulasan dan rating.'
      }
    ],
    metrics: [
      { label: 'Ecosystem', value: '3 Active Roles' },
      { label: 'Payment', value: 'GatePay Wallet' },
      { label: 'Impact', value: 'Social Donation' }
    ]
  }
]

// =========================================================================
// INFORMASI PROFIL & KONTAK - JULIUS MARSELINUS
// =========================================================================
export const SITE_INFO = {
  name: 'Julius Marselinus',
  title: 'Software & Data Enthusiast',
  badge: 'Julius Marselinus · Tech & Software Portfolio',
  role: 'Software Development & Data Explorer',
  bio: 'Fokus pada pengembangan aplikasi perangkat lunak yang fungsional, visualisasi data, serta eksplorasi machine learning, deep learning, dan pemodelan data terstruktur.',
  email: 'juliusmarselinus@gmail.com',
  github: 'https://github.com/juliusmarselinus',
  linkedin: 'https://linkedin.com/in/juliusmarselinus',
  institution: 'Universitas Multimedia Nusantara',
  major: 'Sistem Informasi',
}
