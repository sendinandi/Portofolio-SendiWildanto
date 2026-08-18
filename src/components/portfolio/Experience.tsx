import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { experiences } from "./data";

export function Experience() {
  return (
    <section id="experience" className="border-t py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Career"
          title="Experience"
          subtitle="Analytics and business intelligence work in banking and public sector environments."
        />

        <div className="mt-12 grid gap-6">
          {experiences.map((exp, i) => (
            <Reveal key={exp.role} delay={i * 90}>
              <article className="surface-card grid gap-6 p-6 transition-shadow duration-300 hover:shadow-[var(--shadow-lift)] md:grid-cols-12 md:p-8">
                <div className="md:col-span-4">
                  <p className="text-xs font-medium tracking-wide text-primary">{exp.period}</p>
                  <h3 className="mt-2 text-lg font-semibold text-navy">{exp.role}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{exp.company}</p>
                </div>
                <div className="md:col-span-8">
                  <ul className="space-y-2.5">
                    {exp.points.map((p) => (
                      <li
                        key={p}
                        className="relative pl-5 text-sm leading-relaxed text-muted-foreground before:absolute before:top-2 before:left-0 before:size-1.5 before:rounded-full before:bg-teal"
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="font-medium">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
