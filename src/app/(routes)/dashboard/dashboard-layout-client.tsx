"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { DashboardNav } from "@/components/dashboards/nav"
import { DashboardHeader } from "@/components/dashboards/header"

interface DashboardLayoutProps {
  children: React.ReactNode
  user: any // Tipo simplificado para este ejemplo
}

export function DashboardLayoutClient({ children, user }: DashboardLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  // Cerrar el menú móvil cuando cambia el tamaño de la ventana a desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isMobileMenuOpen])

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <DashboardHeader user={user} toggleMobileMenu={toggleMobileMenu} isMobileMenuOpen={isMobileMenuOpen} />
      <div className="flex flex-1">
        <aside className="hidden md:block w-auto">
          <DashboardNav />
        </aside>
        <main className="flex-1 p-4 md:p-6 w-full">{children}</main>
      </div>
      <DashboardNav isMobileMenuOpen={isMobileMenuOpen} closeMobileMenu={closeMobileMenu} />
    </div>
  )
}

