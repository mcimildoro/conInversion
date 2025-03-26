"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Play, Calculator, MessageSquare, Newspaper, BarChart2, LogOut, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { LogoutButton } from "@/components/auth/logout-button"

interface NavItem {
  title: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  badge?: number
}

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: BarChart2,
  },
  {
    title: "Oportunidades",
    href: "/dashboard/opportunities",
    icon: Play,
  },
  {
    title: "Calculadora",
    href: "/dashboard/calculator",
    icon: Calculator,
  },
  {
    title: "Mensajes",
    href: "/dashboard/messages",
    icon: MessageSquare,
  },
  {
    title: "Noticias",
    href: "/dashboard/news",
    icon: Newspaper,
    badge: 3, // Número de notificaciones
  },
]

interface DashboardNavProps {
  isMobileMenuOpen?: boolean
  closeMobileMenu?: () => void
}

export function DashboardNav({ isMobileMenuOpen, closeMobileMenu }: DashboardNavProps) {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <>
      {/* Menú móvil */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={closeMobileMenu} />
          <div className="fixed top-16 left-0 bottom-0 w-3/4 max-w-xs bg-white p-4 shadow-lg">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={closeMobileMenu}>
                  <Button
                    variant={pathname === item.href ? "default" : "ghost"}
                    className={cn(
                      "w-full justify-start relative",
                      pathname === item.href && "bg-green-600 hover:bg-green-700 text-primary-foreground",
                    )}
                  >
                    <item.icon className="h-5 w-5 mr-2" />
                    <span>{item.title}</span>
                    {item.badge && (
                      <span className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                        {item.badge}
                      </span>
                    )}
                  </Button>
                </Link>
              ))}
              <div className="mt-auto pt-4 border-t">
                <LogoutButton variant="ghost" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Menú de escritorio */}
      <TooltipProvider>
        <div className="relative h-full hidden md:block">
          <nav
            className={cn(
              "h-full bg-white rounded-lg p-2 transition-all duration-300 flex flex-col",
              collapsed ? "w-16" : "w-64",
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
                          pathname === item.href && "bg-green-600 hover:bg-green-700 text-primary-foreground",
                          collapsed && "justify-center",
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
    </>
  )
}

