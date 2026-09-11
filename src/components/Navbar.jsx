import { useEffect, useState } from 'react';
import { ArrowRight, ChevronRight, Menu, Moon, Sun, X } from 'lucide-react';

const homeLinks = [
  { name: 'About', id: 'about' },
  { name: 'Approach', id: 'approach' },
  { name: 'Programs', id: 'programs' },
  { name: 'Audience', id: 'audience' },
  { name: 'Mission', id: 'mission' },
  { name: 'Contact', id: 'contact' },
];

const pageLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Programs', href: '/programs' },
];

const getStoredTheme = () => {
  const savedTheme = window.localStorage.getItem('educate-confluence-theme');
  return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const Navbar = () => {
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  const isHome = currentPath === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(getStoredTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark-mode', isDarkMode);
    window.localStorage.setItem('educate-confluence-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useEffect(() => {
    if (!isHome) return undefined;

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = Array.from(document.querySelectorAll('section[id]'));
      setActiveSection(sections.reduce((activeId, section) => (
        section.getBoundingClientRect().top <= 160 ? section.id : activeId
      ), ''));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const handleMenuKeyDown = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleMenuKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleMenuKeyDown);
    };
  }, [isMenuOpen]);

  const toggleTheme = () => {
    setIsDarkMode((currentMode) => {
      const nextMode = !currentMode;
      document.documentElement.classList.toggle('dark-mode', nextMode);
      window.localStorage.setItem('educate-confluence-theme', nextMode ? 'dark' : 'light');
      return nextMode;
    });
  };

  const closeMenu = () => setIsMenuOpen(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;
    element.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
    closeMenu();
  };

  const handleGetStarted = () => {
    if (isHome) {
      scrollToSection('contact');
    } else {
      window.location.href = '/#contact';
    }
    closeMenu();
  };

  const renderThemeToggle = (withLabel = false) => (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      aria-pressed={isDarkMode}
      className={`theme-toggle ${withLabel ? 'mb-5' : 'ml-3'}`}
    >
      <span className="theme-toggle-track">
        <Sun className="theme-toggle-icon theme-toggle-sun" aria-hidden="true" />
        <Moon className="theme-toggle-icon theme-toggle-moon" aria-hidden="true" />
        <span className="theme-toggle-thumb" />
      </span>
      {withLabel && <span className="ml-3 text-sm font-medium text-slate-600">{isDarkMode ? 'Light mode' : 'Dark mode'}</span>}
    </button>
  );

  return (
    <>
      <nav className={`nav-shell fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <img src="/nav-logo.png" alt="Educate Confluence logo" className="h-12 w-16 object-contain sm:h-14 sm:w-20" />
              <span className="flex flex-col">
                <strong className="text-lg tracking-tight text-slate-900">Educate Confluence</strong>
                <small className="text-[10px] font-medium uppercase tracking-widest text-slate-500">Consulting Enterprise</small>
              </span>
            </a>

            <div className="hidden items-center gap-1 lg:flex">
              {isHome ? homeLinks.map((link) => (
                <button key={link.id} type="button" onClick={() => scrollToSection(link.id)} className={`group relative overflow-hidden px-4 py-2 text-sm font-medium transition-colors duration-200 ${activeSection === link.id ? 'text-slate-950' : 'text-slate-600 hover:text-slate-900'}`}>
                  <span className="relative z-10">{link.name}</span>
                  <span className={`absolute bottom-1 left-4 right-4 h-0.5 origin-left rounded-full bg-gradient-to-r from-orange-500 via-yellow-400 to-green-500 transition-transform duration-200 ${activeSection === link.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                </button>
              )) : pageLinks.map((link) => <a key={link.href} href={link.href} className="px-4 py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-orange-600">{link.name}</a>)}
              {renderThemeToggle()}
              <button type="button" onClick={handleGetStarted} className="group relative ml-4 overflow-hidden rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 px-6 py-2.5 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5">
                <span className="relative z-10">Get Started</span><span className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/25 transition-transform duration-500 group-hover:translate-x-[500%]" />
              </button>
            </div>

            <button type="button" aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={isMenuOpen} aria-controls="mobile-navigation" className="rounded-xl p-2 text-slate-700 transition-colors hover:bg-slate-100 lg:hidden" onClick={() => setIsMenuOpen((open) => !open)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu-backdrop lg:hidden ${isMenuOpen ? 'is-open' : ''}`} aria-hidden="true" onClick={closeMenu} />
      <aside id="mobile-navigation" aria-label="Mobile navigation" aria-hidden={!isMenuOpen} inert={!isMenuOpen ? '' : undefined} className={`mobile-menu-panel lg:hidden ${isMenuOpen ? 'is-open' : ''}`}>
        <div className="flex items-center justify-between border-b border-slate-200/80 px-6 py-5 dark:border-white/10">
          <a href="/" className="flex items-center gap-3" onClick={closeMenu}>
            <img src="/nav-logo.png" alt="Educate Confluence logo" className="h-11 w-14 object-contain" />
            <span><strong className="block text-sm text-slate-900 dark:text-white">Educate Confluence</strong><small className="mt-0.5 block text-[9px] font-medium uppercase tracking-[0.16em] text-slate-500">Consulting Enterprise</small></span>
          </a>
          <button type="button" aria-label="Close navigation menu" onClick={closeMenu} className="rounded-xl p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-white/10 dark:hover:text-white"><X className="h-5 w-5" /></button>
        </div>
        <div className="flex h-[calc(100%-5.5rem)] flex-col overflow-y-auto px-6 py-7">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-orange-600">Explore</p>
          {renderThemeToggle(true)}
          <div className="space-y-2">
            {isHome ? homeLinks.map((link) => <button key={link.id} type="button" onClick={() => scrollToSection(link.id)} className={`group flex w-full items-center justify-between rounded-2xl border px-4 py-3.5 text-left font-medium transition-colors duration-200 ${activeSection === link.id ? 'border-orange-200 bg-orange-50 text-orange-700 dark:border-orange-500/30 dark:bg-orange-500/10 dark:text-orange-300' : 'border-transparent text-slate-700 hover:border-slate-200 hover:bg-slate-50 dark:text-slate-300 dark:hover:border-white/10 dark:hover:bg-white/5'}`}>{link.name}<ChevronRight className={`h-4 w-4 ${activeSection === link.id ? 'text-orange-500' : 'opacity-0 group-hover:opacity-100'}`} /></button>) : pageLinks.map((link) => <a key={link.href} href={link.href} onClick={closeMenu} className="group flex w-full items-center justify-between rounded-2xl border border-transparent px-4 py-3.5 font-medium text-slate-700 transition-colors duration-200 hover:border-slate-200 hover:bg-slate-50 dark:text-slate-300 dark:hover:border-white/10 dark:hover:bg-white/5">{link.name}<ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100" /></a>)}
          </div>
          <button type="button" onClick={handleGetStarted} className="mt-auto flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-500 px-6 py-4 font-semibold text-white shadow-lg shadow-orange-500/20 transition-transform duration-200 hover:-translate-y-0.5">Get Started <ArrowRight className="h-4 w-4" /></button>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
