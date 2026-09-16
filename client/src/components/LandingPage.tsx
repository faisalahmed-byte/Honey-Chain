import React from 'react';
import { 
  ArrowRight, Lock, Cpu, 
  Search, Award, AlertCircle, CheckCircle2, Sparkles, Layers
} from 'lucide-react';

interface LandingPageProps {
  onNavigate: (tab: string) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 pb-16">
      <div className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-yellow-50/50 to-white rounded-3xl p-8 lg:p-14 border border-amber-200/80 shadow-xs">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-amber-100/80 border border-amber-300 px-3 py-1 rounded-full text-xs font-bold text-amber-900 shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-amber-600" />
            <span>Enterprise Traceability & Smart Apiary Platform</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            HONEY CHAIN
            <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent mt-2">
              From Hive to Home — Verified by Blockchain
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            An end-to-end honey traceability and smart beekeeping platform that connects beekeepers, 
            processors, distributors and consumers through a trusted, tamper-proof digital supply chain.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('traceability')}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-extrabold text-base shadow-lg shadow-amber-300/50 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center space-x-2.5"
            >
              <Search className="h-5 w-5 text-white" />
              <span>Explore Traceability Journey</span>
              <ArrowRight className="h-4 w-4 text-amber-100" />
            </button>

            <button
              onClick={() => onNavigate('verify')}
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-amber-50 text-slate-800 font-bold text-base border-2 border-amber-300 shadow-sm hover:border-amber-400 transition-all flex items-center space-x-2"
            >
              <span>Consumer Honey Passport</span>
            </button>
          </div>

          <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center max-w-3xl mx-auto border-t border-amber-200/60 mt-6">
            <div>
              <div className="text-2xl font-extrabold text-amber-900">100%</div>
              <div className="text-xs font-medium text-slate-500">SHA-256 Hashed</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-amber-900">4,850 kg</div>
              <div className="text-xs font-medium text-slate-500">Traced Batches</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-amber-900">121/128</div>
              <div className="text-xs font-medium text-slate-500">Verified Quality</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-amber-900">&lt; 2 sec</div>
              <div className="text-xs font-medium text-slate-500">QR Verification</div>
            </div>
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl font-bold text-slate-900">Three Pillar Innovation</h2>
          <p className="text-sm text-slate-600">
            Solving key honey industry challenges with modern blockchain and smart IoT telemetry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-amber-200/80 shadow-2xs hover:shadow-md transition-shadow space-y-3">
            <div className="h-12 w-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
              <Lock className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">1. Blockchain Traceability</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every extraction, quality test, filtering run, and transport dispatch generates a cryptographically 
              linked SHA-256 block. Any unauthorized alteration breaks the hash chain instantly.
            </p>
            <div className="pt-2 text-xs font-bold text-amber-600 flex items-center space-x-1">
              <span>Explore Blockchain Ledger</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-amber-200/80 shadow-2xs hover:shadow-md transition-shadow space-y-3">
            <div className="h-12 w-12 rounded-xl bg-green-100 flex items-center justify-center text-emerald-700">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">2. Honey Authenticity</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Consumers scan the package QR code to inspect complete purity certifications, pollen floral origins 
              (Neem, Lychee, Mustard), FSSAI lab reports, and cold-chain temperature logs.
            </p>
            <div className="pt-2 text-xs font-bold text-emerald-600 flex items-center space-x-1">
              <span>Try QR Consumer Page</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-amber-200/80 shadow-2xs hover:shadow-md transition-shadow space-y-3">
            <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700">
              <Cpu className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">3. Smart Beekeeping</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              IoT sensors monitor hive temperature, humidity, honey reserves, and colony strength. The Smart Recommendation 
              Engine alerts beekeepers to heat stress or mite risks before honey loss occurs.
            </p>
            <div className="pt-2 text-xs font-bold text-blue-600 flex items-center space-x-1">
              <span>View Apiary Telemetry</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-slate-900 text-white rounded-3xl p-8 lg:p-10 space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Platform Value Proposition</span>
              <h2 className="text-2xl font-bold text-white mt-1">Why Honey Chain Matters for India</h2>
            </div>
            <button
              onClick={() => onNavigate('architecture')}
              className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center space-x-1.5"
            >
              <Layers className="h-4 w-4" />
              <span>Full System Architecture</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4 bg-slate-800/60 p-5 rounded-2xl border border-slate-700/80">
              <div className="flex items-center space-x-2 text-red-400 font-bold text-base">
                <AlertCircle className="h-5 w-5" />
                <span>The Industry Challenges</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start space-x-2">
                  <span className="text-red-400 mt-0.5">•</span>
                  <span><strong>Widespread Adulteration:</strong> Rice & C4 sugar syrups blended undetected into commercial honey.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-400 mt-0.5">•</span>
                  <span><strong>Lack of Transparency:</strong> Consumers cannot verify floral origin, apiary location, or extraction dates.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-400 mt-0.5">•</span>
                  <span><strong>Paper Records & Fraud:</strong> Traditional paper logs can easily be altered or lost across middleman hands.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-400 mt-0.5">•</span>
                  <span><strong>Beekeeper Disconnect:</strong> Smallholder beekeepers receive low margins without digital proof of quality.</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4 bg-amber-950/40 p-5 rounded-2xl border border-amber-800/60">
              <div className="flex items-center space-x-2 text-amber-400 font-bold text-base">
                <CheckCircle2 className="h-5 w-5" />
                <span>The Honey Chain Solution</span>
              </div>
              <ul className="space-y-2.5 text-xs text-amber-100/90">
                <li className="flex items-start space-x-2">
                  <span className="text-amber-400 mt-0.5">✓</span>
                  <span><strong>Cryptographic Event Blocks:</strong> Every supply-chain step is SHA-256 linked and immutable.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-amber-400 mt-0.5">✓</span>
                  <span><strong>Instant QR Consumer Proof:</strong> Scannable batch profile with complete laboratory test parameters.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-amber-400 mt-0.5">✓</span>
                  <span><strong>Tamper Detection Engine:</strong> Automated hash check reveals exact compromised block index.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-amber-400 mt-0.5">✓</span>
                  <span><strong>Smart Hive IoT Management:</strong> Rule-based sensor alerts protect hive productivity.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
