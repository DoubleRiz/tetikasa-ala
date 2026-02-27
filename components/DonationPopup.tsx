
import React, { useState, useEffect } from 'react';
import { Icons } from '../constants';

const DonationPopup: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className={`fixed bottom-10 left-10 z-[60] transition-all duration-1000 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
      <div className="relative bg-white border-[3px] border-[var(--ink)] p-8 shadow-[15px_15px_0px_var(--solar)] max-w-[320px] lino-block overflow-hidden group">
        
        <div className="absolute top-2 left-2 w-6 h-6 text-[var(--bordeaux)] rotate-[-45deg] opacity-20"><Icons.Sprout /></div>
        
        <div className="relative h-44 flex items-center justify-center mb-6">
          <div className="w-32 h-32 text-[var(--forest)] transform transition-transform group-hover:scale-110 duration-700">
            <Icons.LinoBaobabStylized />
          </div>
        </div>

        <div className="text-center relative z-10">
          <h5 className="font-display text-4xl font-black uppercase mb-4 text-[var(--ink)] ink-bleed">
            L'Arbre à <span className="text-[var(--forest)]">Don</span>
          </h5>
          <p className="font-stamped text-sm leading-relaxed mb-8 opacity-80 font-bold italic">
            Par ici pour nous donner un coup de pousse !
          </p>
          <button className="w-full py-5 bg-[var(--forest)] text-white font-display text-2xl uppercase tracking-[0.2em] hover:bg-[var(--bordeaux)] transition-all border-2 border-[var(--ink)] shadow-[6px_6px_0px_var(--ink)]">
            Contribuer
          </button>
        </div>

        <button 
          onClick={() => setVisible(false)}
          className="absolute top-2 right-2 w-8 h-8 bg-transparent text-[var(--ink)] flex items-center justify-center text-xl font-bold opacity-20 hover:opacity-100 transition-opacity"
          aria-label="Fermer"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default DonationPopup;
