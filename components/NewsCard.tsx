
import React from 'react';
import { NewsItem } from '../types';
import { Icons } from '../constants';

const NewsCard: React.FC<{ item: NewsItem }> = ({ item }) => {
  const isMadagascar = item.location === 'Madagascar';
  const accentColor = isMadagascar ? 'var(--bordeaux)' : 'var(--forest)';
  const IconComponent = Icons[item.iconKey];
  const LocationIcon = isMadagascar ? Icons.MapMadagascar : Icons.MapFrance;

  return (
    <div className="bg-white border-8 border-[var(--ink)] p-8 shadow-[15px_15px_0px_rgba(0,0,0,0.15)] hover:shadow-none hover:translate-x-3 hover:translate-y-3 transition-all group flex flex-col h-full lino-block relative">
      <div className="mb-6">
        <div className={`inline-block px-4 py-1 font-stamped text-xs uppercase mb-2 border-2 border-[var(--ink)] bg-white text-[var(--ink)] font-black`}>
          {item.location}
        </div>
        <div className="font-stamped text-xs opacity-50 uppercase font-black">{item.date}</div>
      </div>

      <div 
        className="relative aspect-video overflow-hidden border-4 border-[var(--ink)] mb-8 flex items-center justify-center p-6 transition-colors duration-500"
        style={{ backgroundColor: `${isMadagascar ? '#6D071A15' : '#88B08320'}` }}
      >
        <div 
          className="relative z-10 w-24 h-24 transition-all duration-700 transform group-hover:scale-110 drop-shadow-[5px_5px_0px_var(--ink)]"
          style={{ color: accentColor }}
        >
          {IconComponent && <IconComponent />}
        </div>
      </div>
      
      <div className="flex-1 flex flex-col">
        <h4 className="text-3xl font-black uppercase leading-tight mb-4 group-hover:translate-x-2 transition-transform font-display ink-bleed">
          {item.title}
        </h4>
        
        <p className="font-stamped text-sm leading-relaxed opacity-80 mb-6 flex-1 italic font-bold">
          {item.excerpt}
        </p>
      </div>
      
      <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-white medallion-frame text-[var(--ink)] rotate-[-15deg] shadow-lg border-2 border-[var(--ink)] flex items-center justify-center">
         <div className="w-6 h-6"><Icons.Logo /></div>
      </div>
    </div>
  );
};

export default NewsCard;
