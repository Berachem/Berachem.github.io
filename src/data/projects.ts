import { Project } from '../types';

import Countdown from '../assets/img/projects/videos/countdown.webm';
import CroisadeTrailer from '../assets/img/projects/videos/Croisade_Trailer.mp4';
import DemoCarbuviz from '../assets/img/projects/videos/Demo_Carbuviz.mp4';
import DemoGIGBot from '../assets/img/projects/videos/Demo_GIG-Bot.mp4';
import DemoAzul from '../assets/img/projects/videos/demoazul.mp4';
import DemoEco from '../assets/img/projects/videos/demoeco.mp4';
import DemoGraphes from '../assets/img/projects/videos/demographes.mp4';
import DemoKontabl from '../assets/img/projects/videos/demokontabl.mp4';
import DemoLoop from '../assets/img/projects/videos/demoloop.mp4';
import DemoUnesco from '../assets/img/projects/videos/demounesco.mp4';
import DemoZarza from '../assets/img/projects/videos/demozarza.mp4';
import RapizzTrailer from '../assets/img/projects/videos/Rapizz_Trailer.mp4';
import SaveTheCatsDemo from '../assets/img/projects/videos/saveTheCatsDemo.mp4';
import SpaceInvaderDemo from '../assets/img/projects/videos/space_invader_demo.mp4';

export const projects: Project[] = [
  {
    id: 'unesco-ile-cite',
    title: "Île de la Cité, Paris 🏛️🌍",
    description: "Chef de projet pour la conception d'un site web valorisant le patrimoine mondial de l'Île de la Cité à Paris.",
    longDescription: "Conception d'un site Web pour valoriser un patrimoine mondial en partenariat avec l'UNESCO, incluant la cathédrale Notre-Dame et l'ancien Palais de Justice.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    videoUrl: DemoUnesco,
    imageUrl: DemoUnesco,
    role: "Chef de Projet",
    duration: "6 mois",
  },
  {
    id: 'zoo-ggle',
    title: "Zoo-ggle 🦁",
    description: "Jeu de mots multijoueur en ligne inspiré de Boggle.",
    longDescription: "Plateforme de jeu en ligne permettant de trouver le plus de mots possible en utilisant les lettres du plateau de jeu. Jouable en solo ou en multijoueur.",
    technologies: ["React", "TypeScript", "PHP", "MySQL", "C", "Java", "Python"],
    imageUrl: DemoGraphes,
    role: "Développeur Full-Stack",
    duration: "4 mois",
  },
  {
    id: 'azul-game',
    title: "Azul Game (IA)",
    description: "Jeu de plateau Azul avec une IA intégrée.",
    longDescription: "Adaptation du jeu de plateau Azul en Python avec une IA capable de jouer à différents niveaux de difficulté. Intégration d'un système de sauvegarde et d'une interface graphique.",
    technologies: ["Python", "Tkinter", "IA"],
    videoUrl: DemoAzul,
    imageUrl: DemoAzul,
    role: "Développeur Principal",
    duration: "3 mois",
  },
  {
    id: 'kontabl',
    title: "Kontabl 💰",
    description: "Portail web pour la consultation des comptes de commerçants.",
    longDescription: "Développement d'une plateforme dédiée à la gestion et à la consultation des comptes pour les commerçants et entreprises.",
    technologies: ["PHP", "MySQL"],
    videoUrl: DemoKontabl,
    imageUrl: DemoKontabl,
    role: "Développeur Full-Stack",
    duration: "4 mois",
  },
  {
    id: 'robot-gig-bot',
    title: "Robot GIG-Bot 🚓🤖",
    description: "Conception d'un robot éclaireur autonome.",
    longDescription: "Création d'un robot autonome qui se déplace, détecte et évite des obstacles grâce à des capteurs, LEDs, et des moteurs.",
    technologies: ["Assembleur"],
    videoUrl: DemoGIGBot,
    imageUrl: DemoGIGBot,
    role: "Développeur Principal",
    duration: "3 mois",
  },
  {
    id: 'theses',
    title: "Thèses 📚",
    description: "Plateforme répertoriant toutes les thèses soutenues en France depuis 1960.",
    longDescription: "Site web permettant de rechercher et de visualiser des thèses soutenues en France. Inclut des graphiques et statistiques pour une analyse approfondie.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "Python"],
    imageUrl: DemoGraphes,
    role: "Développeur Full-Stack",
    duration: "6 mois",
  },
  {
    id: 'eco-tidien',
    title: "App Eco-tidien 🌱",
    description: "Application mobile pour guider dans des choix écologiques.",
    longDescription: "Maquettage d'une application mobile dédiée à guider les utilisateurs dans leurs choix quotidiens pour une planète plus verte.",
    technologies: ["Figma"],
    videoUrl: DemoEco,
    imageUrl: DemoEco,
    role: "Designer UI/UX",
    duration: "2 mois",
  },
  {
    id: 'loop-hero',
    title: "Loop-Hero ⚔️🔁",
    description: "Jeu Roguelike et Deck-building où un héros est bloqué dans une boucle temporelle.",
    longDescription: "Développement d'un jeu stratégique où le héros affronte des monstres tout en étant coincé dans une boucle temporelle.",
    technologies: ["Java"],
    videoUrl: DemoLoop,
    imageUrl: DemoLoop,
    role: "Développeur Principal",
    duration: "5 mois",
  },
  {
    id: 'croisade',
    title: "Croisade 🔴⚔️🟢⚔️🔵",
    description: "Jeu de stratégie basé sur des algorithmes IA de plus court chemin.",
    longDescription: "Création d'un jeu où trois factions (🔴, 🟢, 🔵) s'affrontent. Chaque faction suit une stratégie IA avancée pour vaincre les adversaires.",
    technologies: ["Python", "IA"],
    videoUrl: CroisadeTrailer,
    imageUrl: CroisadeTrailer,
    role: "Développeur IA",
    duration: "6 mois",
  },
  {
    id: 'save-the-cats',
    title: "Save The Cats",
    description: "Jeu de sauvetage de chats dans des villages en feu avec des niveaux variés.",
    longDescription: "Vous incarnez un héros sauvant des chats pris dans des incendies. Le but est de les transporter en sécurité dans le temps le plus court possible.",
    technologies: ["Unity", "C#"],
    videoUrl: SaveTheCatsDemo,
    imageUrl: SaveTheCatsDemo,
    role: "Développeur Unity",
    duration: "4 mois",
  },
  {
    id: 'space-invaders',
    title: "Space Invaders 👾",
    description: "Reproduction du classique Space Invaders avec fonctionnalités modernes.",
    longDescription: "Développement du jeu Space Invaders avec des fonctionnalités multijoueur, des niveaux progressifs, un boss final et un leaderboard.",
    technologies: ["C#"],
    videoUrl: SpaceInvaderDemo,
    imageUrl: SpaceInvaderDemo,
    role: "Développeur Principal",
    duration: "3 mois",
  },
  {
    id: 'martingale',
    title: "Stratégie de la Martingale (Casino) 🎲",
    description: "Simulation d'une stratégie mathématique pour maximiser les gains au Casino.",
    longDescription: "Développement d'une application permettant de calculer les mises optimales en utilisant la stratégie de la Martingale.",
    technologies: ["Python"],
    imageUrl: RapizzTrailer,
    role: "Développeur Python",
    duration: "1 mois",
  },
];
