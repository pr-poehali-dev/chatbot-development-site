import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const nav = [
  { label: 'Главная', href: '#home' },
  { label: 'Технологии', href: '#tech' },
  { label: 'Услуги', href: '#services' },
  { label: 'Портфолио', href: '#work' },
];

const tech = [
  { id: '01', name: 'ChatGPT API', desc: 'Прямая интеграция с GPT-4o и GPT-4 Turbo. Контекст до 128K токенов, function calling, потоковая выдача ответов.' },
  { id: '02', name: 'RAG / База знаний', desc: 'Бот отвечает по вашим документам. Векторный поиск, эмбеддинги, актуальные данные без галлюцинаций.' },
  { id: '03', name: 'Мультиплатформенность', desc: 'Один движок — все каналы. Telegram, WhatsApp, веб-виджет, VK, Avito работают синхронно.' },
  { id: '04', name: 'Аналитика диалогов', desc: 'Сбор метрик, оценка качества ответов и дообучение на реальных разговорах с пользователями.' },
];

const platforms = ['Telegram', 'WhatsApp', 'Веб-виджет', 'VK', 'Avito', 'CRM', 'Slack', 'Discord'];

const services = [
  { icon: 'Bot', title: 'Боты под ключ', desc: 'Проектирование, разработка и запуск AI-ассистента под вашу задачу — от поддержки до продаж.' },
  { icon: 'Plug', title: 'API-интеграция', desc: 'Подключаем ChatGPT к вашим системам: сайт, CRM, мессенджеры и внутренние сервисы.' },
  { icon: 'Database', title: 'Обучение на данных', desc: 'Загружаем вашу базу знаний, чтобы бот отвечал точно и в фирменном стиле компании.' },
  { icon: 'Gauge', title: 'Поддержка и развитие', desc: 'Мониторим качество ответов, обновляем модели и масштабируем под нагрузку.' },
];

const work = [
  { tag: 'E-COMMERCE', title: 'Бот-консультант магазина', metric: '+38% конверсия', desc: 'Подбор товаров и оформление заказа прямо в чате.' },
  { tag: 'SUPPORT', title: 'Поддержка 24/7 для SaaS', metric: '−70% нагрузки', desc: 'Автоответы на 90% типовых обращений по базе знаний.' },
  { tag: 'EDUCATION', title: 'AI-наставник курсов', metric: '12K студентов', desc: 'Персональные ответы на вопросы по программе обучения.' },
];

const codeSnippet = `import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_KEY });

const reply = await client.chat.completions.create({
  model: "gpt-4o",
  messages: [
    { role: "system", content: "Ты — ассистент бренда." },
    { role: "user", content: userMessage }
  ],
  stream: true,
});`;

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
      {/* NAV */}
      <header className="sticky top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <a href="#home" className="font-mono text-sm font-medium tracking-tight">
            neuro<span className="text-accent">.</span>chat
          </a>
          <nav className="hidden md:flex items-center gap-10">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <Button className="hidden md:inline-flex rounded-none bg-foreground text-background hover:bg-accent transition-colors">
            Обсудить проект
          </Button>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Меню">
            <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-background animate-rise">
            <div className="container py-4 flex flex-col gap-4">
              {nav.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)} className="text-sm text-muted-foreground">
                  {n.label}
                </a>
              ))}
              <Button className="rounded-none bg-foreground text-background">Обсудить проект</Button>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative pt-28 md:pt-40 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-60 pointer-events-none" />
        <div className="container relative">
          <div className="flex items-center gap-2 mb-6 md:mb-8 animate-rise">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">Powered by ChatGPT</span>
          </div>
          <h1 className="text-[2.25rem] leading-[1.05] sm:text-6xl md:text-8xl md:leading-[0.95] font-extrabold tracking-tight max-w-4xl animate-rise" style={{ animationDelay: '0.1s' }}>
            Умные чат-боты, которые <span className="text-accent">говорят</span> как человек.
          </h1>
          <p className="mt-6 md:mt-8 text-base md:text-xl text-muted-foreground max-w-xl animate-rise" style={{ animationDelay: '0.2s' }}>
            Разрабатываем AI-ассистентов на базе ChatGPT и подключаем их к любым платформам — от сайта до мессенджеров.
          </p>
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 animate-rise" style={{ animationDelay: '0.3s' }}>
            <Button size="lg" className="w-full sm:w-auto rounded-none h-12 px-8 bg-foreground text-background hover:bg-accent transition-colors">
              Заказать бота
              <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-none h-12 px-8 border-foreground/20 hover:bg-secondary">
              Смотреть работы
            </Button>
          </div>

          <div className="mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border animate-rise" style={{ animationDelay: '0.4s' }}>
            {[['120+', 'ботов запущено'], ['98%', 'точность ответов'], ['8', 'платформ'], ['24/7', 'без выходных']].map(([v, l]) => (
              <div key={l} className="bg-background p-5 md:p-6">
                <div className="font-mono text-2xl md:text-3xl font-semibold">{v}</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH */}
      <section id="tech" className="py-20 md:py-28 border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
            <div>
              <span className="font-mono text-xs tracking-widest text-accent uppercase">/ Технологии</span>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">Что под капотом</h2>
            </div>
            <p className="text-muted-foreground max-w-sm">Стек, который обеспечивает естественные диалоги и точные ответы на ваших данных.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
            {tech.map((t) => (
              <div key={t.id} className="bg-background p-6 md:p-10 group hover:bg-secondary transition-colors">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-sm text-accent">{t.id}</span>
                  <h3 className="text-xl md:text-2xl font-semibold">{t.name}</h3>
                </div>
                <p className="mt-4 text-muted-foreground leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>

          {/* CODE BLOCK */}
          <div className="mt-px grid lg:grid-cols-2 gap-px bg-border border border-t-0 border-border">
            <div className="bg-foreground text-background p-5 md:p-8 font-mono text-[11px] md:text-sm overflow-x-auto">
              <div className="flex gap-2 mb-5 opacity-60">
                <span className="h-3 w-3 rounded-full bg-background/40" />
                <span className="h-3 w-3 rounded-full bg-background/40" />
                <span className="h-3 w-3 rounded-full bg-background/40" />
              </div>
              <pre className="whitespace-pre leading-relaxed min-w-max"><code>{codeSnippet}<span className="cursor-blink">▍</span></code></pre>
            </div>
            <div className="bg-background p-6 md:p-10 flex flex-col justify-center">
              <h3 className="text-xl md:text-2xl font-semibold mb-3">Простое подключение по API</h3>
              <p className="text-muted-foreground mb-6">Несколько строк — и ChatGPT уже отвечает в вашем продукте. Мы берём на себя всю настройку, безопасность ключей и масштабирование.</p>
              <a href="#services" className="font-mono text-sm text-accent inline-flex items-center hover:gap-3 gap-2 transition-all">
                Как мы интегрируем <Icon name="ArrowRight" size={16} />
              </a>
            </div>
          </div>

          {/* PLATFORMS */}
          <div className="mt-12 md:mt-16">
            <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-6">Примеры подключения к платформам</p>
            <div className="flex flex-wrap gap-3">
              {platforms.map((p) => (
                <span key={p} className="px-5 py-2.5 border border-border font-mono text-sm hover:border-accent hover:text-accent transition-colors">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 md:py-28 border-t border-border bg-secondary/40">
        <div className="container">
          <span className="font-mono text-xs tracking-widest text-accent uppercase">/ Услуги</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight mb-12 md:mb-16 max-w-2xl">От идеи до работающего ассистента</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {services.map((s) => (
              <div key={s.title} className="bg-background p-6 md:p-8 hover:bg-secondary transition-colors">
                <Icon name={s.icon} size={28} className="text-accent mb-4 md:mb-6" />
                <h3 className="text-lg md:text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="py-20 md:py-28 border-t border-border">
        <div className="container">
          <span className="font-mono text-xs tracking-widest text-accent uppercase">/ Портфолио</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight mb-12 md:mb-16">Боты в деле</h2>
          <div className="border-t border-border">
            {work.map((w) => (
              <div key={w.title} className="group border-b border-border py-6 md:py-8 grid md:grid-cols-12 gap-2 md:gap-4 md:items-center hover:bg-secondary/50 transition-colors px-2">
                <span className="md:col-span-2 font-mono text-xs tracking-widest text-muted-foreground">{w.tag}</span>
                <h3 className="md:col-span-4 text-xl md:text-2xl font-semibold">{w.title}</h3>
                <p className="md:col-span-4 text-sm md:text-base text-muted-foreground">{w.desc}</p>
                <span className="md:col-span-2 font-mono text-accent md:text-right">{w.metric}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 border-t border-border bg-foreground text-background">
        <div className="container text-center">
          <h2 className="text-3xl md:text-6xl font-extrabold tracking-tight max-w-3xl mx-auto leading-tight">
            Запустим вашего AI-бота за пару недель
          </h2>
          <p className="mt-6 text-background/70 max-w-lg mx-auto">Расскажите о задаче — предложим решение и оценим сроки.</p>
          <Button size="lg" className="mt-8 md:mt-10 rounded-none h-12 px-10 bg-accent text-accent-foreground hover:bg-background hover:text-foreground transition-colors">
            Обсудить проект
            <Icon name="ArrowRight" size={18} className="ml-2" />
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="container flex flex-col md:flex-row justify-between gap-4 text-sm text-muted-foreground">
          <span className="font-mono">neuro<span className="text-accent">.</span>chat © 2026</span>
          <div className="flex gap-6">
            <a href="#tech" className="hover:text-foreground transition-colors">Технологии</a>
            <a href="#services" className="hover:text-foreground transition-colors">Услуги</a>
            <a href="#work" className="hover:text-foreground transition-colors">Портфолио</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;