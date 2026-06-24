import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, FileLock2, Landmark, ShieldCheck } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';

const pillars = [
  {
    icon: ClipboardCheck,
    title: 'Análise documental',
    description: 'Validação de contratos, recebíveis, documentos e informações essenciais para a tomada de decisão.',
  },
  {
    icon: Landmark,
    title: 'Avaliação do órgão pagador',
    description: 'Leitura técnica do sacado público, comportamento de pagamento e contexto da operação.',
  },
  {
    icon: FileLock2,
    title: 'Formalização segura',
    description: 'Processo digital com registros claros, documentação organizada e acompanhamento consultivo.',
  },
  {
    icon: ShieldCheck,
    title: 'Governança em risco',
    description: 'Critérios técnicos para estruturar liquidez com transparência, consistência e segurança jurídica.',
  },
];

const Governance = () => {
  return (
    <section id="governance" className="py-20 md:py-28 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="text-center">
            <SectionTitle
              badge="Segurança e governança"
              title="Confiança para transformar contratos públicos em liquidez"
              subtitle="A operação combina análise técnica, validação documental, avaliação do órgão pagador, processo digital e atendimento consultivo."
              light
            />
            <a href="#contact">
              <Button variant="secondary">Solicitar análise</Button>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="bg-white/8 border border-white/10 p-6 rounded-2xl text-center"
                >
                  <IconComp className="mx-auto w-7 h-7 text-accent mb-5" />
                  <h3 className="text-lg font-bold mb-3">{pillar.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{pillar.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Governance;
