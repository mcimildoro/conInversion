"use client";



import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { testimonials } from "@/../data";
// Datos de testimonios


export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#F5F5F7] bg-opacity-90 text-gray-50 py-16 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-5">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-black">
            Testimonios
          </h2>
        </div>

        {/* Slider wrapper */}
        <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={32}
            loop={true}
            centeredSlides={false} // Change to false to avoid centering slides
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 32,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
                centeredSlides: false,
              }, // Asegura que se muestren 3 tarjetas en pantallas grandes
            }}
            className="mySwiper"
          >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={testimonial.id}>
          <div
            className={`group bg-white border border-gray-300 rounded-xl p-6 transition-all duration-500 w-full 
            ${index === activeIndex ? "border-indigo-600 shadow-md" : "hover:border-indigo-600"}`}
          >
            <div>
              {/* ⭐⭐⭐⭐⭐ Puntuación de estrellas */}
              <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5"
                    viewBox="0 0 18 17"
                    fill="currentColor"
                  >
                    <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z" />
                  </svg>
                ))}
              </div>

              {/* Texto del Testimonio */}
              <p className="text-base text-gray-600 leading-6 transition-all duration-500 pb-8 group-hover:text-gray-800">
                {testimonial.quote}
              </p>
            </div>

            {/* Información del usuario */}
            <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
              <Image
                className="rounded-full object-cover"
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                width={40}
                height={40}
                layout="fixed"
              />
              <div>
                <h5 className="text-black font-medium transition-all duration-500">
                  {testimonial.name}
                </h5>
                <span className="text-sm leading-4 text-gray-600">
                  {testimonial.role}
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
      </div>
    </section>
  );
}
