# Ürün Gereksinim Belgesi (PRD): Stajify AI

**Proje Sahibi:** Girişimci / Öğrenci  
**Rol:** Kıdemli Full Stack Developer  
**Durum:** Planlama / MVP (Minimum Uygulanabilir Ürün)

---

## 1. Ürün Özeti (Executive Summary)

Stajify AI, lise ve üniversite öğrencilerinin staj arama sürecindeki karmaşıklığı ortadan kaldıran, yapay zeka destekli bir eşleştirme platformudur. Kullanıcıların girdiği akademik veriler, beceriler ve tercihler ile internetteki staj ilanlarını analiz ederek en uygun şirketleri "eşleşme yüzdesi" ile birlikte sunar.

---

## 2. Kullanıcı Hedefleri & Problemler

**Problem:** Öğrenciler, bölümlerine ve tarihlerine uygun staj ilanlarını bulmak için onlarca siteyi manuel olarak taramak zorunda kalıyor ve buldukları ilanların kendi yetenekleriyle ne kadar örtüştüğünü analiz etmekte güçlük çekiyorlar.  

**Hedef:** Tek bir panelden tüm filtreleri uygulamak ve AI sayesinde nokta atışı öneriler almak.

---

## 3. Kullanıcı Özellikleri (Functional Requirements)

### 3.1 Kullanıcı Profili ve Giriş
- **Öğrenci Girişi:** İsim ve Soyisim ile hızlı giriş (MVP aşaması için).  
- **Profil Bilgileri:** Sınıf (Lise 1-4, Üniversite 1-4), Bölüm (Açılır liste), Uzmanlık Alanı.

### 3.2 Akıllı Filtreleme Paneli
Kullanıcının staj bulmak için seçebileceği kriterler:  
- **Dönem Tipi:** Kısa Dönem (Zorunlu) / Uzun Dönem  
- **Tarih Aralığı:** Takvim üzerinden başlangıç ve bitiş tarihleri  
- **Staj Alanı:** Yazılım, Pazarlama, İK, Üretim vb.  
- **Şehir Seçimi:** İl/İlçe veya "Uzaktan (Remote)"  

### 3.3 Beceri ve CV Yönetimi
- **Metin Kutusu:** Öğrencinin teknik veya sosyal becerilerini girebileceği alan  
- **CV Yükleme:** PDF formatında dosya yükleme desteği

### 3.4 Yapay Zeka & Eşleştirme Motoru (Core Logic)
- **Web Tarama:** AI güncel ilan sitelerini tarar veya önceden çekilmiş veriyi kullanır  
- **Eşleşme Skoru:** AI, öğrencinin CV ve becerileri ile şirket beklentilerini kıyaslayarak 0-100% arası skor üretir

### 3.5 Sonuç Ekranı (Dashboard)
- **Şirket Kartları:** Şirket adı, staj alanı, lokasyon, Eşleşme Yüzdesi  
- **CTA Butonu:** "İlana Git" veya "Başvur" ile doğrudan ilan linkine yönlendirme

---

## 4. Teknik Mimari (Technical Stack)

| Katman | Teknoloji Önerisi |
|--------|-----------------|
| Frontend | React.js veya Next.js (Tailwind CSS ile modern UI) |
| Backend | Python (FastAPI veya Flask) |
| Yapay Zeka | OpenAI API (GPT-4o) |
| Veritabanı | PostgreSQL (Kullanıcı ve ilan verileri) |
| CV Analizi | PyMuPDF (PDF’den metin çıkarma) |

---

## 5. Kullanıcı Akışı (User Flow)

1. **Hoşgeldin:** Kullanıcı siteye girer ve isim-soyisim ile profil oluşturur  
2. **Tercihler:** Staj tarihleri, şehir ve dönem tipi gibi filtreleri doldurur  
3. **Veri Girişi:** Becerilerini yazar ve varsa CV’sini yükler  
4. **Analiz:** "Staj Bul" butonuna basıldığında AI arka planda ilanları tarar ve eşleştirir  
5. **Sonuç:** Eşleşme yüzdelerine göre sıralanmış şirket kartları görüntülenir  
6. **Aksiyon:** Kullanıcı ilgilendiği şirketin butonuna basarak başvuru sayfasına geçer

---

## 6. Başarı Kriterleri (KPIs)

- **Doğruluk:** AI eşleşme yüzdelerinin öğrenci profiliyle tutarlılığı  
- **Hız:** Arama sonuçlarının 5 saniyenin altında gelmesi  
- **Dönüşüm:** Kullanıcıların "İlana Git" butonuna tıklama oranı

---

## 7. Yol Haritası (Roadmap)

- **Hafta 1:** UI Tasarımı ve Frontend iskeleti  
- **Hafta 2:** Backend API ve veri tabanı şeması  
- **Hafta 3:** AI Eşleştirme algoritması (Prompt Engineering)  
- **Hafta 4:** Testler ve Canlıya çıkış (Deployment)