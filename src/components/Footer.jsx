import { ArrowRight, Mail, MapPin, Phone, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 py-14 lg:grid-cols-[1.25fr_.75fr] lg:items-end lg:py-20">
          <div>
            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-yellow-300"><span className="h-px w-10 bg-yellow-300" /> Education without borders</p>
            <h2 className="max-w-3xl text-4xl font-bold leading-[1.04] tracking-tight sm:text-5xl lg:text-6xl">Where possibility meets <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-green-400 bg-clip-text text-transparent">purpose.</span></h2>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
            <p className="text-lg font-semibold">Ready to create meaningful change?</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">Let’s build an education experience that equips people to flourish.</p>
            <a href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-yellow-300">Start a conversation <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>

        <div className="grid gap-10 py-12 md:grid-cols-[1.2fr_.75fr_1fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-3"><img src="/nav-logo.png" alt="Educate Confluence logo" className="h-16 w-24 object-contain" /><div><div className="text-lg font-bold">Educate Confluence</div><div className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">Consulting Enterprise</div></div></div>
            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">Educating minds, empowering futures and transforming communities with learner-centred education.</p>
            <div className="mt-6 flex flex-wrap gap-2">{['Nigeria', 'United Kingdom', 'USA', 'Canada'].map((country) => <span key={country} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300">{country}</span>)}</div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Explore</h3>
            <div className="mt-5 flex flex-col items-start gap-3 text-sm text-slate-400">
              {[['Home', '/'], ['About us', '/about'], ['Programs', '/programs'], ['Contact', '/contact']].map(([label, href]) => <a key={href} href={href} className="group flex items-center gap-2 text-left transition hover:text-white"><ChevronRight className="h-3.5 w-3.5 text-orange-400 transition group-hover:translate-x-1" />{label}</a>)}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Connect with us</h3>
            <div className="mt-5 space-y-4 text-sm">
              <a href="mailto:info@educateconfluence.com.ng" className="group flex items-start gap-3 text-slate-400 transition hover:text-white"><span className="rounded-lg bg-yellow-400/10 p-2 text-yellow-300"><Mail className="h-4 w-4" /></span><span><span className="block text-xs text-slate-500">Email us</span>info@educateconfluence.com.ng</span></a>
              <div className="flex items-start gap-3 text-slate-400"><span className="rounded-lg bg-green-400/10 p-2 text-green-300"><Phone className="h-4 w-4" /></span><span><span className="block text-xs text-slate-500">Call us</span><a href="tel:+2348139918218" className="block transition hover:text-white">+234 813 991 8218</a><a href="tel:+2347067354647" className="mt-1 block transition hover:text-white">+234 706 735 4647</a></span></div>
              <div className="flex items-start gap-3 text-slate-400"><span className="rounded-lg bg-orange-400/10 p-2 text-orange-300"><MapPin className="h-4 w-4" /></span><span><span className="block text-xs text-slate-500">Our reach</span>Nigeria · UK · USA · Canada</span></div>
            </div>
          </div>
        </div>

        <div data-static-footer className="flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between"><div><p>© 2026 Educate Confluence Consulting Enterprise.</p><p className="mt-1">Website produced by <a href="https://oriarebun-princeton-portfolio.vercel.app" target="_blank" rel="noreferrer" className="font-semibold text-slate-300 transition hover:text-white">Oriarebun Princeton</a></p></div><div className="flex gap-5"><a href="#" className="transition hover:text-white">Privacy Policy</a><a href="#" className="transition hover:text-white">Terms of Service</a></div></div>
      </div>
    </footer>
  );
};

export default Footer;
