
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

        {/* MISSIONS SECTION - Background Stamped Patterns in Bordeaux */}
        <section id="missions" className="py-48 px-6 relative bg-white text-[var(--ink)] overflow-hidden">
          {/* Scattered Bordeaux Pictograms */}
          <div className="absolute top-20 left-10 w-48 h-48 text-[var(--bordeaux)] opacity-[0.08] rotate-12 ink-bleed"><Icons.Bird /></div>
          <div className="absolute bottom-40 right-20 w-56 h-56 text-[var(--bordeaux)] opacity-[0.06] -rotate-12 ink-bleed"><Icons.Zebu /></div>
          <div className="absolute top-1/2 right-10 w-32 h-32 text-[var(--bordeaux)] opacity-[0.03]"><Icons.Bamboo /></div>

          <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="text-center mb-40 relative">
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-16 h-16 text-[var(--forest)] opacity-20"><Icons.Tools /></div>
              <span className="font-stamped text-lg uppercase tracking-[0.4em] text-[var(--forest)] font-black">Notre Engagement</span>
              <h2 className="text-8xl md:text-[12rem] font-black uppercase mt-6 ink-bleed leading-none">Missions <br/> Fondatrices</h2>
              <Dividers.Dots className="text-[var(--forest)] mt-8" />
            </div>
            
            <div className="grid md:grid-cols-3 gap-20">
              {PILLARS.map((pillar, idx) => (
                <div key={pillar.title} className="group relative p-14 flex flex-col items-center text-center bg-white lino-card overflow-hidden">
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity ${
                    idx === 0 ? 'bg-[var(--forest)]' : idx === 1 ? 'bg-[var(--solar)]' : 'bg-[var(--neon-pink)]'
                  }`}></div>
                  
                  <div className={`w-36 h-36 mb-12 rounded-full border-[3px] border-[var(--ink)] shadow-lg flex items-center justify-center transition-transform group-hover:rotate-12 group-hover:scale-110 ${
                    idx === 0 ? 'bg-[var(--forest)] text-white' : idx === 1 ? 'bg-[var(--solar)] text-[var(--forest)]' : 'bg-[var(--neon-pink)] text-white'
                  }`}>
                    <div className="w-16 h-16">{pillar.icon}</div>
                  </div>
                  
                  <h3 className="text-6xl font-black uppercase mb-8 tracking-tighter">{pillar.title}</h3>
                  <p className="font-stamped text-lg leading-relaxed opacity-80 italic max-w-[280px]">
                    {pillar.description}
                  </p>
                  
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 opacity-5 group-hover:opacity-20 transition-all rotate-12">
                    {pillar.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Dividers.StampTrail className="bg-white" />

        <SectionActions />

        <Impact />

        {/* ACTUALITÉS - Enhanced with Bordeaux iconography */}
        <section id="actualités" className="py-56 px-6 bg-white relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-[0.04] pointer-events-none z-0"
            style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%236D071A' fill-rule='evenodd'%3E%3Cpath d='M50 10l4 36 36 4-36 4-4 36-4-36-36-4 36-4z'/%3E%3Ccircle cx='50' cy='50' r='5'/%3E%3Cpath d='M0 0l5 5m90 90l5 5M95 0l-5 5M5 95l-5 5' stroke='%236D071A' stroke-width='1'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '120px 120px'
            }}
          ></div>

          {/* SCATTERED BORDEAUX BACKGROUND ICONS */}
          <div className="absolute top-[5%] left-[8%] w-16 h-16 text-[var(--bordeaux)] opacity-[0.08] rotate-[-15deg] animate-subtle-float pointer-events-none"><Icons.Leaf /></div>
          <div className="absolute top-[30%] left-[2%] w-20 h-20 text-[var(--bordeaux)] opacity-[0.08] rotate-[-5deg] animate-subtle-float pointer-events-none" style={{ animationDelay: '1s' }}><Icons.Bird /></div>
          <div className="absolute bottom-[25%] left-[5%] w-16 h-16 text-[var(--bordeaux)] opacity-[0.06] rotate-12 pointer-events-none"><Icons.Fish /></div>
          <div className="absolute top-[65%] right-[25%] w-14 h-14 text-[var(--bordeaux)] opacity-[0.05] pointer-events-none"><Icons.Tools /></div>
          
          <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-40 gap-16">
              <div className="relative">
                <div className="absolute -top-12 -left-12 w-20 h-20 text-[var(--bordeaux)] opacity-20 animate-subtle-float"><Icons.Bird /></div>
                <span className="font-stamped text-sm uppercase tracking-widest text-[var(--bordeaux)] font-black mb-4 block">Journal de Bord</span>
                <h2 className="text-9xl md:text-[14rem] font-black uppercase leading-[0.75] ink-bleed">L'Empreinte <br/> <span className="text-[var(--forest)] italic">Vivante</span></h2>
              </div>
              <p className="font-stamped text-2xl max-w-xl opacity-90 border-l-[12px] border-[var(--solar)] pl-12 italic font-black relative bg-white/50 backdrop-blur-sm p-4 text-[var(--ink)]">
                Notes de terrain, pépinières et ateliers : chaque geste laisse une trace durable.
                <div className="absolute -bottom-10 right-0 w-12 h-12 opacity-10"><Icons.Tools /></div>
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-16">
              {NEWS.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
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
