"use client";

import React, { useState } from "react";
import SectionHeading from "./SectionHeading";
import { personalInfo } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { 
  Mail, 
  Send, 
  Loader2, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  Clock, 
  MapPin 
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "", // anti-spam
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseMsg, setResponseMsg] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setResponseMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Gagal mengirimkan pesan.");
      }

      setStatus("success");
      setResponseMsg(data.message || "Pesan Anda berhasil dikirim! Saya akan segera merespons.");
      setFormData({ name: "", email: "", subject: "", message: "", honeypot: "" });
    } catch (err: unknown) {
      setStatus("error");
      const errorMessage = err instanceof Error ? err.message : "Terjadi kesalahan koneksi. Silakan coba kembali.";
      setResponseMsg(errorMessage);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Komunikasi & Kolaborasi"
          title="Hubungi Vino Rifhendi"
          description="Terbuka untuk peluang karir, diskusi seputar IT Support & infrastruktur site, proyek software engineering, maupun eksplorasi keamanan siber."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Direct Contact Info & Cards (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Email Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                    Email Langsung
                  </h3>
                  <p className="text-xs text-slate-500 font-mono">
                    Inbox Prioritas
                  </p>
                </div>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-lg border border-slate-200/70 dark:border-slate-700/60 flex items-center justify-between gap-2">
                <span className="font-mono text-xs sm:text-sm text-slate-800 dark:text-slate-200 truncate">
                  {personalInfo.email}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Salin alamat email"
                  className="p-1.5 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors shrink-0"
                >
                  {copiedEmail ? (
                    <span className="flex items-center gap-1 text-[11px] text-emerald-600 font-medium">
                      <Check className="w-3.5 h-3.5" /> Tersalin
                    </span>
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="space-y-2 pt-1 text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Estimasi respons: Dalam kurun 24 jam</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{personalInfo.location} (WIB / UTC+7)</span>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs space-y-3">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
                Profil & Repository
              </h4>

              <div className="space-y-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg border border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                    <div>
                      <div className="text-xs font-medium text-slate-900 dark:text-white">GitHub</div>
                      <div className="text-[11px] text-slate-500 font-mono">github.com/rifhendi</div>
                    </div>
                  </div>
                  <span className="text-xs text-blue-600 dark:text-blue-400">Kunjungi ↗</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg border border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="w-4 h-4 text-blue-600" />
                    <div>
                      <div className="text-xs font-medium text-slate-900 dark:text-white">LinkedIn</div>
                      <div className="text-[11px] text-slate-500 font-mono">linkedin.com/in/vinorifhendi</div>
                    </div>
                  </div>
                  <span className="text-xs text-blue-600 dark:text-blue-400">Kunjungi ↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form (Cols 6-12) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                Kirimkan Pesan
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                Formulir terhubung aman dengan Resend API. Email akan diteruskan langsung ke vinorifhendi@gmail.com.
              </p>

              {/* Status Notifications */}
              {status === "success" && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                  <div className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-200">
                    <div className="font-semibold">Pesan Terkirim!</div>
                    <div>{responseMsg}</div>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 mt-0.5 shrink-0" />
                  <div className="text-xs sm:text-sm text-rose-800 dark:text-rose-200">
                    <div className="font-semibold">Gagal Mengirim</div>
                    <div>{responseMsg}</div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot hidden input */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300"
                    >
                      Nama Lengkap <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Budi Santoso"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300"
                    >
                      Alamat Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. budi@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300"
                  >
                    Subjek <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    placeholder="e.g. Peluang IT Support / Project Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300"
                  >
                    Isi Pesan <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    placeholder="Tuliskan detail pesan, kebutuhan teknis, atau penawaran kerja sama..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all resize-y"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2 flex items-center justify-between">
                  <div className="text-[11px] font-mono text-slate-400">
                    Penerima: <span className="text-blue-500">vinorifhendi@gmail.com</span>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-xs cursor-pointer"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Mengirim Pesan...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
