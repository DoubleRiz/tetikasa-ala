
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SectionActions from './components/SectionActions';
import NewsCard from './components/NewsCard';
import Impact from './components/Impact';
import DonationPopup from './components/DonationPopup';
import Footer from './components/Footer';
import ArticleDetail from './components/ArticleDetail';
import { NEWS, PILLARS, Icons, Dividers } from './constants';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setRoute(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    if (route.startsWith('#/article/')) {
      const id = route.replace('#/article/', '');
      return <ArticleDetail id={id} />;
    }

    return (
      <>
        <Hero />

        {/* MISSIONS SECTION */}
        <section id="missions" className="py-48 px-6 relative bg-white text-[var(--ink)] overflow-hidden">
          <Dividers.Forest className="text-[var(--forest-pastel)]" />
          
          <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="text-center mb-40 relative">
              <span className="font-stamped text-lg uppercase tracking-[0.4em] text-[var(--forest)] font-black">Nos engagements</span>
              <h2 className="text-8xl md:text-[10rem] font-black uppercase mt-6 ink-bleed leading-none tracking-widest">Missions <br/> Fondatrices</h2>
              <Dividers.Dots className="text-[var(--forest)] mt-8" />
            </div>
            
            <div className="grid md:grid-cols-3 gap-20">
              {PILLARS.map((pillar, idx) => (
                <div key={pillar.title} className="group relative p-14 flex flex-col items-center text-center bg-white lino-card overflow-hidden">
                  <div className={`absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity ${
                    idx === 0 ? 'bg-[var(--forest)]' : idx === 1 ? 'bg-[var(--solar)]' : 'bg-[var(--bordeaux)]'
                  }`}></div>
                  
                  <div className={`w-36 h-36 mb-12 rounded-full border-[3px] border-[var(--ink)] shadow-lg flex items-center justify-center transition-transform group-hover:rotate-12 group-hover:scale-110 ${
                    idx === 0 ? 'bg-[var(--forest)] text-white' : idx === 1 ? 'bg-[var(--solar)] text-[var(--forest)]' : 'bg-[var(--bordeaux)] text-white'
                  }`}>
                    <div className="w-16 h-16">{pillar.icon}</div>
                  </div>
                  
                  <h3 className="text-5xl font-black uppercase mb-8 tracking-wider whitespace-nowrap">{pillar.title}</h3>
                  <p className="font-stamped text-lg leading-relaxed opacity-80 italic max-w-[280px]">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Dividers.StampTrail className="bg-white" />

        <SectionActions />

        <Impact />

        {/* ACTUALITÉS */}
        <section id="actualités" className="py-56 px-6 bg-white relative overflow-hidden">
          <Dividers.Fields className="text-[var(--bordeaux)] opacity-[0.05]" />
          
          <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-40 gap-16">
              <div className="relative">
                <span className="font-stamped text-sm uppercase tracking-widest text-[var(--bordeaux)] font-black mb-4 block">Nos actualités</span>
                <h2 className="text-9xl md:text-[14rem] font-black uppercase leading-[0.75] ink-bleed tracking-wide">Journal de <br/> <span className="text-[var(--forest)] italic">Bord</span></h2>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-16">
              {NEWS.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>

            <div className="mt-20 flex justify-center">
               <button className="px-12 py-5 border-4 border-[var(--ink)] font-display uppercase tracking-widest text-lg hover:bg-[var(--ink)] hover:text-white transition-all">
                  Voir les anciennes actualités
               </button>
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-white">
      <Header />
      <main>
        {renderContent()}
      </main>
      <Footer />
      <DonationPopup />
    </div>
  );
};

export default App;
