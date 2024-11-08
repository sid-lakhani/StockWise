'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BarChart2, Search, PieChart } from "lucide-react"
import { supabase } from "@/lib/supabaseClient"
import { useEffect, useState } from "react"

interface MarketData {
  symbol: string;
  indice: number;
}

export default function Explore() {
  const [marketData, setMarketData] = useState<MarketData[]>([]); 

  useEffect(() => {
    const fetchMarketData = async () => {
      const { data, error } = await supabase
        .from('market_overview')
        .select('*');

      if (error) {
        console.error("Error fetching market data:", error);
      } else {
        const marketData = data || [];
        setMarketData(marketData);
      }
    };

    fetchMarketData();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-background p-4">
      <Card className="w-full max-w-4xl h-full flex flex-col">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <BarChart2 className="h-6 w-6" />
            Market Overview
          </CardTitle>
          <CardDescription>Explore the latest market trends and performance</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow overflow-hidden">
          <ScrollArea className="h-full pr-4">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Input placeholder="Search stocks..." className="flex-grow" />
                <Button size="icon">
                  <Search className="h-4 w-4" />
                  <span className="sr-only">Search stocks</span>
                </Button>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Major Indices</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {marketData.map((item, index) => (
                      <div key={index} className="flex justify-between">
                        <span>{item.symbol}</span>
                        <span className={item.indice > 0 ? "text-green-600" : "text-red-600"}>
                          {item.indice > 0 ? `+${item.indice}` : item.indice}%  
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
