// components/ServiceCard.tsx
import Link from "next/link";

interface ServiceCardProps {
  slug: string;
  title: string;
  excerpt: string;
  ctaLabel?: string; // yeni: buton metni (opsiyonel)
}

export function ServiceCard({ slug, title, excerpt, ctaLabel }: ServiceCardProps) {
  return (
    <article className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-base font-semibold mb-2 text-sky-950">{title}</h3>
      <p className="text-sm text-slate-600 mb-3">{excerpt}</p>
      <Link
        href={`/hizmetler/${slug}`}
        className="text-xs font-semibold uppercase tracking-wide text-sky-900 hover:underline"
      >
        {ctaLabel ?? "Detaylı Bilgi"} →
      </Link>
    </article>
  );
}
