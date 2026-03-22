interface RobotTipsProps {
    tips: string[];
    title?: string;
  }
  
  export function RobotTips({ tips, title = "💡 İpuçları" }: RobotTipsProps) {
    return (
      <div className="flex flex-col items-center gap-4">
        {/* Robot */}
        <svg viewBox="0 0 120 140" className="w-28 h-28">
          <defs>
            <linearGradient id="robot-green" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4ade80" />
              <stop offset="100%" stopColor="#166534" />
            </linearGradient>
          </defs>
  
          {/* Anten */}
          <line x1="60" y1="4" x2="60" y2="18" stroke="#4ade80" strokeWidth="3" strokeLinecap="round" />
          <circle cx="60" cy="4" r="4" fill="#4ade80" />
  
          {/* Kafa */}
          <rect x="20" y="18" width="80" height="50" rx="16" fill="url(#robot-green)" />
  
          {/* Gözler */}
          <circle cx="42" cy="40" r="10" fill="#0f172a" />
          <circle cx="78" cy="40" r="10" fill="#0f172a" />
          <circle cx="44" cy="38" r="4" fill="#4ade80" />
          <circle cx="80" cy="38" r="4" fill="#4ade80" />
  
          {/* Ağız */}
          <rect x="38" y="56" width="44" height="5" rx="2.5" fill="#0f172a" opacity="0.4" />
  
          {/* Boyun */}
          <rect x="50" y="68" width="20" height="8" rx="4" fill="#166534" />
  
          {/* Gövde */}
          <rect x="16" y="76" width="88" height="50" rx="14" fill="url(#robot-green)" />
  
          {/* Gövde detay */}
          <rect x="36" y="90" width="48" height="6" rx="3" fill="#0f172a" opacity="0.3" />
          <rect x="44" y="102" width="32" height="6" rx="3" fill="#0f172a" opacity="0.3" />
  
          {/* Sol kol */}
          <rect x="2" y="80" width="14" height="36" rx="7" fill="#166534" />
          {/* Sağ kol */}
          <rect x="104" y="80" width="14" height="36" rx="7" fill="#166534" />
        </svg>
  
        {/* İpuçları konuşma balonu */}
        <div className="relative w-full">
          {/* Balon kuyruğu */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-slate-700" />
  
          <div className="st-card p-5 w-full">
            <h2 className="text-base font-semibold text-brand-400 mb-4 text-center">{title}</h2>
            <ul className="space-y-3">
              {tips.map((tip, i) => (
                <li
                  key={i}
                  className="text-sm text-slate-300 border-b border-slate-700/50 pb-3 last:border-0 last:pb-0"
                >
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }