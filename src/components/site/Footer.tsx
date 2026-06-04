import { Link } from "@tanstack/react-router";
import { Snowflake, Globe, Camera, Send, Video, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="gradient-primary glow flex h-11 w-11 items-center justify-center rounded-xl">
                <Snowflake className="h-5 w-5 text-deep" strokeWidth={2.5} />
              </div>
              <div className="font-display text-xl font-bold">CoolFix<span className="gradient-text"> Pro</span></div>
            </Link>
            <p className="mt-5 max-w-sm text-sm text-muted-foreground">
              Premium AC repair and home appliance service trusted by 10,000+ households. Same-day repairs, certified technicians, transparent pricing.
            </p>
            <form className="glass mt-6 flex items-center gap-2 rounded-full p-1.5">
              <input type="email" placeholder="Your email for cooling tips" className="flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-muted-foreground" />
              <button className="gradient-primary flex h-9 w-9 items-center justify-center rounded-full text-deep"><ArrowRight className="h-4 w-4" /></button>
            </form>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((I, i) => (
                <a key={i} href="#" className="glass flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-white/15"><I className="h-4 w-4" /></a>
              ))}
            </div>
          </div>

          <FooterCol title="Services" links={[
            { to: "/services", label: "AC Repair" },
            { to: "/services", label: "AC Installation" },
            { to: "/services", label: "Gas Refill" },
            { to: "/services", label: "Refrigerator" },
            { to: "/services", label: "Washing Machine" },
          ]} />
          <FooterCol title="Company" links={[
            { to: "/about", label: "About Us" },
            { to: "/gallery", label: "Gallery" },
            { to: "/testimonials", label: "Reviews" },
            { to: "/blog", label: "Blog" },
            { to: "/faq", label: "FAQ" },
          ]} />
          <FooterCol title="Service Areas" links={[
            { to: "/contact", label: "Downtown" },
            { to: "/contact", label: "North District" },
            { to: "/contact", label: "Westside" },
            { to: "/contact", label: "Greenfield" },
            { to: "/contact", label: "Bay Heights" },
          ]} />
          <div className="lg:col-span-2">
            <div className="text-sm font-semibold tracking-wider text-foreground/90 uppercase">Contact</div>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 text-primary" /> +1 800 555-1234</li>
              <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 text-primary" /> hello@coolfixpro.com</li>
              <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-primary" /> 221 Frost Ave, Suite 400</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} CoolFix Pro. All rights reserved.</div>
          <div className="flex gap-5"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Cookies</a></div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div className="lg:col-span-2">
      <div className="text-sm font-semibold tracking-wider text-foreground/90 uppercase">{title}</div>
      <ul className="mt-5 space-y-3 text-sm">
        {links.map((l) => (
          <li key={l.label}><Link to={l.to} className="text-muted-foreground transition-colors hover:text-foreground">{l.label}</Link></li>
        ))}
      </ul>
    </div>
  );
}
