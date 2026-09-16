-- ============================================================
-- SUPABASE / POSTGRES MIGRATION: 50 SYNTHETIC BEEHIVES SEED DATA
-- Includes realistic GPS latitude & longitude coordinates for map interfaces
-- ============================================================

ALTER TABLE public.beehives ADD COLUMN IF NOT EXISTS latitude NUMERIC;
ALTER TABLE public.beehives ADD COLUMN IF NOT EXISTS longitude NUMERIC;

INSERT INTO public.beehives (hive_id, apiary_name, location_name, temperature_c, humidity_pct, weight_kg, status, latitude, longitude)
VALUES
('HIVE-001', 'Deccan Organic Apiary (Unit 1)', 'Nizamabad, Telangana', 22.8, 67, 14.7, 'Strong', 18.689741, 78.082929),
('HIVE-002', 'Litchi Orchards Apiary (Unit 1)', 'Muzaffarpur, Bihar', 24.9, 57, 22.2, 'Strong', 26.136066, 85.373793),
('HIVE-003', 'Mustard Valley Apiary (Unit 1)', 'Bharatpur, Rajasthan', 35.8, 53, 23.2, 'Moderate', 27.207569, 77.494219),
('HIVE-004', 'Western Ghats Shola Apiary (Unit 2)', 'Coorg, Karnataka', 23.7, 81, 19.9, 'Moderate', 12.33487, 75.80148),
('HIVE-005', 'Himalayan Pine & Acacia (Unit 2)', 'Shimla, Himachal Pradesh', 24, 51, 17.4, 'Weak', 31.098655, 77.173515),
('HIVE-006', 'Spice Belt Apiary (Unit 2)', 'Wayanad, Kerala', 27.3, 50, 17.8, 'Strong', 11.699868, 76.120141),
('HIVE-007', 'Golden Agri Fields (Unit 3)', 'Ludhiana, Punjab', 32.5, 65, 23.6, 'Strong', 30.917271, 75.873016),
('HIVE-008', 'Chambal Flora Apiary (Unit 3)', 'Gwalior, Madhya Pradesh', 32.1, 77, 16.4, 'Strong', 26.201822, 78.17028),
('HIVE-009', 'Godavari Mangrove Apiary (Unit 3)', 'Kakinada, Andhra Pradesh', 35.3, 51, 19.8, 'Moderate', 16.976353, 82.253006),
('HIVE-010', 'Sahyadri Crest Apiary (Unit 4)', 'Satara, Maharashtra', 22.9, 64, 17.7, 'Moderate', 17.672808, 74.005905),
('HIVE-011', 'Brahmaputra Valley Apiary (Unit 4)', 'Guwahati, Assam', 26.8, 69, 16.2, 'Weak', 26.154548, 91.734313),
('HIVE-012', 'Sundarbans Wild Apiary (Unit 4)', 'Sundarbans, West Bengal', 27.4, 64, 25.8, 'Strong', 21.946495, 89.178199),
('HIVE-013', 'Kashmir Valley Apiary (Unit 5)', 'Anantnag, Jammu & Kashmir', 33.5, 50, 19, 'Strong', 33.712222, 75.147754),
('HIVE-014', 'Strawberry Hills Apiary (Unit 5)', 'Mahabaleshwar, Maharashtra', 23.9, 59, 17.5, 'Strong', 17.938743, 73.650952),
('HIVE-015', 'Doon Valley Organic Apiary (Unit 5)', 'Dehradun, Uttarakhand', 33, 59, 14.2, 'Moderate', 30.31324, 78.029849),
('HIVE-016', 'Deccan Organic Apiary (Unit 6)', 'Nizamabad, Telangana', 28.7, 69, 15.5, 'Moderate', 18.690698, 78.100014),
('HIVE-017', 'Litchi Orchards Apiary (Unit 6)', 'Muzaffarpur, Bihar', 30.4, 52, 19.5, 'Weak', 26.137907, 85.378089),
('HIVE-018', 'Mustard Valley Apiary (Unit 6)', 'Bharatpur, Rajasthan', 29.4, 45, 23.5, 'Strong', 27.221695, 77.489869),
('HIVE-019', 'Western Ghats Shola Apiary (Unit 7)', 'Coorg, Karnataka', 31, 62, 18.6, 'Strong', 12.343966, 75.790512),
('HIVE-020', 'Himalayan Pine & Acacia (Unit 7)', 'Shimla, Himachal Pradesh', 29, 73, 17.9, 'Strong', 31.122707, 77.17618),
('HIVE-021', 'Spice Belt Apiary (Unit 7)', 'Wayanad, Kerala', 35.2, 75, 16.2, 'Moderate', 11.666919, 76.140018),
('HIVE-022', 'Golden Agri Fields (Unit 8)', 'Ludhiana, Punjab', 31.8, 75, 19.2, 'Moderate', 30.912398, 75.845155),
('HIVE-023', 'Chambal Flora Apiary (Unit 8)', 'Gwalior, Madhya Pradesh', 25.3, 76, 24.6, 'Weak', 26.209118, 78.168528),
('HIVE-024', 'Godavari Mangrove Apiary (Unit 8)', 'Kakinada, Andhra Pradesh', 34.7, 73, 24.8, 'Strong', 16.970334, 82.235077),
('HIVE-025', 'Sahyadri Crest Apiary (Unit 9)', 'Satara, Maharashtra', 23.8, 60, 20.4, 'Strong', 17.689812, 73.998409),
('HIVE-026', 'Brahmaputra Valley Apiary (Unit 9)', 'Guwahati, Assam', 26.8, 48, 21.3, 'Strong', 26.135408, 91.740219),
('HIVE-027', 'Sundarbans Wild Apiary (Unit 9)', 'Sundarbans, West Bengal', 29.6, 62, 18.1, 'Moderate', 21.942102, 89.168789),
('HIVE-028', 'Kashmir Valley Apiary (Unit 10)', 'Anantnag, Jammu & Kashmir', 33.4, 51, 17.3, 'Moderate', 33.735697, 75.168146),
('HIVE-029', 'Strawberry Hills Apiary (Unit 10)', 'Mahabaleshwar, Maharashtra', 36.6, 73, 22.5, 'Weak', 17.943022, 73.651238),
('HIVE-030', 'Doon Valley Organic Apiary (Unit 10)', 'Dehradun, Uttarakhand', 25.2, 76, 16.4, 'Strong', 30.327955, 78.029612),
('HIVE-031', 'Deccan Organic Apiary (Unit 11)', 'Nizamabad, Telangana', 27, 70, 19.2, 'Strong', 18.665892, 78.100282),
('HIVE-032', 'Litchi Orchards Apiary (Unit 11)', 'Muzaffarpur, Bihar', 28.5, 74, 23.4, 'Strong', 26.117006, 85.365211),
('HIVE-033', 'Mustard Valley Apiary (Unit 11)', 'Bharatpur, Rajasthan', 33.4, 76, 16.6, 'Moderate', 27.199022, 77.504475),
('HIVE-034', 'Western Ghats Shola Apiary (Unit 12)', 'Coorg, Karnataka', 23.7, 63, 16, 'Moderate', 12.33619, 75.82493),
('HIVE-035', 'Himalayan Pine & Acacia (Unit 12)', 'Shimla, Himachal Pradesh', 35.1, 74, 19.4, 'Weak', 31.102481, 77.187243),
('HIVE-036', 'Spice Belt Apiary (Unit 12)', 'Wayanad, Kerala', 27.4, 75, 16.1, 'Strong', 11.696264, 76.137168),
('HIVE-037', 'Golden Agri Fields (Unit 13)', 'Ludhiana, Punjab', 23.1, 72, 21.3, 'Strong', 30.909552, 75.868399),
('HIVE-038', 'Chambal Flora Apiary (Unit 13)', 'Gwalior, Madhya Pradesh', 24.3, 70, 14.8, 'Strong', 26.234548, 78.18461),
('HIVE-039', 'Godavari Mangrove Apiary (Unit 13)', 'Kakinada, Andhra Pradesh', 34.3, 72, 25.4, 'Moderate', 16.970969, 82.239483),
('HIVE-040', 'Sahyadri Crest Apiary (Unit 14)', 'Satara, Maharashtra', 31.6, 61, 25.1, 'Moderate', 17.679769, 74.013894),
('HIVE-041', 'Brahmaputra Valley Apiary (Unit 14)', 'Guwahati, Assam', 32, 71, 16.3, 'Weak', 26.137192, 91.731702),
('HIVE-042', 'Sundarbans Wild Apiary (Unit 14)', 'Sundarbans, West Bengal', 23.3, 84, 14.9, 'Strong', 21.953927, 89.202163),
('HIVE-043', 'Kashmir Valley Apiary (Unit 15)', 'Anantnag, Jammu & Kashmir', 29.6, 75, 14.2, 'Strong', 33.738168, 75.132293),
('HIVE-044', 'Strawberry Hills Apiary (Unit 15)', 'Mahabaleshwar, Maharashtra', 31.1, 71, 18.9, 'Strong', 17.918289, 73.639641),
('HIVE-045', 'Doon Valley Organic Apiary (Unit 15)', 'Dehradun, Uttarakhand', 22.8, 57, 17.1, 'Moderate', 30.321302, 78.030753),
('HIVE-046', 'Deccan Organic Apiary (Unit 16)', 'Nizamabad, Telangana', 31.6, 74, 15.4, 'Moderate', 18.674677, 78.105988),
('HIVE-047', 'Litchi Orchards Apiary (Unit 16)', 'Muzaffarpur, Bihar', 33, 53, 17.4, 'Weak', 26.130695, 85.360024),
('HIVE-048', 'Mustard Valley Apiary (Unit 16)', 'Bharatpur, Rajasthan', 34.1, 83, 15.8, 'Strong', 27.214375, 77.469806),
('HIVE-049', 'Western Ghats Shola Apiary (Unit 17)', 'Coorg, Karnataka', 25, 75, 24.1, 'Strong', 12.336014, 75.813597),
('HIVE-050', 'Himalayan Pine & Acacia (Unit 17)', 'Shimla, Himachal Pradesh', 29.9, 56, 22.8, 'Strong', 31.123335, 77.168609)
ON CONFLICT (hive_id) DO UPDATE SET
  apiary_name = EXCLUDED.apiary_name,
  location_name = EXCLUDED.location_name,
  temperature_c = EXCLUDED.temperature_c,
  humidity_pct = EXCLUDED.humidity_pct,
  weight_kg = EXCLUDED.weight_kg,
  status = EXCLUDED.status,
  latitude = EXCLUDED.latitude,
  longitude = EXCLUDED.longitude;
