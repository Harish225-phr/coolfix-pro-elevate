import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageSquare, User, Send, Globe, Camera, Video } from "lucide-react";
import { PageHero, Reveal, Section } from "../components/site/primitives";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact CoolFix Pro — 24/7 Support & Free Quotes" },
      { name: "description", content: "Get in touch with CoolFix Pro for service requests, free quotes, or emergency support. We reply in under an hour." },
      { property: "og:title", content: "Contact CoolFix Pro" },
      { property: "og:description", content: "24/7 support, emergency service, free quotes." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero eyebrow="Contact" title={<>Let's <span className="gradient-text">get talking</span></>} sub="Quotes, bookings, emergencies — we're here 24/7 with a real human reply." />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { i: Phone, t: "Call us", v: "+1 800 555-1234", s: "24/7 emergency line" },
            { i: Mail, t: "Email", v: "hello@coolfixpro.com", s: "Reply in under 1 hour" },
            { i: MapPin, t: "Visit", v: "221 Frost Ave", s: "Suite 400, Downtown" },
            { i: Clock, t: "Hours", v: "8am – 10pm", s: "Field service daily" },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 0.04}>
              <div className="glass h-full rounded-3xl p-6">
                <div className="gradient-primary flex h-11 w-11 items-center justify-center rounded-xl"><c.i className="h-5 w-5 text-deep" /></div>
                <div className="mt-5 text-xs uppercase tracking-wider text-muted-foreground">{c.t}</div>
                <div className="mt-1 text-base font-semibold">{c.v}</div>
                <div className="text-xs text-muted-foreground">{c.s}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-5">
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="glass-strong space-y-5 rounded-3xl p-8 lg:col-span-3">
            <h3 className="text-2xl font-bold">Send us a message</h3>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field icon={User} label="Name" />
              <Field icon={Mail} label="Email" type="email" />
            </div>
            <Field icon={Phone} label="Phone" type="tel" />
            <div>
              <label className="mb-2 flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground"><MessageSquare className="h-3.5 w-3.5" /> Message</label>
              <textarea rows={5} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-cyan" placeholder="How can we help?" />
            </div>
            <button type="submit" className="gradient-primary glow inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-deep">{sent ? "Message sent ✓" : "Send Message"} <Send className="h-4 w-4" /></button>
          </form>

          <div className="space-y-6 lg:col-span-2">
            <div className="glass relative aspect-square overflow-hidden rounded-3xl">
              <div className="absolute inset-0 opacity-60" style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="gradient-primary glow mx-auto flex h-16 w-16 items-center justify-center rounded-full"><MapPin className="h-7 w-7 text-deep" /></div>
                  <div className="mt-4 font-semibold">221 Frost Ave</div>
                  <div className="text-xs text-muted-foreground">Suite 400, Downtown</div>
                </div>
              </div>
            </div>
            <div className="glass-strong rounded-3xl p-6">
              <div className="text-xs uppercase tracking-wider text-cyan">Emergency Hotline</div>
              <a href="tel:+18005551234" className="mt-2 block font-display text-3xl font-bold">+1 800 555-1234</a>
              <p className="mt-2 text-xs text-muted-foreground">For critical AC failures and appliance emergencies. We answer in under 60 seconds.</p>
            </div>
            <div className="glass rounded-3xl p-6">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Follow Us</div>
              <div className="mt-4 flex gap-3">
                {[Globe, Camera, Send, Video].map((I, i) => (
                  <a key={i} href="#" className="glass-strong flex h-11 w-11 items-center justify-center rounded-full hover:bg-white/15"><I className="h-4 w-4" /></a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function Field({ icon: Icon, label, type = "text" }: { icon: any; label: string; type?: string }) {
  return (
    <div>
      <label className="mb-2 flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground"><Icon className="h-3.5 w-3.5" /> {label}</label>
      <input type={type} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-cyan" />
    </div>
  );
}
