// app/iletisim/page.tsx

export default function IletisimPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Üst lacivert başlık alanı */}
      <section className="bg-sky-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <p className="text-xs uppercase tracking-[0.25em] text-sky-300 mb-2">
            İLETİŞİM
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold">İletişim</h1>
          <p className="text-sm text-sky-100 max-w-xl mt-3">
            Teklif, bilgi ve tüm sorularınız için bizimle iletişime geçin.
          </p>
        </div>
      </section>

      {/* İçerik alanı */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 grid gap-8 md:grid-cols-2 text-sm">
          <div className="space-y-3 text-sky-900">
            <h2 className="text-sm font-semibold">İletişim Bilgileri</h2>
            <p>
              <strong>Telefon:</strong> +90 (216) 395 06 68
            </p>
            <p>
              <strong>Adres:</strong>{" "}
              EVLİYA ÇELEBİ MAHALLESİ ŞAHAN SOKAK NO:2/A TUZLA / İSTANBUL
            </p>
            <p>
              <strong>E-posta:</strong> info@sierramarine.com.tr
            </p>
          </div>

          <form className="space-y-3">
            <div>
              <label className="block text-xs font-medium mb-1">Ad Soyad</label>
              <input
                type="text"
                className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">E-posta</label>
              <input
                type="email"
                className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">
                Mesajınız
              </label>
              <textarea
                rows={4}
                className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-sky-900 px-4 py-2 text-xs font-semibold text-white hover:bg-sky-800"
            >
              Gönder
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
