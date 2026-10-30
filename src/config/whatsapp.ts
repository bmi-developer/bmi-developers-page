/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Configuração central do atendimento via WhatsApp.
 * 
 * INSTRUÇÕES DE CONFIGURAÇÃO:
 * - O número deve conter EXCLUSIVAMENTE DÍGITOS (sem '+', espaços, parênteses ou hífens).
 * - Formato internacional: Código do País (ex: 55 para Brasil) + DDD (ex: 61 para DF) + Número do celular/telefone.
 * - Exemplo para Brasil (DF): "5561991525854" ((61) 99152-5854)
 * - Também pode ser definido via variável de ambiente VITE_WHATSAPP_NUMBER se desejado.
 */
export const WHATSAPP_CONFIG = {
  // Número de WhatsApp configurado (apenas dígitos numéricos: 55 + 61 + 991525854)
  phoneNumber: ((import.meta as any).env?.VITE_WHATSAPP_NUMBER as string | undefined)?.replace(/\D/g, '') || '5561991525854',
  
  // Limites de tamanho de caracteres para validação e proteção do formulário
  limits: {
    maxNameLength: 80,
    maxMessageLength: 500,
    minNameLength: 2,
    minMessageLength: 5,
  },

  // Identificação do canal de atendimento exibido no widget
  supportName: 'BMI Developers',
  supportRole: 'Atendimento & Engenharia',

  // Formatador da mensagem enviada ao WhatsApp (limpo, natural e sem etiquetas robóticas)
  formatMessage: (name: string, message: string, lang: 'pt' | 'en' | 'es' = 'pt') => {
    if (lang === 'en') {
      return `Hello! My name is ${name}.\n\n${message}`;
    }
    if (lang === 'es') {
      return `¡Hola! Mi nombre es ${name}.\n\n${message}`;
    }
    return `Olá! Meu nome é ${name}.\n\n${message}`;
  }
};
