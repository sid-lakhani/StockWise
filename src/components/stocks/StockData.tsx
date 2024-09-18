'use client';

import { useEffect, useState } from 'react';

// Define types for the component props
interface StockDataProps {
  symbol: string;
}

export default function StockData({ symbol }: StockDataProps) {
  const [stockData, setStockData] = useState<any>(null); // Replace `any` with a more specific type if possible
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null); // Error can be a string or null

  const fetchStockData = async () => {
    if (!symbol) return;
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`/api/stock?symbol=${symbol}`);
      
      if (!res.ok) {
        throw new Error('Failed to fetch stock data');
      }

      const data = await res.json();
      setStockData(data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStockData();
  }, [symbol]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Stock Data for {symbol}</h1>
      <pre>{JSON.stringify(stockData, null, 2)}</pre>
    </div>
  );
}
