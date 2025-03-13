"use client"

import { MotionTransition } from "../TransitionComponent/transition-component";
import Image from "next/image";
import "@/app/globals.css";
import { Button } from "../ui/button";

const Header = () => {
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

          <div className="flex items-center gap-5">

            {/* Botón Login */}
            <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 w-28 h-12">Log in</Button>

          </div>
        </div>
      </nav>
   
      </MotionTransition>
      
    );
}

export default Header;