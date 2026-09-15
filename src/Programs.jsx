import { useEffect } from 'react';
import {
  ArrowRight,
  Atom,
  BookOpen,
  BriefcaseBusiness,
  Calculator,
  Code2,
  FileText,
  GraduationCap,
  Languages,
  Lightbulb,
  Mic2,
  PenTool,
  Rocket,
  School,
  Sparkles,
  Users,
  Wallet,
} from 'lucide-react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

const DOMAIN = 'https://www.educateconfluence.com.ng';

const Seo = () => {
  useEffect(() => {
    const title = 'Programs & Services | Educate Confluence Consulting Enterprise';
    const description = 'Explore academic, STEAM, communication, life skills, online tutoring and teacher training services from Educate Confluence Consulting Enterprise.';
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

const servicePaths = [
  {
    id: 'academic',
    label: 'Academic foundations',
    color: 'orange',
    number: '01',
    title: 'Build the foundation.',
    intro: 'Focused academic support that turns difficult subjects into durable understanding and measurable progress.',
    services: [
      ['SAT', 'Exam strategy, subject mastery and confidence for high-stakes testing.', GraduationCap],
      ['English Language Arts', 'Reading, writing, comprehension and language development.', BookOpen],
      ['Mathematics', 'Conceptual understanding, problem solving and strong numerical foundations.', Calculator],
      ['Science', 'Curiosity-led science learning connected to the world around us.', Atom],
      ['Reading', 'Fluency, comprehension and the confidence to become a lifelong reader.', BookOpen],
    ],
  },
  {
    id: 'future',
    label: 'STEAM and innovation',
    color: 'yellow',
    number: '02',
    title: 'Make the future tangible.',
    intro: 'Hands-on experiences that help learners think, make, test and improve through curiosity and creative problem-solving.',
    services: [
      ['STEAM', 'Integrated projects across science, technology, engineering, arts and mathematics.', Lightbulb],
      ['Coding & Robotics', 'Creative computational thinking through code, design and physical systems.', Code2],
      ['Space Science', 'Exploration, astronomy and the questions that expand young minds.', Rocket],
      ['Language Lab', 'Practice that develops fluency, expression and confidence.', Languages],
      ['Financial Literacy', 'Money habits, decision-making and financial understanding for real life.', Wallet],
    ],
  },
  {
    id: 'voice',
    label: 'Communication and life skills',
    color: 'green',
    number: '03',
    title: 'Find your voice.',
    intro: 'Practical capabilities for confident participation in school, work and community.',
    services: [
      ['SEL', 'Social and emotional learning that builds self-awareness, empathy and resilience.', Sparkles],
      ['Public Speaking', 'Clear thinking, persuasive communication and confident presentation.', Mic2],
      ['Creative Writing', 'Imagination, voice and craft through purposeful writing practice.', PenTool],
    ],
  },
];

const colorClasses = {
  orange: { eyebrow: 'text-orange-600', icon: 'bg-orange-100 text-orange-600', line: 'bg-orange-500', soft: 'bg-orange-50' },
  yellow: { eyebrow: 'text-yellow-700', icon: 'bg-yellow-100 text-yellow-700', line: 'bg-yellow-500', soft: 'bg-yellow-50' },
  green: { eyebrow: 'text-green-600', icon: 'bg-green-100 text-green-600', line: 'bg-green-500', soft: 'bg-green-50' },
};

const audiencePaths = [
  ['Learners and families', 'Build strong foundations, confidence and practical skills for the next stage.', Users, 'bg-orange-500'],
  ['Educators', 'Strengthen teaching practice through relevant, flexible professional development.', GraduationCap, 'bg-yellow-400'],
  ['Schools and organisations', 'Design learning partnerships that respond to your context and goals.', School, 'bg-blue-500'],
];

const teacherTraining = [
  ['Pre-service training', 'Prepare emerging educators with practical tools, reflective practice and a strong learner-centred foundation.'],
  ['In-service training', 'Support teaching teams with professional development that can be applied immediately in the classroom.'],
  ['Online tutoring', 'Flexible one-to-one or small-group support shaped around the learner, subject and goal.'],
];

const Programs = () => (
  <div className="programs-page min-h-screen bg-white text-slate-800 selection:bg-orange-100 selection:text-orange-800">
    <Seo />
    <Navbar />

    <main>
      <section className="programs-hero relative flex min-h-screen items-center overflow-hidden bg-slate-50 px-6 pb-24 pt-32 text-slate-900 sm:py-32"><div className="programs-hero-panels pointer-events-none absolute right-0 top-0 hidden h-full w-[43%] lg:block"><div className="absolute right-0 top-0 h-[30%] w-[62%] bg-orange-500" /><div className="absolute bottom-0 right-0 h-[34%] w-[62%] bg-blue-500" /><div className="absolute right-[38%] top-[16%] h-[34%] w-[62%] bg-yellow-400" /><div className="absolute bottom-[14%] right-[38%] h-[34%] w-[62%] bg-green-500" /><div className="programs-hero-fade absolute inset-y-0 left-0 w-1/2" /></div><div className="pointer-events-none absolute bottom-0 left-0 h-1 w-full bg-linear-to-r from-orange-500 via-yellow-400 via-50% to-green-500" /><div className="relative mx-auto w-full max-w-7xl"><div className="max-w-3xl lg:max-w-2xl"><p className="mb-6 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.24em] text-orange-600"><span className="h-px w-10 bg-orange-500" /> Programs and services</p><h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">Find the learning that moves you <span className="bg-linear-to-r from-orange-500 via-yellow-500 to-green-500 bg-clip-text text-transparent">forward.</span></h1><p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">Whether you are building foundations, exploring what is next or strengthening a learning community, we start with the goal and build from there.</p><a href="#start-here" className="group mt-10 inline-flex items-center gap-2 font-bold text-slate-900 transition hover:text-orange-600">Find your starting point <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></a><div className="mt-12 grid grid-cols-4 gap-3 lg:hidden">{[['Foundations', 'bg-orange-500'], ['Innovation', 'bg-yellow-400'], ['Life skills', 'bg-green-500'], ['Partnerships', 'bg-blue-500']].map(([label, color]) => <div key={label}><div className={`h-2 rounded-full ${color}`} /><p className="mt-2 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500">{label}</p></div>)}</div></div></div></section>

      <section id="start-here" className="bg-slate-50 px-6 py-20 sm:py-28"><div className="mx-auto max-w-7xl"><div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">Start with your context</p><h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">The right support looks different for everyone.</h2><p className="mt-5 text-lg leading-8 text-slate-600">Choose the path closest to your goal. You can move between them, because meaningful education connects learners, educators and the organisations around them.</p></div><div className="mt-14 grid gap-0 border-y border-slate-200 lg:grid-cols-3 lg:divide-x lg:divide-slate-200">{audiencePaths.map(([title, text, Icon, color]) => <a key={title} href={`#${title === 'Learners and families' ? 'academic' : title === 'Educators' ? 'training' : 'partnerships'}`} className="group flex gap-5 border-b border-slate-200 py-8 transition hover:bg-white lg:border-b-0 lg:px-8 lg:first:pl-0 lg:last:pr-0"><span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${color} text-white`}><Icon className="h-6 w-6" /></span><span><span className="block text-xl font-bold text-slate-900">{title}</span><span className="mt-2 block leading-7 text-slate-600">{text}</span><span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-orange-600">Explore path <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></span></a>)}</div></div></section>

      <section className="bg-white px-6 py-20 sm:py-28"><div className="mx-auto max-w-7xl"><div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">Learner pathways</p><h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Start where the goal is.</h2><p className="mt-5 text-lg leading-8 text-slate-600">Our services are connected pathways, not isolated subjects. Each one can be shaped around age, stage, ambition and context.</p></div><div className="mt-14 space-y-20">{servicePaths.map((path) => { const colors = colorClasses[path.color]; return <section id={path.id} key={path.id} aria-labelledby={`${path.id}-title`} className="scroll-mt-28"><div className="grid gap-8 border-t border-slate-300 pt-7 lg:grid-cols-[.7fr_1.3fr] lg:gap-16"><div><div className="flex items-center gap-4"><span className={`text-5xl font-bold ${colors.eyebrow}`}>{path.number}</span><span className={`h-2 w-2 rounded-full ${colors.line}`} /></div><p className={`mt-7 text-sm font-bold uppercase tracking-[0.18em] ${colors.eyebrow}`}>{path.label}</p><h3 id={`${path.id}-title`} className="mt-3 text-3xl font-bold text-slate-900">{path.title}</h3><p className="mt-4 max-w-md leading-7 text-slate-600">{path.intro}</p></div><div className="grid gap-x-8 sm:grid-cols-2">{path.services.map(([title, text, Icon]) => <article key={title} className="group border-b border-slate-200 py-5 first:pt-0 sm:nth-[n+3]:pt-5"><div className="flex items-start gap-4"><div className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${colors.icon}`}><Icon className="h-5 w-5" /></div><div><h4 className="text-lg font-bold text-slate-900">{title}</h4><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></div></div></article>)}</div></div></section>; })}</div></div></section>

      <section id="training" className="bg-slate-900 px-6 py-20 text-white sm:py-28"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-start"><div><p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-yellow-300"><BriefcaseBusiness className="h-4 w-4" /> Educator development</p><h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">Support the people who make learning possible.</h2><p className="mt-6 max-w-md text-lg leading-8 text-slate-300">Professional learning should be relevant to the room, the learner and the moment. Our educator services are designed to turn insight into practice.</p></div><div className="divide-y divide-white/10 border-y border-white/10">{teacherTraining.map(([title, text], index) => <div key={title} className="grid gap-4 py-7 sm:grid-cols-[4rem_1fr] sm:gap-8"><span className="text-3xl font-bold text-orange-400">0{index + 1}</span><div><h3 className="text-2xl font-bold">{title}</h3><p className="mt-2 max-w-xl leading-7 text-slate-300">{text}</p></div></div>)}</div></div></section>

      <section id="partnerships" className="bg-white px-6 py-20 sm:py-28"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center"><div><p className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">Built around your context</p><h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">For families, educators and schools with somewhere to go next.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">We can support an individual learner, strengthen a teaching team or build a longer-term partnership around the needs of a school or organisation.</p></div><div className="border-l-4 border-orange-500 bg-orange-50 p-8"><FileText className="h-8 w-8 text-orange-600" /><p className="mt-5 text-xl font-bold text-slate-900">Not sure where to begin?</p><p className="mt-3 leading-7 text-slate-600">Tell us what you are trying to achieve and we will help you find the right starting point.</p></div></div></section>

    </main>
    <Footer />
  </div>
);

export default Programs;
