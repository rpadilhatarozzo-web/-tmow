import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';

const benefits = [
  'Liquidez em até 48h úteis',
  'Atendimento dedicado',
  'Estratégia personalizada por contrato',
  'Previsibilidade financeira real',
  'Processo digital e transparente',
];

const Solution = () => {
  return (
    <section id="solution" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div className="text-center">
          <SectionTitle
            badge="Solução Ótmow"
            title="Transformamos recebíveis públicos em liquidez previsível"
            subtitle="Analisamos cada contrato com rigor técnico para oferecer uma condição personalizada, alinhada à operação e à necessidade de caixa da sua empresa."
          />
          <a href="#contact">
            <Button variant="primary">Solicitar análise da minha operação</Button>
          </a>
        </div>
        <div className="rounded-2xl bg-primary p-6 text-center text-white shadow-xl shadow-primary/20">
          <h3 className="text-2xl font-bold">Com a Ótmow você ganha</h3>
          <div className="mt-6 grid gap-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-white/10 p-4 sm:flex-row sm:justify-center">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                <span className="font-semibold">{benefit}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs leading-5 text-slate-300">
            Prazo sujeito à análise de documentação, perfil do cedente e comportamento de pagamento do sacado.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Solution;
