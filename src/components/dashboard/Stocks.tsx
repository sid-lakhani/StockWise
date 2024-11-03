"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { DollarSign, Search, TrendingDown, TrendingUp } from "lucide-react"

const stockData = [
  { symbol: "AAPL", name: "Apple Inc.", price: 150.25, change: 2.5 },
  { symbol: "GOOGL", name: "Alphabet Inc.", price: 2800.75, change: -1.2 },
  { symbol: "MSFT", name: "Microsoft Corporation", price: 305.50, change: 1.8 },
  { symbol: "AMZN", name: "Amazon.com Inc.", price: 3400.00, change: 0.7 },
  { symbol: "TSLA", name: "Tesla, Inc.", price: 750.80, change: 3.2 },
]

export default function Stocks() {
  const [searchTerm, setSearchTerm] = useState('')
  const [quantities, setQuantities] = useState<{[key: string]: string}>({})

  const handleSearch = () => {
    console.log(`Searching for ${searchTerm}`)
  }

  const handleBuy = (symbol: string) => {
    const quantity = quantities[symbol] || '0'
    console.log(`Buying ${quantity} shares of ${symbol}`)
  }

  const handleQuantityChange = (symbol: string, value: string) => {
    setQuantities(prev => ({ ...prev, [symbol]: value }))
  }

  return (
    <div className="flex justify-center items-center min-h-screen lg:min-w-[80dvh] bg-background p-4">
      <Card className="w-full max-w-2xl h-[600px] flex flex-col">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <DollarSign className="h-6 w-6" />
            Buy Stocks
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow overflow-hidden">
          <div className="mb-4 flex items-center space-x-2">
            <Input
              placeholder="Search for stocks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button onClick={handleSearch}>
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
          <ScrollArea className="h-[calc(100%-60px)]">
            <div className="space-y-4">
              {stockData.map((stock) => (
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
                  <div className="flex items-center space-x-2 ml-4">
                    <Input
                      type="number"
                      placeholder="Qty"
                      className="w-20"
                      value={quantities[stock.symbol] || ''}
                      onChange={(e) => handleQuantityChange(stock.symbol, e.target.value)}
                    />
                    <Button onClick={() => handleBuy(stock.symbol)}>Buy</Button>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
}