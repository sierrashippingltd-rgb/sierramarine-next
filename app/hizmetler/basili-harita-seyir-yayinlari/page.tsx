// app/hizmetler/basili-harita-seyir-yayinlari/page.tsx

export default function BasiliHaritaSeyirYayinlariPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-sky-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <p className="text-xs uppercase tracking-[0.25em] text-sky-300 mb-2">
            HİZMET
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold">
            Basılı Harita ve Seyir Yayınları
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 space-y-4 text-sm leading-relaxed text-sky-950">
          <p>
            Güvenli seyir için güncel ve doğru harita ile yayın kullanımı
            zorunludur. Sierra Marine, ulusal ve uluslararası otoritelerin
            yayınladığı notik harita ve yayınları tedarik ederek gemilerin
            mevzuata uygun ve emniyetli seyir yapmasına katkı sağlar.
          </p>
          <p>
            Portföyümüzde; resmi deniz haritaları, seyir talimatları, denizcilik
            el kitapları, işaret ve fener listeleri, telsiz haberleşme
            yayınları, seyir uyarıları ve benzeri birçok basılı yayın türü yer
            alır. ITU yayınları ile birlikte, ilgili kurum ve kuruluşların 
			hazırladığı teknik dokümanlar da ihtiyaçlarınıza göre
            temin edilir.
          </p>
          <p>
            Harita ve yayın siparişlerinde, geminin seyir bölgesi, rota
            planlaması ve klas talepleri dikkate alınır. Böylece hem denetim
            aşamasında hem de günlük operasyonlarda, güncel doküman eksikliğinden
            kaynaklanabilecek riskler en aza indirilir.
          </p>
        </div>
      </section>
    </div>
  );
}
