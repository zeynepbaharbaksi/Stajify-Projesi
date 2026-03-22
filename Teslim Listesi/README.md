# Stajify AI

PRD ve `tasks.md` ile uyumlu monorepo: **Next.js (frontend)** + **Flask (backend)**.

## Gereksinimler

- **Node.js 18+** ve `npm` (frontend için)
- **Python 3.11+** (önerilir; `py` launcher ile de çalışır)

## Ortam değişkeni

Proje kökünde `.env` dosyasında Google AI Studio anahtarınızı tanımlayın:

```env
GEMINI_API_KEY=your_api_key_here
```

> `=` işaretinden sonra boşluk bırakmayın. Anahtar backend tarafında `strip()` ile okunur.

## Backend (Flask)

```powershell
cd backend
py -m venv .venv
.\.venv\Scripts\Activate.ps1
py -m pip install -r requirements.txt
py run.py
```

API varsayılan: `http://127.0.0.1:5000`  
Sağlık: `GET http://127.0.0.1:5000/api/health`  
Gemini test: `GET http://127.0.0.1:5000/api/matching/gemini-ping`  
İlan listesi (seed sonrası): `GET http://127.0.0.1:5000/api/jobs/list`

### Örnek veri ve SQLite

```powershell
cd backend
py seed_data.py
```

PostgreSQL kullanmak için proje kökü `.env` içine örneğin:

`DATABASE_URL=postgresql+psycopg2://user:pass@localhost:5432/stajify`

### Alembic (migrasyon)

```powershell
cd backend
py -m alembic revision --autogenerate -m "initial"
py -m alembic upgrade head
```

## Frontend (Next.js)

```powershell
cd frontend
npm install
npm run dev
```

Uygulama: `http://localhost:3000`

## Sayfa rotaları (kullanıcı akışı)

| Rota | Açıklama |
|------|----------|
| `/` | Hoş geldin |
| `/tercihler` | Akıllı filtreleme |
| `/veri-girisi` | Beceri + CV |
| `/sonuc` | Eşleşme sonuçları |
