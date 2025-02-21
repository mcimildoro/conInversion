"use client"

import { type ReactNode } from "react"

export function LayoutGrid({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {children}
    </div>
  )
}


/*"use client";
import React, { useState, useRef, useEffect } from "react";


 
const SkeletonOne = () => {
  return (
    <div className="p-6 rounded-lg bg-black/70 text-white shadow-lg">
      <p className="font-bold md:text-4xl text-2xl text-white mb-4">
        Deep Value: Nuestra Estrategia
      </p>
      <p className="text-lg text-gray-300 leading-relaxed">
        Analizamos detalladamente factores clave como <span className="text-green-400 font-semibold">facturación</span>, 
        <span className="text-green-400 font-semibold"> liquidez</span> y 
        <span className="text-green-400 font-semibold"> deuda</span>. 
        Identificamos oportunidades en crisis o <i>spin-offs</i>, priorizando el 
        análisis cuantitativo y cualitativo para minimizar riesgos.
      </p>
      <p className="mt-4 text-lg font-semibold text-white">
        Inspirado en grandes inversores:
      </p>
      <p className="text-green-400 text-xl font-bold mt-1">
        Benjamin Graham & Warren Buffett
      </p>
    </div>
  );
};


const SkeletonTwo = () => {
  return (
    <div className="p-6 rounded-lg bg-black/70 text-white shadow-lg">
      <p className="font-bold md:text-4xl text-2xl text-white mb-4">
        Cómo Elegir un Broker Seguro
      </p>

      <p className="text-lg text-gray-300 leading-relaxed">
        Para comprar acciones de forma segura, verifica que el broker esté registrado en la{" "}
        <span className="text-green-400 font-semibold">CNMV</span> u organismo regulador de tu país. 
        Revisa opiniones, comisiones y asegúrate de que ofrezca acceso a{" "}
        <span className="text-green-400 font-semibold">NYSE</span> y{" "}
        <span className="text-green-400 font-semibold">NASDAQ</span>.
      </p>

      <p className="mt-4 text-lg font-semibold text-white">
        Brokers más confiables en España:
      </p>
      <p className="text-green-400 text-xl font-bold mt-1 ml-5">
        DEGIRO & Interactive Brokers
      </p>

      <p className="text-sm text-gray-400 italic mt-4">
        Nota legal: ConInversión y sus miembros no reciben compensación ni incentivos económicos 
        por recomendar estos brokers.
      </p>
    </div>
  );
};


const SkeletonThree = () => {
  return (
    <div className="p-6 rounded-lg bg-black/70 text-white shadow-lg">
      <p className="font-bold md:text-4xl text-2xl text-white mb-4">
        🚀 Haz Crecer tu Inversión
      </p>

      <p className="text-lg text-gray-300 leading-relaxed">
        Nuestra estrategia de inversión a{" "}
        <span className="text-green-400 font-semibold">mediano-largo plazo</span>{" "}
        puede convertir <span className="text-green-400 font-bold">1.500€</span> en{" "}
        <span className="text-green-400 font-bold">cientos de miles de euros</span>. 
        Todo gracias al poder del{" "}
        <span className="text-green-400 font-semibold">interés compuesto</span>.
      </p>

      <p className="text-lg text-gray-300 leading-relaxed mt-4">
        Con una{" "}
        <span className="text-green-400 font-semibold">gestión de riesgos adecuada</span>, 
        alcanzar grandes ganancias es posible. 
        Esta estrategia ha cambiado vidas y puede cambiar la tuya.
      </p>

      <p className="text-lg font-semibold text-white mt-4">
        📊 Prueba nuestra calculadora de interés compuesto:
      </p>
      <p className="text-green-400 text-xl font-bold mt-1 ml-5">
        Optimiza tu inversión de forma efectiva 💡
      </p>
    </div>
  );
};





const SkeletonFour = () => {
  return (
    <div className="p-6 rounded-lg bg-black/70 text-white shadow-lg">
      <p className="font-bold md:text-4xl text-2xl text-white mb-4">
        🏦 Diversifica tu Inversión
      </p>

      <p className="text-lg text-gray-300 leading-relaxed">
        La clave del éxito financiero está en la{" "}
        <span className="text-green-400 font-semibold">diversificación</span>. No pongas
        todos tus huevos en una sola canasta: combina{" "}
        <span className="text-green-400 font-bold">acciones, bonos, ETFs y otros activos</span>{" "}
        para minimizar riesgos y maximizar rendimientos.
      </p>

      <p className="text-lg text-gray-300 leading-relaxed mt-4">
        Aprende cómo crear una{" "}
        <span className="text-green-400 font-semibold">cartera equilibrada</span> que
        se adapte a tus objetivos y tolerancia al riesgo.
      </p>

      <p className="text-lg font-semibold text-white mt-4">
        📊 Descubre estrategias para una inversión inteligente:
      </p>
      <p className="text-green-400 text-xl font-bold mt-1 ml-5">
        Conviértete en un inversor diversificado 🚀
      </p>
    </div>
  );
};





const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    title: "¿Por qué utilizamos la estrategia de Warren Buffett?",
    className: "md:col-span-2 ",
    thumbnail:
      "/assets/invest002.jpg",
  },
  {
    id: 2,
    title: "¿Qué broker debo usar?",
    content: <SkeletonTwo />,
    className: "col-span-1 ",
    thumbnail:
      "/assets/invest003.jpg",
  },
  {
    id: 3,
    title: "¿Qué rentabilidad puedes obtener según tu inversión?",
    content: <SkeletonThree />,
    className: "col-span-1 ",
    thumbnail:
      "/assets/invest007.jpg",
  },
  {
    id: 4,
    title: "¿Cómo diversificar tu inversión para minimizar riesgos?",  
    content: <SkeletonFour />,  
    className: "col-span-2",  
    thumbnail: "/assets/invest008.jpg",  
}


];


*/