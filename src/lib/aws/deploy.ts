// Este archivo contiene utilidades para el despliegue en AWS Lambda

import { execSync } from "child_process"
import fs from "fs"

// Función para crear el archivo serverless.yml
export function generateServerlessConfig() {
  const config = `
service: coninversion-api

provider:
  name: aws
  runtime: nodejs18.x
  stage: \${opt:stage, 'dev'}
  region: \${opt:region, 'us-east-1'}
  environment:
    NEXT_PUBLIC_SUPABASE_URL: \${env:NEXT_PUBLIC_SUPABASE_URL}
    NEXT_PUBLIC_SUPABASE_ANON_KEY: \${env:NEXT_PUBLIC_SUPABASE_ANON_KEY}
    CONINVERSION_DATABASE_URL: \${env:DATABASE_URL}

functions:
  auth:
    handler: dist/auth.handler
    events:
      - http:
          path: /api/auth/{proxy+}
          method: any
          cors: true
  users:
    handler: dist/users.handler
    events:
      - http:
          path: /api/users/{proxy+}
          method: any
          cors: true

plugins:
  - serverless-offline
  - serverless-dotenv-plugin
`

  fs.writeFileSync("serverless.yml", config)
  console.log("Archivo serverless.yml generado correctamente")
}

// Función para compilar el proyecto para AWS Lambda
export function buildForLambda() {
  try {
    console.log("Compilando el proyecto para AWS Lambda...")

    // Crear carpeta dist si no existe
    if (!fs.existsSync("dist")) {
      fs.mkdirSync("dist")
    }

    // Compilar TypeScript
    execSync("tsc --project tsconfig.lambda.json", { stdio: "inherit" })

    console.log("Proyecto compilado correctamente para AWS Lambda")
  } catch (error) {
    console.error("Error al compilar el proyecto:", error)
    process.exit(1)
  }
}

// Función para desplegar en AWS Lambda
export function deployToLambda() {
  try {
    console.log("Desplegando en AWS Lambda...")

    // Generar configuración de Serverless
    generateServerlessConfig()

    // Compilar el proyecto
    buildForLambda()

    // Desplegar con Serverless Framework
    execSync("serverless deploy", { stdio: "inherit" })

    console.log("Proyecto desplegado correctamente en AWS Lambda")
  } catch (error) {
    console.error("Error al desplegar en AWS Lambda:", error)
    process.exit(1)
  }
}

