// components/Hero.tsx
import Link from "next/link";

export function Hero() {
  return (
    <section className="bg-sky-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24 grid gap-10 md:grid-cols-2 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-sky-300 mb-4">
            GEMİ DONATIM • SEYİR YAYINLARI • EMNİYET
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4 text-white">
            Profesyonel gemi donatım ve seyir çözümleri.
          </h1>

          <p className="text-sm md:text-base text-sky-100 mb-3">
            Sierra Marine, gemi donatım, emniyet ekipmanları, basılı ve dijital
            seyir haritaları ile yayınları alanında güvenilir tedarikçinizdir.
          </p>

          <p className="text-sm md:text-base text-sky-100 mb-8">
            Dijital yayınlar, dijital haritalar ve{" "}
            <strong className="text-white">
              dijital harita &amp; yayın takip programı
            </strong>{" "}
            ile seyir emniyetinin güncel ve mevzuata uygun şekilde
            yönetilmesine destek oluyoruz.
          </p>

          <div className="flex flex-wrap gap-3">
            {/* Aynı sayfada hizmetler bölümüne smooth scroll */}
            <Link
              href="#hizmetler"
              className="inline-flex items-center justify-center rounded-full border border-transparent bg-white px-5 py-2 text-sm font-medium text-sky-950 hover:bg-slate-100"
            >
              Hizmetlerimizi İncele
            </Link>
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center rounded-full border border-sky-400 px-5 py-2 text-sm font-medium text-white hover:bg-sky-900"
            >
              Teklif Al
            </Link>
          </div>
        </div>

        {/* Sağ taraftaki bilgi kartı */}
        <div className="bg-sky-900/70 border border-sky-700 rounded-2xl p-6 md:p-8 grid gap-4 text-sm">
          <div>
            <p className="text-sky-200">Kuruluş</p>
            <p className="text-xl font-semibold text-white">2024</p>
          </div>

          <div>
            <p className="text-sky-200">Uzmanlık Alanları</p>
            <p className="text-sky-50">
              Gemi donatım, emniyet ekipmanları, basılı ve dijital haritalar,
              dijital yayınlar.
            </p>
          </div>

          <div>
            <p className="text-sky-200">Hizmet Bölgeleri</p>
            <p className="text-sky-50">
              Türkiye limanları ve uluslararası armatörler
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
