import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

import { faqs } from "@/../data";

export function FAQ() {
  return (
      <section className="bg-[#F5F5F7] py-16">
          <div className="max-w-4xl mx-auto px-6">
              {/* 📌 Encabezado */}
              <div className="text-center">
                  <h2 className="text-3xl font-bold text-black">FAQ</h2>
                  <p className="text-lg text-[#16a34a] mt-2">Frequently asked questions</p>
              </div>

              {/* 📌 Acordeón */}
              <Accordion type="single" collapsible className="w-full mt-6">
                  {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                          {/* 🔹 Pregunta */}
                          <AccordionTrigger className="text-black text-lg font-semibold hover:text-green-700 transition-all duration-200 z-30">
                              {faq.question}
                          </AccordionTrigger>

                          {/* 🔹 Respuesta mejorada con formato */}
                          <AccordionContent className="bg-white p-6 rounded-xl shadow-xl text-black">
                            <div className="space-y-4 text-left leading-relaxed">
                              {faq.answer.split("\n").map((line, index) => (
                                <p key={index} className="indent-8 text-black first:mt-0 mt-3 tracking-wide">
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
