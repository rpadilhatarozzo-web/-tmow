import { z } from 'zod';

const digitsOnly = (value) => value.replace(/[^\d]/g, '');

export const contactFormSchema = z.object({
  name: z.string().trim().min(3, { message: 'O nome completo deve conter no mínimo 3 caracteres.' }),
  company: z.string().trim().min(2, { message: 'O nome da empresa deve conter no mínimo 2 caracteres.' }),
  cnpj: z.string().refine((value) => digitsOnly(value).length === 14, {
    message: 'Informe um CNPJ válido no formato 00.000.000/0000-00.',
  }),
  phone: z.string().refine((value) => {
    const clean = digitsOnly(value);
    return clean.length >= 10 && clean.length <= 11;
  }, { message: 'Informe um WhatsApp válido com DDD.' }),
  email: z.string().trim().email({ message: 'Insira um endereço de e-mail válido.' }),
  publicAgency: z.string().trim().optional(),
  estimatedValue: z.string().optional(),
  message: z.string().trim().optional(),
  consent: z.literal(true, {
    error: () => ({ message: 'Você precisa autorizar o contato para enviar o formulário.' }),
  }),
  website: z.string().max(0, { message: 'Envio bloqueado.' }).optional(),
});

export default contactFormSchema;
