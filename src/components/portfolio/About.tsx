import { BarChart3, LayoutDashboard, Workflow } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const cards = [
  {
    icon: BarChart3,
    title: "Data Analytics",
    text: "Data cleaning, exploratory analysis, visualization, and insight generation.",
  },
  {
    icon: LayoutDashboard,
    title: "Business Intelligence",
    text: "Interactive dashboards, KPI monitoring, reporting, and decision support.",
  },
  {
    icon: Workflow,
    title: "System Analysis",
    text: "Requirements analysis, business process modeling, database design, and system development.",
  },
];

export function About() {
  return (
    <section id="about" className="border-t bg-card py-20 md:py-28">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Profile" title="About Me" />
          </div>
          <Reveal className="lg:col-span-7">
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                I am an Information Systems graduate from Universitas Pembangunan Nasional
                &ldquo;Veteran&rdquo; Jakarta, with a focus on data analytics, business
                intelligence, and system analysis &mdash; where data, technology, and decisions come
                together.
              </p>
              <p>
                Through internships and real-world projects, I have worked with raw and build build
                build dashboards, generate insights, and develop monitoring systems that support
                real-world needs. I enjoy the full process: understanding business requirements,
                requirements, requirements, preparing and analyzing data, designing solutions, and
                turning ideas into practical technical implementations.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-14">
          <h3 className="text-sm font-semibold tracking-[0.14em] text-muted-foreground uppercase">
            What I Bring
          </h3>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {cards.map((card, i) => (
              <Reveal key={card.title} delay={i * 90}>
                <div className="surface-card h-full p-6 transition-shadow duration-300 hover:shadow-[var(--shadow-lift)]">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-accent text-primary">
                    <card.icon className="size-5" />
                  </span>
                  <h4 className="mt-5 text-lg font-semibold text-navy">{card.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
