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

const codeSnippet = `const reply = await openai.chat
  .completions.create({
  model: "gpt-4o",
  messages: [
    { role: "system",
      content: "Ты — ассистент." },
    { role: "user",
      content: userMessage }
  ],
});`;

const stats = [
  ['120+', 'ботов запущено'],
  ['98%', 'точность ответов'],
  ['8', 'платформ'],
  ['24/7', 'без выходных'],
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-accent selection:text-accent-foreground">
      {/* NAV */}
      <header className="sticky top-0 inset-x-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="flex items-center justify-between h-14 px-5">
          <a href="#home" className="font-mono text-sm font-medium tracking-tight">
            neuro<span className="text-accent">.</span>chat
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Меню">
            <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-border bg-background animate-rise">
            <div className="px-5 py-4 flex flex-col gap-4">
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
      <section id="home" className="relative pt-16 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-60 pointer-events-none" />
        <div className="relative px-5">
          <div className="flex items-center gap-2 mb-5 animate-rise">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">Powered by ChatGPT</span>
          </div>
          <h1 className="text-[2rem] leading-[1.08] font-extrabold tracking-tight animate-rise" style={{ animationDelay: '0.1s' }}>
            Умные чат-боты, которые <span className="text-accent">говорят</span> как человек.
          </h1>
          <p className="mt-5 text-base text-muted-foreground animate-rise" style={{ animationDelay: '0.2s' }}>
            Разрабатываем AI-ассистентов на базе ChatGPT и подключаем их к любым платформам.
          </p>
          <div className="mt-7 flex flex-col gap-3 animate-rise" style={{ animationDelay: '0.3s' }}>
            <Button size="lg" className="w-full rounded-none h-12 bg-foreground text-background hover:bg-accent transition-colors">
              Заказать бота
              <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="w-full rounded-none h-12 border-foreground/20 hover:bg-secondary">
              Смотреть работы
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-px bg-border border border-border animate-rise" style={{ animationDelay: '0.4s' }}>
            {stats.map(([v, l]) => (
              <div key={l} className="bg-background p-4">
                <div className="font-mono text-2xl font-semibold">{v}</div>
                <div className="text-xs text-muted-foreground mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH */}
      <section id="tech" className="py-16 border-t border-border">
        <div className="px-5">
          <span className="font-mono text-[10px] tracking-widest text-accent uppercase">/ Технологии</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">Что под капотом</h2>
          <p className="mt-3 text-sm text-muted-foreground">Стек, который обеспечивает естественные диалоги и точные ответы на ваших данных.</p>

          <div className="mt-8 grid gap-px bg-border border border-border">
            {tech.map((t) => (
              <div key={t.id} className="bg-background p-5">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm text-accent">{t.id}</span>
                  <h3 className="text-lg font-semibold">{t.name}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>

          {/* CODE BLOCK */}
          <div className="mt-8 border border-border">
            <div className="bg-foreground text-background p-5 font-mono text-[11px] overflow-x-auto">
              <div className="flex gap-2 mb-4 opacity-60">
                <span className="h-2.5 w-2.5 rounded-full bg-background/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-background/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-background/40" />
              </div>
              <pre className="whitespace-pre leading-relaxed"><code>{codeSnippet}<span className="cursor-blink">▍</span></code></pre>
            </div>
            <div className="bg-background p-5 border-t border-border">
              <h3 className="text-lg font-semibold mb-2">Простое подключение по API</h3>
              <p className="text-sm text-muted-foreground mb-4">Несколько строк — и ChatGPT уже отвечает в вашем продукте. Мы берём на себя настройку, безопасность ключей и масштабирование.</p>
              <a href="#services" className="font-mono text-sm text-accent inline-flex items-center gap-2">
                Как мы интегрируем <Icon name="ArrowRight" size={16} />
              </a>
            </div>
          </div>

          {/* PLATFORMS */}
          <div className="mt-10">
            <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase mb-4">Примеры подключения к платформам</p>
            <div className="flex flex-wrap gap-2">
              {platforms.map((p) => (
                <span key={p} className="px-4 py-2 border border-border font-mono text-xs">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 border-t border-border bg-secondary/40">
        <div className="px-5">
          <span className="font-mono text-[10px] tracking-widest text-accent uppercase">/ Услуги</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight mb-8">От идеи до работающего ассистента</h2>
          <div className="grid gap-px bg-border border border-border">
            {services.map((s) => (
              <div key={s.title} className="bg-background p-5">
                <Icon name={s.icon} size={26} className="text-accent mb-4" />
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="py-16 border-t border-border">
        <div className="px-5">
          <span className="font-mono text-[10px] tracking-widest text-accent uppercase">/ Портфолио</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight mb-8">Боты в деле</h2>
          <div className="border-t border-border">
            {work.map((w) => (
              <div key={w.title} className="border-b border-border py-5">
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground">{w.tag}</span>
                <h3 className="mt-2 text-xl font-semibold">{w.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{w.desc}</p>
                <span className="mt-2 inline-block font-mono text-sm text-accent">{w.metric}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border bg-foreground text-background">
        <div className="px-5 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight leading-tight">
            Запустим вашего AI-бота за пару недель
          </h2>
          <p className="mt-4 text-sm text-background/70">Расскажите о задаче — предложим решение и оценим сроки.</p>
          <Button size="lg" className="mt-7 w-full rounded-none h-12 bg-accent text-accent-foreground hover:bg-background hover:text-foreground transition-colors">
            Обсудить проект
            <Icon name="ArrowRight" size={18} className="ml-2" />
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-8">
        <div className="px-5 flex flex-col gap-4 text-sm text-muted-foreground">
          <span className="font-mono">neuro<span className="text-accent">.</span>chat © 2026</span>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
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
