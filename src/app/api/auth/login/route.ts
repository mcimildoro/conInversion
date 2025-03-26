// app/api/auth/login/route.ts
import { createServerActionClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { users } from "@/lib/db/schema"
import { eq } from "drizzle-orm"
import { compare } from "bcrypt"
import { loginSchema } from "@/lib/validators/auth"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const validation = loginSchema.safeParse(body)
    if (!validation.success) {
      return NextResponse.json({ error: "Datos inválidos" }, { status: 400 })
    }

    const { email, password } = validation.data

    const user = await db.query.users.findFirst({ where: eq(users.email, email) })
    if (!user || !(await compare(password, user.password ?? ""))) {
      return NextResponse.json({ error: "Credenciales inválidas" }, { status: 401 })
    }

    const supabase = createServerActionClient({ cookies: () => cookies() })
    const { error: authError } = await supabase.auth.signInWithPassword({ email, password })

    if (authError) {
      return NextResponse.json({ error: authError.message }, { status: 401 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Login error:", err)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
