'use client';

import { useState } from 'react';

export default function SymbolSearch({ onSelectSymbol }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = (symbol) => {
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
