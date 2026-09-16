/**
 * HONEY CHAIN — Transparent Rule-Based AI Engine
 * Computes AI-assisted hive health analysis, stress risk, productivity,
 * harvest readiness predictions, and why-this-result factors.
 */

function calculateHiveAIInsights(hive, readings = [], alerts = []) {
  const temp = hive ? hive.temperature_c : 33.8;
  const hum = hive ? hive.humidity_pct : 65.0;
  const honey = hive ? hive.honey_level_pct : 75.0;
  const strength = hive ? hive.colony_strength : 'Strong';
  const pest = hive ? hive.pest_risk : 'Low';
  const queen = hive ? hive.queen_status : 'Healthy';

  // 1. Colony Health % (Base 100)
  let health = 92;
  if (temp < 31 || temp > 36) health -= 12;
  if (temp > 38) health -= 15;
  if (hum < 50 || hum > 75) health -= 8;
  if (strength === 'Moderate') health -= 10;
  if (strength === 'Weak') health -= 25;
  if (pest === 'Medium') health -= 10;
  if (pest === 'High') health -= 25;
  if (queen !== 'Healthy') health -= 15;
  health = Math.max(25, Math.min(99, Math.round(health)));

  // 2. Stress Risk %
  let stress = 100 - health + (pest === 'High' ? 15 : 0) + (temp > 37 ? 10 : 0);
  stress = Math.max(5, Math.min(95, Math.round(stress)));

  // 3. Productivity
  let productivity = 'HIGH 📈';
  if (health < 75 || honey < 40) productivity = 'MODERATE 📊';
  if (health < 55 || pest === 'High') productivity = 'LOW 📉';

  // 4. Harvest Readiness & Days Prediction
  let readiness = 'NOT READY';
  let daysRemaining = 14;
  if (honey >= 80) {
    readiness = 'READY';
    daysRemaining = 0;
  } else if (honey >= 60) {
    readiness = 'APPROACHING';
    daysRemaining = Math.max(1, Math.round((80 - honey) / 2.5));
  } else {
    daysRemaining = Math.max(5, Math.round((80 - honey) / 2.0));
  }

  // 5. Expected Yield kg
  const expectedYieldKg = (12 + (honey / 100) * 10).toFixed(1);

  // 6. Confidence %
  const confidencePct = Math.min(95, Math.max(70, Math.round(75 + (readings.length > 5 ? 12 : 5))));

  // 7. Trend
  let trend = '📈 Increasing';
  if (readings.length >= 2) {
    const latest = readings[0]?.weight_kg || 19.4;
    const prev = readings[readings.length - 1]?.weight_kg || 19.0;
    if (latest < prev) trend = '📉 Decreasing';
    else if (latest === prev) trend = '📊 Stable';
  }

  // 8. Recommendation text
  let recommendation = 'Current hive conditions are stable. Continue monitoring temperature and humidity.';
  if (temp > 36.5) {
    recommendation = `Elevated internal temperature (${temp}°C). Inspect hive ventilation and provide shade if appropriate.`;
  } else if (hum > 75) {
    recommendation = `High moisture level detected (${hum}%). Inspect hive moisture and ventilation conditions.`;
  } else if (pest === 'High') {
    recommendation = `High pest risk detected. Schedule immediate Varroa mite inspection and treatment.`;
  } else if (honey >= 80) {
    recommendation = `Hive honey reserve reached ${honey}%. Prepare for harvesting within 24-48 hours.`;
  } else if (honey < 35) {
    recommendation = `Honey reserve low (${honey}%). Inspection & supplementary sugar syrup feeding recommended.`;
  }

  // 9. Why This Result (Factors breakdown)
  const factors = [];
  if (temp >= 31 && temp <= 36) factors.push(`✓ Stable internal temperature (${temp}°C)`);
  else factors.push(`⚠️ Temperature variance detected (${temp}°C)`);

  if (hum >= 50 && hum <= 75) factors.push(`✓ Normal relative humidity (${hum}%)`);
  else factors.push(`⚠️ Humidity outside optimal zone (${hum}%)`);

  if (strength === 'Strong') factors.push(`✓ Strong colony population (${queen} Queen)`);
  else factors.push(`⚠️ Reduced colony strength (${strength})`);

  if (pest === 'Low') factors.push(`✓ Low pest & mite risk`);
  else factors.push(`⚠️ Elevated pest risk level (${pest})`);

  const activeAlerts = alerts.filter(a => !a.resolved);
  if (activeAlerts.length === 0) factors.push(`✓ No active critical alerts`);
  else factors.push(`⚠️ ${activeAlerts.length} active alert(s) pending resolution`);

  return {
    colonyHealth: health,
    stressRisk: stress,
    productivity,
    harvestReadiness: readiness,
    harvestPrediction: {
      expectedDays: daysRemaining,
      expectedYieldKg: parseFloat(expectedYieldKg),
      confidencePct,
      trend
    },
    recommendation,
    whyThisResult: factors,
    label: "AI-Assisted Hive Analysis",
    dataNotice: "Prediction based on demo sensor history."
  };
}

module.exports = {
  calculateHiveAIInsights
};
