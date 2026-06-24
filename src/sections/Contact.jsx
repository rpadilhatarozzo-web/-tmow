import React from 'react';
import { MessageCircle, Send } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import ContactForm from '../components/forms/ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-bg-otmow">
      <div className="max-w-7xl mx-auto px-6 grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div className="text-center lg:sticky lg:top-24">
          <SectionTitle
            badge="Solicite uma análise"
            title="Sua empresa vende para o governo?"
            subtitle="Fale com a Ótmow e descubra como transformar seus recebíveis públicos em liquidez previsível."
          />
          <div className="space-y-4">
            <div className="flex flex-col items-center gap-3 rounded-2xl bg-white p-5 text-center shadow-sm border border-slate-200">
              <Send className="h-5 w-5 text-secondary" />
            <p className="text-sm leading-6 text-slate-600">
                Recebemos seus dados e um especialista entra em contato para avaliar a operação.
              </p>
            </div>
            <a
              href="https://wa.me/5500000000000"
              className="inline-flex items-center justify-center gap-2 text-sm font-bold text-primary hover:text-secondary"
            >
              <MessageCircle className="h-5 w-5" />
              Falar pelo WhatsApp comercial
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
