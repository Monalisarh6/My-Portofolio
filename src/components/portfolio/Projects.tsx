import { useState } from "react";
import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";
import pos from "@/assets/project-pos.jpg";

import quiz from "@/assets/project-quiz.jpg";

type Category = "All" | "Web" | "Game" | "IT";

const projects = [
  {
    title: "Enterprise Point of Sale & Inventory System",
    category: "Web" as Category,
    image: pos,
    description:
      "Full-stack enterprise POS with authentication, role-based access control, inventory tracking and a reporting dashboard built for retail operations.",
    tech: ["ASP.NET", "C#", "SQL Server", "Bootstrap"],
    challenges:
      "Designed a normalised SQL Server schema and role-based authorisation to enforce least-privilege access across cashiers, managers and admins.",
    impact:
      "Cut manual stock reconciliation time and delivered real-time visibility of sales and inventory.",
    github: "https://github.com/",
    demo: "#",
  },
  {
    title: "Real-Time Chat Application",
    category: "Web" as Category,
    image: pos,
    description:
      "Full-stack real-time chat application built with Spring Boot (Java) exposing a structured RESTful backend, with persistent storage via Supabase.",
    tech: ["Java", "Spring Boot", "Supabase", "REST API"],
    challenges:
      "Designed a scalable RESTful backend in Spring Boot and integrated Supabase for persistent storage, applying a disciplined, test-driven development approach.",
    impact:
      "Deployed to a cloud environment with continuous availability, delivering a responsive real-time messaging experience accessible from any browser.",
    github: "https://github.com/",
    demo: "#",
  },
  {
    title: "AI Career Advisory Chatbot",
    category: "Web" as Category,
    image: pos,
    description:
      "Analysed user requirements and developed an AI-powered career advisory chatbot in Python, integrating the OpenAI API and implementing natural language processing with spaCy to interpret user input and generate contextually relevant advisory responses.",
    tech: ["Python", "OpenAI API", "Streamlit", "spaCy", "NLP"],
    challenges:
      "Designed and customised the application to meet specific client-facing requirements, optimising the conversational interface for usability and response accuracy. Deployed the application via Streamlit's cloud platform, performing routine performance tests, monitoring application behaviour, and implementing corrections to resolve defects and improve stability. Implemented API security best practices including key management and authenticated endpoint access. Documented application architecture, API integration procedures, setup instructions, and usage guides, producing clear technical documentation aligned to professional software delivery standards.",
    impact:
      "Delivered a secure, well-documented AI career advisory chatbot with an optimised conversational interface and robust API security practices.",
    github: "https://github.com/",
    demo: "#",
  },
  {
    title: "Real-Deal Soccer Quiz",
    category: "Game" as Category,
    image: quiz,
    description:
      "Object-oriented desktop quiz game with custom GUI, scoring system and modular question pools, built in C++ using the SFML graphics library.",
    tech: ["C++", "SFML", "OOP"],
    challenges:
      "Implemented an OOP architecture with separated concerns for rendering, input, game state and persistence of scores.",
    impact:
      "Demonstrated low-level engineering skills and applied design patterns in a real interactive product.",
    github: "https://github.com/",
    demo: "#",
  },
];

const filters: Category[] = ["All", "Web", "Game"];

export function Projects() {
  const [filter, setFilter] = useState<Category>("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-mono text-brand mb-4 tracking-wider">
              04 - FEATURED PROJECTS
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Selected work.
            </h2>
            <p className="text-muted-foreground text-lg">
              Production-minded projects across web, AI and systems engineering.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 p-1 rounded-full border border-border bg-surface">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all ${
                  filter === f
                    ? "bg-gradient-brand text-primary-foreground shadow-glow"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {visible.map((p, i) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-3xl border border-border bg-gradient-card overflow-hidden hover:border-brand/50 transition-all hover:-translate-y-1 shadow-card-soft hover:shadow-elevated"
            >
              <div className="aspect-[16/10] overflow-hidden border-b border-border">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="size-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <span className="text-xs font-mono text-brand px-2 py-0.5 rounded-full bg-brand/10 border border-brand/20 shrink-0">
                    {p.category}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {p.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-3 mb-5">
                  <div className="text-xs">
                    <div className="text-brand font-mono mb-1">CHALLENGE</div>
                    <p className="text-muted-foreground leading-relaxed">
                      {p.challenges}
                    </p>
                  </div>
                  <div className="text-xs">
                    <div className="text-brand font-mono mb-1">IMPACT</div>
                    <p className="text-muted-foreground leading-relaxed">{p.impact}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md bg-surface border border-border text-muted-foreground font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md border border-border hover:border-brand hover:text-brand transition-colors"
                  >
                    <Github className="size-3.5" /> Code
                  </a>
                  <a
                    href={p.demo}
                    className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md bg-brand/10 border border-brand/20 text-brand hover:bg-brand/20 transition-colors"
                  >
                    <ExternalLink className="size-3.5" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
