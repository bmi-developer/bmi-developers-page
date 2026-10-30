/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, ChevronDown, Globe } from 'lucide-react';
import { LanguageType, TranslationSchema } from '../translations';

interface HeaderProps {
  onScrollTo: (sectionId: string) => void;
  lang: LanguageType;
  onChangeLang: (newLang: LanguageType) => void;
  t: TranslationSchema['nav'];
  onOpenWhatsApp?: () => void;
}

export default function Header({ onScrollTo, lang, onChangeLang, t, onOpenWhatsApp }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.services, id: 'servicos' },
    { label: t.metrics, id: 'metricas' },
    { label: t.methodology, id: 'metodologia' },
  ];

  const handleNavItemClick = (id: string) => {
    setIsOpen(false);
    onScrollTo(id);
  };

  const languages: { code: LanguageType; label: string }[] = [
    { code: 'pt', label: 'Português' },
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
  ];

  const handleCtaClick = () => {
    if (onOpenWhatsApp) {
      onOpenWhatsApp();
    } else {
      onScrollTo('servicos');
    }
  };

  return (
    <header
      id="apple-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 border-b border-neutral-100 backdrop-blur-md shadow-[0_2px_40px_rgba(0,0,0,0.03)]'
          : 'bg-white/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border-b border-neutral-100 md:border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-18">
          
          {/* Official Brand Logo */}
          <div 
            id="brand-logo"
            className="flex-shrink-0 flex items-center cursor-pointer gap-2 group py-1" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img 
              src="/assets/aistudio/logo_bbec8238.png" 
              alt="BMI Developers" 
              className="h-8 md:h-9 w-auto object-contain rounded-md shadow-xs transition-transform group-hover:scale-105"
            />
          </div>

          {/* Minimalist Centered Nav Options */}
          <nav className="hidden md:flex space-x-1 lg:space-x-3 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => handleNavItemClick(item.id)}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium text-neutral-600 hover:text-neutral-950 hover:bg-neutral-50 transition-all duration-200 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action Trigger Block & Multi-language Dropdown */}
          <div className="hidden md:flex items-center space-x-4">
            
            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                id="lang-selector-btn"
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                onBlur={() => setTimeout(() => setLangMenuOpen(false), 200)}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium border border-neutral-200/80 hover:border-neutral-400 bg-white shadow-sm hover:shadow text-neutral-700 cursor-pointer transition-all"
              >
                <Globe className="w-3.5 h-3.5 text-neutral-500" />
                <span className="uppercase font-mono">{lang}</span>
                <ChevronDown className="w-3 h-3 text-neutral-400 transition-transform duration-150" />
              </button>

              {langMenuOpen && (
                <div 
                  id="lang-dropdown-menu"
                  className="absolute right-0 mt-2 w-36 bg-white border border-neutral-200/80 rounded-2xl shadow-xl py-1.5 z-50 animate-fade-in-quick"
                >
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      id={`lang-opt-${l.code}`}
                      onClick={() => {
                        onChangeLang(l.code);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-xs font-medium transition-colors cursor-pointer block ${
                        lang === l.code
                          ? 'bg-neutral-50 text-neutral-950 font-bold'
                          : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-950'
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Premium CTA (Apple Pill Style) */}
            <button
              id="header-cta-btn"
              onClick={handleCtaClick}
              className="bg-neutral-950 hover:bg-neutral-850 text-white px-5 py-2 rounded-full text-xs font-semibold tracking-tight shadow-sm hover:shadow h-9 flex items-center transition-all cursor-pointer"
            >
              {t.cta}
            </button>
          </div>

          {/* Mobile elements bar */}
          <div className="flex md:hidden items-center gap-3">
            {/* Language switch inline for mobile */}
            <div className="flex bg-neutral-100 p-0.5 rounded-full border border-neutral-200/20">
              {languages.map((l) => (
                <button
                  key={l.code}
                  id={`mobile-lang-${l.code}`}
                  onClick={() => onChangeLang(l.code)}
                  className={`px-2 py-1 text-[10px] font-bold rounded-full uppercase transition-all ${
                    lang === l.code ? 'bg-white text-neutral-950 shadow-xs' : 'text-neutral-500 hover:text-neutral-800'
                  }`}
                >
                  {l.code}
                </button>
              ))}
            </div>

            <button
              id="mobile-nav-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-1.5 rounded-xl text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition duration-150"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div id="mobile-menu-drawer" className="md:hidden bg-white border-b border-neutral-100 px-4 pt-1 pb-6 space-y-1.5 shadow-xl animate-fade-in-quick">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`mobile-nav-${item.id}`}
              onClick={() => handleNavItemClick(item.id)}
              className="block w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-neutral-600 hover:bg-neutral-50 hover:text-neutral-950 transition duration-150 cursor-pointer"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-neutral-100 flex flex-col gap-2">
            <button
              id="mobile-drawer-cta"
              onClick={() => { setIsOpen(false); handleCtaClick(); }}
              className="w-full text-center bg-neutral-950 hover:bg-neutral-900 text-white py-2.5 rounded-xl text-xs font-semibold transition duration-150 shadow-sm"
            >
              {t.cta}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
