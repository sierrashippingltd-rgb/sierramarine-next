// app/en/hizmetler/gemi-donatim/page.tsx

export default function MarineOutfittingEnPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-sky-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <p className="text-xs uppercase tracking-[0.25em] text-sky-300 mb-2">
            SERVICE
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold">
            Marine Outfitting
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 space-y-4 text-sm leading-relaxed text-sky-950">
          <p>
            Sierra Marine provides integrated marine outfitting solutions
            combining safety, technology and comfort. For both newbuild and
            existing vessels, we aim to supply all required outfitting items
            from a single source.
          </p>
          <p>
            Depending on the vessel type, tonnage and trading area, we plan the
            outfitting items required for safe navigation, fire safety, crew
            comfort and daily operations. We offer different brands and quality
            levels for engine room, deck, bridge and accommodation areas.
          </p>
          <p>
            During the supply process, class and statutory requirements,
            manufacturer certifications and delivery times are taken into
            account. Our goal is to complete outfitting without extending yard
            or port stays and to keep your vessel ready for operation.
          </p>
        </div>
      </section>
    </div>
  );
}
