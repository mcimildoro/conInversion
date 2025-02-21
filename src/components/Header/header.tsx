"use client"

import { socialNetworks } from "../../../data";
import Link from "next/link";
import { MotionTransition } from "../TransitionComponent/transition-component";
import Image from "next/image";
import "@/app/globals.css";

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

          {/* Redes Sociales + Botón Login a la derecha */}
          <div className="flex items-center gap-5">
            
            {/* Redes Sociales */}
            <div className="flex items-center gap-6 ">
              {socialNetworks.map(({ logo, src, id }) => (
                <Link
                  key={id}
                  href={src}
                  target="_blank"
                  className="transition-all duration-300 hover:text-secondary text-quienes text-2xl"
                >
                  {logo}
                </Link>
              ))}
            </div>

            {/* Botón Login */}
            <Link 
              href="#" 
              className="text-quienes  focus:ring-4 focus:ring-gray-300 text-xl  rounded-lg  px-4 py-2 transition-all duration-300"
            >
              Log in
            </Link>

          </div>
        </div>
      </nav>
   
      </MotionTransition>
      
    );
}

export default Header;