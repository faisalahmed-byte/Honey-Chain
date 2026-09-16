const { supabase } = require('./database');

async function checkSupabaseData() {
  console.log('=== Checking Live Supabase Database Tables ===\n');

  // 1. Users
  const { data: users, error: errUsers } = await supabase.from('users').select('*');
  console.log(`Users table records (${users ? users.length : 0}):`, errUsers ? `Error: ${errUsers.message}` : users);

  // 2. Beehives
  const { data: hives, error: errHives } = await supabase.from('beehives').select('*');
  console.log(`\nBeehives table records (${hives ? hives.length : 0}):`, errHives ? `Error: ${errHives.message}` : hives);

  // 3. Harvest Batches
  const { data: batches, error: errBatches } = await supabase.from('harvest_batches').select('*');
  console.log(`\nHarvest Batches table records (${batches ? batches.length : 0}):`, errBatches ? `Error: ${errBatches.message}` : batches);

  // 4. Supply Chain Logs
  const { data: logs, error: errLogs } = await supabase.from('supply_chain_logs').select('*');
  console.log(`\nSupply Chain Logs table records (${logs ? logs.length : 0}):`, errLogs ? `Error: ${errLogs.message}` : logs);
}

checkSupabaseData();
