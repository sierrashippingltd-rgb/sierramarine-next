// app/hizmetler/survey-hazirligi/page.tsx

export default function SurveyHazirligiPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-sky-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <p className="text-xs uppercase tracking-[0.25em] text-sky-300 mb-2">
            HİZMET
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold">
            Survey Hazırlığı
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 space-y-4 text-sm leading-relaxed text-sky-950">
          <p>
            Survey süreçleri, geminin teknik durumunun ve mevzuata uygunluğunun
            kontrol edildiği kritik aşamalardır. Sierra Marine, survey
            öncesinde ihtiyaç duyulan donanım, yayın ve emniyet ekipmanlarının
            tespiti ve temini konusunda destek sunar.
          </p>
          <p>
            Survey hazırlığı kapsamında; eksik veya süresi dolmuş ekipman ve
            yayınların listelenmesi, yenilenmesi gereken malzemelerin
            belirlenmesi ve bunlara ait tekliflendirme süreçleri yürütülür.
            Böylece klas, bayrak veya liman devleti kontrollerinde beklenmeyen
            eksikliklerin önüne geçilmesi hedeflenir.
          </p>
          <p>
            Amacımız, geminizin survey sürecini mümkün olan en kısa sürede ve
            problemsiz şekilde tamamlamaktır. Planlı bakım ve yenileme
            yaklaşımıyla, hem kesintisiz operasyonu destekler hem de ani ve
            maliyetli sürprizlerin önüne geçmeye yardımcı olur.
          </p>
        </div>
      </section>
    </div>
  );
}
