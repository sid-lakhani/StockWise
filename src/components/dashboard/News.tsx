import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { newsArticles } from "@/dummy/newsArticles"
import { Newspaper, ArrowRight } from "lucide-react"

export default function News() {
  return (
    <Card className="w-full max-w-2xl ">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Newspaper className="h-6 w-6" />
          Market News
        </CardTitle>
        <CardDescription>Latest updates from the stock market</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[50dvh] pr-4">
          {newsArticles.map((article) => (
            <div key={article.id} className="mb-6 last:mb-0">
              <h3 className="text-lg font-semibold">{article.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{article.description}</p>
              <div className="mt-2 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{article.date}</span>
                <a
                  href={article.url}
                  className="flex items-center gap-1 text-primary hover:underline"
                >
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  )
}