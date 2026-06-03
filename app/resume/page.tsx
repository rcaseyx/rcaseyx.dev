import type { Metadata } from "next";
import PrintButton from "./print-button";

export const metadata: Metadata = {
  title: "Resume — Ryan Casey",
};

const experience = [
  {
    company: "Intuit Mailchimp",
    location: "Atlanta, GA",
    role: "Senior Software Engineer",
    period: "Nov 2022 – Present",
    bullets: [
      "Shipped across six product surfaces on mailchimp.com — sign-up and activation, marketing campaigns, store and pricing, developer docs, brand content, and homepage personalization",
      "Architected mailchimp.com's first real-time personalization system — captured intent signals on first visit and immediately rendered personalized content client-side, loading only what each visitor actually sees; deployed to production with performance-aware delivery",
      "Led a 14-module homepage redesign — worked with product, design, and data partners to sequence overlapping A/B tests, instrumenting each module via GTM and GA4 so variant signals stayed isolated and results read out cleanly",
      "Led 3-engineer team that built an interactive product demo React module — guided users through creating a live email campaign from initial design to launch, driving $280K+ incremental annual booking revenue",
      "Owned features from technical design through instrumented experimentation and launch — scoped as stacked PR chains for independent review at each stage",
      "Identified workflow bottlenecks and shipped 15 AI-powered automation tools spanning Jira, GitHub, Slack, and Google Calendar — led a multi-PR initiative to abstract 5 as configurable, team-agnostic tools and ship them into Mailchimp's shared org-installer for cross-team adoption",
      "Mentored teammates on React patterns, accessibility, and PR sizing; ran sprint ceremonies covering planning, refinement, and capacity",
      "On-call rotation for mailchimp.com — triaged and responded to site-impacting incidents; contributed to weekly operational reviews covering performance metrics and uptime",
    ],
  },
  {
    company: "Cognizant Softvision",
    location: "Atlanta, GA",
    role: "Software Engineer II",
    period: "May 2020 – Nov 2022",
    note: "Embedded consultant on Intuit Mailchimp's Dotcom team; hired FTE Nov 2022",
    bullets: [
      "Rebuilt major portions of mailchimp.com and Mailchimp Presents using React, PHP, and Contentful",
      "Onboarding lead for new contractors and incoming Mailchimp FTEs",
      "Automated CMS workflows with custom Contentful tooling",
    ],
  },
  {
    company: "NCR Corporation (via Tin Roof Software)",
    location: "Atlanta, GA",
    role: "Software Engineer I",
    period: "March 2019 – May 2020",
    bullets: [
      "Built features on NCR's React/Node.js online ordering platform, used by major retail brands",
      "One of four engineers with merge approval; contributed architectural input on shared frontend components",
    ],
  },
  {
    company: "Seller Labs",
    location: "Athens, GA",
    role: "Production Support Engineer / QA Analyst",
    period: "April 2017 – March 2019",
    bullets: [],
  },
];

const skills = [
  { label: "Languages & Frameworks", items: "TypeScript · JavaScript (ES6+) · React · Next.js · PHP · Node.js · LESS/CSS · GraphQL" },
  { label: "Testing", items: "Jest · PHPUnit" },
  { label: "CMS & Platforms", items: "Contentful · GitHub Enterprise · Jira" },
  { label: "Experimentation", items: "Optimizely · feature-flag rollout · A/B test instrumentation" },
  { label: "Practices", items: "Accessibility (WCAG) · Agile/Scrum · AI-assisted engineering" },
];

const projects = [
  {
    name: "Homepage Personalization",
    period: "Mailchimp, late 2025–present",
    description: "Architected mailchimp.com's first real-time personalization system — captures intent signals on first visit and immediately renders personalized content client-side, loading only what each visitor actually sees with performance-aware delivery.",
  },
  {
    name: "Interactive Product Demo",
    period: "Mailchimp, 2024",
    description: "Led a 3-engineer team building a React module that guides users through creating a live email campaign end to end. $280K+ incremental annual booking revenue.",
  },
  {
    name: "AI Engineering Workflow",
    period: "Mailchimp, 2026",
    description: "Identified workflow bottlenecks and shipped 15 AI-powered tools spanning Jira, GitHub, Slack, and Google Calendar; led a multi-PR initiative to abstract 5 as configurable, team-agnostic tools and ship them into Mailchimp's shared org-installer for cross-team adoption.",
  },
];

const education = [
  { school: "University of Georgia", detail: "B.S., Management Information Systems · 2016 · GPA: 3.42" },
  { school: "Thinkful", detail: "Full Stack Flex (JavaScript / React / Node.js) · 2019" },
];

export default function Resume() {
  return (
    <div className="animate-card-in max-w-4xl mx-auto px-6 py-20 print:py-2" style={{ animationDelay: "100ms" }}>

      {/* Header */}
      <div className="mb-16 pb-10 print:mb-4 print:pb-4 border-b border-[var(--color-border)]">
        <div className="flex items-start justify-between mb-6 print:mb-2">
          <h1 className="font-[family-name:var(--font-display)] text-6xl font-light text-[var(--color-text)] print:text-4xl">
            Ryan Casey
          </h1>
          <PrintButton />
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-[var(--color-text-muted)]">
          <span>rcaseyx@gmail.com</span>
          <span>770-402-8881</span>
          <span>Atlanta, GA</span>
          <a
            href="https://www.linkedin.com/in/ryancaseycode/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-text)] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/rcaseyx"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-text)] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://rcaseyx.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-text)] transition-colors"
          >
            rcaseyx.dev
          </a>
        </div>
        <p className="mt-5 text-sm text-[var(--color-text-muted)] leading-relaxed max-w-2xl">
          Senior frontend/fullstack engineer with 6+ years of experience. Specializes in React/TypeScript, shipping polished products at scale, and building tooling that engineering teams adopt.
        </p>
      </div>

      {/* Experience */}
      <section className="mb-16 print:mb-4">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-light text-[var(--color-text)] mb-10 print:mb-3 uppercase tracking-widest">
          Experience
        </h2>
        <div className="flex flex-col gap-12 print:gap-4">
          {experience.map((job) => (
            <div key={job.company}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1 print:mb-0">
                <span className="font-medium text-[var(--color-text)]">{job.company}</span>
                <span className="text-xs text-[var(--color-text-muted)] uppercase tracking-widest">{job.location}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3 print:mb-1">
                <span className="text-sm text-[var(--color-text-muted)]">{job.role}</span>
                <span className="text-xs text-[var(--color-text-muted)]">{job.period}</span>
              </div>
              {job.note && (
                <p className="text-xs italic text-[var(--color-text-muted)] mb-3">{job.note}</p>
              )}
              {job.bullets.length > 0 && (
                <ul className="list-disc pl-5 space-y-1.5 print:space-y-0.5">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="text-sm text-[var(--color-text)] leading-relaxed">
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-16 pb-16 print:mb-4 print:pb-4 border-b border-[var(--color-border)]">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-light text-[var(--color-text)] mb-10 print:mb-3 uppercase tracking-widest">
          Skills
        </h2>
        <div className="flex flex-col gap-4 print:gap-2">
          {skills.map((s) => (
            <div key={s.label} className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-2 sm:gap-6 items-start">
              <span className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] pt-1">{s.label}</span>
              <div className="flex flex-wrap gap-1.5">
                {s.items.split(' · ').map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2 py-0.5 rounded-sm bg-[var(--color-bg-raised)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Projects */}
      <section className="mb-16 pb-16 print:mb-4 print:pb-4 border-b border-[var(--color-border)]">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-light text-[var(--color-text)] mb-10 print:mb-3 uppercase tracking-widest">
          Key Projects
        </h2>
        <div className="flex flex-col gap-8 print:gap-4">
          {projects.map((p) => (
            <div key={p.name}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2 print:mb-1">
                <span className="font-medium text-[var(--color-text)]">{p.name}</span>
                <span className="text-xs text-[var(--color-text-muted)]">{p.period}</span>
              </div>
              <p className="text-sm text-[var(--color-text)] leading-relaxed pl-4 border-l border-[var(--color-border)]">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-light text-[var(--color-text)] mb-10 print:mb-3 uppercase tracking-widest">
          Education
        </h2>
        <div className="flex flex-col gap-4 print:gap-2">
          {education.map((e) => (
            <div key={e.school} className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-1 sm:gap-6">
              <span className="font-medium text-[var(--color-text)]">{e.school}</span>
              <span className="text-sm text-[var(--color-text-muted)]">{e.detail}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
