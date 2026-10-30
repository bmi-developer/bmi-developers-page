/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Phone, Cpu, ShieldCheck } from 'lucide-react';
import { TranslationSchema } from '../translations';

interface FooterProps {
  onScrollTo: (sectionId: string) => void;
  lang: 'pt' | 'en' | 'es';
  t: TranslationSchema['footer'];
  onOpenWhatsApp?: () => void;
}

export default function Footer({ onScrollTo, lang, t, onOpenWhatsApp }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-neutral-400 pt-16 pb-12 border-t border-neutral-900 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-neutral-900">
          
          {/* Official Logo element */}
          <div className="md:col-span-5 flex flex-col space-y-4">
            <div className="flex items-center">
              <img 
                src="/assets/aistudio/logo-w_c303ca1e.png" 
                alt="BMI Developers" 
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed">
              {t.desc}
            </p>
            <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-mono">
              <ShieldCheck className="w-4 h-4 text-neutral-400" />
              <span>Código Seguro • Repositório Privado Sincronizado</span>
            </div>
            <div className="text-xs text-neutral-500 font-mono">
              <span>CNPJ: 49.222.212/0001-02</span>
            </div>
          </div>

          {/* Quick Services column */}
          <div className="md:col-span-3 flex flex-col space-y-3">
            <h4 className="text-[10px] font-mono font-bold tracking-wider text-white uppercase">{t.col1Title}</h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <button onClick={() => onScrollTo('servicos')} className="hover:text-white transition cursor-pointer">
                  {lang === 'pt' ? 'Fábrica de Software' : lang === 'en' ? 'Software Factory' : 'Fábrica de Software'}
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('servicos')} className="hover:text-white transition cursor-pointer">
                  {lang === 'pt' ? 'Modernização de Legados' : lang === 'en' ? 'Legacy Modernization' : 'Modernización de Legados'}
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('servicos')} className="hover:text-white transition cursor-pointer">
                  {lang === 'pt' ? 'Machine Learning & IA' : lang === 'en' ? 'Machine Learning & AI' : 'Machine Learning e IA'}
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('servicos')} className="hover:text-white transition cursor-pointer">
                  {lang === 'pt' ? 'APIs & Integrações' : lang === 'en' ? 'APIs & Integrations' : 'APIs e Integraciones'}
                </button>
              </li>
            </ul>
          </div>

          {/* Institutional column */}
          <div className="md:col-span-2 flex flex-col space-y-3">
            <h4 className="text-[10px] font-mono font-bold tracking-wider text-white uppercase">{t.col2Title}</h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <button onClick={() => onScrollTo('inicio')} className="hover:text-white transition cursor-pointer">
                  {lang === 'pt' ? 'Início' : lang === 'en' ? 'Top' : 'Inicio'}
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('servicos')} className="hover:text-white transition cursor-pointer">
                  {lang === 'pt' ? 'Especializações' : lang === 'en' ? 'Specialties' : 'Especialidades'}
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('metodologia')} className="hover:text-white transition cursor-pointer">
                  {lang === 'pt' ? 'Metodologias' : lang === 'en' ? 'Workflow' : 'Proceso'}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-2 flex flex-col space-y-3">
            <h4 className="text-[10px] font-mono font-bold tracking-wider text-white uppercase">Canais</h4>
            <div className="space-y-2 text-xs text-neutral-400">
              <span className="flex items-center gap-1.5 leading-none">
                <Mail className="w-3.5 h-3.5 text-neutral-500 shrink-0" /> developers@bmi.net.br
              </span>
              <button 
                type="button"
                onClick={onOpenWhatsApp}
                className="flex items-center gap-1.5 leading-none mt-1 hover:text-white transition cursor-pointer text-left"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>{lang === 'pt' ? 'Atendimento WhatsApp' : lang === 'en' ? 'WhatsApp Support' : 'Atención WhatsApp'}</span>
              </button>
              <a 
                href="https://www.linkedin.com/company/bmi-consultoria-e-desenvolvimento-de-software" 
                target="_blank" 
                rel="no-referrer"
                className="hover:text-white transition block mt-2 text-neutral-500 font-semibold"
              >
                LinkedIn • BMI Consultoria
              </a>
            </div>
          </div>

        </div>

        {/* Footer bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-medium">
          <div>
            <span>{t.copy}</span>
          </div>
          <div className="flex gap-4">
            <a href="#contato" className="hover:text-white transition">{t.terms}</a>
            <a href="#contato" className="hover:text-white transition">{t.privacy}</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
