import Link from "next/link";

import { FlowNav } from "@/components/FlowNav";

export default function TercihlerPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col px-6 py-14">
      <FlowNav activeHref="/tercihler" />

      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-50">Tercihler</h1>
        <p className="mt-2 text-slate-400">
          Akıllı filtreleme paneli (dönem, tarih aralığı, staj alanı, şehir / remote) burada
          uygulanacak — <span className="text-slate-50">tasks.md §3</span>.
        </p>
      </header>

      <section className="st-card mb-8 p-6">
        <p className="text-sm text-slate-400">
          Bu sayfa <strong className="text-slate-50">iskelet</strong> aşamasındadır. Bir sonraki adımda form
          bileşenleri ve backend <code className="font-mono text-brand-300">/api/filters</code> entegrasyonu
          eklenecek.
        </p>
      </section>

      <div className="flex flex-wrap gap-3">
        <Link className="st-btn-ghost" href="/">
          Geri
        </Link>
        <Link className="st-btn" href="/veri-girisi">
          Veri girişine geç
        </Link>
      </div>
    </main>
  );
}
