export const STUDENT_INFO = {
  name: 'Portfolio',
  institution: 'Universitas Multimedia Nusantara',
  faculty: 'Fakultas Teknik & Informatika',
  major: 'Sistem Informasi',
  badge: 'Sistem Informasi · Universitas Multimedia Nusantara',
  status: 'Full-Stack & Frontend Engineer',
  tagline: 'Koleksi Portofolio Rekayasa Perangkat Lunak & Sistem Web',
  bio: 'Pengembangan aplikasi web modern dengan fokus pada performa tinggi, arsitektur kode terstruktur, dan antarmuka interaktif menggunakan ekosistem Next.js, React, TypeScript, dan database relasional.',
  email: 'student@student.umn.ac.id',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
}

export interface ProjectData {
  slug: string
  title: string
  shortTitle: string
  category: string
  author: string
  team: string
  role: string
  year: string
  desc: string
  liveUrl: string
  githubUrl?: string
  stackPrimary: string
  stack: string[]
  mockupAccent: string
  mockupBg: string
  loremOverview: string
  loremProblem: string
  loremSolution: string
  features: { title: string; desc: string }[]
  techHighlights: string[]
}

export const projectsData: ProjectData[] = [
  {
    slug: 'gate',
    title: 'GATE – Smart Campus & Enterprise Access Management',
    shortTitle: 'GATE',
    category: 'Enterprise Platform',
    author: 'Sistem Informasi UMN',
    team: 'GATE Core Team',
    role: 'Full-stack Developer',
    year: '2026',
    desc: 'Platform sistem verifikasi dan otorisasi akses terpadu dengan logging aktivitas real-time serta dashboard manajemen izin terpusat.',
    liveUrl: 'https://gate.example.com',
    githubUrl: 'https://github.com',
    stackPrimary: 'Next.js · TypeScript',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'REST API'],
    mockupAccent: '#254a87',
    mockupBg: 'from-blue-50/80 via-slate-50 to-indigo-50/50',
    loremOverview:
      'GATE dirancang untuk mengotomatisasi dan memvalidasi izin akses pada skala enterprise. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    loremProblem:
      'Sistem manual sebelumnya rentan terhadap latensi verifikasi dan inkonsistensi pencatatan log kedatangan. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    loremSolution:
      'Arsitektur terdistribusi dengan enkripsi token akses dan integrasi API cepat untuk menjamin verifikasi instan dalam hitungan milidetik. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    features: [
      {
        title: 'Verifikasi Akses Real-time',
        desc: 'Validasi identitas terenkripsi dengan throughput tinggi dan logging audit otomatis.'
      },
      {
        title: 'Dashboard Analitik Terpusat',
        desc: 'Visualisasi metrik volume akses harian, traffic jam sibuk, dan pelaporan izin instan.'
      },
      {
        title: 'Otorisasi Multi-Role',
        desc: 'Pembagian hierarki akses bertingkat untuk Superadmin, Verifikator Lapangan, dan Pengguna.'
      }
    ],
    techHighlights: [
      'Next.js App Router dengan Server Components untuk efisiensi loading',
      'Skema data tipe-ketat berbasis TypeScript untuk meminimalisir runtime error',
      'Database relasional PostgreSQL dengan optimasi query indexing'
    ]
  },
  {
    slug: 'bridegu',
    title: 'BridgeU – University & Industry Collaboration Platform',
    shortTitle: 'BridgeU',
    category: 'Collaboration Platform',
    author: 'Sistem Informasi UMN',
    team: 'Tim Lotus Biru',
    role: 'Lead Frontend Developer',
    year: '2026',
    desc: 'Platform kolaboratif yang menjembatani mahasiswa dengan industri melalui studi kasus nyata, penelitian terapan, dan proyek bersama.',
    liveUrl: 'https://bridgeu.example.com',
    githubUrl: 'https://github.com',
    stackPrimary: 'PostgreSQL · React',
    stack: ['Next.js', 'React', 'PostgreSQL', 'Tailwind CSS', 'Supabase'],
    mockupAccent: '#254a87',
    mockupBg: 'from-sky-50/80 via-white to-blue-50/60',
    loremOverview:
      'BridgeU menyediakan ekosistem terpadu bagi perguruan tinggi dan mitra korporat untuk melangsungkan inovasi kolaboratif. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    loremProblem:
      'Kesenjangan komunikasi antara kebutuhan proyek industri dengan talenta akademik mahasiswa sering menghambat transfer keilmuan praktis. Excepteur sint occaecat cupidatat non proident.',
    loremSolution:
      'Platform terintegrasi yang memfasilitasi pencarian studi kasus, seleksi kandidat berdasarkan kompetensi, serta pemantauan capaian milestone secara transparan.',
    features: [
      {
        title: 'Algoritma Matching Kompetensi',
        desc: 'Penyaringan cerdas yang mencocokkan kualifikasi mahasiswa dengan kriteria studi kasus mitra.'
      },
      {
        title: 'Showcase Portofolio Terverifikasi',
        desc: 'Repositori hasil luaran proyek mahasiswa yang dapat dievaluasi langsung oleh mentor industri.'
      },
      {
        title: 'Milestone & Workspace Tracker',
        desc: 'Papan manajemen tugas kolaboratif untuk memastikan deliverable selesai sesuai tenggat waktu.'
      }
    ],
    techHighlights: [
      'Komponen UI modular berbasis React dengan tata letak Tailwind CSS yang responsif',
      'Pengelolaan state dinamis dan filter multi-kategori instan',
      'Desain modern yang selaras dengan panduan visual HIMSI UMN'
    ]
  },
  {
    slug: 'isfestumn',
    title: 'ISFEST UMN – Information Systems Festival Platform',
    shortTitle: 'ISFEST UMN',
    category: 'Major Event Portal',
    author: 'HIMSI UMN Web Division',
    team: 'Panitia ISFEST UMN',
    role: 'Full-stack & UI Engineer',
    year: '2026',
    desc: 'Website festival resmi HIMSI UMN yang menaungi registrasi multi-kompetisi nasional, seminar teknologi, dan portal administrasi panitia.',
    liveUrl: 'https://isfest.himsi-umn.ac.id',
    githubUrl: 'https://github.com',
    stackPrimary: 'Next.js · Supabase',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'PostgreSQL'],
    mockupAccent: '#f4512a',
    mockupBg: 'from-orange-50/70 via-white to-amber-50/50',
    loremOverview:
      'Portal utama festival tahunan program studi Sistem Informasi UMN yang melayani ribuan pengunjung dan ratusan tim peserta lomba. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    loremProblem:
      'Proses registrasi dan verifikasi berkas multi-kompetisi yang sebelumnya manual membutuhkan otomasi terpusat yang aman dari lonjakan akses bersamaan.',
    loremSolution:
      'Sistem satu pintu dengan validasi data formulir instan, integrasi unggah berkas ke cloud storage, serta dashboard verifikasi bagi panitia.',
    features: [
      {
        title: 'Registrasi Tim Multi-Kompetisi',
        desc: 'Alur pendaftaran dinamis untuk berbagai cabang kompetisi teknologi nasional.'
      },
      {
        title: 'Panel Kontrol Panitia',
        desc: 'Dashboard manajemen data peserta dengan fitur filter status kelayakan dan ekspor laporan.'
      },
      {
        title: 'Pusat Informasi & Jadwal Live',
        desc: 'Pembaruan linimasa kegiatan festival, panduan teknis, dan pengumuman hasil kompetisi.'
      }
    ],
    techHighlights: [
      'Next.js App Router dengan caching performa tinggi untuk mengantisipasi lonjakan trafik',
      'Database realtime Supabase untuk sinkronisasi status verifikasi berkas',
      'Identitas visual khas HIMSI dengan perpaduan Royal Blue dan Coral Orange'
    ]
  },
  {
    slug: 'dapurtwin',
    title: 'Dapur Twin – Culinary E-Commerce & Order System',
    shortTitle: 'Dapur Twin',
    category: 'E-Commerce Platform',
    author: 'Sistem Informasi UMN',
    team: 'Dapur Twin Dev Team',
    role: 'Frontend & UI Developer',
    year: '2026',
    desc: 'Platform pemesanan kuliner dan katering modern dengan katalog menu interaktif, filter varian rasa, dan kalkulator pesanan otomatis.',
    liveUrl: 'https://dapurtwin.example.com',
    githubUrl: 'https://github.com',
    stackPrimary: 'React · Tailwind CSS',
    stack: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript', 'WhatsApp API'],
    mockupAccent: '#f4512a',
    mockupBg: 'from-rose-50/70 via-white to-orange-50/50',
    loremOverview:
      'Dapur Twin mengadaptasi alur pemesanan produk katering menjadi antarmuka digital modern yang efisien dan mempermudah pelanggan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    loremProblem:
      'Pemesanan manual lewat pesan teks sering kali rentan salah pencatatan menu, jumlah porsi, atau alamat pengantaran. Excepteur sint occaecat cupidatat non proident.',
    loremSolution:
      'Penyusunan katalog interaktif dengan keranjang belanja otomatis yang menghasilkan format rekap pesanan langsung terhubung ke admin secara terstruktur.',
    features: [
      {
        title: 'Katalog Menu Interaktif',
        desc: 'Eksplorasi hidangan dengan rincian porsi, spesifikasi rasa, dan filter kategori instan.'
      },
      {
        title: 'Order Builder Dinamis',
        desc: 'Perhitungan subtotal porsi secara otomatis tanpa mewajibkan registrasi akun yang rumit.'
      },
      {
        title: 'Format Rekap Terstruktur',
        desc: 'Penyusunan rincian pesanan terformat rapi untuk mempercepat konfirmasi jadwal katering.'
      }
    ],
    techHighlights: [
      'Desain antarmuka mobile-first yang nyaman dibuka dari perangkat smartphone',
      'Optimasi ukuran aset gambar web untuk kecepatan loading instan',
      'Navigasi belanja yang ringkas dan bebas hambatan'
    ]
  }
]

export const projects = projectsData
