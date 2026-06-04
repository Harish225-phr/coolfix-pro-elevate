import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, X } from "lucide-react";
import { CTABanner, PageHero, Reveal, Section, SectionHeader } from "../components/site/primitives";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Transparent AC & Appliance Service Plans | CoolFix Pro" },
      { name: "description", content: "Simple, transparent pricing for AC repair, maintenance, and home appliance services. Choose Basic, Standard, or Premium." },
      { property: "og:title", content: "Pricing — CoolFix Pro" },
      { property: "og:description", content: "Transparent service plans." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: Pricing,
});

const plans = [
  { name: "Basic", price: "39", desc: "Quick check-up and surface service for one unit.", features: [["Diagnostic & inspection", true], ["Basic filter clean", true], ["Outdoor coil rinse", true], ["Performance report", true], ["Refrigerant top-up", false], ["Anti-bacterial spray", false], ["AMC coverage", false], ["Priority dispatch", false]] },
  { name: "Standard", price: "79", desc: "Recommended deep service for healthy year-round AC.", popular: true, features: [["Diagnostic & inspection", true], ["Deep coil cleaning", true], ["Outdoor unit wash", true], ["Performance report", true], ["Refrigerant top-up", true], ["Anti-bacterial spray", true], ["AMC coverage", false], ["Priority dispatch", true]] },
  { name: "Premium", price: "149", desc: "Multi-unit deep service plus annual coverage.", features: [["Diagnostic & inspection", true], ["Deep coil cleaning", true], ["Outdoor unit wash", true], ["Performance report", true], ["Refrigerant top-up", true], ["Anti-bacterial spray", true], ["AMC coverage", true], ["Priority dispatch", true]] },
];

function Pricing() {
  return (
    <>
      <PageHero eyebrow="Pricing" title={<>Honest pricing. <span className="gradient-text">No surprises.</span></>} sub="Flat rates, transparent quotes on-site, no hidden fees. Pick the plan that fits your home." />

      <Section>
        <div className="grid gap-5 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05}>
              <div className={`glass relative h-full rounded-3xl p-8 transition-all hover:-translate-y-1 ${p.popular ? "ring-2 ring-cyan glow" : ""}`}>
                {p.popular && <div className="gradient-primary absolute -top-3 left-8 rounded-full px-3 py-1 text-xs font-bold text-deep">Most Popular</div>}
                <div className="text-sm uppercase tracking-wider text-muted-foreground">{p.name}</div>
                <div className="mt-3 flex items-baseline gap-1"><span className="text-5xl font-bold">${p.price}</span><span className="text-sm text-muted-foreground">/visit</span></div>
                <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
                <ul className="mt-8 space-y-3">
                  {p.features.map(([label, included]) => (
                    <li key={String(label)} className={`flex items-center gap-3 text-sm ${included ? "" : "text-muted-foreground line-through"}`}>
                      {included ? <Check className="h-4 w-4 text-cyan" /> : <X className="h-4 w-4 text-muted-foreground" />}{label}
                    </li>
                  ))}
                </ul>
                <Link to="/booking" className={`mt-8 block rounded-full py-3 text-center text-sm font-semibold ${p.popular ? "gradient-primary glow text-deep" : "glass-strong"}`}>Choose {p.name}</Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Compare" title={<>Full <span className="gradient-text">feature comparison</span></>} />
        <div className="glass overflow-hidden rounded-3xl">
          <div className="grid grid-cols-4 gap-0 border-b border-white/10 px-6 py-4 text-sm font-semibold">
            <div>Feature</div><div className="text-center">Basic</div><div className="text-center">Standard</div><div className="text-center">Premium</div>
          </div>
          {plans[0].features.map((_, idx) => (
            <div key={idx} className="grid grid-cols-4 gap-0 border-b border-white/5 px-6 py-3 text-sm last:border-0">
              <div className="text-muted-foreground">{plans[0].features[idx][0]}</div>
              {plans.map((p) => (
                <div key={p.name} className="text-center">
                  {p.features[idx][1] ? <Check className="mx-auto h-4 w-4 text-cyan" /> : <X className="mx-auto h-4 w-4 text-muted-foreground/50" />}
                </div>
              ))}
            </div>
          ))}
        </div>
      </Section>

      <CTABanner title="Need a custom commercial quote?" sub="AMC plans for offices, restaurants, and retail spaces." cta="Talk to Sales" to="/contact" />
    </>
  );
}
