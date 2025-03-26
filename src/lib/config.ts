// Configuración centralizada de la aplicación con variables hardcodeadas

// Supabase
export const NEXT_SUPABASE_URL = "https://opcngdajyqjbyvunlvco.supabase.co"
export const NEXT_SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wY25nZGFqeXFqYnl2dW5sdmNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4MTI4MTEsImV4cCI6MjA1ODM4ODgxMX0.6BtfF0peAnW_LPVMNr_fBgudASgylRtUhXE5td75_cU"

// Base de datos
export const CONINVERSION_DATABASE_URL = "postgresql://postgres:2oDWBP223zFiMNwC@db.opcngdajyqjbyvunlvco.supabase.co:5432/postgres"
export const CONINVERSION_DB_PASSWORD = "2oDWBP223zFiMNwC"

// Verificar variables requeridas
export function checkRequiredEnvVars() {
  const requiredVars = [
    { name: "NEXT_PUBLIC_SUPABASE_URL", value: NEXT_SUPABASE_URL },
    { name: "NEXT_PUBLIC_SUPABASE_ANON_KEY", value: NEXT_SUPABASE_ANON_KEY },
    { name: "CONINVERSION_DATABASE_URL", value: CONINVERSION_DATABASE_URL },
  ]

  const missingVars = requiredVars.filter((v) => !v.value)

  if (missingVars.length > 0) {
    console.error(`⚠️ Faltan las siguientes variables de entorno: ${missingVars.map((v) => v.name).join(", ")}`)
    return false
  }

  return true
}

