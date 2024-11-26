import { Project } from '../types';
import Demo_Unesco from '../assets/img/projects/videos/demounesco.mp4';


export const projects: Project[] = [
  {
    id: 'unesco-ile-cite',
    title: "Site Web UNESCO - Île de la Cité",
    description: "Chef de projet pour la conception d'un site web valorisant le patrimoine mondial de l'Île de la Cité à Paris (Notre Dame, l'ancien Palais de Justice...)",
    longDescription: `Conception d'un Site Web pour participer à la valorisation d'un patrimoine mondial en partenariat avec l'UNESCO : l'Ile de la Cité à Paris.
    
    Le projet impliquait la création d'une plateforme interactive permettant aux visiteurs de découvrir l'histoire riche et le patrimoine culturel de l'Île de la Cité.`,
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    videoUrl: Demo_Unesco,
    imageUrl: "https://images.unsplash.com/photo-1478860409698-8707f313ee8b?fit=crop&w=800&h=400",
    gallery: [
      "https://images.unsplash.com/photo-1478860409698-8707f313ee8b?fit=crop&w=800&h=400",
      "https://images.unsplash.com/photo-1478860409698-8707f313ee8b?fit=crop&w=800&h=400"
    ],
    role: "Chef de Projet",
    duration: "6 mois",
    challenges: [
      "Coordination d'une équipe de 5 développeurs",
      "Intégration de contenus historiques complexes",
      "Optimisation pour différents appareils"
    ],
    outcomes: [
      "Site web responsive et moderne",
      "Augmentation de la visibilité du patrimoine",
      "Satisfaction des parties prenantes"
    ]
  },
  {
    id: 'robot-assembleur',
    title: "Robot Éclaireur en Assembleur",
    description: "Conception d'un robot qui se déplace, clignote et évite les obstacles grâce à des capteurs.",
    longDescription: `Le but est de faire un robot qui se déplace, clignote et qui rencontre des obstacles et qui les évite grâce à des bumper sensors, LEDs, moteurs, et des boutons.`,
    technologies: ["Assembleur", "Hardware", "Robotique"],
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?fit=crop&w=800&h=400",
    gallery: [
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?fit=crop&w=800&h=400",
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?fit=crop&w=800&h=400"
    ],
    role: "Développeur Principal",
    duration: "3 mois",
    challenges: [
      "Programmation bas niveau en assembleur",
      "Intégration des composants hardware",
      "Optimisation des performances"
    ],
    outcomes: [
      "Robot fonctionnel et autonome",
      "Navigation précise",
      "Système de détection d'obstacles efficace"
    ]
  }
];