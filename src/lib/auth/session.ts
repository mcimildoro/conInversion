// lib/auth/session.ts
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

type Database = {
  users: {
    id: string
    email: string
    password: string
  }
}

export async function getSession() {
  const supabase = createServerComponentClient<Database>({ cookies: () => cookies() })


  const {
    data: { session },
  } = await supabase.auth.getSession()

  console.log("🎯 Sesión desde servidor:", session)
  return session
}

export async function getCurrentUser() {
  const session = await getSession()
  return session?.user ?? null
}
