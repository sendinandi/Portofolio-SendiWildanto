import { Award, GraduationCap, Users } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { certifications } from "./data";

export function Certifications() {
  return (
    <section id="certifications" className="border-t bg-card py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading eyebrow="Credentials" title="Certifications" />

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
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        View certificate
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-lg">
                      <DialogHeader>
                        <DialogTitle>{cert.name}</DialogTitle>
                        <DialogDescription>
                          {cert.issuer} · {cert.issued}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="flex aspect-[4/3] items-center justify-center rounded-lg border bg-surface p-6 text-center text-sm text-muted-foreground">
                        Certificate image can be added here.
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <Reveal>
            <div id="education" className="surface-card h-full p-6 scroll-mt-24">
              <span className="flex size-10 items-center justify-center rounded-lg bg-accent text-primary">
                <GraduationCap className="size-5" />
              </span>
              <h3 className="mt-5 text-base font-semibold text-navy">
                Universitas Pembangunan Nasional &ldquo;Veteran&rdquo; Jakarta
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">Bachelor of Information Systems</p>
              <p className="mt-3 text-xs text-muted-foreground">
                Aug 2022 – Aug 2026 · GPA 3.86/4.00
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="surface-card h-full p-6">
              <span className="flex size-10 items-center justify-center rounded-lg bg-accent text-primary">
                <Users className="size-5" />
              </span>
              <h3 className="mt-5 text-base font-semibold text-navy">KSM Cyber Security</h3>
              <p className="mt-1 text-sm text-muted-foreground">Head of Academic Division</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Coordinated academic programs and learning activities, mentored members, and helped
                grow an active cybersecurity community on campus.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
