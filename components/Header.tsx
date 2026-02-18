
import React, { useState } from 'react';
import { Language } from '../types';
import { Icons } from '../constants';

const Header: React.FC = () => {
  const [lang, setLang] = useState<Language>(Language.FR);

  const getFlagIcon = (l: Language) => {
    switch (l) {
      case Language.FR: return <Icons.FlagFR />;
      case Language.EN: return <Icons.FlagEN />;
      case Language.MG: return <Icons.FlagMG />;
      default: return null;
    }
  };

  const getRotation = (idx: number) => {
    const rotations = ['rotate-[-3deg]', 'rotate-[5deg]', 'rotate-[-6deg]'];
    return rotations[idx % rotations.length];
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50 p-8 md:p-12">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4 group cursor-pointer h-16 md:h-28">
          <Icons.AlaLogo className="h-full w-auto transition-transform group-hover:scale-105" />
        </div>

        <nav className="hidden lg:flex gap-16 text-base font-black uppercase tracking-[0.2em] items-center">
          {['Missions', 'Actions', 'Actualités'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="group relative hover:text-[var(--forest)] transition-colors">
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-[var(--bordeaux)] group-hover:w-full transition-all duration-500"></span>
            </a>
          ))}
          
          <div className="flex gap-4 border-l-4 border-[var(--ink)] pl-12 h-10 items-center">
            {Object.values(Language).map((l, idx) => {
              const isActive = lang === l;
              return (
                <button 
                  key={l} 
                  onClick={() => setLang(l)}
                  title={l}
                  className={`relative w-10 h-10 transition-all duration-300 transform hover:scale-110 ${getRotation(idx)} flex items-center justify-center
                    ${isActive ? 'opacity-100 scale-110 drop-shadow-[4px_4px_0px_var(--ink)]' : 'opacity-40 hover:opacity-80'}`}
                >
                  <div className={`w-full h-full bg-white border-2 border-[var(--ink)] p-1 ${isActive ? 'bg-[var(--gray-subtle)] border-4' : ''}`}>
                    {getFlagIcon(l)}
                  </div>
                  {isActive && (
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[var(--bordeaux)] rounded-full border border-white"></div>
                  )}
                </button>
              );
            })}
          </div>
        </nav>

        <button className="bg-[var(--forest)] text-white w-16 h-16 border-4 border-[var(--ink)] shadow-[6px_6px_0px_var(--ink)] flex items-center justify-center font-black text-3xl lino-block hover:bg-[var(--bordeaux)] transition-all">
          =
        </button>
      </div>
    </header>
  );
};

export default Header;
