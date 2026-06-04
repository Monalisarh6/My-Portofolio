import { motion } from "motion/react";
import { ShieldCheck, Award, Trophy, Code2, Server, GraduationCap } from "lucide-react";

const competencies = [
  "Threat Detection",
  "Endpoint Protection",
  "EDR",
  "DLP",
  "Incident Response",
  "Security Compliance",
];

const achievements = [
  { icon: GraduationCap, label: "BSc Computer Science & IT Graduate" },
  { icon: Server, label: "Enterprise IT Support Experience" },
  { icon: ShieldCheck, label: "Cisco Endpoint Security Certified" },
  { icon: Trophy, label: "University Tutor Experience" },
  { icon: Code2, label: "Full-Stack Development Projects" },
  { icon: Award, label: "ICT Internship Experience" },
];

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="text-xs font-mono text-brand mb-4 tracking-wider">
              05 — CERTIFICATIONS
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Credentials & milestones.
            </h2>
            <p className="text-muted-foreground">
              Verified expertise in endpoint security and a track record of academic and
              professional achievement.
            </p>

            <div className="mt-8 p-6 rounded-2xl border border-brand/30 bg-gradient-to-br from-brand/10 to-transparent">
              <div className="flex items-start gap-4">
                <div className="size-14 rounded-xl bg-gradient-brand grid place-items-center shadow-glow shrink-0">
                  <ShieldCheck className="size-7 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs font-mono text-brand mb-1">CISCO</div>
                  <h3 className="text-xl font-semibold">Cisco Endpoint Security</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Certified in modern endpoint protection, threat detection and
                    incident response.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-5">
                {competencies.map((c) => (
                  <span
                    key={c}
                    className="text-xs px-2.5 py-1 rounded-md bg-surface border border-border font-mono text-muted-foreground"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-3">
            {achievements.map((a, i) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="p-5 rounded-xl border border-border bg-gradient-card flex items-center gap-3 hover:border-brand/40 transition-colors"
              >
                <div className="size-10 rounded-lg bg-brand/10 border border-brand/20 grid place-items-center shrink-0">
                  <a.icon className="size-4 text-brand" />
                </div>
                <div className="text-sm font-medium">{a.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
