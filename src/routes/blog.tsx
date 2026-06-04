import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Search, Clock, ArrowRight, Tag } from "lucide-react";
import { CTABanner, PageHero, Reveal, Section } from "../components/site/primitives";
import { blogPosts } from "../lib/site-data";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — AC Tips, Guides & News | CoolFix Pro" },
      { name: "description", content: "Expert AC maintenance tips, energy-saving guides, and seasonal cooling advice from CoolFix Pro technicians." },
      { property: "og:title", content: "Blog — CoolFix Pro" },
      { property: "og:description", content: "AC tips, guides, and news." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

const categories = ["All", "Maintenance", "Repair", "Tips", "Guide"];
const popular = blogPosts.slice(0, 3);
const tags = ["Energy Saving", "Summer", "Cleaning", "Refrigerator", "Quick Tips", "Installation", "Brands"];

function Blog() {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");
  const posts = blogPosts.filter((p) => (cat === "All" || p.category === cat) && p.title.toLowerCase().includes(q.toLowerCase()));
  return (
    <>
      <PageHero eyebrow="Blog" title={<>Cool tips, <span className="gradient-text">smart living</span></>} sub="Energy-saving guides, repair know-how, and seasonal advice from certified technicians." />

      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="glass mb-6 flex items-center gap-3 rounded-full px-5 py-3">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search articles..." className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
            </div>
            <div className="mb-8 flex flex-wrap gap-2">
              {categories.map((c) => (
                <button key={c} onClick={() => setCat(c)} className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${cat === c ? "gradient-primary text-deep" : "glass"}`}>{c}</button>
              ))}
            </div>
            <div className="space-y-5">
              {posts.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.04}>
                  <article className="glass group rounded-3xl p-7 transition-all hover:-translate-y-0.5 hover:border-cyan/40">
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span className="rounded-full bg-cyan/10 px-2.5 py-1 text-cyan">{p.category}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {p.readTime}</span>
                      <span>{p.date}</span>
                    </div>
                    <h3 className="mt-4 text-2xl font-bold transition-colors group-hover:text-cyan">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                    <Link to="/blog" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan">Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <aside className="space-y-6 lg:col-span-4">
            <div className="glass rounded-3xl p-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-cyan">Popular Posts</h4>
              <div className="mt-5 space-y-4">
                {popular.map((p, i) => (
                  <Link key={p.slug} to="/blog" className="block">
                    <div className="flex gap-3">
                      <div className="gradient-text font-display text-3xl font-bold">{String(i + 1).padStart(2, "0")}</div>
                      <div className="text-sm font-medium leading-snug">{p.title}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="glass rounded-3xl p-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-cyan flex items-center gap-2"><Tag className="h-4 w-4" /> Tags</h4>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((t) => <span key={t} className="glass rounded-full px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground">{t}</span>)}
              </div>
            </div>
            <div className="glass-strong rounded-3xl p-6">
              <h4 className="font-display text-lg font-semibold">Cooling Newsletter</h4>
              <p className="mt-2 text-xs text-muted-foreground">Monthly tips to save energy and extend AC life.</p>
              <input className="glass mt-4 w-full rounded-full px-4 py-2.5 text-sm outline-none focus:border-cyan" placeholder="you@email.com" />
              <button className="gradient-primary glow mt-3 w-full rounded-full py-2.5 text-sm font-semibold text-deep">Subscribe</button>
            </div>
          </aside>
        </div>
      </Section>

      <CTABanner title="Need expert help, not just an article?" sub="Book a real technician in your area today." />
    </>
  );
}
