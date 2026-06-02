import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work — Ryan Casey",
};

interface Project {
  name: string;
  description: string;
  stack: string[];
  links?: { label: string; href: string }[];
  gif?: string;
  video?: string;
  noGif?: boolean;
}

const personal: Project[] = [
  {
    name: "filmprint",
    video: "filmprint_demo3_wa3cml",
    description:
      "A movie recommendation engine built around your Letterboxd history. Syncs your ratings and watchlist, builds a taste profile from genre affinity, keyword clusters, and critic alignment, then ranks your watchlist by predicted enjoyment. Built end-to-end — data pipeline, ML inference, and web app.",
    stack: ["Python", "FastAPI", "Next.js", "TypeScript", "PostgreSQL", "Redis", "ONNX"],
    links: [
      { label: "GitHub", href: "https://github.com/rcaseyx/filmprint" },
      { label: "Live", href: "https://myfilmprint.com" },
    ],
  },
];

const professional: Project[] = [
  {
    name: "Homepage Personalization",
    description:
      "Built mailchimp.com's first personalization system for prospective visitors. Captures preferences on first visit and immediately updates homepage content client-side — loading only what each visitor actually sees. Still running in production.",
    stack: ["TypeScript", "React", "PHP", "Contentful"],
    video: "pzn_demo2_sbssnu",
  },
  {
    name: "Homepage Redesign",
    description:
      "Led engineering on a 14-module redesign of mailchimp.com's homepage. Coordinated across marketing, product, and design to phase overlapping A/B tests so the data stayed clean without slowing the launch timeline.",
    stack: ["TypeScript", "React", "PHP", "Contentful"],
    video: "hp_redesign_ebsoct",
  },
  {
    name: "Interactive Product Demo",
    description:
      "Led a 3-engineer team building a React module that walks prospective customers through creating a live email campaign in real time. Shipped to mailchimp.com and drove $280K+ in incremental annual booking revenue.",
    stack: ["TypeScript", "React", "PHP", "Contentful"],
    video: "product_demo_demo_b4qnxu",
  },
];

const CLOUD = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

function gifUrl(publicId: string): string {
  return `https://res.cloudinary.com/${CLOUD}/image/upload/f_auto,q_auto/${publicId}`;
}

function videoUrl(publicId: string): string {
  return `https://res.cloudinary.com/${CLOUD}/video/upload/q_auto/${publicId}.mp4`;
}

function videoPosterUrl(publicId: string): string {
  return `https://res.cloudinary.com/${CLOUD}/video/upload/q_auto,so_auto/${publicId}.jpg`;
}

function GifSlot({ gif, video, noGif }: { gif?: string; video?: string; noGif?: boolean }) {
  if (noGif) return null;
  if (video) {
    return (
      <div className="w-full overflow-hidden mb-6">
        <video
          controls
          muted
          playsInline
          poster={videoPosterUrl(video)}
          className="w-full"
        >
          <source src={videoUrl(video)} type="video/mp4" />
        </video>
      </div>
    );
  }
  if (gif) {
    return (
      <div className="w-full aspect-video overflow-hidden mb-6">
        <img src={gifUrl(gif)} alt="" className="w-full h-full object-cover" />
      </div>
    );
  }
  return (
    <div className="w-full aspect-video bg-[var(--color-bg-raised)] border border-[var(--color-border)] flex items-center justify-center mb-6">
      <span className="text-xs uppercase tracking-widest text-[var(--color-text-muted)]">
        Coming soon
      </span>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="border-t border-[var(--color-border)] pt-10">
      <GifSlot gif={project.gif} video={project.video} noGif={project.noGif} />
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-4">
        <h3 className="font-[family-name:var(--font-display)] text-3xl font-light text-[var(--color-text)]">
          {project.name}
        </h3>
        {project.links && (
          <div className="flex items-center gap-4">
            {project.links.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.15em] text-[var(--color-accent)] hover:text-[var(--color-text)] transition-colors"
              >
                {label} ↗
              </Link>
            ))}
          </div>
        )}
      </div>
      <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-5 max-w-2xl">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span
            key={s}
            className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] border border-[var(--color-border)] px-3 py-1"
          >
            {s}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">

      <section className="mb-24">
        <h2 className="font-[family-name:var(--font-display)] text-5xl font-light text-[var(--color-text)] mb-16">
          Projects
        </h2>
        <div className="flex flex-col gap-16">
          {personal.map((p) => <ProjectCard key={p.name} project={p} />)}
        </div>
      </section>

      <section>
        <div className="mb-16">
          <h2 className="font-[family-name:var(--font-display)] text-5xl font-light text-[var(--color-text)] mb-3">
            Professional Work
          </h2>
          <p className="text-sm text-[var(--color-text-muted)]">
            Selected work from Intuit Mailchimp. Code is proprietary — shown here as recorded demos.
          </p>
        </div>
        <div className="flex flex-col gap-16">
          {professional.map((p) => <ProjectCard key={p.name} project={p} />)}
        </div>
      </section>

    </div>
  );
}
