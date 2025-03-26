import { checkRequiredEnvVars } from "../lib/config"
import * as dotenv from "dotenv"

// Cargar variables de entorno desde .env.local
dotenv.config({ path: ".env.local" })

function main() {
  console.log("Verificando variables de entorno...")

  const allVarsPresent = checkRequiredEnvVars()

  if (allVarsPresent) {
    console.log("✅ Todas las variables de entorno requeridas están presentes.")
  } else {
    console.error("❌ Faltan algunas variables de entorno requeridas.")
    process.exit(1)
  }
}

main()

