


import Image from 'next/image';

const CalculatorBanner = () => {
    return (
        <section className="relative bg-[url('/assets/calculator.jpg')] bg-cover bg-center bg-no-repeat">
        {/* Capa de opacidad */}
        <div className="absolute inset-0 bg-[#2c3e50] bg-opacity-90"></div>
    
        {/* Contenido estructurado en dos columnas */}
        <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:flex lg:h-[60vh] lg:items-center lg:px-8 lg:gap-x-0">
            
            {/* 📝 Texto a la izquierda */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
                {/* Icono */}
                <div className="flex justify-center lg:justify-start mb-4">
                    <span className="text-5xl text-green-400">📊</span>
                </div>
    
                {/* Título */}
                <h1 className="text-4xl font-extrabold text-white  leading-tight ">
                    Calcula tu
                    <strong className="block font-extrabold text-somos"> Inversión Inteligente </strong>
                </h1>
    
                {/* Descripción */}
                <p className="mt-4 text-[#ECEFF1] sm:text-lg">
                    Descubre el poder del interés compuesto y simula el crecimiento de tu dinero con nuestra herramienta avanzada.
                </p>
    
                {/* Botones */}
                <div className="mt-6 flex flex-wrap text-center">
                        <a
                            href="https://docs.google.com/spreadsheets/d/1WjKCgb_HvJ8KarzO44rBm3iHYQ0DpKE62H41YyF_G44/edit?gid=0#gid=0"
                            target="_blank"
                            rel="noopener noreferrer"
                           
                            className="block w-full rounded-md bg-green-600 px-10 py-3 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:ring-2 focus:ring-green-400 focus:outline-none sm:w-auto"
                        >
                            Ir a la Calculadora
                        </a>
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
  