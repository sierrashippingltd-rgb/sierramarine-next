// app/en/hizmetler/emniyet-ekipmanlari/page.tsx

export default function SafetyEquipmentEnPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-sky-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <p className="text-xs uppercase tracking-[0.25em] text-sky-300 mb-2">
            SERVICE
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold">
            Safety Equipment
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 space-y-4 text-sm leading-relaxed text-sky-950">
          <p>
            Safety is a non-negotiable part of maritime operations. Sierra
            Marine supplies safety equipment in line with international rules,
            SOLAS requirements and class society standards to ensure the safety
            of both the vessel and the crew.
          </p>
          <p>
            Our portfolio covers a wide range of equipment including lifejackets
            and lifebuoys, liferafts and lifeboats, rescue boats, personal
            protective equipment (PPE), fire detection systems, firefighting
            equipment, emergency lighting and escape route systems. Product
            selection is made by taking into account certification status,
            operating conditions and suitability for the vessel type.
          </p>
          <p>
            The main objective for every safety item is to pass surveys and
            inspections without issues and, more importantly, to ensure that the
            crew can respond quickly and effectively in a real emergency.
            Besides supplying equipment, we also support our customers with
            information on renewal periods and planning, to minimise surprises
            and ensure continuous compliance.
          </p>
        </div>
      </section>
    </div>
  );
}
