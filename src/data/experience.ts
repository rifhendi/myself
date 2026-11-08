import { ExperienceItem } from "@/types/portfolio";

export const experiences: ExperienceItem[] = [
  {
    id: "sig-rembang-l1",
    role: "IT Support L1",
    company: "Kirana Team / SIG Site Rembang",
    division: "Information Technology & Operational Support",
    period: "2024 - Sekarang", // Editable timeline placeholder
    location: "Rembang, Jawa Tengah, Indonesia",
    type: "On-site / Full-time",
    summary:
      "Bertanggung jawab atas operasional infrastruktur IT harian, pemeliharaan perangkat keras & lunak, penanganan tiket helpdesk sesuai SLA, dan manajemen aset IT di lingkungan operasional site PT Semen Indonesia (Persero) Tbk (SIG Site Rembang).",
    responsibilities: [
      "Memberikan dukungan teknis lini pertama (Tier 1 Support) untuk workstation, laptop, printer industri/kantor, dan peripheral operasional pabrik.",
      "Melakukan instalasi, konfigurasi, dan pemeliharaan sistem operasi (Windows 10/11 Pro, Linux) serta software standar operasional enterprise.",
      "Melakukan troubleshooting konektivitas jaringan lokal (LAN, WLAN, switch unmanaged/managed, IP addressing, DNS/DHCP) untuk memastikan kontinuitas kerja staf.",
      "Mengelola pencatatan, tagging, audit inventaris, dan status siklus hidup aset IT (PC, monitor, printer, network device) secara terstruktur.",
      "Merespons, mencatat, dan menyelesaikan tiket insiden pengguna melalui sistem Helpdesk sesuai standar Service Level Agreement (SLA).",
      "Membantu pemeliharaan dan pengawasan perangkat pendukung jaringan (rack server, UPS, kabel patch, access point) di area kantor dan plant."
    ],
    achievements: [
      "Mempertahankan tingkat penyelesaian tiket helpdesk Tier 1 > 95% tepat waktu sesuai standar SLA yang ditentukan.",
      "Menginisiasi pencatatan audit aset IT berkala yang meminimalisir deviasi inventaris perangkat keras di area operasional site.",
      "Membantu percepatan deployment dan migrasi sistem workstation baru saat pembaharuan perangkat kerja staf operasional."
    ],
    techEnvironment: [
      "Windows Server & Active Directory",
      "Windows 10/11 Pro & Linux Environment",
      "TCP/IP, LAN/WLAN & Mikrotik/Cisco Switch",
      "IT Helpdesk Ticketing System",
      "Asset Management & Barcode Tracking",
      "Remote Desktop Support & Diagnostics Tools",
      "Hardware Troubleshooting (RAM, PSU, Storage, Thermal)"
    ]
  }
];

