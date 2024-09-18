'use client';

import { useState } from 'react';
import SymbolSearch from '@/components/stocks/SymbolSearch'; 
import StockData from '@/components/stocks/StockData'; 

export default function Home() {
  const [selectedSymbol, setSelectedSymbol] = useState<string | null>(null);

  return (
    <main>
      <h1>Stock Symbol Search and Data</h1>

      <SymbolSearch onSelectSymbol={setSelectedSymbol} />

      {selectedSymbol ? (
        <StockData symbol={selectedSymbol} />
      ) : (
        <p>Please search and select a stock symbol.</p>
      )}
    </main>
  );
}
