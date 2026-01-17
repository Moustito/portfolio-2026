import { motion } from "framer-motion";
import { X, Eye, Figma, Palette, Code, ExternalLink } from "lucide-react";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  // On vérifie si au moins un lien existe pour afficher la section des liens
  const hasLinks = project.links && (project.links.live || project.links.figma);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className="bg-[#0B2839] w-full max-w-5xl h-[95vh] md:h-auto max-h-[92vh] overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER SECTION */}
        <div className="p-4 md:p-6 border-b border-white/5 flex justify-between items-center bg-[#10475E]/30">
          <div className="flex items-center gap-4">
            <h3 className="text-lg md:text-2xl font-black italic uppercase">
              {project.title}
            </h3>

            {/* Affichage conditionnel des badges de liens */}
            {hasLinks && (
              <div className="flex gap-2">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-[10px] bg-brand-ocre px-3 py-1 rounded-full font-bold hover:scale-105 transition-transform"
                  >
                    <Eye size={12} /> LIVE
                  </a>
                )}
                {project.links.figma && (
                  <a
                    href={project.links.figma}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-[10px] bg-white/10 px-3 py-1 rounded-full font-bold hover:bg-white/20 transition-colors text-white/80"
                  >
                    <Figma size={12} /> DESIGN
                  </a>
                )}
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X />
          </button>
        </div>

        {/* SCROLLABLE CONTENT */}
        <div className="overflow-y-auto p-5 md:p-12 space-y-8 md:space-y-12">
          {/* IMAGE SECTION (Conditionnelle) */}
          {project.screenshots?.figma && (
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-8">
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                className="flex items-center rounded-full font-bold hover:scale-105 transition-transform"
              >
                <img
                  src={project.screenshots.figma}
                  loading="lazy"
                  alt={`Aperçu de ${project.title}`}
                  className="w-full h-96 object-top object-cover"
                  onError={(e) => {
                    e.target.style.display = "none"; // Cache l'image si le chemin est faux
                    console.error(
                      "Image non trouvée au chemin:",
                      project.screenshots.figma
                    );
                  }}
                />
              </a>
            </div>
          )}

          {/* SAR SECTION (Toujours présente car c'est ton storytelling) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-white/5 p-6 rounded-2xl border-t-2 border-brand-ocre">
              <h4 className="text-brand-ocre font-mono text-[10px] uppercase tracking-widest mb-3">
                01. Situation
              </h4>
              <p className="text-sm leading-relaxed opacity-70">
                {project.situation}
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border-t-2 border-brand-teal">
              <h4 className="text-brand-teal font-mono text-[10px] uppercase tracking-widest mb-3">
                02. Action
              </h4>
              <p className="text-sm leading-relaxed opacity-70">
                {project.action}
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border-t-2 border-green-500">
              <h4 className="text-green-500 font-mono text-[10px] uppercase tracking-widest mb-3">
                03. Résultat
              </h4>
              <p className="text-sm leading-relaxed opacity-70">
                {project.resultat}
              </p>
            </div>
          </div>

          {/* DEEP DIVE SECTION (Conditionnelle sur les deux champs) */}
          {(project.process?.design || project.process?.tech) && (
            <div className="grid md:grid-cols-2 gap-6 bg-[#10475E]/20 p-8 rounded-[2rem] border border-white/5">
              {project.process.design && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 font-bold text-lg">
                    <Palette size={20} className="text-brand-ocre" /> Design
                    Process
                  </div>
                  <p className="text-xs md:text-sm opacity-60 leading-relaxed italic">
                    {project.process.design}
                  </p>
                </div>
              )}
              {project.process.tech && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 font-bold text-lg">
                    <Code size={20} className="text-brand-teal" /> Tech Stack
                  </div>
                  <p className="text-xs md:text-sm opacity-60 leading-relaxed italic">
                    {project.process.tech}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
