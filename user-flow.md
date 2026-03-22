# Stajify AI

## Problem
Staj arayan öğrenciler hangi şirkete başvuracaklarını bilememekte, ilanları tek tek aramak ve her seferinde şehir, bölüm, sınıf gibi filtrelemeler yapmak büyük bir zaman kaybına yol açmaktadır. Bu sorunu bizzat yaşayan bir öğrenci olarak bu problemi çözmek istedim.

## Çözüm
Stajify AI, öğrencinin profil bilgileri ve filtre tercihlerine göre yapay zeka destekli staj önerileri sunan bir web platformudur. Kullanıcı bölümünü, şehrini ve ilgi alanlarını bir kez girdikten sonra Groq API üzerinden Llama 3.3 modeli devreye girerek uyum yüzdesiyle birlikte kişiselleştirilmiş staj firmaları önerir. Ayrıca favorileme, not alma, başvuru takibi ve AI sohbet özellikleri de mevcuttur.

## Canlı Demo
Yayın Linki: https://stajify-projesi.vercel.app
Demo Video: https://www.loom.com/share/cf0985c419b74ffbac68ab46453bd11c

## Kullanılan Teknolojiler
- **Next.js 15** — React tabanlı web framework
- **TypeScript** — Tip güvenli JavaScript
- **Tailwind CSS** — Stil ve tasarım
- **Groq API** — Yapay zeka entegrasyonu (Llama 3.3 modeli)
- **Vercel** — Yayınlama platformu
- **Cursor** — AI destekli geliştirme ortamı

## Nasıl Çalıştırılır?

1. Repoyu bilgisayarına indir
2. Terminal'de proje klasörüne gir:
```
   cd frontend
```
3. Gerekli paketleri yükle:
```
   npm install
```
4. `src/app/filtreleme/page.tsx` ve `src/app/sohbet/page.tsx` dosyalarındaki `GROQ_API_KEY` alanına kendi Groq API anahtarını yaz
5. Geliştirme sunucusunu başlat:
```
   npm run dev
```
6. Tarayıcıda şu adresi aç:
```
   http://localhost:3000
```
