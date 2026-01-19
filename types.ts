
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
}

// Fix: Added AIAnalysisResult interface to match the response schema used in Gemini service
export interface AIAnalysisResult {
  suggestion: string;
  urgency: 'Low' | 'Medium' | 'High';
  recommendedService: string;
}
