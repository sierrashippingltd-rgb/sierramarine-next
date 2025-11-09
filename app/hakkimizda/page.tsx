// app/hakkimizda/page.tsx

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Üst lacivert başlık alanı */}
      <section className="bg-sky-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <p className="text-xs uppercase tracking-[0.25em] text-sky-300 mb-2">
            SIERRA MARINE
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold">Hakkımızda</h1>
        </div>
      </section>

      {/* İçerik alanı */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 space-y-4 text-sm leading-relaxed text-sky-950">
          <h2 className="text-base font-semibold">
            Sierra Marine Gemi Donatım Hizmetleri San. Tic. Ltd. Şti.
          </h2>

          <p>
            Sierra Marine, 2023 yılında kurulmuş, kısa sürede denizcilik
            sektöründe bilinirliğini artırmış bir gemi donatım ve seyir
            çözümleri markasıdır. Kurucularının denizcilik alanındaki uzun
            yıllara dayanan tecrübesi, şirketin hem teknik yeterliliğini hem de
            sektörel bakış açısını güçlendirmektedir.
          </p>

          <p>
            Faaliyetlerimizin merkezinde, ticari gemiler ve yatlar için gerekli
            olan donatım, emniyet ekipmanları, basılı ve dijital seyir
            haritaları ile notik yayınların temini yer almaktadır. Gemilerin
            klas ve mevzuata uygun şekilde işletilmesi için ihtiyaç duyulan ürün
            ve dokümanların büyük bölümünü tek elden sağlayabilecek bir yapı
            oluşturmayı hedefliyoruz.
          </p>

          <p>
            Sierra Marine; ITU ile ilgili ulusal/uluslararası otoritelerin
            yayınlarını takip ederek, güncel düzenlemelere uygun ürün ve
            yayınları stoklarında bulundurmayı esas alır. Seyir Hidrografi ve
            Oşinografi Dairesi Başkanlığı ve diğer resmi kurumların yayınları,
            müşterilerimize sunduğumuz portföyün önemli bir parçasını
            oluşturmaktadır.
          </p>

          <p>
            Ürün gamımız; gemi donatım malzemeleri, emniyet ve yangınla mücadele
            ekipmanları, notik harita ve yayınlar, köprüüstü ekipmanları,
            medikal malzemeler, kimyasallar ve survey hazırlığına yönelik çeşitli
            kalemleri kapsamaktadır. Amaç, bir geminin güvenli ve kesintisiz
            operasyonu için ihtiyaç duyduğu her kalemde güvenilir bir tedarikçi
            olmaktır.
          </p>

          <p>
            Tüm bu süreçlerde önceliğimiz; doğru ürünü, doğru zamanda, uygun
            maliyetle ve mevzuata uygun şekilde sunmaktır. Müşterilerimizle uzun
            vadeli iş birlikleri kurmayı, güvene dayalı, şeffaf ve çözüm odaklı
            bir yaklaşım sürdürmeyi şirket kültürümüzün temel unsuru olarak
            benimsiyoruz.
          </p>
        </div>
      </section>
    </div>
  );
}
