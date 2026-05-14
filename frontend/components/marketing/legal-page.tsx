import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, ShieldCheck, AlertTriangle, ScrollText, BookOpenCheck } from "lucide-react";
import { SectionEyebrow } from "./section-eyebrow";
import { LEGAL_CONTACT, type LegalBlock, type LegalDocument } from "@/content/legal";

const DOC_ICON = {
  "medical-disclaimer": AlertTriangle,
  "privacy-policy": ShieldCheck,
  terms: ScrollText,
} as const;

const RELATED_LINKS: Record<
  LegalDocument["slug"],
  { href: string; label: string; description: string }[]
> = {
  "medical-disclaimer": [
    {
      href: "/privacy-policy",
      label: "Privacy policy",
      description: "How we handle your information.",
    },
    {
      href: "/terms",
      label: "Terms and conditions",
      description: "The agreement that governs your use of Rooted.",
    },
  ],
  "privacy-policy": [
    {
      href: "/medical-disclaimer",
      label: "Medical disclaimer",
      description: "Our wellness boundary, in plain language.",
    },
    {
      href: "/terms",
      label: "Terms and conditions",
      description: "The agreement that governs your use of Rooted.",
    },
  ],
  terms: [
    {
      href: "/medical-disclaimer",
      label: "Medical disclaimer",
      description: "Our wellness boundary, in plain language.",
    },
    {
      href: "/privacy-policy",
      label: "Privacy policy",
      description: "How we handle your information.",
    },
  ],
};

type LegalPageProps = {
  document: LegalDocument;
};

export function LegalPage({ document: doc }: LegalPageProps) {
  const Icon = DOC_ICON[doc.slug];
  const related = RELATED_LINKS[doc.slug];

  return (
    <main id="main" className="bg-ivory text-charcoal-ink">
      <LegalHero document={doc} Icon={Icon} />

      <section className="relative bg-gradient-to-b from-ivory to-warm-sand py-16 sm:py-20 lg:py-24">
        <div className="container-rw">
          <div className="grid gap-10 lg:grid-cols-[0.32fr_1fr] lg:gap-14">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-3xl border border-soft-sage/30 bg-ivory/90 p-6 shadow-soft backdrop-blur">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-gray">
                  <BookOpenCheck className="h-3.5 w-3.5 text-rooted-green" aria-hidden />
                  On this page
                </p>
                <nav aria-label={`${doc.title} sections`} className="mt-4">
                  <ul role="list" className="space-y-2.5 text-sm">
                    {doc.sections.map((section) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className="text-charcoal-ink/75 transition-colors hover:text-deep-forest"
                        >
                          {section.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </aside>

            <article className="space-y-10">
              {doc.sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  aria-labelledby={`${section.id}-heading`}
                  className="scroll-mt-28 rounded-3xl border border-soft-sage/30 bg-ivory p-6 shadow-soft sm:p-8"
                >
                  <h2
                    id={`${section.id}-heading`}
                    className="font-display text-xl font-medium leading-snug text-deep-forest sm:text-2xl"
                  >
                    {section.title}
                  </h2>
                  <div className="mt-5 space-y-5 text-[0.95rem] leading-relaxed text-charcoal-ink/80 sm:text-base">
                    {section.blocks.map((block, idx) => (
                      <BlockRenderer key={`${section.id}-block-${idx}`} block={block} />
                    ))}
                  </div>
                </section>
              ))}

              <ContactCard />
              <RelatedLinks related={related} />
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

type LegalHeroProps = {
  document: LegalDocument;
  Icon: (typeof DOC_ICON)[keyof typeof DOC_ICON];
};

function LegalHero({ document: doc, Icon }: LegalHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-hero-gradient text-ivory">
      <LegalHeroBackgroundImage />
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(216,183,106,0.18),transparent_60%)]" />
        <div className="absolute -bottom-40 left-[-15%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,191,164,0.18),transparent_60%)]" />
      </div>

      <div className="container-rw relative px-5 pb-16 pt-20 sm:pb-20 sm:pt-24 lg:pb-24 lg:pt-28">
        <SectionEyebrow tone="dark">{doc.eyebrow}</SectionEyebrow>
        <div className="mt-5 flex items-start gap-4 sm:items-center sm:gap-5">
          <span
            aria-hidden
            className="hidden h-12 w-12 place-items-center rounded-2xl border border-soft-gold/30 bg-deep-forest-soft/50 text-soft-gold backdrop-blur sm:grid"
          >
            <Icon className="h-6 w-6" />
          </span>
          <h1 className="font-display text-3xl font-medium leading-[1.05] text-balance sm:text-4xl md:text-5xl">
            {doc.title}
          </h1>
        </div>
        <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-ivory/80 sm:text-lg">
          {doc.intro}
        </p>
        <p className="mt-6 text-xs font-medium uppercase tracking-[0.18em] text-soft-gold/85">
          Effective date: {doc.effectiveDate}
        </p>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-ivory" />
    </section>
  );
}

function LegalHeroBackgroundImage() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1725399633872-32ba508b0607?fm=jpg&q=80&w=2400&auto=format&fit=crop"
        alt=""
        fill
        priority
        unoptimized
        sizes="100vw"
        className="object-cover object-center opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-deep-forest/92 via-deep-forest/80 to-rooted-green/70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(216,183,106,0.16),transparent_55%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/85 via-transparent to-deep-forest/30" />
    </div>
  );
}

function BlockRenderer({ block }: { block: LegalBlock }) {
  if (block.type === "paragraph") {
    return <p className="text-pretty">{block.text}</p>;
  }
  if (block.type === "note") {
    return (
      <p className="rounded-2xl border border-soft-gold/30 bg-warm-sand/60 px-4 py-3 text-sm text-charcoal-ink/85">
        {block.text}
      </p>
    );
  }
  return (
    <div>
      {block.intro ? <p className="text-pretty">{block.intro}</p> : null}
      <ul role="list" className="mt-3 space-y-2.5">
        {block.items.map((item) => (
          <li key={item} className="relative pl-6 text-pretty">
            <span
              aria-hidden
              className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-rooted-green"
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactCard() {
  return (
    <section
      id="contact-card"
      aria-labelledby="contact-card-heading"
      className="relative overflow-hidden rounded-3xl border border-soft-gold/30 bg-deep-forest text-ivory shadow-soft"
    >
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(216,183,106,0.18),transparent_55%)]" />
      <div className="relative grid gap-8 p-7 sm:grid-cols-[1fr_auto] sm:items-center sm:p-9">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-soft-gold/90">
            Reach the team
          </p>
          <h2
            id="contact-card-heading"
            className="mt-3 font-display text-2xl font-medium leading-snug text-ivory sm:text-3xl"
          >
            Questions about this document?
          </h2>
          <p className="mt-3 max-w-prose text-sm leading-relaxed text-ivory/75 sm:text-base">
            We respond quietly and kindly. For privacy requests, terms questions,
            or anything related to this disclaimer, use the contact details on
            the right.
          </p>
        </div>
        <ul role="list" className="space-y-3 text-sm">
          <li className="flex items-center gap-3 rounded-2xl border border-ivory/15 bg-ivory/5 px-4 py-3 backdrop-blur">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-soft-gold/15 text-soft-gold">
              <Mail className="h-4 w-4" aria-hidden />
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-ivory/55">Email</p>
              <a
                href={`mailto:${LEGAL_CONTACT.email}`}
                className="font-medium text-ivory hover:text-soft-gold"
              >
                {LEGAL_CONTACT.email}
              </a>
            </div>
          </li>
          <li className="flex items-center gap-3 rounded-2xl border border-ivory/15 bg-ivory/5 px-4 py-3 backdrop-blur">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-soft-gold/15 text-soft-gold">
              <Phone className="h-4 w-4" aria-hidden />
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-ivory/55">Phone</p>
              <a
                href={`tel:${LEGAL_CONTACT.phone.replace(/\s+/g, "")}`}
                className="font-medium text-ivory hover:text-soft-gold"
              >
                {LEGAL_CONTACT.phone}
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

function RelatedLinks({
  related,
}: {
  related: { href: string; label: string; description: string }[];
}) {
  return (
    <section aria-labelledby="related-legal-heading" className="rounded-3xl border border-soft-sage/30 bg-ivory p-6 shadow-soft sm:p-8">
      <h2
        id="related-legal-heading"
        className="font-display text-lg font-medium text-deep-forest sm:text-xl"
      >
        Related documents
      </h2>
      <ul role="list" className="mt-5 grid gap-3 sm:grid-cols-2">
        {related.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group flex h-full flex-col gap-1.5 rounded-2xl border border-soft-sage/30 bg-warm-sand/40 p-4 transition-colors hover:border-soft-gold/40 hover:bg-warm-sand/70"
            >
              <span className="font-display text-sm font-semibold text-deep-forest group-hover:text-rooted-green">
                {item.label}
              </span>
              <span className="text-sm leading-relaxed text-charcoal-ink/70">
                {item.description}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
