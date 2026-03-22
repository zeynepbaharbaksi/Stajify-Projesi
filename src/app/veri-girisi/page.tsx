import Link from "next/link";

import { FlowNav } from "@/components/FlowNav";

export default function VeriGirisiPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col px-6 py-14">
      <FlowNav activeHref="/veri-girisi" />

      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-50">Veri girişi</h1>
        <p className="mt-2 text-slate-400">
          Beceri alanı ve PDF CV yükleme burada olacak — <span className="text-slate-50">PRD 3.3</span>.
        </p>
      </header>

      <section className="st-card mb-8 p-6">
        <p className="text-sm text-slate-400">
          Şimdilik yönlendirme iskeleti hazır. Sonraki görevlerde metin alanı, etiketleme ve{" "}
          <code className="font-mono text-brand-300">PyMuPDF</code> ile CV metin çıkarma bağlanacak.
        </p>
      </section>

      <div className="flex flex-wrap gap-3">
        <Link className="st-btn-ghost" href="/tercihler">
          Geri
        </Link>
        <Link className="st-btn" href="/sonuc">
          Sonuç ekranına geç (önizleme)
        </Link>
      </div>
    </main>
  );
}
