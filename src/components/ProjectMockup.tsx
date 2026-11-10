import React from "react";
import { MockupType } from "@/types/portfolio";
import {
  Server,
  HardDrive,
  Clock,
  CheckCircle2,
  Terminal,
  Barcode,
  Bot,
  Gamepad2,
  FileSpreadsheet,
  Radio
} from "lucide-react";

interface ProjectMockupProps {
  type: MockupType;
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
          <span className="ml-2 text-[11px] text-slate-400 font-sans truncate max-w-[200px]">
            {title}
          </span>
        </div>
        <div className="text-[10px] text-slate-500 tracking-wider hidden sm:flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>PRODUCTION VERIFIED</span>
        </div>
      </div>

      {/* Mockup Interior by Type */}
      <div className="p-3.5 flex-1 flex flex-col justify-between bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden text-slate-300">

        {/* 1. AssetFlow Mockup */}
        {type === "assetflow" && (
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-1.5">
              <div className="flex items-center gap-2">
                <Barcode className="w-4 h-4 text-blue-400" />
                <span className="text-slate-200 font-sans font-medium text-[11px]">
                  AssetFlow — BAST Engine & QR Tracking
                </span>
              </div>
              <span className="text-[10px] bg-blue-500/10 text-blue-400 px-1.5 py-0.5 rounded border border-blue-500/20">
                1,248 Registered Assets
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-slate-800/50 p-2 rounded border border-slate-800">
                <div className="text-[9px] text-slate-400">ASSIGNED</div>
                <div className="text-sm font-bold text-emerald-400 font-sans mt-0.5">412 Units</div>
                <div className="text-[9px] text-slate-400 flex items-center gap-1 mt-1">
                  <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" /> BAST Signed
                </div>
              </div>
              <div className="bg-slate-800/50 p-2 rounded border border-slate-800">
                <div className="text-[9px] text-slate-400">AVAILABLE</div>
                <div className="text-sm font-bold text-blue-400 font-sans mt-0.5">822 Units</div>
                <div className="text-[9px] text-blue-400/80 flex items-center gap-1 mt-1">
                  <HardDrive className="w-2.5 h-2.5" /> Pool Warehouse
                </div>
              </div>
              <div className="bg-slate-800/50 p-2 rounded border border-slate-800">
                <div className="text-[9px] text-slate-400">MAINTENANCE</div>
                <div className="text-sm font-bold text-amber-400 font-sans mt-0.5">14 Units</div>
                <div className="text-[9px] text-amber-400/80 flex items-center gap-1 mt-1">
                  <Clock className="w-2.5 h-2.5" /> In Repair SLA
                </div>
              </div>
            </div>
            <div className="bg-slate-950/70 p-1.5 rounded border border-slate-800/70 text-[10px] text-slate-400 flex items-center justify-between">
              <div className="flex items-center gap-2 truncate">
                <span className="text-blue-400 font-mono">BAST-2024-SIG-089</span>
                <span className="text-slate-300 font-sans">Lenovo ThinkPad T14 Gen 4</span>
              </div>
              <span className="text-emerald-400 text-[9px] bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/50 shrink-0">
                ATOMIC TRANSFERRED
              </span>
            </div>
          </div>
        )}

        {/* 2. We-recap Mockup */}
        {type === "werecap" && (
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-1.5">
              <div className="flex items-center gap-1.5 text-slate-200 font-sans font-medium text-[11px]">
                <Server className="w-3.5 h-3.5 text-purple-400" />
                <span>.NET 10 LTS · Manage Service SIG Site Rembang</span>
              </div>
              <span className="text-[10px] bg-purple-500/10 text-purple-400 px-1.5 py-0.5 rounded border border-purple-500/20">
                PostgreSQL Synced
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-slate-800/50 p-2 rounded border border-slate-800 flex flex-col justify-between">
                <span className="text-[9px] text-slate-400">Engineer On Site (EOS)</span>
                <span className="text-sm font-bold text-white font-sans">32/32 Roster Active</span>
                <span className="text-[9px] text-emerald-400 font-medium">Shift 1 (07:00 - 15:00 WIB)</span>
              </div>
              <div className="bg-slate-800/50 p-2 rounded border border-slate-800 flex flex-col justify-between">
                <span className="text-[9px] text-slate-400">Official Site Report</span>
                <span className="text-sm font-bold text-blue-400 font-sans">Laporan Resmi SIG</span>
                <span className="text-[9px] text-slate-300">Verified by Site Lead</span>
              </div>
            </div>
            <div className="bg-slate-950/70 p-1.5 rounded border border-slate-800/70 flex items-center justify-between text-[10px] text-slate-400">
              <span className="font-sans">Modular Architecture:</span>
              <span className="text-emerald-400 font-mono">Multi-device Instant Sync OK</span>
            </div>
          </div>
        )}

        {/* 3. MainPRO (MaintAI) Mockup */}
        {type === "mainpro" && (
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-1.5">
              <div className="flex items-center gap-1.5 text-slate-200 font-sans font-medium text-[11px]">
                <Bot className="w-3.5 h-3.5 text-blue-400" />
                <span>MaintAI CMMS · Google Gemini AI PM Advisor</span>
              </div>
              <span className="text-[10px] bg-blue-500/10 text-blue-400 px-1.5 py-0.5 rounded border border-blue-500/20">
                PM Compliance 98.4%
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-slate-800/50 p-1.5 rounded border border-slate-800">
                <div className="text-[9px] text-slate-400">MTBF</div>
                <div className="text-xs font-bold text-emerald-400 font-sans">348 Hours</div>
                <div className="text-[8px] text-slate-400">Target &gt; 300h</div>
              </div>
              <div className="bg-slate-800/50 p-1.5 rounded border border-slate-800">
                <div className="text-[9px] text-slate-400">MTTR</div>
                <div className="text-xs font-bold text-blue-400 font-sans">1.8 Hours</div>
                <div className="text-[8px] text-slate-400">Rapid Recovery</div>
              </div>
              <div className="bg-slate-800/50 p-1.5 rounded border border-slate-800">
                <div className="text-[9px] text-slate-400">Work Orders</div>
                <div className="text-xs font-bold text-amber-400 font-sans">42 Closed</div>
                <div className="text-[8px] text-emerald-400">0 Overdue</div>
              </div>
            </div>
            <div className="bg-slate-950/70 p-1.5 rounded border border-slate-800/70 text-[9px] text-slate-400 flex items-center justify-between">
              <span className="text-slate-300 font-sans">Gemini Insight: #CRUSHER-04 bearing overhaul recommended</span>
              <span className="text-blue-400 font-mono">WO-AUTO</span>
            </div>
          </div>
        )}

        {/* 4. Livestock360 Mockup */}
        {type === "livestock360" && (
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-1.5">
              <div className="flex items-center gap-1.5 text-slate-200 font-sans font-medium text-[11px]">
                <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                <span>Livestock360 · Real-Time GPS Tracker GIS</span>
              </div>
              <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/20">
                Simulator Engine 2.5x
              </span>
            </div>
            <div className="bg-slate-950/80 p-2 rounded border border-slate-800 font-mono text-[10px] space-y-1">
              <div className="flex justify-between text-slate-400">
                <span>Geofence Boundary:</span>
                <span className="text-emerald-400 font-semibold">ALL IN-BOUNDS (0 Breach)</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Telemetry Node #LS-184:</span>
                <span className="text-blue-400">Lat: -6.9172 | Lng: 111.4589</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Vital Signs Status:</span>
                <span className="text-emerald-400">Body Temp: 38.6°C (Normal)</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-400">
              <span className="font-sans">Leaflet GIS & Telemetry:</span>
              <span className="text-emerald-400 font-sans">148 Active GPS Nodes Tracked</span>
            </div>
          </div>
        )}

        {/* 5. VIRELIST Mockup */}
        {type === "virelist" && (
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-1.5">
              <div className="flex items-center gap-1.5 text-slate-200 font-sans font-medium text-[11px]">
                <Gamepad2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>VIRELIS: Retro 8-bit Cellular Puzzle Game</span>
              </div>
              <span className="text-[10px] bg-cyan-500/10 text-cyan-400 px-1.5 py-0.5 rounded border border-cyan-500/20">
                PLAY ONLINE (PWA)
              </span>
            </div>
            <div className="bg-slate-950/90 p-2 rounded border border-slate-800 font-mono text-[10px] space-y-1">
              <div className="flex justify-between text-cyan-300">
                <span>STAGE 14: MAGMA CAVERN</span>
                <span className="text-amber-400">PRIMORDIAL DNA: 48/50</span>
              </div>
              <div className="text-slate-400">
                Organism Form: <span className="text-emerald-400">Flagellated Membrane (Heat Resisting)</span>
              </div>
              <div className="text-[9px] text-slate-500">
                Controls: [W/A/S/D] Move · [U] Undo · [E] Morphological Evolve
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-400">
              <span>Web Audio API Synthesizer:</span>
              <span className="text-cyan-400 font-sans">35 Challenging Levels · Offline Ready</span>
            </div>
          </div>
        )}

        {/* 6. Absensi_MS Mockup */}
        {type === "absensi" && (
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-1.5">
              <div className="flex items-center gap-1.5 text-slate-200 font-sans font-medium text-[11px]">
                <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400" />
                <span>Absensi MS · Overtime Calculation & ExcelJS</span>
              </div>
              <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/20">
                ExcelJS Formatted
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-slate-800/50 p-1.5 rounded border border-slate-800">
                <div className="text-[9px] text-slate-400">Effective Hours</div>
                <div className="text-xs font-bold text-white font-sans">176 Hours</div>
                <div className="text-[8px] text-emerald-400">Full Schedule</div>
              </div>
              <div className="bg-slate-800/50 p-1.5 rounded border border-slate-800">
                <div className="text-[9px] text-slate-400">Overtime (SPL)</div>
                <div className="text-xs font-bold text-amber-400 font-sans">28.5 Hours</div>
                <div className="text-[8px] text-amber-400/90">Validated Site</div>
              </div>
              <div className="bg-slate-800/50 p-1.5 rounded border border-slate-800">
                <div className="text-[9px] text-slate-400">Attendance</div>
                <div className="text-xs font-bold text-emerald-400 font-sans">100% On-Time</div>
                <div className="text-[8px] text-slate-400">Zero Absence</div>
              </div>
            </div>
            <div className="bg-slate-950/70 p-1.5 rounded border border-slate-800/70 text-[9px] text-slate-400 flex items-center justify-between">
              <span className="text-slate-300 font-sans">Rekap_Absensi_EOS_Rembang.xlsx generated</span>
              <span className="text-emerald-400 font-mono">EXPORT READY</span>
            </div>
          </div>
        )}

        {/* 7. Myself Portfolio Mockup */}
        {type === "portfolio" && (
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-1.5">
              <div className="flex items-center gap-1.5 text-slate-200 font-sans font-medium text-[11px]">
                <Terminal className="w-3.5 h-3.5 text-blue-400" />
                <span>Vino Rifhendi — Next.js 16 App Router</span>
              </div>
              <span className="text-[10px] bg-blue-500/10 text-blue-400 px-1.5 py-0.5 rounded border border-blue-500/20">
                Resend API Ready
              </span>
            </div>
            <div className="bg-slate-950/70 p-2.5 rounded border border-slate-800 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-white font-sans font-semibold text-xs">Vino Rifhendi Setiawan</span>
                <span className="text-emerald-400 text-[9px] bg-emerald-950/70 px-1 rounded">Online</span>
              </div>
              <div className="text-[10px] text-slate-400 font-sans">
                IT Support L1 · Software Developer · S1 Telkom University Purwokerto
              </div>
              <div className="flex gap-1.5 pt-1">
                <span className="text-[9px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded">Next.js 16</span>
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
