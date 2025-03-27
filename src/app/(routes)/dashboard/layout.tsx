import { createServerSupabaseClient } from "@/lib/supabase/server-client"
import { DashboardLayoutClient } from "./dashboard-layout-client"
import { redirect } from "next/navigation"


export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect("/login")

  return <DashboardLayoutClient user={user}>{children}</DashboardLayoutClient>
}


