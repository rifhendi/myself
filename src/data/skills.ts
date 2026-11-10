import { SkillCategory } from "@/types/portfolio";

export const skillCategories: SkillCategory[] = [
  {
    title: "IT Support & Infrastructure",
    iconName: "HardDrive",
    description: "Pemeliharaan hardware, troubleshooting sistem operasi, penanganan insiden helpdesk, dan siklus hidup aset IT enterprise.",
    skills: [
      { name: "Hardware Diagnostics & Assembly", level: "Core", description: "PC/Laptop teardown, component testing, RAM/Storage upgrade" },
      { name: "OS Troubleshooting (Windows)", level: "Core", description: "Kernel errors, registry, services, boot repair, driver management" },
      { name: "Printer & Peripheral Maintenance", level: "Core", description: "Network printer, thermal printer, scanner setup, spooler fix" },
      { name: "IT Asset Management", level: "Core", description: "Tagging, tracking, procurement record, hardware audit" },
      { name: "IT Helpdesk & SLA Incident Handling", level: "Core", description: "Ticket categorization, remote resolution, escalation protocol" },
      { name: "Data Backup & Disaster Recovery", level: "Core", description: "Local backup, image ghosting, storage redundancy recovery" }
    ]
  },
  {
    title: "Network & System Administration",
    iconName: "Network",
    description: "Konfigurasi jaringan komputer lokal, manajemen perangkat switching, routing, dan administrasi direktori pengguna.",
    skills: [
      { name: "TCP/IP Networking & Subnetting", level: "Core", description: "IPv4 addressing, CIDR, VLAN segmentation, routing concepts" },
      { name: "LAN / WLAN Infrastructure", level: "Core", description: "Access Point configuration, wireless security, RJ45 cabling standards" },
      { name: "Switch & Router Configuration (MikroTik/Cisco)", level: "Core", description: "Port management, NAT, DHCP pool, bandwidth management" },
      { name: "Active Directory & User Access Management", level: "Core", description: "Domain join, user permissions, password policies" },
      { name: "DNS, DHCP & Gateway Services", level: "Core", description: "Name resolution, IP leasing, static IP reservation, gateway routing" },
      { name: "VPN & Remote Connection Tools", level: "Core", description: "IPsec/OpenVPN, AnyDesk, TeamViewer, RDP protocols" }
    ]
  },
  {
    title: "Software Development",
    iconName: "Code",
    description: "Pengembangan aplikasi web modern full-stack dengan arsitektur bersih, performa tinggi, dan pengalaman pengguna optimal.",
    skills: [
      { name: "TypeScript & Modern JavaScript", level: "Core", description: "Type-safety, ES6+, async/await, modular design" },
      { name: "Next.js (App Router)", level: "Core", description: "Server components, API routes, SSR, SSG, caching strategies" },
      { name: "React.js", level: "Core", description: "Hooks, state management, reusable component hierarchy" },
      { name: "Tailwind CSS", level: "Core", description: "Responsive layouts, clean design system, modern utility-first CSS" },
      { name: "Node.js & Express / RESTful APIs", level: "Core", description: "Endpoint design, middleware, authentication, data formatting" },
      { name: "Relational Databases (PostgreSQL / MySQL)", level: "Core", description: "Schema design, relational queries, indexing, CRUD operations" },
      { name: "Git & Version Control", level: "Core", description: "Branching, PRs, versioning, team collaboration via GitHub" }
    ]
  },
  {
    title: "Cybersecurity",
    iconName: "ShieldCheck",
    description: "Prinsip keamanan informasi, hardening sistem workstation/server, pengujian kerentanan, dan mitigasi ancaman digital.",
    skills: [
      { name: "Network Security Fundamentals", level: "Core", description: "Port filtering, firewall rules, sniffing analysis, packet inspection" },
      { name: "Vulnerability Scanning & Nmap", level: "Core", description: "Reconnaissance, service enumeration, open port assessment" },
      { name: "Wireshark Packet Analysis", level: "Core", description: "Protocol dissection, anomaly detection, network traffic inspection" },
      { name: "OWASP Top 10 Awareness", level: "Core", description: "SQL Injection, XSS, CSRF, insecure authentication prevention" },
      { name: "Endpoint Protection & Antivirus Management", level: "Core", description: "EDR fundamentals, malware remediation, USB port restrictions" },
      { name: "System Hardening & Security Best Practices", level: "Core", description: "Least privilege access, disabled unused services, patch hygiene" }
    ]
  },
  {
    title: "Tools & Technologies",
    iconName: "Wrench",
    description: "Koleksi tools, utilities, dan platform yang digunakan untuk mendukung alur kerja harian teknis dan rekayasa software.",
    skills: [
      { name: "VS Code & Git CLI", level: "Core" },
      { name: "Linux Terminal / Bash Scripting", level: "Core" },
      { name: "Postman API Client", level: "Core" },
      { name: "Windows Server Management Tools", level: "Core" },
      { name: "Docker (Basic Containerization)", level: "Familiar" },
      { name: "Vercel & Cloud Deployment", level: "Core" },
      { name: "Microsoft 365 Admin Center", level: "Core" },
      { name: "Hardware Multimeter & Cable Tester", level: "Core" }
    ]
  }
];

