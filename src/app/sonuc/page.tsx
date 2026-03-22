import Link from "next/link";

import { FlowNav } from "@/components/FlowNav";

export default function SonucPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col px-6 py-14">
      <FlowNav activeHref="/sonuc" />

      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-50">Sonuç</h1>
        <p className="mt-2 text-slate-400">
          Eşleşme yüzdesi, şirket kartları ve &quot;İlana Git&quot; CTA burada listelenecek —{" "}
          <span className="text-slate-50">PRD 3.5</span>.
        </p>
      </header>

      <section className="st-card mb-8 p-6">
        <p className="text-sm text-slate-400">
          Dashboard kartları ve sıralama, AI eşleştirme endpoint&apos;i hazır olduktan sonra bu sayfaya
          bağlanacak.
        </p>
      </section>

      <div className="flex flex-wrap gap-3">
        <Link className="st-btn-ghost" href="/veri-girisi">
          Geri
        </Link>
        <Link className="st-btn" href="/">
          Başa dön
        </Link>
      </div>
    </main>
  );
}
