/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Check, 
  Cpu, 
  Code, 
  Activity, 
  Shield, 
  Server, 
  Play, 
  Layers, 
  Lock, 
  RefreshCw, 
  Zap,
  TrendingUp,
  Terminal,
  Database
} from 'lucide-react';
import { TranslationSchema } from '../translations';

interface HeroProps {
  onScrollTo: (sectionId: string) => void;
  lang: 'pt' | 'en' | 'es';
  t: TranslationSchema['hero'];
  onOpenWhatsApp?: () => void;
}

export default function Hero({ onScrollTo, lang, t, onOpenWhatsApp }: HeroProps) {
  // Simulator state inside the white Pearl device card (mTLS & Secure API)
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncLogs, setSyncLogs] = useState<string[]>([]);
  const [successPing, setSuccessPing] = useState(false);

  // Credit Rules Engine Simulation
  const [creditScore, setCreditScore] = useState(785);
  const [creditIncome, setCreditIncome] = useState(14500);
  const [creditStep, setCreditStep] = useState<'IDLE' | 'SCORE_CHECK' | 'RULES_EVAL' | 'SUCCESS'>('SUCCESS');
  const [creditDecision, setCreditDecision] = useState<'APPROVED' | 'DENIED'>('APPROVED');
  const [isCreditRunning, setIsCreditRunning] = useState(false);

  // Simulator state inside the Rose Gold Device card (Legacy translation modules)
  const [isMigrated, setIsMigrated] = useState(false);
  const [migrationStep, setMigrationStep] = useState(0);

  const startCreditSimulation = () => {
    if (isCreditRunning) return;
    setIsCreditRunning(true);
    setCreditStep('SCORE_CHECK');
    
    // Generate organic ranges for rule testing
    const randomScore = Math.floor(Math.random() * (990 - 550 + 1)) + 550;
    const randomIncome = Math.floor(Math.random() * (22000 - 3200 + 1)) + 3200;
    setCreditScore(randomScore);
    setCreditIncome(randomIncome);

    setTimeout(() => {
      setCreditStep('RULES_EVAL');
      
      setTimeout(() => {
        const decision = (randomScore >= 620 && randomIncome >= 5000) ? 'APPROVED' : 'DENIED';
        setCreditDecision(decision);
        setCreditStep('SUCCESS');
        setIsCreditRunning(false);
      }, 1000);
    }, 1000);
  };

  // Auto-run simulations to show dynamic movement/animations across the page
  useEffect(() => {
    const creditInterval = setInterval(() => {
      if (!isCreditRunning) {
        startCreditSimulation();
      }
    }, 9000);
    return () => clearInterval(creditInterval);
  }, [isCreditRunning]);

  useEffect(() => {
    const syncInterval = setInterval(() => {
      if (!isSyncing) {
        runAPISync();
      }
    }, 15000);
    return () => clearInterval(syncInterval);
  }, [isSyncing, lang]);

  useEffect(() => {
    const legacyInterval = setInterval(() => {
      setIsMigrated(prev => !prev);
    }, 6000);
    return () => clearInterval(legacyInterval);
  }, []);

  // API manual simulation trigger pipeline
  const runAPISync = () => {
    if (isSyncing) return;
    setIsSyncing(true);
    setSuccessPing(false);
    setSyncLogs([]);

    const steps = {
      pt: [
        "⏳ Estabelecendo conexão mTLS...",
        "🔑 Certificado Digital validado.",
        "📦 Assinando pacote transação...",
        "🚀 Transmitindo para API Destino...",
        "✅ Sucesso! Protocolo API-902"
      ],
      en: [
        "⏳ Connecting mTLS...",
        "🔑 Digital Certificate validated.",
        "📦 Signing transaction envelope...",
        "🚀 Posting to Destination API...",
        "✅ Success! Protocol API-902"
      ],
      es: [
        "⏳ Conectando mTLS...",
        "🔑 Certificado Digital validado.",
        "📦 Firmando paquete transaccional...",
        "🚀 Transmitiendo a API Destino...",
        "✅ ¡Éxito! Protocolo API-902"
      ]
    };

    const activeSteps = steps[lang] || steps['pt'];
    let idx = 0;
    
    const interval = setInterval(() => {
      if (idx < activeSteps.length) {
        setSyncLogs(prev => [...prev, activeSteps[idx]]);
        idx++;
      } else {
        clearInterval(interval);
        setSuccessPing(true);
        setIsSyncing(false);
      }
    }, 550);
  };

  // Reset API state logs
  useEffect(() => {
    const initialNote = {
      pt: "⚡ Pressione 'Simular' para assinar e transmitir.",
      en: "⚡ Click 'Simulate' to sign & push payload.",
      es: "⚡ Haz click en 'Simular' para validar."
    };
    setSyncLogs([initialNote[lang] || initialNote['pt']]);
  }, [lang]);

  return (
    <section id="inicio" className="relative pt-20 pb-20 md:pt-28 md:pb-32 overflow-hidden bg-[#fafafa] text-center select-none font-sans">
      
      {/* 1. Subtle, Pure Premium Background Atmosphere (Apple White Aesthetic) */}
      <div className="absolute top-0 inset-x-0 h-[650px] bg-gradient-to-b from-[#f2f4f7]/80 to-transparent pointer-events-none" />
      
      {/* Grid Pattern with high transparency overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />

      {/* Modern Laser Scan Line Accent */}
      <div className="absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Subtle glowing mini active indicator */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200/80 shadow-xs mb-3 select-none"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-mono font-bold tracking-wider text-neutral-800 uppercase">
              {lang === 'pt' ? 'FÁBRICA DE SOFTWARE • MODERNIZAÇÃO & IA' : lang === 'es' ? 'FÁBRICA DE SOFTWARE • MODERNIZACIÓN E IA' : 'SOFTWARE FACTORY • MODERNIZATION & AI'}
            </span>
          </motion.div>

          {/* Centered Main Title mimicking the majestic "iPhone" layout */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl md:text-8xl font-display font-black tracking-tight leading-[1.03] mt-2 animate-metallic"
          >
            BMI Developers
          </motion.h1>

          {/* Centered Subtitle mimicking "Conheça a nova geração do iPhone." */}
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-2xl md:text-3xl font-display font-medium text-neutral-500 tracking-tight mt-3 max-w-2xl px-4"
          >
            {lang === 'pt' 
              ? 'Fábrica de software sob medida, modernização de legados e IA.' 
              : lang === 'es' 
              ? 'Fábrica de software a medida, modernización e inteligencia artificial.' 
              : 'Custom software factory, legacy modernization & AI.'}
          </motion.h2>

          {/* Simple dynamic description snippet */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="text-xs sm:text-sm text-neutral-400 max-w-xl mt-3 leading-relaxed px-6"
          >
            {t.sub}
          </motion.p>

          {/* Core high-contrast Apple style action buttons matching image layout */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="flex flex-row items-center justify-center gap-4 mt-8 w-full px-4"
          >
            {/* Primary Blue Button ("Fale Conosco" -> Abre WhatsApp) */}
            <button
              id="hero-cta-primary-apple"
              onClick={() => onOpenWhatsApp ? onOpenWhatsApp() : onScrollTo('servicos')}
              className="px-7 py-3 rounded-full text-sm font-semibold tracking-tight text-white bg-[#0071e3] hover:bg-[#0077ed] focus:ring-4 focus:ring-blue-100 flex items-center gap-1.5 shadow-sm transition-all duration-200 cursor-pointer"
            >
              <span>{t.ctaPrimary}</span>
              <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Secondary Outlined Blue Button ("Nossas Soluções") */}
            <button
              id="hero-cta-secondary-apple"
              onClick={() => onScrollTo('servicos')}
              className="px-7 py-3 rounded-full text-sm font-semibold tracking-tight text-[#0071e3] border border-[#0071e3] bg-transparent hover:bg-neutral-50/70 focus:ring-4 focus:ring-neutral-150 flex items-center justify-center gap-1.5 transition-all duration-180 cursor-pointer"
            >
              <span>{t.ctaSecondary}</span>
            </button>
          </motion.div>

          {/* Interactive Technology Highlights Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5 mt-8 border-y border-neutral-100 py-3.5 w-full max-w-2xl px-4 text-[11px] sm:text-xs text-neutral-500 font-mono"
          >
            {t.highlights.map((highlight, index) => (
              <span key={index} className="flex items-center gap-1 px-1 py-0.5 rounded text-neutral-700 bg-neutral-100/40 border border-neutral-200/20">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                {highlight}
              </span>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Full-height Vertical Showcase for Identidade Oficial with Contained Horizontal Width */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.32 }}
        className="w-full min-h-screen min-h-[100dvh] flex flex-col justify-center items-center bg-[#07080c] border-y border-neutral-800/80 py-8 md:py-12 mt-14 mb-14 relative overflow-hidden text-center"
      >
        {/* Subtle ambient light matching the deep dark image tones */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f131c]/70 via-[#07080c] to-[#040507] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-44 bg-neutral-800/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative flex-1 flex flex-col justify-center">
          <div className="relative rounded-2xl sm:rounded-[28px] overflow-hidden border border-neutral-800/70 bg-[#07080c] shadow-2xl group flex flex-col justify-center h-[72vh] sm:h-[78vh] md:h-[82vh] max-h-[860px]">
            <img 
              src="/assets/aistudio/m4_d2b7c0c1.png" 
              alt="BMI Developers - Arquitetura de Software e IA" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#07080c] via-[#07080c]/85 to-transparent p-5 sm:p-7 md:p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="text-left">
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-bold block mb-1">
                  {lang === 'pt' ? 'Identidade Oficial' : lang === 'es' ? 'Identidad Oficial' : 'Official Identity'}
                </span>
                <p className="text-xs sm:text-sm md:text-base font-medium text-neutral-200 max-w-xl leading-relaxed">
                  {lang === 'pt' 
                    ? 'Engenharia de precisão, software factory e IA para empresas de alto impacto.' 
                    : lang === 'es' 
                    ? 'Ingeniería de software de precisión, fábrica de software e IA.' 
                    : 'Precision software engineering, custom factory & AI.'}
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-mono text-white border border-white/20">
                  BMI.NET.BR
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* 2. THREE MAJESTIC DEVICE OBJECTS STANDING SIDE-BY-SIDE (APPLE POSTER ALIGNMENT) */}
        <div className="mt-4 md:mt-6 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 px-4 items-stretch select-none text-left">
            
            {/* DEVICE 1: Deep Obsidian Indigo (Left Side - Angled Aesthetic) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10, transition: { duration: 0.25 } }}
              className="relative rounded-[32px] border border-neutral-800/80 bg-gradient-to-b from-[#1b1c2b] via-[#0f101a] to-[#07080d] p-1.5 shadow-xl flex flex-col justify-between min-h-[460px] overflow-hidden group"
            >
              {/* Internal Glass Layer */}
              <div className="rounded-[26px] bg-[#0c0d15]/50 border border-neutral-800/20 p-5 flex flex-col justify-between h-full relative overflow-hidden">
                
                {/* Glowing Background Glows */}
                <span className="absolute top-0 right-0 w-36 h-36 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
                
                {/* Device Speaker Notch / Code Tag Indicator */}
                <div className="flex justify-between items-center select-none">
                  <div className="w-12 h-3.5 bg-neutral-900 rounded-full border border-neutral-800 flex items-center justify-center">
                    <span className="w-2.5 h-1 rounded-full bg-neutral-800" />
                  </div>
                  <span className="text-[9px] font-mono text-indigo-400 font-bold tracking-widest uppercase">
                    MOD_WEB_PRO
                  </span>
                </div>

                {/* Simulated Web Application Canvas Container */}
                <div className="my-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-display font-bold text-white tracking-tight">
                      {lang === 'pt' ? 'Motores de regras/crédito' : lang === 'es' ? 'Motores de reglas y crédito' : 'Rules & Credit Engines'}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                      {lang === 'pt' 
                        ? 'Análise de risco instantânea sob lógica de decisão complexa e alta confiabilidade.' 
                        : lang === 'es' 
                        ? 'Análisis de riesgo instantáneo bajo lógica de decisión compleja y alta confiabilidad.' 
                        : 'Instant risk analysis executed under complex decision tree logics with high reliability.'}
                    </p>
                  </div>

                  {/* Dynamic Credit decision monitor */}
                  <div className="bg-[#121323] border border-[#212338]/60 p-3.5 rounded-2xl my-3 space-y-3 font-mono text-neutral-300 shadow-inner">
                    <div className="flex justify-between items-center border-b border-neutral-850/60 pb-1.5 text-[9px]">
                      <span className="text-indigo-400 font-bold">DECISION_RULE_TREE</span>
                      <span className="flex items-center gap-1 font-bold text-[#a1a1aa]">
                        <span className={`w-1.5 h-1.5 rounded-full ${isCreditRunning ? 'bg-amber-400 animate-ping' : 'bg-emerald-400 animate-pulse'}`} />
                        {isCreditRunning ? (lang === 'pt' ? 'CONVERGINDO' : 'PROCESSING') : (lang === 'pt' ? 'STABLE' : 'READY')}
                      </span>
                    </div>

                    {/* Input parameters screen - visual dashboard */}
                    <div className="grid grid-cols-2 gap-2 text-[10px] bg-neutral-950/50 p-2 rounded-lg border border-neutral-800/40">
                      <div>
                        <span className="text-neutral-500 block uppercase text-[8px] tracking-wider">SCORE</span>
                        <span className={`font-bold font-display text-xs ${creditScore >= 700 ? 'text-emerald-400' : creditScore >= 620 ? 'text-amber-400' : 'text-rose-400'}`}>
                          {creditScore}
                        </span>
                      </div>
                      <div>
                        <span className="text-neutral-500 block uppercase text-[8px] tracking-wider">{lang === 'pt' ? 'RENDA' : 'INCOME'}</span>
                        <span className="font-bold text-white text-xs">
                          R$ {creditIncome.toLocaleString('pt-BR')}
                        </span>
                      </div>
                    </div>

                    {/* Rules checklist with animated states */}
                    <div className="space-y-1 text-[9px] text-neutral-400">
                      {/* Policy 1: Score */}
                      <div className="flex items-center justify-between">
                        <span>1. score_tier_min &gt;= 620</span>
                        {creditStep === 'SCORE_CHECK' ? (
                          <span className="text-amber-400 animate-pulse">● EVAL...</span>
                        ) : creditStep === 'IDLE' ? (
                          <span className="text-neutral-600">○ AGUARDANDO</span>
                        ) : creditScore >= 620 ? (
                          <span className="text-emerald-400 font-bold">✓ PASS</span>
                        ) : (
                          <span className="text-rose-500 font-bold">✗ FAIL</span>
                        )}
                      </div>

                      {/* Policy 2: Income / Debt level */}
                      <div className="flex items-center justify-between">
                        <span>2. income_limit &gt;= 5.000</span>
                        {creditStep === 'SCORE_CHECK' ? (
                          <span className="text-neutral-600">○ AGUARDANDO</span>
                        ) : creditStep === 'RULES_EVAL' ? (
                          <span className="text-amber-400 animate-pulse">● EVAL...</span>
                        ) : creditStep === 'IDLE' ? (
                          <span className="text-neutral-600">○ AGUARDANDO</span>
                        ) : creditIncome >= 5000 ? (
                          <span className="text-emerald-400 font-bold">✓ PASS</span>
                        ) : (
                          <span className="text-rose-500 font-bold">✗ FAIL</span>
                        )}
                      </div>

                      {/* Policy 3: Fraud checks */}
                      <div className="flex items-center justify-between">
                        <span>3. real_time_aml_reputation</span>
                        {creditStep === 'SUCCESS' ? (
                          <span className="text-emerald-400 font-bold">✓ CLEAN</span>
                        ) : creditStep === 'RULES_EVAL' || creditStep === 'SCORE_CHECK' ? (
                          <span className="text-amber-400 animate-pulse">● EVAL...</span>
                        ) : (
                          <span className="text-neutral-600">○ AGUARDANDO</span>
                        )}
                      </div>
                    </div>

                    {/* Final decision badge area */}
                    <div className="pt-2.5 border-t border-neutral-850/60">
                      {creditStep === 'SUCCESS' ? (
                        <div className={`py-1.5 px-2 rounded-xl text-center flex flex-col justify-center items-center ${creditDecision === 'APPROVED' ? 'bg-emerald-950/20 border border-emerald-500/20' : 'bg-red-950/25 border border-red-500/20'}`}>
                          <p className="text-[7.5px] font-bold text-neutral-500 uppercase tracking-widest leading-none">
                            {lang === 'pt' ? 'DECISÃO DO MOTOR' : 'ENGINE RESULTS'}
                          </p>
                          <p className={`text-[11px] font-black tracking-wider mt-1 ${creditDecision === 'APPROVED' ? 'text-emerald-400' : 'text-rose-400'}`}>
                            {creditDecision === 'APPROVED' 
                              ? (lang === 'pt' ? 'CRÉDITO APROVADO ✓' : 'APPROVED ✓') 
                              : (lang === 'pt' ? 'CRÉDITO NEGADO ✗' : 'POLICY DECLINED ✗')}
                          </p>
                          <p className="text-[8px] text-neutral-500 mt-0.5">
                            {creditDecision === 'APPROVED' ? `Tx: ${(9.5 + (1000 - creditScore) / 100).toFixed(1)}% a.a.` : 'Critérios de limite não atingidos.'}
                          </p>
                        </div>
                      ) : (
                        <div className="py-2.5 flex flex-col items-center justify-center space-y-1">
                          <div className="w-3.5 h-3.5 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
                          <span className="text-[8px] text-neutral-500 uppercase font-bold tracking-wider">RESOLVING POLICIES...</span>
                        </div>
                      )}
                    </div>

                    {/* Manual interactive simulation button */}
                    <button
                      onClick={startCreditSimulation}
                      disabled={isCreditRunning}
                      className={`w-full py-2 px-3 rounded-lg text-[9px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 border transition cursor-pointer ${
                        isCreditRunning 
                          ? 'bg-[#18192d] border-neutral-800 text-neutral-500 cursor-not-allowed'
                          : 'bg-white hover:bg-neutral-100 border-neutral-200 text-neutral-900 shadow-sm'
                      }`}
                    >
                      {isCreditRunning ? (
                        <>
                          <RefreshCw className="w-2.5 h-2.5 animate-spin text-amber-400" />
                          <span>{lang === 'pt' ? 'AVALIANDO MODELOS...' : 'EVALUATING RULES...'}</span>
                        </>
                      ) : (
                        <>
                          <Cpu className="w-3 h-3 text-indigo-500" />
                          <span>{lang === 'pt' ? 'SIMULAR NOVA AVALIAÇÃO' : 'EVALUATE NEW APPLICANT'}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Footer specs */}
                <div className="pt-2.5 border-t border-neutral-800/40 flex items-center justify-between text-[10px] text-neutral-500 font-mono">
                  <div className="flex items-center gap-1">
                    <Database className="w-3.5 h-3.5 text-indigo-400" />
                    <span>ENGINE LATENCY &lt; 8ms</span>
                  </div>
                  <span className="text-[9px] text-indigo-300">100% AUTOMATED RULES</span>
                </div>

              </div>
            </motion.div>

            {/* DEVICE 2: Pearl White Glassmorphism (Center Standout Hero - Front Facing) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -12, transition: { duration: 0.25 } }}
              className="relative rounded-[32px] border border-neutral-200/90 bg-gradient-to-b from-white via-white to-[#f4f5f8] p-1.5 shadow-2xl flex flex-col justify-between min-h-[460px] overflow-hidden group"
            >
              {/* Internal Glass Layer */}
              <div className="rounded-[26px] bg-white border border-neutral-100 p-5 flex flex-col justify-between h-full relative overflow-hidden">
                
                {/* Glowing light-mint top accent */}
                <span className="absolute top-0 inset-x-0 h-28 bg-[#10b981]/5 rounded-t-full blur-xl pointer-events-none" />

                {/* Device Speaker Notch / Code Tag Indicator */}
                <div className="flex justify-between items-center select-none">
                  <div className="w-12 h-3.5 bg-neutral-100 rounded-full border border-neutral-200/70 flex items-center justify-center">
                    <span className="w-2.5 h-1 rounded-full bg-neutral-300" />
                  </div>
                  <span className="text-[9px] font-mono text-emerald-600 font-bold tracking-widest uppercase">
                    GOV_SECURE_A1
                  </span>
                </div>

                {/* Simulated API Secure Sync Envelope */}
                <div className="my-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 font-bold">
                      <h3 className="text-xl font-display font-bold text-neutral-950 tracking-tight">
                        {lang === 'pt' ? 'Integrações APIs' : lang === 'es' ? 'Integraciones de APIs' : 'API Integrations'}
                      </h3>
                      <span className="text-[8px] tracking-wider px-1.5 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-600 font-mono font-black uppercase">
                        mTLS
                      </span>
                    </div>
                    <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                      {lang === 'pt' 
                        ? 'Comunicação síncrona criptografada com ecossistemas complexos, ERPs corporativos e gateways de pagamentos.' 
                        : lang === 'es' 
                        ? 'Comunicación síncrona encriptada con ecosistemas complejos, ERPs corporativos y pasarelas de pago.' 
                        : 'Secure encrypted pipelines synced direct with enterprise systems, ERPs, and banking APIs.'}
                    </p>
                  </div>

                  {/* Interactive code transmission sync status panel */}
                  <div className="bg-neutral-50 border border-neutral-200/60 p-3.5 rounded-2xl my-3 font-mono text-[10px] space-y-3 relative overflow-hidden shadow-sm">
                    
                    {/* Visual Connection Handshake Node pipeline */}
                    <div className="flex items-center justify-between px-3 py-2.5 bg-neutral-100/85 rounded-xl border border-neutral-200/40 relative">
                      <div className="flex flex-col items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isSyncing ? 'bg-indigo-50 text-indigo-600 shadow-sm border border-indigo-200' : 'bg-neutral-100/80 text-neutral-500 border border-neutral-200/50'}`}>
                          <Cpu className="w-4 h-4 animate-pulse" />
                        </div>
                        <span className="text-[7.5px] font-bold text-neutral-400 mt-1 uppercase tracking-tight">Sua API</span>
                      </div>

                      <div className="flex-1 mx-2 relative flex flex-col items-center justify-center">
                        <div className="w-full h-[3px] bg-neutral-200/80 rounded-full relative overflow-hidden">
                          {isSyncing && (
                            <motion.div
                              animate={{ x: ['-100%', '200%'] }}
                              transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                              className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"
                            />
                          )}
                        </div>
                        <span className={`text-[7px] font-bold mt-1 tracking-wider uppercase ${successPing ? 'text-emerald-600' : isSyncing ? 'text-indigo-500 animate-pulse' : 'text-neutral-400'}`}>
                          {successPing ? 'CONNECTED' : isSyncing ? 'SENDING' : 'SECURE'}
                        </span>
                      </div>

                      <div className="flex flex-col items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${successPing ? 'bg-emerald-100 text-emerald-600 shadow-sm border border-emerald-300' : isSyncing ? 'bg-amber-100 text-amber-600 animate-bounce border border-amber-300' : 'bg-neutral-100/80 text-neutral-500 border border-neutral-200/50'}`}>
                          <Server className="w-4 h-4" />
                        </div>
                        <span className="text-[7.5px] font-bold text-neutral-400 mt-1 uppercase tracking-tight">ERP / BANCO</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-[9px] text-neutral-400">
                      <span>CONSOLE FEED</span>
                      <span className="flex items-center gap-1 font-bold text-neutral-700">
                        <span className={`w-2 h-2 rounded-full ${successPing ? 'bg-emerald-500 animate-pulse' : 'bg-neutral-300'}`} />
                        {successPing ? 'ESTABLISHED' : 'STANDBY'}
                      </span>
                    </div>

                    <div className="bg-neutral-900 text-neutral-300 p-2.5 rounded-xl text-[8px] font-mono h-[72px] overflow-hidden flex flex-col justify-end space-y-1 border border-neutral-800 shadow-inner">
                      {syncLogs.slice(-3).map((log, lIdx) => (
                        <p 
                          key={lIdx} 
                          className={`transition-all flex items-center gap-1 leading-tight ${
                            log && (log.includes('✅') || log.includes('Success!')) 
                              ? 'text-emerald-400 font-bold' 
                              : 'text-neutral-300'
                          }`}
                        >
                          <span className="text-neutral-600 select-none">&gt;</span>
                          <span className="truncate">{log || ''}</span>
                        </p>
                      ))}
                    </div>

                    {/* Interactive push button */}
                    <button
                      onClick={runAPISync}
                      disabled={isSyncing}
                      className={`w-full py-2 px-3 rounded-lg text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 border transition cursor-pointer ${
                        isSyncing 
                          ? 'bg-neutral-50 border-neutral-200 text-neutral-300 cursor-not-allowed'
                          : 'bg-neutral-950 border-neutral-950 text-white hover:bg-[#0071e3] hover:border-[#0071e3]'
                      }`}
                    >
                      {isSyncing ? (
                        <>
                          <RefreshCw className="w-3 h-3 animate-spin text-emerald-400" />
                          <span>SYNCING...</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-2.5 h-2.5 fill-current" />
                          <span>{lang === 'pt' ? 'SIMULAR TRANSMISSÃO' : lang === 'es' ? 'VER DEMOSTRACIÓN' : 'SIMULATE PUSH'}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Footer specs */}
                <div className="pt-2.5 border-t border-neutral-200/60 flex items-center justify-between text-[10px] text-neutral-400 font-mono">
                  <div className="flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="font-bold text-neutral-600">AES-256 SIGNED</span>
                  </div>
                  <span className="text-[9px] text-neutral-500">GOVT OK</span>
                </div>

              </div>
            </motion.div>

            {/* DEVICE 3: Elegant Rose-Gold Champagne (Right Side - Angled Aesthetic) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10, transition: { duration: 0.25 } }}
              className="relative rounded-[32px] border border-[#e2d5d5] bg-gradient-to-b from-[#fbf4f4] via-[#f7eded] to-[#eddcdc] p-1.5 shadow-xl flex flex-col justify-between min-h-[460px] overflow-hidden group"
            >
              {/* Internal Glass Layer */}
              <div className="rounded-[26px] bg-[#fdfafb]/60 border border-[#f0e4e4] p-5 flex flex-col justify-between h-full relative overflow-hidden">
                
                {/* Glowing subtle rose accent */}
                <span className="absolute top-0 right-0 w-36 h-36 bg-rose-500/5 rounded-full blur-2xl pointer-events-none" />

                {/* Device Speaker Notch / Code Tag Indicator */}
                <div className="flex justify-between items-center select-none">
                  <div className="w-12 h-3.5 bg-[#ebdada] rounded-full border border-[#dfcccc] flex items-center justify-center">
                    <span className="w-2.5 h-1 rounded-full bg-[#dfcccc]" />
                  </div>
                  <span className="text-[9px] font-mono text-rose-500 font-bold tracking-widest uppercase">
                    LEGACY_TO_REST
                  </span>
                </div>

                {/* Simulated Migration Comparison Code Block */}
                <div className="my-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-display font-bold text-neutral-900 tracking-tight">
                      {lang === 'pt' ? 'Modernização de Legados' : lang === 'es' ? 'Modernización de Legados' : 'Legacy Modernization'}
                    </h3>
                    <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                      {lang === 'pt' 
                        ? 'Reescrita incremental de monolitos antigos e integrações legadas sem quebrar sua operação.' 
                        : lang === 'es' 
                        ? 'Modernización incremental de código heredado sin interrumpir sus servicios actuales.' 
                        : 'Incremental safe refactoring of COBOL/Java legacy modules into ultra-fast cloud services.'}
                    </p>
                  </div>

                  {/* Interactive layout modernization visual sandbox */}
                  <div className="bg-neutral-950 border border-neutral-800 text-neutral-300 p-3 rounded-2xl my-3 font-mono text-[9px] min-h-[195px] flex flex-col justify-between shadow-lg relative overflow-hidden">
                    
                    {/* Header bar */}
                    <div className="flex justify-between items-center border-b border-neutral-800/80 pb-1.5 text-[8px] text-neutral-500">
                      <span>{isMigrated ? 'ARCHITECTURE: MODERN DECOUPLED' : 'ARCHITECTURE: LEGACY MONOLITH'}</span>
                      <span className={`px-1.5 py-0.5 rounded font-bold ${isMigrated ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                        {isMigrated ? 'CLOUATIVE' : 'DEPRECATED'}
                      </span>
                    </div>

                    {/* Animated Stage using Framer motion for super slick layout transformation */}
                    <div className="flex-1 flex flex-col justify-center my-1.5 relative min-h-[100px]">
                      <AnimatePresence mode="wait">
                        {!isMigrated ? (
                          <motion.div
                            key="legacy"
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.04 }}
                            transition={{ duration: 0.25 }}
                            className="space-y-2 text-center flex flex-col justify-center h-full"
                          >
                            {/* Visual heavy monolith box */}
                            <div className="mx-auto w-10 h-10 rounded-xl bg-red-950/20 border border-red-500/20 flex flex-col items-center justify-center text-red-400 relative">
                              <Database className="w-5 h-5 animate-pulse" />
                              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-ping" />
                              <span className="text-[6px] text-red-500/90 mt-0.5 font-bold font-mono">2.4s</span>
                            </div>
                            
                            <p className="text-[8.5px] text-red-400 font-bold text-center uppercase tracking-tight">
                              Java Monolith • SOAP XML Tunnels
                            </p>
                            
                            <div className="bg-red-950/20 border border-red-900/30 p-1.5 rounded-lg text-left">
                              <div className="flex justify-between text-[7px] text-red-400/90 font-bold">
                                <span>API RESPONSIVENESS:</span>
                                <span>2.4 SEC</span>
                              </div>
                              <div className="w-full h-1 bg-neutral-900 rounded-full mt-1 overflow-hidden">
                                <div className="w-[100%] h-full bg-red-500" />
                              </div>
                            </div>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="modern"
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.04 }}
                            transition={{ duration: 0.25 }}
                            className="space-y-2 h-full flex flex-col justify-between"
                          >
                            {/* Decoupled 3 Nodes Network */}
                            <div className="flex justify-around items-center px-1.5 py-1 bg-neutral-900/60 rounded-xl border border-neutral-850">
                              <div className="flex flex-col items-center">
                                <div className="w-6 h-6 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-sm">
                                  <Layers className="w-3 h-3" />
                                </div>
                                <span className="text-[6px] text-neutral-400 mt-1">React SPA</span>
                              </div>
                              
                              <div className="w-2.5 h-[1.5px] bg-emerald-500/30" />

                              <div className="flex flex-col items-center">
                                <div className="w-6 h-6 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 shadow-sm animate-pulse">
                                  <Cpu className="w-3 h-3" />
                                </div>
                                <span className="text-[6px] text-neutral-400 mt-1">API Node</span>
                              </div>

                              <div className="w-2.5 h-[1.5px] bg-emerald-500/30" />

                              <div className="flex flex-col items-center">
                                <div className="w-6 h-6 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shadow-sm">
                                  <Shield className="w-3 h-3" />
                                </div>
                                <span className="text-[6px] text-neutral-400 mt-1">mTLS Sec</span>
                              </div>
                            </div>

                            {/* Ultra-low latency stats */}
                            <div className="bg-emerald-950/20 border border-emerald-900/30 p-1.5 rounded-lg text-left">
                              <div className="flex justify-between text-[7px] text-emerald-400 font-bold">
                                <span>API LATENCY (gRPC):</span>
                                <span>9.2 ms (99.6% faster)</span>
                              </div>
                              <div className="w-full h-1 bg-neutral-900 rounded-full mt-1 overflow-hidden">
                                <motion.div 
                                  initial={{ width: "0%" }}
                                  animate={{ width: "1.2%" }}
                                  transition={{ duration: 0.5 }}
                                  className="h-full bg-emerald-500" 
                                />
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Interactive Optimize button */}
                    <button 
                      onClick={() => setIsMigrated(!isMigrated)}
                      className={`w-full py-1.5 px-2 rounded-xl font-bold uppercase tracking-wider flex items-center justify-center gap-1 text-[8.5px] border cursor-pointer transition ${
                        isMigrated 
                          ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-400 hover:bg-emerald-950/60' 
                          : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:bg-neutral-850 hover:text-white'
                      }`}
                    >
                      <RefreshCw className={`w-2.5 h-2.5 ${!isMigrated ? 'text-rose-400 animate-spin' : 'text-emerald-400'}`} style={{ animationDuration: !isMigrated ? '2.5s' : '0s' }} />
                      <span>
                        {isMigrated 
                          ? (lang === 'pt' ? '✓ REATOR TOTALMENTE OTIMIZADO' : '✓ REPAIRED & OPTIMIZED') 
                          : (lang === 'pt' ? 'MIGRAR PARA MICROSSERVIÇOS' : 'MIGRATE NOW')}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Footer specs */}
                <div className="pt-2.5 border-t border-[#ebdada] flex items-center justify-between text-[10px] text-neutral-500 font-mono">
                  <div className="flex items-center gap-1">
                    <RefreshCw className="w-3.5 h-3.5 text-neutral-700 animate-spin" />
                    <span>ZERO DOWNTIME</span>
                  </div>
                  <span className="text-[9px] text-[#0071e3] font-bold">REFACTOR STABLE</span>
                </div>

              </div>
            </motion.div>

          </div>
        </div>

        {/* 3. SUBTLE COMPACT SQUAD BANNER */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14 max-w-sm mx-auto p-4 rounded-2xl bg-white border border-neutral-200/70 shadow-xs flex items-center justify-middle gap-3"
        >
          <Cpu className="w-5 h-5 text-[#0071e3] animate-pulse" />
          <div className="text-left">
            <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 leading-none">
              STANDARDS
            </p>
            <p className="text-xs text-neutral-800 font-semibold mt-0.5">
              {lang === 'pt' ? 'Provas de conceito homologadas em tempo real' : lang === 'es' ? 'Pruebas de concepto de alta seguridad' : 'Proof of concepts validated live'}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
