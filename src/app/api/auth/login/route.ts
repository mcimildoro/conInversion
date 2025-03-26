import { NextResponse } from "next/server"
import { compare } from "bcrypt"
import { db } from "@/lib/db"
import { users } from "@/lib/db/schema"
import { loginSchema } from "@/lib/validators/auth"
import { supabase } from "@/lib/supabase/client"
import { eq } from "drizzle-orm"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    // Validar los datos de entrada
    const validationResult = loginSchema.safeParse(body)

    if (!validationResult.success) {
      return NextResponse.json(
        { error: "Datos de inicio de sesión inválidos", details: validationResult.error.format() },
        { status: 400 },
      )
    }

    const { email, password } = validationResult.data

    // Iniciar sesión con Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (authError) {
      return NextResponse.json({ error: "Credenciales inválidas" }, { status: 401 })
    }

    // Obtener información adicional del usuario desde nuestra base de datos
    const user = await db.query.users.findFirst({
      where: eq(users.email, email),
    })

    if (!user) {
      return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 })
    }

    // Verificar la contraseña (doble verificación)
    const passwordMatch = await compare(password, user.password || "")

    if (!passwordMatch) {
      return NextResponse.json({ error: "Credenciales inválidas" }, { status: 401 })
    }

    return NextResponse.json({
      message: "Inicio de sesión exitoso",
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
      session: authData.session,
    })
  } catch (error) {
    console.error("Error en el inicio de sesión:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}

