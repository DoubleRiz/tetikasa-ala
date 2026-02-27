
import React from 'react';
import { Icons, Dividers } from '../constants';

interface ActionCardProps {
  title: string;
  category: string;
  description: string;
  img: string;
  color: string;
  dark: boolean;
  medallion?: React.ReactNode;
}

const ActionCard = ({ title, category, description, img, color, dark, medallion }: ActionCardProps) => (
  <div className={`relative group overflow-hidden bg-white min-h-[580px] flex flex-col justify-end p-10 md:p-14 transition-all duration-500 hover:translate-x-2 hover:translate-y-2 border-[var(--ink)]`}>
    <div className="absolute inset-0 border-[3px] border-[var(--ink)] pointer-events-none z-40 ink-bleed opacity-100 mix-blend-normal"></div>
    <div className="absolute inset-4 opacity-10 group-hover:opacity-30 transition-all duration-700 overflow-hidden grayscale contrast-125 saturate-0">
      <img src={img} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" alt={title} />
    </div>
    <div className={`absolute inset-0 opacity-0 group-hover:opacity-90 transition-opacity duration-500 ${color}`}></div>
    <div className="absolute top-10 right-10 w-24 h-24 md:w-32 md:h-32 bg-white rounded-full border-[3px] border-[var(--ink)] shadow-xl z-20 flex items-center justify-center transition-transform group-hover:rotate-[-10deg] ink-bleed">
      {medallion}
    </div>
    <div className="relative z-10 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
      <div className={`inline-block px-4 py-1 font-stamped text-xs uppercase mb-6 border-[3px] border-[var(--ink)] bg-white text-[var(--ink)] font-black ink-bleed`}>
        {category}
      </div>
      <h3 className="text-6xl md:text-7xl font-black uppercase leading-[0.85] mb-8 font-display group-hover:text-white transition-colors tracking-tighter ink-bleed break-words max-w-full">
        {title}
      </h3>
      <p className={`font-stamped text-base md:text-lg leading-snug transition-colors opacity-0 group-hover:opacity-100 italic font-bold max-w-[90%] mb-8 ${dark ? 'text-white' : 'text-[var(--ink)]'}`}>
        {description}
      </p>
    </div>
  </div>
);

const SectionActions: React.FC = () => {
  const actions = [
    {
      title: "Lovain-Jafy",
      category: "Agroécologie",
      description: "Lovain-Jafy est le projet pilote de notre association Ala. Le cœur de cette entreprise est d'accompagner 110 familles de la commune d'Ambohimanga pour les introduire à l'agroécologie.",
      img: "https://images.unsplash.com/photo-1592150621344-c792307f3a2c?auto=format&fit=crop&q=80",
      color: "bg-[var(--forest)]",
      dark: true,
      medallion: <div className="w-16 h-16 text-[var(--forest)]"><Icons.Sprout /></div>
    },
    {
      title: "Rallye Mille Graines",
      category: "Pédagogie",
      description: "Ala a eu le plaisir de concevoir entièrement le \"Rallye des Mille Graines\", un jeu de piste franco-malgache sur le thème de l'alimentation/agriculture à Madagascar pour 155 élèves.",
      img: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80",
      color: "bg-[var(--neon-pink)]",
      dark: true,
      medallion: <div className="w-16 h-16 text-[var(--neon-pink)]"><Icons.Puzzle /></div>
    },
    {
      title: "Ranomafana",
      category: "Agroécologie",
      description: "Développer une forêt nourricière de several thousands d'arbres avec un objectif de 100 000 arbres sur 3.6 hectares. Revaloriser les techniques agricoles malagasy.",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80",
      color: "bg-[var(--forest-pastel)]",
      dark: false,
      medallion: <div className="w-16 h-16 text-[var(--forest)]"><Icons.LinoBananier /></div>
    },
    {
      title: "Festival Taombaovao",
      category: "Communauté",
      description: "Célébration du Nouvel An Malgache, un rendez-vous culturel majeur mêlant gastronomie, artisanat et solidarité entre la France et Madagascar.",
      img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80",
      color: "bg-[var(--bordeaux)]",
      dark: true,
      medallion: <div className="w-16 h-16 text-[var(--bordeaux)]"><Icons.Community /></div>
    }
  ];

  return (
    <section id="projets" className="py-48 bg-[#0B2B16] relative overflow-hidden torn-edge-top torn-edge-bottom">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="grid grid-cols-4 md:grid-cols-8 gap-20 p-20">
          {[...Array(40)].map((_, i) => (
             <div key={i} className={`w-16 h-16 text-white ${i % 3 === 0 ? 'rotate-12' : '-rotate-12'}`}>
               {i % 2 === 0 ? <Icons.Sprout /> : <Icons.LinoBananier />}
             </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1500px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[2px] bg-[var(--solar)]"></div>
              <span className="font-stamped text-sm md:text-lg uppercase tracking-[0.4em] text-white/50 font-black">Nos actions</span>
            </div>
            {/* Project title in yellow as requested */}
            <h2 className="text-8xl md:text-[11rem] font-black uppercase text-white leading-[0.8] font-display ink-bleed tracking-wide">
              Carnet de <br/> <span className="text-[var(--solar)] ink-bleed italic">Projets</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {actions.map((action, idx) => (
            <div key={idx} className="h-full">
              <ActionCard {...action} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionActions;
