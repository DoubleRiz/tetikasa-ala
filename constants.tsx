
import React from 'react';
import { Pillar, NewsItem } from './types';

export const Icons = {
  Logo: () => (
    <svg viewBox="0 0 450 350" className="w-full h-full" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M165.7 337.5H97.5L144.1 199.1L48.1 337.5H0L135.5 139.6L184.8 69.1L209.6 33.6H271.8L165.7 337.5Z" />
      <path d="M213.5 337.5V33.6H275.6V337.5H213.5Z" />
      <path d="M375.4 337.5C334.4 337.5 301.1 304.2 301.1 263.2C301.1 222.2 334.4 188.9 375.4 188.9C416.4 188.9 449.7 222.2 449.7 263.2C449.7 304.2 416.4 337.5 375.4 337.5ZM375.4 233.1C358.8 233.1 345.3 246.6 345.3 263.2C345.3 279.8 358.8 293.3 375.4 293.3C392 293.3 405.5 279.8 405.5 263.2C405.5 246.6 392 233.1 375.4 233.1Z" />
    </svg>
  ),
  AlaLogo: ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 540 240" className={className} fill="#0B2B16" xmlns="http://www.w3.org/2000/svg">
      <g>
        {/* Le 'A' - Large, élégant, géométrie pure */}
        <path d="M138 35L24 225H88L108 188H208L228 225H292L178 35H138ZM158 92L192 152H124L158 92Z" />
        
        {/* Le 'l' - Tronc robuste et vertical */}
        <path d="M275 35H327V225H275V35Z" />
        
        {/* Feuilles asymétriques - Dessinées avec précision */}
        {/* Feuille de gauche - Sprout supérieur */}
        <path d="M275 88C225 55 210 115 275 125L275 88Z" />
        {/* Feuille de droite - Sprout inférieur */}
        <path d="M327 108C385 85 405 155 327 165L327 108Z" />
        
        {/* Le 'a' - Bol circulaire parfait et jambage vertical */}
        <path d="M435 118C402 118 375 145 375 178C375 211 402 238 435 238C458 238 475 228 482 212V235H534V118H482V138C475 122 458 118 435 118ZM455 198C444 198 432 189 432 178C432 167 444 158 455 158C466 158 478 167 478 178C478 189 466 198 455 198Z" />
      </g>
    </svg>
  ),
  LinoPapaya: () => (
    <svg viewBox="0 0 150 250" className="w-full h-full">
      <path d="M68 245 L82 245 L78 70 Q75 60 72 70 Z" fill="var(--solar)" opacity="0.9" />
      <g stroke="var(--ink)" strokeWidth="0.8" opacity="0.15">
        {[80, 95, 110, 125, 140, 155, 170, 185, 200, 215, 230].map(y => (
          <path key={y} d={`M${73} ${y} Q75 ${y+1} ${77} ${y}`} fill="none" />
        ))}
      </g>
      <g fill="var(--forest)">
        {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
          <path key={deg} d="M75 75 Q100 30 130 60 Q105 70 75 80 Z" transform={`rotate(${deg}, 75, 75)`} opacity="0.8" />
        ))}
      </g>
      <g fill="var(--bordeaux)">
        <ellipse cx="75" cy="85" rx="8" ry="12" />
        <ellipse cx="68" cy="98" rx="7" ry="11" transform="rotate(15, 68, 98)" />
        <ellipse cx="82" cy="98" rx="7" ry="11" transform="rotate(-15, 82, 98)" />
        <ellipse cx="75" cy="112" rx="9" ry="14" />
      </g>
    </svg>
  ),
  LinoBaobabStylized: () => (
    <svg viewBox="0 0 150 250" className="w-full h-full">
      <path d="M45 240 Q60 120 65 70 L70 50 L80 50 L85 70 Q90 120 105 240 Z" fill="var(--forest)" />
      <g fill="none" stroke="var(--forest)" strokeWidth="6" strokeLinecap="round">
        <path d="M65 70 L40 50" />
        <path d="M75 55 L75 30" />
        <path d="M85 70 L110 50" />
      </g>
      <g fill="var(--bordeaux)">
        <path d="M15 50 Q35 20 60 50 Q35 65 15 50 Z" />
        <path d="M55 35 Q75 5 95 35 Q75 50 55 35 Z" />
        <path d="M90 50 Q115 20 135 50 Q115 65 90 50 Z" />
      </g>
    </svg>
  ),
  LinoRavinalaStylized: () => (
    <svg viewBox="0 0 200 250" className="w-full h-full">
      <path d="M85 245 L115 245 L110 130 Q100 120 90 130 Z" fill="var(--solar)" />
      <g fill="var(--bordeaux)">
        <path d="M80 145 Q100 115 120 145 L110 165 Q100 160 90 165 Z" fill="var(--solar)" stroke="var(--ink)" strokeWidth="1" />
        {[...Array(13)].map((_, i) => {
          const deg = -85 + (i * 14.1);
          return (
            <path 
              key={i} 
              d="M100 130 L95 15 L105 15 L105 130 Z" 
              transform={`rotate(${deg}, 100, 130)`}
              stroke="var(--ink)"
              strokeWidth="1.2"
              strokeOpacity="0.08"
            />
          );
        })}
      </g>
    </svg>
  ),
  LinoBananier: () => (
    <svg viewBox="0 0 150 250" className="w-full h-full">
      <path d="M55 245 Q75 240 70 180 Q65 120 72 40 L88 42 Q85 122 90 182 Q95 240 75 245 Z" fill="var(--neon-pink)" opacity="0.9" />
      <g fill="var(--forest)">
        <path d="M78 40 Q80 10 100 5 Q95 30 80 45 Z" />
        <path d="M75 40 Q75 10 55 5 Q60 30 75 45 Z" />
        <path d="M80 50 Q130 40 145 110 Q100 120 80 55 Z" />
        <path d="M70 50 Q20 40 5 110 Q50 120 70 55 Z" />
      </g>
      <g fill="var(--solar)">
        <path d="M78 60 Q85 85 80 110" stroke="var(--solar)" strokeWidth="4" fill="none" />
        <path d="M76 110 Q80 125 84 110 L80 135 Z" fill="var(--bordeaux)" />
      </g>
    </svg>
  ),
  LinoFlowerPink: () => (
    <svg viewBox="0 0 80 80" className="w-full h-full">
      <g fill="var(--neon-pink)">
         <circle cx="40" cy="40" r="12" />
         {[0, 60, 120, 180, 240, 300].map(deg => (
           <circle key={deg} cx="40" cy="18" r="10" transform={`rotate(${deg}, 40, 40)`} opacity="0.8" />
         ))}
      </g>
    </svg>
  ),
  FlagFR: () => (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 8 H14 V32 H4 Z" fill="#002395" />
      <path d="M14 8 H26 V32 H14 Z" fill="currentColor" />
      <path d="M26 8 H36 V32 H26 Z" fill="#ED2939" />
      <rect x="3" y="7" width="34" height="26" stroke="var(--ink)" strokeWidth="1" />
    </svg>
  ),
  FlagEN: () => (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="8" width="32" height="24" fill="#00247D" />
      <path d="M18 8 H22 V32 H18 Z M4 18 H36 V22 H4 Z" fill="#FFFFFF" />
      <path d="M19 8 H21 V32 H19 Z M4 19 H36 V21 H4 Z" fill="#CF142B" />
      <rect x="3" y="7" width="34" height="26" stroke="var(--ink)" strokeWidth="1" />
    </svg>
  ),
  FlagMG: () => (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="8" width="12" height="24" fill="currentColor" />
      <rect x="16" y="8" width="20" height="12" fill="#ED1C24" />
      <rect x="16" y="20" width="20" height="12" fill="#007E3A" />
      <rect x="3" y="7" width="34" height="26" stroke="var(--ink)" strokeWidth="1" />
    </svg>
  ),
  Bamboo: () => (
    <svg viewBox="0 0 100 150" className="w-full h-full" fill="currentColor">
      <rect x="45" y="10" width="10" height="30" rx="2" />
      <rect x="45" y="45" width="10" height="35" rx="2" />
      <rect x="45" y="85" width="10" height="40" rx="2" />
      <path d="M55 25 Q75 15 85 30 M45 60 Q25 50 15 65 M55 95 Q80 85 90 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  ),
  Bird: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="currentColor">
      <path d="M20 60 Q20 30 50 30 Q80 30 80 60 Q80 85 50 85 Q20 85 20 60 Z" />
      <path d="M80 60 L95 55 L90 65 Z" />
      <circle cx="40" cy="50" r="4" fill="white"/>
    </svg>
  ),
  Leaf: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="currentColor">
      <path d="M50 90 Q10 60 10 30 Q10 10 50 10 Q90 10 90 30 Q90 60 50 90 Z" />
      <path d="M50 90 L50 10" stroke="white" strokeWidth="2" opacity="0.4" />
    </svg>
  ),
  Ravinala: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="currentColor">
      <path d="M48 95 L52 95 L52 45 L48 45 Z" />
      <path d="M50 45 L90 15 M50 45 L10 15 M50 45 L80 25 M50 45 L20 25" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
    </svg>
  ),
  Zebu: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="currentColor">
      <path d="M20 60 Q20 30 40 30 Q50 15 60 30 Q80 30 80 60 Q80 85 50 85 Q20 85 20 60" />
      <path d="M45 15 L35 5 M55 15 L65 5" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <circle cx="50" cy="50" r="10" opacity="0.2" fill="white"/>
    </svg>
  ),
  Vanilla: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="currentColor">
      <path d="M30 10 L70 90 M70 10 L30 90" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
      <circle cx="50" cy="50" r="15" />
    </svg>
  ),
  Coffee: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="currentColor">
      <ellipse cx="50" cy="50" rx="30" ry="45" />
      <path d="M50 5 C 20 40, 80 60, 50 95" stroke="white" strokeWidth="4" fill="none" />
    </svg>
  ),
  Hut: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="currentColor">
      <path d="M10 90 L90 90 L90 50 L50 10 L10 50 Z" />
      <rect x="40" y="60" width="20" height="30" fill="white" />
    </svg>
  ),
  Fish: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="currentColor">
      <path d="M10 50 Q30 20 70 30 L90 10 L90 90 L70 70 Q30 80 10 50" />
      <circle cx="30" cy="45" r="3" fill="white" />
    </svg>
  ),
  Tools: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="currentColor">
      <rect x="45" y="10" width="10" height="60" />
      <path d="M20 70 L80 70 L70 90 L30 90 Z" />
    </svg>
  ),
  Moon: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="currentColor">
      <path d="M50 10 A 40 40 0 1 0 90 50 A 30 30 0 1 1 50 10" />
    </svg>
  ),
  Sun: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="currentColor">
      <circle cx="50" cy="50" r="20" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
        <rect key={deg} x="47" y="5" width="6" height="15" transform={`rotate(${deg}, 50, 50)`} rx="3" />
      ))}
    </svg>
  ),
  MapMadagascar: () => (
    <svg viewBox="0 0 100 150" className="w-full h-full" fill="currentColor">
      <path d="M40 10 L55 20 L65 50 L60 80 L50 110 L40 130 L30 110 L25 80 L30 50 L35 20 Z" />
    </svg>
  ),
  MapFrance: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="currentColor">
      <path d="M50 5 L85 25 L85 75 L50 95 L15 75 L15 25 Z" />
    </svg>
  )
};

export const Dividers = {
  Wave: ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className={`w-full h-24 pointer-events-none fill-current ${className}`}>
      <path d="M0 0 C 300 120, 900 120, 1200 0 V 120 H 0 Z" />
    </svg>
  ),
  Dots: ({ className = "" }: { className?: string }) => (
    <div className={`flex justify-center gap-8 py-8 ${className}`}>
      {[...Array(5)].map((_, i) => (
        <div key={i} className="w-3 h-3 rounded-full bg-current opacity-30"></div>
      ))}
    </div>
  ),
  StampTrail: ({ className = "" }: { className?: string }) => (
    <div className={`flex justify-around items-center w-full py-20 pointer-events-none opacity-10 ${className}`}>
       {[Icons.Leaf, Icons.Vanilla, Icons.Bird, Icons.Coffee, Icons.Fish].map((Icon, i) => (
         <div key={i} className="w-16 h-16 transform rotate-[15deg]">
           <Icon />
         </div>
       ))}
    </div>
  )
};

export const PILLARS: Pillar[] = [
  {
    title: "Agro-écologie",
    description: "Soutenir l'autonomie des agriculteurs par des méthodes respectueuses du sol malgache.",
    icon: <Icons.Ravinala />,
  },
  {
    title: "Transmission",
    description: "Eduquer les plus jeunes aux enjeux de la forêt via des outils ludiques.",
    icon: <Icons.Bamboo />,
  },
  {
    title: "Culture Viva",
    description: "Célébrer le patrimoine et l'artisanat malgache à travers des événements solidaires.",
    icon: <Icons.Zebu />,
  },
];

export const NEWS: NewsItem[] = [
  {
    id: '1',
    title: "Le Taombaovao à Paris",
    date: "Mars 2024",
    location: 'France',
    excerpt: "Célébration du Nouvel An Malgache : musique, gastronomie et partage.",
    content: "Le Taombaovao, ou Nouvel An Malgache, est bien plus qu'une simple fête : c'est un moment sacré de réconciliation et de partage. Cette année, Tetikasa ALA a orchestré une rencontre inoubliable au cœur de Paris. Entre les stands d'artisanat en raphia et les effluves de romazava, la diaspora et les curieux se sont retrouvés pour graver une nouvelle page de notre histoire commune. L'événement a permis de récolter des fonds cruciaux pour nos projets de reforestation en Analamanga, prouvant une fois de plus que la culture est le terreau de la solidarité.",
    iconKey: 'Bird'
  },
  {
    id: '2',
    title: "Restauration Forestière",
    date: "Janvier 2024",
    location: 'Madagascar',
    excerpt: "Lancement de nouveaux corridors forestiers pour protéger la biodiversité endémique.",
    content: "Face à l'urgence climatique, nos équipes sur le terrain à Madagascar n'ont pas chômé. En ce début d'année, nous avons lancé officiellement le projet 'Corridors de Vie'. L'objectif est de relier les fragments de forêt primaire par des zones de reboisement gérées par les communautés locales. Plus de 5000 jeunes plants de variétés endémiques ont déjà été mis en terre dans nos pépinières de brousse. Ce projet ne se contente pas de planter des arbres : il forme les villageois à une agriculture durable qui respecte et enrichit le sol malgache.",
    iconKey: 'Leaf'
  },
  {
    id: '3',
    title: "Escape Game ALA",
    date: "Décembre 2023",
    location: 'France',
    excerpt: "Succès de nos ateliers pédagogiques sur la biodiversité en milieu scolaire.",
    content: "L'éducation est la clé d'un avenir vert. Notre Escape Game itinérant 'Le Secret de l'Arbre' a parcouru plusieurs établissements scolaires en France avec un succès retentissant. En transformant la sensibilisation en aventure sensorielle, nous avons captivé l'imaginaire de plus de 800 élèves. Les enfants doivent résoudre des énigmes basées sur les sons de la forêt et les textures des graines malgaches pour sauver leur totem. Une manière ludique et puissante de transmettre les valeurs de protection de la nature dès le plus âge.",
    iconKey: 'Bamboo'
  }
];
