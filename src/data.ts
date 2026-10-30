/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Metric, Testimonial, FAQItem, Lead } from './types';

export const SERVICES: Service[] = [
  {
    id: 'sistemas-web',
    title: 'Sistemas Web Corporativos',
    description: 'Desenvolvimento de ERPs, CRMs, portais de clientes e SaaS de alta performance, projetados para centralizar operações e automatizar fluxos de trabalho.',
    extendedDescription: 'Construímos portais e sistemas sob medida que resolvem gargalos de equipe, eliminam planilhas instáveis e unificam dados de filiais ou setores em tempo real.',
    iconName: 'LayoutGrid',
    features: [
      'Multi-tenant & controle fino de permissões',
      'Dashboards dinâmicos com gráficos interativos',
      'Exportação e relatórios automatizados (PDF/Excel)',
      'Altamente responsivo e otimizado para navegadores desktop/mobile'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS']
  },
  {
    id: 'apps-mobile',
    title: 'Aplicativos iOS & Android',
    description: 'Apps ágeis, fluidos e integrados, publicados nas lojas oficiais (App Store e Play Store) para estender a experiência do seu cliente ou time de campo.',
    extendedDescription: 'Unimos design refinado a uma experiência intuitiva, garantindo engajamento e alta velocidade de resposta no celular, mesmo sob condições instáveis de conexão.',
    iconName: 'Smartphone',
    features: [
      'Funcionamento offline com sincronização inteligente',
      'Notificações push personalizadas com gatilhos em nuvem',
      'Acesso seguro por biometria (FaceID/Fingerprint)',
      'Integração nativa de câmera, GPS, bluetooth e mapas'
    ],
    technologies: ['React Native', 'Flutter', 'TypeScript', 'Firebase', 'GraphQL', 'Swift/Kotlin']
  },
  {
    id: 'integracoes-apis',
    title: 'Integrações de APIs & Legados',
    description: 'Conectamos seu sistema atual com plataformas externas (ERP de mercado, bancos, meios de pagamento, logística) com segurança máxima.',
    extendedDescription: 'Evite o retrabalho manual. Desenvolvemos middleware robusto e pipelines de dados seguros para conectar e sincronizar fluxos de compras, faturamento e logística.',
    iconName: 'Cpu',
    features: [
      'Middlewares de alta concorrência com fila asg (BullMQ/RabbitMQ)',
      'Tratamento avançado de erros com tentativas inteligentes',
      'Monitoramento de estabilidade e log de auditoria',
      'Conexão segura com ERPs padrão (SAP, Totvs, Senior, Omie)'
    ],
    technologies: ['Node.js', 'Express', 'Python', 'Redis', 'Docker', 'REST/SOAP/gRPC']
  },
  {
    id: 'squads-alocados',
    title: 'Alocação de Squads de Elite',
    description: 'Acelere seu roadmap de desenvolvimento acoplando engenheiros seniores, designers e QAs de pronto emprego diretamente no seu fluxo diário.',
    extendedDescription: 'Profissionais alinhados com metodologias ágeis (Scrum/Kanban) prontos para somar valor no primeiro dia, sem burocracias de recrutamento e encargos CLT complexos.',
    iconName: 'Users',
    features: [
      'Alocação flexível de desenvolvedores Mid e Senior',
      'Product Managers e Designers focados em conversão e usabilidade',
      'Processo ágil documentado com reuniões diárias (Dailies)',
      'Fidelidade e segurança com NDAs e contratos rigorosos'
    ],
    technologies: ['Ágil', 'Scrum', 'Jira/Linear', 'GitHub', 'CI/CD Pipelines', 'QA Testing']
  },
  {
    id: 'consultoria-mvps',
    title: 'Consultoria de TI & MVPs Rápidos',
    description: 'Ideal para validar novos produtos no mercado ou auditar arquiteturas lentas antes de escalar os servidores globais de forma desperdiçada.',
    extendedDescription: 'Ajudamos startups e setores de inovação de grandes marcas a transformarem ideias conceituais em protótipos funcionais com entregas recorrentes em até 4 semanas.',
    iconName: 'Layers',
    features: [
      'Análise crítica de arquitetura técnica e auditoria de segurança',
      'Prototipagem rápida em Figma antes do código',
      'Lançamento otimizado focado em conversão de leads',
      'Plano de escala e dimensionamento financeiro na nuvem'
    ],
    technologies: ['Figma', 'AWS Architectures', 'GCP cloud', 'Serverless', 'Vercel']
  }
];

export const METRICS: Metric[] = [
  {
    id: 'projetos',
    value: '140',
    suffix: '+',
    label: 'Projetos Entregues Sólidos',
    description: 'Sistemas corporativos customizados, aplicativos móveis rápidos e arquiteturas de banco de dados modernas operando com 99.9% de uptime.'
  },
  {
    id: 'satisfacao',
    value: '98',
    suffix: '%',
    label: 'Índice de Retenção e LTV',
    description: 'Parcerias duradouras onde mais de 98% de nossos clientes optam por estender o contrato e continuar desenvolvendo novos módulos ou sistemas conosco.'
  },
  {
    id: 'desenvolvedores',
    value: '100',
    suffix: '%',
    label: 'Engenheiros Seniores',
    description: 'Sem estagiários tomando decisões críticas de arquitetura. Todos os squads contam com líderes técnicos com mais de 7 anos de experiência de campo.'
  },
  {
    id: 'horas-codadas',
    value: '150',
    suffix: 'k+',
    label: 'Horas de Engenharia Focada',
    description: 'Dedicadas a otimizar processos, criar linhas de código limpas, automatizar testes e refatorar gargalos de performance em ambientes produtivos.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'depo-1',
    name: 'Roberto Alencar',
    role: 'Diretor de Operações (COO)',
    company: 'Logística Expressa Brasil',
    quote: 'A BMI transformou nossa controle de frotas. Antes usávamos 5 planilhas manuais que geravam dados errôneos. Agora temos um portal unificado, integração automática com a SEFAZ e faturamos 3x mais rápido sem erros humanos.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=facearea&facepad=2&w=256&h=256&q=80',
    rating: 5,
    segment: 'Logística & Transportes'
  },
  {
    id: 'depo-2',
    name: 'Carolina G. Mendes',
    role: 'Fundadora e CEO',
    company: 'Fintech Hub Cred',
    quote: 'Subir nosso aplicativo nativo em tempo recorde era o maior desafio da rodada de investimentos. O squad ágil da BMI não só entregou o app antes do prazo, como propôs integrações de pagamento via PIX extremamente inovadoras que encantam nossos clientes.',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fit=facearea&facepad=2&w=256&h=256&q=80',
    rating: 5,
    segment: 'Finanças & Créditos'
  },
  {
    id: 'depo-3',
    name: 'Eduardo Silveira',
    role: 'Gerente Executivo de TI',
    company: 'Rede Saúde Ideal',
    quote: 'Precisávamos integrar um sistema legado de exames clínicos desenvolvido em 2008 com a nova plataforma móvel de telemedicina. A consultoria de APIs da BMI redesenhou as rotas e resolveu 100% dos gargalos com máxima conformidade à LGPD.',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=facearea&facepad=2&w=256&h=256&q=80',
    rating: 5,
    segment: 'Saúde & Biotecnologia'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Como a BMI estima o custo e prazo de uma Fábrica de Software?',
    answer: 'Nossa estimativa se baseia em complexidade funcional, integrações externas e urgência de lançamento. Oferecemos modelos flexíveis: por escopo fechado (ideal para projetos bem específicos e desenhados) ou por alocação de Squad Ágil mensal (onde o time trabalha focado no seu produto entregando sprints de 2 semanas de forma contínua).',
    category: 'cost'
  },
  {
    id: 'faq-2',
    question: 'Quem é dono das linhas de código geradas após as entregas?',
    answer: 'O código-fonte pertence 100% à sua empresa após a quitação dos marcos de entrega. Nós desenvolvemos frameworks abertos e livres de travas de propriedade intelectual. Você recebe repositório git completo com os códigos limpos, documentados e sem dependências ocultas.',
    category: 'process'
  },
  {
    id: 'faq-3',
    question: 'A BMI realiza consultoria de design UI/UX ou só programação?',
    answer: 'Desenvolvemos de ponta a ponta. Nossa fábrica conta com designers experientes responsáveis por estruturar toda a experiência do usuário (UX), fluxogramas de navegação e telas de alta definição (UI) usando Figma. O desenvolvimento do código só inicia após você aprovar visualmente as interfaces interativas do seu futuro sistema.',
    category: 'process'
  },
  {
    id: 'faq-4',
    question: 'Como é garantida a segurança do escopo e dados (NDAs)?',
    answer: 'Segurança é prioridade máxima. Antes de iniciarmos qualquer conversa técnica de escopo, assinamos um termo de confidencialidade mútuo (NDA). Nossas entregas em produção seguem rígidos padrões da LGPD brasileiro, criptografia de dados em trânsito e repouso, e controle avançado de segurança de acessos.',
    category: 'security'
  },
  {
    id: 'faq-5',
    question: 'Quais tecnologias e pilhas de programação são mais utilizadas?',
    answer: 'Utilizamos as pilhas de ponta mais respeitadas por grandes corporações para velocidade de execução e escalabilidade. No frontend, lideramos com React, Next.js, TypeScript e Tailwind. No backend, estruturamos servidores em Node.js (NestJS, Express), Python, e bancos PostgreSQL, MongoDB, Redis, protegidos em infraestruturas seguras na AWS ou Google Cloud.',
    category: 'tech'
  }
];

export const INITIAL_LEADS: Lead[] = [
  {
    id: 'lead-mock-1',
    name: 'Guilherme Franco',
    email: 'guilherme@inovaplant.com.br',
    phone: '(11) 98722-1244',
    company: 'InovaPlant Agronegócios',
    role: 'CEO',
    projectTypes: ['Sistemas Web Corporativos', 'Aplicativos iOS & Android'],
    budget: 'De R$ 50k a R$ 100k',
    description: 'Precisamos de um sistema para monitorar a colheita em campo que funcione offline e envie os dados por app para sincronizar com nosso dashboard interno.',
    status: 'new',
    createdAt: '2026-06-14T10:45:00Z',
    estimation: {
      estimatedWeeks: 12,
      estimatedCost: 'R$ 75.000',
      teamSize: 3
    }
  },
  {
    id: 'lead-mock-2',
    name: 'Letícia Vasconcelos',
    email: 'leticia@credicontas.com',
    phone: '(21) 99112-5858',
    company: 'CrediContas Soluções',
    role: 'Gerente de Tecnologia',
    projectTypes: ['Integrações de APIs & Legados'],
    budget: 'De R$ 30k a R$ 50k',
    description: 'Queremos integrar nosso sistema de cobranças atual com 4 gateways de pagamento diferentes para liquidar boletos de forma redundante e emitir PIX dinâmico.',
    status: 'contacted',
    createdAt: '2026-06-13T16:20:00Z',
    estimation: {
      estimatedWeeks: 6,
      estimatedCost: 'R$ 38.000',
      teamSize: 2
    }
  }
];
