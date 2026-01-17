import { Palette, Zap, Code } from "lucide-react";

// Palette "Atelier Digital" - Titouan Moussiaux
const colors = {
  dark: "#0B2839",
  deep: "#10475E",
  teal: "#3D717E",
  ocre: "#D68631",
  brown: "#964405",
  wood: "#5A3211",
};

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 bg-[#0B2839]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-4xl font-black italic tracking-tighter uppercase">
              Mes Expertises
            </h2>
            <p className="text-white/40 font-mono text-sm mt-2">
              Design thinking & Technical implementation
            </p>
          </div>
          <div className="h-[1px] flex-grow bg-white/10 mx-8 mb-4 hidden md:block"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Design UI/UX - Thème OCRE */}
          <div className="group relative bg-white/5 p-10 rounded-[2.5rem] border border-white/10 overflow-hidden transition-all duration-500 hover:bg-brand-ocre/10 hover:border-brand-ocre/50 hover:-translate-y-2">
            {/* Glow de fond au hover */}
            <div className="absolute -right-20 -top-20 w-40 h-40 bg-brand-ocre/20 blur-[80px] group-hover:bg-brand-ocre/40 transition-all duration-500" />

            <div className="relative z-10">
              <div className="w-14 h-14 bg-brand-ocre rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(214,134,49,0.3)] group-hover:scale-110 transition-transform duration-500">
                <Palette className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-black mb-6 italic text-white uppercase tracking-tight">
                Design UI/UX
              </h3>
              <ul className="space-y-4">
                {[
                  "Prototypage Figma",
                  "Design Systems",
                  "User Research",
                  "Wireframing",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-white/70 font-bold group-hover:text-white transition-colors"
                  >
                    <span className="w-2 h-2 bg-brand-ocre rounded-full shadow-[0_0_8px_#D68631]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Développement - Thème TEAL */}
          <div className="group relative bg-white/5 p-10 rounded-[2.5rem] border border-white/10 overflow-hidden transition-all duration-500 hover:bg-brand-teal/10 hover:border-brand-teal/50 hover:-translate-y-2">
            <div className="absolute -right-20 -top-20 w-40 h-40 bg-brand-teal/20 blur-[80px] group-hover:bg-brand-teal/40 transition-all duration-500" />

            <div className="relative z-10">
              <div className="w-14 h-14 bg-brand-teal rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(61,113,126,0.3)] group-hover:scale-110 transition-transform duration-500">
                <Code className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-black mb-6 italic text-white uppercase tracking-tight">
                Développement
              </h3>
              <ul className="space-y-4">
                {[
                  "React.js & Vite",
                  "Tailwind CSS",
                  "Framer Motion",
                  "JavaScript ES6+",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-white/70 font-bold group-hover:text-white transition-colors"
                  >
                    <span className="w-2 h-2 bg-brand-teal rounded-full shadow-[0_0_8px_#3D717E]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Vision Produit - Thème WHITE/SOFT */}
          <div className="group relative bg-white/5 p-10 rounded-[2.5rem] border border-white/10 overflow-hidden transition-all duration-500 hover:bg-white/5 hover:border-white/30 hover:-translate-y-2">
            <div className="absolute -right-20 -top-20 w-40 h-40 bg-white/5 blur-[80px] group-hover:bg-white/10 transition-all duration-500" />

            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-black mb-6 italic text-white uppercase tracking-tight">
                Vision Produit
              </h3>
              <ul className="space-y-4">
                {[
                  "Méthodologie Agile",
                  "Analyse Business",
                  "Communication Client",
                  "Psychologie UX",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-white/70 font-bold group-hover:text-white transition-colors"
                  >
                    <span className="w-2 h-2 bg-white/40 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
