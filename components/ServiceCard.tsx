// components/ServiceCard.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface ServiceCardProps {
  slug: string;
  title: string;
  excerpt: string;
  ctaLabel?: string; // Türkçe için boş bırak, EN için "More details" veriyoruz
}

export function ServiceCard({
  slug,
  title,
  excerpt,
  ctaLabel,
}: ServiceCardProps) {
  const pathname = usePathname() || "/";
  const isEn = pathname.startsWith("/en");

  // Dil durumuna göre doğru link:
  // TR:   /hizmetler/slug
  // EN:   /en/hizmetler/slug
  const href = isEn
    ? `/en/hizmetler/${slug}`
    : `/hizmetler/${slug}`;

  return (
    <article className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-base font-semibold mb-2 text-sky-950">{title}</h3>
      <p className="text-sm text-slate-600 mb-3">{excerpt}</p>
      <Link
        href={href}
        className="text-xs font-semibold uppercase tracking-wide text-sky-900 hover:underline"
      >
        {ctaLabel ?? "Detaylı Bilgi"} →
      </Link>
    </article>
  );
}
