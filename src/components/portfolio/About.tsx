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
              01 - ABOUT ME
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Bridging software and infrastructure.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a Computer Science & IT graduate from the University of KwaZulu-Natal
                with a passion for building reliable software and supporting the
                technology that powers modern organisations.
              </p>
              <p>
                My experience spans software development, Microsoft 365 administration,
                network support, endpoint security, and systems administration. I've
                worked in enterprise environments supporting users, managing technology
                assets, troubleshooting infrastructure, and helping maintain secure and
                efficient IT operations.
              </p>
              <p>
                With a foundation in both development and IT, I'm equally comfortable
                building applications with C#, ASP.NET, and Python as I am diagnosing
                network issues, managing user access, or improving operational
                efficiency through technology.
              </p>
              <p>
                I enjoy solving complex problems, learning new technologies, and
                creating solutions that deliver real value to users and organisations.
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
