import Link from "next/link";
import Image from "next/image";

export default function InfoSection() {
  return (
<section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "¿Por qué utilizamos la estrategia de Warren Buffett?",
              icon: "/icons/strategy.svg",
              link: "/strategy",
            },
            {
              title: "¿Qué broker debo usar?",
              icon: "/icons/broker.svg",
              link: "/broker",
            },
            {
              title: "¿Cuánto puedo ganar según mi inversión?",
              icon: "/icons/investment.svg",
              link: "/calculator",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center transition-transform transform hover:scale-105 min-h-[280px] flex flex-col justify-between"
            >
              <div className="flex justify-center mb-4">
                <Image src={card.icon} alt={card.title} width={64} height={64} className="object-contain" />
              </div>
              <h3 className="text-lg font-semibold mb-4">{card.title}</h3>
              <a
                href={card.link}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Ver Más
              </a>
            </div>
          ))}
        </div>
        <Link href="/calculator" legacyBehavior>
            <a className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
                Entrar a la calculadora
            </a>
            </Link>

      </div>
      
    </section>
  );
}
