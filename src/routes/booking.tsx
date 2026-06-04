import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, MapPin, User, Phone, Mail, MessageSquare, Wrench, CheckCircle2 } from "lucide-react";
import { PageHero, Reveal, Section } from "../components/site/primitives";
import { services } from "../lib/site-data";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book a Service — CoolFix Pro" },
      { name: "description", content: "Book your AC or appliance service in under 60 seconds. Same-day appointments available." },
      { property: "og:title", content: "Book a Service — CoolFix Pro" },
      { property: "og:description", content: "Same-day AC and appliance booking." },
      { property: "og:url", content: "/booking" },
    ],
    links: [{ rel: "canonical", href: "/booking" }],
  }),
  component: Booking,
});

function Booking() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: services[0].title, address: "", date: "", time: "", message: "" });
  return (
    <>
      <PageHero eyebrow="Book a Service" title={<>Schedule in <span className="gradient-text">under 60 seconds</span></>} sub="Pick your service, choose a time, and a certified pro arrives at your door." />

      <Section>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="glass-strong space-y-5 rounded-3xl p-8">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field icon={User} label="Full Name" required value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                    <Field icon={Phone} label="Phone" type="tel" required value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
                  </div>
                  <Field icon={Mail} label="Email" type="email" required value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
                  <div>
                    <label className="mb-2 flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground"><Wrench className="h-3.5 w-3.5" /> Service Type</label>
                    <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-cyan">
                      {services.map((s) => <option key={s.slug} value={s.title} className="bg-card">{s.title}</option>)}
                    </select>
                  </div>
                  <Field icon={MapPin} label="Address" required value={form.address} onChange={(v) => setForm({ ...form, address: v })} />
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field icon={Calendar} label="Preferred Date" type="date" required value={form.date} onChange={(v) => setForm({ ...form, date: v })} />
                    <Field icon={Clock} label="Preferred Time" type="time" required value={form.time} onChange={(v) => setForm({ ...form, time: v })} />
                  </div>
                  <div>
                    <label className="mb-2 flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground"><MessageSquare className="h-3.5 w-3.5" /> Message (optional)</label>
                    <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-cyan" placeholder="Describe the issue or any preferences..." />
                  </div>
                  <button type="submit" className="gradient-primary glow w-full rounded-full py-3.5 text-sm font-semibold text-deep">Confirm Booking</button>
                </motion.form>
              ) : (
                <motion.div key="ok" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="glass-strong rounded-3xl p-10 text-center">
                  <div className="gradient-primary glow mx-auto flex h-16 w-16 items-center justify-center rounded-full"><CheckCircle2 className="h-9 w-9 text-deep" /></div>
                  <h3 className="mt-6 text-3xl font-bold">Booking Confirmed</h3>
                  <p className="mt-3 text-muted-foreground">A technician will be assigned and you'll receive an SMS confirmation shortly.</p>
                  <div className="glass mt-8 rounded-2xl p-5 text-left text-sm">
                    <div className="mb-3 text-xs uppercase tracking-wider text-cyan">Appointment Summary</div>
                    <Row label="Customer" value={form.name} />
                    <Row label="Service" value={form.service} />
                    <Row label="Date & Time" value={`${form.date} at ${form.time}`} />
                    <Row label="Address" value={form.address} />
                  </div>
                  <button onClick={() => setSubmitted(false)} className="mt-8 text-sm font-semibold text-cyan hover:underline">Book another service</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Reveal delay={0.1}>
            <div className="glass sticky top-28 rounded-3xl p-7">
              <div className="text-xs uppercase tracking-wider text-cyan">Service Summary</div>
              <div className="mt-3 text-xl font-semibold">{form.service}</div>
              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between"><span>Diagnostic</span><span className="text-foreground">Free with repair</span></div>
                <div className="flex justify-between"><span>Visit Fee</span><span className="text-foreground">$0</span></div>
                <div className="flex justify-between"><span>Warranty</span><span className="text-foreground">30 days</span></div>
                <div className="flex justify-between"><span>ETA</span><span className="text-foreground">Same day</span></div>
              </div>
              <div className="my-5 border-t border-white/10" />
              <div className="flex justify-between text-lg font-semibold"><span>Est. total</span><span className="gradient-text">From $49</span></div>
              <div className="glass mt-6 rounded-2xl p-3 text-xs text-muted-foreground">No payment until you're 100% satisfied with the service.</div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

function Field({ icon: Icon, label, value, onChange, type = "text", required }: { icon: any; label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-2 flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground"><Icon className="h-3.5 w-3.5" /> {label}</label>
      <input type={type} required={required} value={value} onChange={(e) => onChange(e.target.value)} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-cyan" />
    </div>
  );
}
function Row({ label, value }: { label: string; value: string }) {
  return <div className="flex justify-between py-1.5"><span className="text-muted-foreground">{label}</span><span className="font-medium">{value || "—"}</span></div>;
}
