import { useEffect } from 'react';
import {
  ArrowRight,
  Atom,
  BookOpen,
  Calculator,
  Code2,
  GraduationCap,
  Languages,
  Lightbulb,
  Mic2,
  PenTool,
  Rocket,
  Wallet,
} from 'lucide-react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

const DOMAIN = 'https://www.educateconfluence.com.ng';

const Seo = () => {
  useEffect(() => {
    const title = 'Programs | Educate Confluence | Academic, STEAM and Life Skills Education';
    const description = 'Explore Educate Confluence programs in SAT preparation, English, mathematics, science, coding, robotics, financial literacy, public speaking and teacher development.';
    document.title = title;
    const setMeta = (selector, attribute, value) => {
      let element = document.head.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, selector.includes('property') ? selector.split('"')[1] : selector.split('"')[1]);
        document.head.appendChild(element);
      }
      element.setAttribute('content', value);
    };
    setMeta('meta[name="description"]', 'name', description);
    setMeta('meta[property="og:title"]', 'property', title);
    setMeta('meta[property="og:description"]', 'property', description);
    setMeta('meta[property="og:url"]', 'property', `${DOMAIN}/programs`);
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = `${DOMAIN}/programs`;
  }, []);
  return null;
};

const programGroups = [
  {
    label: 'Academic foundations',
    color: 'orange',
    intro: 'Focused support that turns difficult subjects into durable understanding.',
    programs: [
      ['SAT preparation', 'Exam strategy, subject mastery and confidence for high-stakes testing.', GraduationCap],
      ['English Language Arts', 'Reading, writing, comprehension and language development.', BookOpen],
      ['Mathematics', 'Conceptual understanding, problem solving and strong numerical foundations.', Calculator],
      ['Science', 'Curiosity-led science learning that connects ideas to the world around us.', Atom],
    ],
  },
  {
    label: 'STEAM and innovation',
    color: 'yellow',
    intro: 'Hands-on experiences that help learners think, make, test and improve.',
    programs: [
      ['STEAM learning', 'Integrated projects across science, technology, engineering, arts and mathematics.', Lightbulb],
      ['Coding and robotics', 'Creative computational thinking through code, design and physical systems.', Code2],
      ['Space science', 'Exploration, astronomy and the big questions that expand young minds.', Rocket],
    ],
  },
  {
    label: 'Communication and life skills',
    color: 'green',
    intro: 'Practical capabilities for confident participation in school, work and community.',
    programs: [
      ['Language lab', 'Language practice that develops fluency, expression and confidence.', Languages],
      ['Financial literacy', 'Money habits, decision making and financial understanding for real life.', Wallet],
      ['Public speaking', 'Clear thinking, persuasive communication and confident presentation.', Mic2],
      ['Creative writing', 'Imagination, voice and craft through purposeful writing practice.', PenTool],
    ],
  },
];

const colorClasses = {
  orange: { eyebrow: 'text-orange-600', icon: 'bg-orange-100 text-orange-600', line: 'bg-orange-500' },
  yellow: { eyebrow: 'text-yellow-700', icon: 'bg-yellow-100 text-yellow-700', line: 'bg-yellow-500' },
  green: { eyebrow: 'text-green-600', icon: 'bg-green-100 text-green-600', line: 'bg-green-500' },
};

const Programs = () => (
  <div className="min-h-screen bg-white text-slate-800 selection:bg-orange-100 selection:text-orange-800">
    <Seo />
    <Navbar />

    <main>
      <section className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white sm:py-32"><div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-yellow-500/20 blur-3xl" /><div className="relative mx-auto max-w-7xl"><p className="mb-6 text-sm font-bold uppercase tracking-[0.24em] text-orange-300">Programs and services</p><h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">Learning designed to move people forward.</h1><p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">From academic foundations to innovation and life skills, our programs are built around the learner, the goal and the next meaningful step.</p></div></section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28"><div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">Find the right starting point</p><h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Programs with purpose, not busywork.</h2><p className="mt-5 text-lg leading-8 text-slate-600">Every offering is designed to build usable knowledge, stronger habits and the confidence to apply learning in the real world.</p></div><div className="mt-14 space-y-16">{programGroups.map((group) => { const colors = colorClasses[group.color]; return <section key={group.label} aria-labelledby={group.label.replaceAll(' ', '-')}><div className="flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between"><div><p className={`text-sm font-bold uppercase tracking-[0.18em] ${colors.eyebrow}`}>{group.label}</p><h2 id={group.label.replaceAll(' ', '-')} className="mt-2 text-2xl font-bold text-slate-900">{group.label}</h2></div><p className="max-w-md text-sm leading-6 text-slate-600">{group.intro}</p></div><div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{group.programs.map(([title, text, Icon]) => <article key={title} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${colors.icon}`}><Icon className="h-6 w-6" /></div><h3 className="mt-6 text-xl font-bold text-slate-900">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{text}</p><span className={`mt-6 block h-1 w-10 rounded-full ${colors.line} transition-all group-hover:w-20`} /></article>)}</div></section>; })}</div></section>

      <section className="bg-slate-50 px-6 py-20 sm:py-24"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><div><p className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">Built around your context</p><h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">Support for learners, educators and schools.</h2></div><div className="grid gap-4 sm:grid-cols-3">{['Learner programs', 'Teacher development', 'School partnerships'].map((item, index) => <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5"><p className="text-2xl font-bold text-slate-900">0{index + 1}</p><p className="mt-3 font-semibold text-slate-700">{item}</p></div>)}</div></div></section>

      <section className="bg-orange-500 px-6 py-16 text-white sm:py-20"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center"><div><p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-100">Take the next step</p><h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">Let’s find the program that fits your goals.</h2></div><a href="/#contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-orange-700 transition hover:bg-yellow-300">Talk to our team <ArrowRight className="h-5 w-5" /></a></div></section>
    </main>
    <Footer />
  </div>
);

export default Programs;
