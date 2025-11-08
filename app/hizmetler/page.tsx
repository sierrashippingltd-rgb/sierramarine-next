// app/hizmetler/page.tsx
"use client";

import { useState } from "react";
import { services } from "../../lib/services";
import { ServiceCard } from "../../components/ServiceCard";

const filters = [
  { key: "all", label: "Tümü" },
  { key: "gemi-donatim", label: "Gemi Donatım" },
  { key: "emniyet-ekipmanlari", label: "Emniyet Ekipmanları" },
  {
    key: "basili-harita-seyir-yayinlari",
    label: "Basılı Harita & Seyir Yayınları",
  },
  { key: "survey-hazirligi", label: "Survey Hazırlığı" },
];

export default function HizmetlerPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredServices =
    activeFilter === "all"
      ? services
      : services.filter((s) => s.slug === activeFilter);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Üst lacivert başlık alanı */}
      <section className="bg-sky-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <p className="text-xs uppercase tracking-[0.25em] text-sky-300 mb-2">
            HİZMETLER
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold">Hizmetler</h1>
          <p className="text-sm text-sky-100 max-w-2xl mt-3">
            Sierra Marine olarak gemi donatım, emniyet ekipmanları, basılı ve
            dijital harita/yayınlar ile survey hazırlığı alanlarında uçtan uca
            çözümler sunuyoruz.
          </p>
        </div>
      </section>

      {/* İçerik alanı */}
      <section className="mx-auto max-w-6xl px-4 py-10 space-y-8">
        {/* Filtre butonları */}
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => {
            const isActive = activeFilter === f.key;
            return (
              <button
                key={f.key}
                type="button"
                onClick={() => setActiveFilter(f.key)}
                className={
                  "rounded-full border px-4 py-1 text-xs font-medium transition-colors " +
                  (isActive
                    ? "bg-sky-900 text-white border-sky-900"
                    : "bg-white text-slate-700 border-slate-200 hover:bg-sky-50")
                }
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Kartlar */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service) => (
            <div key={service.slug} className="animate-fadeInUp">
              <ServiceCard
                slug={service.slug}
                title={service.title}
                excerpt={service.excerpt}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
