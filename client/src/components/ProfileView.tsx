import React, { useState } from 'react';
import type { BeekeeperProfile } from '../types';
import { 
  MapPin, Star, UserCheck, Edit3, UserPlus, 
  CheckCircle2, X, Building, Award, Cpu, Scale
} from 'lucide-react';

interface ProfileViewProps {
  activeBeekeeper: BeekeeperProfile;
  beekeepersList: BeekeeperProfile[];
  onSelectBeekeeper: (id: string) => void;
  onUpdateBeekeeper: (updated: BeekeeperProfile) => void;
  onCreateBeekeeper: (newProfile: Omit<BeekeeperProfile, 'id' | 'initials'>) => void;
  onNavigate?: (tab: string) => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({
  activeBeekeeper,
  beekeepersList,
  onSelectBeekeeper,
  onUpdateBeekeeper,
  onCreateBeekeeper,
  onNavigate: _onNavigate
}) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  // Edit form state
  const [editForm, setEditForm] = useState<BeekeeperProfile>(activeBeekeeper);

  // Create form state
  const [createForm, setCreateForm] = useState({
    name: '',
    apiaryName: '',
    location: '',
    phone: '',
    experience: '5 Years Certified Organic Beekeeping',
    fssaiLicense: 'FSSAI Lic #236210' + Math.floor(100000 + Math.random() * 900000),
    primaryCrop: 'Wildflower Nectar',
    hivesCount: 12,
    honeyProducedKg: 1500,
    verifiedBatchesCount: 5,
    rating: '4.8 / 5.0',
    blockchainId: '0x' + Math.random().toString(16).substr(2, 8) + '... (Verified)',
    roleLabel: 'Beekeeper'
  });

  const openEditModal = () => {
    setEditForm(activeBeekeeper);
    setIsEditOpen(true);
  };

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const initials = editForm.name
      .split(' ')
      .filter(Boolean)
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2) || 'BK';

    onUpdateBeekeeper({
      ...editForm,
      initials
    });
    setIsEditOpen(false);
  };

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!createForm.name.trim() || !createForm.location.trim()) return;

    onCreateBeekeeper({
      name: createForm.name.trim(),
      apiaryName: createForm.apiaryName.trim() || `${createForm.name} Honey Farms`,
      location: createForm.location.trim(),
      phone: createForm.phone.trim() || '+91 98000 00000',
      experience: createForm.experience,
      fssaiLicense: createForm.fssaiLicense,
      primaryCrop: createForm.primaryCrop,
      hivesCount: Number(createForm.hivesCount) || 10,
      honeyProducedKg: Number(createForm.honeyProducedKg) || 1200,
      verifiedBatchesCount: Number(createForm.verifiedBatchesCount) || 4,
      rating: '4.9 / 5.0',
      blockchainId: createForm.blockchainId,
      roleLabel: 'Beekeeper'
    });

    setIsCreateOpen(false);
    setCreateForm({
      name: '',
      apiaryName: '',
      location: '',
      phone: '',
      experience: '5 Years Certified Organic Beekeeping',
      fssaiLicense: 'FSSAI Lic #236210' + Math.floor(100000 + Math.random() * 900000),
      primaryCrop: 'Wildflower Nectar',
      hivesCount: 12,
      honeyProducedKg: 1500,
      verifiedBatchesCount: 5,
      rating: '4.8 / 5.0',
      blockchainId: '0x' + Math.random().toString(16).substr(2, 8) + '... (Verified)',
      roleLabel: 'Beekeeper'
    });
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* 1. Active Profile Header Card */}
      <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-lg space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-400 text-slate-950 font-black text-2xl flex items-center justify-center shadow-md font-mono shrink-0">
              {activeBeekeeper.initials}
            </div>
            <div>
              <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                <h1 className="text-2xl font-extrabold text-white tracking-tight">{activeBeekeeper.name}</h1>
                <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-500/30 uppercase font-mono">
                  ACTIVE BEEKEEPER
                </span>
              </div>
              <p className="text-xs text-slate-300 font-medium mt-1">{activeBeekeeper.apiaryName}</p>
              <div className="flex items-center space-x-3 text-xs text-slate-400 mt-2 flex-wrap gap-y-1">
                <span className="flex items-center space-x-1">
                  <MapPin className="h-3.5 w-3.5 text-amber-400" />
                  <span>{activeBeekeeper.location}</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1 text-amber-300 font-mono font-bold">
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  <span>{activeBeekeeper.rating}</span>
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={openEditModal}
              className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 font-extrabold text-xs rounded-xl transition-colors flex items-center space-x-1.5"
            >
              <Edit3 className="h-4 w-4" />
              <span>Edit Beekeeper Profile</span>
            </button>

            <button
              onClick={() => setIsCreateOpen(true)}
              className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-2xs transition-colors flex items-center space-x-1.5"
            >
              <UserPlus className="h-4 w-4" />
              <span>+ Create Beekeeper</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider font-mono">Managed Hives</span>
            <Cpu className="h-4 w-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-black text-slate-900 font-mono">{activeBeekeeper.hivesCount} Hives</div>
          <p className="text-[10px] text-emerald-700 font-bold">100% Telemetry Active</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider font-mono">Honey Harvested</span>
            <Scale className="h-4 w-4 text-amber-600" />
          </div>
          <div className="text-2xl font-black text-amber-900 font-mono">{activeBeekeeper.honeyProducedKg.toLocaleString()} kg</div>
          <p className="text-[10px] text-slate-400 font-medium">Lifetime Production</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider font-mono">Verified Batches</span>
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-black text-emerald-700 font-mono">{activeBeekeeper.verifiedBatchesCount}</div>
          <p className="text-[10px] text-emerald-700 font-bold">Passed FSSAI Test</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider font-mono">Experience</span>
            <Award className="h-4 w-4 text-amber-600" />
          </div>
          <div className="text-xs font-extrabold text-slate-900 pt-1 font-sans">{activeBeekeeper.experience}</div>
        </div>
      </div>

      {/* 3. Detailed Regulatory Profile */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="font-extrabold text-base text-slate-900 flex items-center space-x-2">
            <UserCheck className="h-4 w-4 text-amber-600" />
            <span>Beekeeper Account & Regulatory Identifiers</span>
          </h3>

          <button
            onClick={openEditModal}
            className="text-xs font-bold text-amber-800 hover:text-amber-950 flex items-center space-x-1"
          >
            <Edit3 className="h-3.5 w-3.5" />
            <span>Edit Profile</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
            <span className="text-slate-400 text-[10px] font-sans font-bold uppercase block">FSSAI License Number</span>
            <span className="font-bold text-slate-900 text-sm">{activeBeekeeper.fssaiLicense}</span>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
            <span className="text-slate-400 text-[10px] font-sans font-bold uppercase block">Blockchain Identity Address</span>
            <span className="font-bold text-amber-900 text-sm">{activeBeekeeper.blockchainId}</span>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
            <span className="text-slate-400 text-[10px] font-sans font-bold uppercase block">Primary Nectar Sources</span>
            <span className="font-bold text-slate-900 font-sans text-xs">{activeBeekeeper.primaryCrop}</span>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
            <span className="text-slate-400 text-[10px] font-sans font-bold uppercase block">Contact Phone Number</span>
            <span className="font-bold text-slate-900 text-xs">{activeBeekeeper.phone}</span>
          </div>
        </div>
      </div>

      {/* 4. Registered Beekeepers Account Switcher Grid */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div>
            <h3 className="font-extrabold text-base text-slate-900 flex items-center space-x-2">
              <Building className="h-4 w-4 text-amber-600" />
              <span>Registered Beekeeper Accounts ({beekeepersList.length})</span>
            </h3>
            <p className="text-xs text-slate-500">Switch active beekeeper account to view and manage individual apiaries</p>
          </div>

          <button
            onClick={() => setIsCreateOpen(true)}
            className="px-3.5 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 rounded-xl text-xs font-extrabold flex items-center space-x-1 transition-colors"
          >
            <UserPlus className="h-3.5 w-3.5" />
            <span>+ Add Beekeeper</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {beekeepersList.map((b) => {
            const isActive = b.id === activeBeekeeper.id;
            return (
              <div
                key={b.id}
                className={`p-5 rounded-2xl border transition-all flex items-start justify-between gap-4 ${
                  isActive
                    ? 'bg-amber-50/70 border-amber-300 shadow-xs'
                    : 'bg-slate-50/60 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-start space-x-3 truncate">
                  <div className={`h-11 w-11 rounded-xl flex items-center justify-center font-mono font-black text-sm shrink-0 ${
                    isActive ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-amber-400'
                  }`}>
                    {b.initials}
                  </div>

                  <div className="truncate space-y-0.5">
                    <div className="flex items-center space-x-2">
                      <span className="font-extrabold text-slate-900 text-sm truncate">{b.name}</span>
                      {isActive && (
                        <span className="bg-amber-500 text-slate-950 font-black text-[9px] px-1.5 py-0.5 rounded uppercase">
                          Active
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-600 font-medium truncate">{b.apiaryName}</p>
                    <p className="text-[11px] text-slate-500 truncate">📍 {b.location} • 📜 {b.fssaiLicense}</p>
                  </div>
                </div>

                <div className="shrink-0 pt-1">
                  {!isActive ? (
                    <button
                      onClick={() => onSelectBeekeeper(b.id)}
                      className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-colors"
                    >
                      Switch
                    </button>
                  ) : (
                    <span className="text-emerald-700 font-bold text-xs flex items-center space-x-1">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                      <span>Active</span>
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* EDIT BEEKEEPER MODAL */}
      {isEditOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 border border-amber-200 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider font-mono">Edit Beekeeper Account</span>
                <h3 className="font-extrabold text-xl text-slate-900">{activeBeekeeper.name}</h3>
              </div>
              <button onClick={() => setIsEditOpen(false)} className="p-2 hover:bg-slate-100 rounded-xl text-slate-400">
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleEditSubmit} className="space-y-4 text-xs font-semibold">
              <div>
                <label className="block text-slate-700 font-bold mb-1">Beekeeper Name</label>
                <input
                  type="text"
                  required
                  value={editForm.name}
                  onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-slate-900 focus:ring-2 focus:ring-amber-500/50"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Apiary / Farm Name</label>
                <input
                  type="text"
                  required
                  value={editForm.apiaryName}
                  onChange={(e) => setEditForm({ ...editForm, apiaryName: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-slate-900 focus:ring-2 focus:ring-amber-500/50"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Location (District, State)</label>
                <input
                  type="text"
                  required
                  value={editForm.location}
                  onChange={(e) => setEditForm({ ...editForm, location: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-slate-900 focus:ring-2 focus:ring-amber-500/50"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Contact Phone</label>
                  <input
                    type="text"
                    required
                    value={editForm.phone}
                    onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-slate-900 focus:ring-2 focus:ring-amber-500/50"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">FSSAI License</label>
                  <input
                    type="text"
                    required
                    value={editForm.fssaiLicense}
                    onChange={(e) => setEditForm({ ...editForm, fssaiLicense: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-slate-900 focus:ring-2 focus:ring-amber-500/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Beekeeping Experience</label>
                <input
                  type="text"
                  value={editForm.experience}
                  onChange={(e) => setEditForm({ ...editForm, experience: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-slate-900 focus:ring-2 focus:ring-amber-500/50"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Primary Nectar Crop / Flora</label>
                <input
                  type="text"
                  value={editForm.primaryCrop}
                  onChange={(e) => setEditForm({ ...editForm, primaryCrop: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-slate-900 focus:ring-2 focus:ring-amber-500/50"
                />
              </div>

              <div className="pt-2 flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsEditOpen(false)}
                  className="px-4 py-2 bg-slate-100 text-slate-700 font-bold rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold rounded-xl shadow-2xs"
                >
                  Save Profile Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CREATE BEEKEEPER MODAL */}
      {isCreateOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 border border-amber-200 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider font-mono">Create Beekeeper Account</span>
                <h3 className="font-extrabold text-xl text-slate-900">Register New Beekeeper</h3>
              </div>
              <button onClick={() => setIsCreateOpen(false)} className="p-2 hover:bg-slate-100 rounded-xl text-slate-400">
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleCreateSubmit} className="space-y-4 text-xs font-semibold">
              <div>
                <label className="block text-slate-700 font-bold mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Suresh Patel"
                  value={createForm.name}
                  onChange={(e) => setCreateForm({ ...createForm, name: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-slate-900 focus:ring-2 focus:ring-amber-500/50"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Apiary / Farm Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Patel Organic Honey Farms"
                  value={createForm.apiaryName}
                  onChange={(e) => setCreateForm({ ...createForm, apiaryName: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-slate-900 focus:ring-2 focus:ring-amber-500/50"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Location (District, State) *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Anand, Gujarat"
                  value={createForm.location}
                  onChange={(e) => setCreateForm({ ...createForm, location: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-slate-900 focus:ring-2 focus:ring-amber-500/50"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Contact Phone</label>
                  <input
                    type="text"
                    placeholder="+91 98000 00000"
                    value={createForm.phone}
                    onChange={(e) => setCreateForm({ ...createForm, phone: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-slate-900 focus:ring-2 focus:ring-amber-500/50"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">FSSAI License</label>
                  <input
                    type="text"
                    value={createForm.fssaiLicense}
                    onChange={(e) => setCreateForm({ ...createForm, fssaiLicense: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-slate-900 focus:ring-2 focus:ring-amber-500/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Primary Nectar Crop</label>
                <input
                  type="text"
                  value={createForm.primaryCrop}
                  onChange={(e) => setCreateForm({ ...createForm, primaryCrop: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-slate-900 focus:ring-2 focus:ring-amber-500/50"
                />
              </div>

              <div className="pt-2 flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsCreateOpen(false)}
                  className="px-4 py-2 bg-slate-100 text-slate-700 font-bold rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold rounded-xl shadow-2xs"
                >
                  Create & Activate Account
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
