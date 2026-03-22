"use client";
import { RobotTips } from "@/components/RobotTips";
import { useEffect, useState } from "react";
import { FlowNav } from "@/components/FlowNav";
import { STORAGE_KEYS } from "@/lib/stajify-data";

interface AIRecommendation {
  companyName: string;
  internshipField: string;
  description: string;
  score: number;
  applyUrl: string;
}

type NoteMap = Record<string, string>;

const TIPS = [
  "📝 Her şirket için mülakat sorularını not al.",
  "🧠 Şirketin ürün ve hizmetlerini özetleyerek kaydet.",
  "📞 İletişime geçtiğin kişilerin isimlerini yaz.",
  "✅ Başvuru adımlarını not defteri gibi kullan.",
];

export default function NotesPage() {
  const [recommendations, setRecommendations] = useState<AIRecommendation[]>([]);
  const [notes, setNotes] = useState<NoteMap>({});

  useEffect(() => {
    try {
      const recRaw = window.localStorage.getItem(STORAGE_KEYS.recommendations);
      const noteRaw = window.localStorage.getItem(STORAGE_KEYS.notes);
      if (recRaw) setRecommendations(JSON.parse(recRaw) as AIRecommendation[]);
      if (noteRaw) setNotes(JSON.parse(noteRaw) as NoteMap);
    } catch {
      setRecommendations([]);
      setNotes({});
    }
  }, []);

  const save = (companyName: string, text: string) => {
    const next = { ...notes, [companyName]: text };
    setNotes(next);
    window.localStorage.setItem(STORAGE_KEYS.notes, JSON.stringify(next));
  };

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-screen-2xl flex-col px-4 py-10 md:px-8">
      <FlowNav activeHref="/notlarim" />

      <div className="flex gap-8">
        <div className="flex-1 min-w-0">
          <header className="mb-8">
            <h1 className="text-3xl font-semibold text-slate-50 md:text-4xl">Notlarım</h1>
            <p className="mt-2 text-sm text-slate-400">İlan bazlı kişisel notlarını düzenleyebilir ve kaydedebilirsin.</p>
          </header>

          <section className="space-y-4">
            {recommendations.length === 0 && (
              <div className="st-card p-6 text-sm text-slate-400">
                Not alanı için önce Filtreleme sayfasında öneri oluşturmalısın.
              </div>
            )}
            {recommendations.map((item) => (
              <article key={item.companyName} className="st-card p-5">
                <h3 className="text-lg font-semibold text-slate-50">{item.companyName}</h3>
                <p className="text-sm text-slate-400">{item.internshipField}</p>
                <textarea
                  className="st-input mt-3 min-h-24"
                  value={notes[item.companyName] ?? ""}
                  placeholder="Bu şirkete dair notun..."
                  onChange={(e) => save(item.companyName, e.target.value)}
                />
              </article>
            ))}
          </section>
        </div>

        <aside className="hidden lg:flex flex-col w-72 shrink-0 mt-16">
  <div className="sticky top-8">
    <RobotTips tips={TIPS} title="💡 İpuçları" />
  </div>
</aside>
      </div>
    </main>
  );
}