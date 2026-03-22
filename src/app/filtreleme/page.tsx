"use client";
import { RobotTips } from "@/components/RobotTips";
import type { FormEvent } from "react";
import { useEffect, useMemo, useState } from "react";

import { FlowNav } from "@/components/FlowNav";
import {
  CITY_OPTIONS,
  CLASS_OPTIONS,
  ENGINEERING_DEPARTMENTS,
  FilterForm,
  INTERNSHIP_FIELDS,
  PRIORITY_SOURCES,
  ProfileForm,
  STORAGE_KEYS,
  UNIVERSITY_OPTIONS,
} from "@/lib/stajify-data";

const GROQ_API_KEY = "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";

const INITIAL_FILTER: FilterForm = {
  classLevel: "",
  city: "",
  university: "",
  department: "",
  internshipField: "",
};

interface AIRecommendation {
  companyName: string;
  internshipField: string;
  description: string;
  score: number;
  applyUrl: string;
}

type NoteMap = Record<string, string>;

const TIPS = [
  "💡 CV'ni başvurmadan önce staj alanına göre özelleştir.",
  "📧 Başvuru mailinde kısa ve net bir motivasyon cümlesi kullan.",
  "🔗 LinkedIn profilini güncel tut, şirketler kontrol eder.",
  "⏰ Staj başvuruları genellikle Mart-Nisan aylarında yoğunlaşır.",
  "🎯 Birden fazla şirkete başvur, seçeneklerini geniş tut.",
  "📞 Mülakattan önce şirket hakkında araştırma yap.",
  "✉️ Başvurudan 1 hafta sonra takip maili atmayı unutma.",
  "📝 Staj defteri için önemli günleri not etmeye başla.",
];

export default function FilterPage() {
  const [filter, setFilter] = useState<FilterForm>(INITIAL_FILTER);
  const [profile, setProfile] = useState<ProfileForm | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [results, setResults] = useState<AIRecommendation[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [notes, setNotes] = useState<NoteMap>({});

  useEffect(() => {
    try {
      const profileRaw = window.localStorage.getItem(STORAGE_KEYS.profile);
      const favRaw = window.localStorage.getItem(STORAGE_KEYS.favorites);
      const noteRaw = window.localStorage.getItem(STORAGE_KEYS.notes);
      if (profileRaw) setProfile(JSON.parse(profileRaw) as ProfileForm);
      if (favRaw) setFavorites(JSON.parse(favRaw) as string[]);
      if (noteRaw) setNotes(JSON.parse(noteRaw) as NoteMap);
    } catch {
      setProfile(null);
    }
  }, []);

  const sourceLabel = useMemo(
    () =>
      `Öncelikli veri kaynakları: ${PRIORITY_SOURCES.join(
        ", "
      )}. Öneriler yapay zeka tarafından oluşturulmaktadır.`,
    []
  );

  const analyze = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setMessage("");
    setResults([]);

    if (!filter.classLevel || !filter.city || !filter.university || !filter.department || !filter.internshipField) {
      setError("Lütfen tüm filtre alanlarını seçin.");
      return;
    }

    if (!profile) {
      setError("Önce Bilgilerim sayfasından profil bilgilerini kaydetmelisin.");
      return;
    }

    setLoading(true);

    const prompt = `Sen bir staj danışmanısın. Aşağıdaki öğrenci profiline göre Türkiye'deki gerçek şirketlerden staj önerileri oluştur.

Öğrenci Bilgileri:
- Ad Soyad: ${profile.firstName} ${profile.lastName}
- Bölüm: ${filter.department}
- Üniversite: ${filter.university}
- Sınıf: ${filter.classLevel}
- Şehir: ${filter.city}
- Staj Alanı: ${filter.internshipField}
- İlgi Alanları: ${profile.interests.join(", ")}
- Beceriler: ${profile.skills.join(", ")}

SADECE aşağıdaki JSON formatında yanıt ver, başka hiçbir şey yazma:
[
  {
    "companyName": "Şirket Adı",
    "internshipField": "Staj Alanı",
    "description": "Bu şirkette ne yapacağını ve neden uygun olduğunu 2-3 cümleyle açıkla.",
    "score": 85,
    "applyUrl": "https://www.linkedin.com/jobs/search/?location=Turkey"
  }
]

score alanı 0 ile 99 arasında olsun. En az 10 şirket öner. ÇOK ÖNEMLİ: Sadece ${filter.city} şehrinde ofisi olan şirketleri öner, başka şehirden kesinlikle şirket ekleme. applyUrl her zaman https://www.linkedin.com/jobs/search/?location=Turkey olsun.`;

    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [{ role: "user", content: prompt }],
          temperature: 0.7,
        }),
      });

      if (!response.ok) throw new Error("API isteği başarısız oldu.");

      const data = await response.json();
      const content = data.choices[0].message.content as string;
      const cleaned = content.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(cleaned) as AIRecommendation[];

      setResults(parsed);
      window.localStorage.setItem(STORAGE_KEYS.recommendations, JSON.stringify(parsed));
      setMessage("AI analizi tamamlandı. Öneriler başarıyla oluşturuldu.");
    } catch (err) {
      console.error(err);
      setError("Yapay zeka bağlantısında hata oluştu. Lütfen tekrar dene.");
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = (id: string) => {
    const next = favorites.includes(id) ? favorites.filter((x) => x !== id) : [...favorites, id];
    setFavorites(next);
    window.localStorage.setItem(STORAGE_KEYS.favorites, JSON.stringify(next));
  };

  const saveNote = (id: string, text: string) => {
    const next = { ...notes, [id]: text };
    setNotes(next);
    window.localStorage.setItem(STORAGE_KEYS.notes, JSON.stringify(next));
  };

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-screen-2xl flex-col px-4 py-10 md:px-8">
      <FlowNav activeHref="/filtreleme" />

      <div className="flex gap-8">
        <div className="flex-1 min-w-0">
          <header className="mb-8">
            <h1 className="text-3xl font-semibold text-slate-50 md:text-4xl">Filtreleme</h1>
            <p className="mt-2 text-sm text-slate-400 md:text-base">{sourceLabel}</p>
          </header>

          <section className="st-card p-6 md:p-8">
            <form onSubmit={analyze} className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="st-label">Sınıf</label>
                <select className="st-input" value={filter.classLevel} onChange={(e) => setFilter({ ...filter, classLevel: e.target.value })}>
                  <option value="">Seçiniz</option>
                  {CLASS_OPTIONS.map((item) => (<option key={item} value={item}>{item}</option>))}
                </select>
              </div>
              <div>
                <label className="st-label">Şehir</label>
                <select className="st-input" value={filter.city} onChange={(e) => setFilter({ ...filter, city: e.target.value })}>
                  <option value="">Seçiniz</option>
                  {CITY_OPTIONS.map((item) => (<option key={item} value={item}>{item}</option>))}
                </select>
              </div>
              <div>
                <label className="st-label">Bölüm</label>
                <select className="st-input" value={filter.department} onChange={(e) => setFilter({ ...filter, department: e.target.value })}>
                  <option value="">Seçiniz</option>
                  {ENGINEERING_DEPARTMENTS.map((item) => (<option key={item} value={item}>{item}</option>))}
                </select>
              </div>
              <div>
                <label className="st-label">Üniversite</label>
                <select className="st-input" value={filter.university} onChange={(e) => setFilter({ ...filter, university: e.target.value })}>
                  <option value="">Seçiniz</option>
                  {UNIVERSITY_OPTIONS.map((item) => (<option key={item} value={item}>{item}</option>))}
                </select>
              </div>
              <div>
                <label className="st-label">Staj Alanı</label>
                <select className="st-input" value={filter.internshipField} onChange={(e) => setFilter({ ...filter, internshipField: e.target.value })}>
                  <option value="">Seçiniz</option>
                  {INTERNSHIP_FIELDS.map((item) => (<option key={item} value={item}>{item}</option>))}
                </select>
              </div>
              <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-3">
                <div className="text-sm">
                  {error && <p className="text-rose-300">{error}</p>}
                  {message && <p className="text-emerald-300">{message}</p>}
                </div>
                <button className="st-btn min-w-44" type="submit" disabled={loading}>
                  {loading ? "AI analiz ediyor..." : "Önerileri Oluştur"}
                </button>
              </div>
            </form>
          </section>

          {loading && (
            <div className="mt-8 flex flex-col items-center gap-3 text-slate-400">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-400 border-t-transparent" />
              <p className="text-sm">Yapay zeka staj önerilerini hazırlıyor...</p>
            </div>
          )}

          <section className="mt-8 grid gap-4 md:grid-cols-2">
            {results.map((item, index) => (
              <article key={index} className="st-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-500/40">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-50">{item.companyName}</h3>
                    <p className="text-sm text-slate-400">{item.internshipField}</p>
                  </div>
                  <span className="rounded-full bg-brand-500/20 px-3 py-1 text-xs font-semibold text-brand-300">
                    Uyum %{item.score}
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-300">{item.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a className="st-btn" href={item.applyUrl} target="_blank" rel="noreferrer">LinkedIn'de Ara</a>
                  <button type="button" className="st-btn-ghost" onClick={() => toggleFavorite(item.companyName)}>
                    {favorites.includes(item.companyName) ? "Favoriden Çıkar" : "Favoriye Ekle"}
                  </button>
                </div>
                <div className="mt-4">
                  <label className="st-label">Notum</label>
                  <textarea
                    className="st-input min-h-20"
                    value={notes[item.companyName] ?? ""}
                    onChange={(e) => saveNote(item.companyName, e.target.value)}
                    placeholder="Bu şirketle ilgili notunu yaz..."
                  />
                </div>
              </article>
            ))}
          </section>
        </div>

        {/* Sağ ipucu kartı */}
        <aside className="hidden lg:flex flex-col w-72 shrink-0 mt-16">
  <div className="sticky top-8">
    <RobotTips tips={TIPS} title="💡 İpuçları" />
  </div>
</aside>
      </div>
    </main>
  );
}