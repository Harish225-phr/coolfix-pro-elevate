import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CTABanner, PageHero, Reveal, Section } from "../components/site/primitives";
import { services } from "../lib/site-data";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — AC Repair, Installation & Appliance Care | CoolFix Pro" },
      { name: "description", content: "Explore our full range of AC and home appliance services — repair, installation, maintenance, gas refill, refrigerator, washing machine, and more." },
      { property: "og:title", content: "Services — CoolFix Pro" },
      { property: "og:description", content: "Full range of certified AC and appliance services." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero eyebrow="Our Services" title={<>Every service. <span className="gradient-text">One trusted team.</span></>} sub="From a quick gas top-up to a full commercial HVAC install — handled end-to-end by certified specialists." />
      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.slug} delay={(i % 6) * 0.04}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="group glass relative block h-full overflow-hidden rounded-3xl p-7 transition-all hover:-translate-y-1 hover:border-cyan/40">
                  <div className="gradient-primary absolute -top-16 -right-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity group-hover:opacity-30" />
                  <div className="gradient-primary glow flex h-12 w-12 items-center justify-center rounded-2xl">
                    <Icon className="h-6 w-6 text-deep" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                  <ul className="mt-5 space-y-1.5 text-sm text-muted-foreground">
                    {s.features.slice(0, 3).map((f) => <li key={f}>· {f}</li>)}
                  </ul>
                  <div className="mt-6 flex items-center justify-between text-sm">
                    <span className="text-cyan font-semibold">{s.price}</span>
                    <span className="flex items-center gap-1 text-foreground/80">Details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Section>
      <CTABanner title="Not sure which service you need?" sub="Tell us your issue and we'll recommend the right fix — free." cta="Get Free Quote" to="/contact" />
    </>
  );
}
