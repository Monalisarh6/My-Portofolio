import { motion } from "motion/react";
import { ArrowUpRight, Calendar } from "lucide-react";

const posts = [
  {
    date: "Coming soon",
    category: "Microsoft 365",
    title: "Hardening Entra ID for small enterprise tenants",
    excerpt:
      "Conditional access, MFA enforcement and role-based admin patterns I apply on real Microsoft 365 environments.",
  },
  {
    date: "Coming soon",
    category: "Software",
    title: "Building production-ready ASP.NET apps as a graduate",
    excerpt:
      "Lessons from shipping the Enterprise POS — schema design, authorization and clean controller patterns.",
  },
  {
    date: "Coming soon",
    category: "Security",
    title: "Endpoint security beyond antivirus: EDR, DLP and you",
    excerpt:
      "What I learned from Cisco Endpoint Security certification and how I apply it in day-to-day operations.",
  },
];

export function Blog() {
  return (
    <section id="blog" className="relative py-24 sm:py-32 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-mono text-brand mb-4 tracking-wider">
              08 — INSIGHTS
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Notes from the field.
            </h2>
            <p className="text-muted-foreground text-lg">
              Practical write-ups on software, infrastructure and security.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-2xl border border-border bg-gradient-card hover:border-brand/50 transition-all cursor-pointer"
            >
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                <span className="font-mono text-brand">{p.category}</span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="size-3" /> {p.date}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-3 group-hover:text-brand transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {p.excerpt}
              </p>
              <div className="inline-flex items-center gap-1 text-sm text-brand font-medium">
                Read article
                <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
