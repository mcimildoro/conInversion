"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Oportunidades {
  title: string;
  description: string;
  image: string;
  details: string;
}

const cards: Oportunidades[] = [
  {
    title: "Redwood Transport",
    description: "Camiones de carga con aumento del 18% en los últimos 3 meses.",
    image: "/assets/truck.jpg",
    details:
      "Redwood Transport ha experimentado un crecimiento del 18% debido al aumento en la demanda de transporte de mercancías. Su expansión en rutas y eficiencia logística la convierten en una opción de inversión atractiva.",
  },
  {
    title: "Tegna Inc. (TGNA) 23% En 2 Meses",
    description: "Compañía de telecomunicaciones con fuerte crecimiento en el sector.",
    image: "/assets/telecom.jpg",
    details: `
      **🔍 Análisis de Inversión de TEGNA Inc. (TGNA)**
      
      TEGNA Inc. se ha convertido en un referente en la industria de medios y televisión en EE.UU., con 64 estaciones de TV y múltiples canales digitales. Su diversificación de ingresos proviene de suscripciones (52%), publicidad (44%) y anuncios políticos en años electorales.

      💰 **Fortalezas:**  
      - Genera **liquidez superior al doble de sus gastos**  
      - **Recompra de acciones** de $715M que impulsa su valoración  
      - No tiene pagos de deuda significativos hasta **2026**  

      ⚠️ **Riesgos:**  
      - **Alta deuda** (116% de su patrimonio), aunque ha ido reduciéndose  
      - **Impacto de litigios pasados**, aunque sin consecuencias graves  

      📌 **Conclusión:**  
      TEGNA es una opción atractiva de inversión, pero recomendamos **limitar la inversión al 7% del capital** y no comprar acciones por encima de **$36.90**`,
  },
  {
    title: "Worthington Steel (WS) 85% En 11 Meses",
    description: "Crecimiento sólido en el sector de fabricación de acero.",
    image: "/assets/steel.jpg",
    details:
      "Worthington Steel ha mostrado un aumento del 85% en los últimos 11 meses debido a la fuerte demanda de materiales industriales y su expansión en el mercado.",
  },
];

export default function OpportunitiesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    setProgress(0); // Reiniciar la barra de progreso
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    setProgress(0); // Reiniciar la barra de progreso
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // 🔄 Cambio automático cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextCard();
    }, 4000);

    // Barra de progreso
    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 0));
    }, 40);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [currentIndex]);

  return (
    <div className="flex flex-col items-center justify-center px-4 py-12 bg-[#1ABC9C]">
      {/* 📌 Contenido a la izquierda */}
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center z-40">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-3">
            <span className="text-3xl">📌</span>
            <h3 className="text-[#1C1C1C] font-bold text-lg ml-2">PANELES DE INFORMES</h3>
          </div>
          <h2 className="text-3xl font-bold text-[#2c3e50] leading-tight">
            Oportunidades de compra <span className="text-[#2c3e50]">activas.</span>
          </h2>
          <p className="text-[#1C1C1C] mt-3 leading-relaxed">
            Análisis detallados de empresas con parámetros de inversión de Graham y Buffett. Evaluamos
            facturación, liquidez, deuda y riesgos financieros para oportunidades de compra seguras.
          </p>
          <button className="mt-5 bg-green-600 hover:bg-green-700 focus:ring-2 text-white shadow-sm py-2 px-5 rounded-md cursor-pointer">
            Ver informes
          </button>
        </div>

        {/* 📌 Carrusel Mejorado */}
        <div className="relative w-full max-w-[400px] h-[300px] md:h-[400px] flex items-center justify-center mx-auto">
          {cards.map((card, index) => {
            const position = (index - currentIndex + cards.length) % cards.length;
            const isActive = position === 0;
            const isPrev = position === cards.length - 1;
            const isNext = position === 1;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: isActive ? 1 : 0.6,
                  scale: isActive ? 1 : 0.8,
                  x: isPrev ? -100 : isNext ? 100 : 0,
                  zIndex: isActive ? 10 : 5,
                }}
                transition={{ duration: 0.5 }}
                className={`absolute w-[280px] md:w-[320px] h-[300px] md:h-[400px] rounded-lg shadow-xl overflow-hidden cursor-pointer`}
                onClick={() => setCurrentIndex(index)}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  width={320}
                  height={400}
                  className="w-full h-full object-cover"
                />
                {isActive && (
                  <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white p-4">
                    <h3 className="text-lg font-bold text-[#FFFFFF]">{card.title}</h3>
                    <p className="text-sm text-[#FFFFFF]">{card.description}</p>
                    <button
                      onClick={openModal}
                      className="mt-2 bg-[#1B5E20] hover:bg-[#2E7D32] text-white py-1 px-3 rounded-md text-sm"
                    >
                      Más información
                    </button>
                  </div>
                )}
              </motion.div>
            );
          })}

          {/* Barra de progreso */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[80%] h-1 bg-gray-300 rounded-full">
            <motion.div
              className="h-full bg-[#1B5E20] rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* Botones de navegación */}
          <button
            onClick={prevCard}
            className="absolute left-2 md:left-[-40px] bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition-all"
          >
            ◀
          </button>
          <button
            onClick={nextCard}
            className="absolute right-2 md:right-[-40px] bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition-all"
          >
            ▶
          </button>
        </div>
      </div>

      {/* 📌 Modal Informativo */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-xl p-6 max-w-lg w-full relative"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
            >
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-600 hover:text-red-500 transition-all"
              >
                ✖
              </button>

              <h2 className="text-xl font-bold text-gray-900 mb-4">{cards[currentIndex].title}</h2>
              <p className="text-gray-700 text-sm leading-relaxed">{cards[currentIndex].details}</p>

              <div className="mt-5 text-right">
                <button
                  onClick={closeModal}
                  className="bg-[#1B5E20] hover:bg-[#2E7D32] text-white py-2 px-4 rounded-md transition-all"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}