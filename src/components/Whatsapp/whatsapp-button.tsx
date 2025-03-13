import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    
    <div className="fixed bottom-20 right-4 md:bottom-8 md:right-8 z-50">
      <Link
        href="https://wa.me/1234567890" // Reemplaza con tu número de WhatsApp
        target="_blank"
        className="z-50 fixed bottom-28 right-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition duration-300 ease-in-out flex items-center justify-center text-3xl "
      >
        <FaWhatsapp />
      </Link>
    </div>
    
  );
};

export default WhatsAppButton;
