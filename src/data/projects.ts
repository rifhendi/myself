import { Project } from "@/types/portfolio";

export const projectsData: Project[] = [
  {
    id: "proj-assetflow",
    slug: "assetflow",
    title: "AssetFlow — Enterprise Asset & Lifecycle Management",
    category: "IT Support & Infrastructure",
    shortDescription:
      "Sistem enterprise terpadu untuk pencatatan, distribusi, pemeliharaan, dan siklus hidup (lifecycle) aset korporat dengan generator Berita Acara Serah Terima (BAST) otomatis, audit trail atomik, dan pelabelan QR Code.",
    problem:
      "Manajemen ratusan unit aset IT dan perangkat operasional tanpa sistem terpusat seringkali memicu kehilangan jejak kepemilikan, ketidakjelasan dokumen serah terima resmi (BAST), serta tingginya deviasi inventaris saat audit tahunan atau saat proses offboarding karyawan (pensiun/resign/mutasi).",
    solution:
      "Membangun platform enterprise berbasis Next.js 14 App Router dan transaksi PostgreSQL atomik yang mengotomasi alur penyerahan (checkout), pengembalian (check-in), pelabelan QR Code fisik, riwayat maintenance, dan penerbitan dokumen hukum BAST resmi siap cetak.",
    features: [
      "Generator Berita Acara Serah Terima (BAST) otomatis berstandar korporat Indonesia untuk checkout & return aset",
      "Asset Checkout & Check-in Wizard 5-langkah dengan transaksi PostgreSQL atomik",
      "Tracking siklus hidup aset lengkap: AVAILABLE, ASSIGNED, MAINTENANCE, RETIRED, LOST, DISPOSED",
      "Executive Dashboard dengan grafik interaktif Recharts (distribusi status aset, valuasi nilai investasi)",
      "QR Code Asset Label generator untuk inventarisasi fisik di lapangan",
      "Ekspor dan impor massal database aset ke format Excel (.xlsx)"
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma ORM", "Recharts"],
    status: "Production",
    githubUrl: "https://github.com/rifhendi/AssetFlow",
    featured: true,
    date: "2024 - 2026",
    mockupType: "assetflow"
  },
  {
    id: "proj-werecap",
    slug: "werecap",
    title: "We-recap — Site Attendance Management System",
    category: "IT Support & Infrastructure",
    shortDescription:
      "Aplikasi web administrasi enterprise berbasis .NET 10 LTS dan PostgreSQL untuk mengelola, memantau, dan menghasilkan laporan resmi absensi personil Engineer On Site (EOS) pada Manage Service SIG Site Rembang.",
    problem:
      "Pencatatan presensi dan pembuatan laporan kerja personil Engineer On Site (EOS) di area site industri pabrik semen membutuhkan keandalan operasional tinggi, rekapitulasi shift 24/7 yang presisi, dan basis data tunggal yang persisten serta sinkron antar perangkat tanpa latensi.",
    solution:
      "Merancang sistem web arsitektur monolitik modular berstandar enterprise dengan .NET 10 LTS dan PostgreSQL sebagai single source of truth, menyediakan pencatatan presensi real-time, validasi shift kerja, dan rekap laporan resmi instan.",
    features: [
      "Manajemen personil Engineer On Site (EOS) terpusat untuk Manage Service SIG Site Rembang",
      "Single source of truth dengan PostgreSQL persisten untuk sinkronisasi multi-device (PC kantor, laptop, HP)",
      "Tracking shift kerja dinamis dan kehadiran personil teknis site harian",
      "Generator laporan resmi absensi personil siap unduh dan cetak untuk manajemen",
      "Arsitektur monolitik modular performa tinggi dengan .NET 10 LTS"
    ],
    techStack: [".NET 10 LTS", "C#", "PostgreSQL", "Tailwind CSS", "Modular Monolith"],
    status: "Production",
    githubUrl: "https://github.com/rifhendi/We-recap",
    featured: true,
    date: "2024 - 2026",
    mockupType: "werecap"
  },
  {
    id: "proj-mainpro",
    slug: "mainpro",
    title: "MaintAI (MainPRO) — AI-Powered Preventive Maintenance Platform",
    category: "IT Support & Infrastructure",
    shortDescription:
      "Industrial Computerized Maintenance Management System (CMMS) yang mengintegrasikan Google Gemini AI dan PostgreSQL untuk penjadwalan pemeliharaan preventif mesin, pelacakan KPI, dan manajemen Work Order.",
    problem:
      "Kegagalan mesin industri yang tidak terduga dan penjadwalan pemeliharaan preventif yang masih manual sering menimbulkan downtime produksi berbiaya mahal serta ketiadaan analisis akar masalah (root cause analysis) yang komprehensif.",
    solution:
      "Mengintegrasikan generative AI (Google Gemini) dengan sistem CMMS industri untuk menganalisis anomali operasional, memprediksi interval servis optimal, mengkalkulasi metrik keandalan mesin (MTBF & MTTR), dan memandu teknisi dengan rekomendasi langkah perbaikan.",
    features: [
      "AI Predictive Maintenance Advisor menggunakan Google Gemini AI untuk analisis risiko mesin",
      "Dynamic KPIs & Live Analytics via ECharts (MTBF, MTTR, PM Compliance rate)",
      "Work Order lifecycle management: Penugasan teknisi, prioritas kendala, dan log perbaikan",
      "Tracking histori servis aset mesin dan penggunaan suku cadang (spare parts)",
      "Sistem dokumentasi SOP pemeliharaan preventif terpusat"
    ],
    techStack: ["TypeScript", "Next.js", "React", "Google Gemini AI", "PostgreSQL", "ECharts", "Tailwind CSS"],
    status: "Production",
    githubUrl: "https://github.com/rifhendi/MainPRO",
    featured: true,
    date: "2024 - 2026",
    mockupType: "mainpro"
  },
  {
    id: "proj-livestock360",
    slug: "livestock360",
    title: "Livestock360 — Smart SaaS Real-Time Livestock GPS Monitoring",
    category: "Software Development",
    shortDescription:
      "Platform Smart SaaS untuk memantau kesehatan, status vitalitas, dan koordinat geografis ternak secara real-time menggunakan teknologi GPS Tracker & Geofencing dengan simulator engine bawaan.",
    problem:
      "Pemantauan ternak pada area peternakan terbuka skala luas rentan terhadap hewan keluar zona aman (geofence), pencurian, serta keterlambatan deteksi penurunan kondisi vitalitas hewan.",
    solution:
      "Membangun arsitektur Clean Architecture (Repository & Service Pattern) untuk memproses telemetri GPS real-time, perimeter geofencing otomatis dengan peringatan bahaya instan, serta simulator engine bawaan untuk menguji pergerakan ratusan ternak secara dinamis.",
    features: [
      "Peta pemantauan telemetri real-time dengan Leaflet GIS & OpenStreetMap",
      "Poligonal Geofencing radius dengan automatic boundary alert",
      "Built-in GPS Movement Simulator (kecepatan 0.5x - 10x multiplier) untuk simulasi pergerakan",
      "Dasbor analitik kesehatan, berat badan, dan profil ternak lengkap",
      "Ekspor laporan kepatuhan dan histori telemetri ke format PDF dan Excel"
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma ORM", "PostgreSQL", "Leaflet GIS"],
    status: "Production",
    githubUrl: "https://github.com/rifhendi/Livestock360",
    featured: false,
    date: "2024",
    mockupType: "livestock360"
  },
  {
    id: "proj-virelist",
    slug: "virelist",
    title: "VIRELIST — Retro 8-bit Cellular Strategy Puzzle Game",
    category: "Software Development",
    shortDescription:
      "Game puzzle strategi retro 8-bit bertema evolusi seluler primordial dengan 35 level tantangan bertingkat, sintesis audio chiptune prosedural, dan dukungan offline penuh (PWA).",
    problem:
      "Membangun game puzzle interaktif yang ringan, kaya mekanik strategi, dapat dimainkan lintas platform (desktop & smartphone) tanpa ketergantungan koneksi internet, serta menyajikan pengalaman audio-visual retro yang otentik.",
    solution:
      "Merancang game engine berbasis Phaser 3 dan procedural audio synthesizer via Web Audio API, dilengkapi mekanik evolusi morfologi dinamis (mengubah bentuk sel untuk adaptasi rintangan alam) dan arsitektur PWA siap-offline.",
    features: [
      "35 Level teka-teki strategis dengan rintangan bertingkat (arus air, danau magma, jurang kehampaan)",
      "Sistem evolusi morfologi dinamis berbasis pengumpulan DNA primordial",
      "Synthesizer audio chiptune 8-bit prosedural tanpa beban file audio eksternal",
      "Sistem Undo & Snapshot instan untuk eksplorasi strategi tanpa frustrasi",
      "Siap offline di HP (Android/iOS) dan PC sebagai Progressive Web App (PWA)"
    ],
    techStack: ["JavaScript", "Phaser 3", "Web Audio API", "Vite", "PWA"],
    status: "Live",
    githubUrl: "https://github.com/rifhendi/VIRELIST",
    liveUrl: "https://rifhendi.github.io/VIRELIST/",
    featured: false,
    date: "2024",
    mockupType: "virelist"
  },
  {
    id: "proj-absensi-ms",
    slug: "absensi-ms",
    title: "Absensi MS — Employee Attendance & Overtime System",
    category: "Software Development",
    shortDescription:
      "Sistem informasi absensi karyawan modern dengan kalkulasi lembur otomatis (overtime SPL), rekapitulasi kehadiran tim teknis site, dan generator ekspor spreadsheet profesional via ExcelJS.",
    problem:
      "Perhitungan jam kerja dan akumulasi lembur staf lapangan yang dilakukan manual sering memicu selisih kalkulasi serta memperlambat proses rekapitulasi laporan berkala bagi tim operasional.",
    solution:
      "Mengembangkan aplikasi web responsif dengan clean architecture TypeScript, mengotomatisasi rumus jam kerja efektif & lembur, serta menghasilkan file Excel formal dengan formatting rapi siap kirim.",
    features: [
      "Perhitungan otomatis akumulasi jam lembur (overtime) & keterlambatan karyawan",
      "Visualisasi statistik kehadiran bulanan dengan ECharts",
      "Generator ekspor file Excel profesional terformat via ExcelJS",
      "Validasi sesi dinamis dan manajemen peran otorisasi karyawan",
      "Desain antarmuka cepat dan responsif berbasis React, Vite, dan Tailwind CSS"
    ],
    techStack: ["React.js", "TypeScript", "Vite", "Node.js", "Express", "Tailwind CSS", "ExcelJS", "ECharts"],
    status: "Completed",
    githubUrl: "https://github.com/rifhendi/Absensi_MS",
    featured: false,
    date: "2024",
    mockupType: "absensi"
  },
  {
    id: "proj-myself",
    slug: "myself",
    title: "Vino Rifhendi — Personal Portfolio & CV Platform",
    category: "Software Development",
    shortDescription:
      "Website personal CV dan portfolio profesional dengan arsitektur modern Next.js App Router, integrasi formulir kontak email Resend, dan format CV standar eksekutif siap cetak A4.",
    problem:
      "Kebutuhan representasi digital profesional yang merefleksikan keahlian ganda antara IT Support operasional, rekayasa perangkat lunak modern, dan antusiasme keamanan siber secara elegan tanpa desain generik.",
    solution:
      "Mendesain dan mengimplementasikan portfolio berbasis kode modular, desain editorial minimalis, penekanan pada keterbacaan teknis, dynamic project details (SSG), dan integrasi backend API route untuk komunikasi instan.",
    features: [
      "Arsitektur Next.js 16 App Router dengan dukungan Turbopack dan TypeScript tipe kuat",
      "Sistem desain profesional tanpa dekorasi berlebihan, mengutamakan kenyamanan visual dan kontras",
      "Integrasi formulir kontak aman dengan validasi server-side dan API email Resend",
      "Fitur pratinjau dan unduh CV langsung yang siap cetak format A4 di `/cv`",
      "Skor performa dan aksesibilitas tinggi, ramah SEO dengan Open Graph dan sitemap dinamis"
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Resend", "Lucide React"],
    status: "Live",
    githubUrl: "https://github.com/rifhendi/myself",
    liveUrl: "https://vinorifhendi.vercel.app",
    featured: false,
    date: "2024 - 2026",
    mockupType: "portfolio"
  }
];
