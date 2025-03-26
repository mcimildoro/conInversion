"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CalculatorPage() {
  const [investment, setInvestment] = useState<number>(1000)
  const [years, setYears] = useState<number>(5)
  const [rate, setRate] = useState<number>(8)
  const [result, setResult] = useState<number | null>(null)

  const calculateCompoundInterest = () => {
    const finalAmount = investment * Math.pow(1 + rate / 100, years)
    setResult(Number.parseFloat(finalAmount.toFixed(2)))
  }

  const calculateSimpleInterest = () => {
    const finalAmount = investment * (1 + (rate / 100) * years)
    setResult(Number.parseFloat(finalAmount.toFixed(2)))
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Calculadora</h1>
        <p className="text-muted-foreground">Calcula el rendimiento potencial de tus inversiones.</p>
      </div>

      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Calculadora de Inversiones</CardTitle>
          <CardDescription>Calcula el crecimiento de tu inversión a lo largo del tiempo.</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="compound">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="compound">Interés Compuesto</TabsTrigger>
              <TabsTrigger value="simple">Interés Simple</TabsTrigger>
            </TabsList>
            <TabsContent value="compound" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="investment-compound">Inversión Inicial ($)</Label>
                <Input
                  id="investment-compound"
                  type="number"
                  value={investment}
                  onChange={(e) => setInvestment(Number(e.target.value))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="years-compound">Años</Label>
                <Input
                  id="years-compound"
                  type="number"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="rate-compound">Tasa Anual (%)</Label>
                <Input
                  id="rate-compound"
                  type="number"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                />
              </div>
              <Button onClick={calculateCompoundInterest} className="w-full">
                Calcular
              </Button>
            </TabsContent>
            <TabsContent value="simple" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="investment-simple">Inversión Inicial ($)</Label>
                <Input
                  id="investment-simple"
                  type="number"
                  value={investment}
                  onChange={(e) => setInvestment(Number(e.target.value))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="years-simple">Años</Label>
                <Input
                  id="years-simple"
                  type="number"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="rate-simple">Tasa Anual (%)</Label>
                <Input id="rate-simple" type="number" value={rate} onChange={(e) => setRate(Number(e.target.value))} />
              </div>
              <Button onClick={calculateSimpleInterest} className="w-full">
                Calcular
              </Button>
            </TabsContent>
          </Tabs>
        </CardContent>
        {result !== null && (
          <CardFooter className="flex flex-col items-start">
            <div className="text-sm font-medium">Resultado:</div>
            <div className="text-2xl font-bold text-green-600">${result.toLocaleString()}</div>
            {investment > 0 && (
              <div className="text-sm text-muted-foreground">
                Ganancia: ${(result - investment).toLocaleString()}({((result / investment - 1) * 100).toFixed(2)}%)
              </div>
            )}
          </CardFooter>
        )}
      </Card>
    </div>
  )
}

