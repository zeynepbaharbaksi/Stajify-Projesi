# AI Staj Önerisi

## Açıklama
Kullanıcının profil bilgileri ve filtre tercihlerine göre yapay zeka, Türkiye'deki gerçek şirketlerden kişiselleştirilmiş staj önerileri oluşturur.

## Nasıl Çalışır?
1. Kullanıcı Bilgilerim sayfasında profilini oluşturur
2. Filtreleme sayfasında şehir, bölüm, sınıf gibi bilgileri seçer
3. "Önerileri Oluştur" butonuna basınca veriler Groq API'sine gönderilir
4. Yapay zeka uyum puanıyla birlikte şirket önerileri döndürür

## Kaynak Kodlar
- `src/app/filtreleme/page.tsx` — Ana filtreleme ve öneri sayfası
- `src/lib/stajify-data.ts` — Filtre seçenekleri ve veri yapıları