// lib/services.ts

export type Service = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
};

export const services: Service[] = [
  {
    slug: "gemi-donatim",
    title: "Gemi Donatım",
    excerpt:
      "Yeni inşa ve mevcut gemiler için güvenlik, konfor ve operasyon odaklı gemi donatım çözümleri.",
    content: `
Sierra Marine, gemi donatım alanında güvenlik, teknoloji ve konforu bir araya getiren bütüncül çözümler sunar. 
Yeni inşa veya mevcut gemilerde, operasyonel ihtiyaçlara göre şekillenen donanım kalemlerini tek elden tedarik etmeyi hedefliyoruz.

Gemi tipi, tonajı ve çalışma bölgesine göre seçilen ürünlerle; seyir emniyeti, yangın güvenliği, yaşam mahalleri konforu ve 
günlük operasyon süreçleri için gerekli donanımları planlıyoruz. Makine dairesi, güverte, köprüüstü ve yaşam alanları için 
farklı marka ve kalite seviyelerinde ürün seçenekleri sunarak, teknik ve ticari beklentilerinize uygun çözümler geliştiriyoruz.

Tedarik sürecinde; klas ve mevzuat gereklilikleri, üretici sertifikaları ve teslim terminleri dikkate alınarak tekliflendirilen 
ürünler, mümkün olduğunca stoktan veya kısa terminlerle sağlanır. Amacımız, geminizin tersane veya liman operasyon süresini 
uzatmadan, ihtiyaç duyulan donanımı eksiksiz şekilde tamamlamaktır.
`,
  },
  {
    slug: "emniyet-ekipmanlari",
    title: "Emniyet Ekipmanları",
    excerpt:
      "SOLAS ve ilgili mevzuata uygun, mürettebat ve gemi emniyetine yönelik geniş emniyet ekipmanları portföyü.",
    content: `
Denizcilikte emniyet, operasyonun vazgeçilmez bir parçasıdır. Sierra Marine, gemi ve mürettebatın güvenliğini sağlamak için, 
uluslararası kurallar ve klas gerekliliklerine uygun emniyet ekipmanları sunar.

Portföyümüzde; can yelekleri, can simitleri, can salları, can filikaları, kurtarma botları, kişisel koruyucu donanımlar, 
yangın algılama ve yangınla mücadele ekipmanları, acil durum aydınlatma ve kaçış sistemleri gibi birçok temel ürün yer alır. 
Ürün seçiminde, sertifikasyon durumu, kullanım koşulları ve gemi tipine uygunluk dikkate alınır.

Her bir emniyet kaleminde amaç; denetim ve sörveylerde sorun yaşamadan, gerçek bir acil durumda ise mürettebatın hızlı ve 
etkin şekilde müdahale edebilmesini sağlamaktır. Ürün tedarik sürecinin yanı sıra, yenileme periyotları konusunda da 
müşterilerimizi bilgilendirmeyi ve planlamaya destek olmayı önemsiyoruz.
`,
  },
  {
    slug: "basili-harita-seyir-yayinlari",
    title: "Basılı Harita ve Seyir Yayınları",
    excerpt:
      "ITU ve ilgili otoritelerin basılı harita ve seyir yayınları ile güncel, güvenli seyir desteği.",
    content: `
Güvenli seyir için güncel ve doğru harita ile yayın kullanımı zorunludur. Sierra Marine, ulusal ve uluslararası otoritelerin 
yayınladığı notik harita ve yayınları tedarik ederek gemilerin mevzuata uygun ve emniyetli seyir yapmasına katkı sağlar.

Portföyümüzde; resmi deniz haritaları, seyir talimatları, denizcilik el kitapları, işaret ve fener listeleri, telsiz haberleşme 
yayınları, seyir uyarıları ve benzeri birçok basılı yayın türü yer alır. ITU yayınları ile birlikte, ilgili kurum ve 
kuruluşların hazırladığı teknik dokümanlar da ihtiyaçlarınıza göre temin edilir.

Harita ve yayın siparişlerinde, geminin seyir bölgesi, rota planlaması ve klas talepleri dikkate alınır. Böylece hem denetim 
aşamasında hem de günlük operasyonlarda, güncel doküman eksikliğinden kaynaklanabilecek riskler en aza indirilir.
`,
  },
  {
    slug: "survey-hazirligi",
    title: "Survey Hazırlığı",
    excerpt:
      "Klas, bayrak veya denetim otoriteleri için yapılacak survey öncesinde hazırlık, tespit ve tedarik desteği.",
    content: `
Survey süreçleri, geminin teknik durumunun ve mevzuata uygunluğunun kontrol edildiği kritik aşamalardır. Sierra Marine, 
survey öncesinde ihtiyaç duyulan donanım, yayın ve emniyet ekipmanlarının tespiti ve temini konusunda destek sunar.

Survey hazırlığı kapsamında; eksik veya süresi dolmuş ekipman ve yayınların listelenmesi, yenilenmesi gereken malzemelerin 
belirlenmesi ve bunlara ait tekliflendirme süreçleri yürütülür. Böylece klas, bayrak veya liman devleti kontrollerinde 
beklenmeyen eksikliklerin önüne geçilmesi hedeflenir.

Amacımız, geminizin survey sürecini mümkün olan en kısa sürede ve problemsiz şekilde tamamlamasına katkı sağlamaktır. 
Planlı bakım ve yenileme yaklaşımıyla, hem kesintisiz operasyonu destekler hem de ani ve maliyetli sürprizlerin önüne geçmeye yardımcı olur.
`,
  },
];
