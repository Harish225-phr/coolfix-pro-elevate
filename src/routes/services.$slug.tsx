import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Star, Sparkles } from "lucide-react";
import { CTABanner, Eyebrow, GradientButton, Reveal, Section, SectionHeader } from "../components/site/primitives";
import { services, faqs } from "../lib/site-data";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Service"} | CoolFix Pro` },
      { name: "description", content: loaderData?.short ?? "" },
      { property: "og:title", content: `${loaderData?.title ?? "Service"} | CoolFix Pro` },
      { property: "og:description", content: loaderData?.short ?? "" },
      { property: "og:url", content: `/services/${loaderData?.slug ?? ""}` },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `/services/${loaderData?.slug ?? ""}` }],
  }),
  notFoundComponent: () => (
    <div className="flex min-h-[60vh] items-center justify-center"><p>Service not found.</p></div>
  ),
  errorComponent: ({ reset }) => (
    <div className="flex min-h-[60vh] items-center justify-center"><button onClick={reset} className="gradient-primary rounded-full px-6 py-3 text-deep">Try again</button></div>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const s = Route.useLoaderData() as (typeof services)[number];
  const Icon = s.icon;
  return (
    <>
      <section className="relative overflow-hidden pt-16 sm:pt-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <Eyebrow>{s.price} · Same-Day Service</Eyebrow>
              <h1 className="mt-6 text-5xl font-bold leading-[1.05] sm:text-6xl"><span className="gradient-text">{s.title}</span></h1>
              <p className="mt-5 text-lg text-muted-foreground">{s.short}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <GradientButton to="/booking">Book This Service <ArrowRight className="h-4 w-4" /></GradientButton>
                <GradientButton to="/contact" variant="ghost">Get Free Quote</GradientButton>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="glass-strong glow relative aspect-square rounded-[2.5rem] p-10">
                <div className="gradient-primary absolute inset-16 rounded-full opacity-30 blur-3xl" />
                <div className="relative flex h-full w-full items-center justify-center">
                  <div className="gradient-primary glow flex h-36 w-36 items-center justify-center rounded-3xl">
                    <Icon className="h-20 w-20 text-deep" strokeWidth={1.8} />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="glass h-full rounded-3xl p-8">
              <h3 className="text-2xl font-semibold">What's included</h3>
              <ul className="mt-6 space-y-3">
                {s.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm"><CheckCircle2 className="h-5 w-5 shrink-0 text-cyan" /> {f}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="glass h-full rounded-3xl p-8">
              <h3 className="text-2xl font-semibold">Benefits</h3>
              <ul className="mt-6 space-y-3">
                {s.benefits.map((b) => (
                  <li key={b} className="flex gap-3 text-sm"><Sparkles className="h-5 w-5 shrink-0 text-cyan" /> {b}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Our Process" title={<>How we deliver <span className="gradient-text">this service</span></>} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {s.process.map((step, i) => (
            <Reveal key={step} delay={i * 0.04}>
              <div className="glass h-full rounded-3xl p-7">
                <div className="gradient-text font-display text-4xl font-bold">{String(i + 1).padStart(2, "0")}</div>
                <div className="mt-3 text-base font-semibold">{step}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Before & After" title={<>Real <span className="gradient-text">transformation</span></>} />
        <div className="grid gap-5 sm:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="glass aspect-[4/5] overflow-hidden rounded-3xl">
                <div className="gradient-primary flex h-full w-full items-center justify-center opacity-60">
                  <div className="text-center"><div className="font-display text-2xl font-bold text-deep">Before / After</div><div className="text-xs text-deep/70">Case study #{i + 1}</div></div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Pricing" title={<>Simple <span className="gradient-text">packages</span></>} />
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { n: "Basic", p: s.price, d: "Standard service visit" },
            { n: "Standard", p: "From $99", d: "Deep service + 60-day warranty", pop: true },
            { n: "Premium", p: "From $179", d: "Multi-unit + annual coverage" },
          ].map((t) => (
            <div key={t.n} className={`glass relative rounded-3xl p-7 ${t.pop ? "ring-2 ring-cyan" : ""}`}>
              {t.pop && <div className="gradient-primary absolute -top-3 left-7 rounded-full px-3 py-1 text-xs font-bold text-deep">Popular</div>}
              <div className="text-sm uppercase tracking-wider text-muted-foreground">{t.n}</div>
              <div className="mt-3 text-4xl font-bold">{t.p}</div>
              <p className="mt-2 text-sm text-muted-foreground">{t.d}</p>
              <Link to="/booking" className="gradient-primary glow mt-6 inline-block rounded-full px-5 py-2.5 text-sm font-semibold text-deep">Book Now</Link>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="FAQs" title="Quick answers" />
        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.slice(0, 5).map((f) => (
            <details key={f.q} className="glass group rounded-2xl px-6 py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">{f.q}<span className="text-cyan transition-transform group-open:rotate-45">+</span></summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section className="!pb-10">
        <div className="glass-strong flex flex-wrap items-center justify-between gap-6 rounded-3xl p-6">
          <div className="flex items-center gap-2"><Star className="h-5 w-5 fill-cyan text-cyan" /><span className="text-sm">4.9 average across 8,200+ reviews</span></div>
          <Link to="/services" className="text-sm font-semibold text-cyan hover:underline">← Back to all services</Link>
        </div>
      </Section>

      <CTABanner title={`Ready to book ${s.title}?`} sub="Get a certified technician at your door, same day." />
    </>
  );
}
