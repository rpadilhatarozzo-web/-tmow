import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import FeatureCard from '../components/ui/FeatureCard';
import differentialsData from '../data/differentials';

const Differentials = () => {
  return (
    <section id="differentials" className="py-20 md:py-28 bg-bg-otmow">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          badge="Diferenciais"
          title="Especialização, tecnologia e governança para o mercado público"
          subtitle="A Ótmow nasceu para resolver uma ineficiência estrutural: empresas com contratos sólidos, mas baixa previsibilidade de recebimento."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentialsData.map((diff, idx) => (
            <FeatureCard
              key={diff.title}
              iconName={diff.iconName}
              title={diff.title}
              description={diff.description}
              variant="accent"
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
