// app/en/hizmetler/page.tsx
"use client";

import { useState } from "react";
import { ServiceCard } from "../../../components/ServiceCard";

const servicesEn = [
  {
    slug: "gemi-donatim",
    title: "Marine Outfitting",
    excerpt:
      "Safety, comfort and operationally focused outfitting solutions for newbuild and existing vessels.",
  },
  {
    slug: "emniyet-ekipmanlari",
    title: "Safety Equipment",
    excerpt:
      "SOLAS-compliant safety equipment portfolio focused on crew and vessel safety.",
  },
  {
    slug: "basili-harita-seyir-yayinlari",
    title: "Paper Charts & Nautical Publications",
    excerpt:
      "Official paper charts and nautical publications by ITU, IMO and related authorities.",
  },
  {
    slug: "survey-hazirligi",
    title: "Survey Preparation",
    excerpt:
      "Support for preparation, identification and supply ahead of class, flag or PSC inspections.",
  },
];

const filtersEn = [
  { key: "all", label: "All" },
  { key: "gemi-donatim", label: "Marine Outfitting" },
  { key: "emniyet-ekipmanlari", label: "Safety Equipment" },
  {
    key: "basili-harita-seyir-yayinlari",
    label: "Charts & Publications",
  },
  { key: "survey-hazirligi", label: "Survey Preparation" },
];

export default function ServicesEnPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredServices =
    activeFilter === "all"
      ? servicesEn
      : servicesEn.filter((s) => s.slug === activeFilter);

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-sky-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <p className="text-xs uppercase tracking-[0.25em] text-sky-300 mb-2">
            SERVICES
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold">Services</h1>
          <p className="text-sm text-sky-100 max-w-2xl mt-3">
            We provide end-to-end solutions in marine outfitting, safety
            equipment, paper and digital charts/publications and survey
            preparation.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 space-y-8">
        <div className="flex flex-wrap gap-2">
          {filtersEn.map((f) => {
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

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service) => (
            <div key={service.slug} className="animate-fadeInUp">
              <ServiceCard
                slug={service.slug}
                title={service.title}
                excerpt={service.excerpt}
                ctaLabel="More details"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
