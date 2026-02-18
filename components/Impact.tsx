
import React from 'react';
import { Icons } from '../constants';

const Impact: React.FC = () => {
  const stats = [
    { label: "Arbres Plantés", value: "12,400+", color: "bg-[var(--forest)]", textColor: "text-white", icon: <Icons.Ravinala /> },
    { label: "Sensibilisation", value: "3,500", color: "bg-[var(--bordeaux)]", textColor: "text-white", icon: <Icons.Bamboo /> },
    { label: "Partenaires", value: "450", color: "bg-[var(--solar)]", textColor: "text-[var(--ink)]", icon: <Icons.Hut /> },
    { label: "Bénévoles", value: "85", color: "bg-[var(--neon-pink)]", textColor: "text-white", icon: <Icons.Zebu /> },
  ];

  return (
    <section className="py-56 px-6 bg-white text-[var(--ink)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-32 items-center">
          <div className="lg:w-1/2 space-y-16">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 text-[var(--forest)] opacity-30"><Icons.Tools /></div>
              <div className="inline-block border-[3px] border-[var(--ink)] px-10 py-4 font-stamped text-xl uppercase tracking-widest text-[var(--forest)] font-black">
                L'EMPREINTE ALA
              </div>
            </div>
            <h2 className="text-[11rem] font-black uppercase leading-[0.75] ink-bleed text-[var(--forest)]">Nos <br/> Racines <br/> <span className="text-[var(--bordeaux)]">Vives</span></h2>
            
            <p className="text-3xl font-stamped leading-tight border-l-[15px] border-[var(--solar)] pl-16 italic opacity-85 py-4 relative">
               <div className="absolute -left-4 top-0 w-8 h-8 text-[var(--solar)]"><Icons.Sun /></div>
              "Ny hazo no vanon-ko lakana, ny tany no naniry azy." <br/>
              <span className="text-lg uppercase opacity-50 mt-6 block tracking-[0.3em]">Si l'arbre est devenu pirogue, c'est grâce à la terre.</span>
            </p>
            
            <button className="group bg-[var(--forest)] text-white px-16 py-8 font-display uppercase tracking-widest text-3xl hover:bg-[var(--bordeaux)] transition-all border-[3px] border-[var(--ink)] shadow-[15px_15px_0px_var(--ink)] flex items-center gap-6">
              <div className="w-10 h-10 group-hover:scale-125 transition-transform"><Icons.Vanilla /></div>
              Bilan d'Activités
            </button>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-2 gap-12 w-full">
            {stats.map((stat, idx) => (
              <div key={stat.label} className={`${stat.color} p-16 border-[3px] border-[var(--ink)] shadow-[15px_15px_0px_rgba(0,0,0,0.15)] ${idx % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:rotate-0 transition-all duration-500 cursor-default group relative overflow-hidden`}>
                <div className="absolute -top-4 -right-4 w-32 h-32 opacity-10 group-hover:opacity-40 transition-opacity transform group-hover:scale-125 group-hover:rotate-12">
                   {stat.icon}
                </div>
                <div className={`text-8xl font-black mb-6 ${stat.textColor} font-display group-hover:scale-110 transition-transform`}>
                  {stat.value}
                </div>
                <div className={`text-lg font-stamped uppercase tracking-widest ${stat.textColor} font-black opacity-90`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative Background Elements in Bordeaux */}
      <div className="absolute bottom-10 right-10 w-96 h-96 opacity-[0.04] text-[var(--bordeaux)] rotate-12">
        <Icons.Ravinala />
      </div>
      <div className="absolute top-10 left-10 w-64 h-64 opacity-[0.06] text-[var(--bordeaux)] rotate-45">
        <Icons.Bird />
      </div>
    </section>
  );
};

export default Impact;
