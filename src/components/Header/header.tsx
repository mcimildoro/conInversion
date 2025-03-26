"use client"

import { MotionTransition } from "../TransitionComponent/transition-component";
import Image from "next/image";
import "@/app/globals.css";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
    const router = usePathname();
    const showHomeButton = router === "/login" || router === "/register";

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
      <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-5 md:top-10 bg-dark-cover">

        {/*<header className="header-green-to-white">*/}
        <nav className=" border-gray-200 px-4 lg:px-6 py-2.5 ">
          <div className="flex items-center justify-between mx-auto max-w-screen-xl">
            
            {/* LOGO A LA IZQUIERDA */}
            <div className="flex items-center">
              <Image 
                src="/assets/logo2.png" 
                alt="ConInversión Logo" 
                width={260} 
                height={50} 
                className="h-auto"
              />
            </div>

            

            {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center space-x-2">
            <Link href="/login">
              <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 w-28 h-12">
                Iniciar sesión
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-white text-green-600 border border-green-600 hover:bg-green-100 rounded-full px-6 w-28 h-12">
                Registrarse
              </Button>
            </Link>
            {showHomeButton && (
              <Link href="/">
                <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 w-28 h-12">
                  Home
                </Button>
              </Link>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-green-600 focus:outline-none">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col items-center gap-3 bg-white p-4 rounded-lg shadow-md animate-fade-in-down z-50">
            <Link href="/login" onClick={toggleMobileMenu} className="w-full">
              <Button className="w-full text-green-600 border border-green-600 bg-white hover:bg-green-100">
                Iniciar sesión
              </Button>
            </Link>
            <Link href="/register" onClick={toggleMobileMenu} className="w-full">
              <Button className="w-full text-white bg-green-600 hover:bg-green-700">
                Registrarse
              </Button>
            </Link>
            {showHomeButton && (
              <Link href="/" onClick={toggleMobileMenu} className="w-full">
                <Button className="w-full text-white bg-green-600 hover:bg-green-700">
                  Home
                </Button>
              </Link>
            )}
          </div>
        )}
      </nav>
    </MotionTransition>
      
    );
}

export default Header;