// middleware.ts
/*
import { NextResponse } from "next/server"
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"
import type { NextRequest } from "next/server"

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()

  const supabase = createMiddlewareClient({ req, res })
  await supabase.auth.getSession() // Muy importante
  console.log("🎯 Sesión desde middleware:", supabase.auth.getSession())
  return res
}

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*"],
}
*/