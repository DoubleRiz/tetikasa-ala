
import React from 'react';
import { Icons } from '../constants';

const Impact: React.FC = () => {
  const stats = [
    { label: "Arbres Plantés", value: "12,400+", color: "bg-[var(--forest)]", textColor: "text-white", icon: <Icons.Sprout /> },
    { label: "Bénévoles", value: "85", color: "bg-[var(--neon-pink)]", textColor: "text-white", icon: <Icons.Sprout /> },
    { label: "Partenaires", value: "450", color: "bg-[var(--bordeaux)]", textColor: "text-white", icon: <Icons.Community /> },
    { label: "Sensibilisation", value: "3,500", color: "bg-[var(--solar)]", textColor: "text-[var(--ink)]", icon: <Icons.Puzzle /> },
  ];

  return (
    <section id="quisommesnous" className="py-56 px-6 bg-white text-[var(--ink)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-32 items-center">
          <div className="lg:w-1/2 space-y-12">
            <div className="flex items-center gap-6">
              <div className="inline-block border-l-8 border-[var(--forest)] px-10 py-4 font-stamped text-xl uppercase tracking-widest text-[var(--forest)] font-black">
                Nos racines
              </div>
            </div>
            <div>
              <h2 className="text-8xl md:text-[11rem] font-black uppercase leading-[0.75] ink-bleed text-[var(--forest)] tracking-wide mb-8">Qui <br/> sommes- <br/> <span className="text-[var(--bordeaux)]">nous ?</span></h2>
              <p className="text-[var(--bordeaux)] font-black uppercase tracking-widest text-xl mb-12 max-w-lg">
                "L'écosystème des acteurs du développement durable et agroécologique de Madagascar"
              </p>
            </div>
            
            <div className="space-y-6 font-stamped text-lg leading-relaxed opacity-85">
              <p className="border-l-4 border-[var(--solar)] pl-6 italic font-bold">
                Tetikasa Ala a été fondé en 2019. Notre association a pour vision de redonner de la valeur aux véritables richesses de Madagascar : sa Nature et son peuple.
              </p>
              <p>
                Notre association a pour ambition de développer un écosystème de vie sur toute l'Ile de Madagascar en passant par un développement vert, bénéfique à l'autosuffisance de l'île et de ses habitants.
              </p>
              
              <div className="mt-12 bg-[var(--forest)] text-white p-8 lino-block rotate-[-1deg] shadow-lg">
                <p className="font-display text-4xl font-black uppercase tracking-wider mb-2">"Hazo tokana tsy mba ala"</p>
                <p className="font-stamped text-sm italic opacity-80 uppercase tracking-widest font-black">Un seul arbre ne fait pas la forêt</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full space-y-12">
            <div className="bg-[var(--forest-pastel)] p-12 border-[3px] border-[var(--ink)] shadow-[15px_15px_0px_var(--forest)] lino-block rotate-1">
              <h3 className="font-display text-5xl font-black uppercase mb-8 tracking-wider">Présence</h3>
              <div className="grid grid-cols-2 gap-10">
                <div className="flex flex-col items-center text-center group">
                  <div className="w-20 h-16 mb-4 group-hover:scale-110 transition-transform"><Icons.FlagFR /></div>
                  <span className="font-display font-black uppercase text-xl">France</span>
                </div>
                <div className="flex flex-col items-center text-center group">
                  <div className="w-20 h-16 mb-4 group-hover:scale-110 transition-transform"><Icons.FlagMG /></div>
                  <span className="font-display font-black uppercase text-xl">Madagascar</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-12">
              {stats.map((stat, idx) => (
                <div key={stat.label} className={`${stat.color} p-12 border-[3px] border-[var(--ink)] shadow-[15px_15px_0px_rgba(0,0,0,0.15)] ${idx % 2 === 0 ? 'rotate-[-1deg]' : 'rotate-[1deg]'} hover:rotate-0 transition-all duration-500 cursor-default group relative overflow-hidden`}>
                  <div className="absolute -top-4 -right-4 w-32 h-32 opacity-10 group-hover:opacity-40 transition-opacity transform group-hover:scale-125 group-hover:rotate-12">
                    {stat.icon}
                  </div>
                  <div className={`text-6xl font-black mb-4 ${stat.textColor} font-display group-hover:scale-110 transition-transform`}>
                    {stat.value}
                  </div>
                  <div className={`text-sm font-stamped uppercase tracking-widest ${stat.textColor} font-black opacity-90`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="mt-48">
          <h4 className="font-display text-4xl font-black uppercase mb-12 text-center">Nos Partenaires</h4>
          <div className="flex flex-wrap justify-center gap-16 opacity-30 grayscale hover:opacity-100 transition-opacity">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-32 h-20 border-2 border-[var(--ink)] flex items-center justify-center font-display font-black text-xs">LOGO PARTENAIRE</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
