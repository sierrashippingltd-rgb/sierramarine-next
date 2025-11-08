// app/hizmetler/gemi-donatim/page.tsx

export default function GemiDonatimPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-sky-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <p className="text-xs uppercase tracking-[0.25em] text-sky-300 mb-2">
            HİZMET
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold">Gemi Donatım</h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 space-y-4 text-sm leading-relaxed text-sky-950">
          <p>
            Sierra Marine, gemi donatım alanında güvenlik, teknoloji ve konforu
            bir araya getiren bütüncül çözümler sunar. Yeni inşa veya mevcut
            gemilerde, operasyonel ihtiyaçlara göre şekillenen donanım
            kalemlerini tek elden tedarik etmeyi hedefliyoruz.
          </p>
          <p>
            Gemi tipi, tonajı ve çalışma bölgesine göre seçilen ürünlerle; seyir
            emniyeti, yangın güvenliği, yaşam mahalleri konforu ve günlük
            operasyon süreçleri için gerekli donanımları planlıyoruz. Makine
            dairesi, güverte, köprüüstü ve yaşam alanları için farklı marka ve
            kalite seviyelerinde ürün seçenekleri sunarak, teknik ve ticari
            beklentilerinize uygun çözümler geliştiriyoruz.
          </p>
          <p>
            Tedarik sürecinde; klas ve mevzuat gereklilikleri, üretici
            sertifikaları ve teslim terminleri dikkate alınarak tekliflendirilen
            ürünler, mümkün olduğunca stoktan veya kısa terminlerle sağlanır.
            Amacımız, geminizin tersane veya liman operasyon süresini uzatmadan,
            ihtiyaç duyulan donanımı eksiksiz şekilde tamamlamaktır.
          </p>
        </div>
      </section>
    </div>
  );
}
