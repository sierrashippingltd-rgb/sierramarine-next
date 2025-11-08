// app/hizmetler/[slug]/page.tsx
import { services } from "../../../lib/services";
import { notFound } from "next/navigation";

interface ServicePageProps {
  params: { slug: string };
}

// Statik yapı: Next bu slug'lar için sayfaları build'de üretir
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    return notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 space-y-6">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
          Hizmet
        </p>
        <h1 className="text-2xl font-semibold text-sky-950">
          {service.title}
        </h1>
      </header>

      <article className="prose prose-slate max-w-none text-sm">
        {service.content.split("\n").map((p, i) =>
          p.trim() ? <p key={i}>{p}</p> : <br key={i} />
        )}
      </article>
    </div>
  );
}
