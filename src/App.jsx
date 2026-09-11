import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import heroIllustration from '/hero.png';
import About from './About.jsx';
import Programs from './Programs.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import { 
  BookOpen, 
  Users, 
  Globe, 
  Lightbulb, 
  Award, 
  Heart, 
  Target, 
  Zap, 
  ArrowRight, 
  X,
  ChevronRight,
  Star,
  GraduationCap,
  Rocket,
  MessageCircle,
  Calculator,
  Atom,
  Wallet,
  School,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';

const CountUp = ({ end, suffix = '', duration = 1400 }) => {
  const statisticRef = useRef(null);
  const [value, setValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const element = statisticRef.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const elements = Array.from(document.querySelectorAll(
      'section h1, section h2, section h3, section p, section .group, section form, footer h2, footer h3, footer p, footer .rounded-3xl'
    )).filter((element) => !element.closest('[data-static-footer]'));

    elements.forEach((element, index) => {
      element.classList.add('immersive-reveal');
      element.style.setProperty('--reveal-delay', `${(index % 6) * 70}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );

    elements.forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      elements.forEach((element) => {
        element.classList.remove('immersive-reveal', 'is-visible');
        element.style.removeProperty('--reveal-delay');
      });
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return undefined;

    let animationFrame;
    const startTime = performance.now();
    const animate = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(end * easedProgress));

      if (progress < 1) animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [duration, end, hasStarted]);

  return <span ref={statisticRef}>{value.toLocaleString()}{suffix}</span>;
};

const EducateConfluence = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationSubmitted, setConsultationSubmitted] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openConsultationForm = () => {
    setConsultationSubmitted(false);
    setIsConsultationOpen(true);
  };

  const closeConsultationForm = () => {
    setIsConsultationOpen(false);
    setConsultationSubmitted(false);
  };

  const handleConsultationSubmit = (event) => {
    event.preventDefault();
    // Connect this handler to FormSpark when the endpoint is ready.
    setConsultationSubmitted(true);
  };

  // Brand Colors
  const colors = {
    orange: '#F97316',
    yellow: '#EAB308',
    green: '#22C55E',
    blue: '#0EA5E9',
    dark: '#1E293B',
    light: '#F8FAFC'
  };

  const approachAreas = [
    {
      title: 'Academic Excellence',
      description: 'High-quality, standards-aligned instruction that builds strong foundations, confidence, and critical thinking skills.',
      icon: <BookOpen className="w-8 h-8" />,
      color: 'from-orange-400 to-orange-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      iconColor: 'text-orange-500'
    },
    {
      title: 'STEAM & Innovation',
      description: 'Hands-on science, technology, engineering, arts and mathematics experiences that spark creativity.',
      icon: <Lightbulb className="w-8 h-8" />,
      color: 'from-yellow-400 to-yellow-500',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      iconColor: 'text-yellow-500'
    },
    {
      title: 'Communication & Confidence',
      description: 'Building articulate, confident communicators through structured speaking and writing programs.',
      icon: <MessageCircle className="w-8 h-8" />,
      color: 'from-green-400 to-green-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      iconColor: 'text-green-500'
    },
    {
      title: 'Life & Financial Skills',
      description: 'Practical skills for real-world success, from budgeting to decision-making and resilience.',
      icon: <Wallet className="w-8 h-8" />,
      color: 'from-emerald-400 to-emerald-500',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      iconColor: 'text-emerald-500'
    },
    {
      title: 'Character & Leadership',
      description: 'Developing ethical, empathetic leaders ready to serve and inspire their communities.',
      icon: <Award className="w-8 h-8" />,
      color: 'from-sky-400 to-sky-500',
      bgColor: 'bg-sky-50',
      borderColor: 'border-sky-200',
      iconColor: 'text-sky-500'
    },
    {
      title: 'Inclusive & Learner-Centred',
      description: 'Personalised, accessible education that honours every learner\'s unique journey and potential.',
      icon: <Heart className="w-8 h-8" />,
      color: 'from-blue-400 to-blue-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      iconColor: 'text-blue-500'
    }
  ];

  const programs = [
    { name: 'SAT Prep', icon: <GraduationCap className="w-6 h-6" />, category: 'Academic', color: 'bg-orange-50 text-orange-600 border-orange-200' },
    { name: 'ELA', icon: <BookOpen className="w-6 h-6" />, category: 'Academic', color: 'bg-orange-50 text-orange-600 border-orange-200' },
    { name: 'Mathematics', icon: <Calculator className="w-6 h-6" />, category: 'Academic', color: 'bg-orange-50 text-orange-600 border-orange-200' },
    { name: 'Science', icon: <Atom className="w-6 h-6" />, category: 'Academic', color: 'bg-orange-50 text-orange-600 border-orange-200' },
    // { name: 'Reading', icon: <BookOpen className="w-6 h-6" />, category: 'Academic', color: 'bg-orange-50 text-orange-600 border-orange-200' },
    // { name: 'STEAM', icon: <Rocket className="w-6 h-6" />, category: 'Innovation', color: 'bg-yellow-50 text-yellow-600 border-yellow-200' },
    // { name: 'Coding & Robotics', icon: <Code className="w-6 h-6" />, category: 'Innovation', color: 'bg-yellow-50 text-yellow-600 border-yellow-200' },
    // { name: 'Space Science', icon: <Telescope className="w-6 h-6" />, category: 'Innovation', color: 'bg-yellow-50 text-yellow-600 border-yellow-200' },
    // { name: 'Language Lab', icon: <Languages className="w-6 h-6" />, category: 'Skills', color: 'bg-green-50 text-green-600 border-green-200' },
    // { name: 'Financial Literacy', icon: <Wallet className="w-6 h-6" />, category: 'Skills', color: 'bg-green-50 text-green-600 border-green-200' },
    // { name: 'Public Speaking', icon: <Mic className="w-6 h-6" />, category: 'Skills', color: 'bg-sky-50 text-sky-600 border-sky-200' },
    // { name: 'Creative Writing', icon: <PenTool className="w-6 h-6" />, category: 'Skills', color: 'bg-sky-50 text-sky-600 border-sky-200' },
    // { name: 'Teacher Training', icon: <UserCheck className="w-6 h-6" />, category: 'Professional', color: 'bg-blue-50 text-blue-600 border-blue-200' },
  ];

  const audiences = [
    {
      title: 'Learners',
      description: 'K–12 students who deserve personalised, engaging education that ignites curiosity and builds confidence.',
      icon: <Users className="w-12 h-12" />,
      color: 'from-orange-400 to-yellow-400',
      features: ['Personalised learning paths', 'Skill-building workshops', 'Exam preparation', 'Mentorship programs']
    },
    {
      title: 'Educators',
      description: 'Teachers and school leaders seeking professional growth, innovative strategies and collaborative networks.',
      icon: <GraduationCap className="w-12 h-12" />,
      color: 'from-green-400 to-emerald-400',
      features: ['Professional development', 'Curriculum design support', 'Instructional coaching', 'Global best practices']
    },
    {
      title: 'Schools',
      description: 'Institutions ready to transform their culture, curriculum and outcomes through strategic partnership.',
      icon: <School className="w-12 h-12" />,
      color: 'from-sky-400 to-blue-500',
      features: ['School improvement plans', 'Staff training', 'Curriculum audit', 'Leadership consulting']
    }
  ];

  const countries = [
    { name: 'Nigeria', flagSrc: '/flags/nigeria.svg', color: 'from-green-500 to-emerald-600' },
    { name: 'United Kingdom', flagSrc: '/flags/united-kingdom.svg', color: 'from-blue-500 to-indigo-600' },
    { name: 'USA', flagSrc: '/flags/usa.svg', color: 'from-orange-500 to-red-500' },
    { name: 'Canada', flagSrc: '/flags/canada.svg', color: 'from-red-500 to-rose-600' },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-orange-100 selection:text-orange-800">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-white">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-orange-100/60 to-yellow-100/40 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-green-100/50 to-blue-100/30 rounded-full blur-3xl opacity-50 translate-y-1/4 -translate-x-1/4"></div>
          <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-gradient-to-br from-yellow-100/40 to-orange-100/20 rounded-full blur-2xl opacity-40 -translate-x-1/2 -translate-y-1/2"></div>
          
          {/* Decorative shapes */}
          <svg className="absolute top-32 left-12 w-16 h-16 text-orange-200/50 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10"/>
          </svg>
          <svg className="absolute top-48 right-24 w-10 h-10 text-yellow-300/40" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12,2 22,22 2,22"/>
          </svg>
          <svg className="absolute bottom-32 left-1/4 w-12 h-12 text-green-200/40" viewBox="0 0 24 24" fill="currentColor">
            <rect x="4" y="4" width="16" height="16" rx="2"/>
          </svg>
          <svg className="absolute bottom-48 right-1/3 w-8 h-8 text-blue-200/40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="hero-eyebrow inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-100 text-orange-700 text-sm font-medium">
                <Heart className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                Instilling a love for life-long learning
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                Educating Minds.
                <span className="block mt-2 bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 bg-clip-text text-transparent">
                  Empowering Futures.
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-xl">
                We partner with learners, educators and schools across Nigeria, UK, USA and Canada to deliver world-class education that builds knowledge, skills and character.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('programs')}
                  className="group w-full sm:w-auto justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-orange-200 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
                >
                  Explore Programs
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 font-semibold rounded-2xl border-2 border-slate-200 hover:border-orange-300 hover:text-orange-600 transition-all duration-300 hover:-translate-y-1"
                >
                  Get Started
                </button>
              </div>

              <div className="relative lg:hidden">
                <div className="relative aspect-square max-w-lg mx-auto">
                  <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50 rotate-3" aria-hidden="true"></div>
                  <div className="mobile-hero-card relative flex h-full items-center justify-center overflow-hidden rounded-[2.5rem] border shadow-2xl">
                    <img
                      src={heroIllustration}
                      alt="Three learners gathered around a globe with flowing rainbow ribbons"
                      className="h-full w-full -translate-y-3 object-contain p-3 sm:p-6"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {[colors.orange, colors.yellow, colors.green, colors.blue].map((color, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold" style={{backgroundColor: color}}>
                      {['EC', 'EC', 'EC', 'EC'][i]}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-slate-500">
                  <span className="font-semibold text-slate-800"><CountUp end={2500} suffix="+" /></span> learners empowered
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50 rounded-[3rem] rotate-3"></div>
                <div className="relative flex h-full items-center justify-center overflow-hidden rounded-[3rem] bg-white shadow-2xl shadow-slate-200/50">
                  <img src={heroIllustration} alt="Three learners gathered around a globe with flowing rainbow ribbons" className="h-full w-full -translate-y-8 object-contain p-4 sm:p-8 lg:-translate-y-12" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="hero-wave w-full" aria-hidden="true">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-orange-600 font-semibold text-sm uppercase tracking-wider">
                <div className="w-8 h-[2px] bg-orange-500"></div>
                About Us
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                We believe every learner deserves <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">exceptional education</span>
              </h2>
              
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  Educate Confluence Consulting Enterprise is a forward-thinking educational organisation committed to transforming how young people learn, grow and lead. Founded on the belief that quality education is the foundation of thriving communities, we bring together expertise from across four nations.
                </p>
                <p>
                  Our approach is neither conventional nor complacent. We combine high-quality learning with creative STEAM experiences, practical life skills, and character development to nurture well-rounded individuals who are confident, capable, and ready to thrive in an ever-changing world.
                </p>
              </div>

              <div className="grid grid-cols-1 min-[380px]:grid-cols-2 gap-4 sm:gap-6 pt-4">
                <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-none">
                  <div className="text-3xl font-bold text-orange-500 mb-1"><CountUp end={4} /></div>
                  <div className="text-sm text-slate-600">Countries Served</div>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-none">
                  <div className="text-3xl font-bold text-yellow-500 mb-1"><CountUp end={13} suffix="+" /></div>
                  <div className="text-sm text-slate-600">Programs Offered</div>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-none">
                  <div className="text-3xl font-bold text-green-500 mb-1"><CountUp end={6} /></div>
                  <div className="text-sm text-slate-600">Core Approach Areas</div>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-none">
                  <div className="text-3xl font-bold text-blue-500 mb-1">∞</div>
                  <div className="text-sm text-slate-600">Possibilities Created</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-[2.5rem] rotate-2"></div>
              <div className="relative bg-white rounded-[2rem] p-8 shadow-none border border-slate-100">
                <div className="grid grid-cols-1 min-[420px]:grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl border border-orange-200">
                      <BookOpen className="w-8 h-8 text-orange-500 mb-3" />
                      <div className="font-semibold text-slate-800">Academic Excellence</div>
                      <div className="text-sm text-slate-600 mt-1">Standards-aligned excellence</div>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border border-green-200">
                      <Heart className="w-8 h-8 text-green-500 mb-3" />
                      <div className="font-semibold text-slate-800">Inclusive Care</div>
                      <div className="text-sm text-slate-600 mt-1">Every learner matters</div>
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl border border-yellow-200">
                      <Rocket className="w-8 h-8 text-yellow-600 mb-3" />
                      <div className="font-semibold text-slate-800">Innovation</div>
                      <div className="text-sm text-slate-600 mt-1">STEAM & technology</div>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
                      <Globe className="w-8 h-8 text-blue-500 mb-3" />
                      <div className="font-semibold text-slate-800">Global Reach</div>
                      <div className="text-sm text-slate-600 mt-1">Nigeria to North America</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-orange-600 font-semibold text-sm uppercase tracking-wider mb-4">
              <div className="w-8 h-[2px] bg-orange-500"></div>
              Our Approach
              <div className="w-8 h-[2px] bg-orange-500"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Six pillars of <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">holistic education</span>
            </h2>
            <p className="text-lg text-slate-600">
              We do not teach subjects in isolation. Our integrated approach develops the whole mind, skills and character.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {approachAreas.map((area, index) => (
              <div 
                key={index}
                className={`group relative p-8 rounded-3xl border-2 ${area.borderColor} ${area.bgColor} hover:bg-white transition-all duration-500 shadow-none hover:shadow-none hover:-translate-y-1 cursor-pointer overflow-hidden`}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${area.color} opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700`}></div>
                
                <div className={`inline-flex p-4 rounded-2xl bg-white shadow-none mb-6 ${area.iconColor}`}>
                  {area.icon}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-700">
                  {area.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed">
                  {area.description}
                </p>
                
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-slate-700">
                  Learn more <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-orange-600 font-semibold text-sm uppercase tracking-wider mb-4">
              <div className="w-8 h-[2px] bg-orange-500"></div>
              Programs & Services
              <div className="w-8 h-[2px] bg-orange-500"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Comprehensive offerings for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500">every learner</span>
            </h2>
            <p className="text-lg text-slate-600">
              From exam preparation to creative exploration, our programs are designed to meet diverse needs and aspirations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {programs.map((program, index) => (
              <div 
                key={index}
                className="group p-6 bg-white rounded-2xl border border-slate-100 shadow-none hover:shadow-none transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className={`inline-flex p-3 rounded-xl ${program.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {program.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-1">{program.name}</h3>
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">{program.category}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-semibold rounded-2xl hover:border-orange-300 hover:text-orange-600 transition-all duration-300 hover:-translate-y-0.5">
              View All Programs <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Audience Section */}
      <section id="audience" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-orange-600 font-semibold text-sm uppercase tracking-wider mb-4">
              <div className="w-8 h-[2px] bg-orange-500"></div>
              Who We Serve
              <div className="w-8 h-[2px] bg-orange-500"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Partners in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">transformation</span>
            </h2>
            <p className="text-lg text-slate-600">
              We meet each partner where they are and journey with them toward excellence.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {audiences.map((audience, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-3xl border border-slate-100 shadow-none hover:shadow-none transition-all duration-500 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${audience.color}`}></div>
                <div className="p-8">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${audience.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {audience.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{audience.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {audience.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {audience.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${audience.color} flex items-center justify-center flex-shrink-0`}>
                          <Zap className="w-3 h-3 text-white" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="px-8 pb-8">
                  <button className="w-full py-3 rounded-xl border-2 border-slate-100 text-slate-600 font-semibold hover:border-slate-300 hover:text-slate-900 transition-all duration-300 group-hover:bg-slate-50">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission/Vision Section */}
      <section id="mission" className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-[128px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[128px]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-orange-300 text-sm font-medium">
                <Target className="w-4 h-4" />
                Our Purpose
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
                Educate. Empower. Equip. <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-green-400">Transform.</span>
              </h2>
              
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                    Mission
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    To provide exceptional, accessible education that develops knowledgeable, skilled and ethical individuals capable of transforming their communities and the world.
                  </p>
                </div>
                
                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
                      <Globe className="w-4 h-4 text-white" />
                    </div>
                    Vision
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    A world where every child, regardless of their geographical location or circumstance, has access to education that unlocks their full potential and empowers them to lead with wisdom and compassion.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-1 min-[420px]:grid-cols-2 gap-4">
                <div className="space-y-4 mt-8">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/20 backdrop-blur-sm">
                    <div className="text-4xl font-bold text-orange-400 mb-2">E</div>
                    <div className="text-white font-semibold">Educate</div>
                    <div className="text-slate-400 text-sm mt-1">Minds that think critically</div>
                  </div>
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/20 backdrop-blur-sm">
                    <div className="text-4xl font-bold text-green-400 mb-2">E</div>
                    <div className="text-white font-semibold">Equip</div>
                    <div className="text-slate-400 text-sm mt-1">Skills for real life</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 border border-yellow-500/20 backdrop-blur-sm">
                    <div className="text-4xl font-bold text-yellow-400 mb-2">E</div>
                    <div className="text-white font-semibold">Empower</div>
                    <div className="text-slate-400 text-sm mt-1">Confidence to act</div>
                  </div>
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/20 backdrop-blur-sm">
                    <div className="text-4xl font-bold text-blue-400 mb-2">T</div>
                    <div className="text-white font-semibold">Transform</div>
                    <div className="text-slate-400 text-sm mt-1">Communities forever</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-orange-600 font-semibold text-sm uppercase tracking-wider mb-4">
              <div className="w-8 h-[2px] bg-orange-500"></div>
              Global Reach
              <div className="w-8 h-[2px] bg-orange-500"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Four nations. <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">One mission.</span>
            </h2>
            <p className="text-lg text-slate-600">
              From Lagos to London, New York to Toronto — we bridge continents to deliver consistent, quality education.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {countries.map((country, index) => (
              <div 
                key={index}
                className="group relative p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-none hover:bg-white hover:shadow-none transition-all duration-500 hover:-translate-y-1 text-center overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${country.color}`}></div>
                <img
                  className="country-flag mb-4 object-cover group-hover:scale-110 transition-transform duration-300"
                  src={country.flagSrc}
                  alt={`${country.name} flag`}
                />
                <h3 className="text-xl font-bold text-slate-900">{country.name}</h3>
                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-500">
                  <MapPin className="w-4 h-4" />
                  <span>Active Programs</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="relative bg-white rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-16 shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-green-100 to-blue-100 rounded-full blur-3xl opacity-60 translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-100 text-orange-700 text-sm font-medium">
                <Zap className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                Start Your Journey
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
                Ready to transform <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500">education together?</span>
              </h2>
              
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Whether you are a parent seeking the best for your child, a teacher looking to grow, or a school ready for change — we are here to partner with you.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <button onClick={openConsultationForm} className="group w-full sm:w-auto justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-orange-200 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2">
                  Schedule a Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 font-semibold rounded-2xl border-2 border-slate-200 hover:border-green-300 hover:text-green-600 transition-all duration-300 hover:-translate-y-1">
                  Download Brochure
                </button>
              </div>

              <div className="pt-8 flex flex-wrap justify-center gap-8 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-orange-500" />
                  <span>+234 813 991 8218</span><span> +234 706 735 4647</span>
                  </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-yellow-500" />
                  <span>
educateconfluenceconsulting@gmail.com
</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-green-500" />
                  <span>www.educateconfluence.com.ng</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form — ready for FormSpark integration */}
      {isConsultationOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="consultation-title"
        >
          <button
            aria-label="Close consultation form"
            onClick={closeConsultationForm}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
          />
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-10">
            <button
              aria-label="Close consultation form"
              onClick={closeConsultationForm}
              className="absolute right-5 top-5 rounded-xl p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
            >
              <X className="h-5 w-5" />
            </button>

            {consultationSubmitted ? (
              <div className="py-10 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-400 to-blue-500 text-2xl font-bold text-white">✓</div>
                <h2 id="consultation-title" className="text-3xl font-bold text-slate-900">Thank you for your interest.</h2>
                <p className="mx-auto mt-4 max-w-md text-slate-600">Your consultation form is ready for the FormSpark connection. We’ll enable delivery as soon as the endpoint is added.</p>
                <button onClick={closeConsultationForm} className="mt-8 rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-700">Close</button>
              </div>
            ) : (
              <>
                <div className="mb-8 pr-10">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-orange-600">Start your journey</p>
                  <h2 id="consultation-title" className="text-3xl font-bold tracking-tight text-slate-900">Schedule a consultation</h2>
                  <p className="mt-3 text-slate-600">Tell us a little about your needs and the right member of our team will be in touch.</p>
                </div>

                <form onSubmit={handleConsultationSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="space-y-2 text-sm font-semibold text-slate-700">Full name<input required name="name" type="text" placeholder="Your full name" className="w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100" /></label>
                    <label className="space-y-2 text-sm font-semibold text-slate-700">Email address<input required name="email" type="email" placeholder="you@example.com" className="w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100" /></label>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="space-y-2 text-sm font-semibold text-slate-700">Phone number<input name="phone" type="tel" placeholder="Your phone number" className="w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100" /></label>
                    <label className="space-y-2 text-sm font-semibold text-slate-700">I’m interested in<select required name="interest" defaultValue="" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 font-normal outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"><option value="" disabled>Select an option</option><option>Programs for learners</option><option>Teacher development</option><option>School partnership</option><option>Other</option></select></label>
                  </div>
                  <label className="block space-y-2 text-sm font-semibold text-slate-700">How can we help?<textarea required name="message" rows="4" placeholder="Share your goals or questions..." className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100" /></label>
                  <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 px-6 py-4 font-semibold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5 hover:shadow-xl">Send consultation request <ArrowRight className="h-5 w-5" /></button>
                  <p className="text-center text-xs text-slate-500">Form delivery will be connected to FormSpark next.</p>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      <Footer onConsultation={openConsultationForm} onSection={scrollToSection} />
    </div>
  );
};

const App = () => {
  const path = window.location.pathname.replace(/\/$/, '') || '/';

  if (path === '/about') return <About />;
  if (path === '/programs') return <Programs />;
  return <EducateConfluence />;
};

export default App;
