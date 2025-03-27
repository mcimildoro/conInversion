// lib/supabase/server-client.ts
import { createServerClient } from "@supabase/ssr"
import { cookies, headers } from "next/headers"
import { cookies as getCookies } from "next/headers"

export const createServerSupabaseClient = () => {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
cookies: {
    async getAll() {
      const cookieStore = await getCookies();
      console.log("🍪 Cookies:", cookieStore.getAll()); // log 
      return cookieStore.getAll();
      },
      async setAll(cookiesToSet: { name: string; value: string }[]) {
        const cookieStore = await getCookies();
        cookiesToSet.forEach(({ name, value }) => {
          cookieStore.set(name, value);
        });
      },
    },
    }
  )
}
