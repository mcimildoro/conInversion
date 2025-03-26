import { drizzle } from "drizzle-orm/postgres-js"
import { migrate } from "drizzle-orm/postgres-js/migrator"
import postgres from "postgres"

// Esta función ejecuta las migraciones de la base de datos
export async function runMigrations() {
  console.log("Ejecutando migraciones de la base de datos...")

  // Obtener la URL de conexión desde las variables de entorno
  const connectionString = process.env.CONINVERSION_DATABASE_URL

  if (!connectionString) {
    throw new Error("DATABASE_URL no está definida en las variables de entorno")
  }

  // Crear cliente SQL para migraciones
  const migrationClient = postgres(connectionString, { max: 1 })

  try {
    // Ejecutar migraciones
    await migrate(drizzle(migrationClient), { migrationsFolder: "./drizzle" })
    console.log("Migraciones completadas exitosamente")
  } catch (error) {
    console.error("Error al ejecutar migraciones:", error)
    throw error
  } finally {
    // Cerrar conexión
    await migrationClient.end()
  }
}

// Si este archivo se ejecuta directamente
if (require.main === module) {
  runMigrations()
    .then(() => {
      console.log("Proceso de migración finalizado")
      process.exit(0)
    })
    .catch((error) => {
      console.error("Error en el proceso de migración:", error)
      process.exit(1)
    })
}

