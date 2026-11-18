# Portfolio Website — Next.js & Tailwind CSS 🚀

Website portofolio modern, minimalis, dan sangat ringan (*high performance 120 FPS*).

---

## ⚡ 1. Cara Mengisi Link Website & Menambah Projek Baru

Semua data projek dan link website kini dipusatkan di **satu file saja**:
👉 [`projects.config.ts`](file:///c:/portofolio/projects.config.ts)

### A. Mengisi / Mengubah Link Website:
Cukup buka [`projects.config.ts`](file:///c:/portofolio/projects.config.ts), cari bagian `liveUrl` pada masing-masing projek, lalu ganti dengan link website aktif kamu:
```typescript
{
  id: 'gate',
  title: 'GATE',
  // ...
  liveUrl: 'https://link-web-gate-kamu.vercel.app', // <- Masukkan link di sini
},
{
  id: 'bridegu',
  title: 'BridgeU',
  // ...
  liveUrl: 'https://link-web-bridgeu-kamu.vercel.app', // <- Masukkan link di sini
},
{
  id: 'isfestumn',
  title: 'ISFEST UMN',
  // ...
  liveUrl: 'https://isfest.himsi-umn.ac.id', // <- Masukkan link di sini
},
{
  id: 'dapurtwin',
  title: 'Dapur Twin',
  // ...
  liveUrl: 'https://link-web-dapurtwin-kamu.vercel.app', // <- Masukkan link di sini
}
```

### B. Menambah Projek Baru:
Cukup copy salah satu blok projek di `PROJECTS_LIST` pada [`projects.config.ts`](file:///c:/portofolio/projects.config.ts), lalu paste di bawahnya dengan `id` baru (misal: `id: 'projek-baru'`).
Website akan secara otomatis:
- Menampilkan kartu baru di beranda dengan tombol **Kunjungi Web ↗** dan **Detail →**.
- Menghasilkan halaman studi kasus `/projects/projek-baru`.
- Memperbarui total metrik projek di halaman utama.

---

## 🎨 2. Tampilan Modern & Ringan (Bebas Lag / 0% GPU Spike)
- **Ringan & Cepat**: WebGL 3D canvas berat telah digantikan dengan **ambient glow CSS berbasis akselerasi hardware**, menghilangkan frame drop dan lag pada laptop saat di-scroll.
- **Warna Cerah & Bersih**: Putih cerah berlatar *radial dot matrix* minimalis, dipadukan warna resmi HIMSI UMN (*Royal Blue `#254a87`* dan *Coral Orange `#f4512a`*).
- **Animasi Estetik Relevan**:
  - GSAP Split Text pada judul beranda.
  - Smooth Magnetic buttons pada tombol aksi.
  - Running Marquee ticker ribbon teknologi.
  - Quick Preloader counter.
  - Transisi halaman halus tanpa kedip.

---

## 🛠️ 3. Cara Menjalankan

Jalankan development server:
```bash
npm run dev
```
Buka browser di: [http://localhost:3000](http://localhost:3000)
