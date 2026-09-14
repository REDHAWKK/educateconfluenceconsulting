import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  Globe,
  Heart,
  Quote,
  Rocket,
  Target,
} from 'lucide-react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

const DOMAIN = 'https://www.educateconfluence.com.ng';

const Seo = () => {
  useEffect(() => {
    const title = 'About Us | Educate Confluence Consulting Enterprise';
    const description = 'Learn more about Educate Confluence Consulting Enterprise, our founder, mission and vision, and how we support learners, educators and schools.';
    document.title = title;

    const setMeta = (selector, attribute, value) => {
      let element = document.head.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, selector.match(/content="([^"]+)"/)?.[1] || '');
        document.head.appendChild(element);
      }
      element.setAttribute('content', value);
    };

    setMeta('meta[name="description"]', 'name', description);
    setMeta('meta[property="og:title"]', 'property', title);
    setMeta('meta[property="og:description"]', 'property', description);
    setMeta('meta[property="og:url"]', 'property', `${DOMAIN}/about`);
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${DOMAIN}/about`;
  }, []);

  return null;
};

const CountUp = ({ end, duration = 1400 }) => {
  const statisticRef = useRef(null);
  const [value, setValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const element = statisticRef.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHasStarted(true);
        observer.disconnect();
      }
    }, { threshold: 0.35 });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(end);
      return undefined;
    }

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

  return <span ref={statisticRef}>{value}</span>;
};

const About = () => (
  <div className="about-page min-h-screen bg-white text-slate-800 selection:bg-orange-100 selection:text-orange-800">
    <Seo />
    <Navbar />

    <main>
        <section className="about-hero relative flex min-h-screen items-center overflow-hidden bg-slate-50 px-6 pb-24 pt-32 text-slate-900 sm:py-32">
          <div className="about-hero-panels pointer-events-none absolute right-0 top-0 hidden h-full w-[43%] lg:block"><div className="absolute right-0 top-0 h-[30%] w-[62%] bg-orange-500" /><div className="absolute bottom-0 right-0 h-[34%] w-[62%] bg-blue-500" /><div className="absolute right-[38%] top-[16%] h-[34%] w-[62%] bg-yellow-400" /><div className="absolute bottom-[14%] right-[38%] h-[34%] w-[62%] bg-green-500" /><div className="about-hero-fade absolute inset-y-0 left-0 w-1/2" /></div>
          <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-full bg-linear-to-r from-orange-500 via-yellow-400 via-50% to-green-500" />
          <div className="relative mx-auto w-full max-w-7xl">
            <div className="max-w-3xl lg:max-w-2xl"><p className="mb-6 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.24em] text-orange-600"><span className="h-px w-10 bg-orange-500" /> About Educate Confluence</p><h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">Learning that gives <span className="bg-linear-to-r from-orange-500 via-yellow-500 to-green-500 bg-clip-text text-transparent">possibility </span> a direction.</h1><p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">We bring together the knowledge, confidence and practical capabilities people need to learn deeply, live fully and shape what comes next.</p><a href="#who-we-are" className="group mt-10 inline-flex items-center gap-2 font-bold text-slate-900 transition hover:text-orange-600">Step inside our story <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></a><div className="mt-12 grid grid-cols-4 gap-3 lg:hidden">{[['Educate', 'bg-orange-500'], ['Empower', 'bg-yellow-400'], ['Equip', 'bg-green-500'], ['Transform', 'bg-blue-500']].map(([label, color]) => <div key={label}><div className={`h-2 rounded-full ${color}`} /><p className="mt-2 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500">{label}</p></div>)}</div></div>
          </div>
        </section>

      <section id="who-we-are" className="bg-slate-50 px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-0 lg:px-2">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-orange-600"><div className="h-0.5 w-8 bg-orange-500" />Who we are</div>
              <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">We believe every learner deserves <span className="bg-linear-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">exceptional education</span></h2>
              <div className="space-y-4 text-lg leading-relaxed text-slate-600"><p>Educate Confluence Consulting Enterprise is a forward-thinking educational organisation committed to transforming how young people learn, grow and lead. Founded on the belief that quality education is the foundation of thriving communities, we bring together expertise from across four nations.</p><p>Our approach is neither conventional nor complacent. We combine high-quality learning with creative STEAM experiences, practical life skills, and character development to nurture well-rounded individuals who are confident, capable, and ready to thrive in an ever-changing world.</p></div>
              <div className="grid grid-cols-1 gap-4 pt-4 min-[380px]:grid-cols-2 sm:gap-6"><div className="rounded-2xl border border-slate-100 bg-white p-4"><div className="mb-1 text-3xl font-bold text-orange-500"><CountUp end={4} /></div><div className="text-sm text-slate-600">Countries Served</div></div><div className="rounded-2xl border border-slate-100 bg-white p-4"><div className="mb-1 text-3xl font-bold text-yellow-500"><CountUp end={13} suffix="+" /></div><div className="text-sm text-slate-600">Programs Offered</div></div><div className="rounded-2xl border border-slate-100 bg-white p-4"><div className="mb-1 text-3xl font-bold text-green-500"><CountUp end={6} /></div><div className="text-sm text-slate-600">Core Approach Areas</div></div><div className="rounded-2xl border border-slate-100 bg-white p-4"><div className="mb-1 text-3xl font-bold text-blue-500">∞</div><div className="text-sm text-slate-600">Possibilities Created</div></div></div>
            </div>
            <div className="relative"><div className="absolute -inset-4 rotate-2 rounded-[2.5rem] bg-linear-to-r from-orange-100 to-yellow-100" /><div className="relative rounded-4xl border border-slate-100 bg-white p-8"><div className="grid grid-cols-1 gap-4 min-[420px]:grid-cols-2"><div className="space-y-4"><div className="rounded-2xl border border-orange-200 bg-linear-to-br from-orange-50 to-orange-100 p-6"><BookOpen className="mb-3 h-8 w-8 text-orange-500" /><div className="font-semibold text-slate-800">Academic Excellence</div><div className="mt-1 text-sm text-slate-600">Standards-aligned excellence</div></div><div className="rounded-2xl border border-green-200 bg-linear-to-br from-green-50 to-green-100 p-6"><Heart className="mb-3 h-8 w-8 text-green-500" /><div className="font-semibold text-slate-800">Inclusive Care</div><div className="mt-1 text-sm text-slate-600">Every learner matters</div></div></div><div className="space-y-4 pt-8"><div className="rounded-2xl border border-yellow-200 bg-linear-to-br from-yellow-50 to-yellow-100 p-6"><Rocket className="mb-3 h-8 w-8 text-yellow-600" /><div className="font-semibold text-slate-800">Innovation</div><div className="mt-1 text-sm text-slate-600">STEAM &amp; technology</div></div><div className="rounded-2xl border border-blue-200 bg-linear-to-br from-blue-50 to-blue-100 p-6"><Globe className="mb-3 h-8 w-8 text-blue-500" /><div className="font-semibold text-slate-800">Global Reach</div><div className="mt-1 text-sm text-slate-600">Nigeria to North America</div></div></div></div></div></div>
          </div>
        </div>
      </section>

      <section id="mission" className="relative overflow-hidden bg-slate-900 px-6 py-20 text-white sm:py-28">
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-orange-500/15 blur-3xl" /><div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl"><div className="max-w-3xl"><p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-orange-300"><Target className="h-4 w-4" /> Our mission and vision</p><h2 className="mt-5 text-4xl font-bold leading-tight sm:text-6xl">Educate. Empower. Equip. <span className="bg-linear-to-r from-orange-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">Transform.</span></h2></div><div className="mt-14 grid gap-5 lg:grid-cols-2"><article className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm sm:p-10"><p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-300">Mission</p><h3 className="mt-5 text-2xl font-bold">Make exceptional education accessible and meaningful.</h3><p className="mt-5 leading-8 text-slate-300">To provide exceptional, accessible education that develops knowledgeable, skilled and ethical individuals capable of transforming their communities and the world.</p></article><article className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm sm:p-10"><p className="text-sm font-bold uppercase tracking-[0.2em] text-green-300">Vision</p><h3 className="mt-5 text-2xl font-bold">Unlock the potential in every learner.</h3><p className="mt-5 leading-8 text-slate-300">A world where every child, regardless of geographical location or circumstance, has access to education that unlocks their full potential and empowers them to lead with wisdom and compassion.</p></article></div></div>
      </section>

      <section id="founder" className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:px-8 lg:py-28"><div className="relative mx-auto w-full max-w-sm"><div className="absolute -inset-4 rounded-[2.5rem] bg-linear-to-br from-orange-100 via-yellow-50 to-green-100" /><div className="relative overflow-hidden rounded-4xl bg-slate-100"><img src="/founder.png" alt="Grace Jokodola, founder of Educate Confluence Consulting Enterprise" className="aspect-4/5 w-full object-cover" /></div></div><div><p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-green-600"><span className="h-px w-10 bg-green-500" /> The founder's perspective</p><p className="mt-5 text-3xl font-bold tracking-tight text-slate-900">Grace Jokodola</p><h2 className="mt-3 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">The future is shaped by what we make possible for people today.</h2><div className="mt-8 flex gap-4"><Quote className="mt-1 h-8 w-8 shrink-0 text-orange-500" /><p className="max-w-xl text-lg leading-8 text-slate-600">Educate Confluence was built on a simple conviction: when people receive the right knowledge, support and encouragement, they can create meaningful change in their own lives and in the communities around them.</p></div><a href="/#contact" className="mt-9 inline-flex items-center gap-2 font-bold text-orange-600 transition hover:text-orange-700">Start a conversation <ArrowRight className="h-4 w-4" /></a></div></section>

    </main>

    <Footer showFullFooter />
  </div>
);

export default About;
