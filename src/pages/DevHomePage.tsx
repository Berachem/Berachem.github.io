import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Section } from '../components/Section';
import { ThemeToggle } from '../components/ThemeToggle';
import { ProjectCard } from '../components/ProjectCard';
import { ExperienceCard } from '../components/ExperienceCard';
import { EducationCard } from '../components/EducationCard';
import { SkillSection } from '../components/SkillSection';
import { InterestSection } from '../components/InterestSection';
import { MeritSection } from '../components/MeritSection';
import { CompanySection } from '../components/CompanySection';
import { projects } from '../data/projects';

import Logo_AA_Partners from '../assets/img/organizations/aa.png';
import Logo_Enedis from '../assets/img/organizations/enedis.png';
import Logo_Unesco from '../assets/img/organizations/unesco_filled.png';





const experiences = [
  {
    company: "Enedis",
    role: "Lead Software Engineer & Product Owner",
    period: "septembre 2023 - 2026",
    description: "Application liée à la cartographie du réseau et chantiers électriques de la région Île de France-Est",
    technologies: ["React", "TypeScript", "Symfony"],
    logo: Logo_Enedis,
    isNew: true
  },
  {
    company: "A&A Partners",
    role: "Développeur Mobile (IOS & Android)",
    period: "septembre 2022 - juillet 2023",
    description: "Développement d'applications mobiles pour des clients comme Yves Saint Laurent, Musée Picasso, BNF, etc.",
    technologies: ["Flutter", "Dart", "Python"],
    logo: Logo_AA_Partners,
    isNew: false
  },
  {
    company: "Université Gustave Eiffel",
    role: "Chef de Projet UNESCO",
    period: "septembre 2021 - juillet 2022",
    description: "Conception d'un site web en partenariat avec l'UNESCO pour valoriser le patrimoine de l'Île de la Cité à Paris.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    logo: Logo_Unesco,
    isNew: false
  }
];


const education = [
  {
    school: "ESIEE Paris",
    degree: "Diplôme d'ingénieur, Informatique",
    period: "2023 - 2026",
    description: "Formation d'ingénieur généraliste en informatique en apprentissage.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfAkzg-z2PX9bb3joJ3tVTrXDEd7_0N2Onzw&s",
    achievements: [
      "Projets avancés en développement logiciel.",
      "Apprentissage en alternance chez Enedis."
    ],
    major: true
  },
  {
    school: "Université Gustave Eiffel",
    degree: "BUT Informatique",
    period: "2021 - 2023",
    description: "Formation en informatique avec spécialisation Fullstack.",
    logo: "https://www.univ-gustave-eiffel.fr/typo3conf/ext/eiffel/Resources/Public/images/logoRS-UGE.png",
    achievements: [
      "Partenariat avec l'UNESCO.",
    ],
    major: true
  }
];

// Utilisation dans un composant parent
<EducationCard education={education[0]} />;




const skills = [
  {
    category: "Langages de Programmation",
    items: [
      "React", "TypeScript", "Flutter","Dart", "Symfony", "Python", "HTML", "CSS", 
      "JavaScript", "PHP", "Java", "C", "Cs",  "Bash", "Lua"
    ]
  },
  {
    category: "Systèmes & Logiciels",
    items: [
      "MySQL", "PostgreSQL", "Bootstrap","Tailwind", "Linux", "Git", "Github",
       "Postman",  "Figma", , "mongodb", "Aws", "Unity", "Matlab"
    ]
  },
  {
    category: "Certifications",
    items: ["TOEIC (B2/C1)"]
  }
];


const interests = [
  { icon: "⚛️", text: "Théories Scientifiques et Découvertes" },
  { icon: "₿", text: "Cryptomonnaies & Blockchain (BTC, ETH, XRP, CHZ...)" },
  { icon: "🔧", text: "Hardware / Software" },
  { icon: "⚽", text: "Football" },
  { icon: "🚴‍♂️", text: "Vélo" },
  { icon: "🎷", text: "Musique (Jazz, Chill, Hip Hop)" },
  { icon: "✈️", text: "Voyages (Londres, Dubaï, Istanbul...)" }
];

const merits = [
  { description: "Chef de projet de la conception d'un site Web en partenariat avec l'UNESCO." },
  { description: "Major de promotion en BUT Informatique." },
  { description: "Participant au concours national de Mathématiques des lycéens." }
];


const companies = [
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" },
  { name: "Crédit Agricole", logo: "https://logo-marque.com/wp-content/uploads/2021/03/Credit-Agricole-Logo.png" },
  { name: "Société Générale", logo: "https://www.gide.com/sites/default/files/societe-generale-logo_2.png" },
  { name: "Ministère de l'Économie et des Finances", logo: "https://exag.fr/wp-content/uploads/2020/11/Logo_Ministe%CC%80re_de_le%CC%81conomie_et_des_finances_2020.png" },
  { name: "Safran", logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/5/5f/Safran_-_logo_2016.png/1200px-Safran_-_logo_2016.png" },
  { name: "Enedis", logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/7/77/Logo_enedis_header.png/1200px-Logo_enedis_header.png" },
  { name: "Thales", logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/4e/Logo_Thales.svg/1024px-Logo_Thales.svg.png" },
  { name: "Renault", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Renault_2021_Text.svg" },
];


export const DevHomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <ThemeToggle />
      
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <img
            src="https://berachem.dev/assets/img/moi_bg_navy.png"
            alt="Berachem Markria"
            className="w-48 h-48 rounded-full mx-auto mb-8 shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <h1 className="text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            Berachem MARKRIA
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Lead Software Engineer apprenti & Passionné de développement
          </p>
          <div className="flex justify-center space-x-4">
            <a href="mailto:berachem.markria@gmail.com" className="hover:scale-110 transition-transform">
              <Mail className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </a>
            <a href="tel:+33629161164" className="hover:scale-110 transition-transform">
              <Phone className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <Github className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <Linkedin className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </a>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* About Section */}
        <Section title="À propos">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transform hover:scale-[1.02] transition-transform duration-300">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Bonjour ! Je m'appelle Berachem Markria, j'ai 21 ans et je suis ingénieur apprenti en informatique. 
              Passionné par le développement logiciel, je me spécialise dans la création d'applications web modernes 
              et performantes.
            </p>
          </div>
        </Section>

        {/* Projects Section */}
        <Section title="Projets">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>

        {/* Experience Section */}
        <Section title="Expérience Professionnelle">
          <div className="space-y-8">
            {experiences.map((experience) => (
              <ExperienceCard key={experience.company} experience={experience} />
            ))}
          </div>
        </Section>

        {/* Education Section */}
        <Section title="Formation">
          <div className="space-y-8">
            {education.map((edu) => (
              <EducationCard key={edu.school} education={edu} />
            ))}
          </div>
        </Section>

        {/* Skills Section */}
        <Section title="Compétences">
          <SkillSection skills={skills} />
        </Section>

        {/* Interests Section */}
        <Section title="Intérêts">
          <InterestSection interests={interests} />
        </Section>

        {/* Merits Section */}
        <Section title="Mérites">
          <MeritSection merits={merits} />
        </Section>

        {/* Companies Section */}
        <Section title="Entreprises intéressées">
          <CompanySection companies={companies} />
        </Section>
      </div>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Fait avec ❤️ par Berachem MARKRIA
          </p>
        </div>
      </footer>
    </div>
  );
};