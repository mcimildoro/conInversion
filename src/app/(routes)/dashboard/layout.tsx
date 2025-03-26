import type React from "react"
import { redirect } from "next/navigation"
import { getCurrentUser } from "@/lib/auth/session"
import { DashboardLayoutClient } from "./dashboard-layout-client"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Obtener el usuario de forma asíncrona
  const user = await getCurrentUser()

  if (!user) {
    redirect("/login")
  }

  return <DashboardLayoutClient user={user}>{children}</DashboardLayoutClient>
}

