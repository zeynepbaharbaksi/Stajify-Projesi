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

type ApplicationStatus = "başvuruldu" | "mülakat" | "kabul" | "red";

interface Application {
  company: AIRecommendation;
  status: ApplicationStatus;
  date: string;
}

type ApplicationMap = Record<string, Application>;

const STATUS_LABELS: Record<ApplicationStatus, string> = {
  başvuruldu: "📨 Başvuruldu",
  mülakat: "🗓 Mülakat",
  kabul: "✅ Kabul",
  red: "❌ Red",
};

const STATUS_COLORS: Record<ApplicationStatus, string> = {
  başvuruldu: "bg-blue-500/20 text-blue-300",
  mülakat: "bg-yellow-500/20 text-yellow-300",
  kabul: "bg-emerald-500/20 text-emerald-300",
  red: "bg-rose-500/20 text-rose-300",
};

const TIPS = [
  "📨 Başvuru yaptıktan sonra durumu güncellemeyi unutma.",
  "🗓 Mülakat davetini aldığında tarihi takvine ekle.",
  "✉️ Mülakatın ardından teşekkür maili atmayı düşün.",
  "📊 Kaç şirkete başvurduğunu takip etmek motivasyonu artırır.",
];

export default function ApplicationsPage() {
  const [recommendations, setRecommendations] = useState<AIRecommendation[]>([]);
  const [applications, setApplications] = useState<ApplicationMap>({});

  useEffect(() => {
    try {
      const recRaw = window.localStorage.getItem(STORAGE_KEYS.recommendations);
      const appRaw = window.localStorage.getItem("stajify_applications");
      if (recRaw) setRecommendations(JSON.parse(recRaw) as AIRecommendation[]);
      if (appRaw) setApplications(JSON.parse(appRaw) as ApplicationMap);
    } catch {
      setRecommendations([]);
    }
  }, []);

  const apply = (company: AIRecommendation) => {
    const next: ApplicationMap = {
      ...applications,
      [company.companyName]: { company, status: "başvuruldu", date: new Date().toLocaleDateString("tr-TR") },
    };
    setApplications(next);
    window.localStorage.setItem("stajify_applications", JSON.stringify(next));
  };

  const updateStatus = (companyName: string, status: ApplicationStatus) => {
    const next = { ...applications, [companyName]: { ...applications[companyName], status } };
    setApplications(next);
    window.localStorage.setItem("stajify_applications", JSON.stringify(next));
  };

  const remove = (companyName: string) => {
    const next = { ...applications };
    delete next[companyName];
    setApplications(next);
    window.localStorage.setItem("stajify_applications", JSON.stringify(next));
  };

  const applied = Object.values(applications);

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-screen-2xl flex-col px-4 py-10 md:px-8">
      <FlowNav activeHref="/basvurularim" />

      <div className="flex gap-8">
        <div className="flex-1 min-w-0">
          <header className="mb-8">
            <h1 className="text-3xl font-semibold text-slate-50 md:text-4xl">Başvurularım</h1>
            <p className="mt-2 text-sm text-slate-400">Başvurduğun şirketleri takip et ve durumlarını güncelle.</p>
          </header>

          {recommendations.length > 0 && (
            <section className="st-card p-6 mb-8">
              <h2 className="text-lg font-semibold text-slate-50 mb-4">Önerilen Şirketler</h2>
              <div className="grid gap-3 md:grid-cols-2">
                {recommendations.map((item) => (
                  <div key={item.companyName} className="flex items-center justify-between gap-3 rounded-lg border border-slate-700 p-3">
                    <div>
                      <p className="text-sm font-semibold text-slate-50">{item.companyName}</p>
                      <p className="text-xs text-slate-400">{item.internshipField}</p>
                    </div>
                    {applications[item.companyName] ? (
                      <span className={`rounded-full px-2 py-1 text-xs font-semibold ${STATUS_COLORS[applications[item.companyName].status]}`}>
                        {STATUS_LABELS[applications[item.companyName].status]}
                      </span>
                    ) : (
                      <button className="st-btn text-xs px-3 py-1" onClick={() => apply(item)}>Başvurdum</button>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          <section>
            <h2 className="text-lg font-semibold text-slate-50 mb-4">
              Başvuru Takibi {applied.length > 0 && `(${applied.length})`}
            </h2>
            {applied.length === 0 ? (
              <div className="st-card p-6 text-sm text-slate-400">Henüz başvuru eklenmemiş. Yukarıdaki listeden "Başvurdum" butonuna tıkla.</div>
            ) : (
              <div className="space-y-3">
                {applied.map((app) => (
                  <article key={app.company.companyName} className="st-card p-5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <h3 className="text-base font-semibold text-slate-50">{app.company.companyName}</h3>
                        <p className="text-xs text-slate-400">{app.company.internshipField} · Başvuru tarihi: {app.date}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <select className="st-input text-xs py-1" value={app.status} onChange={(e) => updateStatus(app.company.companyName, e.target.value as ApplicationStatus)}>
                          {Object.entries(STATUS_LABELS).map(([value, label]) => (
                            <option key={value} value={value}>{label}</option>
                          ))}
                        </select>
                        <button className="st-btn-ghost text-xs px-2 py-1" onClick={() => remove(app.company.companyName)}>Sil</button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
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