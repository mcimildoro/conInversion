import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

import { faqs } from "@/../data";

export function FAQ() {
  return (
      <section className="bg-[#2c3e50] py-16">
          <div className="max-w-4xl mx-auto px-6">
              {/* 📌 Encabezado */}
              <div className="text-center">
                  <h2 className="text-3xl font-bold text-white">FAQ</h2>
                  <p className="text-lg text-gray-300 mt-2">Frequently asked questions</p>
              </div>

              {/* 📌 Acordeón */}
              <Accordion type="single" collapsible className="w-full mt-6">
                  {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                          {/* 🔹 Pregunta */}
                          <AccordionTrigger className="text-white text-lg font-semibold hover:text-green-400 transition-all duration-200 z-30">
                              {faq.question}
                          </AccordionTrigger>

                          {/* 🔹 Respuesta mejorada con formato */}
                          <AccordionContent className="bg-gray-900/90 p-6 rounded-xl shadow-xl text-gray-200">
                            <div className="space-y-4 text-left leading-relaxed">
                              {faq.answer.split("\n").map((line, index) => (
                                <p key={index} className="indent-8 text-gray-300 first:mt-0 mt-3 tracking-wide">
                                  {line}
                                </p>
                              ))}
                            </div>
                          </AccordionContent>
                      </AccordionItem>
                  ))}
              </Accordion>
          </div>
      </section>
  );
}
