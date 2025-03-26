import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import * as schema from "./schema"

// Configuración para conexión a Supabase PostgreSQL
const connectionString =
  process.env.CONINVERSION_DATABASE_URL || "postgresql://postgres:2oDWBP223zFiMNwC.opcngdajyqjbyvunlvco.supabase.co:5432/postgres"

// Cliente para consultas SQL
const client = postgres(connectionString)

// Cliente Drizzle con el esquema
export const db = drizzle(client, { schema })

