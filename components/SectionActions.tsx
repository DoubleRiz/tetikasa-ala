
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
    {/* Subtle Ink Bleed Border - Separate div for the black contour effect */}
    <div className="absolute inset-0 border-[3px] border-[var(--ink)] pointer-events-none z-40 ink-bleed opacity-100 mix-blend-normal"></div>
    
    {/* Image Container */}
    <div className="absolute inset-4 opacity-10 group-hover:opacity-30 transition-all duration-700 overflow-hidden grayscale contrast-125 saturate-0">
      <img src={img} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" alt={title} />
    </div>

    {/* Dynamic Color Overlay on Hover */}
    <div className={`absolute inset-0 opacity-0 group-hover:opacity-90 transition-opacity duration-500 ${color}`}></div>

    <div className="absolute top-10 right-10 w-24 h-24 md:w-32 md:h-32 bg-white rounded-full border-[3px] border-[var(--ink)] shadow-xl z-20 flex items-center justify-center transition-transform group-hover:rotate-[-10deg] ink-bleed">
      {medallion}
    </div>
    
    {/* Content */}
    <div className="relative z-10 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
      <div className={`inline-block px-4 py-1 font-stamped text-xs uppercase mb-6 border-[3px] border-[var(--ink)] bg-white text-[var(--ink)] font-black ink-bleed`}>
        {category}
      </div>
      <h3 className="text-7xl md:text-8xl font-black uppercase leading-[0.85] mb-8 font-display group-hover:text-white transition-colors tracking-tighter ink-bleed">
        {title}
      </h3>
      <p className={`font-stamped text-base md:text-lg leading-snug transition-colors opacity-0 group-hover:opacity-100 italic font-bold max-w-[90%] mb-8 ${dark ? 'text-white' : 'text-[var(--ink)]'}`}>
        {description}
      </p>
      <button className={`px-8 py-4 border-[3px] font-display uppercase tracking-widest text-sm transition-all opacity-0 group-hover:opacity-100 ink-bleed ${dark ? 'border-white text-white hover:bg-white hover:text-[var(--ink)]' : 'border-[var(--ink)] text-[var(--ink)] hover:bg-[var(--ink)] hover:text-white'}`}>
        En savoir plus
      </button>
    </div>
  </div>
);

const SectionActions: React.FC = () => {
  const actions = [
    {
      title: "Pépinières",
      category: "Agroforesterie",
      description: "Au cœur de l'Analamanga, nous bâtissons des pépinières vivantes où croissent Ravinala et espèces endémiques. Ce réseau de corridors forestiers restaure l'équilibre vital entre l'homme et la terre.",
      img: "https://images.unsplash.com/photo-1592150621344-c792307f3a2c?auto=format&fit=crop&q=80",
      color: "bg-[var(--forest)]",
      dark: true,
      medallion: <div className="w-16 h-16 text-[var(--forest)]"><Icons.Leaf /></div>
    },
    {
      title: "Escape Game",
      category: "Pédagogie",
      description: "\"Le Secret de l'Arbre\" : une expérience immersive et sensorielle pour sensibiliser les jeunes générations aux enjeux de la biodiversité.",
      img: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80",
      color: "bg-[var(--solar)]",
      dark: false,
      medallion: <div className="w-16 h-16 text-[var(--forest)]"><Icons.Bamboo /></div>
    },
    {
      title: "Taombaovao",
      category: "Patrimoine",
      description: "Célébration du Nouvel An Malgache, un rendez-vous culturel majeur mêlant gastronomie, artisanat et solidarité entre la France et Madagascar.",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80",
      color: "bg-[var(--bordeaux)]",
      dark: true,
      medallion: <div className="w-16 h-16 text-[var(--bordeaux)]"><Icons.Zebu /></div>
    }
  ];

  return (
    <section id="actions" className="py-48 bg-[#0a0a0a] relative overflow-hidden torn-edge-top torn-edge-bottom">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="grid grid-cols-4 md:grid-cols-8 gap-20 p-20">
          {[...Array(40)].map((_, i) => (
             <div key={i} className={`w-16 h-16 text-white ${i % 3 === 0 ? 'rotate-12' : '-rotate-12'}`}>
               {i % 2 === 0 ? <Icons.Logo /> : <Icons.Leaf />}
             </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1500px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[2px] bg-[var(--solar)]"></div>
              <span className="font-stamped text-sm md:text-lg uppercase tracking-[0.4em] text-white/50 font-black">Carnet de Projets</span>
            </div>
            <h2 className="text-8xl md:text-[11rem] font-black uppercase text-white leading-[0.8] font-display ink-bleed">
              L'Art de <br/> <span className="text-[var(--bordeaux)] ink-bleed italic">Transmettre</span>
            </h2>
          </div>
          <div className="bg-white/5 border-r-[12px] border-[var(--solar)] p-10 md:p-14 max-w-lg text-right">
            <p className="font-stamped text-xl md:text-2xl text-white/90 italic leading-relaxed font-bold">
              "Hazo tokana tsy mba ala" <br/>
              <span className="text-sm uppercase tracking-widest opacity-40 block mt-4 not-italic">Un seul arbre ne fait pas une forêt.</span>
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {actions.map((action) => {
            const isAgriculture = action.title === "Pépinières";
            return (
              <div key={action.title} className={isAgriculture ? "lambahoany-border ink-bleed bg-[var(--forest)]/10 p-2" : ""}>
                <ActionCard {...action} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionActions;
