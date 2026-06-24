import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import audienceData from '../data/audience';

const Audience = () => {
  return (
    <section id="audience" className="py-20 md:py-28 bg-bg-otmow">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          badge="Para quem é"
          title="Para empresas que vendem para o governo"
          subtitle="Atendemos fornecedores de produtos e serviços para prefeituras, governos estaduais, órgãos públicos e autarquias."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {audienceData.map((item, idx) => {
            const IconComponent = Icons[item.iconName] || Icons.HelpCircle;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white border border-slate-200 p-7 rounded-2xl text-center shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-5 items-center"
              >
                <div className="p-4 rounded-xl bg-primary text-white shrink-0 shadow-md shadow-primary/10">
                  <IconComponent className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Audience;
