import { motion } from "motion/react";
import { Briefcase, GraduationCap, Globe } from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    role: "ICT Intern",
    company: "Johannesburg Development Agency",
    period: "Present",
    bullets: [
      "First and second-line technical support across the organisation",
      "Microsoft 365 administration: Exchange, Teams, SharePoint, Entra ID",
      "Hardware deployment, system reimaging and asset management",
      "Network troubleshooting and helpdesk ticket management",
      "Data backup, recovery and endpoint security operations",
    ],
  },
  {
    icon: GraduationCap,
    role: "Computer Science Tutor",
    company: "University of KwaZulu-Natal",
    period: "2023 – 2024",
    bullets: [
      "Taught programming fundamentals in Java, Python and C++",
      "Mentored students through assignments, projects and debugging",
      "Strengthened technical communication and presentation skills",
    ],
  },
  {
    icon: Globe,
    role: "Virtual IT Intern",
    company: "Quantify Your Future",
    period: "2023",
    bullets: [
      "Delivered enterprise technology projects in a virtual team",
      "Collaborated across roles on real-world business scenarios",
      "Gained exposure to enterprise IT operations and workflows",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-mono text-brand mb-4 tracking-wider">
            03 — EXPERIENCE
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Professional journey.
          </h2>
          <p className="text-muted-foreground text-lg">
            Real responsibilities, real users, real systems.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-brand via-border to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-16 sm:pl-20"
              >
                <div className="absolute left-0 top-0 size-11 sm:size-12 rounded-xl bg-gradient-brand grid place-items-center shadow-glow z-10">
                  <exp.icon className="size-5 text-primary-foreground" />
                </div>

                <div className="p-6 sm:p-8 rounded-2xl border border-border bg-gradient-card hover:border-brand/40 transition-colors">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                    <h3 className="text-xl sm:text-2xl font-semibold">{exp.role}</h3>
                    <span className="text-xs font-mono text-brand px-2.5 py-1 rounded-full bg-brand/10 border border-brand/20">
                      {exp.period}
                    </span>
                  </div>
                  <div className="text-brand-glow font-medium mb-4">{exp.company}</div>
                  <ul className="space-y-2">
                    {exp.bullets.map((b) => (
                      <li
                        key={b}
                        className="text-sm text-muted-foreground flex gap-3 leading-relaxed"
                      >
                        <span className="text-brand mt-2 size-1 rounded-full bg-brand shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
