// app/en/hakkimizda/page.tsx

export default function AboutEnPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-sky-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <p className="text-xs uppercase tracking-[0.25em] text-sky-300 mb-2">
            SIERRA MARINE
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold">About Us</h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 space-y-4 text-sm leading-relaxed text-sky-950">
          <p>
            Sierra Marine is a marine outfitting and navigation solutions
            company established in 2023. The founders&apos; long-standing
            experience in the maritime industry strengthens both the technical
            competence and sectoral perspective of the company.
          </p>
          <p>
            Our core activities include the supply of outfitting items, safety
            equipment, paper and digital charts and nautical publications for
            commercial vessels and yachts. Our goal is to provide most of the
            required items and documentation from a single, reliable source.
          </p>
          <p>
            We closely follow publications and regulations issued by ITU, IMO
            and national authorities, and keep our portfolio aligned with the
            latest requirements. Official hydrographic and nautical publications
            form an important part of the solutions we offer to our clients.
          </p>
          <p>
            Our product range covers marine outfitting materials, safety and
            firefighting equipment, nautical charts and publications, bridge
            equipment, medical supplies, chemicals and various items related to
            survey preparation.
          </p>
          <p>
            Our priority is to deliver the right product, at the right time, at
            a competitive cost and in full compliance with regulations. Building
            long-term, trust-based and solution-oriented relationships with our
            customers is a key element of our company culture.
          </p>
        </div>
      </section>
    </div>
  );
}
