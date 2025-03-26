import { NextResponse } from "next/server"
import { hash } from "bcrypt"
import { db } from "@/lib/db"
import { users } from "@/lib/db/schema"
import { registerSchema } from "@/lib/validators/auth"
import { supabase } from "@/lib/supabase/client"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    // Validar los datos de entrada
    const validationResult = registerSchema.safeParse(body)

    if (!validationResult.success) {
      return NextResponse.json(
        { error: "Datos de registro inválidos", details: validationResult.error.format() },
        { status: 400 },
      )
    }

    const { username, email, password, firstName, lastName } = validationResult.data

    // Verificar si el usuario ya existe
    const existingUser = await db.query.users.findFirst({
      where: (users, { or, eq }) => or(eq(users.email, email), eq(users.username, username)),
    })

    if (existingUser) {
      return NextResponse.json({ error: "El usuario o correo electrónico ya está registrado" }, { status: 409 })
    }

    // Crear usuario en Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username,
          first_name: firstName,
          last_name: lastName,
        },
      },
    })

    if (authError) {
      return NextResponse.json(
        { error: "Error al crear el usuario en Supabase", details: authError.message },
        { status: 500 },
      )
    }

    // Hashear la contraseña para almacenarla en nuestra base de datos
    const hashedPassword = await hash(password, 10)

    // Insertar usuario en nuestra base de datos
    const newUser = await db
      .insert(users)
      .values({
        username,
        email,
        password: hashedPassword,
        firstName,
        lastName,
      })
      .returning()

    return NextResponse.json(
      {
        message: "Usuario registrado exitosamente",
        user: {
          id: newUser[0].id,
          username: newUser[0].username,
          email: newUser[0].email,
        },
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error en el registro:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}

