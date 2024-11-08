"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Eye, Plus, TrendingDown, TrendingUp, X } from "lucide-react"
import { supabase } from "@/lib/supabaseClient"

// Define the shape of the watchlist data
interface WatchlistItem {
  symbol: string;
  indice: number;
}

export default function Watchlist() {
  const [watchlistData, setWatchlistData] = useState<WatchlistItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('')

  // Fetch the watchlist from Supabase when the component mounts
  useEffect(() => {
    const fetchWatchlist = async () => {
      const { data, error } = await supabase
        .from('watchlist')
        .select('*');

      if (error) {
        console.error("Error fetching watchlist data:", error);
      } else {
        setWatchlistData(data || []);
      }
    };

    fetchWatchlist();
  }, []);

  // Add a symbol to the watchlist with a random indice
  const handleAddToWatchlist = async () => {
    if (!searchTerm) return;

    const randomIndice = (Math.random() * 10 - 5).toFixed(1); // Random number between -5 and 5

    const { data, error } = await supabase
      .from('watchlist')
      .insert([{ symbol: searchTerm, indice: parseFloat(randomIndice) }]);

    if (error) {
      console.error("Error adding to watchlist:", error);
    } else {
      setWatchlistData([...watchlistData, { symbol: searchTerm, indice: parseFloat(randomIndice) }]);
      setSearchTerm('');
    }
  };

  // Remove a symbol from the watchlist
  const handleRemoveFromWatchlist = async (symbol: string) => {
    const { error } = await supabase
      .from('watchlist')
      .delete()
      .eq('symbol', symbol);

    if (error) {
      console.error("Error removing from watchlist:", error);
    } else {
      setWatchlistData(watchlistData.filter((item) => item.symbol !== symbol));
    }
  };

  return (
    <div className="flex justrify-center items-center min-h-screen lg:min-w-[80dvh] bg-background p-4 pt-28">
      <Card className="w-full max-w-2xl h-[750px] flex flex-col">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Eye className="h-6 w-6" />
            My Watchlist
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow overflow-hidden">
          <div className="mb-4 flex items-center space-x-2">
            <Input
              placeholder="Add stock to watchlist..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button onClick={handleAddToWatchlist}>
              <Plus className="h-4 w-4 mr-2" />
              Add
            </Button>
          </div>
          <ScrollArea className="h-[calc(100%-60px)]">
            <div className="space-y-4">
              {watchlistData.map((stock) => (
                <div key={stock.symbol} className="flex items-center justify-between p-4 bg-card rounded-lg shadow">
                  <div>
                    <h3 className="font-semibold">{stock.symbol}</h3>
                  </div>
                  <div className="text-right">
                    <p className={`font-bold ${stock.indice >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {stock.indice >= 0 ? '+' : ''}{stock.indice}%
                    </p>
                    <p className={`text-sm flex items-center ${stock.indice >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {stock.indice >= 0 ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
                    </p>
                  </div>
                  <Button variant="ghost" size="icon" className="ml-4" onClick={() => handleRemoveFromWatchlist(stock.symbol)}>
                    <X className="h-4 w-4" />
                    <span className="sr-only">Remove from watchlist</span>
                  </Button>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
}
