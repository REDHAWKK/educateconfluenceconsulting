import { useEffect } from 'react';
import { ArrowRight, MessageCircle, Phone } from 'lucide-react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ConsultationForm from './components/ConsultationForm.jsx';

const DOMAIN = 'https://www.educateconfluence.com.ng';

const Contact = () => {

  useEffect(() => {
    document.title = 'Contact Us | Educate Confluence Consulting Enterprise';
    const description = 'Schedule a consultation with Educate Confluence Consulting Enterprise, or contact our education consulting team on WhatsApp or phone.';
    let meta = document.head.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = description;
    const openGraph = [
      ['og:title', 'Contact Us | Educate Confluence Consulting Enterprise'],
      ['og:description', description],
      ['og:url', `${DOMAIN}/contact`],
    ];
    openGraph.forEach(([property, content]) => {
      let tag = document.head.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${DOMAIN}/contact`;
  }, []);


  return (
    <div className="contact-page min-h-screen bg-white text-slate-800 selection:bg-orange-100 selection:text-orange-800">
      <Navbar />
      <main>
        <section className="contact-hero relative flex min-h-screen items-center overflow-hidden bg-slate-50 px-6 pb-24 pt-32 text-slate-900 sm:py-32">
          <div className="contact-hero-panels pointer-events-none absolute right-0 top-0 hidden h-full w-[43%] lg:block"><div className="absolute right-0 top-0 h-[30%] w-[62%] bg-orange-500" /><div className="absolute bottom-0 right-0 h-[34%] w-[62%] bg-blue-500" /><div className="absolute right-[38%] top-[16%] h-[34%] w-[62%] bg-yellow-400" /><div className="absolute bottom-[14%] right-[38%] h-[34%] w-[62%] bg-green-500" /><div className="contact-hero-fade absolute inset-y-0 left-0 w-1/2" /></div>
          <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-full bg-linear-to-r from-orange-500 via-yellow-400 via-50% to-green-500" />
          <div className="relative mx-auto w-full max-w-7xl">
            <div className="max-w-3xl lg:max-w-2xl"><p className="mb-6 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.24em] text-orange-600"><span className="h-px w-10 bg-orange-500" /> Contact us</p><h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">Get In Contact <span className="bg-linear-to-r from-orange-500 via-yellow-500 to-green-500 bg-clip-text text-transparent">With Us</span></h1><p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">Tell us what you are working towards and we will help you find the right next step.</p><a href="#schedule" className="group mt-10 inline-flex items-center gap-2 font-bold text-slate-900 transition hover:text-orange-600">Schedule a consultation <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></a><div className="mt-12 grid grid-cols-4 gap-3 lg:hidden">{[['Schedule', 'bg-orange-500'], ['WhatsApp', 'bg-yellow-400'], ['Call', 'bg-green-500'], ['Connect', 'bg-blue-500']].map(([label, color]) => <div key={label}><div className={`h-2 rounded-full ${color}`} /><p className="mt-2 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500">{label}</p></div>)}</div></div>
          </div>
        </section>

        <section id="schedule" className="mx-auto grid max-w-7xl gap-14 px-6 py-16 lg:grid-cols-[1.1fr_.9fr] lg:px-8 lg:py-24">
          <div>
            <ConsultationForm className="space-y-5" />
            <p className="mt-5 text-center text-xs leading-5 text-slate-500">Prefer a quicker response? <a href="https://wa.me/2348139918218" target="_blank" rel="noreferrer" className="font-semibold text-green-700 hover:text-green-800">Contact us on WhatsApp instead.</a></p>
          </div>

          <aside className="self-start border-l-4 border-green-500 bg-green-50 p-7 sm:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">Prefer a direct conversation?</p>
            <h2 className="mt-4 text-2xl font-bold text-slate-900">Message us on WhatsApp or call our team.</h2>
            <a href="https://wa.me/2348139918218" target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 font-bold text-green-700 hover:text-green-800"><MessageCircle className="h-5 w-5" /> Contact us on WhatsApp</a>
            <div className="mt-8 space-y-3 border-t border-green-200 pt-6 text-slate-700"><p className="flex items-center gap-3"><Phone className="h-4 w-4 text-green-600" /><a href="tel:+2348139918218" className="hover:text-green-700">+234 813 991 8218</a></p><p className="flex items-center gap-3"><Phone className="h-4 w-4 text-green-600" /><a href="tel:+2347067354647" className="hover:text-green-700">+234 706 735 4647</a></p></div>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
