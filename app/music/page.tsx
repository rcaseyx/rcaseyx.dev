import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Music — Ryan Casey",
  description: "Music by Ryan Casey.",
};

interface FeaturedRelease {
  title: string;
  artist: string;
  year: string;
  embedSrc: string;
  bandcampUrl: string;
  photo?: string;
}

interface CompactRelease {
  artist: string;
  context?: string;
  embedSrc: string;
  bandcampUrl: string;
  note?: string;
}

const CLOUD = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

const featuredDrums: FeaturedRelease = {
  title: "Overview Effect",
  artist: "Ritual Day",
  year: "2025",
  embedSrc:
    "https://bandcamp.com/EmbeddedPlayer/album=3780455652/size=large/bgcol=163832/linkcol=C8A96E/tracklist=false/transparent=true/",
  bandcampUrl: "https://ritualday.bandcamp.com/album/overview-effect",
  photo: "6B26E4B6-1E44-45C3-9C54-7E1E7B9C0AB1_datnp5",
};

const secondaryDrums: CompactRelease[] = [
  {
    artist: "Ritual Day",
    context: "EP",
    embedSrc:
      "https://bandcamp.com/EmbeddedPlayer/album=2684640889/size=large/bgcol=163832/linkcol=C8A96E/tracklist=false/transparent=true/",
    bandcampUrl: "https://themiraclecollective.bandcamp.com/album/ritual-day-ep",
  },
  {
    artist: "Bright Red Blood",
    context: "4",
    embedSrc:
      "https://bandcamp.com/EmbeddedPlayer/album=233208260/size=large/bgcol=163832/linkcol=C8A96E/tracklist=false/track=2775159841/transparent=true/",
    bandcampUrl: "https://mirrormirrorrecording.bandcamp.com/album/4-songs-to-the-4-track",
  },
];

const engineerCredits: CompactRelease[] = [
  {
    artist: "Ritual Day",
    context: "Demo",
    embedSrc:
      "https://bandcamp.com/EmbeddedPlayer/album=3060105306/size=large/bgcol=163832/linkcol=C8A96E/tracklist=false/transparent=true/",
    bandcampUrl: "https://ritualday.bandcamp.com/album/demo",
    note: "Also played drums on this record.",
  },
  {
    artist: "Memory Screen",
    context: "Days of Heaven",
    embedSrc:
      "https://bandcamp.com/EmbeddedPlayer/album=2272064975/size=large/bgcol=163832/linkcol=C8A96E/tracklist=false/track=656476677/transparent=true/",
    bandcampUrl: "https://bbbrecords.bandcamp.com/album/americas-hardcore-volume-5",
  },
];

function FeaturedReleaseCard({ release }: { release: FeaturedRelease }) {
  const photoUrl = release.photo
    ? `https://res.cloudinary.com/${CLOUD}/image/upload/f_auto,q_auto,w_900/${release.photo}`
    : null;

  return (
    <div className="bg-[var(--color-bg-raised)] overflow-hidden flex flex-col sm:flex-row">
      <div className="shrink-0">
        <iframe
          src={release.embedSrc}
          seamless
          style={{ border: 0 }}
          className="w-[350px] h-[470px] block"
        />
      </div>
      {photoUrl ? (
        <div className="relative flex-1 min-h-[260px] sm:min-h-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photoUrl}
            alt={`Recording ${release.title}`}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent flex flex-col justify-end p-6">
            <h3 className="font-[family-name:var(--font-display)] text-3xl font-light text-white leading-tight mb-1">
              {release.artist}
            </h3>
            <div className="flex items-baseline justify-between gap-4">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                {release.title} · {release.year}
              </p>
              <Link
                href={release.bandcampUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.15em] text-[var(--color-accent)] hover:text-white transition-colors shrink-0"
              >
                Bandcamp ↗
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center gap-5 p-8">
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-4xl font-light text-[var(--color-text)] leading-tight mb-2">
              {release.artist}
            </h3>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
              {release.title} · {release.year}
            </p>
          </div>
          <Link
            href={release.bandcampUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.15em] text-[var(--color-accent)] hover:text-[var(--color-text)] transition-colors w-fit"
          >
            Bandcamp ↗
          </Link>
        </div>
      )}
    </div>
  );
}

function CompactReleaseCard({ release }: { release: CompactRelease }) {
  return (
    <div className="bg-[var(--color-bg-raised)] p-5 flex flex-col gap-4">
      <p className="text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
        {release.artist}
        {release.context && (
          <span className="text-[var(--color-accent)] mx-2">—</span>
        )}
        {release.context}
      </p>
      <iframe
        src={release.embedSrc}
        seamless
        style={{ border: 0 }}
        className="w-[350px] h-[470px] block mx-auto"
      />
      {release.note && (
        <p className="text-xs text-[var(--color-text-muted)] italic">
          * {release.note}
        </p>
      )}
    </div>
  );
}

function Section({
  title,
  featured,
  compact,
}: {
  title: string;
  featured?: FeaturedRelease;
  compact: CompactRelease[];
}) {
  return (
    <section className="mb-20">
      <h2 className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-6">
        {title}
      </h2>
      <div className="flex flex-col gap-4">
        {featured && <FeaturedReleaseCard release={featured} />}
        {compact.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {compact.map((r) => (
              <CompactReleaseCard key={`${r.artist}-${r.context ?? ""}`} release={r} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default function Music() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-[family-name:var(--font-display)] text-5xl font-light text-[var(--color-text)] mb-16">
        Music
      </h1>
      <Section title="As a Drummer" featured={featuredDrums} compact={secondaryDrums} />
      <Section title="As Recording & Mixing Engineer" compact={engineerCredits} />
    </div>
  );
}
