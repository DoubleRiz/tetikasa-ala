
import React from 'react';
import { Icons } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t-4 border-[var(--ink)] py-24 px-6 mt-32 relative overflow-hidden">
      {/* Footer Decoration Stamps */}
      <div className="absolute top-10 right-10 w-32 h-32 text-[var(--bordeaux)] opacity-5 rotate-12"><Icons.Zebu /></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 text-[var(--forest)] opacity-5 -rotate-12"><Icons.Bamboo /></div>

      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-12 gap-20 mb-24">
          <div className="md:col-span-4">
             <div className="mb-10 h-28 md:h-36">
                <Icons.AlaLogo className="h-full w-auto" />
             </div>
             <p className="font-stamped text-base opacity-70 leading-relaxed max-w-sm mt-4 italic font-bold text-[var(--ink)]">
               Agriculture, Littérature & Artisanat. <br/>
               Un pont solidaire entre deux terres, une forêt qui grandit ensemble par chaque impression.
             </p>
             <div className="flex gap-4 mt-10">
               {[Icons.Vanilla, Icons.Coffee, Icons.Leaf].map((Icon, i) => (
                 <div key={i} className="w-10 h-10 text-[var(--bordeaux)] opacity-30"><Icon /></div>
               ))}
             </div>
          </div>
          
          <div className="md:col-span-4">
            <h4 className="font-display text-2xl font-black uppercase mb-10 flex items-center gap-4">
              <div className="w-6 h-6 text-[var(--bordeaux)]"><Icons.Tools /></div>
              Missions
            </h4>
            <ul className="font-stamped text-sm space-y-6 uppercase tracking-[0.2em] font-black">
              <li className="flex items-center gap-3"><div className="w-4 h-4"><Icons.Leaf /></div><a href="#" className="hover:text-[var(--bordeaux)] transition-colors">Agro-écologie</a></li>
              <li className="flex items-center gap-3"><div className="w-4 h-4"><Icons.Bamboo /></div><a href="#" className="hover:text-[var(--bordeaux)] transition-colors">Pédagogie Foret</a></li>
              <li className="flex items-center gap-3"><div className="w-4 h-4"><Icons.Zebu /></div><a href="#" className="hover:text-[var(--bordeaux)] transition-colors">Culture Taombaovao</a></li>
              <li className="flex items-center gap-3"><div className="w-4 h-4"><Icons.Hut /></div><a href="#" className="hover:text-[var(--bordeaux)] transition-colors">Nos Pépinières</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-display text-2xl font-black uppercase mb-10 flex items-center gap-4">
              <div className="w-6 h-6 text-[var(--solar)]"><Icons.Sun /></div>
              Contact
            </h4>
            <p className="font-stamped text-lg uppercase mb-10 font-black border-b-2 border-dotted border-[var(--ink)] inline-block">association.ala@gmail.com</p>
            <div className="flex gap-6">
               {['FB', 'IG', 'LI'].map((social, i) => (
                 <a key={social} href="#" className={`w-14 h-14 border-2 border-[var(--ink)] flex items-center justify-center font-black text-sm hover:bg-[var(--forest)] hover:text-white transition-all shadow-[6px_6px_0px_var(--ink)] ${i % 2 === 0 ? 'rotate-6' : '-rotate-6'}`}>
                   {social}
                 </a>
               ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t-2 border-[var(--ink)] gap-8">
           <div className="flex items-center gap-4">
             <div className="w-8 h-8 opacity-20"><Icons.Fish /></div>
             <span className="font-stamped text-xs uppercase tracking-[0.6em] opacity-40 font-black">© 2024 Tetikasa ALA - Empreinte Solidaire</span>
           </div>
           
           <div className="flex gap-10 opacity-20">
              <div className="w-8 h-8"><Icons.Moon /></div>
              <div className="w-8 h-8"><Icons.Vanilla /></div>
              <div className="w-8 h-8"><Icons.Coffee /></div>
           </div>

           <div className="bg-[var(--forest)] text-white px-8 py-3 rotate-1 shadow-lg flex items-center gap-3">
              <div className="w-5 h-5"><Icons.Bird /></div>
              <span className="font-display text-sm uppercase tracking-widest font-black">Hazo Tokana Tsy Mba Ala</span>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
