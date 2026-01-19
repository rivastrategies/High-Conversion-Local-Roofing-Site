
import React from 'react';
import { Service, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'roof-replacement',
    title: 'Roof Replacement',
    description: 'Complete tear-offs and professional installation of asphalt, metal, or tile roofing systems.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    id: 'roof-repair',
    title: 'Roof Repair',
    description: 'Expert leak detection, shingle replacement, and flashing repairs to extend your roof\'s life.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    )
  },
  {
    id: 'storm-damage',
    title: 'Storm Damage',
    description: 'Emergency tarping and insurance claim assistance for hail, wind, and debris damage.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    location: 'North Heights',
    text: 'EliteRoofing was fantastic. They completed my full replacement in just two days and left the yard spotless!',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Chen',
    location: 'West Oak',
    text: 'After the big hail storm, they were the only ones who actually showed up and helped with the insurance claim.',
    rating: 5
  },
  {
    id: '3',
    name: 'Amanda Brooks',
    location: 'Downtown Riverside',
    text: 'Reasonable pricing and great communication. The repair was done professionally and hasn\'t leaked since.',
    rating: 4
  }
];

export const TRUST_BADGES = [
  { name: 'GAF Master Elite', url: 'https://picsum.photos/seed/gaf/200/100' },
  { name: 'Owens Corning Platinum', url: 'https://picsum.photos/seed/oc/200/100' },
  { name: 'BBB Accredited', url: 'https://picsum.photos/seed/bbb/200/100' },
  { name: 'NRCA Member', url: 'https://picsum.photos/seed/nrca/200/100' }
];
