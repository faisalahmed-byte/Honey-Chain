import React from 'react';
import { BarChart2, TrendingUp, Cpu, Sparkles, Users, Package, ShieldCheck } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, LineChart, Line } from 'recharts';

export const AnalyticsView: React.FC = () => {
  const enterpriseMetrics = [
    { label: 'Registered Beekeepers', value: '1,240', change: '+8% this quarter', icon: Users },
    { label: 'Active Hives Monitored', value: '8,560', change: '99.4% uptime', icon: Cpu },
    { label: 'Honey Batches Traced', value: '4,382', change: '+12% volume', icon: Package },
    { label: 'Verified Passports', value: '4,120', change: '94% Lab Approved', icon: ShieldCheck },
  ];

  const hiveProductionData = [
    { hive: 'HIVE-001', yieldKg: 28.5 },
    { hive: 'HIVE-002', yieldKg: 26.2 },
    { hive: 'HIVE-003', yieldKg: 22.0 },
    { hive: 'HIVE-004', yieldKg: 18.4 },
    { hive: 'HIVE-005', yieldKg: 32.1 },
    { hive: 'HIVE-006', yieldKg: 30.0 },
    { hive: 'HIVE-007', yieldKg: 19.4 },
    { hive: 'HIVE-008', yieldKg: 25.8 },
    { hive: 'HIVE-009', yieldKg: 14.2 },
    { hive: 'HIVE-010', yieldKg: 29.0 },
  ];

  const hiveTempHumidity = [
    { hive: 'HIVE-001', temp: 34.2, humidity: 61 },
    { hive: 'HIVE-002', temp: 33.8, humidity: 59 },
    { hive: 'HIVE-003', temp: 35.1, humidity: 62 },
    { hive: 'HIVE-004', temp: 38.6, humidity: 45 },
    { hive: 'HIVE-005', temp: 32.4, humidity: 68 },
    { hive: 'HIVE-006', temp: 32.1, humidity: 70 },
    { hive: 'HIVE-007', temp: 36.8, humidity: 78 },
    { hive: 'HIVE-008', temp: 34.0, humidity: 65 },
    { hive: 'HIVE-009', temp: 26.2, humidity: 82 },
    { hive: 'HIVE-010', temp: 23.5, humidity: 55 },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-xl bg-amber-50 text-amber-800 border border-amber-200 flex items-center justify-center">
            <BarChart2 className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-slate-900">National Honey Analytics & Yield Optimization</h2>
            <p className="text-xs text-slate-500">
              Enterprise supply-chain analytics, apiary yield correlations, and predictive hive insights
            </p>
          </div>
        </div>
      </div>

      {/* Enterprise Metrics Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {enterpriseMetrics.map((m, idx) => {
          const Icon = m.icon;
          return (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">{m.label}</span>
                <div className="p-1.5 rounded-lg bg-slate-100 text-slate-700">
                  <Icon className="h-4 w-4" />
                </div>
              </div>
              <div className="text-3xl font-black text-slate-900 font-mono">{m.value}</div>
              <div className="text-[10px] font-bold text-emerald-700">{m.change}</div>
            </div>
          );
        })}
      </div>

      {/* AI Recommendations Panel */}
      <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 space-y-3">
        <div className="flex items-center space-x-2 text-amber-400 font-extrabold text-xs font-mono uppercase tracking-wider">
          <Sparkles className="h-4 w-4 text-amber-400" />
          <span>Automated Apiary Yield Optimizations</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="p-3.5 bg-slate-800 rounded-xl border border-slate-700 space-y-1">
            <div className="font-bold text-amber-300">Hive HIVE-004 Thermal Management</div>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              Internal temp (38.6°C) exceeds optimal range. Expand hive shade screens to prevent comb melt.
            </p>
          </div>

          <div className="p-3.5 bg-slate-800 rounded-xl border border-slate-700 space-y-1">
            <div className="font-bold text-amber-300">Hive HIVE-007 Humidity & Pest Risk</div>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              Relative humidity (78%) correlation requires moisture ventilation and organic Varroa inspection.
            </p>
          </div>

          <div className="p-3.5 bg-slate-800 rounded-xl border border-slate-700 space-y-1">
            <div className="font-bold text-amber-300">Hive HIVE-005 High Performer</div>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              Peak yield achievement (32.1 kg). Recommend queen grafting from HIVE-005 for colony splitting.
            </p>
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs space-y-4">
          <h3 className="font-extrabold text-sm text-slate-900 flex items-center space-x-2">
            <TrendingUp className="h-4 w-4 text-amber-600" />
            <span>Honey Production Yield per Hive (kg)</span>
          </h3>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={hiveProductionData}>
                <XAxis dataKey="hive" tick={{ fontSize: 10 }} />
                <YAxis tick={{ fontSize: 10 }} />
                <Tooltip formatter={(val: any) => [`${val} kg`, 'Yield']} />
                <Bar dataKey="yieldKg" fill="#d97706" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs space-y-4">
          <h3 className="font-extrabold text-sm text-slate-900 flex items-center space-x-2">
            <Cpu className="h-4 w-4 text-blue-600" />
            <span>Internal Hive Temperature (°C) Telemetry</span>
          </h3>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={hiveTempHumidity}>
                <XAxis dataKey="hive" tick={{ fontSize: 10 }} />
                <YAxis tick={{ fontSize: 10 }} domain={[15, 45]} />
                <Tooltip formatter={(val: any) => [`${val}°C`, 'Brood Temperature']} />
                <Line type="monotone" dataKey="temp" stroke="#ef4444" strokeWidth={2.5} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
