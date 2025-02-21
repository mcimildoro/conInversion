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