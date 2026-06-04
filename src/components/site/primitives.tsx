import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";

export function Section({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return <section id={id} className={`mx-auto max-w-7xl px-5 py-20 sm:py-28 ${className}`}>{children}</section>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-cyan">
      <span className="h-1.5 w-1.5 rounded-full bg-cyan" /> {children}
    </div>
  );
}

export function SectionHeader({ eyebrow, title, sub, center = true }: { eyebrow?: string; title: ReactNode; sub?: string; center?: boolean }) {
  return (
    <div className={`mb-14 ${center ? "text-center" : ""}`}>
      {eyebrow && <div className={center ? "flex justify-center" : ""}><Eyebrow>{eyebrow}</Eyebrow></div>}
      <h2 className="mt-5 text-4xl font-bold sm:text-5xl lg:text-6xl">{title}</h2>
      {sub && <p className={`mt-5 max-w-2xl text-lg text-muted-foreground ${center ? "mx-auto" : ""}`}>{sub}</p>}
    </div>
  );
}

export function GradientButton({ to, href, children, variant = "primary", className = "" }: { to?: string; href?: string; children: ReactNode; variant?: "primary" | "ghost"; className?: string }) {
  const base = "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all hover:scale-[1.03] active:scale-[0.98]";
  const styles = variant === "primary" ? "gradient-primary glow text-deep" : "glass-strong text-foreground hover:bg-white/15";
  const cls = `${base} ${styles} ${className}`;
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  if (href) return <a href={href} className={cls}>{children}</a>;
  return <button className={cls}>{children}</button>;
}

export function Reveal({ children, delay = 0, y = 24 }: { children: ReactNode; delay?: number; y?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

export function Counter({ to, suffix = "", duration = 2 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const sp = useSpring(mv, { duration: duration * 1000, bounce: 0 });
  const rounded = useTransform(sp, (v) => Math.floor(v).toLocaleString());
  useEffect(() => { if (inView) mv.set(to); }, [inView, to, mv]);
  return <span ref={ref}><motion.span>{rounded}</motion.span>{suffix}</span>;
}

export function PageHero({ eyebrow, title, sub }: { eyebrow: string; title: ReactNode; sub: string }) {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 pt-20 pb-12 text-center sm:pt-28">
        <Reveal><Eyebrow>{eyebrow}</Eyebrow></Reveal>
        <Reveal delay={0.05}><h1 className="mt-6 text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">{title}</h1></Reveal>
        <Reveal delay={0.1}><p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">{sub}</p></Reveal>
      </div>
    </section>
  );
}

export function CTABanner({ title, sub, cta = "Book Service Now", to = "/booking" }: { title: string; sub?: string; cta?: string; to?: string }) {
  return (
    <Section>
      <div className="glass-strong relative overflow-hidden rounded-3xl px-8 py-16 text-center">
        <div className="gradient-primary absolute -top-20 left-1/2 h-60 w-[40rem] -translate-x-1/2 rounded-full opacity-30 blur-3xl" />
        <h3 className="relative text-3xl font-bold sm:text-5xl">{title}</h3>
        {sub && <p className="relative mx-auto mt-4 max-w-xl text-muted-foreground">{sub}</p>}
        <div className="relative mt-8 flex flex-wrap justify-center gap-3">
          <GradientButton to={to}>{cta}</GradientButton>
          <GradientButton to="/contact" variant="ghost">Talk to an Expert</GradientButton>
        </div>
      </div>
    </Section>
  );
}
