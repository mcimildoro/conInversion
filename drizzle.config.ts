import { type Config } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env" });

export default {
  schema: "./src/lib/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    host: "db.opcngdajyqjbyvunlvco.supabase.co",
    port: 5432,
    user: "postgres",
    password: process.env.DB_PASSWORD!,
    database: "postgres",
    ssl: {
      rejectUnauthorized: false,
    } as any, // 👈 esto evita que TypeScript se queje
  },
} satisfies Config;
