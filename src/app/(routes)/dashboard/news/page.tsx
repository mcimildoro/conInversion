import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function NewsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Sucesos</h1>
        <p className="text-muted-foreground">Mantente informado sobre las últimas noticias del mercado.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {news.map((item) => (
          <Card key={item.id} className={item.isNew ? "border-green-500" : ""}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">{item.title}</CardTitle>
                {item.isNew && (
                  <Badge className="bg-green-500">
                    <span className="mr-1">•</span> Nuevo
                  </Badge>
                )}
              </div>
              <CardDescription>{item.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">{item.content}</p>
              <div className="flex items-center text-xs text-muted-foreground">
                <span className="font-medium">{item.source}</span>
                {item.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="ml-2">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

const news = [
  {
    id: 1,
    title: "La FED mantiene tasas de interés",
    content:
      "La Reserva Federal de Estados Unidos ha decidido mantener las tasas de interés sin cambios en su última reunión, señalando una posible estabilización de la economía.",
    date: "28 Mar 2023",
    source: "Financial Times",
    tags: ["Economía", "FED"],
    isNew: true,
  },
  {
    id: 2,
    title: "Apple anuncia nuevos productos",
    content:
      "Apple ha anunciado una nueva línea de productos que incluye actualizaciones a sus dispositivos más populares, lo que podría impulsar sus acciones en los próximos meses.",
    date: "25 Mar 2023",
    source: "Bloomberg",
    tags: ["Tecnología", "Apple"],
    isNew: true,
  },
  {
    id: 3,
    title: "Tesla supera expectativas de entrega",
    content:
      "Tesla ha superado las expectativas de entrega de vehículos en el último trimestre, lo que ha provocado un aumento en el precio de sus acciones.",
    date: "22 Mar 2023",
    source: "CNBC",
    tags: ["Automoción", "Tesla"],
    isNew: true,
  },
  {
    id: 4,
    title: "Microsoft adquiere startup de IA",
    content:
      "Microsoft ha anunciado la adquisición de una importante startup de inteligencia artificial, fortaleciendo su posición en este sector en crecimiento.",
    date: "18 Mar 2023",
    source: "TechCrunch",
    tags: ["Tecnología", "IA"],
    isNew: false,
  },
  {
    id: 5,
    title: "Amazon expande operaciones en Latinoamérica",
    content:
      "Amazon ha anunciado una expansión significativa de sus operaciones en varios países de Latinoamérica, lo que podría abrir nuevas oportunidades de crecimiento.",
    date: "15 Mar 2023",
    source: "Reuters",
    tags: ["Retail", "Expansión"],
    isNew: false,
  },
  {
    id: 6,
    title: "Google presenta nueva tecnología de búsqueda",
    content:
      "Google ha presentado una nueva tecnología de búsqueda basada en IA que promete mejorar significativamente la relevancia de los resultados.",
    date: "10 Mar 2023",
    source: "The Verge",
    tags: ["Tecnología", "IA"],
    isNew: false,
  },
]

