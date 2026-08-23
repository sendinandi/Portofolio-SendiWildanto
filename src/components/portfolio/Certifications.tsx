import { ArrowUpRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { certifications } from "./data";

export function Certifications() {
  return (
    <section id="certifications" className="border-t bg-card py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications"
          subtitle="Professional certificates in data analytics and database querying."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {certifications.map((cert, i) => (
            <Reveal key={cert.name} delay={i * 80}>
              <div className="surface-card flex h-full flex-col p-6">
                <div className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                    <Award className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-navy">{cert.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      {cert.issued} · {cert.expires}
                    </p>
                  </div>
                </div>
                <div className="mt-5">
                  {cert.url && (
                    <Button asChild variant="outline" size="sm">
                      <a href={cert.url} target="_blank" rel="noreferrer">
                        View Certificate
                        <ArrowUpRight className="size-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
