const base = () =>
  (process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:5000").replace(/\/$/, "");

export async function fetchHealth(): Promise<unknown> {
  const res = await fetch(`${base()}/api/health`, { cache: "no-store" });
  if (!res.ok) throw new Error(`Health failed: ${res.status}`);
  return res.json();
}

export async function fetchGeminiPing(): Promise<unknown> {
  const res = await fetch(`${base()}/api/matching/gemini-ping`, { cache: "no-store" });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Gemini ping failed: ${res.status} ${body.slice(0, 200)}`);
  }
  return res.json();
}
