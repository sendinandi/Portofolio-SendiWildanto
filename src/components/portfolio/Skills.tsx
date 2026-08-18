import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { skillGroups } from "./data";

export function Skills() {
  return (
    <section id="skills" className="border-t py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Toolkit"
          title="Skills"
          subtitle="Tools and methods I use across analytics, reporting, and system design work."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 70}>
              <div className="surface-card h-full p-6">
                <h3 className="text-sm font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border bg-surface px-2.5 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
