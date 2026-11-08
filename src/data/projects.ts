import { Project } from "@/types/portfolio";

export const projectsData: Project[] = [
  {
    id: "proj-asset-mgmt",
    slug: "it-asset-management-system",
    title: "IT Asset Management System",
    category: "IT Support & Infrastructure",
    shortDescription:
      "Sistem berbasis web enterprise untuk pelacakan siklus hidup hardware, riwayat perbaikan, barcode tagging, dan audit kepemilikan aset IT di lingkungan operasional site industri.",
    problem:
      "Pencatatan inventaris perangkat IT (ratusan PC, printer industri, switch jaringan, dan laptop) di lokasi site pabrik yang sebelumnya dilakukan secara manual via spreadsheet rentan terhadap inkonsistensi data, hilangnya riwayat maintenance perangkat, dan kesulitan saat proses audit aset tahunan.",
    solution:
      "Membangun sistem sentralisasi inventaris berbasis web dengan fitur auto-generated barcode/QR code, tracking perpindahan unit antar-divisi, pencatatan log perbaikan berkala, peringatan masa garansi, serta pelaporan otomatis siap cetak untuk tim manajemen.",
    features: [
      "Pelacakan siklus hidup perangkat lengkap: Pengadaan, Alokasi User/Ruangan, Maintenance, hingga Decommission",
      "QR Code / Barcode generator unik untuk setiap item hardware guna mempercepat audit fisik di lapangan",
      "Logbook riwayat servis & perbaikan perangkat beserta estimasi biaya dan pergantian sparepart",
      "Dashboard analitik real-time menampilkan distribusi status aset (Operasional, Rusak, Dalam Perbaikan, Cadangan)",
      "Ekspor laporan komprehensif ke format PDF dan Excel spreadsheet untuk keperluan audit internal"
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma ORM", "Chart.js"],
    status: "Completed",
    githubUrl: "https://github.com/rifhendi/it-asset-management-system",
    liveUrl: "https://asset-management-demo.vercel.app",
    featured: true,
    date: "2024",
    mockupType: "asset-management"
  },
  {
    id: "proj-site-attendance",
    slug: "site-attendance-management-system",
    title: "Site Attendance Management System",
    category: "Software Development",
    shortDescription:
      "Aplikasi manajemen absensi dan penjadwalan rotasi shift operasional site yang mendukung verifikasi berbasis lokasi, rekapitulasi lembur, dan ekspor data presensi instan.",
    problem:
      "Kebutuhan operasional site industri dengan skema shift 24/7 membutuhkan sistem presensi yang presisi, tahan terhadap manipulasi lokasi, dan mampu mengotomatisasi kalkulasi jam kerja, keterlambatan, dan lembur secara transparan tanpa beban administrasi manual.",
    solution:
      "Mengembangkan aplikasi web responsif dengan integrasi geofencing koordinat GPS area site, validasi sesi dinamis, penjadwalan shift tim teknis lapangan, serta integrasi rekap data kehadiran yang langsung terhubung ke dashboard supervisor.",
    features: [
      "Verifikasi kehadiran berbasis Geofencing radius koordinat lokasi site dengan toleransi akurat",
      "Pengaturan shift dinamis (Shift Pagi, Sore, Malam, Normal) beserta delegasi jadwal mingguan/bulanan",
      "Modul pengajuan izin, cuti, dan surat tugas teknisi secara digital dengan multi-level approval",
      "Perhitungan otomatis jam kerja efektif, akumulasi keterlambatan, dan jam lembur (overtime)",
      "Dashboard rekapitulasi real-time dengan filter departemen dan ekspor laporan terperinci"
    ],
    techStack: ["React.js", "TypeScript", "Node.js", "Express", "MySQL", "Tailwind CSS"],
    status: "Completed",
    githubUrl: "https://github.com/rifhendi/site-attendance-system",
    liveUrl: "https://site-attendance-demo.vercel.app",
    featured: true,
    date: "2024",
    mockupType: "attendance"
  },
  {
    id: "proj-it-helpdesk",
    slug: "it-helpdesk-management-system",
    title: "IT Helpdesk & SLA Management System",
    category: "IT Support & Infrastructure",
    shortDescription:
      "Platform ticketing insiden teknis terpadu untuk tim IT Support Tier 1/2 dengan countdown SLA real-time, kategorisasi otomatis, dan basis pengetahuan solusi mandiri.",
    problem:
      "Permintaan bantuan teknis yang masuk melalui pesan instan acak seringkali tercecer, tidak terpantau waktu penyelesaiannya, dan menyulitkan evaluasi performa layanan IT serta identifikasi masalah hardware/software yang berulang.",
    solution:
      "Mendesain sistem ticketing terstruktur di mana setiap pelaporan karyawan memiliki ID tiket unik, prioritas (Low, Medium, High, Critical), timer SLA otomatis, fitur assignment teknisi, dan pencatatan histori perbaikan yang menjadi Knowledge Base terpusat.",
    features: [
      "Portal pembuatan tiket yang intuitif bagi end-user dengan upload tangkapan layar kendala",
      "SLA Timer & Warning Indicator aktif untuk mencegah keterlambatan penanganan insiden operasional",
      "Papan Kanban interaktif bagi teknisi IT Support untuk memantau status (Open, In Progress, Pending, Resolved)",
      "Knowledge Base terintegrasi: Solusi cepat untuk masalah berulang (printer jam, reset sandi, network reconnect)",
      "Statistik bulanan: Rata-rata waktu respons (MTTA), waktu penyelesaian (MTTR), dan kepuasan pengguna (CSAT)"
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "RESTful API", "PostgreSQL", "Lucide React"],
    status: "Completed",
    githubUrl: "https://github.com/rifhendi/it-helpdesk-system",
    liveUrl: "https://helpdesk-demo.vercel.app",
    featured: true,
    date: "2023 - 2024",
    mockupType: "helpdesk"
  },
  {
    id: "proj-security-assessment",
    slug: "security-assessment-platform",
    title: "Network Security & Vulnerability Assessment Platform",
    category: "Cybersecurity",
    shortDescription:
      "Platform dashboard pemantauan keamanan jaringan internal untuk memvisualisasikan hasil pemindaian Nmap, mengidentifikasi port rentan, dan memandu langkah perbaikan (remediation checklist).",
    problem:
      "File luaran hasil pemindaian jaringan dalam format XML atau teks mentah seringkali memakan waktu lama untuk dianalisis oleh tim IT internal, sehingga konfigurasi port terbuka yang berisiko tidak segera tertangani.",
    solution:
      "Membangun parser dan dashboard visual yang membaca hasil audit port jaringan, mencocokkannya dengan database kerentanan umum (CVE & OWASP recommendations), serta menyajikan panduan hardening langkah-demi-langkah bagi administrator sistem.",
    features: [
      "Visualisasi topologi port dan service aktif pada subnet target dengan indikator level risiko",
      "Pemeriksaan otomatis terhadap protokol tidak aman (misal Telnet tanpa enkripsi, SMBv1 rentan, default web credentials)",
      "Checklist langkah hardening sistem operasi dan perangkat switch/router yang terverifikasi",
      "Kalkulator skor risiko berdasarkan metrik CVSS untuk memprioritaskan penanganan celah keamanan kritis",
      "Dokumentasi laporan audit keamanan siap pakai untuk standarisasi compliance operasional"
    ],
    techStack: ["Python", "FastAPI", "Next.js", "TypeScript", "Tailwind CSS", "Docker"],
    status: "In Active Development",
    githubUrl: "https://github.com/rifhendi/security-assessment-platform",
    featured: false,
    date: "2024",
    mockupType: "security"
  },
  {
    id: "proj-personal-portfolio",
    slug: "personal-portfolio",
    title: "Vino Rifhendi — Personal Portfolio & CV Platform",
    category: "Software Development",
    shortDescription:
      "Website CV dan portfolio digital profesional dengan arsitektur modern Next.js App Router, integrasi formulir kontak email Resend, dan performa tinggi yang ramah SEO.",
    problem:
      "Kebutuhan akan representasi digital profesional yang merefleksikan keahlian ganda antara IT Support operasional, rekayasa perangkat lunak modern, dan antusiasme keamanan siber secara elegan tanpa desain generik.",
    solution:
      "Mendesain dan mengimplementasikan portfolio berbasis kode modular, desain editorial minimalis, penekanan pada keterbacaan teknis, dynamic project details, dan integrasi backend API route untuk komunikasi instan.",
    features: [
      "Arsitektur Next.js App Router dengan dukungan Turbopack dan TypeScript tipe kuat",
      "Sistem desain profesional tanpa dekorasi berlebihan, mengutamakan kenyamanan visual dan kontras",
      "Integrasi formulir kontak aman dengan validasi server-side dan API email Resend",
      "Fitur pratinjau dan unduh CV langsung yang siap cetak dengan format terstandarisasi",
      "Skor performa dan aksesibilitas tinggi, ramah SEO dengan Open Graph dan sitemap dinamis"
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Resend", "Lucide React"],
    status: "Live",
    githubUrl: "https://github.com/rifhendi/portfolio",
    liveUrl: "https://vinorifhendi.vercel.app",
    featured: false,
    date: "2024",
    mockupType: "portfolio"
  }
];

