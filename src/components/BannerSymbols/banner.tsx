"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Stock {
  symbol: string;
  close: string;
  change: string;
  percent_change: string;
}

const PLACEHOLDER_STOCKS: Stock[] = [
  { symbol: "AAPL",  close: "150.00",  change: "2.5",   percent_change: "1.67" },
  { symbol: "GOOGL", close: "2800.00", change: "-15.5", percent_change: "-0.55" },
  { symbol: "MSFT",  close: "300.00",  change: "5.25",  percent_change: "1.75" },
  { symbol: "AMZN",  close: "3300.00", change: "-20.75", percent_change: "-0.63" },
  { symbol: "META",  close: "330.00",  change: "8.5",   percent_change: "2.58" },
];

export default function BannerSymbol() {
  const [stocks, setStocks] = useState<Stock[]>(PLACEHOLDER_STOCKS);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch de datos cada 60 segundos
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/stock");
        if (!response.ok) {
          throw new Error("No stock data available.");
        }
        const rawData: { [key: string]: Stock } = await response.json();
        const formattedData = Object.values(rawData);
        if (!formattedData.length) {
          throw new Error("No stock data available.");
        }
        setStocks(formattedData);
        setIsLoading(false);
      } catch (err) {
        console.error("🚨 Error fetching stock data:", err);
        setError("Could not fetch stock data.");
        setIsLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000); // Actualiza cada 60s
    return () => clearInterval(interval);
  }, []);

  // Función para renderizar cada elemento de stock
  const renderStockItem = (stock: Stock, index: number) => (
    <motion.div
      key={stock.symbol + index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex items-center space-x-2 mx-4"
    >
      <span className="font-bold">{stock.symbol}</span>
      <span className="text-green-400">
        ${Number.parseFloat(stock.close).toFixed(2)}
      </span>
      <span className={Number.parseFloat(stock.change) >= 0 ? "text-green-500" : "text-red-500"}>
        {Number.parseFloat(stock.percent_change).toFixed(2)}%
      </span>
    </motion.div>
  );

  // Duplicamos el array para lograr un efecto de bucle continuo
  const repeatedStocks = [...stocks, ...stocks];

  return (
    <div className="w-full bg-calculatorBanner bg-opacity-90 text-white py-3 overflow-hidden">
      {error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : isLoading ? (
        <p className="text-center">Cargando...</p>
      ) : (
        <div className="relative flex overflow-hidden">
          <div className="animate-marquee flex whitespace-nowrap">
            {repeatedStocks.map((stock, index) => renderStockItem(stock, index))}
          </div>
        </div>
      )}
    </div>
  );
}
