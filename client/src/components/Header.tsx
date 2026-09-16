import React from 'react';
import type { UserRole } from '../types';
import { 
  Hexagon, LayoutDashboard, Package, 
  Search, Link, TestTube, Factory, Truck, Cpu, BarChart2, QrCode, AlertTriangle, Layers,
  ShoppingBag, User, BellRing
} from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  userRole,
  setUserRole
}) => {
  const roles: { role: UserRole; icon: string; label: string; primaryTab: string }[] = [
    { role: 'Beekeeper', icon: '👨‍🌾', label: 'Beekeeper', primaryTab: 'batches' },
    { role: 'Processor', icon: '🧪', label: 'Processor', primaryTab: 'quality' },
    { role: 'Distributor', icon: '🚚', label: 'Distributor', primaryTab: 'distribution' },
    { role: 'Consumer', icon: '👤', label: 'Consumer', primaryTab: 'verify' },
    { role: 'Admin', icon: '⚙️', label: 'Admin', primaryTab: 'tamper' },
  ];

  const handleRoleSelect = (role: UserRole, primaryTab: string) => {
    setUserRole(role);
    setCurrentTab(primaryTab);
  };

  const navItems = [
    { id: 'landing', label: 'Home', icon: Hexagon },
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'beekeeping', label: 'Smart Beekeeping', icon: Cpu },
    { id: 'alerts', label: 'Alert Center', icon: BellRing },
    { id: 'qr', label: 'QR Generator', icon: QrCode },
    { id: 'batches', label: 'Batches', icon: Package },
    { id: 'traceability', label: 'Traceability', icon: Search },
    { id: 'blockchain', label: 'Blockchain', icon: Link },
    { id: 'quality', label: 'Quality', icon: TestTube },
    { id: 'processing', label: 'Processing', icon: Factory },
    { id: 'distribution', label: 'Distribution', icon: Truck },
    { id: 'verify', label: 'Consumer Passport', icon: QrCode },
    { id: 'marketplace', label: 'Honey Market', icon: ShoppingBag },
    { id: 'analytics', label: 'Analytics', icon: BarChart2 },
    { id: 'tamper', label: 'Tamper Demo', icon: AlertTriangle },
    { id: 'profile', label: 'Beekeeper Profile', icon: User },
    { id: 'architecture', label: 'Architecture', icon: Layers },
  ];

  return (
    <header className="bg-white border-b border-amber-200/60 sticky top-0 z-40 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setCurrentTab('landing')}>
            <div className="h-11 w-11 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-400 flex items-center justify-center shadow-md shadow-amber-200 text-white">
              <Hexagon className="h-7 w-7 fill-amber-100/20 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-2xl tracking-tight bg-gradient-to-r from-amber-900 via-amber-800 to-yellow-600 bg-clip-text text-transparent">
                  HONEY CHAIN
                </span>
                <span className="bg-amber-100 text-amber-800 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-amber-300">
                  VERIFIED PLATFORM
                </span>
              </div>
              <p className="text-xs font-medium text-slate-500">
                Blockchain-Powered Honey Traceability & Smart Beekeeping
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200">
              <span className="text-[11px] font-bold text-slate-400 px-2 uppercase tracking-wider hidden lg:inline">
                Login As:
              </span>
              {roles.map((r) => (
                <button
                  key={r.role}
                  onClick={() => handleRoleSelect(r.role, r.primaryTab)}
                  className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all flex items-center space-x-1 ${
                    userRole === r.role
                      ? 'bg-white text-amber-900 shadow-xs border border-amber-300 font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                  title={`Switch role and view to ${r.label}`}
                >
                  <span>{r.icon}</span>
                  <span className="hidden sm:inline">{r.label}</span>
                </button>
              ))}
            </div>

          </div>
        </div>
      </div>

      <div className="bg-amber-50/50 border-t border-amber-100 px-4 sm:px-6 lg:px-8 overflow-x-auto scrollbar-none">
        <div className="max-w-7xl mx-auto flex space-x-1 py-1.5 min-w-max">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentTab(item.id)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-amber-500 text-white font-semibold shadow-xs'
                    : 'text-slate-600 hover:bg-amber-100/70 hover:text-amber-900'
                }`}
              >
                <Icon className={`h-3.5 w-3.5 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
