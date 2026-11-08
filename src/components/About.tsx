import React from "react";
import SectionHeading from "./SectionHeading";
import { 
  Laptop, 
  Network, 
  Layers, 
  ShieldCheck, 
  CheckCircle, 
  GraduationCap 
} from "lucide-react";

export default function About() {
  const pillars = [
    {
      icon: Laptop,
      title: "IT Support & Enterprise Operations",
      description:
        "Memberikan dukungan teknis Tier 1 yang responsif untuk operasional site, menangani troubleshooting sistem operasi Windows/Linux, penggantian & perbaikan hardware, konfigurasi workstation, hingga peripheral industri."
    },
    {
      icon: Network,
      title: "Infrastructure & Network Maintenance",
      description:
        "Memahami arsitektur jaringan lokal LAN/WLAN, crimping & pengujian kabel, konfigurasi switch unmanaged/managed (MikroTik/Cisco), pemetaan subnet, serta koordinasi penanganan gangguan konektivitas."
    },
    {
      icon: Layers,
      title: "IT Asset & Inventory Management",
      description:
        "Menerapkan tata kelola aset IT berbasis data terstruktur: pencatatan unit baru, pelabelan barcode/QR code unik, audit fisik berkala, pemeliharaan log servis, dan pemantauan masa garansi guna meminimalisir downtime."
    },
    {
      icon: ShieldCheck,
      title: "Cybersecurity & System Hardening",
      description:
        "Memiliki komitmen tinggi terhadap keamanan siber defensif, inspeksi port menggunakan Nmap, analisis protokol jaringan dengan Wireshark, pemahaman ancaman OWASP Top 10, dan penegakan kebijakan keamanan endpoint."
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Tentang Vino"
          title="Latar Belakang & Filosofi Profesional"
          description="Kombinasi keahlian praktikal dukungan operasional IT di lapangan dengan fondasi akademis ilmu komputer dan pengembangan sistem perangkat lunak modern."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Detailed Editorial Narrative (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              Saya adalah lulusan <strong>S1 Teknik Informatika</strong> dari <strong>Telkom University Purwokerto</strong> yang memiliki dedikasi kuat dalam memastikan keandalan ekosistem teknologi informasi. Saat ini saya berkontribusi aktif sebagai <strong>IT Support L1 di Kirana Team / SIG Site Rembang</strong>.
            </p>
            <p>
              Bekerja di lingkungan industri operasional menuntut pemecahan masalah (troubleshooting) yang cepat, akurat, dan terukur. Saya terbiasa menangani tantangan teknis mulai dari kegagalan booting sistem operasi, anomali jaringan lokal pada area pabrik, hingga pemeliharaan armada printer dan PC kerja staf di bawah standar kepatuhan <em>Service Level Agreement (SLA)</em> yang ketat.
            </p>
            <p>
              Di samping keahlian operasional IT, saya aktif mengembangkan perangkat lunak berbasis web modern menggunakan <strong>Next.js, TypeScript, React, dan Tailwind CSS</strong>. Keterampilan pemrograman ini memungkinkan saya tidak hanya merawat infrastruktur fisik, namun juga membangun aplikasi internal yang mengotomasi alur kerja manual—seperti sistem inventaris aset dan portal pelaporan teknisi.
            </p>
            <p>
              Dengan antusiasme mendalam pada bidang <strong>Cybersecurity</strong>, saya senantiasa menerapkan prinsip <em>least privilege</em>, kehati-hatian integritas data, dan audit kerentanan port sistem guna memastikan seluruh alur teknologi berjalan aman dan andal.
            </p>

            {/* Academic & Professional Checklist */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200">
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>S1 Teknik Informatika (Telkom Univ)</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Pengalaman Industri Site Nyata</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Pencatatan Aset IT & Audit Terpadu</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Mindset Rekayasa Software & Keamanan</span>
              </div>
            </div>
          </div>

          {/* Pillars Cards (Cols 8-12) */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                        {pillar.title}
                      </h3>
                      <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

