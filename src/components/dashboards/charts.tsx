"use client"

import {
  Bar,
  BarChart as RechartsBarChart,
  Line,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

const lineChartData = [
  { month: "Ene", value: 2400 },
  { month: "Feb", value: 1398 },
  { month: "Mar", value: 9800 },
  { month: "Abr", value: 3908 },
  { month: "May", value: 4800 },
  { month: "Jun", value: 3800 },
]

const barChartData = [
  { sector: "Tecnología", value: 40 },
  { sector: "Finanzas", value: 30 },
  { sector: "Salud", value: 15 },
  { sector: "Consumo", value: 10 },
  { sector: "Energía", value: 5 },
]

export function LineChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsLineChart data={lineChartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="value" stroke="#22c55e" strokeWidth={2} />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip
          contentStyle={{
            backgroundColor: "white",
            border: "1px solid #e2e8f0",
          }}
          formatter={(value) => [`$${value}`, "Valor"]}
          labelFormatter={(label) => `Mes: ${label}`}
        />
      </RechartsLineChart>
    </ResponsiveContainer>
  )
}

export function BarChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsBarChart data={barChartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Bar dataKey="value" fill="#22c55e" radius={[4, 4, 0, 0]} />
        <XAxis dataKey="sector" />
        <YAxis />
        <Tooltip
          contentStyle={{
            backgroundColor: "white",
            border: "1px solid #e2e8f0",
          }}
          formatter={(value) => [`${value}%`, "Porcentaje"]}
          labelFormatter={(label) => `Sector: ${label}`}
        />
      </RechartsBarChart>
    </ResponsiveContainer>
  )
}

