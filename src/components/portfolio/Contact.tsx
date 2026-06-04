import { useState } from "react";
import { motion } from "motion/react";
import { z } from "zod";
import { Mail, Phone, Linkedin, Github, Download, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(150),
  message: z.string().trim().min(10, "Tell me a little more").max(2000),
});

const contacts = [
  { icon: Mail, label: "Email", value: "mhlengemathenjwa@gmail.com", href: "mailto:mhlengemathenjwa@gmail.com" },
  { icon: Phone, label: "Phone", value: "076 835 0022", href: "tel:+27768350022" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/mhlenge-mathenjwa-3aa609255", href: "https://www.linkedin.com/in/mhlenge-mathenjwa-3aa609255" },
  { icon: Github, label: "GitHub", value: "github.com/mhlenge", href: "https://github.com/" },
];

export function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast.success("Message sent! I'll get back to you within 24 hours.");
      (e.target as HTMLFormElement).reset();
      setLoading(false);
    }, 800);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-xs font-mono text-brand mb-4 tracking-wider">
              07 — CONTACT
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Let's build something solid.
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Open to roles in Software Development, IT Support, Systems Administration,
              Infrastructure Support, Cloud Administration and Cybersecurity.
            </p>

            <div className="space-y-3 mb-8">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-xl border border-border bg-gradient-card hover:border-brand/50 transition-all"
                >
                  <div className="size-10 rounded-lg bg-brand/10 border border-brand/20 grid place-items-center group-hover:bg-brand/20 transition-colors">
                    <c.icon className="size-4 text-brand" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs text-muted-foreground">{c.label}</div>
                    <div className="font-medium truncate">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <Button asChild variant="brand" size="lg">
              <a href="/cv.pdf" download>
                <Download className="size-4" /> Download Full CV
              </a>
            </Button>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            onSubmit={onSubmit}
            className="p-8 rounded-3xl border border-border bg-gradient-card space-y-5 shadow-card-soft"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Your full name" required maxLength={100} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="you@company.com" required maxLength={255} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" name="subject" placeholder="Role opportunity / project / consult" required maxLength={150} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell me about the role, project or problem you'd like to solve..."
                required
                maxLength={2000}
              />
            </div>
            <Button type="submit" variant="brand" size="lg" disabled={loading} className="w-full">
              {loading ? "Sending..." : <>Send Message <Send className="size-4" /></>}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
