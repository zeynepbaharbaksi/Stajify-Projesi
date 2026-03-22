"use client";
import { RobotTips } from "@/components/RobotTips";
import Link from "next/link";
import type { FormEvent } from "react";
import { useEffect, useState } from "react";

import { FlowNav } from "@/components/FlowNav";
import { MultiSelectDropdown } from "@/components/MultiSelectDropdown";
import {
  INTEREST_OPTIONS,
  ProfileForm,
  SKILL_OPTIONS,
  STORAGE_KEYS,
} from "@/lib/stajify-data";

const INITIAL_FORM: ProfileForm = {
  firstName: "",
  lastName: "",
  email: "",
  interests: [],
  skills: [],
};

const TIPS = [
  "📌 İlgi alanların ne kadar spesifik olursa, öneriler o kadar isabetli olur.",
  "🛠 Teknik becerilerini eksiksiz seç, AI bunu değerlendiriyor.",
  "📬 Gerçek e-postanı gir, şirketler bazen direkt ulaşıyor.",
  "🔄 Profili istediğin zaman güncelleyip yeni öneriler alabilirsin.",
];

export default function BilgilerimPage() {
  const [form, setForm] = useState<ProfileForm>(INITIAL_FORM);
  const [error, setError] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEYS.profile);
    if (stored) {
      try {
        setForm(JSON.parse(stored) as ProfileForm);
      } catch {
        setForm(INITIAL_FORM);
      }
    }
  }, []);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSaved(false);
    setError("");
    if (!form.firstName || !form.lastName || !form.email) {
      setError("Ad, Soyad ve E-posta alanları zorunludur.");
      return;
    }
    if (form.interests.length === 0 || form.skills.length === 0) {
      setError("En az bir ilgi alanı ve bir beceri seçmelisiniz.");
      return;
    }
    window.localStorage.setItem(STORAGE_KEYS.profile, JSON.stringify(form));
    setSaved(true);
  };

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-screen-2xl flex-col px-4 py-10 md:px-8">
      <FlowNav activeHref="/bilgilerim" />

      <div className="flex gap-8">
        <div className="flex-1 min-w-0">
          <header className="mb-8">
            <p className="mb-2 text-lg font-bold tracking-[0.2em] text-brand-400">STAJIFY AI</p>
            <h1 className="text-3xl font-semibold text-slate-50 md:text-4xl">Bilgilerim</h1>
            <p className="mt-2 max-w-3xl text-sm text-slate-400 md:text-base">
              Kişisel profilini oluştur. Seçtiğin ilgi alanları ve beceriler, filtre sonuçlarında AI uyum puanını etkiler.
            </p>
          </header>

          <section className="st-card p-6 md:p-8">
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <label className="st-label" htmlFor="firstName">Ad</label>
                  <input id="firstName" className="st-input" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} placeholder="Adınız" />
                </div>
                <div>
                  <label className="st-label" htmlFor="lastName">Soyad</label>
                  <input id="lastName" className="st-input" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} placeholder="Soyadınız" />
                </div>
                <div>
                  <label className="st-label" htmlFor="email">E-posta</label>
                  <input id="email" type="email" className="st-input" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="ornek@mail.com" />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <MultiSelectDropdown id="interests" label="İlgi Alanları" options={INTEREST_OPTIONS} value={form.interests} placeholder="İlgi alanı seçiniz" onChange={(next) => setForm({ ...form, interests: next })} />
                <MultiSelectDropdown id="skills" label="Beceriler" options={SKILL_OPTIONS} value={form.skills} placeholder="Beceri seçiniz" onChange={(next) => setForm({ ...form, skills: next })} />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="text-sm">
                  {error && <p className="text-rose-300">{error}</p>}
                  {saved && <p className="text-emerald-300">Bilgiler kaydedildi. Filtreleme sayfasına geçebilirsin.</p>}
                </div>
                <div className="flex gap-3">
                  <button type="submit" className="st-btn">Bilgilerimi Kaydet</button>
                  <Link href="/filtreleme" className="st-btn-ghost">Filtrelemeye Geç</Link>
                </div>
              </div>
            </form>
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