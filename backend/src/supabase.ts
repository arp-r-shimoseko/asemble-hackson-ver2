import { createClient } from '@supabase/supabase-js';

import dotenv from 'dotenv';
import path from 'node:path';

// Load backend/src/.env for local dev
dotenv.config({ path: path.resolve(__dirname, '.env') });

export const supabase = createClient(
  process.env.SUPABASE_URL as string,
  // Prefer anon/publishable key; fall back to service role only if explicitly provided.
  (process.env.SUPABASE_ANON_KEY ?? process.env.SUPABASE_SERVICE_ROLE_KEY) as string,
);
