import { motion } from "framer-motion";

import { teamMembers } from "@/../data";

export default function TeamSection() {
  return (
    <section className="py-6">
      <h2 className="text-center text-3xl font-bold text-quienes mb-10">
        Equipo
      </h2>

      <div className="flex flex-wrap justify-center gap-8 mb-20">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 4px 10px rgba(0,0,0,0.2)" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-containerBlock p-6 rounded-xl text-center w-80 shadow-lg"
          >
            <motion.img
              src={member.image}
              alt={member.name}
              className="mx-auto w-24 h-24 rounded-full mb-4"
              whileHover={{ scale: 1.1 }}
            />
            <h3 className="text-xl text-title font-bold">{member.name}</h3>
            <p className="text-green-600 font-title">{member.role}</p>
            <p className="text-description mt-2 text-base">{member.description}</p>

            {/* Íconos sociales */}
            <div className="flex justify-center gap-4 mt-4">
              {member.social.map((icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2 }}
                  className="text-green-500 cursor-pointer"
                >
                  {icon}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
