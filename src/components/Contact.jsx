import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Send,
  CheckCircle2,
  User,
  MessageSquare,
  Linkedin,
  Github,
  MapPin,
} from "lucide-react";

const ContactSection = ({ companyName, colors }) => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xbddlaoe", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus(""), 6000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-28 px-8 max-w-5xl mx-auto text-center relative"
    >
      <div className="relative z-10">
        {/* --- TITRE PERSONNALISÉ --- */}
        <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
          {companyName
            ? `Prêt pour l'aventure ${companyName} ?`
            : "On lance votre prochain produit ?"}
        </h2>

        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto italic">
          Basé à{" "}
          <span className="text-white font-bold underline decoration-brand-ocre underline-offset-4">
            Mons
          </span>
          , je suis mobile et prêt à m'investir immédiatement via le dispositif{" "}
          <span className="font-bold">PFI</span>.
        </p>

        {/* --- LE FORMULAIRE PREMIUM --- */}
        <div className="max-w-2xl mx-auto relative mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-[1px] rounded-[2.5rem] bg-gradient-to-b from-white/20 to-transparent shadow-2xl"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-[#0B2839]/90 backdrop-blur-xl p-8 md:p-12 rounded-[2.4rem] space-y-6"
            >
              <div className="space-y-2 text-left">
                <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 ml-4 flex items-center gap-2">
                  <User size={12} /> Votre Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="ex: recruteur@entreprise.be"
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-ocre focus:bg-white/10 outline-none transition-all text-white"
                />
              </div>

              <div className="space-y-2 text-left">
                <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 ml-4 flex items-center gap-2">
                  <MessageSquare size={12} /> Votre Message
                </label>
                <textarea
                  name="message"
                  placeholder={
                    companyName
                      ? `Bonjour Titouan, j'ai vu votre profil pour ${companyName}...`
                      : "Comment puis-je vous aider ?"
                  }
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-ocre focus:bg-white/10 outline-none transition-all text-white h-40 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                className="w-full group flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-[#D68631] text-white font-bold transition-all hover:bg-[#964405] active:scale-95 disabled:opacity-50"
              >
                {status === "sending" ? (
                  "Expédition..."
                ) : status === "success" ? (
                  "Message envoyé !"
                ) : (
                  <>
                    Envoyer le message <Send size={18} />
                  </>
                )}
              </button>

              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4 text-green-400 text-sm flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 size={16} />
                    {companyName
                      ? `Transmis à l'équipe ${companyName} !`
                      : "Bien reçu, je vous réponds vite."}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>

        {/* --- LIENS SOCIAUX ET LOCALISATION --- */}
        <div className="flex flex-col items-center gap-8">
          <div className="flex gap-6">
            <a
              href="https://linkedin.com/in/votre-profil"
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-full border border-white/10 hover:border-brand-ocre hover:text-brand-ocre transition-all bg-white/5 shadow-lg group"
            >
              <Linkedin
                size={28}
                className="group-hover:scale-110 transition-transform"
              />
            </a>
            <a
              href="https://github.com/votre-profil"
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-full border border-white/10 hover:border-brand-ocre hover:text-brand-ocre transition-all bg-white/5 shadow-lg group"
            >
              <Github
                size={28}
                className="group-hover:scale-110 transition-transform"
              />
            </a>
          </div>

          <div className="flex items-center gap-2 text-sm opacity-50 font-mono tracking-widest uppercase bg-white/5 px-6 py-2 rounded-full border border-white/5">
            <MapPin size={14} className="text-brand-ocre" /> Mons & Mobile en
            Belgique
          </div>
        </div>
      </div>

      {/* Déco Fond */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-[150px] opacity-10 -z-10"
        style={{ backgroundColor: "#D68631" }}
      ></div>
    </section>
  );
};

export default ContactSection;
