import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <Link
      href="https://wa.me/1234567890" // Reemplaza con tu número de WhatsApp
      target="_blank"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition duration-300 ease-in-out flex items-center justify-center text-3xl"
    >
      <FaWhatsapp />
    </Link>
  );
};

export default WhatsAppButton;
