import { motion } from "motion/react";
import { Quote } from "lucide-react";

const pillars = [
  { k: "Build", v: "Full-stack applications in ASP.NET, Python and modern web stacks." },
  { k: "Support", v: "Frontline and second-line IT for real users and real infrastructure." },
  { k: "Administer", v: "Microsoft 365, Entra ID, SharePoint, Exchange and Teams." },
  { k: "Secure", v: "Endpoint protection, EDR, DLP and incident-response readiness." },
];

const testimonials = [
  {
    quote:
      "A natural communicator with deep technical fundamentals. He explains complex concepts so students actually get them.",
    name: "Course Coordinator",
    role: "University of KwaZulu-Natal",
  },
];

export function WhyHire() {
  return (
    <section className="relative py-24 sm:py-32 bg-surface/30 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-brand/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="text-xs font-mono text-brand mb-4 tracking-wider">
            06 - WHY HIRE ME
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            One hire. <span className="text-gradient-brand">Two disciplines.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I bring a unique combination of software development expertise and enterprise
            IT support experience. I can build applications, troubleshoot infrastructure,
            manage Microsoft 365 environments, support users, secure endpoints, and
            contribute to digital transformation initiatives.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {pillars.map((p, i) => (
            <motion.div
              key={p.k}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-6 rounded-2xl border border-border bg-gradient-card text-center"
            >
              <div className="font-display text-2xl font-bold text-gradient-brand mb-2">
                {p.k}
              </div>
              <div className="text-sm text-muted-foreground leading-relaxed">{p.v}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-1 gap-6 max-w-2xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl border border-border bg-gradient-card relative"
            >
              <Quote className="size-8 text-brand/40 mb-4" />
              <blockquote className="text-base leading-relaxed mb-6">
                "{t.quote}"
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-gradient-brand grid place-items-center font-semibold text-primary-foreground">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
