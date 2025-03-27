// components/dashboards/DashboardNavMobile.tsx
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BarChart2, Play, Calculator, MessageSquare, Newspaper } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LogoutButton } from "@/components/auth/logout-button"

const navItems = [
  { title: "Dashboard", href: "/dashboard", icon: BarChart2 },
  { title: "Oportunidades", href: "/dashboard/opportunities", icon: Play },
  { title: "Calculadora", href: "/dashboard/calculator", icon: Calculator },
  { title: "Mensajes", href: "/dashboard/messages", icon: MessageSquare },
  { title: "Noticias", href: "/dashboard/news", icon: Newspaper, badge: 3 },
]

export function DashboardNavMobile({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const pathname = usePathname()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed top-16 left-0 bottom-0 w-3/4 max-w-xs bg-white p-4 shadow-lg">
        <div className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={onClose}>
              <Button
                variant={pathname === item.href ? "default" : "ghost"}
                className={cn(
                  "w-full justify-start relative",
                  pathname === item.href && "bg-green-600 hover:bg-green-700 text-white"
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
  )
}