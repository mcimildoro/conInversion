import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function OpportunitiesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Oportunidades</h1>
        <p className="text-muted-foreground">Descubre nuevas oportunidades de inversión en la bolsa americana.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {opportunities.map((opportunity) => (
          <Card key={opportunity.id}>
            <CardHeader className="pb-2">
              <CardTitle>{opportunity.company}</CardTitle>
              <CardDescription>{opportunity.ticker}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground mb-2">{opportunity.description}</div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-green-600">{opportunity.potential}%</span>
                <span className="text-xs text-muted-foreground">{opportunity.date}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

const opportunities = [
  {
    id: 1,
    company: "Tesla, Inc.",
    ticker: "TSLA",
    description: "Oportunidad de compra tras corrección del precio.",
    potential: "+12.5",
    date: "15 Mar 2023",
  },
  {
    id: 2,
    company: "Apple Inc.",
    ticker: "AAPL",
    description: "Posible repunte tras anuncio de nuevos productos.",
    potential: "+8.3",
    date: "22 Mar 2023",
  },
  {
    id: 3,
    company: "Microsoft Corporation",
    ticker: "MSFT",
    description: "Crecimiento sostenido en división de nube.",
    potential: "+15.7",
    date: "10 Mar 2023",
  },
  {
    id: 4,
    company: "Amazon.com, Inc.",
    ticker: "AMZN",
    description: "Expansión en nuevos mercados internacionales.",
    potential: "+10.2",
    date: "18 Mar 2023",
  },
  {
    id: 5,
    company: "Alphabet Inc.",
    ticker: "GOOGL",
    description: "Nuevas iniciativas en inteligencia artificial.",
    potential: "+9.5",
    date: "25 Mar 2023",
  },
  {
    id: 6,
    company: "Meta Platforms, Inc.",
    ticker: "META",
    description: "Recuperación tras reestructuración corporativa.",
    potential: "+14.8",
    date: "12 Mar 2023",
  },
]

