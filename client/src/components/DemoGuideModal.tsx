import React from 'react';
import { BookOpen, ArrowRight, X } from 'lucide-react';

interface DemoGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (tab: string) => void;
}

export const DemoGuideModal: React.FC<DemoGuideModalProps> = ({ isOpen, onClose, onNavigate }) => {
  if (!isOpen) return null;

  const demoStepsList = [
    { step: 1, title: 'Show Smart Hive & Telemetry', tab: 'beekeeping', desc: 'Display simulated live IoT sensor data for HIVE-007 (Temp, Humidity, Weight, Battery).' },
    { step: 2, title: 'Show Honey Harvest & Batch Creation', tab: 'batches', desc: 'Inspect batch HC-2026-001 created by Ramesh Honey Farms in Nizamabad, Telangana.' },
    { step: 3, title: 'Show Quality Verification Lab Report', tab: 'quality', desc: 'View FSSAI lab purity certificate (99.8% pure, NMR Clean, C4 sugar passed).' },
    { step: 4, title: 'Show Immutable Blockchain Ledger', tab: 'blockchain', desc: 'Demonstrate SHA-256 block hash linking across harvest, testing, processing, distribution.' },
    { step: 5, title: 'Scan QR & Open Consumer Verification', tab: 'verify', desc: 'Navigate to consumer-facing page /verify/HC-2026-001.' },
    { step: 6, title: 'Show Digital Honey Passport', tab: 'verify', desc: 'Display "✓ AUTHENTIC HONEY" badge & full 7-stage vertical timeline.' },
    { step: 7, title: 'Simulate Tampering with Record', tab: 'tamper', desc: 'Mutate Block #2 payload quantity from 18 kg to 50 kg.' },
    { step: 8, title: 'Verify Blockchain Integrity', tab: 'tamper', desc: 'Click "Verify Blockchain" button to recalculate cryptographic hashes live.' },
    { step: 9, title: 'Show Tampering Detected Alert', tab: 'tamper', desc: 'Confirm red alert "🔴 TAMPERING DETECTED at Block #2" appears.' },
    { step: 10, title: 'Restore Authentic Block Data', tab: 'tamper', desc: 'Click "Restore Authentic Record" to repair block payload.' },
    { step: 11, title: 'Show Blockchain Verified Restored', tab: 'blockchain', desc: 'Re-run verification to confirm "🟢 BLOCKCHAIN VERIFIED" state.' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full border border-amber-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white/20 rounded-xl">
              <BookOpen className="h-6 w-6 text-slate-950" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-slate-950">Interactive Demonstration Guide</h2>
              <p className="text-xs font-semibold text-slate-900/80">Step-by-Step Presentation Guide</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-xl text-slate-950">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Script Steps List */}
        <div className="p-6 overflow-y-auto space-y-3 divide-y divide-slate-100 flex-1">
          {demoStepsList.map((s) => (
            <div key={s.step} className="pt-3 first:pt-0 flex items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="bg-amber-100 text-amber-900 text-[10px] font-black px-2 py-0.5 rounded-md uppercase">
                    STEP {s.step}
                  </span>
                  <span className="font-extrabold text-sm text-slate-900">{s.title}</span>
                </div>
                <p className="text-xs text-slate-500">{s.desc}</p>
              </div>

              <button
                onClick={() => {
                  onNavigate(s.tab);
                  onClose();
                }}
                className="px-3 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-900 font-bold text-xs rounded-xl transition-colors shrink-0 flex items-center space-x-1"
              >
                <span>Jump</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-slate-900 text-white font-bold text-xs rounded-xl hover:bg-slate-800 transition-colors"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
