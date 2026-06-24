import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import ProcessCard from '../components/ui/ProcessCard';
import processSteps from '../data/processSteps';

const Process = () => {
  return (
    <section id="process" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          badge="Como funciona"
          title="Um processo simples, técnico e transparente"
          subtitle="Da documentação inicial à liberação do valor, cada etapa foi desenhada para reduzir fricção e aumentar previsibilidade."
        />
        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent lg:block" />
          {processSteps.map((step, index) => (
            <ProcessCard key={step.step} {...step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
