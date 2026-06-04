import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { CTABanner, PageHero, Reveal, Section } from "../components/site/primitives";
import { galleryImages } from "../lib/site-data";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Our Work in Action | CoolFix Pro" },
      { name: "description", content: "See real before/after photos, installations, and technician work from 10,000+ completed projects." },
      { property: "og:title", content: "Gallery — CoolFix Pro" },
      { property: "og:description", content: "Real installation, repair, and maintenance photos." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const filters = ["All", "Installation", "Before/After", "Commercial", "Repair"];

function Gallery() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState<number | null>(null);
  const filtered = galleryImages.filter((g) => filter === "All" || g.tag === filter);
  return (
    <>
      <PageHero eyebrow="Gallery" title={<>Our work, <span className="gradient-text">on display</span></>} sub="Browse projects from real homes and businesses — from quick fixes to full installs." />

      <Section>
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button key={f} onClick={() => setFilter(f)} className={`rounded-full px-5 py-2 text-sm font-medium transition ${filter === f ? "gradient-primary text-deep" : "glass hover:bg-white/15"}`}>{f}</button>
          ))}
        </div>

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {filtered.map((g, i) => {
            const heights = ["h-72", "h-96", "h-80", "h-64", "h-[26rem]"];
            const h = heights[i % heights.length];
            return (
              <Reveal key={g.title} delay={(i % 6) * 0.04}>
                <button onClick={() => setOpen(i)} className={`group glass relative mb-5 block w-full overflow-hidden rounded-3xl ${h}`}>
                  <div className="gradient-primary absolute inset-0 opacity-40 transition-opacity group-hover:opacity-60" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="text-[10px] uppercase tracking-[0.18em] text-cyan">{g.tag}</div>
                    <div className="mt-1 text-lg font-semibold">{g.title}</div>
                  </div>
                  <div className="absolute right-4 top-4 glass flex h-9 w-9 items-center justify-center rounded-full opacity-0 transition-opacity group-hover:opacity-100">
                    <ZoomIn className="h-4 w-4" />
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <AnimatePresence>
        {open !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(null)} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-5 backdrop-blur-xl">
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="glass-strong relative w-full max-w-3xl overflow-hidden rounded-3xl">
              <button onClick={() => setOpen(null)} className="glass absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full"><X className="h-5 w-5" /></button>
              <div className="gradient-primary flex aspect-video items-center justify-center text-deep"><div className="text-center"><div className="font-display text-3xl font-bold">{filtered[open].title}</div><div className="text-sm opacity-70">{filtered[open].tag}</div></div></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTABanner title="Want your project featured?" sub="Book a service and let us showcase the transformation." />
    </>
  );
}
