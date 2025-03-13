"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, PinIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cards } from "@/../data"

export default function OpportunitiesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)


  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length)

  }

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length)

  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
    
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Deslizar a la izquierda
      nextCard()
    }

    if (touchStart - touchEnd < -50) {
      // Deslizar a la derecha
      prevCard()
    }
  }

  useEffect(() => {
    const interval = setInterval(nextCard, 4000)
    const progressInterval = setInterval(() => {
 
    }, 40)

    return () => {
      clearInterval(interval)
      clearInterval(progressInterval)
    }
  }, [currentIndex])

  return (
    <div className="w-full bg-white py-8 md:py-12 overflow-hidden">
      <div className="container px-4 mx-auto p-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Contenido Informativo */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <PinIcon className="w-5 h-5 text-green-600" />
              <h1 className="text-gray-900 font-bold text-center ml-2 text-lg">PANELES DE INFORMES</h1>
            </div>
            <h2 className="text-4xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
              Oportunidades de compra <span className="text-[#16a34a]">activas.</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 max-w-lg mx-auto lg:mx-0">
              Análisis detallados de empresas con parámetros de inversión de Graham y Buffett. Evaluamos facturación,
              liquidez, deuda y riesgos financieros para oportunidades de compra seguras.
            </p>
            <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-6 text-lg z-10 w-full md:w-auto">
              Ver informes
            </Button>
          </div>

          {/* Carrusel Mejorado */}
          <div
              className="relative w-full  mx-auto aspect-[16/10] md:w-96 md:aspect-[16/10] max-w-5xl"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="absolute inset-0">
                {cards.map((card, index) => {
                  const position = (index - currentIndex + cards.length) % cards.length;
                  const isActive = position === 0;
                  const isPrev = position === cards.length - 1;
                  const isNext = position === 1;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: isActive ? 1 : 0.5,
                        scale: isActive ? 1 : 0.85,
                        x: isPrev ? "-100%" : isNext ? "100%" : 0,
                        zIndex: isActive ? 20 : 10,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                      }}
                      className="absolute inset-0 rounded-xl overflow-hidden shadow-lg"
                    >
                      <div className="relative w-full h-full">
                        <Image src={card.image || "/placeholder.svg"} alt={card.title} fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                        {/* Contenido de la tarjeta */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                          {card.stats && (
                            <div className="inline-flex items-center bg-green-600 rounded-full px-3 py-1 mb-2 text-sm">
                              <span className="font-bold">{card.stats.percentage}</span>
                              <span className="ml-1 text-xs opacity-90">en {card.stats.timeframe}</span>
                            </div>
                          )}
                          <h3 className="text-lg md:text-xl font-bold mb-1">{card.title}</h3>
                          <p className="text-xs md:text-sm text-gray-200 mb-3 line-clamp-2">{card.description}</p>
                          <Button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-white text-green-600 hover:bg-gray-100 text-sm px-4 py-1 rounded-full"
                          >
                            Más información
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Controles de navegación */}
              <div className="absolute left-1 right-1 top-1/2 -translate-y-1/2 flex justify-between z-30">
                <button
                  onClick={prevCard}
                  className="p-1.5 rounded-full bg-white/30 shadow-lg hover:bg-white transition-colors"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-4 h-4 text-gray-900" />
                </button>

                <button
                  onClick={nextCard}
                  className="p-1.5 rounded-full bg-white/30 shadow-lg hover:bg-white transition-colors"
                  aria-label="Siguiente"
                >
                  <ChevronRight className="w-4 h-4 text-gray-900" />
                </button>
              </div>

              {/* Indicadores */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-30">
                {cards.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-1.5 rounded-full transition-all ${
                      index === currentIndex ? "bg-white w-4" : "bg-white/50 w-1.5 hover:bg-white/75"
                    }`}
                    aria-label={`Ir a diapositiva ${index + 1}`}
                  />
                ))}
              </div>
            </div>

        </div>
      </div>

      {/* Modal de Detalles - Mantener el código del modal igual */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="bg-white rounded-xl shadow-xl p-4 md:p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{cards[currentIndex].title}</h2>
                  {cards[currentIndex].stats && (
                    <div className="flex items-center mt-2">
                      <span className="text-green-600 font-bold">{cards[currentIndex].stats.percentage}</span>
                      <span className="text-gray-500 ml-1 text-sm">en {cards[currentIndex].stats.timeframe}</span>
                    </div>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </Button>
              </div>

              <div className="prose prose-sm prose-green max-w-none">
                {cards[currentIndex].details.split("\n").map((paragraph, idx) => (
                  <p key={idx} className="text-gray-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-4 flex justify-end">
                <Button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-green-600 hover:bg-green-700 text-white text-sm"
                >
                  Cerrar
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

