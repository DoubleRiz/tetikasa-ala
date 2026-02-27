
import React, { useEffect } from 'react';
import { NEWS, Icons, Dividers } from '../constants';

interface ArticleDetailProps {
  id: string;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ id }) => {
  const article = NEWS.find(n => n.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-20 text-center">
        <h2 className="text-6xl font-display font-black mb-8">Article Introuvable</h2>
        <a href="#/" className="px-10 py-5 bg-[var(--forest)] text-white font-display uppercase tracking-widest border-4 border-[var(--ink)] shadow-[10px_10px_0px_var(--ink)]">Retour à l'accueil</a>
      </div>
    );
  }

  const isMadagascar = article.location === 'Madagascar';
  const accentColor = isMadagascar ? 'var(--bordeaux)' : 'var(--forest)';
  const IconComponent = Icons[article.iconKey];

  return (
    <div className="min-h-screen bg-[#F9F7F2] relative pt-40 pb-32">
      {/* Decorative Overlays */}
      <div className="absolute top-0 left-0 w-full h-96 bg-[var(--ink)] opacity-5 pointer-events-none torn-edge-bottom"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Back Link */}
        <a 
          href="#/" 
          className="inline-flex items-center gap-3 font-display uppercase tracking-[0.2em] text-sm mb-16 hover:text-[var(--bordeaux)] transition-colors group"
        >
          <svg className="w-5 h-5 transform group-hover:-translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Retour aux actualités
        </a>

        {/* Article Header */}
        <header className="mb-20">
          <div className="flex items-center gap-6 mb-10">
            <div 
              className="w-24 h-24 border-4 border-[var(--ink)] p-4 flex items-center justify-center bg-white shadow-[8px_8px_0px_var(--ink)] rotate-[-3deg]"
              style={{ color: isMadagascar ? 'var(--bordeaux)' : 'var(--forest)' }}
            >
              {IconComponent && <IconComponent />}
            </div>
            <div className="flex-1 h-1 border-b-4 border-dotted border-[var(--ink)] opacity-20"></div>
            <span className="font-stamped text-lg font-black uppercase tracking-widest opacity-60">{article.date}</span>
          </div>

          <h1 className="text-7xl md:text-9xl font-black uppercase leading-tight mb-8 font-display italic tracking-tight ink-bleed">
            {article.title}
          </h1>

          <div 
            className="inline-block px-8 py-3 text-white font-display uppercase tracking-[0.4em] text-xs border-4 border-[var(--ink)] shadow-lg lino-block"
            style={{ backgroundColor: isMadagascar ? 'var(--bordeaux)' : 'var(--forest)' }}
          >
            Mission {article.location}
          </div>
        </header>

        {/* Content Body */}
        <div className="bg-white border-8 border-[var(--ink)] p-12 md:p-20 shadow-[20px_20px_0px_rgba(0,0,0,0.1)] relative">
          {/* Fix: Replace non-existent Icons.Zebu with Icons.Logo for decoration */}
          <div className="absolute -top-10 -right-10 w-32 h-32 opacity-5 pointer-events-none rotate-12">
            <Icons.Logo />
          </div>
          
          <p className="font-stamped text-2xl md:text-3xl leading-relaxed italic font-bold text-[var(--ink)]/90 whitespace-pre-line first-letter:text-7xl first-letter:font-black first-letter:mr-3 first-letter:float-left first-letter:font-display">
            {article.content}
          </p>

          <div className="mt-20 pt-16 border-t-4 border-dotted border-[var(--ink)] opacity-30 flex justify-between items-center">
             <div className="w-16 h-16"><Icons.Logo /></div>
             <div className="font-stamped text-xs uppercase tracking-widest font-black italic">Publié par l'équipe Tetikasa ALA</div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-24 flex flex-col items-center gap-10">
           <Dividers.Dots className="text-[var(--forest)]" />
           <p className="font-stamped text-center opacity-60 italic text-lg max-w-lg">
             Vous souhaitez soutenir cette action ? Participez à l'Arbre à Don ou partagez cette histoire.
           </p>
           <div className="flex gap-8">
              <button className="bg-[var(--forest)] text-white px-10 py-5 font-display uppercase tracking-widest border-4 border-[var(--ink)] shadow-[8px_8px_0px_var(--ink)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                Partager
              </button>
              <a href="#/" className="bg-white text-[var(--ink)] px-10 py-5 font-display uppercase tracking-widest border-4 border-[var(--ink)] shadow-[8px_8px_0px_var(--ink)] hover:bg-[var(--bordeaux)] hover:text-white transition-all">
                Toutes les actus
              </a>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
