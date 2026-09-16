import React from 'react';
import { Layers } from 'lucide-react';

export const ArchitectureView: React.FC = () => {
  const techStack = [
    { title: 'Frontend Framework', name: 'React + Vite', desc: 'Fast, modular UI powered by TypeScript and Tailwind CSS' },
    { title: 'Backend Runtime', name: 'Node.js + Express', desc: 'RESTful API architecture handling batch workflows and verification' },
    { title: 'Database Storage', name: 'SQLite (better-sqlite3)', desc: 'Lightweight, file-backed relational database running locally' },
    { title: 'Blockchain Engine', name: 'SHA-256 Hashing', desc: 'Immutable block linking with previous hash dependency' },
    { title: 'Consumer Verification', name: 'QRCode.react', desc: 'Dynamic QR code generation pointing to batch verification pages' },
    { title: 'Geographic Mapping', name: 'Leaflet & OpenStreetMap', desc: 'Interactive supply-chain route mapping without paid API keys' }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-10">
      <div className="bg-white p-6 rounded-2xl border border-amber-200/80 shadow-2xs">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
            <Layers className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-slate-900">System Architecture & Tech Stack</h2>
            <p className="text-xs text-slate-500">
              Honey Chain Technical Architecture & Component Diagram Overview
            </p>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl space-y-6">
        <h3 className="font-extrabold text-lg text-amber-400">Honey Supply Chain Digital Pipeline Flow</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-semibold">
          <div className="p-4 bg-slate-800 rounded-2xl border border-slate-700 space-y-2">
            <div className="text-xl">🐝</div>
            <div className="font-bold text-amber-300">1. Beehive / Beekeeper</div>
            <p className="text-slate-300 text-[11px]">Harvest extraction data recorded along with IoT hive telemetry sensors.</p>
          </div>

          <div className="p-4 bg-slate-800 rounded-2xl border border-slate-700 space-y-2">
            <div className="text-xl">⛓️</div>
            <div className="font-bold text-amber-300">2. SHA-256 Ledger</div>
            <p className="text-slate-300 text-[11px]">Genesis block minted. Subsequent events link to previous block hash.</p>
          </div>

          <div className="p-4 bg-slate-800 rounded-2xl border border-slate-700 space-y-2">
            <div className="text-xl">🧪</div>
            <div className="font-bold text-amber-300">3. Quality & Processing</div>
            <p className="text-slate-300 text-[11px]">Lab purity test parameters & thermal processing appended to chain.</p>
          </div>

          <div className="p-4 bg-slate-800 rounded-2xl border border-slate-700 space-y-2">
            <div className="text-xl">📱</div>
            <div className="font-bold text-amber-300">4. Consumer QR Scan</div>
            <p className="text-slate-300 text-[11px]">Instant authenticity validation with full timeline proof and map route.</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-extrabold text-lg text-slate-900">Implemented Technology Stack</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {techStack.map((tech, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-amber-200/80 shadow-2xs space-y-2">
              <div className="text-xs font-bold text-amber-700 uppercase">{tech.title}</div>
              <div className="font-extrabold text-slate-900 text-base">{tech.name}</div>
              <p className="text-xs text-slate-500 leading-relaxed">{tech.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
