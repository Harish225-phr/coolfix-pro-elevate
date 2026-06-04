import { createFileRoute } from "@tanstack/react-router";
import { Play, Star, Quote } from "lucide-react";
import { CTABanner, Counter, PageHero, Reveal, Section, SectionHeader } from "../components/site/primitives";
import { testimonialsList } from "../lib/site-data";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Customer Reviews & Testimonials | CoolFix Pro" },
      { name: "description", content: "Read 8,200+ verified reviews from homeowners and businesses who trust CoolFix Pro for AC and appliance service." },
      { property: "og:title", content: "Customer Reviews | CoolFix Pro" },
      { property: "og:description", content: "8,200+ five-star reviews from real customers." },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: Testimonials,
});

function Testimonials() {
  return (
    <>
      <PageHero eyebrow="Reviews" title={<><span className="gradient-text">8,200+</span> happy customers can't be wrong</>} sub="Real reviews from real customers who switched to CoolFix Pro and never looked back." />

      <Section className="!py-10">
        <div className="glass-strong rounded-3xl px-8 py-10">
          <div className="grid gap-8 sm:grid-cols-4">
            {[
              { v: 4.9, suffix: "★", l: "Average Rating" },
              { v: 8200, suffix: "+", l: "Reviews" },
              { v: 99, suffix: "%", l: "Recommend Us" },
              { v: 96, suffix: "%", l: "Return Customers" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="gradient-text font-display text-4xl font-bold sm:text-5xl"><Counter to={s.v} suffix={s.suffix} /></div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Video Stories" title={<>Hear it <span className="gradient-text">from customers</span></>} />
        <div className="grid gap-5 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="glass group relative aspect-video cursor-pointer overflow-hidden rounded-3xl">
                <div className="gradient-primary absolute inset-0 opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="glass-strong glow flex h-16 w-16 items-center justify-center rounded-full transition-transform group-hover:scale-110">
                    <Play className="ml-1 h-6 w-6 fill-cyan text-cyan" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-sm font-semibold">Customer Story #{i}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Verified Reviews" title={<>What people <span className="gradient-text">are saying</span></>} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonialsList.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.05}>
              <div className="glass h-full rounded-3xl p-7">
                <Quote className="h-7 w-7 text-cyan/60" />
                <div className="mt-3 flex gap-1">{Array.from({ length: t.rating }).map((_, k) => <Star key={k} className="h-4 w-4 fill-cyan text-cyan" />)}</div>
                <p className="mt-4 text-sm leading-relaxed text-foreground/90">"{t.text}"</p>
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

      <CTABanner title="Join thousands of satisfied homes" sub="Experience the difference yourself." />
    </>
  );
}
