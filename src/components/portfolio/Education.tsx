import { GraduationCap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { education } from "./data";

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 border-t py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading eyebrow="Academic Background" title="Education" />

        <div className="mt-10">
          <Reveal>
            <div className="surface-card flex flex-col gap-5 p-6 sm:flex-row sm:items-start md:p-8">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                <GraduationCap className="size-6" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-navy">{education.school}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{education.degree}</p>
                <p className="mt-3 text-xs text-muted-foreground">
                  {education.period} · {education.gpa}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
