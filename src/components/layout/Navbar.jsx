import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Início', href: '#hero' },
    { label: 'Quem Somos', href: '#about' },
    { label: 'Problema', href: '#problem' },
    { label: 'Solução', href: '#solution' },
    { label: 'Diferenciais', href: '#differentials' },
    { label: 'Governança', href: '#governance' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Formulário', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="flex-shrink-0 text-2xl font-black tracking-tight text-primary">
            Ótmow
          </a>

          {/* Desktop menu */}
          <nav className="hidden lg:flex items-center gap-4">
            {menuItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="text-slate-600 hover:text-primary px-2.5 py-2 rounded-md text-xs xl:text-sm font-semibold transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-xs xl:text-sm font-bold text-white shadow-md shadow-primary/10 transition hover:bg-secondary"
          >
            Quero antecipar recebíveis
          </a>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-primary hover:bg-slate-100 focus:outline-none"
            >
              <span className="sr-only">Abrir menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {menuItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-slate-700 hover:text-primary hover:bg-slate-50 px-3 py-2 rounded-md text-sm font-semibold"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block text-center mt-4 rounded-lg bg-primary py-2.5 text-sm font-bold text-white shadow-md"
            >
              Quero antecipar recebíveis
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
export { Navbar };
