export interface Project {
  videoUrl?: string;
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  imageUrl?: string;
  gallery?: string[];
  role?: string;
  duration?: string;
  challenges?: string[];
  outcomes?: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
  logo?: string ;
  isNew?: boolean;
}

export interface Education {
  logo?: string;
  school: string;
  degree: string;
  period: string;
  description: string;
  achievements?: string[];
  major? : boolean;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Interest {
  icon: string;
  text: string;
}

export interface Merit {
  description: string;
}

export interface Company {
  name: string;
  logo: string;
}

export interface CryptoProject {
  icon: string;
  name: string;
  symbol: string;
  description: string;
}