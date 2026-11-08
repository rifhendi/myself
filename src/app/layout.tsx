import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#090d16" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vinorifhendi.vercel.app"),
  title: {
    default: "Vino Rifhendi Setiawan — IT Support L1 | Software Developer | Cybersecurity Enthusiast",
    template: "%s | Vino Rifhendi Setiawan",
  },
  description:
    "Website CV & Portfolio Profesional Vino Rifhendi Setiawan. Profesional IT berlatar S1 Teknik Informatika (Telkom University Purwokerto) dengan pengalaman praktikal di IT Support L1 (Kirana Team / SIG Site Rembang), infrastruktur jaringan, manajemen aset, dan pengembangan aplikasi web modern.",
  keywords: [
    "Vino Rifhendi",
    "Vino Rifhendi Setiawan",
    "IT Support L1",
    "Kirana Team",
    "SIG Site Rembang",
    "Telkom University Purwokerto",
    "Teknik Informatika",
    "Software Developer",
    "Cybersecurity Enthusiast",
    "Next.js Portfolio",
    "Asset Management System",
    "Helpdesk Support",
  ],
  authors: [{ name: "Vino Rifhendi Setiawan", url: "https://github.com/rifhendi" }],
  creator: "Vino Rifhendi Setiawan",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://vinorifhendi.vercel.app",
    title: "Vino Rifhendi Setiawan — IT Support L1 | Software Developer | Cybersecurity Enthusiast",
    description:
      "Website CV & Portfolio Profesional Vino Rifhendi Setiawan. Pengalaman di IT Support L1 (SIG Site Rembang), S1 Teknik Informatika Telkom University Purwokerto, modern software development, dan defensive cybersecurity.",
    siteName: "Vino Rifhendi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vino Rifhendi Setiawan — IT Support L1 | Software Developer",
    description:
      "Portofolio profesional Vino Rifhendi Setiawan: IT Support L1 di Kirana Team / SIG Site Rembang, S1 Teknik Informatika Telkom University Purwokerto.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Vino Rifhendi Setiawan",
    jobTitle: "IT Support L1 & Software Developer",
    worksFor: {
      "@type": "Organization",
      name: "Kirana Team / SIG Site Rembang",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Telkom University Purwokerto",
    },
    url: "https://vinorifhendi.vercel.app",
    sameAs: [
      "https://github.com/rifhendi",
      "https://linkedin.com/in/vinorifhendi",
    ],
    knowsAbout: [
      "IT Support L1",
      "IT Infrastructure",
      "Hardware Diagnostics",
      "Network Administration",
      "Software Development",
      "Next.js",
      "TypeScript",
      "Cybersecurity",
    ],
  };

  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans transition-colors duration-150">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
