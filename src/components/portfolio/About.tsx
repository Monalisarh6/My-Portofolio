import { motion } from "motion/react";
import { GraduationCap, Briefcase, Users, ShieldCheck } from "lucide-react";

const highlights = [
  { icon: GraduationCap, title: "BSc Computer Science & IT", sub: "University of KwaZulu-Natal" },
  { icon: Briefcase, title: "ICT Intern", sub: "Johannesburg Development Agency" },
  { icon: Users, title: "Computer Science Tutor", sub: "University of KwaZulu-Natal" },
  { icon: ShieldCheck, title: "Cisco Endpoint Security", sub: "Certified Professional" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs font-mono text-brand mb-4 tracking-wider">
              01 — ABOUT ME
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Bridging software and infrastructure.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a Computer Science & IT graduate from the University of KwaZulu-Natal
                with a passion for building reliable software and supporting the enterprise
                technology that powers modern business.
              </p>
              <p>
                My experience spans full-stack development, Microsoft 365 administration,
                network support, and endpoint security. I currently serve as an ICT Intern
                at the Johannesburg Development Agency, where I support real users,
                deploy hardware, and keep critical systems running.
              </p>
              <p>
                I'm equally comfortable shipping a feature in ASP.NET or troubleshooting
                a VLAN — driven by automation, cybersecurity, and the craft of
                well-engineered systems.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((h) => (
              <div
                key={h.title}
                className="group p-6 rounded-2xl border border-border bg-gradient-card hover:border-brand/50 transition-all duration-300 hover:-translate-y-1 shadow-card-soft"
              >
                <div className="size-11 rounded-xl bg-brand/10 border border-brand/20 grid place-items-center mb-4 group-hover:bg-brand/20 transition-colors">
                  <h.icon className="size-5 text-brand" />
                </div>
                <div className="font-semibold mb-1">{h.title}</div>
                <div className="text-sm text-muted-foreground">{h.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
