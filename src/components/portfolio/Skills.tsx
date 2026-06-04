import { motion } from "motion/react";
import { Code2, Server, Network, ShieldCheck } from "lucide-react";

const groups = [
  {
    icon: Code2,
    title: "Software Development",
    accent: "from-blue-500/20 to-cyan-500/10",
    skills: [
      { name: "C#", level: 90 },
      { name: "ASP.NET", level: 88 },
      { name: "Java", level: 82 },
      { name: "Python", level: 85 },
      { name: "C++", level: 78 },
      { name: "SQL Server", level: 86 },
      { name: "JavaScript", level: 80 },
      { name: "Git", level: 90 },
      { name: "HTML", level: 92 },
      { name: "AI Development", level: 75 },
    ],
  },
  {
    icon: Server,
    title: "IT Support & Systems",
    accent: "from-indigo-500/20 to-blue-500/10",
    skills: [
      { name: "Microsoft 365", level: 92 },
      { name: "Exchange Online", level: 85 },
      { name: "SharePoint", level: 82 },
      { name: "Teams Administration", level: 88 },
      { name: "Azure AD / Entra ID", level: 85 },
      { name: "User Management", level: 90 },
      { name: "Access Control", level: 87 },
      { name: "Helpdesk Support", level: 93 },
      { name: "Asset Management", level: 85 },
    ],
  },
  {
    icon: Network,
    title: "Networking",
    accent: "from-cyan-500/20 to-teal-500/10",
    skills: [
      { name: "LAN", level: 88 },
      { name: "WAN", level: 82 },
      { name: "VPN", level: 85 },
      { name: "DNS", level: 86 },
      { name: "DHCP", level: 86 },
      { name: "VLAN", level: 80 },
      { name: "Network Troubleshooting", level: 88 },
      { name: "Ubiquiti", level: 82 },
    ],
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    accent: "from-violet-500/20 to-blue-500/10",
    skills: [
      { name: "Endpoint Security", level: 88 },
      { name: "EDR", level: 84 },
      { name: "DLP", level: 80 },
      { name: "Encryption", level: 82 },
      { name: "Incident Response", level: 80 },
      { name: "Security Awareness", level: 88 },
      { name: "Compliance", level: 80 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-mono text-brand mb-4 tracking-wider">
            02 - TECHNICAL SKILLS
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            A full-stack technologist.
          </h2>
          <p className="text-muted-foreground text-lg">
            From writing production code to administering the infrastructure it runs on.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {groups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="relative p-8 rounded-3xl border border-border bg-gradient-card overflow-hidden"
            >
              <div
                className={`absolute -top-20 -right-20 size-60 rounded-full bg-gradient-to-br ${group.accent} blur-3xl pointer-events-none`}
              />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="size-11 rounded-xl bg-brand/10 border border-brand/20 grid place-items-center">
                    <group.icon className="size-5 text-brand" />
                  </div>
                  <h3 className="text-xl font-semibold">{group.title}</h3>
                </div>

                <div className="space-y-3">
                  {group.skills.map((s, i) => (
                    <div key={s.name}>
                      <div className="flex items-center justify-between text-sm mb-1.5">
                        <span className="font-medium">{s.name}</span>
                        <span className="text-xs text-muted-foreground font-mono">
                          {s.level}%
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full bg-surface overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.1 + i * 0.03, ease: "easeOut" }}
                          className="h-full bg-gradient-brand rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
