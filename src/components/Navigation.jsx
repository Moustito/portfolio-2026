// Palette "Atelier Digital" - Titouan Moussiaux
const colors = {
  dark: "#0B2839",
  deep: "#10475E",
  teal: "#3D717E",
  ocre: "#D68631",
  brown: "#964405",
  wood: "#5A3211",
};
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Détection du scroll pour changer l'apparence de la barre
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Expertise", href: "#expertise" },
    { name: "Projets", href: "#projects" },
    { name: "Parcours", href: "#parcours" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "py-4 bg-[#0B2839]/80 backdrop-blur-lg border-b border-white/5"
          : "py-8 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* LOGO */}
        <a
          href="#"
          className="text-xl font-black italic tracking-tighter group"
        >
          <span style={{ color: colors.ocre }}>TITOUAN</span>
          <span className="text-brand-ocre transition-colors group-hover:text-white">
            .
          </span>
          M
        </a>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 hover:text-brand-ocre transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* MOBILE BURGER BUTTON */}
        <button
          className="md:hidden z-[110] text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* MOBILE OVERLAY MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 h-screen w-full bg-[#0B2839] z-[105] flex flex-col items-center justify-center gap-8"
            >
              {/* Fond décoratif impressionniste dans le menu */}
              <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-brand-ocre/10 blur-[100px] rounded-full" />
              <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-brand-teal/10 blur-[100px] rounded-full" />

              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-black italic uppercase tracking-tighter text-white hover:text-brand-ocre transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}

              {/* Infos de contact rapides en bas du menu */}
              <div className="absolute bottom-12 text-center">
                <p className="text-white/20 font-mono text-[10px] uppercase tracking-widest">
                  Disponible pour de nouveaux projets
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
