import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

const supabaseUrl = "https://opcngdajyqjbyvunlvco.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wY25nZGFqeXFqYnl2dW5sdmNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4MTI4MTEsImV4cCI6MjA1ODM4ODgxMX0.6BtfF0peAnW_LPVMNr_fBgudASgylRtUhXE5td75_cU";

export async function createServerSupabaseClient() {
  const cookieStore = await cookies(); // 👈 aquí sí necesitas await
  const token = cookieStore.get("sb-opcngdajyqjbyvunlvco-auth-token")?.value;
  console.log(typeof cookies());

  return createClient(supabaseUrl, supabaseAnonKey, {
    global: {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    },
  });
  
}
