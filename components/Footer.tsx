
import React from 'react';
import { TRUST_BADGES } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span className="text-2xl font-extrabold text-white">EliteRoofing <span className="text-blue-600">Pro</span></span>
            </div>
            <p className="text-slate-400 mb-8 max-w-sm">
              Delivering high-performance roofing solutions to residential communities since 2008. Licensed, insured, and dedicated to craftsmanship.
            </p>
            <div className="flex gap-4">
              {['facebook', 'instagram', 'linkedin'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-slate-400"></div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'Our Process', 'Testimonials', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-blue-500 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              {['Roof Replacement', 'Leak Repair', 'Storm Restoration', 'Gutter Install', 'Annual Inspections'].map((service) => (
                <li key={service}>
                  <a href="#" className="hover:text-blue-500 transition-colors">{service}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-12">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mb-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {TRUST_BADGES.map((badge) => (
              <img key={badge.name} src={badge.url} alt={badge.name} className="h-10 md:h-12 w-auto" />
            ))}
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>© 2025 EliteRoofing Pro. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-white transition-colors">Site Map</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
