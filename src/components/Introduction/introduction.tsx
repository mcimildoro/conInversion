"use client";

import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className="w-full">
            <div className="z-20 flex gap-x-20 flex-col md:flex-row items-center justify-center h-screen p-6 py-20 md:py-0">
                
                {/* Imagen */}
                <div className="flex justify-center max-w-md mr-2">
                    <Image 
                        src="/assets/header2.png" 
                        priority 
                        width="600" 
                        height="600" 
                        alt="Avatar" 
                        className="max-w-xs md:max-w-max drop-shadow-lg filter brightness-110" 
                    />
                </div>

                {/* Contenido */}
                <div className="flex flex-col justify-center max-w-sm">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10 font-bold text-quienes">
                        Menos lectura, <br />
                        <TypeAnimation
                            sequence={[
                                'más Resultados',
                                1000,
                                'más Diversificación',
                                1000,
                                'más Rendimiento',
                                1000,
                                'más Inversión',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-somos/90"
                        />
                    </h1>

                    {/* Descripción */}
                    <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8 text-[#D0D3D4]">
                        ¡Un portal con oportunidades atractivas de inversión en la bolsa americana!
                    </p>

                    {/* Botón */}
                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                    <a 
                            href="/projects" 
                            className="relative z-10 px-5 py-3 bg-[#F39C12] hover:bg-[#E67E22] text-white font-semibold rounded-xl shadow-md border-2 border-somos transition-all duration-300"
                        >
                            Conoce más
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;
