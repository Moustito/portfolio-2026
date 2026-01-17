import { useEffect, useState } from "react";
import { projectsData } from "./data/projects";
import Contact from "./components/Contact.jsx";
import ProjectModal from "./components/ProjectModal";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero.jsx";
import Expertise from "./components/Expertise.jsx";
import Parcours from "./components/Parcours.jsx";
import Footer from "./components/Footer.jsx";

import { motion, AnimatePresence } from "framer-motion";

// Palette "Atelier Digital"
const colors = {
  dark: "#0B2839",
  deep: "#10475E",
  teal: "#3D717E",
  ocre: "#D68631",
  brown: "#964405",
  wood: "#5A3211",
};

// Variantes d'animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [companyName, setCompanyName] = useState("");

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const ref = queryParams.get("ref");
    if (ref) setCompanyName(ref);
  }, []);

  return (
    <main
      className="min-h-screen font-sans selection:bg-brand-ocre selection:text-white"
      style={{ backgroundColor: colors.dark, color: "white" }}
    >
      <Navigation />
      <Hero companyName={companyName} />
      <Expertise />

      {/* --- SECTION PROJETS --- */}
      <section id="projects" className="py-24 bg-[#0B2839]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase leading-none text-white">
                Projets{" "}
                <span className="text-outline block md:inline text-white/20">
                  Sélectionnés
                </span>
              </h2>
            </motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-12 gap-6"
          >
            {projectsData.map((project, index) => {
              const isLarge = index === 0 || index === 3;

              return (
                <motion.div
                  key={project.id || index}
                  variants={cardVariants}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  onClick={() => setSelectedProject(project)}
                  className={`
                    relative p-8 md:p-12 rounded-[2.5rem] cursor-pointer overflow-hidden group
                    ${isLarge ? "md:col-span-7" : "md:col-span-5"}
                  `}
                  style={{ backgroundColor: project.color || colors.deep }}
                >
                  <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                  {project.isWIP && (
                    <div className="absolute top-6 right-6 z-20">
                      <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-[10px] font-black uppercase tracking-widest text-white/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-ocre animate-pulse" />
                        WIP
                      </span>
                    </div>
                  )}

                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">
                        {project.category}
                      </span>
                      <h3 className="text-3xl md:text-4xl font-black mt-2 mb-4 italic uppercase leading-none tracking-tighter text-white">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.tags?.map((tag) => (
                          <span
                            key={tag}
                            className="text-[9px] border border-white/20 px-2 py-1 rounded-md text-white/70 uppercase font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-12 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-white">
                        Voir le projet
                      </span>
                      <div className="w-8 h-[1px] bg-white/50" />
                    </div>
                  </div>

                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 blur-[50px] rounded-full group-hover:scale-150 transition-transform duration-700" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <Parcours />
      <Contact companyName={companyName} />
      <Footer />

      {/* --- MODALE DE PROJET (L'élément manquant) --- */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </main>
  );
};

export default Portfolio;
