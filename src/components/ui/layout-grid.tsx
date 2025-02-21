"use client";
import React, { useState, JSX } from "react";
import {  motion } from "framer-motion";
import { cn } from "@/lib/utils";


type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
  title: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3  max-w-7xl mx-auto gap-4 relative cursor-pointer">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn( card.className, "relative overflow-hidden",
              selected?.id === card.id
                ? "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
              
                : lastSelected?.id === card.id
                
            )}
            
            layoutId={`card-${card.id}`}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <ImageComponent card={card} isSelected={selected?.id === card.id} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />

    </div>
  );
};

const ImageComponent = ({ card, isSelected }: { card: Card; isSelected: boolean }) => {
  return (
            <div className="group overflow-hidden h-full w-full relative">
              <motion.div
                layoutId={`image-${card.id}-image`}
                className="absolute inset-0 h-full w-full"
              >
                {/* Imagen */}
                <motion.img
          src={card.thumbnail}
          height="100%"
          width="100%"
          className="object-cover object-center h-full w-full"
        />

        {/* Capa de opacidad */}
        <motion.div
          className={`absolute inset-0 transition-opacity duration-500 ${
            isSelected ? "bg-black opacity-100" : "bg-black opacity-60 group-hover:opacity-0"
          }`}
        ></motion.div>
      </motion.div>

      {/* Título solo si no está seleccionado */}
      {!isSelected && (
        <motion.h2
          initial={{ opacity: 1 }}
          whileHover={{ opacity: 0.7 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center z-10 text-white text-2xl font-bold px-4 text-center pointer-events-none"
        >
          {card.title}
        </motion.h2>
      )}
    </div>
  );
};




const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="min-h-[450px] w-full flex flex-col justify-between rounded-lg shadow-2xl relative z-[60]">
      <motion.div className="absolute inset-0 h-full w-full bg-black opacity-60 z-10" />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative p-8 z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};

