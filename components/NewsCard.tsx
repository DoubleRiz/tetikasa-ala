
import React from 'react';
import { NewsItem } from '../types';
import { Icons } from '../constants';

const NewsCard: React.FC<{ item: NewsItem }> = ({ item }) => {
  const isMadagascar = item.location === 'Madagascar';
  // Couleurs dynamiques basées sur la localisation
  const accentColor = isMadagascar ? 'var(--bordeaux)' : 'var(--forest)';
  const IconComponent = Icons[item.iconKey];
  const LocationIcon = isMadagascar ? Icons.MapMadagascar : Icons.MapFrance;

  return (
    <div className="bg-white border-8 border-[var(--ink)] p-8 shadow-[15px_15px_0px_rgba(0,0,0,0.15)] hover:shadow-none hover:translate-x-3 hover:translate-y-3 transition-all group flex flex-col h-full lino-block relative">
      {/* Visual Header - Linocut Icon focus */}
      <div 
        className="relative aspect-square overflow-hidden border-4 border-[var(--ink)] mb-10 flex items-center justify-center p-12 transition-colors duration-500"
        style={{ backgroundColor: `${isMadagascar ? '#6D071A15' : '#88B08320'}` }}
      >
        <div className="absolute inset-0 lambahoany-pattern opacity-10 pointer-events-none"></div>
        
        {/* Background Location Stamp (Prominent & Artisanal) */}
        <div 
          className="absolute inset-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
          style={{ color: accentColor }}
        >
          {LocationIcon && <LocationIcon />}
        </div>
        
        {/* Main Content Icon */}
        <div 
          className="relative z-10 w-full h-full transition-all duration-700 transform group-hover:scale-110 group-hover:rotate-6 drop-shadow-[5px_5px_0px_var(--ink)]"
          style={{ color: accentColor }}
        >
          {IconComponent && <IconComponent />}
        </div>
        
        {/* Stamp Label (Location Text) */}
        <div 
          className="absolute -top-2 -right-2 flex items-center gap-3 px-6 py-2 text-white text-xs font-black uppercase tracking-[0.3em] border-4 border-[var(--ink)] shadow-xl rotate-3 group-hover:rotate-0 transition-transform lino-block"
          style={{ backgroundColor: accentColor }}
        >
          <div className="w-5 h-5 text-white/50">{LocationIcon && <LocationIcon />}</div>
          {item.location}
        </div>
      </div>
      
      <div className="flex-1 flex flex-col">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-1 flex-1 border-b-4 border-dotted border-[var(--ink)] opacity-20"></div>
          <span className="font-stamped text-xs opacity-60 uppercase font-black whitespace-nowrap">{item.date}</span>
          <div className="h-1 flex-1 border-b-4 border-dotted border-[var(--ink)] opacity-20"></div>
        </div>
        
        <h4 className="text-4xl font-black uppercase leading-tight mb-6 group-hover:translate-x-2 transition-transform font-display ink-bleed">
          {item.title}
        </h4>
        
        <p className="font-stamped text-sm leading-relaxed opacity-80 mb-10 flex-1 italic font-bold">
          {item.excerpt}
        </p>
        
        <a 
          href={`#/article/${item.id}`}
          className="w-full py-5 border-4 border-[var(--ink)] font-display uppercase tracking-[0.2em] text-lg hover:bg-[var(--ink)] hover:text-white transition-all lino-block relative overflow-hidden flex items-center justify-center gap-3 no-underline group/btn"
          style={{ color: accentColor, borderColor: 'var(--ink)' }}
        >
          <span className="relative z-10">Lire la suite</span>
          <svg className="w-6 h-6 relative z-10 transition-transform group-hover/btn:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
      
      {/* Decorative Corner Stamp */}
      <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white medallion-frame text-[var(--ink)] rotate-[-15deg] shadow-lg border-2 border-[var(--ink)] flex items-center justify-center">
         <div className="w-6 h-6"><Icons.Logo /></div>
      </div>
    </div>
  );
};

export default NewsCard;
