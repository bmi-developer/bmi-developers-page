/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TranslationSchema } from '../translations';
import { Activity, Cpu, Lock, ShieldCheck } from 'lucide-react';

interface MetricsProps {
  t: TranslationSchema['metrics'];
}

export default function Metrics({ t }: MetricsProps) {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Activity className="w-5 h-5 text-neutral-900" />;
      case 1:
        return <Cpu className="w-5 h-5 text-neutral-900" />;
      case 2:
        return <Lock className="w-5 h-5 text-neutral-900" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-neutral-900" />;
    }
  };

  return (
    <section id="metricas" className="py-20 md:py-28 bg-neutral-50/50 border-y border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Headings */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-[11px] font-mono font-bold tracking-widest text-neutral-400 uppercase">
            01 . {t.heading.slice(0, 20)}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-950 mt-2 tracking-tight">
            {t.heading}
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base mt-3 max-w-lg mx-auto leading-relaxed">
            {t.sub}
          </p>
        </div>

        {/* Metrics Grid - Responsive equal-sized premium cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto items-stretch">
          {t.items.map((metric, i) => (
            <div
              key={i}
              id={`stat-card-${i}`}
              className="bg-white border border-neutral-200/85 p-6 sm:p-7 rounded-2xl shadow-2xs hover:border-neutral-300 hover:shadow-xs transition-all duration-200 flex flex-col justify-between h-full text-left group"
            >
              <div>
                {/* Icon wrapper badge */}
                <div className="flex justify-start items-center mb-6">
                  <span className="p-2.5 rounded-xl bg-neutral-50 border border-neutral-150 shadow-2xs group-hover:scale-105 transition-transform">
                    {getIcon(i)}
                  </span>
                </div>
                
                {/* Big Title/Visual Metric label */}
                <div id={`stat-title-${i}`} className="text-2xl sm:text-3xl xl:text-3.5xl font-display font-black text-neutral-950 tracking-tight leading-none flex flex-wrap items-baseline gap-1">
                  <span>{metric.value}</span>
                  <span className="text-neutral-400 font-bold text-lg sm:text-xl lg:text-lg xl:text-2xl">
                    {metric.suffix}
                  </span>
                </div>
                
                {/* Subtitle */}
                <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mt-4">
                  {metric.label}
                </h3>
                
                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-500 mt-2 leading-relaxed">
                  {metric.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
