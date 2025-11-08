// app/hizmetler/emniyet-ekipmanlari/page.tsx

export default function EmniyetEkipmanlariPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-sky-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <p className="text-xs uppercase tracking-[0.25em] text-sky-300 mb-2">
            HİZMET
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold">
            Emniyet Ekipmanları
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 space-y-4 text-sm leading-relaxed text-sky-950">
          <p>
            Denizcilikte emniyet, operasyonun vazgeçilmez bir parçasıdır. Sierra
            Marine, gemi ve mürettebatın güvenliğini sağlamak için uluslararası
            kurallar ve klas gerekliliklerine uygun emniyet ekipmanları sunar.
          </p>
          <p>
            Portföyümüzde; can yelekleri, can simitleri, can salları, can
            filikaları, kurtarma botları, kişisel koruyucu donanımlar, yangın
            algılama ve yangınla mücadele ekipmanları, acil durum aydınlatma ve
            kaçış sistemleri gibi birçok temel ürün yer alır.
          </p>
          <p>
            Her bir emniyet kaleminde amaç; denetim ve sörveylerde sorun
            yaşamadan, gerçek bir acil durumda ise mürettebatın hızlı ve etkin
            şekilde müdahale edebilmesini sağlamaktır. Ürün tedarik sürecinin
            yanı sıra, yenileme periyotları konusunda da müşterilerimizi
            bilgilendirmeyi ve planlamaya destek olmayı önemsiyoruz.
          </p>
        </div>
      </section>
    </div>
  );
}
