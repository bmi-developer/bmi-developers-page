/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Cpu, Server, Sparkles, Code, BrainCircuit, ShieldAlert, BadgeCheck, Users, Terminal } from 'lucide-react';
import { LanguageType } from '../translations';

interface TechStackAIProps {
  lang: LanguageType;
}

export default function TechStackAI({ lang }: TechStackAIProps) {
  const content = {
    pt: {
      tag: 'Autoridade & Tecnologia',
      heading: 'Engenharia de Elite & Integração das Melhores IAs',
      sub: 'A BMI Developers combina excelência técnica, velocidade extrema de entrega e especialistas em arquitetura de sistemas. Desenvolvemos com o estado da arte e conectamos sua operação às maiores inteligências artificiais do mercado.',
      cardEngineerTitle: 'Engenharia de Alta Performance & Velocidade',
      cardEngineerDesc: 'Foco absoluto em qualidade impecável e máxima velocidade de entrega. Aplicamos padrões rigorosos de arquitetura de software, cobertura abrangente de testes automatizados, esteiras de CI/CD contínuas e desenvolvimento acelerado para transformar seu software em um verdadeiro ativo escalável e sem débitos técnicos.',
      aiSectionTitle: 'Principais Modelos de IA que Dominamos e Integramos',
      aiSectionSub: 'Criamos motores de decisão inteligentes, automação inteligente de relatórios, agentes autônomos e busca semântica corporativa utilizando os maiores provedores do mundo:',
      techSectionTitle: 'Ecossistema Tecnológico Moderno',
      techSectionSub: 'Nossa esteira foi desenhada para velocidade, segurança extrema e escalabilidade infinita.',
      models: [
        {
          name: 'Google Gemini',
          badge: 'Multimodal / Contexto Amplo',
          desc: 'Excelente para processar contextos gigantescos de documentos técnicos, análise massiva de dados corporativos e interações de voz em tempo real de latência ultra-baixa.',
          provider: 'Google Cloud Vertex AI'
        },
        {
          name: 'OpenAI GPT',
          badge: 'Agentes Cognitivos / Raciocínio',
          desc: 'Perfeito para assistentes cognitivos, tomadas de decisão lógicas complexas, processamento de linguagem natural ultra-preciso e estruturação automatizada de dados brutos.',
          provider: 'OpenAI Enterprise'
        },
        {
          name: 'Anthropic Claude',
          badge: 'Escrita & Geração de Código',
          desc: 'Líder em geração assistida de código, raciocínio lógico profundo, redação corporativa qualificada e refatorações complexas com alta assertividade.',
          provider: 'Anthropic API / AWS Bedrock'
        },
        {
          name: 'Llama & Open Source',
          badge: 'Soberano / On-Premise',
          desc: 'Ideal para deploies locais, on-premise ou privados em nuvem, garantindo soberania total dos seus dados, segurança contra vazamentos e custos otimizados sob escala massiva.',
          provider: 'Private Cloud Deploy'
        }
      ],
      strengths: [
        {
          title: 'IA Conectada aos seus Dados',
          desc: 'Sistemas RAG (Retrieval-Augmented Generation) seguros integrados ao banco de dados da sua empresa, garantindo respostas baseadas em fatos reais, sem alucinações.',
          icon: <BrainCircuit className="w-5 h-5 text-neutral-900" />
        },
        {
          title: 'Código Limpo e Escalável',
          desc: 'Desenvolvimento focado em TypeScript, Go e Python. Padrões limpos que permitem a qualquer time continuar a evolução do software sem fricção.',
          icon: <Code className="w-5 h-5 text-neutral-900" />
        },
        {
          title: 'Infraestrutura de Nuvem Robusta',
          desc: 'Arquiteturas prontas para milhões de requisições. Docker, Kubernetes, monitoramento ativo de integridade e servidores otimizados.',
          icon: <Server className="w-5 h-5 text-neutral-900" />
        }
      ],
      footerNote: 'Nossa equipe projeta e integra soluções de IA com foco prático em resultados reais de negócios, blindando a segurança intelectual da sua empresa.'
    },
    en: {
      tag: 'Authority & Tech Stack',
      heading: 'Elite Engineering & Integration of Top-Tier AI Models',
      sub: 'BMI Developers combines engineering excellence, rapid execution, and modern systems architecture. We build with state-of-the-art tech and connect your operation directly with the leading artificial intelligence platforms.',
      cardEngineerTitle: 'High-Performance Engineering & Velocity',
      cardEngineerDesc: 'Absolute focus on impeccable code quality and maximum delivery velocity. We enforce rigorous architectural standards, comprehensive automated testing suites, continuous CI/CD pipelines, and AI-accelerated workflows to ensure scalable software with zero technical debt.',
      aiSectionTitle: 'Major AI Models We Master and Integrate',
      aiSectionSub: 'We build intelligent decision engines, smart report automation, autonomous agents, and enterprise semantic search using the worlds leading AI providers:',
      techSectionTitle: 'Modern Technological Ecosystem',
      techSectionSub: 'Our development pipeline is designed for top-tier speed, strict security, and limitless scalability.',
      models: [
        {
          name: 'Google Gemini',
          badge: 'Multimodal / Advanced Context',
          desc: 'Excellent for processing massive contexts of technical documents, automated data insights, and ultra-low latency real-time voice and text operations.',
          provider: 'Google Cloud Vertex AI'
        },
        {
          name: 'OpenAI GPT',
          badge: 'Cognitive Agents / Reasoning',
          desc: 'Ideal for cognitive assistants, complex logical decision-making, highly precise natural language processing, and automated parsing of raw data.',
          provider: 'OpenAI Enterprise'
        },
        {
          name: 'Anthropic Claude',
          badge: 'Code Generation & Writing',
          desc: 'Industry leader in code generation, logical reasoning, professional content draft generation, and highly accurate complex system refactoring.',
          provider: 'Anthropic API / AWS Bedrock'
        },
        {
          name: 'Llama & Open Source',
          badge: 'Sovereign / On-Premise',
          desc: 'Perfect for on-premise, local, or private cloud deployments, ensuring absolute data sovereignty, protection against leaks, and optimal cost under massive load.',
          provider: 'Private Cloud Deploy'
        }
      ],
      strengths: [
        {
          title: 'Data-Grounded AI',
          desc: 'Secure RAG (Retrieval-Augmented Generation) systems linked to your database, ensuring contextualized responses with zero hallucination.',
          icon: <BrainCircuit className="w-5 h-5 text-neutral-900" />
        },
        {
          title: 'Clean, Scalable Code',
          desc: 'Development strictly focused on TypeScript, Go, and Python. Clean patterns that allow any team to seamlessly evolve the code over time.',
          icon: <Code className="w-5 h-5 text-neutral-900" />
        },
        {
          title: 'Robust Cloud Infrastructure',
          desc: 'Architectures ready for millions of daily requests. Docker, Kubernetes, active health checks, and optimized runtime servers.',
          icon: <Server className="w-5 h-5 text-neutral-900" />
        }
      ],
      footerNote: 'Our team designs and implements custom AI integrations with a focus on business results, safeguarding your intellectual property.'
    },
    es: {
      tag: 'Autoridad y Tecnología',
      heading: 'Ingeniería de Élite e Integración de las Mejores IA',
      sub: 'BMI Developers combina excelencia técnica, velocidad extrema de entrega y especialistas en arquitectura de sistemas. Desarrollamos con tecnología de vanguardia y conectamos tu operación con las mayores inteligencias artificiales.',
      cardEngineerTitle: 'Ingeniería de Alto Rendimiento y Velocidad',
      cardEngineerDesc: 'Enfoque absoluto en calidad impecable y máxima velocidad de entrega. Aplicamos estándares rigurosos de arquitectura de software, cobertura total de pruebas automatizadas, tuberías de CI/CD continuas y desarrollo acelerado para garantizar un software escalable y libre de deuda técnica.',
      aiSectionTitle: 'Modelos Principales de IA que Dominamos e Integramos',
      aiSectionSub: 'Creamos motores de decisión automatizados, generación inteligente de reportes y agentes autónomos utilizando los mejores proveedores a nivel mundial:',
      techSectionTitle: 'Ecosistema de Tecnología Moderna',
      techSectionSub: 'Nuestra línea de producción está diseñada para velocidad extrema, seguridad y escalabilidad ilimitada.',
      models: [
        {
          name: 'Google Gemini',
          badge: 'Multimodal / Contexto Amplio',
          desc: 'Excelente para procesar enormes volúmenes de documentos técnicos, análisis de datos de escala masiva e interaciones de voz de ultra baja latencia.',
          provider: 'Google Cloud Vertex AI'
        },
        {
          name: 'OpenAI GPT',
          badge: 'Agentes Cognitivos / Razonamiento',
          desc: 'Perfecto para asistentes cognitivos corporativos, toma de decisiones lógicas estructuradas, procesamiento de lenguaje natural y formateo de datos.',
          provider: 'OpenAI Enterprise'
        },
        {
          name: 'Anthropic Claude',
          badge: 'Redacción y Código de Precisión',
          desc: 'Líder de la industria en generación de código, razonamiento lógico riguroso, análisis técnico de documentos complejos y refactorizaciones.',
          provider: 'Anthropic API / AWS Bedrock'
        },
        {
          name: 'Llama y Código Abierto',
          badge: 'Soberano / On-Premise',
          desc: 'Ideal para implementaciones locales, privadas u on-premise, garantizando soberanía total sobre tus datos corporativos y costos optimizados a escala.',
          provider: 'Private Cloud Deploy'
        }
      ],
      strengths: [
        {
          title: 'IA Conectada a tus Datos',
          desc: 'Sistemas RAG (Retrieval-Augmented Generation) altamente protegidos e integrados con tu base de datos para ofrecer respuestas fácticas y sin alucinaciones.',
          icon: <BrainCircuit className="w-5 h-5 text-neutral-900" />
        },
        {
          title: 'Código Limpio y Mantenible',
          desc: 'Desarrollo moderno enfocado en TypeScript, Go y Python. Estructuras limpias y legibles que facilitan el crecimiento orgánico de tu negocio.',
          icon: <Code className="w-5 h-5 text-neutral-900" />
        },
        {
          title: 'Infraestructura Cloud de Élite',
          desc: 'Servidores listos para recibir millones de peticiones diarias sin inactividad. Docker, Kubernetes, balanceadores de carga y monitores de salud.',
          icon: <Server className="w-5 h-5 text-neutral-900" />
        }
      ],
      footerNote: 'Diseñamos e integramos IA enfocándonos en retornos prácticos de negocio, resguardando en todo momento el valor de tu propiedad intelectual.'
    }
  };

  const t = content[lang] || content.pt;

  return (
    <section id="tecnologias-ia" className="py-20 md:py-28 bg-neutral-50/50 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-[11px] font-mono font-bold tracking-widest text-neutral-400 uppercase inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-neutral-500 animate-pulse" />
            03 . {t.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-950 mt-2 tracking-tight">
            {t.heading}
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base mt-2.5 leading-relaxed">
            {t.sub}
          </p>
        </div>

        {/* 1. Senior Authority / Experience Section - Premium Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto mb-16">
          
          {/* Card: Elite Seniority & Authority (Left 7cols) */}
          <div className="lg:col-span-7 bg-white border border-neutral-200/90 rounded-3xl p-6 sm:p-10 flex flex-col justify-between shadow-3xs group hover:border-neutral-300 transition-all">
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <span className="p-3 bg-neutral-50 border border-neutral-150 rounded-2xl flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-neutral-950" />
                </span>
                <div>
                  <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-neutral-400 block">
                    {lang === 'pt' ? 'Garantia de Qualidade & Velocidade' : lang === 'es' ? 'Garantía de Calidad y Velocidad' : 'Quality Assurance & Velocity'}
                  </span>
                  <h3 className="text-lg sm:text-xl font-display font-black text-neutral-950 tracking-tight">
                    {t.cardEngineerTitle}
                  </h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                {t.cardEngineerDesc}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold bg-neutral-50 text-neutral-800 border border-neutral-200">
                <BadgeCheck className="w-3.5 h-3.5 text-neutral-950" />
                {lang === 'pt' ? 'Alta Velocidade de Entrega' : lang === 'es' ? 'Alta Velocidad de Entrega' : 'High Delivery Velocity'}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold bg-neutral-50 text-neutral-800 border border-neutral-200">
                <Terminal className="w-3.5 h-3.5 text-neutral-950" />
                {lang === 'pt' ? 'Arquitetura Limpa & Resiliente' : lang === 'es' ? 'Arquitectura Limpia y Resiliente' : 'Clean & Resilient Architecture'}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold bg-neutral-50 text-neutral-800 border border-neutral-200">
                <Cpu className="w-3.5 h-3.5 text-neutral-950" />
                {lang === 'pt' ? 'Zero Débito Técnico' : lang === 'es' ? 'Cero Deuda Técnica' : 'Zero Technical Debt'}
              </span>
            </div>
          </div>

          {/* Side stats & pillars (Right 5cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {t.strengths.map((str, idx) => (
              <div 
                key={idx}
                className="bg-white border border-neutral-200/85 p-5 rounded-2xl flex gap-4 items-start shadow-3xs hover:border-neutral-300 transition-colors"
              >
                <span className="p-2.5 bg-neutral-50 border border-neutral-150 rounded-xl shrink-0">
                  {str.icon}
                </span>
                <div className="text-left">
                  <h4 className="font-bold text-neutral-950 text-xs sm:text-sm tracking-tight">
                    {str.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-neutral-500 mt-1 leading-relaxed">
                    {str.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* 2. Main AI Models Integrations Section */}
        <div className="max-w-6xl mx-auto mt-12 bg-white border border-neutral-200/85 p-6 sm:p-10 rounded-3xl shadow-3xs">
          
          <div className="text-left max-w-2xl mb-10">
            <h3 className="text-xl sm:text-2xl font-display font-extrabold text-neutral-950 tracking-tight">
              {t.aiSectionTitle}
            </h3>
            <p className="text-neutral-500 text-xs sm:text-sm mt-1.5 leading-relaxed">
              {t.aiSectionSub}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {t.models.map((model, index) => (
              <div 
                key={index}
                className="bg-neutral-50/50 border border-neutral-200/60 p-5 rounded-2xl flex flex-col justify-between hover:border-neutral-300 transition-colors group"
              >
                <div>
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                    {model.provider}
                  </span>
                  <h4 className="text-sm sm:text-base font-display font-black text-neutral-950 tracking-tight">
                    {model.name}
                  </h4>
                  <span className="inline-block mt-1 px-2 py-0.5 text-[9px] font-semibold bg-neutral-100 text-neutral-700 border border-neutral-200 rounded-md">
                    {model.badge}
                  </span>
                  <p className="text-[11px] sm:text-xs text-neutral-500 mt-3 leading-relaxed">
                    {model.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Secure assurance banner */}
          <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
            <span className="text-[11px] text-neutral-400 font-medium leading-normal">
              ✦ {t.footerNote}
            </span>
            <div className="flex gap-2 shrink-0">
              <span className="text-[9px] font-mono font-bold px-2 py-1 bg-neutral-100 border border-neutral-200 text-neutral-600 rounded-md">
                REST & gRPC APIs
              </span>
              <span className="text-[9px] font-mono font-bold px-2 py-1 bg-neutral-100 border border-neutral-200 text-neutral-600 rounded-md">
                RAG Stack
              </span>
              <span className="text-[9px] font-mono font-bold px-2 py-1 bg-neutral-100 border border-neutral-200 text-neutral-600 rounded-md">
                SSL / mTLS
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
