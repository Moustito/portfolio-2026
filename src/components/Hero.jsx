import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

// Palette "Atelier Digital" - Titouan Moussiaux
const colors = {
  dark: "#0B2839",
  deep: "#10475E",
  teal: "#3D717E",
  ocre: "#D68631",
  brown: "#964405",
  wood: "#5A3211",
};

export default function Hero({ companyName }) {
  const availabilityText = companyName
    ? `DISPONIBLE POUR ${companyName.toUpperCase()} — PFI`
    : "DISPONIBLE IMMÉDIATEMENT — ÉLIGIBLE PFI";

  return (
    <section className="relative pt-32 pb-20 px-8 max-w-7xl mx-auto flex flex-col justify-center min-h-[90vh]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-xs font-mono mb-8"
          style={{ color: colors.ocre }}
        >
          <span className="relative flex h-2 w-2">
            <span
              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
              style={{ backgroundColor: colors.ocre }}
            ></span>
            <span
              className="relative inline-flex rounded-full h-2 w-2"
              style={{ backgroundColor: colors.ocre }}
            ></span>
          </span>
          {availabilityText}
        </div>

        <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.85] tracking-tighter">
          UI DESIGNER <br />
          <span style={{ color: colors.teal }}>& DEVELOPER</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mb-10 leading-relaxed">
          Je traduis des analyses complexes en interfaces{" "}
          <span className="text-white font-bold">simples, intuitives</span> et
          prêtes pour la production. Un profil hybride qui parle aussi bien le
          langage du{" "}
          <span className="text-white font-bold" style={{ color: colors.ocre }}>
            design
          </span>{" "}
          que celui du{" "}
          <span className="text-white font-bold" style={{ color: colors.teal }}>
            code
          </span>
          .
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projets"
            className="px-10 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-lg"
            style={{ backgroundColor: colors.ocre }}
          >
            Découvrir mes projets
          </a>
          <a
            href="#contact"
            className="px-10 py-4 rounded-full border border-white/20 font-bold hover:bg-white/10 transition-all"
          >
            Me contacter
          </a>
        </div>

        {companyName.toLowerCase() === "easi" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 flex items-center gap-2 text-brand-ocre font-mono text-sm italic"
          >
            <CheckCircle2 size={16} /> Prêt à rejoindre le "Best Workplace" et
            relever vos défis UI !
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
