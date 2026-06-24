import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import FeatureCard from '../components/ui/FeatureCard';

const cards = [
  {
    iconName: 'Landmark',
    title: 'Especialistas em contratos públicos',
    description: 'Atuamos em um mercado que exige conhecimento específico, análise técnica e domínio dos processos públicos.',
  },
  {
    iconName: 'BrainCircuit',
    title: 'Tecnologia e IA internas',
    description: 'Operamos com inteligência analítica para avaliar cedente, sacado e documentação com mais precisão.',
  },
  {
    iconName: 'UserCheck',
    title: 'Atendimento personalizado',
    description: 'Construímos soluções sob medida para o cenário real de cada cliente, sem modelos genéricos.',
  },
  {
    iconName: 'BadgeCheck',
    title: 'Expertise rara no mercado público',
    description: 'Combinamos antecipação pública, governança e estratégia financeira para fornecedores do governo.',
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          badge="Quem Somos"
          title="Uma Techfin especializada em antecipação de recebíveis públicos"
          subtitle="A Ótmow une tecnologia, inteligência e governança para transformar contratos públicos em liquidez rápida, previsível e juridicamente segura."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <FeatureCard key={card.title} {...card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
