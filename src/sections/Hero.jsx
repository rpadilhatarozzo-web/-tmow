import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, FileCheck2, ShieldCheck } from 'lucide-react';
import Button from '../components/ui/Button';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-primary text-white"
    >
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(126,200,245,0.18),transparent_40%),linear-gradient(135deg,#03194A_0%,#0B2D6B_55%,#03194A_100%)]" />
      
      <div className="relative max-w-7xl mx-auto px-6 pt-10 pb-16 md:pt-12 md:pb-20 lg:pt-14 lg:pb-24 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        {/* Left Column: Copywriting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          <p className="mb-4 inline-flex rounded-full border border-accent/20 bg-white/5 px-3 py-1 text-xs font-semibold text-accent">
            Techfin para fornecedores públicos
          </p>
          
          <h1 className="max-w-3xl text-3xl font-black leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Liquidez inteligente para fornecedores públicos.
          </h1>
          
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-200 md:text-lg">
            Antecipe recebíveis de contratos públicos com análise técnica, processo digital e segurança jurídica em todas as etapas.
          </p>
          
          <div className="mt-6 flex flex-col justify-center lg:justify-start gap-3 sm:flex-row w-full sm:w-auto">
            <a href="#contact" className="w-full sm:w-auto">
              <Button variant="secondary" className="w-full sm:w-auto text-sm py-2.5">
                Quero falar com a Ótmow
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
            </a>
            <a href="#process" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full border-white/40 text-white hover:bg-white hover:text-primary sm:w-auto text-sm py-2.5">
                Entenda como funciona
              </Button>
            </a>
          </div>
          
          <p className="mt-4 max-w-xl text-[10px] leading-4 text-slate-400">
            Prazo de até 48h úteis sujeito à análise de documentação, perfil do cedente e comportamento de pagamento do sacado.
          </p>
        </motion.div>

        {/* Right Column: Visual Features (Row-based list to save vertical height) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-sm"
        >
          <div className="grid gap-3">
            {[
              { 
                icon: Clock, 
                title: 'Liquidez em até 48h úteis', 
                text: 'Análise ágil para transformar recebíveis em capital de giro.' 
              },
              { 
                icon: FileCheck2, 
                title: 'Processo 100% digital', 
                text: 'Cadastro, documentação, proposta e formalização com fluidez.' 
              },
              { 
                icon: ShieldCheck, 
                title: 'Governança em cada etapa', 
                text: 'Rigor técnico, validação documental e atendimento consultivo.' 
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.title} 
                  className="flex items-start gap-4 rounded-xl border border-white/5 bg-white/5 p-4 transition-all duration-300 hover:bg-white/10 text-left"
                >
                  <div className="flex-shrink-0 p-2.5 rounded-lg bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-white leading-snug">{item.title}</h2>
                    <p className="mt-1 text-xs leading-normal text-slate-300">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
