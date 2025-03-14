import Image from 'next/image';
import Link from 'next/link';
import { socialNetworks } from "../../../data";
import { Youtube, Linkedin, Twitter } from 'lucide-react';

const iconMap: { [key: string]: React.ComponentType<{ size: number; strokeWidth: number }> } = {
  Youtube: Youtube,
  Linkedin: Linkedin,
  Twitter: Twitter
};


export function FooterWithLogo() {
  return (
    <footer className="bg-white text-gray-400 py-9 shadow-inner relative z-10  bg-[url('/assets/invest006.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white bg-opacity-90"></div>
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* 🔹 Logo y Enlaces */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* Logo */}
          <div className="flex justify-start">
            <Image 
              src="/assets/coinversion001.png" 
              alt="ConInversión Logo" 
              width={180} 
              height={80} 
              className="h-auto"
            />
          </div>

          {/* Enlaces de Interés */}
          <div className="relative z-10">
            <h2 className="mb-4 text-sm font-bold text-black uppercase">Enlaces de Interés</h2>
            <ul className="text-[#16a34a] font-medium">
              <li className="mb-2"><Link href="#" className="hover:underline hover:text-white transition-all">Sobre Nosotros</Link></li>
              <li className="mb-2"><Link href="#" className="hover:underline hover:text-white transition-all">Servicios</Link></li>
              <li><Link href="#" className="hover:underline hover:text-white transition-all">Nuestro Blog</Link></li>
            </ul>
          </div>

          {/* Enlaces Legales */}
          <div className="relative z-10">
            <h2 className="mb-4 text-sm font-bold text-black uppercase">Legal</h2>
            <ul className="text-[#16a34a] font-medium">
              <li className="mb-2"><Link href="#" className="hover:underline hover:text-white transition-all">Política de Privacidad</Link></li>
              <li className="mb-2"><Link href="#" className="hover:underline hover:text-white transition-all">Aviso Legal</Link></li>
              <li><Link href="#" className="hover:underline hover:text-white transition-all">Reclamos y Sugerencias</Link></li>
            </ul>
          </div>

        </div>

        {/* 🔹 Separador */}
        <hr className="my-6 border-gray-500" />

        {/* 🔹 Copyright y Redes Sociales */}
        <div className="flex flex-col md:flex-row justify-between items-center relative z-10 mt-10">
          <span className="text-sm text-gray-500">
            © 2025 <Link href="https://ConInversion.com/" className="hover:underline hover:text-white transition-all">ConInversión™</Link>. Todos los derechos reservados.
          </span>

          {/* Redes Sociales */}
          <div className="flex items-center gap-4 mt-4 md:mt-0 ">
          {socialNetworks.map(({ id, logo, src }: { id: number; logo: keyof typeof iconMap; src: string }) => {
              console.log("src",src)
              const IconComponent = iconMap[logo]; // Obtiene el componente correcto
              return (
                  <a key={id} href={src} target="_blank" rel="noopener noreferrer">
                      <IconComponent size={30} strokeWidth={1} />
                  </a>
              );
          })}
          </div>
        </div>

      </div>
    </footer>
  );
}
