import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ArrowUpRight, Briefcase, DollarSign, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-background p-4">
      <Card className="w-full max-w-4xl h-[600px] flex flex-col">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Briefcase className="h-6 w-6" />
            My Portfolio
          </CardTitle>
          <CardDescription>Overview of your investment holdings</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow overflow-hidden">
          <ScrollArea className="h-full">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Portfolio Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Value</p>
                      <p className="text-2xl font-bold">$125,450.67</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Today's Change</p>
                      <p className="text-xl font-semibold text-green-600 flex items-center">
                        <ArrowUpRight className="h-5 w-5 mr-1" />
                        +$1,234.56 (+2.3%)
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Total Gain/Loss</p>
                      <p className="text-xl font-semibold text-green-600 flex items-center">
                        <ArrowUpRight className="h-5 w-5 mr-1" />
                        +$15,450.67 (+14.2%)
                      </p>
                    </div>
                    <div>
                        <Link href="/dashboard/investments/stocks" passHref>
                      <Button className="w-full">
                        <DollarSign className="h-4 w-4 mr-2" />
                        Buy / Sell
                      </Button>
                        </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Holdings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { symbol: "AAPL", name: "Apple Inc.", shares: 50, value: 8750, change: 2.5 },
                      { symbol: "GOOGL", name: "Alphabet Inc.", shares: 20, value: 5400, change: -1.2 },
                      { symbol: "MSFT", name: "Microsoft Corporation", shares: 40, value: 12000, change: 1.8 },
                      { symbol: "AMZN", name: "Amazon.com Inc.", shares: 15, value: 4875, change: 0.7 },
                      { symbol: "TSLA", name: "Tesla, Inc.", shares: 30, value: 6900, change: 3.2 },
                    ].map((stock) => (
                      <div key={stock.symbol} className="flex justify-between items-center">
                        <div>
                          <p className="font-semibold">{stock.symbol}</p>
                          <p className="text-sm text-muted-foreground">{stock.name}</p>
                        </div>
                        <div className="text-right">
                          <p>${stock.value.toLocaleString()}</p>
                          <p className={`text-sm ${stock.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {stock.change >= 0 ? '+' : ''}{stock.change}%
                          </p>
                        </div>
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
  )
}