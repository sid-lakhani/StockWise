'use client';

import { useState } from 'react';

// Define the type for the props
interface SymbolSearchProps {
  onSelectSymbol: (symbol: string) => void; // Type for the function prop
}

// Define the type for search results
interface SearchResult {
  '1. symbol': string;
  '2. name': string;
}

export default function SymbolSearch({ onSelectSymbol }: SymbolSearchProps) {
  const [query, setQuery] = useState<string>(''); // Type for query state
  const [results, setResults] = useState<SearchResult[]>([]); // Type for results state
  const [loading, setLoading] = useState<boolean>(false); // Type for loading state
  const [error, setError] = useState<string | null>(null); // Type for error state

  const handleSearch = async () => {
    if (!query) return;
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`/api/symbol-search?keywords=${query}`);
      
      if (!res.ok) {
        throw new Error('Failed to fetch search results');
      }

      const data = await res.json();
      setResults(data.bestMatches || []);
    } catch (error) {
      // Narrow down the type of error
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = (symbol: string) => {
    onSelectSymbol(symbol); // Pass the selected symbol to the parent component
  };

  return (
    <div>
      <h1>Search Stock Symbols</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter stock symbol or company name"
      />
      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <ul>
        {results.map((result, index) => (
          <li key={index} onClick={() => handleSelect(result['1. symbol'])}>
            {result['1. symbol']} - {result['2. name']}
          </li>
        ))}
      </ul>
    </div>
  );
}
