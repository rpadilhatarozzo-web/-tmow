import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Problem from './sections/Problem';
import Solution from './sections/Solution';
import Differentials from './sections/Differentials';
import Process from './sections/Process';
import Audience from './sections/Audience';
import Governance from './sections/Governance';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <div className="pt-16 min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Problem />
        <Solution />
        <Differentials />
        <Process />
        <Audience />
        <Governance />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
export { App };
