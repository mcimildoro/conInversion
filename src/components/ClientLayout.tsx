"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar/navbar";
import Header from "./Header/header";
import WhatsAppButton from "./Whatsapp/whatsapp-button";
import { Toaster } from "@/components/ui/sonner";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideNavbar = pathname === "/login" || pathname === "/register" || pathname === "/forgot-password" || pathname === "/dashboard" || pathname === "/dashboard/profile" || pathname === "/dashboard/news" || pathname === "/dashboard/messages" || pathname === "/dashboard/calculator" || pathname === "/dashboard/opportunities";
  const hideNav = pathname === "/dashboard" || pathname === "/dashboard/profile" || pathname === "/dashboard/news" || pathname === "/dashboard/messages" || pathname === "/dashboard/calculator" || pathname === "/dashboard/opportunities";

  return (
    <>
      {!hideNavbar && <Navbar />}
      {!hideNav && <Header />}
      <Toaster />
      {!hideNavbar   && <WhatsAppButton />}
      {children}
    </>
  );
}
