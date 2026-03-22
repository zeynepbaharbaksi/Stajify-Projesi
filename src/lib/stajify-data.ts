export type ProfileForm = {
  firstName: string;
  lastName: string;
  email: string;
  interests: string[];
  skills: string[];
};

export type FilterForm = {
  classLevel: string;
  city: string;
  university: string;
  department: string;
  internshipField: string;
};

export type Recommendation = {
  id: string;
  companyName: string;
  internshipField: string;
  duration: "Kısa Dönem" | "Uzun Dönem";
  score: number;
  description: string;
  applyUrl: string;
  source: string;
};

export const STORAGE_KEYS = {
  profile: "stajify_profile",
  recommendations: "stajify_recommendations",
  favorites: "stajify_favorites",
  notes: "stajify_notes",
} as const;

export const INTEREST_OPTIONS = [
  "Yapay Zeka",
  "Makine Öğrenmesi",
  "Veri Analitiği",
  "İş Zekası",
  "Süreç Optimizasyonu",
  "Yöneylem Araştırması",
  "Nesne Yönelimli Programlama",
  "Yazılım Geliştirme",
  "Sürdürülebilirlik",
  "Yeşil Enerji",
  "Robotik",
  "Endüstriyel Otomasyon",
  "Girişimcilik",
  "İnovasyon Yönetimi",
  "Ürün Yönetimi",
  "Kullanıcı Deneyimi (UX)",
  "Siber Güvenlik",
  "Blokzincir Teknolojileri",
  "Finansal Mühendislik",
  "Risk Analizi",
  "Yalın Üretim",
  "Kalite Yönetimi",
];

export const SKILL_OPTIONS = [
  "Python",
  "C++",
  "MATLAB",
  "R",
  "SolidWorks",
  "AutoCAD",
  "CATIA",
  "Revit",
  "ANSYS",
  "Abaqus",
  "SQL",
  "Excel (ileri seviye)",
  "Power BI",
  "Tableau",
  "MS Project",
  "Jira",
  "Altı Sigma",
  "Kaizen",
  "Süreç Optimizasyon Teknikleri",
];

export const CLASS_OPTIONS = [
  "Lise 3",
  "Lise 4",
  "Üniversite 1",
  "Üniversite 2",
  "Üniversite 3",
  "Üniversite 4",
];

export const CITY_OPTIONS = [
  "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın",
  "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı",
  "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep",
  "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Isparta", "Mersin", "İstanbul", "İzmir", "Kars",
  "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa",
  "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun",
  "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van",
  "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın",
  "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce",
];

export const ENGINEERING_DEPARTMENTS = [
  "Elektrik – Elektronik Mühendisliği",
  "Bilgisayar Mühendisliği",
  "Yazılım Mühendisliği",
  "Makine Mühendisliği",
  "İnşaat Mühendisliği",
  "Endüstri Mühendisliği",
  "Kimya Mühendisliği",
  "Çevre Mühendisliği",
  "Gıda Mühendisliği",
  "Biyomedikal Mühendisliği",
  "Ziraat Mühendisliği",
  "Uzay Mühendisliği",
  "Petrol Mühendisliği",
  "Otomotiv Mühendisliği",
  "Maden Mühendisliği",
  "Nükleer Enerji Mühendisliği",
  "Metalurji ve Malzeme Mühendisliği",
  "Mekatronik Mühendisliği",
  "Jeoloji Mühendisliği",
  "Matematik Mühendisliği",
  "Uçak Mühendisliği",
];

export const UNIVERSITY_OPTIONS = [
  "İstanbul Teknik Üniversitesi",
  "Orta Doğu Teknik Üniversitesi",
  "Boğaziçi Üniversitesi",
  "Hacettepe Üniversitesi",
  "Ankara Üniversitesi",
  "Gazi Üniversitesi",
  "Yıldız Teknik Üniversitesi",
  "Marmara Üniversitesi",
  "İstanbul Üniversitesi",
  "Ege Üniversitesi",
  "Dokuz Eylül Üniversitesi",
  "Gebze Teknik Üniversitesi",
  "Bursa Uludağ Üniversitesi",
  "Sakarya Üniversitesi",
  "Eskişehir Teknik Üniversitesi",
  "Karadeniz Teknik Üniversitesi",
  "Erciyes Üniversitesi",
  "Çukurova Üniversitesi",
  "Akdeniz Üniversitesi",
  "Pamukkale Üniversitesi",
  "Selçuk Üniversitesi",
  "Kocaeli Üniversitesi",
  "Fırat Üniversitesi",
  "Atatürk Üniversitesi",
  "İnönü Üniversitesi",
  "Yeditepe Üniversitesi",
  "Bilkent Üniversitesi",
  "Koç Üniversitesi",
  "Sabancı Üniversitesi",
  "TOBB ETÜ",
];

export const INTERNSHIP_FIELDS = [
  "Üretim ve İmalat",
  "Araştırma ve Geliştirme (Ar-Ge)",
  "Planlama ve Stok Yönetimi",
  "Kalite Kontrol ve Güvence",
  "Yazılım Geliştirme ve Bilgi Teknolojileri (IT)",
  "Proje Yönetimi",
  "Tedarik Zinciri ve Lojistik",
  "Süreç İyileştirme ve Metot",
  "Bakım ve Onarım",
  "Ürün Yönetimi ve Pazarlama",
  "İş Sağlığı ve Güvenliği (İSG)",
  "Satın Alma ve Finansal Analiz",
];

export const PRIORITY_SOURCES = [
  "LinkedIn",
  "Microfon",
  "Youthall",
  "Anbean",
  "Savunma Kariyer",
];

export const RECOMMENDATION_POOL: Omit<Recommendation, "score">[] = [
  {
    id: "nova-arge",
    companyName: "Nova Teknoloji",
    internshipField: "Araştırma ve Geliştirme (Ar-Ge)",
    duration: "Uzun Dönem",
    description: "Ar-Ge biriminde ürün prototipleme ve test süreçlerine destek.",
    applyUrl: "https://www.linkedin.com/",
    source: "LinkedIn",
  },
  {
    id: "anadolu-it",
    companyName: "Anadolu Dijital",
    internshipField: "Yazılım Geliştirme ve Bilgi Teknolojileri (IT)",
    duration: "Kısa Dönem",
    description: "Web uygulamalarında React ve API entegrasyonu odaklı staj.",
    applyUrl: "https://www.youthall.com/",
    source: "Youthall",
  },
  {
    id: "optima-lojistik",
    companyName: "Optima Lojistik",
    internshipField: "Tedarik Zinciri ve Lojistik",
    duration: "Uzun Dönem",
    description: "Operasyon planlama ve rota optimizasyon analizlerine katkı.",
    applyUrl: "https://www.microfon.co/",
    source: "Microfon",
  },
  {
    id: "zenith-kalite",
    companyName: "Zenith Endüstri",
    internshipField: "Kalite Kontrol ve Güvence",
    duration: "Kısa Dönem",
    description: "Kalite metrikleri ve süreç doğrulama adımlarına destek.",
    applyUrl: "https://anbean.com/",
    source: "Anbean",
  },
  {
    id: "savtek-proje",
    companyName: "SavTek Savunma",
    internshipField: "Proje Yönetimi",
    duration: "Uzun Dönem",
    description: "Savunma projelerinde sprint takibi ve raporlama süreçleri.",
    applyUrl: "https://savunmakariyer.com/",
    source: "Savunma Kariyer",
  },
  {
    id: "green-prod",
    companyName: "GreenLine Üretim",
    internshipField: "Üretim ve İmalat",
    duration: "Kısa Dönem",
    description: "Yalın üretim ve verimlilik odaklı saha stajı.",
    applyUrl: "https://www.linkedin.com/",
    source: "LinkedIn",
  },
];

