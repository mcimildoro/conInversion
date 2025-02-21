import { NextResponse } from "next/server";

/*export async function GET() {
  const apiKey = "af5f8840a1ac4ec5aa5a217835f09f50";
  const symbols = "AAPL,TSLA,GOOGL,AMZN,MSFT";
  const baseUrl = "https://api.twelvedata.com/quote";

  console.log("⏳ Fetching stock data from TwelveData...");

  try { 
    const response = await fetch(`${baseUrl}?symbol=${symbols}&apikey=${apiKey}`);
    console.log("📌 API Response Status:", response.status);

    if (!response.ok) {
      console.error("❌ Error en API Response:", response.statusText);
      return NextResponse.json({ error: "API Error" }, { status: response.status });
    }

    const data = await response.json();
    console.log("✅ Stock Data Received:", data);

    return NextResponse.json(data);
  } catch (error) {
    console.error("🚨 Error en API Stock:", error);
    return NextResponse.json({ error: "No se pudieron obtener datos" }, { status: 500 });
  }



}*/


const stocksData = {
  AAPL: {
    symbol: "AAPL",
    name: "Apple Inc.",
    exchange: "NASDAQ",
    currency: "USD",
    datetime: "2025-02-19 15:59:00",
    open: "182.45",
    high: "183.80",
    low: "181.92",
    close: "183.15",
    volume: "4521367",
    previous_close: "182.32",
    change: "0.83",
    percent_change: "0.46",
  },
  TSLA: {
    symbol: "TSLA",
    name: "Tesla Inc.",
    exchange: "NASDAQ",
    currency: "USD",
    datetime: "2025-02-19 15:59:00",
    open: "353.93",
    high: "367.35",
    low: "353.63",
    close: "359.71",
    volume: "3014415",
    previous_close: "354.10",
    change: "5.61",
    percent_change: "1.58",
  },
  GOOGL: {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    exchange: "NASDAQ",
    currency: "USD",
    datetime: "2025-02-19 15:59:00",
    open: "184.22",
    high: "185.18",
    low: "183.57",
    close: "184.56",
    volume: "1370556",
    previous_close: "183.77",
    change: "0.79",
    percent_change: "0.43",
  },
  AMZN: {
    symbol: "AMZN",
    name: "Amazon.com Inc.",
    exchange: "NASDAQ",
    currency: "USD",
    datetime: "2025-02-19 15:59:00",
    open: "225.53",
    high: "226.12",
    low: "223.72",
    close: "224.65",
    volume: "1725975",
    previous_close: "226.65",
    change: "-2.00",
    percent_change: "-0.88",
  },
  MSFT: {
    symbol: "MSFT",
    name: "Microsoft Corp.",
    exchange: "NASDAQ",
    currency: "USD",
    datetime: "2025-02-19 15:59:00",
    open: "408.87",
    high: "411.84",
    low: "407.65",
    close: "410.31",
    volume: "1310691",
    previous_close: "409.64",
    change: "0.67",
    percent_change: "0.16",
  },
  NVDA: {
    symbol: "NVDA",
    name: "NVIDIA Corporation",
    exchange: "NASDAQ",
    currency: "USD",
    datetime: "2025-02-19 15:59:00",
    open: "726.12",
    high: "735.78",
    low: "720.45",
    close: "732.90",
    volume: "2150345",
    previous_close: "725.35",
    change: "7.55",
    percent_change: "1.04",
  },
  META: {
    symbol: "META",
    name: "Meta Platforms Inc.",
    exchange: "NASDAQ",
    currency: "USD",
    datetime: "2025-02-19 15:59:00",
    open: "485.76",
    high: "492.15",
    low: "483.20",
    close: "489.50",
    volume: "1875632",
    previous_close: "484.10",
    change: "5.40",
    percent_change: "1.12",
  },
  NFLX: {
    symbol: "NFLX",
    name: "Netflix Inc.",
    exchange: "NASDAQ",
    currency: "USD",
    datetime: "2025-02-19 15:59:00",
    open: "592.30",
    high: "598.75",
    low: "590.15",
    close: "595.80",
    volume: "1245789",
    previous_close: "591.50",
    change: "4.30",
    percent_change: "0.73",
  },
  ORCL: {
    symbol: "ORCL",
    name: "Oracle Corporation",
    exchange: "NYSE",
    currency: "USD",
    datetime: "2025-02-19 15:59:00",
    open: "112.45",
    high: "113.80",
    low: "111.90",
    close: "113.25",
    volume: "1587456",
    previous_close: "112.10",
    change: "1.15",
    percent_change: "1.03",
  },
  JPM: {
    symbol: "JPM",
    name: "JPMorgan Chase & Co.",
    exchange: "NYSE",
    currency: "USD",
    datetime: "2025-02-19 15:59:00",
    open: "172.30",
    high: "174.15",
    low: "171.80",
    close: "173.50",
    volume: "2345678",
    previous_close: "171.90",
    change: "1.60",
    percent_change: "0.93",
  },
  V: {
    symbol: "V",
    name: "Visa Inc.",
    exchange: "NYSE",
    currency: "USD",
    datetime: "2025-02-19 15:59:00",
    open: "278.45",
    high: "280.30",
    low: "277.90",
    close: "279.75",
    volume: "1234567",
    previous_close: "277.80",
    change: "1.95",
    percent_change: "0.70",
  },
  WMT: {
    symbol: "WMT",
    name: "Walmart Inc.",
    exchange: "NYSE",
    currency: "USD",
    datetime: "2025-02-19 15:59:00",
    open: "168.20",
    high: "169.75",
    low: "167.80",
    close: "169.30",
    volume: "2109876",
    previous_close: "168.00",
    change: "1.30",
    percent_change: "0.77",
  },
  JNJ: {
    symbol: "JNJ",
    name: "Johnson & Johnson",
    exchange: "NYSE",
    currency: "USD",
    datetime: "2025-02-19 15:59:00",
    open: "156.75",
    high: "157.90",
    low: "156.20",
    close: "157.40",
    volume: "1876543",
    previous_close: "156.50",
    change: "0.90",
    percent_change: "0.58",
  },
  PG: {
    symbol: "PG",
    name: "Procter & Gamble Co.",
    exchange: "NYSE",
    currency: "USD",
    datetime: "2025-02-19 15:59:00",
    open: "158.30",
    high: "159.45",
    low: "157.90",
    close: "159.10",
    volume: "1654321",
    previous_close: "158.00",
    change: "1.10",
    percent_change: "0.70",
  },
  UNH: {
    symbol: "UNH",
    name: "UnitedHealth Group Inc.",
    exchange: "NYSE",
    currency: "USD",
    datetime: "2025-02-19 15:59:00",
    open: "512.40",
    high: "515.75",
    low: "511.20",
    close: "514.60",
    volume: "987654",
    previous_close: "511.80",
    change: "2.80",
    percent_change: "0.55",
  },
  HD: {
    symbol: "HD",
    name: "The Home Depot Inc.",
    exchange: "NYSE",
    currency: "USD",
    datetime: "2025-02-19 15:59:00",
    open: "362.80",
    high: "365.30",
    low: "361.90",
    close: "364.50",
    volume: "1543210",
    previous_close: "362.20",
    change: "2.30",
    percent_change: "0.64",
  },
  MA: {
    symbol: "MA",
    name: "Mastercard Inc.",
    exchange: "NYSE",
    currency: "USD",
    datetime: "2025-02-19 15:59:00",
    open: "468.25",
    high: "471.50",
    low: "467.40",
    close: "470.80",
    volume: "876543",
    previous_close: "467.90",
    change: "2.90",
    percent_change: "0.62",
  },
  BAC: {
    symbol: "BAC",
    name: "Bank of America Corp.",
    exchange: "NYSE",
    currency: "USD",
    datetime: "2025-02-19 15:59:00",
    open: "35.60",
    high: "36.15",
    low: "35.40",
    close: "35.90",
    volume: "3210987",
    previous_close: "35.50",
    change: "0.40",
    percent_change: "1.13",
  },
  ADBE: {
    symbol: "ADBE",
    name: "Adobe Inc.",
    exchange: "NASDAQ",
    currency: "USD",
    datetime: "2025-02-19 15:59:00",
    open: "578.30",
    high: "582.75",
    low: "576.90",
    close: "581.20",
    volume: "765432",
    previous_close: "577.50",
    change: "3.70",
    percent_change: "0.64",
  },
  CSCO: {
    symbol: "CSCO",
    name: "Cisco Systems Inc.",
    exchange: "NASDAQ",
    currency: "USD",
    datetime: "2025-02-19 15:59:00",
    open: "49.80",
    high: "50.35",
    low: "49.60",
    close: "50.10",
    volume: "2345678",
    previous_close: "49.70",
    change: "0.40",
    percent_change: "0.80",
  },
  CRM: {
    symbol: "CRM",
    name: "Salesforce Inc.",
    exchange: "NYSE",
    currency: "USD",
    datetime: "2025-02-19 15:59:00",
    open: "287.40",
    high: "290.25",
    low: "286.80",
    close: "289.70",
    volume: "1098765",
    previous_close: "286.90",
    change: "2.80",
    percent_change: "0.98",
  },
  COST: {
    symbol: "COST",
    name: "Costco Wholesale Corp.",
    exchange: "NASDAQ",
    currency: "USD",
    datetime: "2025-02-19 15:59:00",
    open: "728.50",
    high: "732.75",
    low: "727.20",
    close: "731.40",
    volume: "654321",
    previous_close: "727.80",
    change: "3.60",
    percent_change: "0.49",
  },
  DIS: {
    symbol: "DIS",
    name: "The Walt Disney Co.",
    exchange: "NYSE",
    currency: "USD",
    datetime: "2025-02-19 15:59:00",
    open: "112.30",
    high: "113.75",
    low: "111.90",
    close: "113.20",
    volume: "2109876",
    previous_close: "112.00",
    change: "1.20",
    percent_change: "1.07",
  },
  INTC: {
    symbol: "INTC",
    name: "Intel Corp.",
    exchange: "NASDAQ",
    currency: "USD",
    datetime: "2025-02-19 15:59:00",
    open: "43.75",
    high: "44.30",
    low: "43.50",
    close: "44.10",
    volume: "3210987",
    previous_close: "43.60",
    change: "0.50",
    percent_change: "1.15",
  },
  KO: {
    symbol: "KO",
    name: "The Coca-Cola Co.",
    exchange: "NYSE",
    currency: "USD",
    datetime: "2025-02-19 15:59:00",
    open: "60.80",
    high: "61.35",
    low: "60.60",
    close: "61.10",
    volume: "1876543",
    previous_close: "60.70",
    change: "0.40",
    percent_change: "0.66",
  },
  MCD: {
    symbol: "MCD",
    name: "McDonald's Corp.",
    exchange: "NYSE",
    currency: "USD",
    datetime: "2025-02-19 15:59:00",
    open: "292.50",
    high: "294.75",
    low: "291.80",
    close: "293.90",
    volume: "987654",
    previous_close: "292.20",
    change: "1.70",
    percent_change: "0.58",
  },
  NKE: {
    symbol: "NKE",
    name: "Nike Inc.",
    exchange: "NYSE",
    currency: "USD",
    datetime: "2025-02-19 15:59:00",
    open: "105.30",
    high: "106.75",
    low: "104.90",
    close: "106.20",
    volume: "1543210",
    previous_close: "105.00",
    change: "1.20",
    percent_change: "1.14",
  },
  PEP: {
    symbol: "PEP",
    name: "PepsiCo Inc.",
    exchange: "NASDAQ",
    currency: "USD",
    datetime: "2025-02-19 15:59:00",
    open: "168.75",
    high: "170.20",
    low: "168.30",
    close: "169.80",
    volume: "1234567",
    previous_close: "168.50",
    change: "1.30",
    percent_change: "0.77",
  },
}

export async function GET() {
  console.log("⏳ Fetching stock data from local API...")

  // Simular un pequeño retraso para imitar una API real
  await new Promise((resolve) => setTimeout(resolve, 500))

  console.log("✅ Stock Data Retrieved:", stocksData)

  return NextResponse.json(stocksData)
}



