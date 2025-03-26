import { Client } from "pg";

const client = new Client({
  connectionString: "postgresql://postgres:2oDWBP223zFiMNwC@db.opcngdajyqjbyvunlvco.supabase.co:5432/postgres",
  ssl: {
    rejectUnauthorized: false, // 👈 esto ignora el error de certificado
  },
});

async function testConnection() {
  try {
    await client.connect();
    console.log("✅ Conexión exitosa a Supabase desde pg");
    await client.end();
  } catch (err) {
    console.error("❌ Error de conexión:", err);
  }
}

testConnection();
