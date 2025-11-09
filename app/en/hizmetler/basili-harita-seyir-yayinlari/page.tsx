// app/en/hizmetler/basili-harita-seyir-yayinlari/page.tsx

export default function PaperChartsPublicationsEnPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-sky-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <p className="text-xs uppercase tracking-[0.25em] text-sky-300 mb-2">
            SERVICE
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold">
            Paper Charts &amp; Nautical Publications
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 space-y-4 text-sm leading-relaxed text-sky-950">
          <p>
            For safe navigation, it is mandatory to use up-to-date and accurate
            charts and publications. Sierra Marine supplies official nautical
            charts and publications issued by national and international
            hydrographic and regulatory authorities, supporting compliant and
            safe vessel operations.
          </p>
          <p>
            Our portfolio includes official paper charts, sailing directions,
            nautical handbooks, lists of lights and signals, radio signals,
            notice to mariners and various other nautical publications. Along
            with ITU publications, we also provide technical documents
            and guidance issued by related organisations, according to your
            needs.
          </p>
          <p>
            When processing chart and publication orders, we take into account
            the vessel&apos;s trading area, planned routes and class
            requirements. This helps minimise the risk of deficiencies in
            documentation both during inspections and in daily operations,
            ensuring that your navigational documentation remains current and
            compliant.
          </p>
        </div>
      </section>
    </div>
  );
}
