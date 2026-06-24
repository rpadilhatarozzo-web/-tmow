import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CalendarClock, CircleDollarSign, FileQuestion, Hourglass, TrendingDown } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';

const pains = [
  { icon: CalendarClock, text: 'Prazo médio de pagamento elevado' },
  { icon: AlertTriangle, text: 'Risco de atrasos e baixa previsibilidade' },
  { icon: TrendingDown, text: 'Fluxo de caixa travado para crescer' },
  { icon: CircleDollarSign, text: 'Burocracia no crédito tradicional' },
  { icon: FileQuestion, text: 'Pouco entendimento dos processos públicos' },
];

const Problem = () => {
  return (
    <section id="problem" className="py-20 md:py-28 bg-bg-otmow">
      <div className="max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <SectionTitle
          badge="A dor do mercado"
          title="Vender para o governo é seguro. Receber pode ser incerto."
          subtitle="Quando o caixa depende do calendário administrativo do órgão público, a estratégia vira sobrevivência em vez de expansão."
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="mb-6 flex flex-col items-center gap-3 rounded-xl bg-primary/5 p-4 text-center sm:flex-row sm:justify-center">
            <Hourglass className="h-7 w-7 shrink-0 text-primary" />
            <p className="text-sm font-semibold text-primary">
              Empresas com contratos sólidos ainda enfrentam atraso, burocracia e pouca visibilidade sobre o recebimento.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {pains.map((pain) => {
              const Icon = pain.icon;
              return (
                <div key={pain.text} className="flex flex-col items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4 text-center">
                  <Icon className="h-5 w-5 shrink-0 text-secondary" />
                  <span className="text-sm font-medium leading-6 text-slate-700">{pain.text}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
