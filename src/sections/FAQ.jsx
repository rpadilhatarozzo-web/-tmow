import React, { useState } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import FAQItem from '../components/ui/FAQItem';
import faqData from '../data/faq';

const FAQ = () => {
  const [openId, setOpenId] = useState(1);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <SectionTitle
          badge="FAQ"
          title="Dúvidas frequentes"
          subtitle="Respostas diretas para entender se a sua operação pode ser analisada pela Ótmow."
        />

        <div className="space-y-4">
          {faqData.map((item) => (
            <FAQItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={openId === item.id}
              onClick={() => handleToggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
