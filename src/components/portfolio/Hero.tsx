import { motion } from "motion/react";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero"
    >
      <img
        src={heroBg}
        alt=""
        aria-hidden
        width={1920}
        height={1280}
        className="absolute inset-0 size-full object-cover opacity-30"
      />
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 -left-32 size-96 rounded-full bg-brand/30 blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 -right-32 size-96 rounded-full bg-brand-glow/20 blur-[120px] animate-glow-pulse" />

      <div className="relative max-w-7xl mx-auto px-6 py-32 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface/60 backdrop-blur text-xs font-medium text-muted-foreground mb-8">
            <Sparkles className="size-3.5 text-brand" />
            Available for opportunities - South Africa & Remote
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
            Mhlenge Kenneth
            <br />
            <span className="text-gradient-brand">Mathenjwa</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground font-medium mb-4 max-w-3xl">
            Junior Software Developer <span className="text-brand">·</span> Junior IT Technician{" "}
            <span className="text-brand">·</span> Systems & Network Infrastructure
          </p>

          <p className="text-base sm:text-lg text-muted-foreground/90 leading-relaxed max-w-2xl mb-10">
            Computer Science & IT graduate with hands-on experience in software development,
            Microsoft 365 administration, network support, cybersecurity, systems
            administration, and enterprise IT operations.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button asChild variant="brand" size="lg">
              <a href="#projects">
                View Projects <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/cv.pdf" download>
                <Download className="size-4" /> Download CV
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href="#contact">
                <Mail className="size-4" /> Contact Me
              </a>
            </Button>
          </div>

          {/* Stat strip */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl">
            {[
              { v: "BSc", l: "Computer Science & IT" },
              { v: "1+", l: "Years of Experience" },
              { v: "5", l: "Projects Delivered" },
              { v: "Cisco", l: "Certified Professional" },
            ].map((s) => (
              <div key={s.l} className="border-l-2 border-brand/60 pl-4">
                <div className="font-display text-2xl font-bold">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
