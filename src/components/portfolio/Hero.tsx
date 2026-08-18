import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-analytics.jpg";
import { CV_URL, EMAIL, GITHUB_URL, LINKEDIN_URL } from "./data";

const stats = [
  { value: "3.86", label: "GPA / 4.00" },
  { value: "2", label: "Analytics internships" },
  { value: "6+", label: "Data & BI projects" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-accent/60 to-transparent"
      />
      <div className="section-shell relative grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <p className="text-[11px] font-semibold tracking-[0.18em] text-primary uppercase">
            Data Analytics • Business Intelligence • System Analysis
          </p>
          <h1 className="mt-5 text-4xl leading-[1.08] font-semibold text-navy sm:text-5xl">
            Turning Data Into Insights, Systems Into Solutions.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            I&rsquo;m Sendi Wildanto, an Information Systems graduate with hands-on experience in
            data analytics, business intelligence, dashboard development, and information systems.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href="#projects">
                View My Work
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={CV_URL} download>
                <Download className="size-4" />
                Download CV
              </a>
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-2">
            {[
              { href: LINKEDIN_URL, icon: Linkedin, label: "LinkedIn" },
              { href: GITHUB_URL, icon: Github, label: "GitHub" },
              { href: `mailto:${EMAIL}`, icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="flex size-10 items-center justify-center rounded-lg border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t pt-6">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-2xl font-semibold text-navy">{s.value}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-6">
          <div className="surface-card overflow-hidden p-2 sm:p-3">
            <img
              src={heroImage}
              alt="Business intelligence dashboard with KPI tiles, trend lines and distribution charts"
              width={1200}
              height={1200}
              className="w-full rounded-lg"
            />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {["Power BI & Tableau", "Python & SQL", "Streamlit Apps"].map((item) => (
              <div
                key={item}
                className="surface-card px-4 py-3 text-xs font-medium text-muted-foreground"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
