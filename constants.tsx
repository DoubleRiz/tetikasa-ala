
import React from 'react';
import { Pillar, NewsItem } from './types';

export const Icons = {
  Logo: () => (
    <svg viewBox="0 0 450 150" className="w-full h-full" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 20 L20 120 L50 120 L60 90 L100 90 L110 120 L140 120 L100 20 Z M80 35 L95 80 L65 80 Z" />
      <path d="M150 20 L150 120 L210 120 L210 95 L180 95 L180 20 Z" />
      <path d="M280 20 L240 120 L270 120 L280 90 L320 90 L330 120 L360 120 L320 20 Z M300 35 L315 80 L285 80 Z" />
      <path d="M380 20 C360 40 360 80 380 120 C420 120 420 40 380 20 Z M380 40 C395 50 395 90 380 100 C375 90 375 50 380 40 Z" fill="var(--solar)" />
    </svg>
  ),
  Vanilla: () => (
    <svg viewBox="0 0 100 100" fill="currentColor">
      <path d="M50 80 Q60 50 50 20 Q40 50 50 80 Z" />
      <path d="M45 40 Q50 35 55 40" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  Coffee: () => (
    <svg viewBox="0 0 100 100" fill="currentColor">
      <path d="M30 50 A20 25 0 1 0 70 50 A20 25 0 1 0 30 50 Z" />
      <path d="M50 25 L50 75" stroke="currentColor" strokeWidth="2" opacity="0.3" />
    </svg>
  ),
  Manioc: () => (
    <svg viewBox="0 0 100 100" fill="currentColor">
      <path d="M50 90 L50 10 M50 10 L80 40 M50 10 L20 40 M50 50 L90 60 M50 50 L10 60" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    </svg>
  ),
  Ananas: () => (
    <svg viewBox="0 0 100 100" fill="currentColor">
      <ellipse cx="50" cy="65" rx="25" ry="30" />
      <path d="M50 35 L40 10 L50 20 L60 10 Z" />
    </svg>
  ),
  Gingembre: () => (
    <svg viewBox="0 0 100 100" fill="currentColor">
      <path d="M30 70 Q20 50 40 40 Q50 20 70 30 Q90 50 70 70 Q50 85 30 70 Z" />
    </svg>
  ),
  LinoPapaya: () => (
    <svg viewBox="0 0 150 250" className="w-full h-full">
      <path d="M68 245 L82 245 L78 70 Q75 60 72 70 Z" fill="var(--solar)" />
      <g stroke="var(--ink)" strokeWidth="0.8" opacity="0.15">
        {[80, 95, 110, 125, 140, 155, 170, 185, 200, 215, 230].map(y => (
          <path key={y} d={`M${73} ${y} Q${75} ${y+1} ${77} ${y}`} fill="none" />
        ))}
      </g>
      <g fill="var(--forest)">
        {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
          <path key={deg} d="M75 75 Q100 30 130 60 Q105 70 75 80 Z" transform={`rotate(${deg}, 75, 75)`} opacity="0.9" />
        ))}
      </g>
      <g fill="var(--bordeaux)">
        <circle cx="68" cy="85" r="8" />
        <circle cx="82" cy="88" r="7" />
        <circle cx="75" cy="95" r="9" />
      </g>
    </svg>
  ),
  LinoBaobabStylized: () => (
    <svg viewBox="0 0 200 250" className="w-full h-full">
      {/* Trunk with artisanal streaks */}
      <path d="M70 240 L130 240 Q135 150 120 80 L110 60 L90 60 L80 80 Q65 150 70 240 Z" fill="var(--forest)" />
      <g stroke="var(--paper)" strokeWidth="0.8" opacity="0.15">
        {[100, 125, 150, 175, 200, 225].map(y => (
          <path key={y} d={`M${85} ${y} Q${100} ${y+1} ${115} ${y}`} fill="none" />
        ))}
      </g>
      {/* Wavy Branches and Leaf Clouds */}
      <g fill="none" stroke="var(--forest)" strokeWidth="8" strokeLinecap="round">
        <path d="M100 65 Q110 40 140 30" />
        <path d="M100 65 Q90 40 60 30" />
        <path d="M100 75 Q130 60 160 70" />
        <path d="M100 75 Q70 60 40 70" />
      </g>
      <g fill="var(--forest-pastel)">
        <path d="M140 30 Q160 10 180 30 Q160 50 140 30 Z" />
        <path d="M60 30 Q40 10 20 30 Q40 50 60 30 Z" />
        <path d="M160 70 Q180 50 200 70 Q180 90 160 70 Z" />
        <path d="M40 70 Q20 50 0 70 Q20 90 40 70 Z" />
        <path d="M100 25 Q110 5 120 25 Q110 45 100 25 Z" transform="translate(-10, 0)" />
      </g>
    </svg>
  ),
  LinoRavinalaStylized: () => (
    <svg viewBox="0 0 250 250" className="w-full h-full">
      <path d="M115 245 L135 245 L130 150 Q125 140 120 150 Z" fill="var(--solar)" />
      <g stroke="var(--ink)" strokeWidth="0.8" opacity="0.1">
        {[170, 190, 210, 230].map(y => (
          <path key={y} d={`M122 ${y} Q125 ${y+1} ${128} ${y}`} fill="none" />
        ))}
      </g>
      <g>
        {[...Array(11)].map((_, i) => {
          const deg = -75 + (i * 15);
          return (
            <path 
              key={i} 
              d="M125 150 L118 20 Q125 5 132 20 L125 150 Z" 
              transform={`rotate(${deg}, 125, 150)`}
              fill="var(--forest)"
              fillOpacity="0.9"
            />
          );
        })}
      </g>
    </svg>
  ),
  LinoBananier: () => (
    <svg viewBox="0 0 150 250" className="w-full h-full">
      <path d="M70 245 Q80 230 75 180 L75 80" stroke="var(--neon-pink)" strokeWidth="10" fill="none" />
      <g stroke="var(--ink)" strokeWidth="0.8" opacity="0.15">
        {[100, 130, 160, 190, 220].map(y => (
          <path key={y} d={`M72 ${y} L78 ${y+2}`} fill="none" />
        ))}
      </g>
      <g fill="var(--forest)" fillOpacity="0.9">
        <path d="M75 80 Q150 40 160 150 Q100 140 75 80" />
        <path d="M75 80 Q0 40 -10 150 Q50 140 75 80" />
        <path d="M75 95 Q130 110 120 200 Q80 180 75 95" />
        <path d="M75 95 Q20 110 30 200 Q70 180 75 95" />
      </g>
      {/* Real bunch of bananas (regime) */}
      <g transform="translate(75, 110)" fill="var(--solar)">
        <path d="M-10 0 Q-5 15 5 12 Q-5 12 -10 0 Z" transform="rotate(-20)" />
        <path d="M-10 0 Q-5 15 5 12 Q-5 12 -10 0 Z" transform="rotate(0)" />
        <path d="M-10 0 Q-5 15 5 12 Q-5 12 -10 0 Z" transform="rotate(20)" />
        <path d="M-8 8 Q-3 23 7 20 Q-3 20 -8 8 Z" transform="rotate(-10)" />
        <path d="M-8 8 Q-3 23 7 20 Q-3 20 -8 8 Z" transform="rotate(10)" />
      </g>
    </svg>
  ),
  Puzzle: () => (
    <svg viewBox="0 0 100 100" fill="currentColor">
      <path d="M30 20 H45 Q50 10 55 20 H70 V35 Q80 40 70 45 V60 H55 Q50 70 45 60 H30 V45 Q20 40 30 35 V20 Z" />
    </svg>
  ),
  Community: () => (
    <svg viewBox="0 0 100 100" fill="currentColor">
      <circle cx="50" cy="30" r="15" />
      <path d="M20 85 Q20 60 50 60 Q80 60 80 85 Z" />
      <circle cx="20" cy="45" r="10" />
      <path d="M5 90 Q5 75 20 75 Q35 75 35 90 Z" />
      <circle cx="80" cy="45" r="10" />
      <path d="M65 90 Q65 75 80 75 Q95 75 95 90 Z" />
    </svg>
  ),
  Sprout: () => (
    <svg viewBox="0 0 100 100" fill="currentColor">
      <path d="M50 90 V40" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
      <path d="M50 40 C70 10 100 40 50 45 C0 40 30 10 50 40" />
    </svg>
  ),
  Seed: () => (
    <svg viewBox="0 0 100 100" fill="currentColor">
      <path d="M50 85 Q20 85 20 50 Q20 15 50 15 Q80 15 80 50 Q80 85 50 85 Z" />
      <path d="M50 25 L50 40 M55 30 L65 35" stroke="var(--paper)" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
    </svg>
  ),
  FlagFR: () => (
    <svg viewBox="0 0 40 30" xmlns="http://www.w3.org/2000/svg">
      <rect width="13.3" height="30" fill="#002395" />
      <rect x="13.3" width="13.4" height="30" fill="#FFFFFF" />
      <rect x="26.7" width="13.3" height="30" fill="#ED2939" />
    </svg>
  ),
  FlagEN: () => (
    <svg viewBox="0 0 40 30" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="30" fill="#012169" />
      <path d="M0,0 L40,30 M40,0 L0,30" stroke="#FFFFFF" strokeWidth="4" />
      <path d="M0,0 L40,30 M40,0 L0,30" stroke="#C8102E" strokeWidth="2" />
      <path d="M20,0 L20,30 M0,15 L40,15" stroke="#FFFFFF" strokeWidth="6" />
      <path d="M20,0 L20,30 M0,15 L40,15" stroke="#C8102E" strokeWidth="4" />
    </svg>
  ),
  FlagMG: () => (
    <svg viewBox="0 0 40 30" xmlns="http://www.w3.org/2000/svg">
      <rect width="13.3" height="30" fill="#FFFFFF" />
      <rect x="13.3" width="26.7" height="15" fill="#EF3340" />
      <rect x="13.3" y="15" width="26.7" height="15" fill="#009739" />
    </svg>
  ),
  MapMadagascar: () => (
    <svg viewBox="0 0 100 150" fill="currentColor">
       <path d="M47.7,4.4c3.4,4.6,7.4,12.5,9,16.8c1.6,4.3,3,9.5,4,13.8c1,4.3,1.6,11.5,1.2,16.8c-0.4,5.3-2.6,12.7-5.1,17.4 c-2.5,4.7-6,8.6-8.3,13.6c-2.3,5-3.3,12.3-3.6,18.7c-0.3,6.4,0,14,2.5,19.2c2.5,5.2,7.2,10.2,7.4,13.4c0.2,3.2-4.1,4.6-9.1,4.9 c-5,0.3-10.7-1-15.1-4c-4.4-3-7.5-7.7-9.4-14c-1.9-6.3-2.4-14.3-1-20.9c1.4-6.6,5.1-13.8,7.3-19.8c2.2-6,2.9-10.6,2.2-16.1 c-0.7-5.5-2.8-12.2-2.9-19c-0.1-6.8,1.6-13.8,4.1-19.5c2.5-5.7,5.6-11,8.1-15c2.5-4,4.5-6.7,6.8-9C41,0.7,44.3-0.2,47.7,4.4z" />
    </svg>
  ),
  MapFrance: () => (
    <svg viewBox="0 0 100 100" fill="currentColor">
      <path d="M50,4.3l15,4.7l17,14.7l4,19.7l-9,26.7l-22.3,19.7l-30.7-10l-16.7-29.3l-2.7-23.7l15.3-15l16-7.3L50,4.3z" />
    </svg>
  ),
  Facebook: () => (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
  ),
  Instagram: () => (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.607.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.607 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.245-2.242-1.308-3.607-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.607-1.308 1.266-.058-1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.366.062-2.633.332-3.608 1.308-.975.975-1.245 2.242-1.308 3.607-.058 1.266-.072 1.646-.072 4.85s.014 3.584.072 4.85c.062 1.366.332-2.633 1.308 3.608.975.975 2.242 1.245 3.607 1.308 1.266.058 1.646.072 4.85.072s3.584-.014 4.85-.072c1.366-.062 2.633-.332 3.608-1.308.975-.975 1.245-2.242 1.308-3.607.058-1.266.072-1.646.072-4.85s-.014-3.584-.072-4.85c-.062-1.366-.332-2.633-1.308-3.608-.975-.975-2.242-1.245-3.607-1.308-1.266-.058-1.646-.072-4.85-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
  ),
  Linkedin: () => (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
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
       {[Icons.Vanilla, Icons.Coffee, Icons.Manioc, Icons.Ananas, Icons.Gingembre].map((Icon, i) => (
         <div key={i} className="w-16 h-16 transform rotate-[15deg]">
           <Icon />
         </div>
       ))}
    </div>
  ),
  Forest: ({ className = "" }: { className?: string }) => (
    <div className={`absolute inset-0 z-0 pointer-events-none opacity-5 ${className}`}>
      <svg width="100%" height="100%" viewBox="0 0 1000 400" preserveAspectRatio="none">
        {/* Layered hand-drawn forest silhouette */}
        {[...Array(12)].map((_, i) => (
          <path 
            key={i} 
            d={`M${i * 100 - 50} 400 Q${i * 100 + 50} 50 ${i * 100 + 150} 400 Z`} 
            fill="currentColor" 
            opacity={0.3}
          />
        ))}
        {[...Array(8)].map((_, i) => (
          <path 
            key={i} 
            d={`M${i * 150} 400 Q${i * 150 + 75} 150 ${i * 150 + 150} 400 Z`} 
            fill="currentColor" 
            opacity={0.5}
          />
        ))}
      </svg>
    </div>
  ),
  Fields: ({ className = "" }: { className?: string }) => (
    <div className={`absolute inset-0 z-0 pointer-events-none opacity-10 ${className}`}>
      <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        {[...Array(40)].map((_, i) => (
          <path 
            key={i} 
            d={`M0 ${i * 25} Q500 ${i * 25 + 10} 1000 ${i * 25}`} 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1" 
          />
        ))}
      </svg>
    </div>
  )
};

export const PILLARS: Pillar[] = [
  {
    title: "Agroécologie",
    description: "Soutenir l'autonomie des agriculteur.rice.s par des méthodes respectueuses du sol et de la biodiversité malgaches.",
    icon: <Icons.LinoBananier />,
  },
  {
    title: "Pédagogie",
    description: "Sensibiliser la diaspora et le grand public aux enjeux du changement climatique et de l'agroécologie à Madagascar à travers des formats ludiques.",
    icon: <Icons.Puzzle />,
  },
  {
    title: "Communauté",
    description: "Célébrer le patrimoine malgache à travers des événements de fête, de partage et de coopération solidaires.",
    icon: <Icons.Community />,
  },
];

export const NEWS: NewsItem[] = [
  {
    id: '1',
    title: "Festival Taombaovao",
    date: "Mars 2024",
    location: 'France',
    excerpt: "Célébration du Nouvel An Malgache : musique, gastronomie et partage.",
    content: "Le Taombaovao, ou Nouvel An Malgache, est bien plus qu'une simple fête : c'est un moment sacré de réconciliation et de partage. Cette année, Tetikasa ALA a orchestré une rencontre inoubliable au cœur de Paris.",
    iconKey: 'Community'
  },
  {
    id: '2',
    title: "Projet Lovain-Jafy",
    date: "Janvier 2024",
    location: 'Madagascar',
    excerpt: "Accompagnement de 110 familles d'Ambohimanga vers l'agroécologie.",
    content: "Lovain-Jafy est le projet pilote de notre association Ala. Le cœur de cette entreprise est d'accompagner 110 familles de la commune d'Ambohimanga pour les introduire à l'agroécologie.",
    iconKey: 'Sprout'
  },
  {
    id: '3',
    title: "Rallye des Mille Graines",
    date: "Décembre 2023",
    location: 'France',
    excerpt: "Un jeu de piste pédagogique pour 155 élèves sur l'agriculture.",
    content: "Ala a eu le plaisir de concevoir entièrement le 'Rallye des Mille Graines', un jeu de piste franco-malgache sur le thème de l'alimentation et de l'agriculture à Madagascar.",
    iconKey: 'Puzzle'
  }
];
