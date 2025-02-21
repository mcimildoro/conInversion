"use client";
import { useEffect, useState } from "react";

interface Stock {
  symbol: string;
  price: number;
  change: number;
  percentChange: number;
}

export default function BannerSymbol() {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("⏳ Fetching stock data from /api/stock...");

        const response = await fetch("/api/stock");
        console.log("📌 API Response Status:", response.status);

        if (!response.ok) {
          console.error("❌ Error en el response:", response.statusText);
          throw new Error("No stock data available.");
        }

        const rawData: { [key: string]: { symbol: string; close: string; change: string; percent_change: string } } = await response.json();
        console.log("✅ Data received:", rawData);

        const formattedData: Stock[] = Object.values(rawData).map((stock: { symbol: string; close: string; change: string; percent_change: string }) => ({
          symbol: stock.symbol,
          price: parseFloat(stock.close),
          change: parseFloat(stock.change),
          percentChange: parseFloat(stock.percent_change),
        }));

        if (!formattedData.length) throw new Error("No stock data available.");

        setStocks(formattedData);
      } catch (err) {
        console.error("🚨 Error fetching stock data:", err);
        setError("Could not fetch stock data.");
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000); // 🔄 Actualiza cada 60s
    return () => clearInterval(interval);
  }, []);

    // Duplicar los stocks para crear un efecto de loop continuo
    const duplicatedStocks = [...stocks, ...stocks]
    
  return (
    <div className="w-full bg-calculatorBanner bg-opacity-90 text-white py-3 overflow-hidden">
      {error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex">
            {duplicatedStocks.map((stock, index) => (
              <div key={index} className="flex items-center space-x-2 mx-4">
                <span className="font-bold">{stock.symbol}</span>
                <span className="text-green-400">${stock.price?.toFixed(2)}</span>
                <span className={`${stock.change >= 0 ? "text-green-500" : "text-red-500"}`}>
                  {stock.percentChange?.toFixed(2)}%
                </span>
              </div>
            ))}
          </div>
          <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex">
            {duplicatedStocks.map((stock, index) => (
              <div key={index} className="flex items-center space-x-2 mx-4">
                <span className="font-bold">{stock.symbol}</span>
                <span className="text-green-400">${stock.price?.toFixed(2)}</span>
                <span className={`${stock.change >= 0 ? "text-green-500" : "text-red-500"}`}>
                  {stock.percentChange?.toFixed(2)}%
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
