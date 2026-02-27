
import React from 'react';
import { Icons } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t-4 border-[var(--ink)] py-24 px-6 mt-32 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-12 gap-20 mb-24">
          <div className="md:col-span-4">
             <div className="mb-10 h-28 md:h-36 flex items-center">
                <div className="h-full aspect-video text-[var(--forest)]">
                  <Icons.Logo />
                </div>
             </div>
             <p className="font-stamped text-base opacity-70 leading-relaxed max-w-sm mt-4 italic font-bold text-[var(--ink)]">
               L'écosystème des acteurs du développement durable et agroécologique de Madagascar.
             </p>
          </div>
          
          <div className="md:col-span-4">
            <h4 className="font-display text-2xl font-black uppercase mb-10 flex items-center gap-4">
              Missions
            </h4>
            <ul className="font-stamped text-sm space-y-6 uppercase tracking-[0.2em] font-black">
              <li><a href="#missions" className="hover:text-[var(--bordeaux)] transition-colors">Agroécologie</a></li>
              <li><a href="#missions" className="hover:text-[var(--solar)] transition-colors">Pédagogie</a></li>
              <li><a href="#missions" className="hover:text-[var(--neon-pink)] transition-colors">Communauté</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-display text-2xl font-black uppercase mb-10">
              Contact
            </h4>
            <p className="font-stamped text-lg mb-10 font-black border-b-2 border-dotted border-[var(--ink)] inline-block lowercase">ala.tetikas@gmail.com</p>
            {/* Social Icons updated with palette colors */}
            <div className="flex gap-6">
               <a href="#" title="Facebook" className="w-14 h-14 border-2 border-[var(--ink)] flex items-center justify-center text-white bg-[var(--neon-pink)] hover:rotate-12 transition-all shadow-[6px_6px_0px_var(--ink)]"><Icons.Facebook /></a>
               <a href="#" title="Instagram" className="w-14 h-14 border-2 border-[var(--ink)] flex items-center justify-center text-white bg-[var(--solar)] hover:rotate-[-12deg] transition-all shadow-[6px_6px_0px_var(--ink)]"><Icons.Instagram /></a>
               <a href="#" title="LinkedIn" className="w-14 h-14 border-2 border-[var(--ink)] flex items-center justify-center text-white bg-[var(--bordeaux)] hover:scale-110 transition-all shadow-[6px_6px_0px_var(--ink)]"><Icons.Linkedin /></a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t-2 border-[var(--ink)] gap-8">
           <span className="font-stamped text-xs uppercase tracking-[0.6em] opacity-40 font-black">© 2024 Tetikasa ALA</span>
           <div className="bg-[var(--forest)] text-white px-8 py-3 rotate-1 shadow-lg flex items-center gap-3">
              <span className="font-display text-sm uppercase tracking-widest font-black">Hazo Tokana Tsy Mba Ala</span>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
