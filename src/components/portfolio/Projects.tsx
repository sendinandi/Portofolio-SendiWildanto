import { ArrowUpRight, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { projects } from "./data";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="border-t bg-card py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Work"
          subtitle="Selected projects in data analytics, business intelligence, system analysis, and intelligent web applications."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 80}
              className={cn(i === 0 && "md:col-span-2 lg:col-span-2")}
            >
              <ProjectCard project={p} prominent />
            </Reveal>
          ))}
          {rest.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  prominent = false,
}: {
  project: (typeof projects)[number];
  prominent?: boolean;
}) {
  return (
    <article className="surface-card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
      <div className="overflow-hidden border-b bg-surface">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          width={1024}
          height={640}
          className={cn(
            "w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]",
            prominent ? "h-52 sm:h-60" : "h-44",
          )}
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[11px] font-semibold tracking-[0.12em] text-primary uppercase">
          {project.category}
        </p>
        <h3 className={cn("mt-3 font-semibold text-navy", prominent ? "text-xl" : "text-lg")}>
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Badge key={t} variant="secondary" className="font-medium">
              {t}
            </Badge>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-2 pt-1">
          {project.url && (
            <Button asChild size="sm" variant="outline">
              <a href={project.url} target="_blank" rel="noreferrer">
                View Project
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
          )}

          {project.githuburl && (
            <Button asChild size="sm" variant="ghost">
              <a
                href={project.githuburl}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub repository"
              >
                <Github className="size-4" />
                GitHub
              </a>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
