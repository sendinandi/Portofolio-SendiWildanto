import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { CV_URL, EMAIL, GITHUB_URL, LINKEDIN_URL } from "./data";

export function Contact() {
  return (
    <section id="contact" className="border-t py-20 md:py-28">
      <div className="section-shell">
        <Reveal>
          <div className="surface-card px-6 py-12 text-center md:px-16 md:py-16">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-primary uppercase">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">Let&rsquo;s Connect</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Interested in data analytics, business intelligence, or technology projects? Feel free
              to connect with me.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild>
                <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
                  <Linkedin className="size-4" />
                  LinkedIn
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={GITHUB_URL} target="_blank" rel="noreferrer">
                  <Github className="size-4" />
                  GitHub
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={`mailto:${EMAIL}`}>
                  <Mail className="size-4" />
                  Email
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={CV_URL} download>
                  <Download className="size-4" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>

      <footer className="section-shell mt-16 flex flex-col items-center justify-between gap-3 border-t pt-8 text-xs text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Sendi Wildanto. All rights reserved.</p>
        <p>Data Analytics · Business Intelligence · System Analysis</p>
      </footer>
    </section>
  );
}
