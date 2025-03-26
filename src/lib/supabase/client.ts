import { createClient } from "@supabase/supabase-js"

// Variables de entorno hardcodeadas
const supabaseUrl = "https://opcngdajyqjbyvunlvco.supabase.co"
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wY25nZGFqeXFqYnl2dW5sdmNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4MTI4MTEsImV4cCI6MjA1ODM4ODgxMX0.6BtfF0peAnW_LPVMNr_fBgudASgylRtUhXE5td75_cU"

// lib/supabase/client.ts
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true, // solo si usas OAuth
  },
});

