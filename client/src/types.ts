export type UserRole = 'Beekeeper' | 'Processor' | 'Distributor' | 'Consumer' | 'Admin';

export interface Batch {
  id: string;
  hive_id?: string;
  beekeeper_name: string;
  apiary_name: string;
  location: string;
  gps_lat: number;
  gps_lng: number;
  extraction_date: string;
  floral_source: string;
  hives_count: number;
  quantity_kg: number;
  moisture_pct: number;
  temperature_c: number;
  initial_quality_grade: string;
  harvest_method: string;
  notes: string;
  status: string;
  created_at: string;
}

export interface QualityCheck {
  id: number;
  batch_id: string;
  inspector_name: string;
  moisture_pct: number;
  purity_pct: number;
  ph_level: number;
  hmf_mg_kg: number;
  adulteration_test: string;
  pollen_analysis: string;
  colour: string;
  aroma: string;
  quality_grade: string;
  status: string;
  notes: string;
  created_at: string;
}

export interface ProcessingRecord {
  id: number;
  batch_id: string;
  processor_name: string;
  facility_name: string;
  processing_date: string;
  filtering_status: string;
  heating_temp_c: number;
  filtration_method: string;
  packaging_date: string;
  package_size_g: number;
  jars_count: number;
  notes: string;
  created_at: string;
}

export interface DistributionRecord {
  id: number;
  batch_id: string;
  distributor_name: string;
  origin: string;
  destination: string;
  transport_vehicle: string;
  dispatch_date: string;
  delivery_date: string;
  storage_temp_c: number;
  shipment_status: string;
  notes: string;
  created_at: string;
}

export interface BlockchainBlock {
  block_index: number;
  batch_id: string;
  event_type: string;
  timestamp: string;
  actor: string;
  location: string;
  details: string;
  previous_hash: string;
  current_hash: string;
  is_tampered: number;
}

export interface Hive {
  hive_id: string;
  apiary_name: string;
  location: string;
  temperature_c: number;
  humidity_pct: number;
  weight_kg: number;
  colony_strength: string;
  honey_level_pct: number;
  pest_risk: string;
  queen_status: string;
  weather_condition: string;
  updated_at: string;
  latitude?: number;
  longitude?: number;
  ai?: AIInsights;
}

export interface HiveAlert {
  id: number;
  hive_id: string;
  alert_type: string;
  title: string;
  message: string;
  severity: string;
  timestamp: string;
  sensor_value?: string;
  expected_range?: string;
  recommendation?: string;
  resolved: number;
  resolved_at?: string;
}

export interface AIInsights {
  colonyHealth: number;
  stressRisk: number;
  productivity: string;
  harvestReadiness: 'READY' | 'APPROACHING' | 'NOT READY';
  harvestPrediction: {
    expectedDays: number;
    expectedYieldKg: number;
    confidencePct: number;
    trend: string;
  };
  recommendation: string;
  whyThisResult: string[];
  label: string;
  dataNotice: string;
}

export interface SmartRecommendation {
  hive_id: string;
  type: string;
  category: string;
  recommendation: string;
}

export interface DashboardData {
  summary: {
    totalBatches: number;
    verifiedBatches: number;
    activeBatches: number;
    totalQuantityKg: number;
    qualityPassed: number;
    qualityFailed: number;
    totalEvents: number;
    blockchainVerified: boolean;
  };
  activeAlerts?: HiveAlert[];
  productionByMonth: Array<{ month: string; quantityKg: number }>;
  statusCounts: Array<{ status: string; count: number }>;
  qualityDistribution: Array<{ name: string; value: number; color: string }>;
  regionalProduction: Array<{ location: string; totalKg: number; batchCount: number }>;
  integrity: {
    valid: boolean;
    message: string;
    tamperedBlockIndex?: number;
    batchId?: string;
    reason?: string;
  };
}

export interface BeekeeperProfile {
  id: string;
  name: string;
  initials: string;
  apiaryName: string;
  location: string;
  phone: string;
  experience: string;
  fssaiLicense: string;
  primaryCrop: string;
  hivesCount: number;
  honeyProducedKg: number;
  verifiedBatchesCount: number;
  rating: string;
  blockchainId: string;
  roleLabel: string;
}
