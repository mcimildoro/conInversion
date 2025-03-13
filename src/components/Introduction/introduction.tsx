"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { TypeAnimation } from "react-type-animation"

export default function IntroSection() {
  return (
    <div className="w-full overflow-hidden bg-white">
      <div className="container mx-auto px-4 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col order-1 "
          >
            <div className="flex flex-col justify-center max-w-lg">
              <h1 className="mb-5 text-3xl leading-tight text-center md:text-left md:text-5xl md:mb-10 font-bold text-[#121212] p-3">
                Menos lectura, <br />
                <TypeAnimation
                  sequence={[
                    "más Resultados",
                    1000,
                    "más Diversificación",
                    1000,
                    "más Rendimiento",
                    1000,
                    "más Inversión",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Number.POSITIVE_INFINITY}
                  className="font-bold text-[#16a34a]"
                />
              </h1>
            </div>

            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              ¡Un portal con oportunidades atractivas de inversión en la bolsa americana! Simplificamos el proceso para
              que puedas diversificar tu cartera de manera inteligente.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-6 text-lg z-10">
                Conoce más
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center border-2 border-white">
                  <span className="text-blue-600 text-xs font-medium">+500</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center border-2 border-white">
                  <span className="text-green-600 text-xs font-medium">+10k</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center border-2 border-white">
                  <span className="text-amber-600 text-xs font-medium">+25%</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Más de <span className="font-semibold">1,000 inversores</span> confían en nosotros
              </p>
            </div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative order-1 md:order-2" // 
          >
            <div className="relative z-10">
              <Image
                src="/assets/header2.png"
                alt="Inversión ilustración"
                width={600}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 -left-8 w-16 h-16 bg-green-100 rounded-full opacity-70" />
            <div className="absolute bottom-1/4 -right-8 w-24 h-24 bg-blue-100 rounded-full opacity-70" />
            <div className="absolute -bottom-6 left-1/4 w-12 h-12 bg-amber-100 rounded-full opacity-70" />

            {/* Stats Cards */}

            {/* TOP RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -top-4 -right-4 bg-white shadow-lg rounded-xl p-4 z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Rendimiento</p>
                  <p className="font-bold text-green-600">+25.4%</p>
                </div>
              </div>
            </motion.div>



            {/* TOP LEFT */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -top-4 -left-4 bg-white shadow-lg rounded-xl p-4 z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Rentabilidad anual</p>
                  <p className="font-bold text-green-600">+18.4%</p>
                </div>
              </div>
            </motion.div>

            {/* BOTTOM LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-4 left-10 bg-white shadow-lg rounded-xl p-4 z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Inversión mínima</p>
                  <p className="font-bold text-green-600">$100</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

