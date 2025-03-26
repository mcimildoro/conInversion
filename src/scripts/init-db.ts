import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import * as schema from "../lib/db/schema"

// URL de conexión a la base de datos hardcodeada
const connectionString = "postgresql://postgres:2oDWBP223zFiMNwC@db.opcngdajyqjbyvunlvco.supabase.co:5432/postgres"

async function main() {
  console.log("Inicializando la base de datos...")

  // Crear cliente SQL para migraciones
  const migrationClient = postgres(connectionString, { max: 1 })
  const db = drizzle(migrationClient, { schema })

  try {
    console.log("Generando esquema de la base de datos...")

    // Crear tablas directamente sin usar migraciones
    // Esto es útil para la configuración inicial

    // Tabla de usuarios
    await db.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) NOT NULL UNIQUE,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255),
        first_name VARCHAR(255),
        last_name VARCHAR(255),
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      );
    `)

    // Tabla de empresas
    await db.execute(`
      CREATE TABLE IF NOT EXISTS companies (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        ticker VARCHAR(10),
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      );
    `)

    // Tabla de oportunidades
    await db.execute(`
      CREATE TABLE IF NOT EXISTS opportunities (
        id SERIAL PRIMARY KEY,
        company_id INTEGER REFERENCES companies(id),
        type VARCHAR(50),
        description TEXT,
        opportunity_date TIMESTAMP,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      );
    `)

    // Tabla de eventos
    await db.execute(`
      CREATE TABLE IF NOT EXISTS events (
        id SERIAL PRIMARY KEY,
        company_id INTEGER REFERENCES companies(id),
        message TEXT,
        image_url VARCHAR(255),
        event_date TIMESTAMP,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      );
    `)

    console.log("Base de datos inicializada correctamente")
  } catch (error) {
    console.error("Error al inicializar la base de datos:", error)
  } finally {
    // Cerrar conexión
    await migrationClient.end()
  }
}

main().catch(console.error)

