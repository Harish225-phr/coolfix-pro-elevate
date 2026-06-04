import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Search } from "lucide-react";
import { CTABanner, PageHero, Section } from "../components/site/primitives";
import { faqs } from "../lib/site-data";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — CoolFix Pro" },
      { name: "description", content: "Answers to 25+ common questions about AC repair, pricing, warranty, and home appliance service." },
      { property: "og:title", content: "FAQ — CoolFix Pro" },
      { property: "og:description", content: "Quick answers to your service questions." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: FAQ,
});

function FAQ() {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState<number | null>(0);
  const list = faqs.filter((f) => f.q.toLowerCase().includes(q.toLowerCase()) || f.a.toLowerCase().includes(q.toLowerCase()));
  return (
    <>
      <PageHero eyebrow="FAQ" title={<>Everything you <span className="gradient-text">want to know</span></>} sub="25+ honest answers about pricing, warranty, brands, and how we work." />

      <Section>
        <div className="mx-auto max-w-3xl">
          <div className="glass mb-6 flex items-center gap-3 rounded-full px-5 py-3">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search questions..." className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
          </div>
          <div className="space-y-3">
            {list.map((f, i) => (
              <div key={f.q} className="glass overflow-hidden rounded-2xl">
                <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
                  <span className="font-medium">{f.q}</span>
                  <motion.div animate={{ rotate: open === i ? 45 : 0 }} className="gradient-primary flex h-8 w-8 shrink-0 items-center justify-center rounded-full"><Plus className="h-4 w-4 text-deep" /></motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
                      <p className="px-6 pb-5 text-sm text-muted-foreground">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CTABanner title="Still have a question?" sub="Our team replies in under an hour." cta="Contact Support" to="/contact" />
    </>
  );
}
