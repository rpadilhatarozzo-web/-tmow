import React from 'react';
import { Camera, Link, Users } from 'lucide-react';

const Footer = () => {
  const menuItems = [
    { label: 'Início', href: '#hero' },
    { label: 'Quem Somos', href: '#about' },
    { label: 'Diferenciais', href: '#differentials' },
    { label: 'Processo', href: '#process' },
    { label: 'Para Quem', href: '#audience' },
    { label: 'Governança', href: '#governance' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Link, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Camera, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Users, href: 'https://facebook.com', label: 'Facebook' },
  ];

  return (
    <footer className="bg-primary text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        
        {/* Left Side: Brand and Links */}
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-2xl font-black">Ótmow</p>
            <p className="mt-1.5 text-xs text-slate-350 max-w-sm">
              Liquidez inteligente para fornecedores públicos, com análise técnica, governança e atendimento consultivo.
            </p>
          </div>
          
          <nav className="flex gap-4 flex-wrap max-w-lg">
            {menuItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="text-slate-300 hover:text-white text-sm font-semibold transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Right Side: Social Media and Copyright */}
        <div className="flex flex-col items-start md:items-end gap-4">
          <div className="flex gap-4">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-accent transition-all"
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
          
          <p className="text-xs text-slate-400 font-medium">
            &copy; {new Date().getFullYear()} Ótmow. Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
export { Footer };
