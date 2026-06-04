import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock, Award, Star, Phone, Sparkles, Zap, CheckCircle2, Snowflake } from "lucide-react";
import { Section, SectionHeader, GradientButton, Reveal, Counter, CTABanner, Eyebrow } from "../components/site/primitives";
import { services, brands, processSteps, testimonialsList, faqs } from "../lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CoolFix Pro — Fast & Reliable AC Repair At Your Doorstep" },
      { name: "description", content: "Same-day AC repair, installation, and home appliance service by certified technicians. 10,000+ happy customers, 24/7 emergency support." },
      { property: "og:title", content: "CoolFix Pro — Fast & Reliable AC Repair At Your Doorstep" },
      { property: "og:description", content: "Same-day AC repair, installation, and home appliance service by certified technicians." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <WhyUs />
      <Stats />
      <Testimonials />
      <BrandsRow />
      <PricingPreview />
      <Process />
      <ServiceAreas />
      <FaqPreview />
      <CTABanner title="Book Your AC Service Today" sub="Same-day repair available. Certified technicians dispatched in your area now." />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 sm:pt-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <Reveal><Eyebrow>24/7 Emergency Support</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">
              Fast & Reliable<br />
              <span className="gradient-text">AC Repair Services</span><br />
              At Your Doorstep
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 max-w-xl text-lg text-muted-foreground">
              Premium AC and home appliance service trusted by 10,000+ households. Certified technicians, transparent pricing, and same-day repairs — guaranteed.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-wrap gap-3">
              <GradientButton to="/booking">Book Service <ArrowRight className="h-4 w-4" /></GradientButton>
              <GradientButton to="/contact" variant="ghost">Get Free Quote</GradientButton>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 grid grid-cols-3 gap-4 sm:max-w-md">
              {[
                { icon: ShieldCheck, label: "Certified" },
                { icon: Clock, label: "Same Day" },
                { icon: Award, label: "Warranty" },
              ].map(({ icon: I, label }) => (
                <div key={label} className="glass flex flex-col items-center gap-1.5 rounded-2xl p-3.5">
                  <I className="h-5 w-5 text-cyan" />
                  <div className="text-xs font-medium">{label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="relative lg:col-span-5">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square max-w-md">
      {/* Central glow */}
      <div className="gradient-primary absolute inset-12 rounded-full opacity-30 blur-3xl" />
      {/* Main card */}
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="glass-strong glow relative h-full w-full rounded-[2.5rem] p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-400" />
            <div className="text-xs text-muted-foreground">Live · 8 technicians nearby</div>
          </div>
          <Sparkles className="h-4 w-4 text-cyan" />
        </div>
        <div className="mt-10 flex items-center justify-center">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 18, ease: "linear", repeat: Infinity }} className="relative flex h-44 w-44 items-center justify-center rounded-full border border-white/15">
            <div className="absolute inset-4 rounded-full border border-white/10" />
            <div className="gradient-primary glow flex h-24 w-24 items-center justify-center rounded-full">
              <Snowflake className="h-12 w-12 text-deep" strokeWidth={2.2} />
            </div>
          </motion.div>
        </div>
        <div className="mt-8 space-y-2.5">
          {[
            { label: "AC Repair", val: "2 hrs" },
            { label: "Installation", val: "Today" },
            { label: "Gas Refill", val: "Today" },
          ].map((r) => (
            <div key={r.label} className="glass flex items-center justify-between rounded-xl px-4 py-2.5">
              <div className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-cyan" /> {r.label}</div>
              <div className="text-xs font-semibold text-cyan">{r.val}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Floating badges */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-strong absolute -left-6 top-10 hidden rounded-2xl p-3 sm:block">
        <div className="flex items-center gap-2">
          <div className="gradient-primary flex h-9 w-9 items-center justify-center rounded-full"><Phone className="h-4 w-4 text-deep" /></div>
          <div>
            <div className="text-[10px] text-muted-foreground uppercase">Emergency</div>
            <div className="text-sm font-semibold">+1 800 555-1234</div>
          </div>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="glass-strong absolute -right-4 bottom-10 hidden rounded-2xl p-3 sm:block">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-cyan text-cyan" />)}
        </div>
        <div className="mt-1 text-xs font-semibold">4.9 · 8,200 reviews</div>
      </motion.div>
    </div>
  );
}

function TrustBar() {
  return (
    <Section className="!py-12">
      <div className="glass-strong flex flex-wrap items-center justify-around gap-6 rounded-3xl px-8 py-6 text-sm text-muted-foreground">
        {["10,000+ Customers", "Background-Verified Pros", "ISO Certified", "30-Day Warranty", "All Brands Serviced"].map((t) => (
          <div key={t} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan" /> {t}</div>
        ))}
      </div>
    </Section>
  );
}

function ServicesGrid() {
  return (
    <Section>
      <SectionHeader eyebrow="What We Do" title={<>Full-stack <span className="gradient-text">home cooling</span> care</>} sub="From quick repairs to complete installations — every service handled by certified specialists." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.slice(0, 6).map((s, i) => {
          const Icon = s.icon;
          return (
            <Reveal key={s.slug} delay={i * 0.05}>
              <Link to="/services/$slug" params={{ slug: s.slug }} className="group glass relative block h-full overflow-hidden rounded-3xl p-7 transition-all hover:-translate-y-1 hover:border-cyan/40">
                <div className="gradient-primary absolute -top-16 -right-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity group-hover:opacity-30" />
                <div className="gradient-primary glow flex h-12 w-12 items-center justify-center rounded-2xl">
                  <Icon className="h-6 w-6 text-deep" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                <div className="mt-6 flex items-center justify-between text-sm">
                  <span className="text-cyan font-semibold">{s.price}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
      <div className="mt-10 text-center">
        <GradientButton to="/services" variant="ghost">Explore all 11 services</GradientButton>
      </div>
    </Section>
  );
}

function WhyUs() {
  const items = [
    { icon: Zap, t: "Lightning-fast response", d: "Average 90-minute on-site arrival for emergencies." },
    { icon: ShieldCheck, t: "Trust by design", d: "Background-verified, uniformed, ID-carrying pros." },
    { icon: Award, t: "Real warranty", d: "30 to 90-day workmanship guarantee on every visit." },
    { icon: Sparkles, t: "Transparent pricing", d: "Flat-rate quotes approved before any work begins." },
  ];
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Eyebrow>Why CoolFix Pro</Eyebrow>
          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">A premium service experience<br /><span className="gradient-text">your AC deserves</span></h2>
          <p className="mt-5 text-muted-foreground">We replaced the old, broken home-service experience with something modern: app-style booking, real-time tracking, and technicians who treat your home like their own.</p>
          <GradientButton to="/about" className="mt-8">Our Story</GradientButton>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 0.05}>
              <div className="glass h-full rounded-3xl p-6">
                <div className="gradient-primary flex h-11 w-11 items-center justify-center rounded-xl"><it.icon className="h-5 w-5 text-deep" /></div>
                <h3 className="mt-5 text-lg font-semibold">{it.t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Stats() {
  const stats = [
    { v: 10000, suffix: "+", label: "Happy Customers" },
    { v: 15, suffix: "+", label: "Years Experience" },
    { v: 24, suffix: "/7", label: "Support Available" },
    { v: 350, suffix: "+", label: "Certified Pros" },
  ];
  return (
    <Section>
      <div className="glass-strong rounded-3xl px-8 py-14">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="gradient-text font-display text-5xl font-bold sm:text-6xl"><Counter to={s.v} suffix={s.suffix} /></div>
              <div className="mt-2 text-sm text-muted-foreground uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Testimonials() {
  return (
    <Section>
      <SectionHeader eyebrow="Loved by Homeowners" title={<>What our <span className="gradient-text">customers</span> say</>} />
      <div className="grid gap-5 md:grid-cols-3">
        {testimonialsList.slice(0, 3).map((t, i) => (
          <Reveal key={t.name} delay={i * 0.07}>
            <div className="glass h-full rounded-3xl p-7">
              <div className="flex gap-1">{Array.from({ length: t.rating }).map((_, k) => <Star key={k} className="h-4 w-4 fill-cyan text-cyan" />)}</div>
              <p className="mt-5 text-sm leading-relaxed text-foreground/90">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="gradient-primary flex h-10 w-10 items-center justify-center rounded-full font-semibold text-deep">{t.name[0]}</div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function BrandsRow() {
  return (
    <Section className="!py-16">
      <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">Authorized service for all major brands</p>
      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-5">
        {brands.map((b) => (
          <div key={b} className="glass flex items-center justify-center rounded-2xl px-4 py-5 font-display text-lg font-semibold text-foreground/70 transition-colors hover:text-foreground">{b}</div>
        ))}
      </div>
    </Section>
  );
}

function PricingPreview() {
  const tiers = [
    { name: "Basic", price: "$39", desc: "Quick check-up & basic service" },
    { name: "Standard", price: "$79", desc: "Deep service for one AC unit", popular: true },
    { name: "Premium", price: "$149", desc: "Multi-unit + annual coverage" },
  ];
  return (
    <Section>
      <SectionHeader eyebrow="Transparent Pricing" title={<>Simple plans. <span className="gradient-text">No surprises.</span></>} />
      <div className="grid gap-5 md:grid-cols-3">
        {tiers.map((t) => (
          <div key={t.name} className={`glass relative rounded-3xl p-7 ${t.popular ? "ring-2 ring-cyan" : ""}`}>
            {t.popular && <div className="gradient-primary absolute -top-3 left-7 rounded-full px-3 py-1 text-xs font-bold text-deep">Most Popular</div>}
            <div className="text-sm uppercase tracking-wider text-muted-foreground">{t.name}</div>
            <div className="mt-3 text-5xl font-bold">{t.price}</div>
            <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
            <Link to="/pricing" className="mt-6 block text-sm font-semibold text-cyan hover:underline">View full features →</Link>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Process() {
  return (
    <Section>
      <SectionHeader eyebrow="How It Works" title={<>A <span className="gradient-text">6-step</span> service experience</>} />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {processSteps.map((p, i) => (
          <Reveal key={p.n} delay={i * 0.05}>
            <div className="glass h-full rounded-3xl p-7">
              <div className="gradient-text font-display text-5xl font-bold">{p.n}</div>
              <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{p.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ServiceAreas() {
  const areas = ["Downtown", "North District", "Westside", "Greenfield", "Bay Heights", "Tech Park", "Old Town", "Harbor View"];
  return (
    <Section>
      <SectionHeader eyebrow="Coverage" title={<>We serve <span className="gradient-text">your neighborhood</span></>} />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {areas.map((a) => (
          <div key={a} className="glass rounded-2xl px-5 py-4 text-center text-sm font-medium">{a}</div>
        ))}
      </div>
    </Section>
  );
}

function FaqPreview() {
  return (
    <Section>
      <SectionHeader eyebrow="FAQ" title={<>Questions, <span className="gradient-text">answered</span></>} />
      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.slice(0, 5).map((f) => (
          <details key={f.q} className="glass group rounded-2xl px-6 py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">{f.q}<span className="text-cyan transition-transform group-open:rotate-45">+</span></summary>
            <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
          </details>
        ))}
        <div className="text-center">
          <Link to="/faq" className="text-sm font-semibold text-cyan hover:underline">View all 25 FAQs →</Link>
        </div>
      </div>
    </Section>
  );
}
