import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart2, Search, TrendingUp, TrendingDown, PieChart } from "lucide-react"

export default function Explore() {
  return (
    <div className="flex justify-center items-center min-h-screen lg:min-w-[80dvh] bg-background p-4">
      <Card className="w-full max-w-4xl h-[600px] flex flex-col">
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
                    <div className="flex justify-between">
                      <span>S&P 500</span>
                      <span className="text-green-600">+1.2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Nasdaq</span>
                      <span className="text-green-600">+0.8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Dow Jones</span>
                      <span className="text-red-600">-0.3%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Russell 2000</span>
                      <span className="text-green-600">+0.5%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Tabs defaultValue="gainers">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="gainers">Top Gainers</TabsTrigger>
                  <TabsTrigger value="losers">Top Losers</TabsTrigger>
                </TabsList>
                <TabsContent value="gainers">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-green-600" />
                        Top Gainers
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>AAPL</span>
                          <span className="text-green-600">+5.2%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>TSLA</span>
                          <span className="text-green-600">+4.8%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>NVDA</span>
                          <span className="text-green-600">+3.9%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="losers">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <TrendingDown className="h-5 w-5 text-red-600" />
                        Top Losers
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>META</span>
                          <span className="text-red-600">-3.7%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>NFLX</span>
                          <span className="text-red-600">-2.9%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>AMZN</span>
                          <span className="text-red-600">-2.1%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <PieChart className="h-5 w-5" />
                    Sector Performance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Technology</span>
                      <span className="text-green-600">+2.3%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Healthcare</span>
                      <span className="text-red-600">-0.7%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Financials</span>
                      <span className="text-green-600">+1.1%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Energy</span>
                      <span className="text-green-600">+0.9%</span>
                    </div>
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