"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { DashboardHeader } from "@/components/dashboards/header"
import { DashboardNavMobile } from "@/components/dashboards/nav-mobile"
import { DashboardNavDesktop } from "@/components/dashboards/nav-desktop"

interface DashboardLayoutProps {
  children: React.ReactNode
  user: any
}

export function DashboardLayoutClient({ children, user }: DashboardLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  const closeMobileMenu = () => setIsMobileMenuOpen(false)

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
    <div className="flex min-h-screen flex-col bg-white overflow-hidden">


      <DashboardHeader
        user={user}
        toggleMobileMenu={toggleMobileMenu}
        isMobileMenuOpen={isMobileMenuOpen}
      />

      <div className="flex flex-1">
        <DashboardNavDesktop />

        <main className="flex-1 p-4 md:p-6 w-full">
          {children}
        </main>
      </div>
      {isMobileMenuOpen && (
      <DashboardNavMobile
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
      />
      )}
    </div>
  )
}
