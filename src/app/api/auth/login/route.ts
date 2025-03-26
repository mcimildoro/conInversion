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
  const body = await req.json()

  const validationResult = loginSchema.safeParse(body)
  if (!validationResult.success) {
    return NextResponse.json(
      { error: "Datos inválidos", details: validationResult.error.format() },
      { status: 400 }
    )
  }

  const { email, password } = validationResult.data

  // Verificamos en la base de datos interna
  const user = await db.query.users.findFirst({
    where: eq(users.email, email),
  })

  if (!user || !(await compare(password, user.password ?? ""))) {
    return NextResponse.json({ error: "Credenciales inválidas" }, { status: 401 })
  }

  // Autenticación Supabase con cookie
  const supabase = createServerActionClient({ cookies })

  const { error: authError } = await supabase.auth.signInWithPassword({ email, password })

  if (authError) {
    return NextResponse.json({ error: authError.message }, { status: 401 })
  }

  return NextResponse.json({ success: true })
}
