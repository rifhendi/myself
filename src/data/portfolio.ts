import { PersonalInfo, SocialLink } from "@/types/portfolio";
import { educationData } from "./education";

export const personalInfo: PersonalInfo = {
  name: "Vino Rifhendi",
  fullName: "Vino Rifhendi Setiawan",
  tagline: "Bridging Enterprise IT Infrastructure, Robust Software Engineering, and Defensive Security.",
  roles: [
    "IT Support L1",
    "Software Developer",
    "Cybersecurity Enthusiast"
  ],
  bio: "Praktisi teknologi informasi berlatar pendidikan S1 Teknik Informatika (Telkom University Purwokerto) dengan pengalaman langsung di lini operasional IT Support. Terampil dalam penanganan perangkat keras/lunak, administrasi jaringan lokal, manajemen IT aset, serta pengembangan aplikasi web modern yang solutif dan aman.",
  email: "vinorifhendi@gmail.com",
  github: "https://github.com/rifhendi",
  linkedin: "https://www.linkedin.com/in/vino-rifhendi-setiawan-296101285/", // Placeholder profil yang rapi
  location: "Jawa Tengah, Indonesia",
  status: {
    available: true,
    text: "Available for professional opportunities & collaborations"
  },
  education: educationData
};

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" }
];

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/rifhendi",
    label: "github.com/rifhendi",
    icon: "Github"
  },
  {
    platform: "Email",
    url: "mailto:vinorifhendi@gmail.com",
    label: "vinorifhendi@gmail.com",
    icon: "Mail"
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/vino-rifhendi-setiawan-296101285/",
    label: "linkedin.com/in/vinorifhendi",
    icon: "Linkedin"
  }
];

export const aboutHighlights = [
  {
    title: "IT Support & Infrastructure",
    description: "Berpengalaman menangani operasional harian IT industri: troubleshooting, instalasi OS enterprise, pemeliharaan printer, penanganan tiket helpdesk, dan kepatuhan SLA."
  },
  {
    title: "IT Asset Management",
    description: "Menerapkan pencatatan terstruktur terhadap siklus hidup perangkat keras, barcode tagging, verifikasi fisik, dan pencegahan kehilangan aset teknologi di site kerja."
  },
  {
    title: "Software Development",
    description: "Membangun sistem informasi berbasis web dengan Next.js, React, TypeScript, dan database relasional untuk mengotomasi alur kerja manual menjadi sistem digital yang efisien."
  },
  {
    title: "Defensive Cybersecurity",
    description: "Memiliki ketertarikan kuat pada pemantauan keamanan jaringan, pemindaian kerentanan (vulnerability assessment), analisis paket Wireshark, dan mitigasi risiko siber dasar."
  }
];

