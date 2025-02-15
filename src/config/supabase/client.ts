import { checkEnvVariables } from './common';
import { createBrowserClient } from '@supabase/ssr';
import type { SupabaseClient } from '@supabase/supabase-js';

const { url, key } = checkEnvVariables({ useServiceKey: false });

export function createDynamicClient() {
  return createBrowserClient(url, key);
}

export function createClient() {
  return createBrowserClient(url, key);
}

export type { SupabaseClient };
