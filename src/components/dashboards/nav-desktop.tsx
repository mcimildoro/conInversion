"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ChevronLeft, ChevronRight, BarChart2, Play, Calculator, MessageSquare, Newspaper } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { title: "Dashboard", href: "/dashboard", icon: BarChart2 },
  { title: "Oportunidades", href: "/dashboard/opportunities", icon: Play },
  { title: "Calculadora", href: "/dashboard/calculator", icon: Calculator },
  { title: "Mensajes", href: "/dashboard/messages", icon: MessageSquare },
  { title: "Noticias", href: "/dashboard/news", icon: Newspaper, badge: 3 },
]

export function DashboardNavDesktop() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <TooltipProvider>
      <div className="relative h-full hidden md:block">
        <nav
          className={cn(
            "h-full bg-white rounded-lg p-2 transition-all duration-300 flex flex-col",
            collapsed ? "w-16" : "w-64"
          )}
        >
          <div className="flex flex-col flex-1 space-y-2">
            {navItems.map((item) => (
              <Tooltip key={item.href} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link href={item.href}>
                    <Button
                      variant={pathname === item.href ? "default" : "ghost"}
                      className={cn(
                        "w-full justify-start relative",
                        pathname === item.href && "bg-green-600 hover:bg-green-700 text-white",
                        collapsed && "justify-center"
                      )}
                    >
                      <item.icon className={cn("h-5 w-5", collapsed ? "mr-0" : "mr-2")} />
                      {!collapsed && <span>{item.title}</span>}
                      {item.badge && (
                        <span className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                          {item.badge}
                        </span>
                      )}
                    </Button>
                  </Link>
                </TooltipTrigger>
                {collapsed && <TooltipContent side="right">{item.title}</TooltipContent>}
              </Tooltip>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute -right-3 top-10 h-6 w-6 rounded-full border bg-background"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? <ChevronRight className="h-3 w-3" /> : <ChevronLeft className="h-3 w-3" />}
            <span className="sr-only">{collapsed ? "Expand" : "Collapse"} sidebar</span>
          </Button>
        </nav>
      </div>
    </TooltipProvider>
  )
}
