// lib/auth/session.ts

import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

export function createServerSupabaseClient() {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: async () => {
          const cookieStore = await cookies()
          return cookieStore.getAll()
        },
        setAll: async (cookiesToSet) => {
          const cookieStore = await cookies()
          for (const { name, value } of cookiesToSet) {
            cookieStore.set(name, value)
          }
        },
      },
    }
  )
}

export async function getSession() {
  const supabase = createServerSupabaseClient()
  const { data: { session } } = await supabase.auth.getSession()

  console.log("🎯 Sesión desde servidor:", session)
  return session
}

export async function getCurrentUser() {
  const supabase = createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()
  return user ?? null
}
