import { useEffect } from 'react';
import {
  ArrowRight,
  Award,
  BookOpen,
  Heart,
  Lightbulb,
  MessageCircle,
  School,
  Target,
  Users,
} from 'lucide-react';

const DOMAIN = 'https://www.educateconfluence.com.ng';

const Seo = () => {
  useEffect(() => {
    const title = 'About Educate Confluence | Education Consulting Enterprise';
    const description = 'Learn how Educate Confluence supports learners, educators and schools through learner-centred education, STEAM innovation and practical skills.';
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

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Programs', href: '/programs' },
];

const approach = [
  { title: 'Academic excellence', text: 'Strong foundations, thoughtful instruction and measurable progress for every learner.', icon: <BookOpen /> },
  { title: 'STEAM and innovation', text: 'Curiosity becomes capability through hands-on science, technology, engineering, arts and mathematics.', icon: <Lightbulb /> },
  { title: 'Communication and confidence', text: 'Learners grow into articulate thinkers who can express ideas with clarity and courage.', icon: <MessageCircle /> },
  { title: 'Life and financial skills', text: 'Practical learning helps young people make sound decisions in school, work and life.', icon: <Target /> },
  { title: 'Character and leadership', text: 'We nurture empathy, responsibility and the confidence to contribute meaningfully.', icon: <Award /> },
  { title: 'Inclusive learning', text: 'Every learner deserves an accessible, respectful and personalised path to progress.', icon: <Heart /> },
];

const About = () => (
  <div className="min-h-screen bg-white text-slate-800 selection:bg-orange-100 selection:text-orange-800">
    <Seo />
    <header className="border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8" aria-label="Main navigation">
        <a href="/" className="flex items-center gap-3">
          <img src="/nav-logo.png" alt="Educate Confluence logo" className="h-12 w-16 object-contain" />
          <span><strong className="block text-base text-slate-900">Educate Confluence</strong><small className="block text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500">Consulting Enterprise</small></span>
        </a>
        <div className="hidden items-center gap-7 text-sm font-semibold text-slate-600 sm:flex">
          {navItems.map((item) => <a key={item.href} href={item.href} className="transition hover:text-orange-600">{item.label}</a>)}
          <a href="/#contact" className="rounded-full bg-orange-500 px-5 py-2.5 text-white transition hover:bg-orange-600">Get started</a>
        </div>
        <a href="/#contact" className="rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white sm:hidden">Contact</a>
      </nav>
    </header>

    <main>
      <section className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white sm:py-32">
        <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.24em] text-yellow-300">About Educate Confluence</p>
          <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">Education that meets people where possibility begins.</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">We help learners, educators and schools build the knowledge, confidence and practical capabilities needed to shape a stronger future.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_.9fr] lg:px-8 lg:py-28">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">Who we are</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">A learning partner for lasting progress.</h2>
          <div className="mt-7 space-y-5 text-lg leading-8 text-slate-600">
            <p>Educate Confluence Consulting Enterprise is an education-focused organisation serving K–12 learners, educators, schools, parents and communities across Nigeria, the United Kingdom, the United States and Canada.</p>
            <p>Our work connects academic achievement with the skills that make achievement meaningful: creativity, communication, financial understanding, leadership and the confidence to keep learning.</p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ['4', 'countries connected'],
            ['K–12', 'learner focus'],
            ['6', 'areas of development'],
            ['1', 'shared purpose'],
          ].map(([number, label], index) => <div key={label} className={`rounded-3xl p-7 ${['bg-orange-50', 'bg-yellow-50', 'bg-green-50', 'bg-sky-50'][index]}`}><p className="text-4xl font-bold text-slate-900">{number}</p><p className="mt-2 text-sm font-semibold text-slate-600">{label}</p></div>)}
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">Our approach</p><h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">The whole learner matters.</h2><p className="mt-5 text-lg leading-8 text-slate-600">Our approach brings strong academics together with the human skills that help learners thrive beyond the classroom.</p></div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {approach.map((item, index) => <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"><div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl ${['bg-orange-100 text-orange-600', 'bg-yellow-100 text-yellow-600', 'bg-green-100 text-green-600', 'bg-sky-100 text-sky-600', 'bg-blue-100 text-blue-600', 'bg-rose-100 text-rose-600'][index]}`}>{item.icon}</div><h3 className="text-xl font-bold text-slate-900">{item.title}</h3><p className="mt-3 leading-7 text-slate-600">{item.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
        <div className="rounded-3xl bg-orange-500 p-8 text-white sm:p-12"><Users className="h-10 w-10" /><h2 className="mt-8 text-3xl font-bold">For learners</h2><p className="mt-4 leading-7 text-orange-50">Engaging instruction, confidence-building experiences and meaningful support for each stage of the learning journey.</p></div>
        <div className="rounded-3xl bg-slate-900 p-8 text-white sm:p-12"><School className="h-10 w-10 text-yellow-300" /><h2 className="mt-8 text-3xl font-bold">For educators and schools</h2><p className="mt-4 leading-7 text-slate-300">Practical professional development and strategic partnership for teams ready to improve learning outcomes.</p></div>
      </section>

      <section className="bg-green-600 px-6 py-16 text-white sm:py-20"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center"><div><p className="text-sm font-bold uppercase tracking-[0.2em] text-green-100">Build what matters</p><h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">Let’s make education more capable, confident and connected.</h2></div><a href="/#contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-green-700 transition hover:bg-yellow-300">Start a conversation <ArrowRight className="h-5 w-5" /></a></div></section>
    </main>

    <footer className="bg-slate-950 px-6 py-10 text-sm text-slate-400"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 sm:flex-row"><p>© 2026 Educate Confluence Consulting Enterprise.</p><a href="mailto:educateconfluenceconsulting@gmail.com" className="transition hover:text-white">educateconfluenceconsulting@gmail.com</a></div></footer>
  </div>
);

export default About;
