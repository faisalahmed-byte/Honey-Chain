const { supabase } = require('./database');

// Seed Data
const sampleUsers = [
  { id: 'BK-001', name: 'Ramesh Kumar', role: 'Beekeeper', apiary_name: 'Deccan Apiary', location_name: 'Nizamabad, Telangana' },
  { id: 'BK-002', name: 'Suresh Patel', role: 'Beekeeper', apiary_name: 'Amul Delta Apiaries', location_name: 'Anand, Gujarat' },
  { id: 'BK-003', name: 'Anita Devi', role: 'Beekeeper', apiary_name: 'Mithila Lychee Farms', location_name: 'Muzaffarpur, Bihar' },
  { id: 'PRO-001', name: 'Dr. A. K. Verma', role: 'Quality Inspector', apiary_name: 'FSSAI Regional Testing Lab', location_name: 'Hyderabad, Telangana' },
  { id: 'DIS-001', name: 'AgriExpress Logistics', role: 'Logistics Manager', apiary_name: 'AgriExpress Central Depot', location_name: 'Nizamabad Hub' }
];

const sampleHives = [
  { hive_id: 'HIVE-001', apiary_name: 'Deccan Organic Apiary', location_name: 'Nizamabad, TS', temperature_c: 33.8, humidity_pct: 68, weight_kg: 19.4, status: 'Strong' },
  { hive_id: 'HIVE-002', apiary_name: 'Deccan Organic Apiary', location_name: 'Nizamabad, TS', temperature_c: 34.2, humidity_pct: 61, weight_kg: 18.8, status: 'Strong' },
  { hive_id: 'HIVE-003', apiary_name: 'Deccan Organic Apiary', location_name: 'Nizamabad, TS', temperature_c: 35.1, humidity_pct: 77, weight_kg: 16.5, status: 'Moderate' },
  { hive_id: 'HIVE-004', apiary_name: 'Deccan Organic Apiary', location_name: 'Nizamabad, TS', temperature_c: 38.6, humidity_pct: 45, weight_kg: 17.2, status: 'Moderate' },
  { hive_id: 'HIVE-005', apiary_name: 'Litchi Orchards Apiary', location_name: 'Muzaffarpur, BR', temperature_c: 32.4, humidity_pct: 68, weight_kg: 21.2, status: 'Strong' },
  { hive_id: 'HIVE-006', apiary_name: 'Litchi Orchards Apiary', location_name: 'Muzaffarpur, BR', temperature_c: 32.1, humidity_pct: 70, weight_kg: 20.8, status: 'Strong' },
  { hive_id: 'HIVE-007', apiary_name: 'Mustard Valley Apiary', location_name: 'Nizamabad, TS', temperature_c: 33.8, humidity_pct: 68, weight_kg: 19.4, status: 'Strong' },
  { hive_id: 'HIVE-008', apiary_name: 'Mustard Valley Apiary', location_name: 'Bharatpur, RJ', temperature_c: 34.0, humidity_pct: 65, weight_kg: 22.5, status: 'Strong' },
  { hive_id: 'HIVE-009', apiary_name: 'Western Ghats Apiary', location_name: 'Coorg, KA', temperature_c: 26.2, humidity_pct: 82, weight_kg: 14.2, status: 'Moderate' },
  { hive_id: 'HIVE-010', apiary_name: 'Pine & Acacia Valley', location_name: 'Shimla, HP', temperature_c: 23.5, humidity_pct: 55, weight_kg: 23.0, status: 'Strong' }
];

const sampleBatches = [
  {
    id: 'HC-TG-2026-001',
    hive_id: 'HIVE-007',
    beekeeper_name: 'Ramesh Honey Farms',
    apiary_name: 'Deccan Organic Apiary',
    location_name: 'Nizamabad, Telangana',
    floral_source: 'Wildflower Honey',
    quantity_kg: 18.0,
    quality_score: 99.8,
    initial_quality_grade: 'Grade A+',
    harvest_method: 'Manual Centrifugal Extraction',
    harvest_date: '2026-09-01',
    status: 'Delivered',
    block_tx_hash: '0x8f3a91e2b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9'
  },
  {
    id: 'HC-TG-2026-002',
    hive_id: 'HIVE-005',
    beekeeper_name: 'Sunil Organic Apiaries',
    apiary_name: 'Litchi Orchards Apiary',
    location_name: 'Muzaffarpur, Bihar',
    floral_source: 'Lychee Honey',
    quantity_kg: 310.0,
    quality_score: 99.2,
    initial_quality_grade: 'Grade A',
    harvest_method: 'Super Comb Extraction',
    harvest_date: '2026-09-02',
    status: 'Delivered',
    block_tx_hash: '0x7b2c44a1d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1'
  },
  {
    id: 'HC-TG-2026-003',
    hive_id: 'HIVE-008',
    beekeeper_name: 'Bharatpur Honey Co-op',
    apiary_name: 'Mustard Valley Apiary',
    location_name: 'Bharatpur, Rajasthan',
    floral_source: 'Mustard Honey',
    quantity_kg: 420.0,
    quality_score: 99.5,
    initial_quality_grade: 'Grade A+',
    harvest_method: 'Warm Cell Centrifugal',
    harvest_date: '2026-09-03',
    status: 'Distributed',
    block_tx_hash: '0x4d1e88f3a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4'
  },
  {
    id: 'HC-TG-2026-004',
    hive_id: 'HIVE-009',
    beekeeper_name: 'Coorg Natural Honey',
    apiary_name: 'Western Ghats Flora Apiary',
    location_name: 'Coorg, Karnataka',
    floral_source: 'Forest Honey',
    quantity_kg: 180.0,
    quality_score: 98.9,
    initial_quality_grade: 'Grade A+',
    harvest_method: 'Cold Extraction',
    harvest_date: '2026-09-04',
    status: 'Processed',
    block_tx_hash: '0x1a9b77c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8'
  },
  {
    id: 'HC-TG-2026-005',
    hive_id: 'HIVE-010',
    beekeeper_name: 'Himalayan Bee Keepers',
    apiary_name: 'Pine & Acacia Valley',
    location_name: 'Shimla, Himachal Pradesh',
    floral_source: 'Acacia Honey',
    quantity_kg: 290.0,
    quality_score: 99.7,
    initial_quality_grade: 'Grade A+',
    harvest_method: 'Manual Comb Draining',
    harvest_date: '2026-09-05',
    status: 'Quality Checked',
    block_tx_hash: '0x9e8d33b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7'
  },
  {
    id: 'HC-TG-2026-006',
    hive_id: 'HIVE-001',
    beekeeper_name: 'Wayanad Spice Apiaries',
    apiary_name: 'Cardamom & Eucalyptus Grove',
    location_name: 'Wayanad, Kerala',
    floral_source: 'Eucalyptus Honey',
    quantity_kg: 160.0,
    quality_score: 98.4,
    initial_quality_grade: 'Grade A',
    harvest_method: 'Centrifugal Extractor',
    harvest_date: '2026-09-06',
    status: 'Harvested',
    block_tx_hash: '0x5c4b22a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5'
  },
  {
    id: 'HC-TG-2026-007',
    hive_id: 'HIVE-002',
    beekeeper_name: 'Punjab Agritech Beekeepers',
    apiary_name: 'Golden Fields Apiary',
    location_name: 'Ludhiana, Punjab',
    floral_source: 'Sunflower Honey',
    quantity_kg: 480.0,
    quality_score: 98.1,
    initial_quality_grade: 'Grade A',
    harvest_method: 'Automated Extraction Line',
    harvest_date: '2026-09-07',
    status: 'Harvested',
    block_tx_hash: '0x3d2a11f8e9d0c1b2a3f4e5d6c7b8a9f0e1d2c3b4'
  },
  {
    id: 'HC-TG-2026-008',
    hive_id: 'HIVE-003',
    beekeeper_name: 'Chambal Agro Honey',
    apiary_name: 'Jamun Grove Apiary',
    location_name: 'Gwalior, Madhya Pradesh',
    floral_source: 'Jamun Honey',
    quantity_kg: 275.0,
    quality_score: 99.4,
    initial_quality_grade: 'Grade A+',
    harvest_method: 'Manual Comb Draining',
    harvest_date: '2026-09-08',
    status: 'Harvested',
    block_tx_hash: '0x2b1c99e8d7c6b5a4f3e2d1c0b9a8f7e6d5c4b3a2'
  },
  {
    id: 'HC-TG-2026-009',
    hive_id: 'HIVE-004',
    beekeeper_name: 'Godavari Delta Bee Farms',
    apiary_name: 'Mangrove Reserve Apiary',
    location_name: 'Kakinada, Andhra Pradesh',
    floral_source: 'Neem Honey',
    quantity_kg: 210.0,
    quality_score: 99.1,
    initial_quality_grade: 'Grade A+',
    harvest_method: 'Centrifugal Extraction',
    harvest_date: '2026-09-09',
    status: 'Quality Checked',
    block_tx_hash: '0x1f9e88d7c6b5a4f3e2d1c0b9a8f7e6d5c4b3a2b1'
  },
  {
    id: 'HC-TG-2026-010',
    hive_id: 'HIVE-006',
    beekeeper_name: 'Sahyadri Bee Keepers',
    apiary_name: 'Western Ghats Flora',
    location_name: 'Satara, Maharashtra',
    floral_source: 'Multifloral Honey',
    quantity_kg: 340.0,
    quality_score: 98.8,
    initial_quality_grade: 'Grade A+',
    harvest_method: 'Comb Cold Draining',
    harvest_date: '2026-09-10',
    status: 'Processed',
    block_tx_hash: '0x0d9c77b6a5f4e3d2c1b0a9f8e7d6c5b4a3f2e1d0'
  }
];

const sampleLogs = [
  { batch_id: 'HC-TG-2026-001', stage: 'Harvested', actor: 'Ramesh Honey Farms', location_name: 'Nizamabad, TS', details: 'Extracted 18.0 kg Wildflower Honey', block_tx_hash: '0x8f3a91e2b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9', timestamp: '2026-09-01 08:30:00' },
  { batch_id: 'HC-TG-2026-001', stage: 'Quality Checked', actor: 'Dr. A. K. Verma', location_name: 'FSSAI Regional Lab, Hyderabad', details: 'Passed (NMR Clean, 99.8% Purity)', block_tx_hash: '0x8f3a91e2b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8ea', timestamp: '2026-09-02 11:00:00' },
  { batch_id: 'HC-TG-2026-001', stage: 'Processed', actor: 'Pure Honey Processing Co.', location_name: 'Telangana Agri-Processing Zone', details: 'Processed 36 jars (500g each)', block_tx_hash: '0x8f3a91e2b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8eb', timestamp: '2026-09-03 14:20:00' },
  { batch_id: 'HC-TG-2026-001', stage: 'Delivered', actor: 'AgriExpress Logistics', location_name: 'Hyderabad Retail Outlets', details: 'Delivered to climate-controlled hub', block_tx_hash: '0x8f3a91e2b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8ec', timestamp: '2026-09-04 09:00:00' }
];

async function seedSupabase() {
  console.log('--- Seeding Live Supabase Cloud Database ---');

  // 1. Users
  console.log('\n1. Seeding `users` table...');
  const { data: usersData, error: usersErr } = await supabase.from('users').upsert(sampleUsers);
  if (usersErr) {
    console.log('Notice/Error inserting users:', usersErr.message);
  } else {
    console.log(`✓ Successfully seeded ${sampleUsers.length} users into Supabase.`);
  }

  // 2. Beehives
  console.log('\n2. Seeding `beehives` table...');
  const { data: hivesData, error: hivesErr } = await supabase.from('beehives').upsert(sampleHives);
  if (hivesErr) {
    console.log('Notice/Error inserting beehives:', hivesErr.message);
  } else {
    console.log(`✓ Successfully seeded ${sampleHives.length} beehives into Supabase.`);
  }

  // 3. Harvest Batches
  console.log('\n3. Seeding `harvest_batches` table...');
  const { data: batchesData, error: batchesErr } = await supabase.from('harvest_batches').upsert(sampleBatches);
  if (batchesErr) {
    console.log('Notice/Error inserting harvest_batches:', batchesErr.message);
  } else {
    console.log(`✓ Successfully seeded ${sampleBatches.length} harvest_batches into Supabase.`);
  }

  // 4. Supply Chain Logs
  console.log('\n4. Seeding `supply_chain_logs` table...');
  const { data: logsData, error: logsErr } = await supabase.from('supply_chain_logs').upsert(sampleLogs);
  if (logsErr) {
    console.log('Notice/Error inserting supply_chain_logs:', logsErr.message);
  } else {
    console.log(`✓ Successfully seeded ${sampleLogs.length} supply_chain_logs into Supabase.`);
  }

  console.log('\n--- Supabase Seeding Complete ---');
}

seedSupabase().catch(err => console.error('Supabase seeding script error:', err));
