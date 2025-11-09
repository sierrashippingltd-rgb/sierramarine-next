// app/en/hizmetler/survey-hazirligi/page.tsx

export default function SurveyPreparationEnPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-sky-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <p className="text-xs uppercase tracking-[0.25em] text-sky-300 mb-2">
            SERVICE
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold">
            Survey Preparation
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 space-y-4 text-sm leading-relaxed text-sky-950">
          <p>
            Survey processes are critical periods during which the technical
            condition of the vessel and its compliance with regulations are
            checked. Sierra Marine supports you in identifying and supplying the
            necessary equipment, publications and safety items before class,
            flag or port state control inspections.
          </p>
          <p>
            Within the scope of survey preparation, we help list missing or
            expired equipment and publications, determine which items need to be
            renewed and provide quotations accordingly. In this way, we aim to
            prevent unexpected deficiencies during class, flag or PSC
            inspections.
          </p>
          <p>
            Our objective is to help your vessel complete survey processes in
            the shortest possible time and with minimum disruption. With a
            planned renewal and maintenance approach, we support continuous
            operation and help you avoid sudden and costly surprises related to
            compliance and documentation.
          </p>
        </div>
      </section>
    </div>
  );
}
