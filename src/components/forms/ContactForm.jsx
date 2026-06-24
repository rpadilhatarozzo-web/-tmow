import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import contactFormSchema from '../../lib/validations';
import Button from '../ui/Button';

const formatCNPJ = (value) => {
  const clean = value.replace(/[^\d]/g, '');
  if (clean.length <= 2) return clean;
  if (clean.length <= 5) return `${clean.slice(0, 2)}.${clean.slice(2)}`;
  if (clean.length <= 8) return `${clean.slice(0, 2)}.${clean.slice(2, 5)}.${clean.slice(5)}`;
  if (clean.length <= 12) return `${clean.slice(0, 2)}.${clean.slice(2, 5)}.${clean.slice(5, 8)}/${clean.slice(8)}`;
  return `${clean.slice(0, 2)}.${clean.slice(2, 5)}.${clean.slice(5, 8)}/${clean.slice(8, 12)}-${clean.slice(12, 14)}`;
};

const formatPhone = (value) => {
  const clean = value.replace(/[^\d]/g, '');
  if (clean.length <= 2) return clean.length > 0 ? `(${clean}` : '';
  if (clean.length <= 6) return `(${clean.slice(0, 2)}) ${clean.slice(2)}`;
  if (clean.length <= 10) return `(${clean.slice(0, 2)}) ${clean.slice(2, 6)}-${clean.slice(6)}`;
  return `(${clean.slice(0, 2)}) ${clean.slice(2, 7)}-${clean.slice(7, 11)}`;
};

const formatCurrency = (value) => {
  const clean = value.replace(/[^\d]/g, '');
  if (!clean) return '';
  const amount = Number.parseInt(clean, 10) / 100;
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(amount);
};

const FieldError = ({ message }) => {
  if (!message) return null;

  return (
    <span className="text-xs text-red-600 mt-1 flex items-center gap-1">
      <AlertCircle className="w-3.5 h-3.5" />
      {message}
    </span>
  );
};

const inputClass = (hasError) => (
  `w-full px-4 py-3 rounded-xl border bg-white ${hasError ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:ring-accent/50'} focus:border-secondary focus:ring-4 focus:outline-none transition-all`
);

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      company: '',
      cnpj: '',
      phone: '',
      email: '',
      publicAgency: '',
      estimatedValue: '',
      message: '',
      consent: false,
      website: '',
    },
  });

  const onSubmit = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    setLoading(false);
    setIsSubmitted(true);
    reset();
  };

  return (
    <div className="relative bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-200/60">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.form
            key="contact-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >
            <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...register('website')} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="text-sm font-semibold text-primary mb-1 block">Nome completo</label>
                <input id="name" type="text" placeholder="Seu nome completo" className={inputClass(errors.name)} {...register('name')} />
                <FieldError message={errors.name?.message} />
              </div>

              <div>
                <label htmlFor="company" className="text-sm font-semibold text-primary mb-1 block">Empresa</label>
                <input id="company" type="text" placeholder="Nome da empresa" className={inputClass(errors.company)} {...register('company')} />
                <FieldError message={errors.company?.message} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="cnpj" className="text-sm font-semibold text-primary mb-1 block">CNPJ</label>
                <Controller
                  name="cnpj"
                  control={control}
                  render={({ field }) => (
                    <input
                      id="cnpj"
                      type="text"
                      placeholder="00.000.000/0000-00"
                      maxLength={18}
                      className={inputClass(errors.cnpj)}
                      value={field.value}
                      onChange={(event) => field.onChange(formatCNPJ(event.target.value))}
                    />
                  )}
                />
                <FieldError message={errors.cnpj?.message} />
              </div>

              <div>
                <label htmlFor="phone" className="text-sm font-semibold text-primary mb-1 block">WhatsApp</label>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <input
                      id="phone"
                      type="text"
                      placeholder="(11) 99999-9999"
                      maxLength={15}
                      className={inputClass(errors.phone)}
                      value={field.value}
                      onChange={(event) => field.onChange(formatPhone(event.target.value))}
                    />
                  )}
                />
                <FieldError message={errors.phone?.message} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="email" className="text-sm font-semibold text-primary mb-1 block">E-mail</label>
                <input id="email" type="email" placeholder="contato@empresa.com.br" className={inputClass(errors.email)} {...register('email')} />
                <FieldError message={errors.email?.message} />
              </div>

              <div>
                <label htmlFor="publicAgency" className="text-sm font-semibold text-primary mb-1 block">Órgão público</label>
                <input id="publicAgency" type="text" placeholder="Prefeitura, secretaria, autarquia..." className={inputClass(errors.publicAgency)} {...register('publicAgency')} />
                <FieldError message={errors.publicAgency?.message} />
              </div>
            </div>

            <div>
              <label htmlFor="estimatedValue" className="text-sm font-semibold text-primary mb-1 block">Valor aproximado</label>
              <Controller
                name="estimatedValue"
                control={control}
                render={({ field }) => (
                  <input
                    id="estimatedValue"
                    type="text"
                    placeholder="R$ 150.000,00"
                    className={inputClass(errors.estimatedValue)}
                    value={field.value}
                    onChange={(event) => field.onChange(formatCurrency(event.target.value))}
                  />
                )}
              />
              <FieldError message={errors.estimatedValue?.message} />
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-semibold text-primary mb-1 block">Mensagem</label>
              <textarea
                id="message"
                rows={4}
                placeholder="Conte rapidamente sobre o contrato, prazo de recebimento ou necessidade de capital."
                className={`${inputClass(errors.message)} resize-none`}
                {...register('message')}
              />
              <FieldError message={errors.message?.message} />
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <label htmlFor="consent" className="flex items-start gap-3 text-sm leading-6 text-slate-600">
                <input
                  id="consent"
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-primary focus:ring-accent"
                  {...register('consent')}
                />
                <span>
                  Ao enviar meus dados, autorizo a Ótmow a entrar em contato para avaliar minha operação e apresentar uma proposta personalizada.
                </span>
              </label>
              <FieldError message={errors.consent?.message} />
            </div>

            <Button
              type="submit"
              variant="primary"
              loading={loading}
              className="w-full justify-center text-center font-bold text-base py-4 rounded-xl"
            >
              Solicitar análise da minha operação
            </Button>
          </motion.form>
        ) : (
          <motion.div
            key="success-message"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center text-center py-12 px-4"
          >
            <div className="mb-6 w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center border border-green-200">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-3">Recebemos seus dados.</h3>
            <p className="text-slate-600 max-w-md mb-8 leading-relaxed">
              Um especialista da Ótmow entrará em contato para avaliar sua operação.
            </p>
            <Button variant="outline" onClick={() => setIsSubmitted(false)}>
              Enviar outra solicitação
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
