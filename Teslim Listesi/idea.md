# Stajify Proje Taslağı

Bu belge, staj arama sürecini tamamen otomatize eden ve yapay zeka ile kişiselleyen **"Stajify"** projesinin vizyonunu ve kapsamını tanımlar.

---

## 1. Problem Tanımı

Günümüzde lise ve üniversite öğrencileri için staj bulma süreci son derece kaotiktir:

- **İlan Dağınıklığı:** Staj ilanları LinkedIn, Kariyer.net, şirket portalları ve okul duyuruları arasında çok dağılmıştır.
- **Uyumsuzluk:** Öğrenciler, kendi ders programlarına veya teknik yetkinliklerine uymayan yüzlerce ilanı manuel olarak incelemek zorunda kalır.
- **CV Filtreleme Bariyeri:** Manuel başvurularda CV'lerin şirketlerin beklentileriyle örtüşüp örtüşmediği belirsizdir, bu da düşük geri dönüş oranlarına yol açar.
- **Zaman Kaybı:** Doğru şirketi ve doğru tarih aralığını bulmak haftalarca süren bir araştırma gerektirir.

---

## 2. Hedef Kullanıcı Kitlesi

- **Üniversite Öğrencileri:** Zorunlu veya gönüllü staj arayan, akademik takvimine uygun tarih aralığına ihtiyaç duyan lisans/ön lisans öğrencileri.
- **Lise Öğrencileri:** Özellikle meslek liselerinde staj zorunluluğu olan veya erken yaşta deneyim kazanmak isteyen öğrenciler.
- **Yeni Mezun Adayları:** Kısa veya uzun dönem staj programları üzerinden iş dünyasına girmeye hazırlanan gençler.

---

## 3. Yapay Zekanın (AI) Rolü

Proje, sadece basit bir filtreleme aracı değil, akıllı bir eşleştirme motoru olarak konumlanır:

- **Semantik Tarama (Scraping & NLP):** AI, web üzerindeki binlerce ilan metnini okur ve sadece "başlık" eşleşmesine değil, "içerik ve yetkinlik" uyumuna bakar.
- **CV Analizi (Parser):** Kullanıcının yüklediği CV'den becerileri, projeleri ve eğitim geçmişini otomatik olarak çıkarır.
- **Akıllı Filtreleme:** Kullanıcının seçtiği sınıf, bölüm ve tarih kısıtlarını ilanların gereklilikleriyle saniyeler içinde kıyaslar.
- **Neden Önerildi? (Explainable AI):** Kullanıcıya sadece bir liste sunmaz; "Bu şirket senin Python projelerinle %90 uyumlu olduğu için önerildi" gibi mantıksal açıklamalar yapar.
- **Ön Yazı Asistanı:** Seçilen şirketin vizyonuna ve ilanın detaylarına göre LLM (OpenAI, Gemini vb.) desteğiyle kişiselleştirilmiş başvuru metinleri üretir.

---

## 4. Rakip Durumu ve Farklılaşma

- **Geleneksel Platformlar (LinkedIn, Kariyer.net):** Bu siteler genel iş ilanlarına odaklanır. Stajyerler için özel bir tarih/sınıf bazlı akıllı eşleştirme sunmazlar; kullanıcı manuel arama yapmalıdır.
- **Okul Portalları:** Genelde çok kısıtlı bir şirket havuzuna sahiptirler.
- **Stajify Farkı:** Projemiz, kullanıcıyı ilan aramaya zorlamak yerine, ilanları kullanıcıya getirir. "Tüm web'i senin için tarayan bir kişisel kariyer asistanı" mantığıyla çalışarak rakiplerinden ayrışır.

---

## 5. Başarı Kriteri: Ne Değişecek?

Proje hedefine ulaştığında:

- **Başvuru/Görüşme Oranı Artacak:** Öğrenciler sadece en uyumlu oldukları %10'luk kısma başvurdukları için mülakata çağrılma oranları yükselecektir.
- **Staj Arama Süresi Kısalacak:** Haftalar süren manuel tarama süreci, AI desteğiyle birkaç dakikalık bir "öneri listesi" incelemesine dönüşecek.
- **Fırsat Eşitliği:** Doğru anahtar kelimeleri bilmeyen veya hangi şirketin kendisine uygun olduğunu kestiremeyen öğrenciler, AI rehberliği sayesinde görünürlük kazanacak.
- **Operasyonel Verimlilik:** Kullanıcılar CV hazırlama ve ön yazı yazma gibi stresli süreçleri AI desteğiyle daha profesyonelce yönetebilecek.
