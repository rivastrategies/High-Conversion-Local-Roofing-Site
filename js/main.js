
// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Logic
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Header Scroll Effect
  const header = document.querySelector('header');
  const headerTitle = document.getElementById('header-title');
  const headerLinks = document.querySelectorAll('.nav-link');

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header?.classList.add('bg-white', 'shadow-md', 'py-3');
      header?.classList.remove('bg-transparent', 'py-5');
      
      headerTitle?.classList.remove('md:text-white');
      headerTitle?.classList.add('text-slate-900');
      
      headerLinks.forEach(link => {
        link.classList.remove('md:text-white/90', 'md:hover:text-white');
        link.classList.add('text-slate-600', 'hover:text-blue-600');
      });
    } else {
      header?.classList.remove('bg-white', 'shadow-md', 'py-3');
      header?.classList.add('bg-transparent', 'py-5');
      
      headerTitle?.classList.add('md:text-white');
      headerTitle?.classList.remove('text-slate-900');
      
      headerLinks.forEach(link => {
        link.classList.add('md:text-white/90', 'md:hover:text-white');
        link.classList.remove('text-slate-600', 'hover:text-blue-600');
      });
    }
  };

  window.addEventListener('scroll', handleScroll);
  // Initial check
  handleScroll();

  // Contact Form Mock
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you! Your estimate request has been simulated.');
      contactForm.reset();
    });
  }

  // AI Assistant Mock
  const aiForm = document.getElementById('ai-form');
  const aiInput = document.getElementById('ai-input');
  const aiButton = document.getElementById('ai-submit-btn');
  const aiResultContainer = document.getElementById('ai-result-container');
  const aiEmptyState = document.getElementById('ai-empty-state');
  const aiLoadingState = document.getElementById('ai-loading-state');
  const aiResultContent = document.getElementById('ai-result-content');

  // Result Elements
  const resUrgency = document.getElementById('res-urgency');
  const resService = document.getElementById('res-service');
  const resSuggestion = document.getElementById('res-suggestion');

  if (aiForm) {
    aiForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const query = aiInput.value.trim();
      if (!query) return;

      // Reset UI
      aiButton.disabled = true;
      aiButton.textContent = 'Analyzing with AI...';
      aiInput.disabled = true;

      // Show Loading
      aiEmptyState.classList.add('hidden');
      aiResultContent.classList.add('hidden');
      aiLoadingState.classList.remove('hidden');

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Mock Logic based on keywords
      let urgency = 'Low';
      let service = 'Maintenance Check';
      let suggestion = 'It sounds like a minor issue that can be addressed during regular maintenance hours.';

      const lowerQuery = query.toLowerCase();
      if (lowerQuery.includes('leak') || lowerQuery.includes('water') || lowerQuery.includes('ceiling')) {
        urgency = 'High';
        service = 'Emergency Leak Repair';
        suggestion = 'Water intrusion is serious. We recommend immediate tarping to prevent further interior damage.';
      } else if (lowerQuery.includes('shingle') || lowerQuery.includes('missing') || lowerQuery.includes('wind')) {
        urgency = 'Medium';
        service = 'Shingle Replacement';
        suggestion = 'Missing shingles expose the underlayment. We should replace them soon to avoid leaks.';
      } else if (lowerQuery.includes('hail') || lowerQuery.includes('storm')) {
        urgency = 'Medium';
        service = 'Storm Damage Inspection';
        suggestion = 'Hail impact can be subtle but damaging. A professional inspection is needed for insurance claims.';
      }

      // Update Result UI
      const urgencyClass = urgency === 'High' ? 'bg-red-500/20 text-red-400' : 
                          urgency === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' : 
                          'bg-green-500/20 text-green-400';
      
      resUrgency.className = `px-4 py-1 rounded-full text-xs font-bold uppercase ${urgencyClass}`;
      resUrgency.textContent = `Urgency: ${urgency}`;
      
      resService.textContent = `${service} Recommended`;
      resSuggestion.textContent = `"${suggestion}"`;

      // Show Result
      aiLoadingState.classList.add('hidden');
      aiResultContent.classList.remove('hidden');

      // Reset Button
      aiButton.disabled = false;
      aiButton.textContent = 'Analyze My Issue';
      aiInput.disabled = false;
    });
  }
});
