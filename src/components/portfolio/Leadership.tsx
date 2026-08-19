import { Users } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { organizations } from "./data";

export function Leadership() {
  return (
    <section id="leadership" className="scroll-mt-24 border-t bg-card py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Beyond Work"
          title="Leadership & Organizations"
          subtitle="Organizational roles and community involvement during my studies."
        />

        <div className="mt-10 grid gap-5">
          {organizations.map((org, i) => (
            <Reveal key={org.name} delay={i * 80}>
              <div className="surface-card grid gap-5 p-6 md:grid-cols-12 md:p-8">
                <div className="md:col-span-4">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-accent text-primary">
                    <Users className="size-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-navy">{org.name}</h3>
                  <p className="mt-1 text-sm text-primary">{org.role}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{org.period}</p>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground md:col-span-8">
                  {org.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
