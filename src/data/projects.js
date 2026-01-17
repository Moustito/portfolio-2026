export const projectsData = [
  {
    id: "blanc-murmure-web",
    title: "Blanc Murmure - Web",
    category: "UI/UX & React Integration",
    tags: ["React", "Tailwind", "Framer Motion", "Figma"],
    color: "#10475E",
    situation:
      "L'ASBL artistique Blanc Murmure avait besoin d'une vitrine numérique capable de refléter la richesse de ses ateliers tout en restant simple à administrer.",
    action:
      "Conception d'une interface sur Figma basée sur une grille artistique. J'ai ensuite intégré le site en React en créant un système de composants réutilisables pour les galeries d'œuvres.",
    resultat:
      "Une plateforme fluide qui réduit le temps de chargement des images de 40% et offre une expérience immersive aux utilisateurs.",
    process: {
      design:
        "Focus sur l'accessibilité et la hiérarchie visuelle pour mettre en valeur les créations des ateliers.",
      tech: "Utilisation de Tailwind CSS pour un design 'responsive-first' et Framer Motion pour les transitions fluides entre les pages.",
    },
    links: {
      live: "https://blancmurmure.be",
    },
    screenshots: {
      figma: "/img/blancmurmure_accueil.jpg",
    },
  },
  {
    id: "expert-informatique",
    title: "Expert Informatique",
    category: "Fullstack & API",
    tags: ["Node.js", "API Rest", "React", "State Management"],
    color: "#3D717E",
    situation:
      "Développement d'un outil technique pour la gestion de diagnostics informatiques complexes.",
    action:
      "Création d'une architecture Front-end robuste connectée à une API. J'ai dû simplifier des flux de données techniques pour les rendre compréhensibles par l'utilisateur final.",
    resultat:
      "Une interface pragmatique qui permet un gain de temps de 20% lors des saisies de rapports techniques.",
    process: {
      design:
        "Interface typée 'Dashboard' privilégiant l'efficacité et la clarté des données.",
      tech: "Gestion d'états complexes et synchronisation asynchrone avec le backend.",
    },
    links: {
      live: "https://tipy.be",
    },
    screenshots: {
      figma: "/img/tipy_accueil.jpg",
    },
  },
  {
    id: "blanc-murmure-print",
    title: "Édition & Catalogue",
    category: "Graphic Design / Print",
    tags: ["InDesign", "Photoshop", "Typography"],
    color: "#5A3211",
    situation:
      "Conception du catalogue annuel de l'ASBL regroupant plus de 15 ans d'archives artistiques.",
    action:
      "Mise en page de 60+ pages. Travail rigoureux sur la colorimétrie, le choix papier et la hiérarchie typographique.",
    resultat:
      "Un objet physique haut de gamme qui sert de référence pour les partenaires et donateurs de l'association.",
    process: {
      design:
        "Respect strict de la charte graphique tout en apportant une touche de modernité éditoriale.",
      tech: "Préparation des fichiers pour l'impression (CMJN, fonds perdus, profils ICC).",
    },
    links: {
      live: "https://www.publier-un-livre.com/fr/le-livre-en-papier/2125-vertige",
    },
    screenshots: {
      figma: "/img/blancmurmure_catalogue.jpg",
    },
  },
  {
    id: "action-rac",
    title: "Action-rac",
    category: "Projet Client (USA)",
    tags: ["UI/UX Design", "Figma", "Front-end Dev"],
    color: "#2D4A53",
    situation:
      "Un groupe automobile américain nécessitait une refonte totale de son interface utilisateur pour s'aligner sur les standards modernes.",
    action:
      "Conception du Design System sur Figma et intégration Front-end complète en collaboration avec un développeur Back-end.",
    resultat:
      "Livraison réussie ayant mené à une proposition de second contrat un an plus tard. Focus sur la satisfaction client et la rigueur technique.",
    process: {
      design:
        "Élaboration d'une identité visuelle sobre et efficace pour le secteur automobile.",
      tech: "Intégration propre et modulaire facilitant la communication avec l'API Back-end.",
    },
    links: { live: "#" },
    screenshots: {
      figma: "/img/action_figma.jpg",
    },
  },
  {
    id: "fumble-app",
    title: "Fumble",
    isWIP: true,
    category: "Web App / JDR",
    tags: ["Product Design", "Logic", "React (Planned)"],
    color: "#5A3211",
    situation:
      "Simplifier la gestion complexe du JDR Warhammer Fantasy pour les Maîtres de Jeu et les joueurs.",
    action:
      "Design d'une interface de gestion de personnages et d'un moteur de génération de PNJ aléatoires filtrables.",
    resultat:
      "Architecture pensée pour réduire drastiquement la charge mentale du MJ en automatisant les calculs de statistiques.",
    process: {
      design:
        "Interface immersive et sombre optimisée pour une utilisation sur tablette en session de jeu.",
      tech: "Étude de la gestion d'états (State Management) pour les dépendances de caractéristiques.",
    },
    links: {},
    screenshots: {
      figma: "/img/fumble_figma.jpg",
    },
  },
  {
    id: "pixel-pinceau",
    title: "Pixel & Pinceau",
    isWIP: true,
    category: "Design Lab / Agence",
    tags: ["Art Direction", "UI Exploration", "Branding"],
    color: "#D68631",
    situation:
      "Fusionner les mondes de l'art physique et du design numérique au sein d'une entité créative unique.",
    action:
      "Recherche graphique poussée sur l'utilisation de la couleur et des mises en page non-conventionnelles.",
    resultat:
      "Sert aujourd'hui d'étude de style et de base de composants pour des projets nécessitant une forte identité artistique.",
    process: {
      design:
        "Exploration de palettes vibrantes et de typographies de caractère.",
      tech: "Prototypage d'interactions complexes pour simuler une expérience galerie d'art.",
    },
    links: {
      figma:
        "https://www.figma.com/proto/hBUs3amdrz0UCgDi81ILsZ/Pixel---Pinceau?node-id=454-235&t=KWYPqmUr1GoAo8a9-1",
    },
    screenshots: {
      figma: "/img/pixel-pinceau_figma.jpg",
    },
  },
];
