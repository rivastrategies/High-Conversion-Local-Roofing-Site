
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
// Fix: Import the AI Assistant component
import AIAssistant from './components/AIAssistant';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        
        {/* Trust Strip */}
        <div className="bg-slate-50 py-10 border-b border-slate-200">
          <div className="container mx-auto px-4 text-center">
            <p className="text-slate-400 font-semibold uppercase tracking-widest text-xs mb-6">Our Certification & Partners</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
              <span className="text-xl font-bold text-slate-400">GAF MASTER ELITE</span>
              <span className="text-xl font-bold text-slate-400">OWENS CORNING</span>
              <span className="text-xl font-bold text-slate-400">CERTAINTEED</span>
              <span className="text-xl font-bold text-slate-400">BBB A+ RATED</span>
            </div>
          </div>
        </div>

        <Services />
        
        {/* Fix: Integrated the AI Assistant section for homeowner roof assessments */}
        <AIAssistant />
        
        {/* Stats Section */}
        <section className="bg-blue-600 py-16">
          <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
            <div>
              <p className="text-4xl md:text-5xl font-extrabold mb-2">15+</p>
              <p className="text-blue-100 text-sm font-semibold uppercase">Years Exp</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-extrabold mb-2">3k+</p>
              <p className="text-blue-100 text-sm font-semibold uppercase">Roofs Installed</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-extrabold mb-2">24h</p>
              <p className="text-blue-100 text-sm font-semibold uppercase">Response Time</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-extrabold mb-2">100%</p>
              <p className="text-blue-100 text-sm font-semibold uppercase">Licensed & Insured</p>
            </div>
          </div>
        </section>

        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
