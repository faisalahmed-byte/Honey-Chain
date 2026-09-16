const { db, supabase } = require('./database');
const fs = require('fs');
const path = require('path');

// Indian regions with realistic latitude and longitude coordinates for apiary maps
const regions = [
  { name: 'Nizamabad', state: 'Telangana', lat: 18.6725, lng: 78.0941, apiary: 'Deccan Organic Apiary', crops: 'Wildflower & Neem' },
  { name: 'Muzaffarpur', state: 'Bihar', lat: 26.1209, lng: 85.3647, apiary: 'Litchi Orchards Apiary', crops: 'Lychee Blossom' },
  { name: 'Bharatpur', state: 'Rajasthan', lat: 27.2170, lng: 77.4895, apiary: 'Mustard Valley Apiary', crops: 'Mustard Nectar' },
  { name: 'Coorg', state: 'Karnataka', lat: 12.3375, lng: 75.8069, apiary: 'Western Ghats Shola Apiary', crops: 'Forest Honey' },
  { name: 'Shimla', state: 'Himachal Pradesh', lat: 31.1048, lng: 77.1734, apiary: 'Himalayan Pine & Acacia', crops: 'White Acacia' },
  { name: 'Wayanad', state: 'Kerala', lat: 11.6854, lng: 76.1320, apiary: 'Spice Belt Apiary', crops: 'Eucalyptus & Spice' },
  { name: 'Ludhiana', state: 'Punjab', lat: 30.9010, lng: 75.8573, apiary: 'Golden Agri Fields', crops: 'Sunflower Blossom' },
  { name: 'Gwalior', state: 'Madhya Pradesh', lat: 26.2183, lng: 78.1828, apiary: 'Chambal Flora Apiary', crops: 'Jamun Nectar' },
  { name: 'Kakinada', state: 'Andhra Pradesh', lat: 16.9891, lng: 82.2475, apiary: 'Godavari Mangrove Apiary', crops: 'Neem & Mangrove' },
  { name: 'Satara', state: 'Maharashtra', lat: 17.6805, lng: 74.0183, apiary: 'Sahyadri Crest Apiary', crops: 'Multifloral' },
  { name: 'Guwahati', state: 'Assam', lat: 26.1445, lng: 91.7362, apiary: 'Brahmaputra Valley Apiary', crops: 'Mustard & Tea Nectar' },
  { name: 'Sundarbans', state: 'West Bengal', lat: 21.9497, lng: 89.1833, apiary: 'Sundarbans Wild Apiary', crops: 'Mangrove Wild Honey' },
  { name: 'Anantnag', state: 'Jammu & Kashmir', lat: 33.7311, lng: 75.1487, apiary: 'Kashmir Valley Apiary', crops: 'Saffron & Clover' },
  { name: 'Mahabaleshwar', state: 'Maharashtra', lat: 17.9252, lng: 73.6577, apiary: 'Strawberry Hills Apiary', crops: 'Berry Blossom' },
  { name: 'Dehradun', state: 'Uttarakhand', lat: 30.3165, lng: 78.0322, apiary: 'Doon Valley Organic Apiary', crops: 'Lychee & Multifloral' }
];

const colonyStatuses = ['Strong', 'Strong', 'Strong', 'Moderate', 'Moderate', 'Weak'];
const pestRisks = ['Low', 'Low', 'Low', 'Medium', 'High'];
const queenStatuses = ['Healthy (Laying)', 'Healthy (Laying)', 'Healthy (Laying)', 'New Queen Introduced', 'Queenless Risk'];
const weatherConditions = ['Sunny 32°C', 'Pleasant 26°C', 'Clear Sky 29°C', 'Humid 34°C', 'Cool 22°C', 'Partly Cloudy 30°C'];

function generate50Hives() {
  const hives = [];
  for (let i = 1; i <= 50; i++) {
    const hiveId = `HIVE-${String(i).padStart(3, '0')}`;
    const region = regions[(i - 1) % regions.length];
    
    // Slight random offset in lat/lng to simulate individual hive positions in an apiary field
    const latOffset = (Math.random() - 0.5) * 0.04;
    const lngOffset = (Math.random() - 0.5) * 0.04;
    const lat = parseFloat((region.lat + latOffset).toFixed(6));
    const lng = parseFloat((region.lng + lngOffset).toFixed(6));
    
    const temp = parseFloat((22.0 + Math.random() * 15.0).toFixed(1));
    const hum = Math.floor(45 + Math.random() * 40);
    const weight = parseFloat((14.0 + Math.random() * 12.0).toFixed(1));
    const honeyLevel = Math.floor(25 + Math.random() * 70);
    
    const status = colonyStatuses[i % colonyStatuses.length];
    const pest = pestRisks[i % pestRisks.length];
    const queen = queenStatuses[i % queenStatuses.length];
    const weather = weatherConditions[i % weatherConditions.length];

    hives.push({
      hive_id: hiveId,
      apiary_name: `${region.apiary} (Unit ${Math.ceil(i / 3)})`,
      location_name: `${region.name}, ${region.state}`,
      location: `${region.name}, ${region.state}`,
      latitude: lat,
      longitude: lng,
      gps_lat: lat,
      gps_lng: lng,
      temperature_c: temp,
      temperature: temp,
      humidity_pct: hum,
      humidity: hum,
      weight_kg: weight,
      honey_level_pct: honeyLevel,
      colony_strength: status,
      status: status,
      pest_risk: pest,
      queen_status: queen,
      weather_condition: weather,
      updated_at: new Date(Date.now() - (50 - i) * 3600000).toISOString().replace('T', ' ').slice(0, 19)
    });
  }
  return hives;
}

async function runSeedProcess() {
  console.log('=== Inspecting Schema & Generating 50 Beehive Records ===');
  const hivesData = generate50Hives();

  // 1. Seed SQLite Database
  console.log('\n1. Seeding local SQLite `hives` table with 50 rows...');
  try {
    db.prepare('DELETE FROM hives').run();
    const insertSqlite = db.prepare(`
      INSERT INTO hives (
        hive_id, apiary_name, location, temperature_c, humidity_pct, weight_kg,
        colony_strength, honey_level_pct, pest_risk, queen_status, weather_condition, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    for (const h of hivesData) {
      insertSqlite.run(
        h.hive_id, h.apiary_name, h.location_name, h.temperature_c, h.humidity_pct, h.weight_kg,
        h.colony_strength, h.honey_level_pct, h.pest_risk, h.queen_status, h.weather_condition, h.updated_at
      );
    }
    console.log(`✓ SQLite hives table successfully populated with ${hivesData.length} records.`);
  } catch (err) {
    console.error('Error inserting into SQLite hives:', err.message);
  }

  // 2. Seed Supabase Cloud Database
  console.log('\n2. Attempting Supabase cloud `beehives` upsert with 50 rows...');
  try {
    const supabasePayload = hivesData.map(h => ({
      hive_id: h.hive_id,
      apiary_name: h.apiary_name,
      location_name: h.location_name,
      temperature_c: h.temperature_c,
      humidity_pct: h.humidity_pct,
      weight_kg: h.weight_kg,
      status: h.status,
      latitude: h.latitude,
      longitude: h.longitude
    }));

    const { data, error } = await supabase.from('beehives').upsert(supabasePayload);
    if (error) {
      console.log('Supabase API note:', error.message);
    } else {
      console.log(`✓ Supabase beehives table successfully populated with ${hivesData.length} records!`);
    }
  } catch (e) {
    console.log('Supabase network exception:', e.message);
  }

  // 3. Generate Raw SQL Migration Script for Supabase SQL Editor
  console.log('\n3. Generating raw SQL migration file `seed_50_beehives.sql`...');
  let sqlContent = `-- ============================================================\n`;
  sqlContent += `-- SUPABASE / POSTGRES MIGRATION: 50 SYNTHETIC BEEHIVES SEED DATA\n`;
  sqlContent += `-- Includes realistic GPS latitude & longitude coordinates for map interfaces\n`;
  sqlContent += `-- ============================================================\n\n`;

  sqlContent += `ALTER TABLE public.beehives ADD COLUMN IF NOT EXISTS latitude NUMERIC;\n`;
  sqlContent += `ALTER TABLE public.beehives ADD COLUMN IF NOT EXISTS longitude NUMERIC;\n\n`;

  sqlContent += `INSERT INTO public.beehives (hive_id, apiary_name, location_name, temperature_c, humidity_pct, weight_kg, status, latitude, longitude)\nVALUES\n`;

  const valueRows = hivesData.map(h => {
    const apiaryEscaped = h.apiary_name.replace(/'/g, "''");
    const locEscaped = h.location_name.replace(/'/g, "''");
    return `('${h.hive_id}', '${apiaryEscaped}', '${locEscaped}', ${h.temperature_c}, ${h.humidity_pct}, ${h.weight_kg}, '${h.status}', ${h.latitude}, ${h.longitude})`;
  });

  sqlContent += valueRows.join(',\n') + `\nON CONFLICT (hive_id) DO UPDATE SET\n`;
  sqlContent += `  apiary_name = EXCLUDED.apiary_name,\n`;
  sqlContent += `  location_name = EXCLUDED.location_name,\n`;
  sqlContent += `  temperature_c = EXCLUDED.temperature_c,\n`;
  sqlContent += `  humidity_pct = EXCLUDED.humidity_pct,\n`;
  sqlContent += `  weight_kg = EXCLUDED.weight_kg,\n`;
  sqlContent += `  status = EXCLUDED.status,\n`;
  sqlContent += `  latitude = EXCLUDED.latitude,\n`;
  sqlContent += `  longitude = EXCLUDED.longitude;\n`;

  fs.writeFileSync(path.join(__dirname, 'seed_50_beehives.sql'), sqlContent);
  console.log(`✓ Saved SQL script to C:\\honey-chain\\server\\seed_50_beehives.sql`);

  console.log('\n=== Process Complete: 50 Beehives Seeded ===');
}

runSeedProcess().catch(err => console.error('Seed process error:', err));
