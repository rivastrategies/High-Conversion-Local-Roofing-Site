
import React, { useState } from 'react';
import { analyzeRoofIssue } from '../services/geminiService';
import { AIAnalysisResult } from '../types';

const AIAssistant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<AIAnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    try {
      const analysis = await analyzeRoofIssue(query);
      setResult(analysis);
    } catch (error) {
      console.error("AI Analysis failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 skew-x-12 transform translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-1 rounded-full bg-blue-600 text-sm font-bold mb-6">NEW: AI ROOF INSIGHT</div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              Get an Instant Preliminary Assessment.
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Describe your roof issue below. Our AI assistant will analyze the description to give you a quick idea of the likely problem and urgency before our technician arrives.
            </p>
            
            <form onSubmit={handleAnalyze} className="space-y-4">
              <div className="relative">
                <textarea 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="e.g., I noticed some water spots on my living room ceiling after last night's heavy rain. I can see a few loose shingles from the driveway."
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all h-32 resize-none"
                />
              </div>
              <button 
                disabled={loading || !query}
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 disabled:cursor-not-allowed text-white px-8 py-3 rounded-xl font-bold transition-all w-full md:w-auto"
              >
                {loading ? 'Analyzing with AI...' : 'Analyze My Issue'}
              </button>
            </form>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 min-h-[300px] flex flex-col justify-center shadow-2xl">
              {!result && !loading && (
                <div className="text-center">
                  <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-500">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <p className="text-slate-500 font-medium">Your AI-generated assessment will appear here.</p>
                </div>
              )}

              {loading && (
                <div className="space-y-4 animate-pulse">
                  <div className="h-4 bg-slate-700 rounded w-3/4"></div>
                  <div className="h-4 bg-slate-700 rounded w-full"></div>
                  <div className="h-4 bg-slate-700 rounded w-5/6"></div>
                  <div className="pt-8 flex gap-4">
                    <div className="h-10 bg-slate-700 rounded-full w-24"></div>
                    <div className="h-10 bg-slate-700 rounded-full w-32"></div>
                  </div>
                </div>
              )}

              {result && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex items-center justify-between mb-6">
                    <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase ${
                      result.urgency === 'High' ? 'bg-red-500/20 text-red-400' : 
                      result.urgency === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' : 
                      'bg-green-500/20 text-green-400'
                    }`}>
                      Urgency: {result.urgency}
                    </span>
                    <span className="text-blue-400 font-bold text-sm">AI Insight</span>
                  </div>
                  <h4 className="text-2xl font-bold mb-4">{result.recommendedService} Recommended</h4>
                  <p className="text-slate-300 leading-relaxed text-lg italic mb-6">
                    "{result.suggestion}"
                  </p>
                  <div className="bg-blue-600/10 border border-blue-600/20 p-4 rounded-xl flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sm text-slate-400">
                      Disclaimer: This is an AI-powered estimate based on your text. A physical inspection is always required for a professional quote.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
