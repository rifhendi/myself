import React from "react";
import { 
  Server, 
  HardDrive, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  AlertTriangle, 
  CheckCircle2, 
  Terminal, 
  Cpu, 
  Barcode 
} from "lucide-react";

interface ProjectMockupProps {
  type: "asset-management" | "attendance" | "helpdesk" | "security" | "portfolio";
  title: string;
}

export default function ProjectMockup({ type, title }: ProjectMockupProps) {
  return (
    <div className="w-full h-48 sm:h-56 bg-slate-900 rounded-t-lg overflow-hidden border-b border-slate-800 relative select-none flex flex-col font-mono text-xs">
      {/* Mockup Window Header */}
      <div className="h-8 bg-slate-950/90 border-b border-slate-800/80 px-3 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-[11px] text-slate-400 font-sans truncate max-w-[180px]">
            {title}
          </span>
        </div>
        <div className="text-[10px] text-slate-500 tracking-wider hidden sm:block">
          STATUS: OPERATIONAL
        </div>
      </div>

      {/* Mockup Interior by Type */}
      <div className="p-3.5 flex-1 flex flex-col justify-between bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden text-slate-300">
        {type === "asset-management" && (
          <div className="space-y-2.5">
            <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-2">
              <div className="flex items-center gap-2">
                <Barcode className="w-4 h-4 text-blue-400" />
                <span className="text-slate-200 font-sans font-medium text-[11px]">
                  SIG Site Rembang — Asset DB
                </span>
              </div>
              <span className="text-[10px] bg-blue-500/10 text-blue-400 px-1.5 py-0.5 rounded border border-blue-500/20">
                1,248 Verified Items
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-slate-800/50 p-2 rounded border border-slate-800">
                <div className="text-[10px] text-slate-400">Desktops/Laptops</div>
                <div className="text-sm font-bold text-white font-sans mt-0.5">412 Units</div>
                <div className="text-[9px] text-emerald-400 flex items-center gap-1 mt-1">
                  <CheckCircle2 className="w-2.5 h-2.5" /> 98.5% Active
                </div>
              </div>
              <div className="bg-slate-800/50 p-2 rounded border border-slate-800">
                <div className="text-[10px] text-slate-400">Network Switches</div>
                <div className="text-sm font-bold text-white font-sans mt-0.5">86 Nodes</div>
                <div className="text-[9px] text-blue-400 flex items-center gap-1 mt-1">
                  <Server className="w-2.5 h-2.5" /> Rack Rembang
                </div>
              </div>
              <div className="bg-slate-800/50 p-2 rounded border border-slate-800">
                <div className="text-[10px] text-slate-400">Maintenance</div>
                <div className="text-sm font-bold text-amber-400 font-sans mt-0.5">14 Units</div>
                <div className="text-[9px] text-amber-400/80 flex items-center gap-1 mt-1">
                  <HardDrive className="w-2.5 h-2.5" /> In Repair SLA
                </div>
              </div>
            </div>
            <div className="bg-slate-950/60 p-2 rounded border border-slate-800/60 text-[10px] text-slate-400 flex items-center justify-between">
              <div className="flex items-center gap-2 truncate">
                <span className="text-blue-400 font-mono">AST-RMB-2024-089</span>
                <span className="text-slate-300 font-sans">Dell OptiPlex 7090 MT</span>
              </div>
              <span className="text-emerald-400 text-[9px] bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/50 shrink-0">
                DEPLOYED
              </span>
            </div>
          </div>
        )}

        {type === "attendance" && (
          <div className="space-y-2.5">
            <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-2">
              <div className="flex items-center gap-1.5 text-slate-200 font-sans font-medium text-[11px]">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Geofence Site Rembang: Valid (0.01 km)</span>
              </div>
              <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/20">
                Shift 1 (07:00 - 15:00)
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-slate-800/50 p-2 rounded border border-slate-800 flex flex-col justify-between">
                <span className="text-[10px] text-slate-400">Tap-in Timestamp</span>
                <span className="text-base font-bold text-white font-sans">06:48:21 WIB</span>
                <span className="text-[9px] text-emerald-400 font-medium">On-Time (Early 11m)</span>
              </div>
              <div className="bg-slate-800/50 p-2 rounded border border-slate-800 flex flex-col justify-between">
                <span className="text-[10px] text-slate-400">Team Presence</span>
                <span className="text-base font-bold text-blue-400 font-sans">96.8% Present</span>
                <span className="text-[9px] text-slate-400">31/32 Roster Field</span>
              </div>
            </div>
            <div className="bg-slate-950/60 p-1.5 rounded border border-slate-800/60 flex items-center justify-between text-[10px] text-slate-400">
              <span className="font-sans">Overtime (SPL) Status:</span>
              <span className="text-blue-400 font-medium font-sans">Approved by Site Lead</span>
            </div>
          </div>
        )}

        {type === "helpdesk" && (
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-1.5">
              <div className="flex items-center gap-1.5 text-slate-200 font-sans font-medium text-[11px]">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Active Queue — SLA Response</span>
              </div>
              <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/20">
                SLA 98.2% Met
              </span>
            </div>
            <div className="space-y-1.5">
              <div className="bg-slate-800/60 p-1.5 rounded border border-slate-800 flex items-center justify-between text-[10px]">
                <div className="flex items-center gap-2 truncate">
                  <span className="text-rose-400 font-bold">#HD-4821</span>
                  <span className="text-slate-200 font-sans truncate">Plant Switch Port Anomaly — Area Crusher</span>
                </div>
                <span className="text-rose-400 bg-rose-950/60 text-[9px] px-1 rounded border border-rose-800/40 shrink-0">
                  Critical
                </span>
              </div>
              <div className="bg-slate-800/60 p-1.5 rounded border border-slate-800 flex items-center justify-between text-[10px]">
                <div className="flex items-center gap-2 truncate">
                  <span className="text-blue-400 font-bold">#HD-4822</span>
                  <span className="text-slate-200 font-sans truncate">Thermal Weighbridge Printer Jammed</span>
                </div>
                <span className="text-amber-400 bg-amber-950/60 text-[9px] px-1 rounded border border-amber-800/40 shrink-0">
                  Medium
                </span>
              </div>
              <div className="bg-slate-800/60 p-1.5 rounded border border-slate-800 flex items-center justify-between text-[10px]">
                <div className="flex items-center gap-2 truncate">
                  <span className="text-slate-400 font-bold">#HD-4823</span>
                  <span className="text-slate-200 font-sans truncate">Workstation OS Image & Domain Rejoin</span>
                </div>
                <span className="text-emerald-400 bg-emerald-950/60 text-[9px] px-1 rounded border border-emerald-800/40 shrink-0">
                  Resolved
                </span>
              </div>
            </div>
          </div>
        )}

        {type === "security" && (
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-1.5">
              <div className="flex items-center gap-1.5 text-slate-200 font-sans font-medium text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>Nmap Security Parser & Hardening</span>
              </div>
              <span className="text-[10px] bg-rose-500/10 text-rose-400 px-1.5 py-0.5 rounded border border-rose-500/20">
                Risk Score: 18.5 (Low)
              </span>
            </div>
            <div className="bg-slate-950/90 p-2 rounded border border-slate-800 text-[10px] text-slate-400 font-mono space-y-0.5">
              <div className="text-slate-500"># nmap -sV -sC -T4 192.168.10.0/24</div>
              <div className="text-emerald-400">22/tcp  OPEN  OpenSSH 9.3p1 (Hardened)</div>
              <div className="text-blue-400">80/tcp  OPEN  nginx 1.24 (Redirect to 443)</div>
              <div className="text-amber-400">445/tcp FILTERED microsoft-ds (SMB block verified)</div>
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-400">
              <span>CIS Benchmark Hardening:</span>
              <span className="text-emerald-400 font-sans font-medium">14/15 Controls Passed</span>
            </div>
          </div>
        )}

        {type === "portfolio" && (
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-1.5">
              <div className="flex items-center gap-1.5 text-slate-200 font-sans font-medium text-[11px]">
                <Terminal className="w-3.5 h-3.5 text-blue-400" />
                <span>Vino Rifhendi — Next.js App Router</span>
              </div>
              <span className="text-[10px] bg-blue-500/10 text-blue-400 px-1.5 py-0.5 rounded border border-blue-500/20">
                100 Lighthouse
              </span>
            </div>
            <div className="bg-slate-950/70 p-2.5 rounded border border-slate-800 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-white font-sans font-semibold text-xs">Vino Rifhendi Setiawan</span>
                <span className="text-emerald-400 text-[9px] bg-emerald-950/70 px-1 rounded">Available</span>
              </div>
              <div className="text-[10px] text-slate-400 font-sans">
                IT Support L1 · Software Developer · Cybersecurity Enthusiast
              </div>
              <div className="flex gap-1.5 pt-1">
                <span className="text-[9px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded">Next.js</span>
                <span className="text-[9px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded">TypeScript</span>
                <span className="text-[9px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded">Tailwind</span>
                <span className="text-[9px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded">Resend</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

