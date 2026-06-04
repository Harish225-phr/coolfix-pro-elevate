import {
  Wind, Wrench, Fan, Settings, Snowflake, Sun, Building2,
  Refrigerator, WashingMachine, Microwave, Flame, type LucideIcon,
} from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  short: string;
  icon: LucideIcon;
  price: string;
  features: string[];
  benefits: string[];
  process: string[];
}

export const services: Service[] = [
  { slug: "ac-repair", title: "AC Repair", short: "Same-day diagnostic and repair for cooling failures, leaks, and electrical faults.", icon: Wrench, price: "From $49", features: ["Free diagnostic with repair", "90-day workmanship warranty", "OEM-grade replacement parts", "Emergency 2-hour response"], benefits: ["Restore cooling fast", "Prevent compressor damage", "Lower energy bills", "Extend AC lifespan"], process: ["Call or book online", "Technician dispatched", "On-site diagnostic", "Approved repair", "Quality check & cleanup", "30-day follow-up"] },
  { slug: "ac-installation", title: "AC Installation", short: "Expert installation of split, window, and central AC units with full setup.", icon: Wind, price: "From $199", features: ["Load calculation included", "Premium copper piping", "Stabilizer recommendation", "Free 1st service"], benefits: ["Optimal cooling efficiency", "Warranty preserved", "Quiet, vibration-free mount", "Cleaner installation"], process: ["Site survey", "Quote & scheduling", "Bracket & piping", "Indoor & outdoor mount", "Gas charge & test", "Customer handover"] },
  { slug: "ac-gas-refill", title: "AC Gas Refill", short: "R32 / R410A / R22 refrigerant top-up and full re-gassing service.", icon: Fan, price: "From $79", features: ["Leak detection", "Vacuum & pressure test", "Pure refrigerant only", "Pressure-gauge readings"], benefits: ["Restore icy cooling", "Protect compressor", "Better efficiency", "Long-lasting recharge"], process: ["Leak inspection", "Vacuum the system", "Charge refrigerant", "Pressure verification", "Cooling test", "Service report"] },
  { slug: "ac-maintenance", title: "AC Maintenance", short: "Comprehensive tune-up to keep your AC running like new every season.", icon: Settings, price: "From $39", features: ["Coil deep cleaning", "Filter replacement", "Drain line flush", "Performance check"], benefits: ["Up to 30% energy savings", "Cleaner indoor air", "Fewer breakdowns", "Longer unit life"], process: ["Pre-check", "Outdoor coil wash", "Indoor unit cleaning", "Electrical inspection", "Refrigerant check", "Service report"] },
  { slug: "split-ac-service", title: "Split AC Service", short: "Dedicated deep service for wall-mount split units, indoor + outdoor.", icon: Snowflake, price: "From $45", features: ["Foam jet cleaning", "Outdoor unit wash", "Anti-bacterial spray", "Remote calibration"], benefits: ["Fresh, allergen-free air", "Whisper-quiet operation", "Stronger airflow", "Lower power use"], process: ["Cover & protect area", "Dismantle indoor unit", "Jet wash coils", "Reinstall & test", "Outdoor coil wash", "Final inspection"] },
  { slug: "window-ac-service", title: "Window AC Service", short: "Full pull-out service for window AC units with detailed deep cleaning.", icon: Sun, price: "From $39", features: ["Pull-out cleaning", "Fin straightening", "Drainage clearing", "Capacitor check"], benefits: ["Restore full cooling", "Remove odors", "Reduce noise", "Energy savings"], process: ["Unit removal", "Strip down", "Deep wash", "Component check", "Reassemble", "Cooling test"] },
  { slug: "commercial-ac-service", title: "Commercial AC Service", short: "AMC and on-call service for offices, restaurants, and retail spaces.", icon: Building2, price: "Custom Quote", features: ["Dedicated account manager", "SLA-based response", "Multi-unit AMC", "After-hours service"], benefits: ["Zero downtime", "Predictable budgeting", "Trained technicians", "Compliance reports"], process: ["Site audit", "Custom AMC plan", "Scheduled visits", "Priority support", "Quarterly reports", "Annual review"] },
  { slug: "refrigerator-repair", title: "Refrigerator Repair", short: "Cooling, compressor, thermostat, and gas issues for all major brands.", icon: Refrigerator, price: "From $59", features: ["All brands serviced", "Genuine spare parts", "60-day warranty", "Same-day visit"], benefits: ["Save your groceries", "Quiet operation", "Energy efficient", "Extended life"], process: ["Issue diagnosis", "Quote approval", "Part replacement", "Cooling test", "Cleanup", "Warranty issued"] },
  { slug: "washing-machine-repair", title: "Washing Machine Repair", short: "Front-load, top-load, semi-auto repair – motor, drum, drainage.", icon: WashingMachine, price: "From $49", features: ["Belt & drum service", "Drainage fix", "Electronic board repair", "Door seal replacement"], benefits: ["No more leaks", "Quieter spin cycle", "Faster wash", "Longer lifespan"], process: ["Diagnostic", "Quote", "Repair", "Trial wash", "Cleanup", "Warranty"] },
  { slug: "microwave-repair", title: "Microwave Repair", short: "Magnetron, fuse, panel, and door switch fixes for ovens and OTGs.", icon: Microwave, price: "From $39", features: ["Magnetron replacement", "Touch panel repair", "Door sensor fix", "Safety test"], benefits: ["Even heating restored", "Safe to use", "Long warranty", "Fast turnaround"], process: ["Pickup or onsite", "Diagnosis", "Repair", "Heat test", "Return", "Warranty"] },
  { slug: "water-heater-repair", title: "Water Heater Repair", short: "Geyser & water heater repair – heating element, thermostat, leakage.", icon: Flame, price: "From $45", features: ["Element replacement", "Tank descaling", "Leakage fix", "Thermostat repair"], benefits: ["Hot water fast", "Lower bills", "Rust-free tank", "Safe operation"], process: ["Inspection", "Quote", "Replacement", "Pressure test", "Cleanup", "Warranty"] },
];

export const brands = ["LG", "Samsung", "Daikin", "Voltas", "Hitachi", "Blue Star", "Carrier", "Panasonic", "Whirlpool", "Godrej"];

export const processSteps = [
  { n: "01", title: "Book Service", text: "Schedule online or call our 24/7 support hotline." },
  { n: "02", title: "Technician Assigned", text: "Certified technician dispatched in your area." },
  { n: "03", title: "Inspection", text: "On-site diagnostic and transparent quote." },
  { n: "04", title: "Repair", text: "Quality repair with genuine OEM parts." },
  { n: "05", title: "Quality Check", text: "Performance test and post-service cleanup." },
  { n: "06", title: "Satisfaction", text: "30-day warranty and customer follow-up." },
];

export const testimonialsList = [
  { name: "Priya Kapoor", role: "Homeowner", rating: 5, text: "Technician arrived within an hour and fixed our split AC the same day. Transparent pricing and super professional." },
  { name: "Marcus Chen", role: "Restaurant Owner", rating: 5, text: "We use CoolFix Pro for our entire AMC. Their commercial team is responsive and our HVAC has zero downtime now." },
  { name: "Aisha Rahman", role: "Apartment Resident", rating: 5, text: "Booked online, got SMS updates, technician was uniformed and tidy. The deep clean made my AC feel brand new." },
  { name: "James O'Connor", role: "Office Manager", rating: 5, text: "Hands down the most reliable repair service we've worked with. Quote matched the final bill exactly." },
  { name: "Sara Mendes", role: "Homemaker", rating: 5, text: "My refrigerator stopped cooling overnight. They came in 2 hours and saved a fridge full of groceries." },
  { name: "Daniel Park", role: "Property Manager", rating: 5, text: "Manage 40+ units. CoolFix Pro is our default. Fast, fair, certified – nothing else comes close." },
];

export const faqs = [
  { q: "How quickly can a technician reach me?", a: "Standard appointments are scheduled within 2-4 hours. Emergency requests in our service areas are typically dispatched within 60-90 minutes." },
  { q: "Do you provide a warranty on repairs?", a: "Yes. All repairs come with a 30 to 90-day workmanship warranty, and replacement parts include the manufacturer's warranty." },
  { q: "Is the diagnostic fee waived if I proceed with repair?", a: "Absolutely. The diagnostic fee is fully waived when you approve the repair on the same visit." },
  { q: "Which brands do you service?", a: "We service all major brands including LG, Samsung, Daikin, Voltas, Hitachi, Blue Star, Carrier, Panasonic, Whirlpool, and Godrej." },
  { q: "Do you offer annual maintenance contracts (AMC)?", a: "Yes. We have residential and commercial AMC plans with priority scheduling, quarterly service, and discounted parts." },
  { q: "Are your technicians background-checked?", a: "Every technician is background-verified, factory-trained, uniformed, and carries a CoolFix Pro ID badge." },
  { q: "What payment methods do you accept?", a: "We accept cash, all major credit/debit cards, UPI, and mobile wallets. No payment until you're satisfied with the service." },
  { q: "Do you charge extra for weekend or holiday service?", a: "There is no extra charge for weekend service. A small premium applies for emergency same-night and major holiday calls." },
  { q: "Can you install a new AC purchased elsewhere?", a: "Yes. We provide professional installation for AC units purchased from any retailer, with full warranty preservation." },
  { q: "How often should I service my AC?", a: "Twice a year is ideal – before summer and before winter – to maintain efficiency and prevent breakdowns." },
  { q: "Do you provide same-day gas refill?", a: "Yes, in most service areas we provide same-day refrigerant top-up after leak inspection." },
  { q: "What refrigerants do you stock?", a: "We carry R32, R410A, and legacy R22 refrigerants. All sourced from authorized distributors." },
  { q: "Will the technician clean up after the job?", a: "Yes. Our technicians lay protective sheets, vacuum, and remove all debris before they leave." },
  { q: "Do you offer commercial HVAC services?", a: "Yes. We support offices, retail, restaurants, and small industrial facilities with dedicated account managers." },
  { q: "Can I reschedule my booking?", a: "Yes. You can reschedule free of charge up to 1 hour before your appointment window." },
  { q: "How is pricing determined?", a: "We use fixed-rate transparent pricing for most services. Custom jobs are quoted on-site before any work begins." },
  { q: "Do you offer discounts for senior citizens?", a: "Yes, we offer a 10% senior citizen discount on all residential services." },
  { q: "What if my appliance can't be repaired?", a: "We'll provide an honest evaluation and only charge the diagnostic fee. We can also recommend replacement options." },
  { q: "Is the work guaranteed to fix the issue?", a: "If the same issue recurs within the warranty period, we return and fix it at no additional charge." },
  { q: "Do you service older AC models?", a: "Yes. We service AC units up to 15 years old where compatible spare parts are available." },
  { q: "Will an AC service reduce my electricity bill?", a: "A properly serviced AC can reduce energy consumption by 15-30% compared to a neglected unit." },
  { q: "Do you handle insurance claims?", a: "We provide detailed invoices and service reports compatible with home insurance claims." },
  { q: "Can I get a quote before booking?", a: "Yes. Use our 'Get Free Quote' form for an instant ballpark, with final price confirmed on-site." },
  { q: "Do you sell new appliances?", a: "We focus on service and repair, but we partner with leading retailers and can advise on the best models." },
  { q: "What hours are you open?", a: "Customer support is 24/7. Field service runs 8am-10pm daily, with emergency service available overnight." },
];

export const blogPosts = [
  { slug: "how-often-ac-service", title: "How Often Should Your AC Be Serviced?", excerpt: "The honest answer depends on usage and climate – here's a clear schedule any homeowner can follow.", category: "Maintenance", readTime: "5 min", date: "May 12, 2026" },
  { slug: "signs-ac-needs-repair", title: "7 Signs Your AC Desperately Needs Repair", excerpt: "Strange noises, weak airflow, and rising bills – know when to call a technician before it gets expensive.", category: "Repair", readTime: "6 min", date: "Apr 28, 2026" },
  { slug: "ac-energy-saving-tips", title: "12 Smart AC Energy Saving Tips for 2026", excerpt: "Practical, technician-approved ways to lower your cooling bill without sacrificing comfort.", category: "Tips", readTime: "8 min", date: "Apr 14, 2026" },
  { slug: "best-maintenance-practices", title: "Best AC Maintenance Practices for Year-Round Comfort", excerpt: "A seasonal checklist to keep your AC reliable, efficient, and quiet through every season.", category: "Maintenance", readTime: "7 min", date: "Mar 30, 2026" },
  { slug: "summer-cooling-guide", title: "The Ultimate Summer Cooling Guide", excerpt: "Beat the heatwave with the right AC setup, smart routines, and complementary cooling tactics.", category: "Guide", readTime: "10 min", date: "Mar 18, 2026" },
];

export const galleryImages = [
  { tag: "Installation", title: "Split AC Install — Modern Apartment" },
  { tag: "Before/After", title: "Coil Deep Clean Restoration" },
  { tag: "Commercial", title: "Restaurant HVAC Upgrade" },
  { tag: "Repair", title: "Compressor Replacement" },
  { tag: "Installation", title: "Bedroom Mini-Split Setup" },
  { tag: "Before/After", title: "Filter Replacement Result" },
  { tag: "Commercial", title: "Office Tower AMC Visit" },
  { tag: "Repair", title: "Refrigerator Cooling Restored" },
  { tag: "Installation", title: "Window AC Premium Mount" },
];
