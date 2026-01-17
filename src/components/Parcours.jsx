import React from "react";
import { motion } from "framer-motion";
import { timelineData } from "../data/experience";

const colors = {
  // Un Teal plus "électrique" pour être visible sur le noir
  brandTeal: "#4FD1C5",
  // Un Ocre plus saturé, proche d'un ambre chaud
  brandOcre: "#F59E0B",
};

export default function Parcours() {
  return (
    <section
      id="parcours"
      className="py-24 border-t border-white/5 bg-[#0B2839]"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl font-black italic uppercase text-white">
            Mon <span className="text-outline">Parcours</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* LIGNE VERTICALE - CORRIGÉE */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "circOut" }}
            style={{ originY: 0 }} // Important : définit le point de départ en haut
            className="absolute left-[11px] md:left-[11px] top-4 w-[2px] h-[95%] bg-gradient-to-b from-[#F59E0B] via-[#4FD1C5] to-transparent opacity-40 z-0"
          />

          {timelineData.map((item, index) => {
            const isExp = item.category === "experience";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-20 pl-14 relative z-10" // Padding left augmenté pour laisser place à la ligne
              >
                {/* MARQUEUR LUMINEUX */}
                <div
                  className={`
                  absolute left-0 top-1 w-6 h-6 rounded-full border-4 border-[#0B2839] z-20
                  ${
                    isExp
                      ? "bg-[#F59E0B] shadow-[0_0_15px_#F59E0B]"
                      : "bg-[#0B2839] border-[#4FD1C5] shadow-[0_0_15px_#4FD1C5]"
                  }
                `}
                />

                {/* CONTENU */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className={`font-mono font-bold ${
                        isExp ? "text-[#F59E0B]" : "text-[#4FD1C5]"
                      }`}
                    >
                      {item.year}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-white/40 border border-white/10 uppercase tracking-tighter">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter">
                    {item.title}
                  </h3>

                  <p
                    className={`font-bold text-sm ${
                      isExp ? "text-[#F59E0B]/80" : "text-[#4FD1C5]/80"
                    }`}
                  >
                    {item.company} •{" "}
                    <span className="text-white/40 font-normal italic">
                      {item.subtitle}
                    </span>
                  </p>

                  {item.description && (
                    <p className="mt-4 text-white/60 text-sm leading-relaxed max-w-xl border-l-2 border-white/5 pl-4">
                      {item.description}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
