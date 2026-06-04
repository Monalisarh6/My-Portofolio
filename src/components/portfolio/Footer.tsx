import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="size-9 rounded-lg bg-gradient-brand grid place-items-center font-display font-bold text-primary-foreground">
                M
              </div>
              <span className="font-display font-semibold">
                Mhlenge K. Mathenjwa
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Building reliable software, supporting enterprise technology, and solving
              real-world business problems through innovation.
            </p>
          </div>

          <div className="flex md:justify-center gap-3">
            {[
              { icon: Github, href: "https://github.com/" },
              { icon: Linkedin, href: "https://linkedin.com/" },
              { icon: Mail, href: "mailto:mhlenge.mathenjwa@example.com" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label="social"
                className="size-10 rounded-lg border border-border grid place-items-center text-muted-foreground hover:text-brand hover:border-brand transition-colors"
              >
                <s.icon className="size-4" />
              </a>
            ))}
          </div>

          <div className="md:text-right text-xs text-muted-foreground">
            <div>© {new Date().getFullYear()} Mhlenge Kenneth Mathenjwa.</div>
            <div className="mt-1">Designed & built with precision.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
