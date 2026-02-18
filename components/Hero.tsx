
import React from 'react';
import { Icons } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-24 px-6 overflow-hidden bg-[var(--paper)]">
      
      {/* BACKGROUND JAGGED SILHOUETTE */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div 
          className="w-[130vw] h-[85vh] bg-[var(--forest)] opacity-90 rotate-[-4deg] translate-y-20 scale-110"
          style={{ 
            clipPath: 'polygon(0 45%, 12% 38%, 28% 48%, 45% 32%, 65% 52%, 85% 35%, 100% 48%, 100% 100%, 0% 100%)',
            filter: 'url(#inkFilter)' 
          }}
        ></div>
        
        <div 
          className="absolute inset-0 bg-[var(--forest-pastel)] opacity-30 rotate-[2deg] translate-y-32"
          style={{ clipPath: 'polygon(0 60%, 25% 55%, 50% 65%, 75% 50%, 100% 65%, 100% 100%, 0% 100%)' }}
        ></div>

        {/* Motifs de fond en Bordeaux subtil */}
        <div 
          className="absolute top-20 right-1/4 w-32 h-32 text-[var(--bordeaux)] opacity-[0.08] animate-subtle-float"
          style={{ filter: 'url(#inkFilter)' }}
        >
          <Icons.Bird />
        </div>
        <div 
          className="absolute bottom-20 left-1/4 w-24 h-24 text-[var(--bordeaux)] opacity-[0.05] -rotate-12"
        >
          <Icons.Leaf />
        </div>
      </div>

      {/* PAPER TEXTURE OVERLAY */}
      <div className="absolute inset-0 z-10 opacity-30 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>

      <div className="max-w-[1400px] mx-auto w-full relative z-20 flex flex-col items-center">
        
        {/* THE COLLAGE COMPOSITION */}
        <div className="relative w-full h-[55vh] md:h-[70vh] flex items-end justify-center mb-8">
           
           {/* LEFT: Papaya Tree */}
           <div className="absolute left-[2%] bottom-0 w-[160px] md:w-[240px] h-[95%] rotate-[-2deg] ink-bleed transform transition-transform hover:scale-105">
              <Icons.LinoPapaya />
           </div>

           {/* CENTER-LEFT: Massive Baobab */}
           <div className="absolute left-[20%] bottom-0 w-[280px] md:w-[450px] h-[115%] z-20 transition-all hover:translate-y-[-10px] duration-1000">
              <Icons.LinoBaobabStylized />
              {/* Subtle Stamp Accent near base */}
              <div className="absolute bottom-[2%] left-[10%] w-16 h-16 text-[var(--ink)] rotate-[-15deg] drop-shadow-md opacity-20">
                <Icons.Leaf />
              </div>
           </div>

           {/* CENTER-RIGHT: Ravinala Fan */}
           <div className="absolute right-[22%] bottom-[8%] w-[220px] md:w-[380px] h-[85%] z-10 overprint-pink drop-shadow-lg">
              <Icons.LinoRavinalaStylized />
           </div>

           {/* RIGHT: Banana Tree */}
           <div className="absolute right-[2%] bottom-0 w-[200px] md:w-[320px] h-[95%] rotate-[3deg] ink-bleed transform transition-transform hover:scale-105">
              <Icons.LinoBananier />
           </div>
        </div>

        {/* CTA SECTION */}
        <div className="text-center relative z-40 mt-12">
           <div className="flex items-center justify-center gap-6 mb-8">
             <div className="w-12 h-[3px] bg-[var(--ink)] opacity-20"></div>
             <span className="font-stamped text-sm md:text-xl uppercase tracking-[0.5em] text-[var(--ink)] font-black">Madagasikara • Tetikasa Solidaire</span>
             <div className="w-12 h-[3px] bg-[var(--ink)] opacity-20"></div>
           </div>
           
           <h2 className="text-4xl md:text-8xl font-black uppercase text-[var(--ink)] leading-none mb-12 font-display italic tracking-[0.05em]">
             Cultiver l'avenir, <br/> <span className="text-[var(--bordeaux)] ink-bleed">Graver</span> l'histoire.
           </h2>
           
           <div className="flex flex-wrap justify-center gap-10">
              <button className="group relative bg-[var(--forest)] text-white px-14 py-7 text-2xl font-display uppercase tracking-widest transition-all border-[3px] border-[var(--ink)] shadow-[12px_12px_0px_var(--ink)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 flex items-center gap-4 lino-block overflow-hidden">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-8 h-8 group-hover:rotate-45 transition-transform relative z-10"><Icons.Leaf /></div>
                <span className="relative z-10">Découvrir ALA</span>
              </button>
              <button className="group relative bg-[var(--forest-pastel)] text-[var(--ink)] px-14 py-7 text-2xl font-display uppercase tracking-widest hover:bg-[var(--neon-pink)] hover:text-white transition-all border-[3px] border-[var(--ink)] shadow-[12px_12px_0px_var(--ink)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 flex items-center gap-4 lino-block">
                <div className="w-8 h-8 group-hover:scale-125 transition-transform"><Icons.Bird /></div>
                Agir maintenant
              </button>
           </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 z-30 bg-gradient-to-t from-[var(--paper)] to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
