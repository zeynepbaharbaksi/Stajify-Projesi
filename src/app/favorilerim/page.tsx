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

const TIPS = [
  "⭐ Favorilediğin şirketlere öncelikli başvur.",
  "📋 Her favori şirket için özel bir CV hazırlamayı düşün.",
  "🔔 Şirketlerin LinkedIn sayfalarını takip et, yeni ilanları kaçırma.",
  "📅 Başvuru tarihlerini takvimine ekle.",
];

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [recommendations, setRecommendations] = useState<AIRecommendation[]>([]);

  useEffect(() => {
    try {
      const favRaw = window.localStorage.getItem(STORAGE_KEYS.favorites);
      const recRaw = window.localStorage.getItem(STORAGE_KEYS.recommendations);
      if (favRaw) setFavorites(JSON.parse(favRaw) as string[]);
      if (recRaw) setRecommendations(JSON.parse(recRaw) as AIRecommendation[]);
    } catch {
      setFavorites([]);
      setRecommendations([]);
    }
  }, []);

  const items = recommendations.filter((x) => favorites.includes(x.companyName));

  const removeFavorite = (companyName: string) => {
    const next = favorites.filter((x) => x !== companyName);
    setFavorites(next);
    window.localStorage.setItem(STORAGE_KEYS.favorites, JSON.stringify(next));
  };

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-screen-2xl flex-col px-4 py-10 md:px-8">
      <FlowNav activeHref="/favorilerim" />

      <div className="flex gap-8">
        <div className="flex-1 min-w-0">
          <header className="mb-8">
            <h1 className="text-3xl font-semibold text-slate-50 md:text-4xl">Favorilerim</h1>
            <p className="mt-2 text-sm text-slate-400">Filtreleme ekranında favorilediğin staj ilanları burada listelenir.</p>
          </header>

          <section className="grid gap-4 md:grid-cols-2">
            {items.length === 0 && (
              <div className="st-card p-6 text-sm text-slate-400">
                Henüz favori eklenmemiş. Filtreleme sayfasından ilanları favorileyebilirsin.
              </div>
            )}
            {items.map((item) => (
              <article key={item.companyName} className="st-card p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-50">{item.companyName}</h3>
                    <p className="text-sm text-slate-400">{item.internshipField}</p>
                  </div>
                  <span className="rounded-full bg-brand-500/20 px-3 py-1 text-xs font-semibold text-brand-300">Uyum %{item.score}</span>
                </div>
                <p className="mt-3 text-sm text-slate-300">{item.description}</p>
                <div className="mt-4 flex gap-2">
                  <a className="st-btn" href={item.applyUrl} target="_blank" rel="noreferrer">LinkedIn'de Ara</a>
                  <button className="st-btn-ghost" onClick={() => removeFavorite(item.companyName)}>Favoriden Çıkar</button>
                </div>
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