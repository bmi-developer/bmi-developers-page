/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import Services from './components/Services';
import TechStackAI from './components/TechStackAI';
import Footer from './components/Footer';
import WhatsAppChatWidget from './components/WhatsAppChatWidget';
import { TRANSLATIONS, LanguageType } from './translations';
import { ArrowRight, MapPin, Activity, Wifi, ShieldCheck, Cpu } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<LanguageType>('pt');
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [prefilledMessage, setPrefilledMessage] = useState<string>('');

  // Sync default starting language with browser locale if present
  useEffect(() => {
    const sysLocale = navigator.language.slice(0, 2);
    if (sysLocale === 'en' || sysLocale === 'es') {
      setLang(sysLocale as LanguageType);
    }
  }, []);

  // Scroll coordinator (smooth layout tracking)
  const handleScrollTo = (sectionId: string) => {
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  // Callback guiding active service quick interest actions -> Opens WhatsApp Widget directly
  const handleScrollToContactFromService = (prefilledTitle?: string) => {
    if (prefilledTitle) {
      const msg = lang === 'pt' 
        ? `Olá, gostaria de solicitar uma avaliação de viabilidade técnica e proposta para o serviço: ${prefilledTitle}.` 
        : lang === 'en' 
        ? `Hello, I would like to request technical feasibility evaluation and scope for: ${prefilledTitle}.` 
        : `Hola, me gustaría solicitar evaluación técnica y propuesta para el servicio: ${prefilledTitle}.`;
      setPrefilledMessage(msg);
    } else {
      setPrefilledMessage('');
    }
    setIsWhatsAppOpen(true);
  };

  // Selected translations schema
  const t = TRANSLATIONS[lang] || TRANSLATIONS.pt;

  const methodologyIcons = [
    <MapPin className="w-4.5 h-4.5 text-neutral-900" />,
    <Activity className="w-4.5 h-4.5 text-neutral-900" />,
    <Wifi className="w-4.5 h-4.5 text-neutral-900" />,
    <ShieldCheck className="w-4.5 h-4.5 text-neutral-900" />,
    <Cpu className="w-4.5 h-4.5 text-neutral-900" />
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans antialiased selection:bg-neutral-150 selection:text-neutral-950">
      
      {/* Exquisite Apple Header Bar */}
      <Header
        onScrollTo={handleScrollTo}
        lang={lang}
        onChangeLang={(newLang) => setLang(newLang)}
        t={t.nav}
        onOpenWhatsApp={() => {
          setPrefilledMessage('');
          setIsWhatsAppOpen(true);
        }}
      />

      <main>
        {/* Hero Section */}
        <Hero 
          onScrollTo={handleScrollTo} 
          lang={lang} 
          t={t.hero} 
          onOpenWhatsApp={() => {
            setPrefilledMessage('');
            setIsWhatsAppOpen(true);
          }}
        />
        
        {/* Stat Trackers Section */}
        <Metrics t={t.metrics} />
        
        {/* Core Solutions Showcase */}
        <Services onScrollToContact={handleScrollToContactFromService} t={t.services} />
        
        {/* Authority & AI Tech Stack Section */}
        <TechStackAI lang={lang} />
        
        {/* Methodology (Trabalho) */}
        <section id="metodologia" className="py-20 md:py-28 bg-white border-y border-neutral-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Heading */}
            <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
              <span className="text-[11px] font-mono font-bold tracking-widest text-neutral-400 uppercase">
                04 . {t.methodology.tag}
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-950 mt-2 tracking-tight">
                {t.methodology.heading}
              </h2>
              <p className="text-neutral-500 text-sm sm:text-base mt-2.5 max-w-md mx-auto leading-relaxed">
                {t.methodology.sub}
              </p>
            </div>

            {/* Steps Timeline Grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-6xl mx-auto items-stretch">
              {t.methodology.steps.map((item, index) => (
                <div
                  key={index}
                  className="bg-neutral-50 border border-neutral-200/50 p-6 rounded-2xl shadow-px flex flex-col justify-between relative group hover:border-neutral-300 transition-colors"
                >
                  <div>
                    {/* Header line inside card */}
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-2xl font-display font-black text-neutral-300 group-hover:text-neutral-400 transition-colors">
                        {item.step}
                      </span>
                      <span className="p-2 bg-white border border-neutral-200 rounded-lg shadow-xs">
                        {methodologyIcons[index]}
                      </span>
                    </div>
                    
                    <h3 className="font-bold text-neutral-950 text-xs sm:text-sm tracking-tight leading-snug">
                      {item.title}
                    </h3>
                    
                    <p className="text-[11px] sm:text-xs text-neutral-400 mt-2.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {index < 4 && (
                    <div className="hidden lg:block absolute top-[44px] -right-3.5 z-10 text-neutral-300">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </section>
      </main>

      {/* Footer copyright */}
      <Footer 
        onScrollTo={handleScrollTo} 
        lang={lang} 
        t={t.footer} 
        onOpenWhatsApp={() => {
          setPrefilledMessage('');
          setIsWhatsAppOpen(true);
        }}
      />

      {/* Floating Frontend WhatsApp Chat Widget */}
      <WhatsAppChatWidget 
        lang={lang} 
        isOpenExternal={isWhatsAppOpen} 
        onCloseExternal={() => setIsWhatsAppOpen(false)} 
        prefilledMessage={prefilledMessage}
      />

    </div>
  );
}
