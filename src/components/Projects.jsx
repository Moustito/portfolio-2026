import { useState } from "react";
import { projectsData } from "../data/projects.js";
import ProjectModal from "./components/ProjectModal";
import { motion } from "framer-motion";

import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ExternalLink,
  Code2,
  Palette,
  Box,
  Zap,
  Layout,
  BarChart3,
  Users,
  CheckCircle2,
  Code,
} from "lucide-react";

// Palette "Atelier Digital" - Titouan Moussiaux
const colors = {
  dark: "#0B2839",
  deep: "#10475E",
  teal: "#3D717E",
  ocre: "#D68631",
  brown: "#964405",
  wood: "#5A3211",
};
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projets" className="py-20 px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 uppercase tracking-widest text-white/40">
        <div className="h-px w-12 bg-white/20"></div> Projets
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-4 md:gap-6">
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -8 }}
            onClick={() => setSelectedProject(project)}
            className="relative p-10 rounded-[2rem] flex flex-col justify-between cursor-pointer border border-white/5"
            style={{ backgroundColor: project.color }}
          >
            {/* Contenu de ta carte (Titre, tags, icône) */}
            {project.isWIP && (
              <span className="absolute top-4 right-4 text-[10px] bg-white/20 backdrop-blur-md px-2 py-1 rounded-full uppercase tracking-widest text-white/60 border border-white/10">
                WIP
              </span>
            )}
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <span className="text-xs opacity-60 font-mono mt-4">
              En savoir plus →
            </span>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
