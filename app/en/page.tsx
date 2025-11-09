// app/en/page.tsx

import { ServiceCard } from "../../components/ServiceCard";

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
      "Wide range of SOLAS-compliant safety equipment for crew and vessel safety.",
  },
  {
    slug: "basili-harita-seyir-yayinlari",
    title: "Paper Charts & Nautical Publications",
    excerpt:
      "Official paper charts and nautical publications by ITU and related authorities.",
  },
  {
    slug: "survey-hazirligi",
    title: "Survey Preparation",
    excerpt:
      "Preparation, identification and supply support ahead of class, flag or PSC inspections.",
  },
];

export default function HomeEnPage() {
  return (
    <>
      {/* Hero alanı – İngilizce */}
      <section className="bg-sky-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-sky-300 mb-4">
              MARINE OUTFITTING • NAUTICAL PUBLICATIONS • SAFETY
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4 text-white">
              Professional marine outfitting and navigation solutions.
            </h1>

            <p className="text-sm md:text-base text-sky-100 mb-3">
              Sierra Marine is your reliable supplier for marine outfitting,
              safety equipment, paper and digital charts and nautical
              publications.
            </p>

            <p className="text-sm md:text-base text-sky-100 mb-8">
              With digital publications, digital charts and a{" "}
              <strong className="text-white">
                digital chart & publication management program
              </strong>{" "}
              we support safe navigation in line with the latest regulations.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-transparent bg-white px-5 py-2 text-sm font-medium text-sky-950 hover:bg-slate-100"
              >
                View Our Services
              </a>
              <a
                href="/en/iletisim"
                className="inline-flex items-center justify-center rounded-full border border-sky-400 px-5 py-2 text-sm font-medium text-white hover:bg-sky-900"
              >
                Request a Quote
              </a>
            </div>
          </div>

          <div className="bg-sky-900/70 border border-sky-700 rounded-2xl p-6 md:p-8 grid gap-4 text-sm">
            <div>
              <p className="text-sky-200">Founded</p>
              <p className="text-xl font-semibold text-white">2023</p>
            </div>

            <div>
              <p className="text-sky-200">Core Expertise</p>
              <p className="text-sky-50">
                Marine outfitting, safety equipment, paper and digital charts,
                digital publications.
              </p>
            </div>

            <div>
              <p className="text-sky-200">Service Area</p>
              <p className="text-sky-50">
                Turkish ports and international shipowners
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services bölümü */}
      <section
        id="services"
        className="mx-auto max-w-6xl px-4 py-12 space-y-6 bg-slate-50"
      >
        <header className="space-y-2">
          <h2 className="text-xl md:text-2xl font-semibold text-sky-950">
            Our Services
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl">
            From marine outfitting to safety equipment, paper and digital
            charts, and survey preparation – we provide end-to-end solutions for
            your vessels.
          </p>
        </header>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {servicesEn.map((service) => (
            <ServiceCard
              key={service.slug}
              slug={service.slug}
              title={service.title}
              excerpt={service.excerpt}
              ctaLabel="More details"
            />
          ))}
        </div>
      </section>
    </>
  );
}
