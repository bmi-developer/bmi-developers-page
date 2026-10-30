/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type LanguageType = 'pt' | 'en' | 'es';

export interface TranslationSchema {
  nav: {
    services: string;
    metrics: string;
    estimator: string;
    methodology: string;
    testimonials: string;
    faq: string;
    contact: string;
    cta: string;
  };
  hero: {
    badge: string;
    titleFirst: string;
    titleColor: string;
    titleLast: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    highlights: string[];
  };
  metrics: {
    heading: string;
    sub: string;
    items: {
      value: string;
      suffix: string;
      label: string;
      desc: string;
    }[];
  };
  services: {
    tag: string;
    heading: string;
    sub: string;
    actionBtn: string;
    items: {
      id: string;
      tag: string;
      title: string;
      description: string;
      features: string[];
      techs: string[];
    }[];
  };
  estimator: {
    tag: string;
    heading: string;
    sub: string;
    productTypeLabel: string;
    complexityLabel: string;
    timelineLabel: string;
    types: {
      web: string;
      mobile: string;
      both: string;
      custom: string;
    };
    complexity: {
      low: string;
      medium: string;
      high: string;
    };
    timeline: {
      normal: string;
      express: string;
    };
    resultTitle: string;
    weeks: string;
    team: string;
    cost: string;
    costPrefix: string;
    cta: string;
  };
  methodology: {
    tag: string;
    heading: string;
    sub: string;
    steps: {
      step: string;
      title: string;
      desc: string;
    }[];
  };
  testimonials: {
    tag: string;
    heading: string;
    sub: string;
  };
  contact: {
    tag: string;
    heading: string;
    sub: string;
    form: {
      name: string;
      email: string;
      phone: string;
      company: string;
      role: string;
      budget: string;
      budgetOptions: string[];
      description: string;
      descriptionPlaceholder: string;
      required: string;
      submit: string;
      successTitle: string;
      successMessage: string;
      prefilledAlert: string;
    };
  };
  faq: {
    tag: string;
    heading: string;
    sub: string;
    categories: {
      all: string;
      process: string;
      tech: string;
      cost: string;
      security: string;
    };
  };
  footer: {
    desc: string;
    col1Title: string;
    col2Title: string;
    col3Title: string;
    copy: string;
    terms: string;
    privacy: string;
  };
}

export const TRANSLATIONS: Record<LanguageType, TranslationSchema> = {
  pt: {
    nav: {
      services: 'Especializações',
      metrics: 'Melhores Práticas',
      estimator: 'Simulador de Projeto',
      methodology: 'Metodologias',
      testimonials: 'Depoimentos',
      faq: 'FAQ',
      contact: 'Contato',
      cta: 'Solicitar Proposta'
    },
    hero: {
      badge: '✦ BMI DEVELOPERS • FÁBRICA DE SOFTWARE & ENGENHARIA DE IA',
      titleFirst: 'Fábrica de software sob medida: ',
      titleColor: 'da modernização à Inteligência Artificial',
      titleLast: ' com máxima qualidade e velocidade.',
      sub: 'Somos uma fábrica de software completa: desenvolvemos sistemas web e mobile sob medida, realizamos a modernização de softwares legados, implementamos automação de processos com agentes de IA, construímos modelos de Machine Learning e integramos os principais LLMs com velocidade extrema de entrega.',
      ctaPrimary: 'Falar com Consultor',
      ctaSecondary: 'Nossas Soluções',
      highlights: [
        'Fábrica de Software Sob Medida',
        'Modernização de Legados',
        'Automação de Processos & Agentes de IA',
        'Machine Learning, LLMs & IA Assistida'
      ]
    },
    metrics: {
      heading: 'Melhores práticas e engenharia moderna.',
      sub: 'Adotamos os padrões mais respeitados da engenharia de software para garantir que o seu produto seja resiliente, seguro e escalável desde o primeiro dia.',
      items: [
        {
          value: 'Ágile',
          suffix: '',
          label: 'Metodologias ágeis',
          desc: 'Rituais de desenvolvimento, sprints quinzenais estruturados e acompanhamento transparente do progresso do seu projeto.'
        },
        {
          value: 'Docker',
          suffix: ' & K8s',
          label: 'Arquitetura escalável',
          desc: 'Soluções planejadas para rodar em containers escaláveis sob alta demanda de tráfego com estabilidade garantida.'
        },
        {
          value: 'Secure',
          suffix: ' SSL',
          label: 'Segurança absoluta',
          desc: 'Abordagem focada em criptografia robusta, barramento de APIs seguras e total conformidade com regulamentos e LGPD/bancários.'
        },
        {
          value: 'TDD',
          suffix: ' / BDD',
          label: 'Testes automatizados',
          desc: 'Garantia de qualidade contínua com esteiras de testes complexos para evitar regressões nas funções de produção.'
        }
      ]
    },
    services: {
      tag: 'Nossos Pilares',
      heading: 'Fábrica de software, modernização e inteligência artificial.',
      sub: 'Atuamos no ciclo completo de engenharia de software: criação sob medida, modernização de legados, automação de processos com agentes de IA, machine learning preditivo, desenvolvimento assistido por IA e integração de LLMs corporativos.',
      actionBtn: 'Falar com Especialista',
      items: [
        {
          id: 'sistemas-customizados',
          tag: 'Fábrica de Software',
          title: 'Fábrica de Software & Desenvolvimento Sob Medida',
          description: 'Criação de plataformas web e mobile completas sob medida, ERPs/CRMs específicos, motores de regras de negócios e dashboards inteligentes com squads dedicados de alta performance e rigor técnico.',
          features: [
            'Squads dedicados de alta performance em regime ágil',
            'Plataformas web e aplicativos mobile de alta performance sob medida',
            'Arquiteturas escaláveis, seguras e em total conformidade com LGPD',
            'Código limpo, testável e com zero débito técnico'
          ],
          techs: ['Fábrica de Software', 'Sistemas Web', 'Mobile Nativo/Híbrido', 'Squads Ágeis']
        },
        {
          id: 'modernizacao-legados',
          tag: 'Modernização de Sistemas',
          title: 'Modernização & Migração de Sistemas Legados',
          description: 'Transformação incremental e refatoração de softwares antigos, monolitos pesados e bases de dados obsoletas para arquiteturas modernas em nuvem e microsserviços, com zero de inatividade.',
          features: [
            'Estratégia de desacoplamento de monolitos em microsserviços modernos',
            'Migração segura de banco de dados e dados críticos sem perda de histórico',
            'Modernização de interfaces de usuário (React, Vite e Next de alta performance)',
            'Garantia de transição suave com funcionamento em paralelo'
          ],
          techs: ['Modernização Backend', 'React/Vite Frontend', 'Microsserviços', 'Zero Downtime']
        },
        {
          id: 'automacao-processos-ia',
          tag: 'Automação de Processos',
          title: 'Automação com IA, Agentes Autônomos & LLMs',
          description: 'Automatize processos corporativos complexos, rotinas manuais repetitivas e tomada de decisão operacional com agentes de IA autônomos e LLMs, reduzindo custos operacionais e tempo de execução em até 80%.',
          features: [
            'Agentes autônomos de IA para execução e orquestração de fluxos operacionais 24/7',
            'Automação inteligente de processos (RPA cognitivo, extração e validação de documentos)',
            'Orquestração de pipelines e fluxos de trabalho com LLMs corporativos',
            'Integração direta com ERPs, CRMs, planilhas, bancos de dados e sistemas legados'
          ],
          techs: ['Agentes de IA', 'Automação de Processos', 'Orquestração LLM', 'RPA Cognitivo']
        },
        {
          id: 'machine-learning-preditivo',
          tag: 'Machine Learning & Dados',
          title: 'Machine Learning & Modelos Preditivos',
          description: 'Desenvolvimento de pipelines de dados, modelos estatísticos, algoritmos de classificação e detecção de anomalias para transformar dados brutos corporativos em inteligência operacional.',
          features: [
            'Algoritmos de classificação, regressão e previsão de demanda sob medida',
            'Pipelines de dados ponta a ponta e engenharia de dados (ETL/ELT)',
            'Modelos de detecção de fraudes, anomalias e análise de risco operacional',
            'MLOps para treinamento contínuo, versionamento e deploy em nuvem'
          ],
          techs: ['Machine Learning', 'Python / PyTorch', 'Modelos Preditivos', 'MLOps']
        },
        {
          id: 'desenvolvimento-assistido-ia',
          tag: 'Engenharia Aumentada',
          title: 'Desenvolvimento Assistido por IA (AI-Assisted)',
          description: 'Aceleramos em até 3x a velocidade de entrega dos nossos squads utilizando ferramentas de ponta para geração assistida de código, refatoração e testes automatizados.',
          features: [
            'Produtividade e velocidade aceleradas por IA em todo o ciclo de software',
            'Refatoração e auditoria contínua de código com validação rigorosa de arquitetura',
            'Geração automatizada de cobertura de testes unitários e de integração',
            'Entregas mais ágeis com menor custo e máxima consistência técnica'
          ],
          techs: ['Desenvolvimento com IA', 'Cursor & Copilot', 'Refatoração Ágil', 'High Velocity']
        },
        {
          id: 'integracao-llms-agentes',
          tag: 'Inteligência Artificial GenAI',
          title: 'Integrações com LLMs, RAG & Agentes Autônomos',
          description: 'Conectamos os modelos de linguagem mais avançados (Gemini, GPT, Claude, Llama) à base de conhecimento da sua empresa com arquiteturas RAG seguras e agentes de decisão.',
          features: [
            'Sistemas RAG (Retrieval-Augmented Generation) integrados aos seus dados internos',
            'Agentes autônomos para automação de fluxos operacionais complexos',
            'Busca semântica e análise automatizada de documentos e contratos',
            'Governança de dados, privacidade e proteção contra vazamentos'
          ],
          techs: ['LLM Integration', 'RAG / Vector DBs', 'Agentes Autônomos', 'Enterprise GenAI']
        },
        {
          id: 'integracao-apis-pagamentos',
          tag: 'APIs & Conectividade',
          title: 'Integração de APIs, Bancos & Sistemas Corporativos',
          description: 'Conectamos sua operação aos principais ERPs, adquirentes, bancos, bureaus de dados e serviços web com comunicação síncrona criptografada e mTLS.',
          features: [
            'Construção de APIs REST/gRPC robustas documentadas via OpenAPI',
            'Integrações de pagamentos (Pix, boletos, gateways e adquirentes)',
            'Sincronização de dados em tempo real entre ERPs e CRMs heterogêneos',
            'Comunicação criptografada com certificados digitais e protocolo mTLS'
          ],
          techs: ['APIs REST/gRPC', 'mTLS & Criptografia', 'Integrador ERP/CRM', 'Bancos & Pix']
        }
      ]
    },
    estimator: {
      tag: 'Simulador Avançado',
      heading: 'Simule o escopo do seu software.',
      sub: 'Selecione abaixo as características ideias para os requisitos do seu projeto técnico e veja a estimativa base de prazo e recursos.',
      productTypeLabel: '1. Modelo Funcional do Projeto',
      complexityLabel: '2. Nível de Integrações Solicitadas',
      timelineLabel: '3. Prazo e Força de Trabalho',
      types: {
        web: 'Instituição Financeira / Motor de Crédito',
        mobile: 'Plataforma Imobiliária / Originação',
        both: 'APIs Customizadas & Integração Geral',
        custom: 'Fábrica de Software Completa (Squad)'
      },
      complexity: {
        low: 'Padrão (Integração Direta)',
        medium: 'Média (Processos e Regras Complexas)',
        high: 'Altíssima (Bancos, Risco e Multibureau)'
      },
      timeline: {
        normal: 'Alocação Parcial (Ritmo Ágil Padrão)',
        express: 'Squad Dedicada em Regime de Emergência (Express)'
      },
      resultTitle: 'Estimativa Preliminar BMI',
      weeks: 'Prazo Estimado de Entrega',
      team: 'Tamanho Sugerido do Squad',
      cost: 'Orçamento Mensal Estimado',
      costPrefix: 'R$',
      cta: 'Iniciar Alinhamento Técnico'
    },
    methodology: {
      tag: 'Melhores Práticas',
      heading: 'Nosso ciclo de entrega contínua.',
      sub: 'Unimos testes pesados, design focado no usuário e deploys estruturados em nuvem para que o seu código seja um ativo de valor.',
      steps: [
        {
          step: '01',
          title: 'Visão de Negócio',
          desc: 'Mapeamos fluxogramas, requisitos de motor de regras e integrações do mercado financeiro ou imobiliário.'
        },
        {
          step: '02',
          title: 'Arquitetura e Segurança',
          desc: 'Desenhamos o diagrama de dados, endpoints protegidos de APIs e infraestrutura escalável dockerizada.'
        },
        {
          step: '03',
          title: 'Testes de Código (TDD)',
          desc: 'Desenvolvemos criando a fundação de testes automatizados unitários de modo a blindar o fluxo transacional.'
        },
        {
          step: '04',
          title: 'Deploy e Integração (CI)',
          desc: 'Nossa esteira DevOps compila, testa e faz o deploy seguro nos servidores de forma pontual física.'
        },
        {
          step: '05',
          title: 'Uptime e Suporte',
          desc: 'Monitoramos e ajustamos o desempenho com as melhores ferramentas de rastreabilidade de falhas.'
        }
      ]
    },
    testimonials: {
      tag: 'Resultados Comprovados',
      heading: 'Quem confia no nosso desenvolvimento.',
      sub: 'Depoimentos reais de diretores de tecnologia e gestores operacionais que modernizaram seus serviços com a BMI Developers.'
    },
    contact: {
      tag: 'Contato Direto',
      heading: 'Fale Conosco',
      sub: 'Inicie sua jornada de inovação conosco. Envie os detalhes e nossa equipe de engenharia retornará em poucas horas.',
      form: {
        name: 'Seu Nome Completo',
        email: 'Seu E-mail Corporativo ou Pessoal',
        phone: 'Telefone para Contato / WhatsApp',
        company: 'Empresa / Organização',
        role: 'Seu Cargo ou Função',
        budget: 'Faixa Desejada de Investimento',
        budgetOptions: [
          'Selecione a faixa estimada',
          'R$ 15k a R$ 50k',
          'R$ 50k a R$ 150k',
          'R$ 150k a R$ 300k',
          'Acima de R$ 300k'
        ],
        description: 'Breve descrição dos requisitos ou desafios de negócios',
        descriptionPlaceholder: 'Ex: Precisamos desenvolver um aplicativo personalizado e integrá-lo ao nosso sistema ERP...',
        required: 'Preenchimento obrigatório',
        submit: 'Enviar Briefing do Projeto',
        successTitle: 'Dados Recebidos com Sucesso!',
        successMessage: 'Obrigado por enviar! Nossa equipe de engenharia e consultoria especializada irá avaliar o briefing e as regras fornecidas para entrar em contato no WhatsApp e discutir o escopo comercial.',
        prefilledAlert: 'Estimativa de orçamento e escopo do simulador de projetos acoplados com sucesso!'
      }
    },
    faq: {
      tag: 'FAQ',
      heading: 'Dúvidas Técnicas Frequentes',
      sub: 'Encontre respostas diretas sobre nossa metodologia ágil, propriedade intelectual de código, segurança de dados e esteira automatizada.',
      categories: {
        all: 'Todas as dúvidas',
        process: 'Processo e Entrega',
        tech: 'Tecnologias',
        cost: 'Modelos de Orçamento',
        security: 'LGPD e Segurança'
      }
    },
    footer: {
      desc: 'BMI Consultoria e Desenvolvimento de Software. Desenvolvedora referência em sistemas críticos financeiros, motores imobiliários, integrações robustas de APIs e esteira ágil DevOps.',
      col1Title: 'Soluções',
      col2Title: 'Corporativo',
      col3Title: 'Idiomas',
      copy: '© 2026 BMI Developers • BMI Consultoria e Desenvolvimento de Software. CNPJ: 49.222.212/0001-02. Todos os direitos reservados.',
      terms: 'Termos de Serviço',
      privacy: 'Avisos de Privacidade'
    }
  },
  en: {
    nav: {
      services: 'Specializations',
      metrics: 'Best Practices',
      estimator: 'Project Estimator',
      methodology: 'Methodologies',
      testimonials: 'Testimonials',
      faq: 'FAQ',
      contact: 'Contact',
      cta: 'Request Quote'
    },
    hero: {
      badge: '✦ BMI DEVELOPERS • SOFTWARE FACTORY & AI ENGINEERING',
      titleFirst: 'Custom Software Factory: ',
      titleColor: 'from modernization to Artificial Intelligence',
      titleLast: ' with maximum quality and velocity.',
      sub: 'We are a full-cycle software factory: we build bespoke web and mobile applications, modernize legacy systems, implement process automation with autonomous AI agents, craft Machine Learning models, and integrate leading LLMs with maximum engineering velocity.',
      ctaPrimary: 'Talk to an Architect',
      ctaSecondary: 'Our Solutions',
      highlights: [
        'Custom Software Factory',
        'Legacy System Modernization',
        'Process Automation & AI Agents',
        'Machine Learning, LLMs & AI-Assisted'
      ]
    },
    metrics: {
      heading: 'Best practices and modern software engineering.',
      sub: 'We adopt the most respected standards in software engineering to ensure your product is resilient, secure, and ready to scale.',
      items: [
        {
          value: 'Agile',
          suffix: '',
          label: 'Agile core methodologies',
          desc: 'Transparent product development cycles, bi-weekly sprints, and detailed alignment meetings.'
        },
        {
          value: 'Docker',
          suffix: ' & K8s',
          label: 'Scalable architecture',
          desc: 'Engineered using modern containers and orchestration tools to operate smoothly under peak workloads.'
        },
        {
          value: 'Secure',
          suffix: ' TLS',
          label: 'Robust security',
          desc: 'Strong encryption algorithms, safe secure API boundaries, and meticulous LGPD and banking policy matching.'
        },
        {
          value: 'TDD',
          suffix: ' / BDD',
          label: 'Automated testing',
          desc: 'Pragmatic regression tests ensuring zero bugs escape into production as your application iterates.'
        }
      ]
    },
    services: {
      tag: 'Our Pillars',
      heading: 'Software factory, modernization & artificial intelligence.',
      sub: 'We operate across the complete software engineering lifecycle: custom builds, legacy migrations, process automation with autonomous AI agents, predictive machine learning models, AI-augmented engineering, and enterprise LLM integrations.',
      actionBtn: 'Consult with an Architect',
      items: [
        {
          id: 'sistemas-customizados',
          tag: 'Software Factory',
          title: 'Software Factory & Custom Engineering',
          description: 'End-to-end web and mobile custom software engineering, dedicated high-performance squads, tailored CRMs/ERPs, business rule engines, and executive dashboards.',
          features: [
            'Dedicated high-performance engineering squads in agile sprints',
            'High-performance web platforms and mobile applications',
            'Scalable, secure architectures in full compliance with data privacy',
            'Clean, testable code with zero technical debt'
          ],
          techs: ['Software Factory', 'Web Platforms', 'Native/Hybrid Mobile', 'Dedicated Squads']
        },
        {
          id: 'modernizacao-legados',
          tag: 'Systems Modernization',
          title: 'Legacy Modernization & Cloud Migration',
          description: 'Incremental refactoring of outdated software, monolithic architectures, and legacy databases into modern cloud microservices with zero downtime.',
          features: [
            'Decoupling monoliths into resilient, scalable microservices',
            'Risk-free database migration without loss of transactional history',
            'Modernized frontends built with React, Vite, and Next.js',
            'Parallel execution strategies ensuring seamless business continuity'
          ],
          techs: ['Backend Modernization', 'React/Vite Frontend', 'Microservices', 'Zero Downtime']
        },
        {
          id: 'automacao-processos-ia',
          tag: 'AI Process Automation',
          title: 'Intelligent Process Automation & AI Agents',
          description: 'Automate complex corporate processes, repetitive operational routines, and decision-making workflows with autonomous AI agents and integrated LLMs, reducing manual execution time by up to 80%.',
          features: [
            'Autonomous AI agents orchestrating end-to-end workflows 24/7',
            'Intelligent process automation (cognitive RPA, document parsing, and operational triage)',
            'Workflow orchestration and reasoning pipelines powered by enterprise LLMs',
            'Direct integration with ERPs, CRMs, databases, and spreadsheets'
          ],
          techs: ['AI Agents', 'Process Automation', 'LLM Workflows', 'Cognitive RPA']
        },
        {
          id: 'machine-learning-preditivo',
          tag: 'Machine Learning & Data',
          title: 'Machine Learning & Predictive Models',
          description: 'Custom data pipelines, predictive statistical models, classification algorithms, and anomaly detection engines turning raw corporate data into operational intelligence.',
          features: [
            'Custom classification, regression, and demand forecasting models',
            'End-to-end data pipelines and data engineering (ETL/ELT)',
            'Fraud, anomaly detection, and operational risk models',
            'MLOps for continuous training, versioning, and cloud deployments'
          ],
          techs: ['Machine Learning', 'Python / PyTorch', 'Predictive Models', 'MLOps']
        },
        {
          id: 'desenvolvimento-assistido-ia',
          tag: 'Augmented Engineering',
          title: 'AI-Assisted Software Engineering',
          description: 'We boost squad delivery speed by up to 3x using state-of-the-art AI-assisted coding, refactoring, and automated test generation tools.',
          features: [
            'Accelerated productivity across the entire software lifecycle',
            'AI-driven refactoring validated by rigorous architectural standards',
            'Automated unit and integration test coverage generation',
            'Faster time-to-market with lower cost and high code quality'
          ],
          techs: ['AI Development', 'Cursor & Copilot', 'Agile Refactoring', 'High Velocity']
        },
        {
          id: 'integracao-llms-agentes',
          tag: 'Enterprise GenAI',
          title: 'LLMs, RAG & Autonomous Agents',
          description: 'Connecting top Large Language Models (Gemini, GPT, Claude, Llama) to your corporate knowledge base using secure RAG architectures and decision agents.',
          features: [
            'Retrieval-Augmented Generation (RAG) integrated with internal data',
            'Autonomous agents for complex operational workflow automation',
            'Semantic search and automated document/contract analysis',
            'Data governance, privacy, and leak-proof security measures'
          ],
          techs: ['LLM Integration', 'RAG / Vector DBs', 'Autonomous Agents', 'Enterprise GenAI']
        },
        {
          id: 'integracao-apis-pagamentos',
          tag: 'APIs & Connectivity',
          title: 'API, Banking & Enterprise System Integrations',
          description: 'Connecting your operation with ERPs, acquirers, banks, credit bureaus, and web services via synchronous encrypted mTLS communication.',
          features: [
            'Pristine REST/gRPC APIs documented with OpenAPI',
            'Payment integrations (Pix, gateways, acquirers, and boletos)',
            'Real-time data synchronization across disparate ERPs & CRMs',
            'Encrypted mTLS communication and digital certificate signing'
          ],
          techs: ['REST/gRPC APIs', 'mTLS & Encryption', 'ERP/CRM Sync', 'Banking & Pix']
        }
      ]
    },
    estimator: {
      tag: 'Advanced Simulator',
      heading: 'Estimate your software project scope.',
      sub: 'Select the optimal attributes suited for your technological roadmap and instantly forecast estimated timeline and team resources.',
      productTypeLabel: '1. Project Functional Model',
      complexityLabel: '2. Required External Integration Complexity',
      timelineLabel: '3. Desired Delivery Frequency & Crew',
      types: {
        web: 'Banking Platform / Credit Engine',
        mobile: 'Real Estate Portal / Mortgages',
        both: 'Custom secure APIs & Multi-Integration',
        custom: 'Full Software Development Crew (Squad)'
      },
      complexity: {
        low: 'Standard (Straightforward endpoints)',
        medium: 'Medium (Multi-logical scoring rules)',
        high: 'High-Level (Bureaus, extreme risk security, legacy)'
      },
      timeline: {
        normal: 'Agile Team Allocation (Standard delivery pace)',
        express: 'Dedicated Emergency Squad (Express priority)'
      },
      resultTitle: 'Preliminary Project Estimate',
      weeks: 'Estimated Delivery Timeline',
      team: 'Suggested Squad Size',
      cost: 'Estimated Monthly Allocation',
      costPrefix: '$',
      cta: 'Begin Architect Consultation'
    },
    methodology: {
      tag: 'How We Work',
      heading: 'Our continuous engineering cycle.',
      sub: 'We unite meticulous test coverage, user-centered prototyping, and secure container structures to supply codes of extreme quality.',
      steps: [
        {
          step: '01',
          title: 'Business Synthesis',
          desc: 'We draft flowchart diagrams, database constraints, and outline financial or credit rule parameters.'
        },
        {
          step: '02',
          title: 'Architectures Draft',
          desc: 'We configure modular endpoints, secure auth patterns, and design dockerized scaling clusters.'
        },
        {
          step: '03',
          title: 'TDD Automation',
          desc: 'We code writing automated test logic first, so every single API endpoint remains perfectly protected.'
        },
        {
          step: '04',
          title: 'CI Stream deploy',
          desc: 'Our automated DevOps pipeline compiles, runs tests, and deploys safely to staging/production.'
        },
        {
          step: '05',
          title: 'Continuous Audit',
          desc: 'We monitor response values and process errors actively using industry-respected traces.'
        }
      ]
    },
    testimonials: {
      tag: 'Verified Results',
      heading: 'Client success stories.',
      sub: 'Actual perspectives from tech directors and product leaders who upgraded their infrastructures with BMI Developers.'
    },
    contact: {
      tag: 'Direct Connection',
      heading: 'Contact Us',
      sub: 'Initiate your custom software project. Send over requirements and our senior architects will reach out within hours.',
      form: {
        name: 'My Full Name',
        email: 'Corporate or Personal Email Address',
        phone: 'My WhatsApp Contact Number',
        company: 'Company / Organization Name',
        role: 'My Title / Corporate Job Role',
        budget: 'Estimated Budget Allocation',
        budgetOptions: [
          'Please select budget range',
          '$5,000 to $15,000',
          '$15,000 to $50,000',
          '$50,000 to $100,000',
          '$100,000+'
        ],
        description: 'Describe your business roadmap or project challenges',
        descriptionPlaceholder: 'Ex: We need a custom web and mobile app that syncs with our inventory database...',
        required: 'This field is required',
        submit: 'Send Project Specifications',
        successTitle: 'Project Intake Submitted!',
        successMessage: 'Thank you for reaching out! A software engineering lead from our team is looking over your specifications and will follow up through WhatsApp to coordinate scoping.',
        prefilledAlert: 'Project scope guidelines from the estimator successfully attached to this intake message!'
      }
    },
    faq: {
      tag: 'FAQ',
      heading: 'Technical FAQ',
      sub: 'Get precise answers regarding code ownership, delivery speed, security compliance, and long-term tech coordination.',
      categories: {
        all: 'All Questions',
        process: 'Process & Deliveries',
        tech: 'Tech Stack',
        cost: 'Scoping & Rates',
        security: 'Security & LGPD/Compliance'
      }
    },
    footer: {
      desc: 'BMI Consultoria e Desenvolvimento de Software. Leading software development factory specialized in high-performance billing engines, proptech integrations, and DevOps automation.',
      col1Title: 'Services',
      col2Title: 'Corporate',
      col3Title: 'Languages',
      copy: '© 2026 BMI Developers • BMI Consultoria e Desenvolvimento de Software. CNPJ: 49.222.212/0001-02. All rights reserved.',
      terms: 'Terms of Use',
      privacy: 'Privacy Notices'
    }
  },
  es: {
    nav: {
      services: 'Especialidades',
      metrics: 'Buenas Prácticas',
      estimator: 'Simulador Proyecto',
      methodology: 'Proceso',
      testimonials: 'Testimonios',
      faq: 'FAQ',
      contact: 'Contacto',
      cta: 'Solicitar Agenda'
    },
    hero: {
      badge: '✦ BMI DEVELOPERS • FÁBRICA DE SOFTWARE E INGENIERÍA DE IA',
      titleFirst: 'Fábrica de software a medida: ',
      titleColor: 'desde la modernización hasta la Inteligencia Artificial',
      titleLast: ' con máxima calidad y velocidad.',
      sub: 'Somos una fábrica de software integral: desarrollamos sistemas web y móviles a medida, modernizamos aplicaciones heredadas, automatizamos procesos corporativos con agentes de IA, construimos modelos de Machine Learning e integramos los principales LLMs con máxima velocidad de entrega.',
      ctaPrimary: 'Hablar con Consultor',
      ctaSecondary: 'Nuestras Soluciones',
      highlights: [
        'Fábrica de Software a Medida',
        'Modernización de Sistemas',
        'Automatización de Procesos & Agentes de IA',
        'Machine Learning, LLMs & IA Asistida'
      ]
    },
    metrics: {
      heading: 'Buenas prácticas y diseño robusto.',
      sub: 'Utilizamos patrones maduros de ingeniería del software internacional para garantizar velocidad, resiliencia y seguridad óptima.',
      items: [
        {
          value: 'Agile',
          suffix: '',
          label: 'Métodos ágiles',
          desc: 'Rastreo y planeación coordinada, entregas incrementales y total visibilidad semanal.'
        },
        {
          value: 'Docker',
          suffix: ' & K8s',
          label: 'Infraestructura elástica',
          desc: 'Servicios orquestados para tolerar explosiones de volumen con total estabilidad.'
        },
        {
          value: 'Seguro',
          suffix: ' SSL',
          label: 'Seguridad nativa',
          desc: 'Cifrado SSL de inicio a fin y adecuación total de estándares regulatorios de transferencias.'
        },
        {
          value: 'TDD',
          suffix: ' / BDD',
          label: 'Pruebas rigurosas',
          desc: 'Automatización completa de test de cobertura evitando fallos regresivos imprevistos.'
        }
      ]
    },
    services: {
      tag: 'Nuestros Pilares',
      heading: 'Fábrica de software, modernización e inteligencia artificial.',
      sub: 'Operamos en todo el ciclo de ingeniería de software: desarrollo a medida, modernización de sistemas heredados, automatización de procesos con agentes de IA, modelos predictivos de machine learning, desarrollo asistido por IA e integración de LLMs empresariales.',
      actionBtn: 'Consultar Arquitecto',
      items: [
        {
          id: 'sistemas-customizados',
          tag: 'Fábrica de Software',
          title: 'Fábrica de Software & Desarrollo a Medida',
          description: 'Desarrollo integral de plataformas web y móviles a medida, ERPs/CRMs personalizados, motores de reglas de negocio y paneles ejecutivos con squads dedicados de alto rendimiento y rigor técnico.',
          features: [
            'Squads dedicados de alto rendimiento bajo metodología ágil',
            'Plataformas web y aplicaciones móviles de alto desempeño a medida',
            'Arquitecturas escalables, seguras y alineadas con normativas de privacidad',
            'Código limpio, con cobertura de pruebas y sin deuda técnica'
          ],
          techs: ['Fábrica de Software', 'Plataformas Web', 'Móvil Nativo/Híbrido', 'Squads Dedicados']
        },
        {
          id: 'modernizacao-legados',
          tag: 'Modernización Técnica',
          title: 'Modernización & Migración de Sistemas Heredados',
          description: 'Transformación incremental y refactorización de softwares obsoletos, monolitos pesados y bases de datos heredadas hacia arquitecturas modernas en la nube y microservicios con cero interrupciones.',
          features: [
            'Desacoplamiento de monolitos hacia microservicios elásticos y escalables',
            'Migración segura de bases de datos y registros críticos sin pérdidas',
            'Modernización completa de interfaces de usuario (React, Vite y Next.js)',
            'Transición planificada garantizando continuidad operativa en paralelo'
          ],
          techs: ['Migración Backend', 'React/Vite Frontend', 'Microservicios', 'Cero Downtime']
        },
        {
          id: 'automacao-processos-ia',
          tag: 'Automatización de Procesos',
          title: 'Automatización con IA, Agentes Autónomos & LLMs',
          description: 'Automatiza procesos corporativos complejos, rutinas operativas repetitivas y toma de decisiones mediante agentes autónomos de IA y LLMs integrados, acelerando flujos y reduciendo tiempos de ejecución hasta en un 80%.',
          features: [
            'Agentes autónomos de IA para orquestación de procesos operativos de extremo a extremo 24/7',
            'Automatización inteligente de procesos (RPA cognitivo, triaje y extracción documental)',
            'Orquestación de flujos de trabajo y pipelines con LLMs empresariales',
            'Integración directa con ERPs, CRMs, bases de datos y sistemas corporativos'
          ],
          techs: ['Agentes de IA', 'Automatización de Procesos', 'Orquestración LLM', 'RPA Cognitivo']
        },
        {
          id: 'machine-learning-preditivo',
          tag: 'Machine Learning & Datos',
          title: 'Machine Learning & Modelos Predictivos',
          description: 'Desarrollo de pipelines de datos, modelos estadísticos, algoritmos de clasificación y detección de anomalías para convertir datos corporativos en inteligencia operativa.',
          features: [
            'Modelos de clasificación, regresión y proyección de demanda a medida',
            'Pipelines de datos de extremo a extremo e ingeniería de datos (ETL/ELT)',
            'Modelos de detección de fraudes, anomalías y análisis de riesgo operativo',
            'MLOps para entrenamiento continuo, versionado y despliegue en la nube'
          ],
          techs: ['Machine Learning', 'Python / PyTorch', 'Modelos Predictivos', 'MLOps']
        },
        {
          id: 'desenvolvimento-assistido-ia',
          tag: 'Ingeniería Aumentada',
          title: 'Desarrollo Asistido por IA (AI-Assisted)',
          description: 'Aceleramos hasta 3 veces la entrega de nuestros squads utilizando herramientas avanzadas para la generación asistida de código, refactorización y pruebas automatizadas.',
          features: [
            'Productividad y velocidad aceleradas por IA en todo el ciclo de desarrollo',
            'Refactorización y auditoría continua con rigurosa validación de arquitectura',
            'Generación automatizada de pruebas unitarias y de integración',
            'Entregas más rápidas con menor costo y máxima consistencia técnica'
          ],
          techs: ['Desarrollo con IA', 'Cursor & Copilot', 'Refactorización Ágil', 'High Velocity']
        },
        {
          id: 'integracao-llms-agentes',
          tag: 'Inteligencia Artificial GenAI',
          title: 'Integraciones con LLMs, RAG & Agentes Autónomos',
          description: 'Conectamos los principales modelos de lenguaje (Gemini, GPT, Claude, Llama) a la base de conocimiento de tu empresa mediante arquitecturas RAG seguras y agentes de decisión.',
          features: [
            'Sistemas RAG (Retrieval-Augmented Generation) integrados con datos internos',
            'Agentes autónomos para automatizar flujos operativos complejos',
            'Búsqueda semántica y análisis automatizado de documentos y contratos',
            'Gobernanza de datos, privacidad y protección contra fugas de información'
          ],
          techs: ['LLM Integration', 'RAG / Vector DBs', 'Agentes Autónomos', 'Enterprise GenAI']
        },
        {
          id: 'integracao-apis-pagamentos',
          tag: 'APIs & Conectividad',
          title: 'Integración de APIs, Bancos & Sistemas Empresariales',
          description: 'Conectamos tu operación a ERPs, adquirentes, bancos, burós de información y servicios web mediante comunicación síncrona cifrada y mTLS.',
          features: [
            'Construcción de APIs REST/gRPC robustas documentadas con OpenAPI',
            'Integración de pagos (Pix, boletos, pasarelas de pago y adquirentes)',
            'Sincronización de datos en tiempo real entre ERPs y CRMs heterogéneos',
            'Comunicación cifrada con certificados digitales y protocolo mTLS'
          ],
          techs: ['APIs REST/gRPC', 'mTLS & Cifrado', 'Integración ERP/CRM', 'Bancos & Pix']
        }
      ]
    },
    estimator: {
      tag: 'Simulador Técnico',
      heading: 'Simula el presupuesto de tu proyecto.',
      sub: 'Selecciona las variables técnicas primarias para estimar de inmediato un orden aproximado de cronograma y horas del equipo técnico.',
      productTypeLabel: '1. Modelo Funcional Requerido',
      complexityLabel: '2. Nivel de Complejidad y Conexión',
      timelineLabel: '3. Plazo de Entrega Deseado',
      types: {
        web: 'Plataforma de Finanzas / Motor Crediticio',
        mobile: 'Ecosistema Proptech / Originación',
        both: 'APIs Cifradas & Conexión de Datos General',
        custom: 'Célula de Desarrollo Dedicada (Squad)'
      },
      complexity: {
        low: 'Básico (Conexiones HTTP estándar)',
        medium: 'Medio (Estructuras de reglas lógicas avanzadas)',
        high: 'Avanzado (Bancos, Riegos múltiples, burós y legados)'
      },
      timeline: {
        normal: 'Asignación Ágil Regular (Lanzamiento paulatino)',
        express: 'Célula Dedicada de Máxima Urgencia (Express)'
      },
      resultTitle: 'Estimación Preliminar de Software',
      weeks: 'Tiempo Estimado de Desarrollo',
      team: 'Tamaño del Squad Recomendado',
      cost: 'Inversión Mensual Proyectada',
      costPrefix: '$',
      cta: 'Planificar Reunión Comercial'
    },
    methodology: {
      tag: 'Estrategia',
      heading: 'Ingeniería con entregas progresivas.',
      sub: 'Estructuramos pruebas unitarias, código limpio y servidores en contenedores para que su software sea robusto.',
      steps: [
        {
          step: '01',
          title: 'Conceptualización',
          desc: 'Mapeamos diagramas conceptuales de transacciones, APIs requeridas y motores de reglas financieras.'
        },
        {
          step: '02',
          title: 'Diagramación de Datos',
          desc: 'Modelamos flujos cifrados con alta tolerancia frente a fallos y balances de carga elásticos.'
        },
        {
          step: '03',
          title: 'Automatización de Pruebas',
          desc: 'Programamos bajo la filosofía TDD levantando filtros de protección antes de producir lógica.'
        },
        {
          step: '04',
          title: 'Deploy Automatizado (CI)',
          desc: 'Nuestras esteiras automatizadas sincronizan el código generando builds seguros y confiables.'
        },
        {
          step: '05',
          title: 'Soporte Continuo',
          desc: 'Auditamos en tiempo real con alertas de rendimiento para impedir interrupciones lógicas.'
        }
      ]
    },
    testimonials: {
      tag: 'Casos Reales',
      heading: 'Socios que impulsan su transformación comercial.',
      sub: 'Evaluaciones auténticas de directivos de TI y product managers que modernizaron sus sistemas de la mano de BMI Developers.'
    },
    contact: {
      tag: 'Conexión Directa',
      heading: 'Contáctanos',
      sub: 'Presenta tu necesidad técnica. Completa los campos y nuestros ingenieros principales te responderán en pocas horas.',
      form: {
        name: 'Nombre Completo',
        email: 'Dirección de Correo Electrónico Corporativo',
        phone: 'Número de WhatsApp de Contacto',
        company: 'Empresa / Organización',
        role: 'Tu Cargo o Rol Operativo',
        budget: 'Estimación Presupuestal Planeada',
        budgetOptions: [
          'Selecciona tu escala de presupuesto',
          '$3,000 a $10,000',
          '$10,000 a $30,000',
          '$30,000 a $80,000',
          '$80,000+'
        ],
        description: 'Breve explicación de las pautas técnicas o del reto operativo',
        descriptionPlaceholder: 'Ej: Requerimos diseñar una aplicación móvil integrada con nuestro sistema de facturación...',
        required: 'Este campo es obligatorio',
        submit: 'Enviar Briefing Técnico',
        successTitle: '¡Solicitud Recibida Correctamente!',
        successMessage: '¡Muchas gracias por su mensaje! Nuestro equipo técnico ejecutivo revisará las variables y le contactará vía WhatsApp para acordar la primera llamada.',
        prefilledAlert: '¡Los parámetros del simulador interactivo se han acoplado a este formulario con total éxito!'
      }
    },
    faq: {
      tag: 'FAQ',
      heading: 'Preguntas Técnicas Habituales',
      sub: 'Resolvemos sus dudas tácticas acerca de posesión del código fuente, seguridad integral de sus datos y metodologías.',
      categories: {
        all: 'Todas las Preguntas',
        process: 'Metodología & Entregables',
        tech: 'Pila Tecnológica',
        cost: 'Presupuestos & Costes',
        security: 'Seguridad & Regulaciones'
      }
    },
    footer: {
      desc: 'BMI Consultoria e Desenvolvimento de Software. Software house de referencia en ingeniería financiera, interfaces en la nube bancarias, integraciones complejas y automatización DevOps.',
      col1Title: 'Soluciones',
      col2Title: 'Estructura',
      col3Title: 'Idiomas',
      copy: '© 2026 BMI Developers • BMI Consultoria e Desenvolvimento de Software. CNPJ: 49.222.212/0001-02. Todos los derechos reservados.',
      terms: 'Términos de Servicio',
      privacy: 'Avisos Legales'
    }
  }
};
