import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Snowflake, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Footer } from "./Footer";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Blog" },
  { to: "/testimonials", label: "Reviews" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export function SiteLayout() {
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  return (
    <div className="min-h-screen">
      {/* Floating background orbs */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="animate-float absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-primary/30 blur-3xl" />
        <div className="animate-float absolute top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full bg-cyan/20 blur-3xl" style={{ animationDelay: "-4s" }} />
        <div className="animate-float absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full bg-accent/20 blur-3xl" style={{ animationDelay: "-8s" }} />
      </div>

      <header className="sticky top-0 z-50">
        <div className="glass-strong border-b border-white/10">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="gradient-primary glow flex h-10 w-10 items-center justify-center rounded-xl">
                <Snowflake className="h-5 w-5 text-deep" strokeWidth={2.5} />
              </div>
              <div className="leading-tight">
                <div className="font-display text-lg font-bold tracking-tight">CoolFix<span className="gradient-text"> Pro</span></div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">AC & Appliances</div>
              </div>
            </Link>
            <nav className="hidden items-center gap-1 lg:flex">
              {nav.map((n) => {
                const active = location.pathname === n.to || (n.to !== "/" && location.pathname.startsWith(n.to));
                return (
                  <Link key={n.to} to={n.to} className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${active ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                    {active && <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-full bg-white/10" transition={{ type: "spring", stiffness: 380, damping: 30 }} />}
                    {n.label}
                  </Link>
                );
              })}
            </nav>
            <div className="flex items-center gap-3">
              <a href="tel:+18005551234" className="hidden items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground md:flex">
                <Phone className="h-4 w-4" /> +1 800 555-1234
              </a>
              <Link to="/booking" className="gradient-primary glow hidden rounded-full px-5 py-2.5 text-sm font-semibold text-deep transition-transform hover:scale-[1.03] md:inline-flex">
                Book Service
              </Link>
              <button onClick={() => setOpen(!open)} className="glass rounded-xl p-2.5 lg:hidden">
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="glass-strong border-b border-white/10 lg:hidden">
              <div className="mx-auto max-w-7xl px-5 py-4">
                <div className="grid grid-cols-2 gap-2">
                  {nav.map((n) => (
                    <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-sm font-medium hover:bg-white/10">{n.label}</Link>
                  ))}
                </div>
                <Link to="/booking" onClick={() => setOpen(false)} className="gradient-primary mt-4 block rounded-full py-3 text-center text-sm font-semibold text-deep">Book Service</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main key={location.pathname}>
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: "easeOut" }}>
          <Outlet />
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
