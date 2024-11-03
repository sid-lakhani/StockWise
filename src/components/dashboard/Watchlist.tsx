"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Eye, Plus, TrendingDown, TrendingUp, X } from "lucide-react"

const watchlistData = [
  { symbol: "AAPL", name: "Apple Inc.", price: 150.25, change: 2.5 },
  { symbol: "GOOGL", name: "Alphabet Inc.", price: 2800.75, change: -1.2 },
  { symbol: "MSFT", name: "Microsoft Corporation", price: 305.50, change: 1.8 },
  { symbol: "AMZN", name: "Amazon.com Inc.", price: 3400.00, change: 0.7 },
  { symbol: "TSLA", name: "Tesla, Inc.", price: 750.80, change: 3.2 },
]

export default function Watchlist() {
  const [searchTerm, setSearchTerm] = useState('')

  const handleAddToWatchlist = () => {
    console.log(`Adding ${searchTerm} to watchlist`)
    setSearchTerm('')
  }

  return (
    <div className="flex justify-center items-center min-h-screen lg:min-w-[80dvh] bg-background p-4">
      <Card className="w-full max-w-2xl h-[600px] flex flex-col">
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
                    <p className="text-sm text-muted-foreground">{stock.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">${stock.price.toFixed(2)}</p>
                    <p className={`text-sm flex items-center ${stock.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {stock.change >= 0 ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
                      {stock.change >= 0 ? '+' : ''}{stock.change}%
                    </p>
                  </div>
                  <Button variant="ghost" size="icon" className="ml-4">
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