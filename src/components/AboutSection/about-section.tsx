import React from "react";
import { motion } from "framer-motion";

interface SpotlightCardProps {
  title: string;
  description: string;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({ title, description }) => {
  return (
   
    <motion.div className="relative flex items-center justify-center mx-auto rounded-lg bg-containerBlock shadow-lg p-8 h-auto max-w-4xl  text-center  "  
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, boxShadow: "0px 4px 10px rgba(0,0,0,0.2)" }}
                transition={{ duration: 0.5, ease: "easeOut" }}>
                    <div className="text-center break-words">
                        <h3 className="text-2xl md:text-3xl font-bold text-title mb-4 leading-tight" >
                        <p>{title}</p>
                        </h3>
                        <p className="text-lg text-description leading-relaxed">{description}</p>
                    </div>
    </motion.div>
  );
};

export default SpotlightCard;
