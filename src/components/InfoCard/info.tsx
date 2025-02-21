"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BarChart3, X } from "lucide-react"

interface InfoCardProps {
  title: string
}

export function InfoCard({ title }: InfoCardProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      {/* Card Container */}
      <motion.div
        className="relative group"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Card */}
        <div className="relative overflow-hidden rounded-2xl bg-green-50/90 backdrop-blur-sm p-3 shadow-lg transition-all duration-300 hover:shadow-xl border border-green-100">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center space-y-8">
            {/* Icon */}
            <div className="relative">
              <div className="absolute inset-0 bg-green-500 rounded-full blur-lg opacity-20 scale-150"></div>
              <motion.div
                className="relative bg-green-500 p-4 rounded-full"
                animate={{ scale: isHovered ? 1.1 : 1 }}
                transition={{ duration: 0.2 }}
              >
                <BarChart3 className="w-6 h-6 text-white" />
              </motion.div>
            </div>

            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-800 text-center px-4">{title}</h2>

            {/* Button */}
            <motion.button
              onClick={() => setIsOpen(true)}
              className="w-80 bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-medium transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              Ver Más
            </motion.button>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-green-200 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-green-300 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-md flex justify-center items-center w-full h-full p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full relative overflow-hidden"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <pattern id="modal-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  </pattern>
                  <rect width="100" height="100" fill="url(#modal-grid)" />
                </svg>
              </div>

              {/* Close Button */}
              <motion.button
                onClick={(e) => {
                  e.stopPropagation()
                  setIsOpen(false)
                }}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5 text-gray-500" />
              </motion.button>

              {/* Modal Content */}
              <div className="relative">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>

                <div className="text-gray-700 space-y-4">
                  {title.includes("Warren Buffett") ? (
                    <>
                      <p className="leading-relaxed">
                        La estrategia <span className="font-semibold text-green-600">Deep Value</span> se basa en el
                        análisis detallado de empresas, considerando factores clave como:
                      </p>

                      <ul className="space-y-2 pl-5 list-disc text-gray-800">
                        <li>
                          <span className="font-semibold">Facturación</span>
                        </li>
                        <li>
                          <span className="font-semibold">Liquidez y deuda</span>
                        </li>
                        <li>
                          <span className="font-semibold">Oportunidades en crisis y spin-offs</span>
                        </li>
                      </ul>

                      <p className="leading-relaxed">
                        Nuestro enfoque combina análisis cuantitativo y cualitativo para{" "}
                        <span className="font-semibold text-green-600">minimizar riesgos</span> y evitar decisiones
                        emocionales.
                      </p>

                      <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                        <p className="text-sm text-gray-600 italic">
                          📌 <span className="font-semibold">Inspirado en:</span> Benjamin Graham & Warren Buffett.
                        </p>
                      </div>
                    </>
                  ) : title.includes("broker") ? (
                    <>
                      <p className="leading-relaxed">
                        Al elegir un <span className="font-semibold text-green-600">Broker</span> para comprar acciones,
                        asegúrate de que esté registrado en la{" "}
                        <span className="font-semibold text-green-600">CNMV</span> o en la entidad reguladora de tu
                        país.
                      </p>

                      <p className="leading-relaxed">
                        📈 Revisa opiniones, comisiones y confirma que ofrezca productos como acciones en
                        <span className="font-semibold text-green-600"> NYSE o NASDAQ</span>. En España, los Brokers más
                        confiables son:
                      </p>

                      <ul className="space-y-2 pl-5 list-disc text-gray-800">
                        <li>
                          <span className="font-semibold">DEGIRO</span>
                        </li>
                        <li>
                          <span className="font-semibold">Interactive Brokers</span>
                        </li>
                      </ul>

                      <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                        <p className="text-sm text-gray-600 italic">
                          📌 <span className="font-semibold">Información Legal:</span> ConInversión y sus miembros no
                          reciben compensación ni tienen incentivos económicos por recomendar estos Brokers.
                        </p>
                      </div>
                    </>
                  ) : title.includes("inversión") ? (
                    <>
                      <p className="leading-relaxed">
                        La clave del <span className="font-semibold text-green-600">interés compuesto</span> radica en
                        su capacidad de multiplicar tu inversión con el tiempo.
                      </p>

                      <p className="leading-relaxed">
                        🔹 Invirtiendo de forma constante y a largo plazo, tu dinero puede crecer exponencialmente.
                      </p>

                      <ul className="space-y-2 pl-5 list-disc text-gray-800">
                        <li>
                          <span className="font-semibold">Tiempo</span> - Cuanto antes empieces, mayor será el
                          crecimiento.
                        </li>
                        <li>
                          <span className="font-semibold">Rentabilidad</span> - Busca opciones de inversión con
                          rendimientos sostenibles.
                        </li>
                        <li>
                          <span className="font-semibold">Reinversión</span> - Deja que los intereses generen más
                          intereses.
                        </li>
                      </ul>

                      <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                        <p className="text-sm text-gray-600 italic">
                          📈 Un capital inicial de 1.500€ puede convertirse en cientos de miles de euros con una
                          estrategia adecuada.
                        </p>
                      </div>
                    </>
                  ) : (
                    <p className="leading-relaxed">No additional information available.</p>
                  )}
                </div>

                {/* Close Button */}
                <div className="mt-8 flex justify-end">
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg font-medium transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg"
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    Cerrar
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}