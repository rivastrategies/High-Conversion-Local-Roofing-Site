
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image/Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1635424710928-0544e8512efe?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern roof" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-2xl text-white">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 px-3 py-1 rounded-full mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold tracking-wide uppercase text-blue-300">#1 Rated Local Contractor</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6">
            Trusted Quality For Your <span className="text-blue-500">Everlasting</span> Roof.
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl">
            From emergency storm repairs to complete architectural shingle replacements, we provide local homeowners with reliable protection and peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white text-center px-8 py-4 rounded-lg font-bold text-lg shadow-xl shadow-blue-600/30 transition-all hover:-translate-y-1"
            >
              Get a Free Estimate
            </a>
            <a 
              href="#services" 
              className="bg-white/10 hover:bg-white/20 text-white text-center px-8 py-4 rounded-lg font-bold text-lg backdrop-blur-md border border-white/20 transition-all"
            >
              Explore Services
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i} 
                  className="w-10 h-10 rounded-full border-2 border-slate-900" 
                  src={`https://picsum.photos/seed/person${i}/100/100`} 
                  alt="Reviewer" 
                />
              ))}
            </div>
            <div>
              <div className="flex text-yellow-400 mb-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-sm text-slate-400">500+ Satisfied Customers Nearby</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
