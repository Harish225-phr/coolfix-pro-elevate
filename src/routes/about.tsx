import { createFileRoute } from "@tanstack/react-router";
import { Reveal, Section, SectionHeader, CTABanner, Counter, PageHero } from "../components/site/primitives";
import { Award, Target, Sparkles, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About CoolFix Pro — 15+ Years of Premium Service" },
      { name: "description", content: "Meet the certified team behind CoolFix Pro. Our mission, story, and the standards that make us the #1 home cooling brand." },
      { property: "og:title", content: "About CoolFix Pro" },
      { property: "og:description", content: "15+ years of premium AC and appliance service. Meet the team." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const timeline = [
  { year: "2010", title: "Founded", text: "Started as a 2-technician AC repair shop serving Downtown." },
  { year: "2014", title: "First 1,000 customers", text: "Crossed our first thousand happy households with a 4.9★ rating." },
  { year: "2017", title: "Commercial division", text: "Launched dedicated commercial HVAC team for offices and restaurants." },
  { year: "2020", title: "App-style booking", text: "Rolled out online booking, SMS tracking, and digital invoices." },
  { year: "2023", title: "10,000+ customers", text: "Hit a major milestone and expanded to 8 service zones." },
  { year: "2026", title: "Today", text: "350+ certified technicians, multi-brand service, 24/7 emergency." },
];

const team = [
  { name: "Arjun Mehta", role: "Founder & Chief Tech Officer" },
  { name: "Lena Park", role: "Head of Operations" },
  { name: "Carlos Rivera", role: "Lead HVAC Specialist" },
  { name: "Hana Tanaka", role: "Customer Experience Director" },
];

function About() {
  return (
    <>
      <PageHero eyebrow="Our Story" title={<>Premium service, <span className="gradient-text">built by people who care</span></>} sub="What started as a small repair shop is now a citywide team of certified pros redefining how home services should feel." />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="glass h-full rounded-3xl p-8">
              <Target className="h-7 w-7 text-cyan" />
              <h3 className="mt-4 text-2xl font-semibold">Our Mission</h3>
              <p className="mt-3 text-muted-foreground">Deliver the most trustworthy, transparent, and fast home cooling service experience in every neighborhood we serve.</p>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="glass h-full rounded-3xl p-8">
              <Sparkles className="h-7 w-7 text-cyan" />
              <h3 className="mt-4 text-2xl font-semibold">Our Vision</h3>
              <p className="mt-3 text-muted-foreground">Make professional home maintenance as simple, predictable, and premium as ordering a ride or your favorite meal.</p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Our Journey" title={<>A <span className="gradient-text">15-year</span> climb</>} />
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/60 via-primary/40 to-transparent" />
          <div className="space-y-8">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.04}>
                <div className="relative pl-14">
                  <div className="gradient-primary glow absolute left-0 top-2 flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold text-deep">{i + 1}</div>
                  <div className="glass rounded-2xl p-6">
                    <div className="text-xs font-bold tracking-wider text-cyan">{t.year}</div>
                    <div className="mt-1 text-xl font-semibold">{t.title}</div>
                    <p className="mt-2 text-sm text-muted-foreground">{t.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="The Team" title={<>The pros <span className="gradient-text">behind the brand</span></>} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.05}>
              <div className="glass group rounded-3xl p-6 text-center transition-all hover:-translate-y-1 hover:border-cyan/40">
                <div className="gradient-primary glow mx-auto flex h-24 w-24 items-center justify-center rounded-full text-3xl font-bold text-deep">{m.name.split(" ").map((n) => n[0]).join("")}</div>
                <div className="mt-5 text-lg font-semibold">{m.name}</div>
                <div className="text-xs text-muted-foreground">{m.role}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="glass-strong rounded-3xl px-8 py-14">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { v: 10000, suffix: "+", l: "Customers" },
              { v: 15, suffix: "+", l: "Years" },
              { v: 350, suffix: "+", l: "Technicians" },
              { v: 99, suffix: "%", l: "Satisfaction" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="gradient-text font-display text-5xl font-bold sm:text-6xl"><Counter to={s.v} suffix={s.suffix} /></div>
                <div className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Recognition" title={<>Awards & <span className="gradient-text">certifications</span></>} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { i: Award, t: "Best Home Service 2025", d: "City Business Awards" },
            { i: ShieldCheck, t: "ISO 9001 Certified", d: "Quality Management" },
            { i: Award, t: "Top Rated 4.9★", d: "8,200+ verified reviews" },
            { i: ShieldCheck, t: "Brand Authorized", d: "10+ manufacturer partnerships" },
          ].map((a, i) => (
            <Reveal key={a.t} delay={i * 0.04}>
              <div className="glass h-full rounded-3xl p-6 text-center">
                <a.i className="mx-auto h-8 w-8 text-cyan" />
                <div className="mt-4 text-lg font-semibold">{a.t}</div>
                <div className="text-xs text-muted-foreground">{a.d}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABanner title="Experience the difference" sub="Join 10,000+ households who switched to premium home service." />
    </>
  );
}
