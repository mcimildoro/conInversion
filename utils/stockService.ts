/*
Hace una petición HTTP (fetch) a un endpoint local (/api/stock) con los símbolos recibidos en forma de arreglo, separados por comas.

Maneja la respuesta:

Verifica que la respuesta sea exitosa (response.ok).
Si no es exitosa, lanza un error indicando "Error en la API local".
Procesa la respuesta JSON:

Extrae los datos del cuerpo de la respuesta.
Recorre cada objeto del array devuelto, devolviendo un nuevo arreglo simplificado con:
symbol: símbolo de la acción.
price: precio de cierre.
change: cambio absoluto del precio.
percentChange: cambio porcentual del precio.
Gestión de errores:

En caso de un error durante el proceso, imprime en consola el error y devuelve un array vacío [].



*/
export async function getStockData(symbols: string[]) {
  try {
    const response = await fetch(`/api/stock?symbols=${symbols.join(",")}`); // 🔄 Usamos la API local con símbolos
    if (!response.ok) throw new Error("Error en la API local");
    
    const data = await response.json();
    return data.data.map((stock: { symbol: string; close: number; change: number; change_percent: number }) => ({
      symbol: stock.symbol,
      price: stock.close,
      change: stock.change,
      percentChange: stock.change_percent,
    }));
  } catch (error) {
    console.error("Error al obtener datos del servidor:", error);
    return [];
  }
}