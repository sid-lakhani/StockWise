'use client';

import { useEffect, useState } from 'react';

export default function StockData({ symbol }) {
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStockData();
  }, [symbol]); // Refetch when symbol changes

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
