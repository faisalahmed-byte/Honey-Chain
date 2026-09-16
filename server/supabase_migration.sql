-- =============================================================
-- HONEY CHAIN SUPABASE POSTGRESQL & POSTGIS MIGRATION SCHEMA
-- =============================================================

-- Enable PostGIS Extension for geographic tracking
CREATE EXTENSION IF NOT EXISTS postgis;

-- 1. Users Table
CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'Beekeeper',
    apiary_name TEXT,
    location_name TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Beehives Table (using PostGIS geography for location)
CREATE TABLE IF NOT EXISTS beehives (
    id TEXT PRIMARY KEY,
    beekeeper_id TEXT REFERENCES users(id) ON DELETE SET NULL,
    apiary_name TEXT,
    location GEOGRAPHY(POINT, 4326),
    location_name TEXT,
    temperature NUMERIC,
    humidity NUMERIC,
    weight_kg NUMERIC,
    colony_strength TEXT DEFAULT 'Strong',
    honey_level_pct NUMERIC DEFAULT 80,
    pest_risk TEXT DEFAULT 'Low',
    queen_status TEXT DEFAULT 'Healthy',
    weather_condition TEXT,
    status TEXT DEFAULT 'Active',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Harvest Batches Table
CREATE TABLE IF NOT EXISTS harvest_batches (
    id TEXT PRIMARY KEY,
    hive_id TEXT REFERENCES beehives(id) ON DELETE SET NULL,
    beekeeper_name TEXT,
    apiary_name TEXT,
    location_name TEXT,
    floral_source TEXT,
    quantity_kg NUMERIC NOT NULL,
    quality_score NUMERIC DEFAULT 98.5,
    initial_quality_grade TEXT DEFAULT 'Grade A+',
    harvest_method TEXT,
    harvest_date TEXT,
    status TEXT DEFAULT 'Harvested',
    block_tx_hash TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. Supply Chain Logs Table
CREATE TABLE IF NOT EXISTS supply_chain_logs (
    id BIGSERIAL PRIMARY KEY,
    batch_id TEXT REFERENCES harvest_batches(id) ON DELETE CASCADE,
    stage TEXT NOT NULL,
    actor TEXT,
    location_name TEXT,
    details JSONB,
    block_tx_hash TEXT,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indexing for high performance queries
CREATE INDEX IF NOT EXISTS idx_beehives_keeper ON beehives(beekeeper_id);
CREATE INDEX IF NOT EXISTS idx_harvest_hive ON harvest_batches(hive_id);
CREATE INDEX IF NOT EXISTS idx_supply_logs_batch ON supply_chain_logs(batch_id);
