/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useId } from 'react';
import { 
  MessageCircle, 
  X, 
  Send, 
  ExternalLink, 
  AlertCircle, 
  User, 
  MessageSquare,
  Lock,
  Check
} from 'lucide-react';
import { WHATSAPP_CONFIG } from '../config/whatsapp';
import { LanguageType } from '../translations';

interface WhatsAppChatWidgetProps {
  lang: LanguageType;
  isOpenExternal?: boolean;
  onCloseExternal?: () => void;
  prefilledMessage?: string;
}

interface FormState {
  name: string;
  message: string;
}

const STORAGE_KEY = 'bmi_whatsapp_widget_data_v1';

export default function WhatsAppChatWidget({ lang, isOpenExternal, onCloseExternal, prefilledMessage }: WhatsAppChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [lastGeneratedUrl, setLastGeneratedUrl] = useState('');

  // Sincroniza estado de abertura se acionado externamente
  useEffect(() => {
    if (isOpenExternal !== undefined) {
      setIsOpen(isOpenExternal);
    }
  }, [isOpenExternal]);

  // Se houver mensagem pré-preenchida ao solicitar atendimento de um serviço
  useEffect(() => {
    if (prefilledMessage) {
      setFormData(prev => ({
        ...prev,
        message: prefilledMessage.slice(0, WHATSAPP_CONFIG.limits.maxMessageLength)
      }));
    }
  }, [prefilledMessage]);

  // Recupera dados salvos na sessão da página para evitar perda ao fechar/reabrir
  const [formData, setFormData] = useState<FormState>(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          name: typeof parsed.name === 'string' ? parsed.name.slice(0, WHATSAPP_CONFIG.limits.maxNameLength) : '',
          message: typeof parsed.message === 'string' ? parsed.message.slice(0, WHATSAPP_CONFIG.limits.maxMessageLength) : '',
        };
      }
    } catch {
      // Ignora erro de storage restrito
    }
    return { name: '', message: '' };
  });

  // Campo armadilha invisível (honeypot) para detectar robôs que preenchem todos os inputs
  const [honeypot, setHoneypot] = useState('');
  
  // Verificação reCAPTCHA interativa
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [isCaptchaLoading, setIsCaptchaLoading] = useState(false);
  
  // Registro de timestamp de abertura para evitar envios automatizados instantâneos (< 1.2s)
  const [openedTimestamp, setOpenedTimestamp] = useState<number>(Date.now());

  // Erros de validação
  const [errors, setErrors] = useState<{
    name?: string;
    message?: string;
    captcha?: string;
    general?: string;
  }>({});

  const nameInputId = useId();
  const messageInputId = useId();

  // Salva no sessionStorage sempre que formData mudar
  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    } catch {
      // Falha silenciosa caso localStorage/sessionStorage esteja bloqueado
    }
  }, [formData]);

  // Redefine timestamp e reCAPTCHA ao abrir
  useEffect(() => {
    if (isOpen) {
      setOpenedTimestamp(Date.now());
      setIsCaptchaVerified(false);
      setIsCaptchaLoading(false);
      setErrors({});
      setHasSubmitted(false);
    }
  }, [isOpen]);

  // Fecha ao pressionar ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    if (onCloseExternal) {
      onCloseExternal();
    }
  };

  const handleCaptchaClick = () => {
    if (isCaptchaVerified) {
      setIsCaptchaVerified(false);
      return;
    }
    if (isCaptchaLoading) return;
    setIsCaptchaLoading(true);
    setTimeout(() => {
      setIsCaptchaLoading(false);
      setIsCaptchaVerified(true);
      setErrors(prev => ({ ...prev, captcha: undefined }));
    }, 450);
  };

  // Textos e mensagens internacionalizadas
  const i18n = {
    pt: {
      buttonAria: 'Abrir atendimento no WhatsApp',
      widgetTitle: 'Atendimento Direto',
      statusOnline: 'Online para novos projetos',
      nameLabel: 'Seu Nome ou Empresa',
      namePlaceholder: 'Ex: Marina Costa (Fintech)',
      messageLabel: 'Qual é a sua necessidade ou projeto?',
      messagePlaceholder: 'Descreva resumidamente o que você deseja desenvolver, modernizar ou automatizar com IA...',
      captchaLabel: 'Não sou um robô',
      privacyNotice: 'Ao clicar, você será direcionado ao WhatsApp. Seus dados não são salvos em nenhum servidor ou banco de dados externo. Seu número de telefone ficará visível ao destinatário no WhatsApp.',
      submitButton: 'Iniciar Conversa no WhatsApp',
      submitting: 'Preparando conversa...',
      successTitle: 'Redirecionamento gerado!',
      successDesc: 'A conversa do WhatsApp foi iniciada em uma nova aba. Se a janela não abriu automaticamente pelo bloqueador do navegador, clique abaixo:',
      reopenLink: 'Abrir WhatsApp novamente',
      newRequest: 'Editar ou enviar nova mensagem',
      errors: {
        nameRequired: 'Por favor, informe seu nome.',
        nameTooShort: `O nome deve ter no mínimo ${WHATSAPP_CONFIG.limits.minNameLength} caracteres.`,
        messageRequired: 'Por favor, descreva sua mensagem ou projeto.',
        messageTooShort: `A mensagem deve ter no mínimo ${WHATSAPP_CONFIG.limits.minMessageLength} caracteres.`,
        captchaRequired: 'Por favor, marque a caixa de verificação "Não sou um robô".',
        botDetected: 'Envio bloqueado por segurança.',
        tooFast: 'Envio muito rápido. Por favor, aguarde um instante e tente novamente.'
      }
    },
    en: {
      buttonAria: 'Open WhatsApp live chat',
      widgetTitle: 'Direct WhatsApp Support',
      statusOnline: 'Online for new projects',
      nameLabel: 'Your Name or Company',
      namePlaceholder: 'E.g., Alex Reed (Fintech)',
      messageLabel: 'What is your project or requirement?',
      messagePlaceholder: 'Briefly describe what you want to build, modernize or automate with AI...',
      captchaLabel: "I'm not a robot",
      privacyNotice: 'When continuing, you will be redirected to WhatsApp. Your data is not stored or sent to any external server. Your phone number will be visible to the recipient on WhatsApp.',
      submitButton: 'Start Conversation on WhatsApp',
      submitting: 'Preparing conversation...',
      successTitle: 'Redirect ready!',
      successDesc: 'The WhatsApp chat was initiated in a new tab. If it was blocked by your browser popup settings, click below:',
      reopenLink: 'Open WhatsApp again',
      newRequest: 'Edit or send another message',
      errors: {
        nameRequired: 'Please enter your name.',
        nameTooShort: `Name must be at least ${WHATSAPP_CONFIG.limits.minNameLength} characters.`,
        messageRequired: 'Please enter your message or project description.',
        messageTooShort: `Message must be at least ${WHATSAPP_CONFIG.limits.minMessageLength} characters.`,
        captchaRequired: 'Please check the "I\'m not a robot" box.',
        botDetected: 'Submission blocked for security reasons.',
        tooFast: 'Submission too fast. Please wait a second and try again.'
      }
    },
    es: {
      buttonAria: 'Abrir atención en WhatsApp',
      widgetTitle: 'Atención Directa',
      statusOnline: 'En línea para nuevos projetos',
      nameLabel: 'Tu Nombre o Empresa',
      namePlaceholder: 'Ej: Carlos Méndez (Fintech)',
      messageLabel: '¿Cuál es tu necesidad o proyecto?',
      messagePlaceholder: 'Describe brevemente lo que buscas desarrollar, modernizar o automatizar con IA...',
      captchaLabel: 'No soy un robot',
      privacyNotice: 'Al continuar, serás redirigido a WhatsApp. Tus datos no se almacenan ni envían a servidores externos. Tu número de teléfono será visible para el destinatario.',
      submitButton: 'Iniciar Conversación en WhatsApp',
      submitting: 'Preparando conversación...',
      successTitle: '¡Redirección lista!',
      successDesc: 'Se inició el chat de WhatsApp en una nueva pestaña. Si tu navegador bloqueó la ventana emergente, haz clic abajo:',
      reopenLink: 'Abrir WhatsApp nuevamente',
      newRequest: 'Editar o enviar otro mensaje',
      errors: {
        nameRequired: 'Por favor, ingresa tu nombre.',
        nameTooShort: `El nombre debe tener al menos ${WHATSAPP_CONFIG.limits.minNameLength} caracteres.`,
        messageRequired: 'Por favor, describe tu mensaje o proyecto.',
        messageTooShort: `El mensaje debe tener al menos ${WHATSAPP_CONFIG.limits.minMessageLength} caracteres.`,
        captchaRequired: 'Por favor, marca la casilla "No soy un robot".',
        botDetected: 'Envío bloqueado por seguridad.',
        tooFast: 'Envío demasiado rápido. Espera un segundo e inténtalo de nuevo.'
      }
    }
  }[lang] || {
    buttonAria: 'Abrir atendimento no WhatsApp',
    widgetTitle: 'Atendimento Direto',
    statusOnline: 'Online para novos projetos',
    nameLabel: 'Seu Nome ou Empresa',
    namePlaceholder: 'Ex: Marina Costa (Fintech)',
    messageLabel: 'Qual é a sua necessidade ou projeto?',
    messagePlaceholder: 'Descreva resumidamente o que você deseja desenvolver, modernizar ou automatizar com IA...',
    captchaLabel: 'Não sou um robô',
    privacyNotice: 'Ao clicar, você será direcionado ao WhatsApp. Seus dados não são salvos em nenhum servidor ou banco de dados externo. Seu número de telefone ficará visível ao destinatário no WhatsApp.',
    submitButton: 'Iniciar Conversa no WhatsApp',
    submitting: 'Preparando conversa...',
    successTitle: 'Redirecionamento gerado!',
    successDesc: 'A conversa do WhatsApp foi iniciada em uma nova aba. Se a janela não abriu automaticamente pelo bloqueador do navegador, clique abaixo:',
    reopenLink: 'Abrir WhatsApp novamente',
    newRequest: 'Editar ou enviar nova mensagem',
    errors: {
      nameRequired: 'Por favor, informe seu nome.',
      nameTooShort: `O nome deve ter no mínimo ${WHATSAPP_CONFIG.limits.minNameLength} caracteres.`,
      messageRequired: 'Por favor, descreva sua mensagem ou projeto.',
      messageTooShort: `A mensagem deve ter no mínimo ${WHATSAPP_CONFIG.limits.minMessageLength} caracteres.`,
      captchaRequired: 'Por favor, marque a caixa de verificação "Não sou um robô".',
      botDetected: 'Envio bloqueado por segurança.',
      tooFast: 'Envio muito rápido. Por favor, aguarde um instante e tente novamente.'
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prevenção contra cliques repetidos simultâneos
    if (isSubmitting) return;

    const newErrors: {
      name?: string;
      message?: string;
      captcha?: string;
      general?: string;
    } = {};

    const trimmedName = formData.name.trim();
    const trimmedMessage = formData.message.trim();

    // 1. Validação de Honeypot (campo invisível)
    if (honeypot.trim() !== '') {
      // Bot preencheu o campo invisível
      newErrors.general = i18n.errors.botDetected;
      setErrors(newErrors);
      return;
    }

    // 2. Proteção por tempo mínimo de interação (evita envio em menos de 1 segundo após abrir)
    const timeElapsed = Date.now() - openedTimestamp;
    if (timeElapsed < 1000) {
      newErrors.general = i18n.errors.tooFast;
      setErrors(newErrors);
      return;
    }

    // 3. Validação do Nome
    if (!trimmedName) {
      newErrors.name = i18n.errors.nameRequired;
    } else if (trimmedName.length < WHATSAPP_CONFIG.limits.minNameLength) {
      newErrors.name = i18n.errors.nameTooShort;
    }

    // 4. Validação da Mensagem
    if (!trimmedMessage) {
      newErrors.message = i18n.errors.messageRequired;
    } else if (trimmedMessage.length < WHATSAPP_CONFIG.limits.minMessageLength) {
      newErrors.message = i18n.errors.messageTooShort;
    }

    // 5. Validação do reCAPTCHA
    if (!isCaptchaVerified) {
      newErrors.captcha = i18n.errors.captchaRequired;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Limpa erros anteriores
    setErrors({});
    setIsSubmitting(true);

    // Formata o número (garantindo apenas dígitos, sem +, sem espaços)
    const sanitizedNumber = WHATSAPP_CONFIG.phoneNumber.replace(/\D/g, '');

    // Monta o texto de forma limpa e natural (sem formatações robóticas ou metadados de formulário)
    const messageText = WHATSAPP_CONFIG.formatMessage(trimmedName, trimmedMessage, lang);
    const encodedText = encodeURIComponent(messageText);
    const waUrl = `https://wa.me/${sanitizedNumber}?text=${encodedText}`;

    setLastGeneratedUrl(waUrl);

    // Proteção com timeout para evitar spam e garantir feedback visual
    setTimeout(() => {
      setIsSubmitting(false);
      setHasSubmitted(true);

      // Ação explícita abrindo a conversa em nova aba
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 print:hidden font-sans">
      
      {/* Modal / Widget de Chat */}
      {isOpen && (
        <div 
          role="dialog"
          aria-labelledby="wa-widget-heading"
          aria-modal="true"
          className="mb-3 w-[calc(100vw-2rem)] sm:w-[390px] max-w-[420px] bg-white rounded-2xl shadow-2xl border border-neutral-200/80 overflow-hidden flex flex-col transition-all duration-200 transform origin-bottom-right animate-in fade-in zoom-in-95"
        >
          {/* Header do Widget */}
          <div className="bg-neutral-950 text-white p-4 flex items-center justify-between border-b border-neutral-800">
            <div className="flex items-center gap-3">
              <div className="flex items-center pr-1 border-r border-neutral-800">
                <img 
                  src="/assets/aistudio/logo-w_c303ca1e.png" 
                  alt="BMI Developers" 
                  className="h-7 w-auto object-contain"
                />
              </div>
              <div>
                <h3 id="wa-widget-heading" className="text-xs font-bold tracking-tight text-white flex items-center gap-1.5">
                  <span>{WHATSAPP_CONFIG.supportName}</span>
                  <span className="text-[9px] px-1 py-0.5 bg-emerald-500/20 text-emerald-400 font-mono rounded">
                    WhatsApp
                  </span>
                </h3>
                <p className="text-[10px] text-emerald-400 flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  {i18n.statusOnline}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleClose}
              aria-label="Fechar widget"
              className="p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Conteúdo do Formulário */}
          <div className="p-4 sm:p-5 max-h-[75vh] overflow-y-auto space-y-4">
            
            {hasSubmitted ? (
              /* Estado pós-envio */
              <div className="py-4 text-center space-y-4">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full mx-auto flex items-center justify-center border border-emerald-200">
                  <Check className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-neutral-900">{i18n.successTitle}</h4>
                  <p className="text-xs text-neutral-500 leading-relaxed px-2">
                    {i18n.successDesc}
                  </p>
                </div>

                <div className="pt-2 flex flex-col gap-2">
                  <a
                    href={lastGeneratedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition shadow-sm cursor-pointer"
                  >
                    <span>{i18n.reopenLink}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setHasSubmitted(false);
                      setIsCaptchaVerified(false);
                      setIsCaptchaLoading(false);
                    }}
                    className="w-full text-xs text-neutral-500 hover:text-neutral-900 py-2 transition font-medium cursor-pointer"
                  >
                    {i18n.newRequest}
                  </button>
                </div>
              </div>
            ) : (
              /* Formulário interativo */
              <form onSubmit={handleFormSubmit} className="space-y-4" noValidate>
                
                {/* Erro geral (ex: bloqueio anti-bot ou envio muito rápido) */}
                {errors.general && (
                  <div className="p-2.5 bg-red-50 border border-red-200 rounded-xl flex items-start gap-2 text-xs text-red-700">
                    <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>{errors.general}</span>
                  </div>
                )}

                {/* Honeypot field (oculto para humanos, detecta bots que preenchem tudo) */}
                <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
                  <label htmlFor="wa-website-field">Website (Do not fill)</label>
                  <input
                    id="wa-website-field"
                    type="text"
                    name="website_verification_trap"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Campo: Nome / Empresa */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label 
                      htmlFor={nameInputId} 
                      className="text-xs font-semibold text-neutral-700 flex items-center gap-1"
                    >
                      <User className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{i18n.nameLabel}</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <span className="text-[10px] text-neutral-400 font-mono">
                      {formData.name.length}/{WHATSAPP_CONFIG.limits.maxNameLength}
                    </span>
                  </div>
                  <input
                    id={nameInputId}
                    type="text"
                    required
                    maxLength={WHATSAPP_CONFIG.limits.maxNameLength}
                    value={formData.name}
                    placeholder={i18n.namePlaceholder}
                    onChange={(e) => {
                      setFormData(prev => ({ ...prev, name: e.target.value }));
                      if (errors.name) setErrors(prev => ({ ...prev, name: undefined }));
                    }}
                    className={`w-full bg-neutral-50 border rounded-xl py-2 px-3 text-xs sm:text-sm text-neutral-900 transition placeholder-neutral-400 focus:outline-none focus:ring-1 ${
                      errors.name 
                        ? 'border-red-400 focus:border-red-500 focus:ring-red-400 bg-red-50/20' 
                        : 'border-neutral-200 hover:border-neutral-300 focus:border-neutral-900 focus:ring-neutral-900'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Campo: Mensagem */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label 
                      htmlFor={messageInputId} 
                      className="text-xs font-semibold text-neutral-700 flex items-center gap-1"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{i18n.messageLabel}</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <span className="text-[10px] text-neutral-400 font-mono">
                      {formData.message.length}/{WHATSAPP_CONFIG.limits.maxMessageLength}
                    </span>
                  </div>
                  <textarea
                    id={messageInputId}
                    required
                    rows={3}
                    maxLength={WHATSAPP_CONFIG.limits.maxMessageLength}
                    value={formData.message}
                    placeholder={i18n.messagePlaceholder}
                    onChange={(e) => {
                      setFormData(prev => ({ ...prev, message: e.target.value }));
                      if (errors.message) setErrors(prev => ({ ...prev, message: undefined }));
                    }}
                    className={`w-full bg-neutral-50 border rounded-xl py-2 px-3 text-xs sm:text-sm text-neutral-900 transition placeholder-neutral-400 focus:outline-none focus:ring-1 resize-none ${
                      errors.message 
                        ? 'border-red-400 focus:border-red-500 focus:ring-red-400 bg-red-50/20' 
                        : 'border-neutral-200 hover:border-neutral-300 focus:border-neutral-900 focus:ring-neutral-900'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Verificação reCAPTCHA interativa */}
                <div 
                  className={`p-3 bg-neutral-50/90 rounded-xl border transition-all ${
                    errors.captcha 
                      ? 'border-red-400 bg-red-50/20' 
                      : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      onClick={handleCaptchaClick}
                      disabled={isCaptchaLoading}
                      className="flex items-center gap-3 text-left cursor-pointer group focus:outline-none"
                      aria-label={i18n.captchaLabel}
                      aria-checked={isCaptchaVerified}
                      role="checkbox"
                    >
                      <div className={`w-7 h-7 rounded border flex items-center justify-center transition-all bg-white shrink-0 ${
                        isCaptchaVerified 
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-600 shadow-xs' 
                          : isCaptchaLoading
                            ? 'border-blue-400'
                            : 'border-neutral-300 group-hover:border-neutral-400 shadow-inner'
                      }`}>
                        {isCaptchaLoading ? (
                          <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                        ) : isCaptchaVerified ? (
                          <Check className="w-4 h-4 stroke-[3] text-emerald-600 animate-in zoom-in-50" />
                        ) : null}
                      </div>
                      
                      <span className="text-xs font-medium text-neutral-800 select-none">
                        {i18n.captchaLabel}
                      </span>
                    </button>

                    {/* Badge reCAPTCHA */}
                    <div className="flex flex-col items-center justify-center pl-2 shrink-0 select-none opacity-85">
                      <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 6c-8.28 0-15.18 5.6-17.26 13.2l5.88 1.96C14.04 15.34 18.64 11 24 11c4.54 0 8.44 2.44 10.6 6.06L30 20h14V6l-4.7 4.7C35.94 7.24 30.28 6 24 6z" fill="#1A73E8"/>
                        <path d="M41.26 28.84l-5.88-1.96C33.96 32.66 29.36 37 24 37c-4.54 0-8.44-2.44-10.6-6.06L18 28H4v14l4.7-4.7C12.06 40.76 17.72 42 24 42c8.28 0 15.18-5.6 17.26-13.16z" fill="#4285F4"/>
                        <path d="M12.62 21.16l-5.88-1.96C5.64 22.8 5 26.34 5 30h5c0-2.8.52-5.48 1.4-7.9l1.22-.94z" fill="#8AB4F8"/>
                      </svg>
                      <span className="text-[9px] font-bold text-neutral-500 tracking-tight leading-none mt-0.5">
                        reCAPTCHA
                      </span>
                      <div className="flex items-center gap-1 text-[7.5px] text-neutral-400 leading-none mt-0.5">
                        <a 
                          href="https://www.google.com/intl/pt-BR/policies/privacy/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {lang === 'en' ? 'Privacy' : lang === 'es' ? 'Privacidad' : 'Privacidade'}
                        </a>
                        <span>•</span>
                        <a 
                          href="https://www.google.com/intl/pt-BR/policies/terms/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {lang === 'en' ? 'Terms' : lang === 'es' ? 'Términos' : 'Termos'}
                        </a>
                      </div>
                    </div>
                  </div>

                  {errors.captcha && (
                    <p className="mt-2 text-[11px] text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.captcha}</span>
                    </p>
                  )}
                </div>

                {/* Nota de privacidade & transparência */}
                <div className="flex items-start gap-2 text-[10px] text-neutral-400 leading-relaxed bg-neutral-50/50 p-2.5 rounded-xl border border-neutral-100">
                  <Lock className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                  <span>{i18n.privacyNotice}</span>
                </div>

                {/* Botão de envio com proteção contra múltiplos cliques */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>{i18n.submitting}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 shrink-0" />
                      <span>{i18n.submitButton}</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-0.5 opacity-70" />
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

          {/* Rodapé do widget */}
          <div className="bg-neutral-50 px-4 py-2 border-t border-neutral-100 flex items-center justify-between text-[10px] text-neutral-400">
            <span>WhatsApp Web & Mobile</span>
            <span className="font-mono">{WHATSAPP_CONFIG.supportRole}</span>
          </div>

        </div>
      )}

      {/* Botão flutuante de acionamento (Launcher) */}
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-haspopup="dialog"
          aria-label={i18n.buttonAria}
          className={`group flex items-center gap-2.5 px-4 py-3 rounded-full shadow-xl transition-all duration-300 cursor-pointer ${
            isOpen 
              ? 'bg-neutral-900 text-white hover:bg-neutral-800' 
              : 'bg-emerald-600 hover:bg-emerald-500 text-white hover:shadow-2xl hover:scale-105 active:scale-95'
          }`}
        >
          {isOpen ? (
            <>
              <X className="w-5 h-5 transition-transform duration-200 group-hover:rotate-90" />
              <span className="text-xs font-semibold hidden sm:inline">Fechar</span>
            </>
          ) : (
            <>
              <div className="relative">
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-ping"></span>
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full"></span>
              </div>
              <span className="text-xs font-bold tracking-tight">Fale Conosco</span>
            </>
          )}
        </button>
      </div>

    </div>
  );
}
