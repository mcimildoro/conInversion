


import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';

const CalculatorBanner = () => {
    return (
        <section className="relative bg-[url('/assets/calculator.jpg')] bg-cover bg-center bg-no-repeat">
        {/* Capa de opacidad */}
        <div className="absolute inset-0 bg-white bg-opacity-90"></div>
    
        {/* Contenido estructurado en dos columnas */}
        <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:flex lg:h-[60vh] lg:items-center lg:px-8 lg:gap-x-0">
            
            {/* 📝 Texto a la izquierda */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
                {/* Icono */}
                <div className="flex justify-center lg:justify-start mb-4">
                    <span className="text-5xl text-green-400">📊</span>
                </div>
    
                {/* Título */}
                <h1 className="text-4xl font-extrabold text-black  leading-tight ">
                    Calcula tu
                    <strong className="block font-extrabold text-[#16a34a]"> Inversión Inteligente </strong>
                </h1>
    
                {/* Descripción */}
                <p className="mt-4 text-gray-600 sm:text-lg">
                    Descubre el poder del interés compuesto y simula el crecimiento de tu dinero con nuestra herramienta avanzada.
                </p>
    
                {/* Botones */}
                <div className="mt-6 flex flex-wrap text-center">
                    <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-6 text-lg z-10 w-full md:w-auto">
                        <Link href="https://docs.google.com/spreadsheets/d/1WjKCgb_HvJ8KarzO44rBm3iHYQ0DpKE62H41YyF_G44/edit?gid=0#gid=0">Calculadora</Link>
                    </Button>
                </div>
            </div>

             {/* 📱 Imagen de la calculadora a la derecha */}
             <div className="w-full lg:w-1/2 flex justify-center items-center mt-14">
                <Image 
                    src="/assets/calculator2.jpg" 
                    alt="Calculadora" 
                    width={550} 
                    height={450} 
                    className="object-contain drop-shadow-lg"
                />
            </div>
        </div>
    </section>
    
      
      
      
      
    );
  };
  
  export default CalculatorBanner;
  