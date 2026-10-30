/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TranslationSchema } from '../translations';
import { Home, Zap, Building2, Shuffle, Check, ArrowRight, Cpu, Code, Bot, Sparkles, Layers, RefreshCw } from 'lucide-react';

interface ServicesProps {
  onScrollToContact: (prefilledService?: string) => void;
  t: TranslationSchema['services'];
}

export default function Services({ onScrollToContact, t }: ServicesProps) {
  // Safe validation fallback to make sure t.items exists and selectedId doesn't error
  const initialId = t.items && t.items.length > 0 ? t.items[0].id : '';
  const [selectedId, setSelectedId] = useState(initialId);

  const getIcon = (id: string, className = "w-5 h-5") => {
    switch (id) {
      case 'sistemas-customizados':
        return <Building2 className={`${className} text-neutral-900`} />;
      case 'modernizacao-legados':
        return <RefreshCw className={`${className} text-neutral-900`} />;
      case 'machine-learning-preditivo':
        return <Cpu className={`${className} text-neutral-900`} />;
      case 'desenvolvimento-assistido-ia':
        return <Code className={`${className} text-neutral-900`} />;
      case 'integracao-llms-agentes':
        return <Sparkles className={`${className} text-neutral-900`} />;
      case 'automacao-processos-ia':
        return <Bot className={`${className} text-neutral-900`} />;
      case 'integracao-apis-pagamentos':
      case 'sistemas-bancarios-pagamentos':
        return <Layers className={`${className} text-neutral-900`} />;
      default:
        return <Zap className={`${className} text-neutral-900`} />;
    }
  };

  const activeService = t.items.find(item => item.id === selectedId) || t.items[0];

  return (
    <section id="servicos" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading resembling Apple Product Layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-xl text-left">
            <span className="text-[11px] font-mono font-bold tracking-widest text-neutral-400 uppercase">
              02 . {t.tag}
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-950 mt-2 tracking-tight">
              {t.heading}
            </h2>
            <p className="text-neutral-500 text-sm sm:text-base mt-2.5 max-w-md leading-relaxed">
              {t.sub}
            </p>
          </div>
          <div className="shrink-0 flex">
            <button
              id="spec-scope-btn"
              onClick={() => onScrollToContact()}
              className="text-xs font-semibold tracking-tight text-neutral-900 hover:text-neutral-750 flex items-center gap-1.5 transition cursor-pointer"
            >
              {t.actionBtn} <ArrowRight className="w-4 h-4 text-neutral-950" />
            </button>
          </div>
        </div>

        {/* Master details split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Side: Product Option Selectors */}
          <div className="lg:col-span-5 flex flex-col space-y-3">
            {t.items.map((srv) => (
              <button
                key={srv.id}
                id={`srv-tab-${srv.id}`}
                onClick={() => setSelectedId(srv.id)}
                className={`flex gap-4 p-4 rounded-2xl border text-left cursor-pointer transition-all duration-200 group ${
                  selectedId === srv.id
                    ? 'bg-neutral-50 border-neutral-300'
                    : 'bg-white border-neutral-200/60 hover:border-neutral-300'
                }`}
              >
                <span className={`p-2.5 rounded-xl border flex items-center justify-center shrink-0 transition-transform ${
                  selectedId === srv.id ? 'bg-white border-neutral-300' : 'bg-neutral-50 border-neutral-200 group-hover:scale-105'
                }`}>
                  {getIcon(srv.id, 'w-4.5 h-4.5')}
                </span>
                <div>
                  <h3 className={`font-semibold text-xs sm:text-sm tracking-tight ${selectedId === srv.id ? 'text-neutral-950' : 'text-neutral-500'}`}>
                    {srv.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1 line-clamp-1 leading-normal">
                    {srv.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Right Side: Showcase Canvas with smooth card borders */}
          <div className="lg:col-span-7 bg-neutral-50/50 border border-neutral-200/60 p-6 sm:p-10 rounded-2xl relative flex flex-col justify-between min-h-[440px]">
            <div className="flex flex-col space-y-6 text-left">
              
              {/* Header inside canvas */}
              <div className="flex items-center gap-3.5 border-b border-neutral-200/40 pb-5">
                <span className="p-3 bg-white border border-neutral-200 rounded-xl shadow-xs">
                  {getIcon(activeService.id, "w-6 h-6")}
                </span>
                <div>
                  <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-neutral-400 block">
                    {activeService.tag}
                  </span>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-neutral-950 tracking-tight">
                    {activeService.title}
                  </h3>
                </div>
              </div>

              {/* Main Description */}
              <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                {activeService.description}
              </p>

              {/* Core Features */}
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {activeService.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-700">
                      <Check className="w-4 h-4 text-neutral-950 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Badges */}
              <div className="pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {activeService.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[10px] font-mono font-semibold bg-white text-neutral-600 border border-neutral-200/60 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Link block */}
            <div className="mt-8 pt-5 border-t border-neutral-200/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-[11px] text-neutral-400 font-medium text-left">
                Propriedade Intelectual Garantida • Repositório Privado e Código Limpo
              </span>
              <button
                id={`srv-cta-${activeService.id}`}
                onClick={() => onScrollToContact(activeService.title)}
                className="w-full sm:w-auto bg-neutral-950 hover:bg-neutral-850 text-white text-xs font-semibold px-5 py-2.5 rounded-full flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-sm"
              >
                {t.actionBtn}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
