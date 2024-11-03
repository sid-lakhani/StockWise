import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BarChart2, Briefcase, Eye, TrendingUp, Search } from "lucide-react"

export default function Component() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-background p-4">
      <Card className="w-full max-w-4xl h-[600px] flex flex-col">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <BarChart2 className="h-6 w-6" />
            Invest in the Stock Market
          </CardTitle>
          <CardDescription>Manage your portfolio, watchlist, and buy stocks</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow overflow-hidden">
          <ScrollArea className="h-full">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-1">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    My Portfolio
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">$10,245.67</p>
                  <p className="text-sm text-muted-foreground">Total Value</p>
                </CardContent>
                <CardFooter>
                  <Link href="/dashboard/investments/portfolio" passHref>
                    <Button className="w-full">View Portfolio</Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Eye className="h-5 w-5" />
                    Watchlist
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex justify-between items-center">
                      <span>AAPL</span>
                      <span className="text-green-600">+2.5%</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>GOOGL</span>
                      <span className="text-red-600">-1.2%</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>TSLA</span>
                      <span className="text-green-600">+3.7%</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/dashboard/investments/watchlist" passHref>
                    <Button className="w-full">View Watchlist</Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Buy Stocks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="flex items-center space-x-2">
                    <Input placeholder="Search stocks..." />
                    <Button type="submit" size="icon">
                      <Search className="h-4 w-4" />
                      <span className="sr-only">Search</span>
                    </Button>
                  </form>
                </CardContent>
                <CardFooter>
                  <Link href="/dashboard/investments/stocks" passHref>
                    <Button className="w-full">Explore Stocks</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
}