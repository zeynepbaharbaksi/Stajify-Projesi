"use client";

import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-10 md:px-8">
      <section className="st-card st-hero-enter relative flex min-h-[72vh] flex-col items-center justify-center overflow-hidden p-8 text-center md:min-h-[78vh]">
        <div className="absolute -top-28 h-64 w-64 rounded-full bg-brand-500/15 blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-72 w-72 rounded-full bg-brand-400/10 blur-3xl" />

        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-5 scale-150 md:scale-[1.9]">
            <BrandLogo />
          </div>
          <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-50 md:text-7xl">
            Stajify AI
          </h1>
          <p className="mt-5 max-w-2xl text-base text-slate-300 md:text-lg">
            Öğrenci profili ve filtre tercihlerini yapay zeka ile eşleştirerek
            en uygun staj ilanlarını, uyum oranlarıyla tek panelde sunar.
          </p>
          <Link href="/bilgilerim" className="st-btn mt-8 min-w-40 text-base">
            Başla
          </Link>
        </div>
      </section>

      <footer className="mt-8 pb-3 text-center text-sm text-slate-400">
        Bu web sitesini Zeynep Bahar Baksı, Endüstri Mühendisliği bölümü
        öğrencisi olarak 20 Mart 2026&apos;da oluşturmuştur.
      </footer>
    </main>
  );
}
