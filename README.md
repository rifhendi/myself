# Vino Rifhendi Setiawan — Personal CV & Portfolio Website

Website personal CV dan portfolio profesional untuk **Vino Rifhendi Setiawan** (IT Support L1 | Software Developer | Cybersecurity Enthusiast).

Dibangun dengan arsitektur modern **Next.js App Router**, **TypeScript**, **Tailwind CSS**, dan diintegrasikan dengan **Resend** untuk pengiriman formulir kontak email langsung ke `vinorifhendi@gmail.com`.

---

## 🌟 Fitur & Keunggulan

- **Clean & Editorial Design**: Tampilan modern, minimalis, dan elegan tanpa gradient berlebihan atau ornamen AI generik.
- **Responsive**: Dioptimalkan untuk kenyamanan visual di perangkat desktop, laptop, tablet, dan smartphone.
- **Dark Mode**: Dukungan mode gelap & terang yang konsisten dengan penyimpanan preferensi lokal (*localStorage*).
- **Semua Bagian Lengkap**:
  - **Navbar**: Navigasi responsif dengan tombol download CV, menu mobile drawer, dan theme switcher.
  - **Hero**: Ringkasan profesional, badge ketersediaan (*Available for opportunities*), dan quick links.
  - **About**: Latar belakang S1 Teknik Informatika (Telkom University Purwokerto), pilar infrastruktur, manajemen aset, rekayasa software, dan keamanan siber defensif.
  - **Experience**: Rekam jejak IT Support L1 di Kirana Team / SIG Site Rembang (Tanggung jawab, pencapaian SLA, dan *tech environment*).
  - **Projects**: Portfolio sistem pilihan dengan visual mockup UI interaktif, filter kategori, status badges, dan detail lengkap (Problem, Solution, Key Features, Tech Stack).
  - **Skills**: Skill badges terstruktur tanpa persentase subjektif/tidak terukur.
  - **Education**: Informasi formal S1 Teknik Informatika Telkom University Purwokerto.
  - **Contact**: Formulir kontak interaktif dengan validasi input, honeypot anti-spam, rate limiting, serta integrasi Resend API.
  - **Printable CV (`/cv`)**: Halaman resume standar eksekutif format cetak A4 yang siap disimpan langsung ke PDF.
  - **Footer**: Hak cipta tahun dinamis, tautan GitHub, Email, dan LinkedIn.
- **Pemisahan Data & UI**: Seluruh konten tersimpan rapi di folder `src/data/` sehingga mudah diedit tanpa mengubah kode tampilan.
- **SEO & Performa**: Dilengkapi metadata komprehensif, OpenGraph, JSON-LD Schema untuk personal branding, serta sitemap & robots.txt otomatis.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) & Custom SVG Brand Icons
- **Email Gateway**: [Resend](https://resend.com/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📁 Struktur Direktori

```text
myself/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts          # API Route pengiriman email kontak via Resend
│   │   ├── cv/
│   │   │   └── page.tsx              # Halaman CV eksekutif siap cetak A4 / PDF
│   │   ├── projects/
│   │   │   └── [slug]/
│   │   │       └── page.tsx          # Halaman detail dinamis per proyek (SSG)
│   │   ├── globals.css               # Styling Tailwind dasar & custom scrollbar
│   │   ├── layout.tsx                # Root layout, metadata SEO & JSON-LD
│   │   ├── page.tsx                  # Halaman utama (one-page portfolio)
│   │   ├── robots.ts                 # Generator robots.txt otomatis
│   │   └── sitemap.ts                # Generator sitemap.xml otomatis
│   ├── components/
│   │   ├── About.tsx                 # Section About & pilar keahlian
│   │   ├── Contact.tsx               # Formulir kontak & integrasi API
│   │   ├── Education.tsx             # Section riwayat pendidikan
│   │   ├── Experience.tsx            # Section rekam jejak karir
│   │   ├── Footer.tsx                # Footer website & back-to-top
│   │   ├── Hero.tsx                  # Hero section, badge status & CTA
│   │   ├── Icons.tsx                 # Ikon SVG bersih (GitHub, LinkedIn)
│   │   ├── Navbar.tsx                # Sticky navbar & mobile menu
│   │   ├── ProjectCard.tsx           # Kartu proyek dengan mockup
│   │   ├── ProjectMockup.tsx         # Visual mockup interaktif per sistem
│   │   ├── ProjectModal.tsx          # Modal popup detail proyek
│   │   ├── Projects.tsx              # Section Projects & tab filter
│   │   ├── SectionHeading.tsx        # Reusable section heading
│   │   ├── Skills.tsx                # Badges keahlian terstruktur
│   │   ├── ThemeProvider.tsx         # Dark/Light theme context
│   │   └── ThemeToggle.tsx           # Tombol switch tema
│   ├── data/
│   │   ├── education.ts              # Data pendidikan (mudah diedit)
│   │   ├── experience.ts             # Data pengalaman kerja (mudah diedit)
│   │   ├── portfolio.ts              # Data personal, bio, & navigasi
│   │   ├── projects.ts               # Data daftar proyek & spesifikasi
│   │   └── skills.ts                 # Data kategori & daftar keahlian
│   └── types/
│       └── portfolio.ts              # Definisi tipe TypeScript
├── .env.example                      # Template environment variables
├── .env.local                        # Environment variables lokal
├── next.config.ts                    # Konfigurasi Next.js
├── tailwind.config.ts                # Konfigurasi Tailwind CSS
└── tsconfig.json                     # Konfigurasi TypeScript
```

---

## 🚀 Cara Menjalankan Secara Lokal

### 1. Prasyarat
Pastikan komputer Anda telah terinstal:
- Node.js versi 18 ke atas (disarankan Node.js LTS v20+)
- npm atau pnpm

### 2. Clone atau Buka Folder Project
```bash
cd d:\myself
```

### 3. Install Dependensi
```bash
npm install
```

### 4. Konfigurasi Environment Variables
Salin file `.env.example` menjadi `.env.local`:
```bash
cp .env.example .env.local
```
Isi variabel berikut:
```env
# Dapatkan API key gratis di https://resend.com
RESEND_API_KEY=re_your_api_key_here

# Email tujuan penerima pesan formulir kontak
CONTACT_RECEIVER_EMAIL=vinorifhendi@gmail.com

NEXT_PUBLIC_SITE_URL=http://localhost:3000
```
> **Catatan**: Jika `RESEND_API_KEY` belum diisi, form kontak otomatis berjalan dalam mode preview/simulasi yang aman sehingga testing lokal tetap lancar tanpa error 500.

### 5. Jalankan Server Development
```bash
npm run dev
```
Buka browser di [http://localhost:3000](http://localhost:3000).

### 6. Uji Production Build
```bash
npm run build
npm run start
```

---

## 📤 Cara Push ke GitHub

1. Inisialisasi Git & Commit:
```bash
git init
git add .
git commit -m "feat: complete personal portfolio and CV for Vino Rifhendi Setiawan"
```

2. Tambahkan Remote Repository GitHub Anda:
```bash
git branch -M main
git remote add origin https://github.com/rifhendi/portfolio.git
git push -u origin main
```

---

## ☁️ Cara Deploy ke Vercel

1. Buka [Vercel Dashboard](https://vercel.com/new).
2. Login menggunakan akun GitHub Anda.
3. Pilih repository **`portfolio`** yang telah Anda push.
4. Pada bagian **Environment Variables**, tambahkan:
   - `RESEND_API_KEY` : `re_xxxxxxxxxxxxxxxx` (API key dari Resend)
   - `CONTACT_RECEIVER_EMAIL` : `vinorifhendi@gmail.com`
   - `NEXT_PUBLIC_SITE_URL` : `https://your-domain.vercel.app`
5. Klik **Deploy**. Website Anda akan langsung online dalam waktu kurang dari 1 menit!

---

## ✏️ Cara Mengedit Konten / Data Portofolio

Semua konten dipisahkan dari komponen UI agar Anda dapat memperbarui informasi dengan mudah:
- **Biodata, Role & Sosial Media**: Edit di `src/data/portfolio.ts`
- **Pengalaman Kerja & Tanggal**: Edit di `src/data/experience.ts`
- **Daftar Proyek & Link Demo/Repo**: Edit di `src/data/projects.ts`
- **Keahlian / Skill Badges**: Edit di `src/data/skills.ts`
- **Riwayat Pendidikan & Tahun**: Edit di `src/data/education.ts`

---

## 📄 Lisensi & Hak Cipta

© 2026 Vino Rifhendi Setiawan. Seluruh hak cipta dilindungi undang-undang.
Dilisensikan di bawah [MIT License](LICENSE).
