"use client";
import { RobotTips } from "@/components/RobotTips";
import { useEffect, useRef, useState } from "react";
import { FlowNav } from "@/components/FlowNav";

const GROQ_API_KEY = "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";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const TIPS = [
  "💬 'Arçelik'te staj nasıl bir deneyim?' diye sorabilirsin.",
  "📄 'Endüstri mühendisi için CV nasıl olmalı?' diye sorabilirsin.",
  "🎯 'Mülakatta ne tür sorular sorulur?' diye sorabilirsin.",
  "🏢 'İstanbul'da hangi şirketler stajyer alıyor?' diye sorabilirsin.",
];

export default function SohbetPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Merhaba! Ben Stajify AI asistanıyım. Staj şirketleri, başvuru süreçleri veya kariyer hakkında her şeyi sorabilirsin! 🎓",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = async () => {
    if (!input.trim() || loading) return;
    const userMessage: Message = { role: "user", content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${GROQ_API_KEY}` },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            { role: "system", content: "Sen Stajify AI adlı bir staj danışmanısın. Türkiye'deki staj fırsatları, şirketler, başvuru süreçleri ve kariyer gelişimi hakkında Türkçe olarak yardımcı oluyorsun. Kısa ve net cevaplar ver." },
            ...newMessages,
          ],
          temperature: 0.7,
        }),
      });
      const data = await response.json();
      const reply = data.choices[0].message.content as string;
      setMessages([...newMessages, { role: "assistant", content: reply }]);
    } catch {
      setMessages([...newMessages, { role: "assistant", content: "Bir hata oluştu, tekrar dener misin?" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-screen-2xl flex-col px-4 py-10 md:px-8">
      <FlowNav activeHref="/sohbet" />

      <div className="flex gap-8">
        <div className="flex-1 min-w-0">
          <header className="mb-8">
            <h1 className="text-3xl font-semibold text-slate-50 md:text-4xl">AI Sohbet</h1>
            <p className="mt-2 text-sm text-slate-400">Staj ve kariyer hakkında yapay zekaya her şeyi sorabilirsin.</p>
          </header>

          <section className="st-card flex flex-1 flex-col p-4 md:p-6">
            <div className="flex-1 space-y-4 overflow-y-auto max-h-[500px] pr-1">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${msg.role === "user" ? "bg-brand-500/30 text-slate-50" : "bg-slate-700/60 text-slate-200"}`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="rounded-2xl bg-slate-700/60 px-4 py-3 text-sm text-slate-400">Yazıyor...</div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>
            <div className="mt-4 flex gap-2">
              <input className="st-input flex-1" placeholder="Bir şey sor..." value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send()} />
              <button className="st-btn min-w-20" onClick={send} disabled={loading}>Gönder</button>
            </div>
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