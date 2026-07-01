import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { toast } from 'sonner';
import Reveal from '@/components/Reveal';

const heroImg =
  'https://cdn.poehali.dev/projects/34dff7d9-fdbd-40df-a59d-077a0bd10df2/files/1b9c4ef9-db4b-4420-9d3c-bf6dfd104656.jpg';
const masterImg =
  'https://cdn.poehali.dev/projects/34dff7d9-fdbd-40df-a59d-077a0bd10df2/files/4343666c-ed3d-49f1-9dec-734045e35855.jpg';

const masterFacts = [
  { icon: 'Car', value: '1 200+', label: 'автомобилей с кондиционерами' },
  { icon: 'Wrench', value: '7 лет', label: 'в специализации' },
  { icon: 'GraduationCap', value: '40+', label: 'обученных специалистов' },
  { icon: 'Star', value: '4.9', label: 'рейтинг на 2ГИС' },
];

const courseInfo = [
  { icon: 'Calendar', label: 'Ближайший поток', value: '14 июля 2026' },
  { icon: 'MapPin', label: 'Место', value: 'Уссурийск, ул. [адрес сервиса]' },
  { icon: 'Users', label: 'Группа', value: 'до 6 человек' },
  { icon: 'Clock', label: 'Длительность', value: '2 недели, пн–пт, 10:00–16:00' },
  { icon: 'Wallet', label: 'Стоимость', value: '18 900 ₽ (рассрочка доступна)' },
  { icon: 'Gift', label: 'Бонус при записи', value: 'чек-лист «50 неисправностей автокондиционера»' },
];

const faq = [
  {
    q: 'Нужен ли опыт в авторемонте?',
    a: 'Базовый опыт работы с автомобилями нужен — курс не для полных новичков. Но специального опыта с кондиционерами не требуется — обучаем с нуля.',
  },
  {
    q: 'Что нужно иметь с собой?',
    a: 'Ничего — всё оборудование, инструменты и автомобили предоставляем мы. Приходи в рабочей одежде.',
  },
  {
    q: 'Дадут ли документ об обучении?',
    a: 'Да. По итогу выдаём именной сертификат о прохождении курса.',
  },
  {
    q: 'Можно ли оплатить частями?',
    a: 'Да. Первый взнос 30% при записи, остаток до начала обучения. Свяжитесь с нами — обсудим удобный для вас формат.',
  },
  {
    q: 'Вы работаете только с японскими авто?',
    a: 'На курсе акцент на японские автомобили, так как они составляют 80%+ парка в Приморье. Принципы диагностики универсальны — применимы к любым маркам.',
  },
];

const reviews = [
  {
    name: 'Андрей К.',
    role: 'автомеханик, Уссурийск',
    text: 'До курса боялся браться за кондиционеры вообще. После — сделал 11 заправок за первый месяц. Уже окупил стоимость обучения раза в три. Самое ценное — научил думать по давлениям, а не тыкать наугад.',
  },
  {
    name: 'Дмитрий Р.',
    role: 'СТО «Автолюкс», Владивосток',
    text: 'Приехал из Владика специально. Два дня теории показались лишними — зря думал. К третьему дню понял что без этой базы на практике ничего не понимал бы. Уже взял в работу первые Тойоты с R1234yf.',
  },
  {
    name: 'Сергей М.',
    role: 'частный мастер, Артём',
    text: 'Группа маленькая — 5 человек. Мастер не читает лекции, а сразу объясняет на конкретной машине. Единственное место в Приморье где реально учат, а не просто берут деньги.',
  },
];

const bullets = [
  '2 недели интенсивной практики на реальных авто',
  'Группа до 6 человек — внимание каждому',
  'Работа с R134a и R1234yf (современные японские авто)',
  'Сертификат по окончании курса',
  'Поддержка мастера после обучения в Telegram-чате',
];

const modules = [
  {
    icon: 'GraduationCap',
    tag: 'Модуль 1',
    duration: '2 дня',
    title: 'Теория, которая реально нужна',
    items: [
      'Принцип работы холодильного цикла простым языком',
      'Все компоненты системы: компрессор, конденсатор, испаритель, ТРВ, осушитель',
      'Хладагенты R134a и R1234yf: отличия, особенности, меры безопасности',
      'Типичные неисправности и их логика',
    ],
  },
  {
    icon: 'Microscope',
    tag: 'Модуль 2',
    duration: '3 дня',
    title: 'Диагностика',
    items: [
      'Диагностика по манометрам: что значат показания давления',
      'Компьютерная диагностика сканером',
      'Поиск утечек: электронный течеискатель и UV-метод',
      'Разбор 10 реальных кейсов из практики',
    ],
  },
  {
    icon: 'Wrench',
    tag: 'Модуль 3',
    duration: '3 дня',
    title: 'Обслуживание и заправка',
    items: [
      'Вакуумирование системы: почему это критически важно',
      'Заправка по весу и через смотровое стекло',
      'Учёт масла при дозаправке',
      'Промывка системы после замены компрессора',
      'Работа с заправочными станциями: ручные и автоматические',
    ],
  },
  {
    icon: 'Cog',
    tag: 'Модуль 4',
    duration: '4 дня',
    title: 'Ремонт',
    items: [
      'Замена компрессора: пошагово на конкретной машине',
      'Замена осушителя, конденсатора, ТРВ',
      'Ремонт электрической части: муфта, датчики давления, реле',
      'Особенности японских авто: Toyota, Honda, Nissan, Mazda, Mitsubishi',
      'Разбор сложных случаев — плавающие утечки, компрессор «клинит»',
    ],
  },
  {
    icon: 'Award',
    tag: 'Финал',
    duration: '2 дня',
    title: 'Аттестация',
    items: [
      'Самостоятельная диагностика авто под наблюдением мастера',
      'Разбор ошибок, итоговое тестирование',
      'Выдача сертификата',
    ],
  },
];

const pains = [
  {
    icon: 'Wrench',
    title: '«Кондиционеры — это деньги, а я теряю клиентов»',
    text: 'Летом очередь из машин с неработающим кондиционером, а ты отправляешь их к конкурентам — потому что не уверен в своих знаниях.',
  },
  {
    icon: 'BookOpen',
    title: '«Смотрел видео, читал форумы — но всё равно не понятно»',
    text: 'YouTube-уроки дают общее представление, но не отвечают на вопрос: «А что конкретно делать с этой машиной прямо сейчас?»',
  },
  {
    icon: 'CircleDollarSign',
    title: '«Страшно брать в работу — вдруг сделаю хуже»',
    text: 'Боишься навредить клиентской машине, потерять репутацию и заплатить из своего кармана.',
  },
  {
    icon: 'Thermometer',
    title: '«R1234yf, новые гибриды Toyota — вообще тёмный лес»',
    text: 'Старые знания не работают с новыми автомобилями. Каждый год выходят машины с другими системами, и ты не знаешь, как к ним подходить.',
  },
];

const Index = () => {
  const [form, setForm] = useState({ name: '', phone: '', experience: '' });

  const scrollToForm = () => {
    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error('Заполните имя и телефон');
      return;
    }
    toast.success('Заявка отправлена! Перезвоним в течение 30 минут.');
    setForm({ name: '', phone: '', experience: '' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img src={heroImg} alt="Мастер за работой" className="w-full h-full object-cover scale-105 blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
        </div>
        {/* Tech grid overlay */}
        <div className="absolute inset-0 grid-lines opacity-60" />
        {/* Blue glow */}
        <div className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px]" />

        {/* Nav */}
        <header className="absolute top-0 inset-x-0 z-20">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-6">
            <div className="flex items-center gap-2.5">
              <div className="grid place-items-center w-10 h-10 rounded-lg bg-primary glow-blue">
                <Icon name="Snowflake" size={22} className="text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold uppercase tracking-wide">
                Авто<span className="text-primary">Климат</span>
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
              <Icon name="MapPin" size={16} className="text-primary" /> Уссурийск
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-5 pt-28 pb-32 sm:py-32 w-full">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Практический курс · Уссурийск
            </span>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase leading-[1.02] mb-6">
              Научись диагностировать и ремонтировать <span className="text-gradient">автокондиционеры</span> — и зарабатывай уже через 2 недели
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Практический курс в Уссурийске от мастера с 7-летним опытом. Работаем с японскими авто, учим на реальных машинах — без воды и теории ради теории.
            </p>

            <ul className="space-y-3 mb-8">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <div className="grid place-items-center w-6 h-6 rounded-md bg-primary/15 border border-primary/30 shrink-0 mt-0.5">
                    <Icon name="Check" size={15} className="text-primary" />
                  </div>
                  <span className="text-foreground/90">{b}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-3">
              <Button size="lg" onClick={scrollToForm} className="h-14 px-8 text-base font-semibold rounded-lg glow-blue hover:scale-[1.03] transition-transform">
                <Icon name="Zap" size={20} /> Записаться на курс
              </Button>
              <span className="inline-flex items-center gap-2 text-sm text-accent font-semibold">
                <Icon name="Flame" size={16} className="text-primary" />
                Осталось 3 места в июльском потоке
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Перезвоним в течение 30 минут. Без спама и навязчивых продаж.
            </p>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="hidden sm:block absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-muted-foreground animate-bounce">
          <Icon name="ChevronDown" size={28} />
        </div>
      </section>

      {/* BLOCK 2 — PAINS */}
      <section className="relative py-20 sm:py-28 px-5 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[130px]" />
        <div className="relative max-w-6xl mx-auto">
          <Reveal className="text-center mb-14">
            <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase">
              Узнаёшь <span className="text-gradient">себя?</span>
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-5">
            {pains.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 120}
                className="group relative rounded-2xl border border-border bg-card p-7 hover:border-primary/50 transition-colors"
              >
                <div className="grid place-items-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/25 mb-5 group-hover:scale-110 transition-transform">
                  <Icon name={p.icon} size={24} className="text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-3 leading-snug">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mt-12">
            <div className="relative rounded-2xl border border-primary/40 bg-primary/10 p-7 sm:p-9 text-center">
              <p className="text-lg sm:text-xl text-foreground leading-relaxed max-w-3xl mx-auto">
                Именно для тех, кто уже умеет держать инструмент, но хочет освоить автокондиционеры <span className="text-primary font-semibold">системно и практически</span> — создан этот курс.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BLOCK 3 — PROGRAM */}
      <section className="relative py-20 sm:py-28 px-5 overflow-hidden bg-secondary/20">
        <div className="absolute inset-0 grid-lines opacity-40" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[130px]" />
        <div className="relative max-w-5xl mx-auto">
          <Reveal className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider mb-5">
              <Icon name="ListChecks" size={16} /> Программа
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase">
              Что ты освоишь за <span className="text-gradient">2 недели</span>
            </h2>
          </Reveal>

          <div className="relative">
            {/* timeline line */}
            <div className="hidden sm:block absolute left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-primary/60 via-border to-transparent" />

            <div className="space-y-5">
              {modules.map((m, i) => (
                <Reveal
                  key={m.tag}
                  delay={i * 100}
                  className="relative sm:pl-20"
                >
                  {/* timeline node */}
                  <div className="hidden sm:grid place-items-center absolute left-0 top-6 w-14 h-14 rounded-2xl bg-primary glow-blue z-10">
                    <Icon name={m.icon} size={26} className="text-primary-foreground" />
                  </div>

                  <div className="rounded-2xl border border-border bg-card p-6 sm:p-7 hover:border-primary/50 transition-colors">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <div className="sm:hidden grid place-items-center w-11 h-11 rounded-xl bg-primary glow-blue shrink-0">
                        <Icon name={m.icon} size={22} className="text-primary-foreground" />
                      </div>
                      <span className="font-display text-sm font-semibold uppercase tracking-wider text-primary">{m.tag}</span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary border border-border text-xs text-muted-foreground">
                        <Icon name="Clock" size={13} /> {m.duration}
                      </span>
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-semibold uppercase mb-4">{m.title}</h3>
                    <ul className="space-y-2.5">
                      {m.items.map((it) => (
                        <li key={it} className="flex items-start gap-3">
                          <Icon name="ChevronRight" size={18} className="text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground leading-relaxed">{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 4 — MASTER */}
      <section className="relative py-20 sm:py-28 px-5 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[130px]" />
        <div className="relative max-w-6xl mx-auto">
          <Reveal className="text-center mb-14">
            <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase">
              Кто ведёт <span className="text-gradient">курс</span>
            </h2>
          </Reveal>

          <div className="grid lg:grid-cols-[minmax(0,340px)_1fr] gap-8 lg:gap-12 items-start">
            {/* Photo */}
            <Reveal className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-primary/40 to-transparent blur-xl" />
              <div className="relative rounded-3xl overflow-hidden border border-border glow-blue">
                <img src={masterImg} alt="Мастер курса" className="w-full aspect-[4/5] object-cover" />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-background to-transparent">
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    <Icon name="BadgeCheck" size={16} /> Мастер · 7 лет опыта
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Text + facts */}
            <div>
              <Reveal>
                <p className="text-lg text-foreground/90 leading-relaxed mb-5">
                  <span className="font-semibold">Игорь</span> — специалист автосервиса в Уссурийске, 7 лет специализируется на диагностике и ремонте систем кондиционирования японских автомобилей.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  За это время через мастерскую прошло более 1 200 автомобилей с неисправными кондиционерами. Работает с R134a, R1234yf, гибридными системами Toyota, Lexus, Honda.
                </p>
              </Reveal>

              {/* Facts table */}
              <Reveal delay={120}>
                <div className="grid sm:grid-cols-2 rounded-2xl border border-border overflow-hidden mb-8">
                  {masterFacts.map((f, i) => (
                    <div
                      key={f.label}
                      className={`flex items-center gap-4 p-5 bg-card ${i % 2 === 0 ? 'sm:border-r' : ''} ${i < 2 ? 'border-b' : ''} border-border`}
                    >
                      <div className="grid place-items-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/25 shrink-0">
                        <Icon name={f.icon} size={24} className="text-primary" />
                      </div>
                      <div>
                        <div className="font-display text-2xl font-bold leading-none">{f.value}</div>
                        <div className="text-sm text-muted-foreground mt-1">{f.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Quote */}
              <Reveal delay={200}>
                <blockquote className="relative rounded-2xl border-l-4 border-primary bg-primary/5 p-6 sm:p-7">
                  <Icon name="Quote" size={32} className="text-primary/30 mb-2" />
                  <p className="text-lg text-foreground italic leading-relaxed">
                    «Я сам учился по видосам и форумам — и знаю, как это больно. Три года ошибок, прежде чем всё встало на место. На курсе я даю ту систему, которой мне так не хватало в начале.»
                  </p>
                </blockquote>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 5 — REVIEWS WALL */}
      <section className="relative py-20 sm:py-28 px-5 overflow-hidden bg-secondary/20">
        <div className="absolute inset-0 grid-lines opacity-40" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[130px]" />
        <div className="relative max-w-6xl mx-auto">
          <Reveal className="text-center mb-14">
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name="Star" size={22} className="text-primary fill-primary" />
              ))}
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase">
              Что говорят те, кто уже <span className="text-gradient">прошёл курс</span>
            </h2>
          </Reveal>

          {/* Masonry wall */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [&>*]:mb-5">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 120} className="break-inside-avoid">
                <div className="rounded-2xl border border-border bg-card p-6 hover:border-primary/50 transition-colors">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Icon key={s} name="Star" size={16} className="text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-foreground/90 leading-relaxed mb-5 italic">«{r.text}»</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="grid place-items-center w-10 h-10 rounded-full bg-primary/15 border border-primary/25 font-display font-bold text-primary shrink-0">
                      {r.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold leading-tight">{r.name}</div>
                      <div className="text-sm text-muted-foreground">{r.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCK 6 — CTA FORM */}
      <section id="signup" className="relative py-20 sm:py-28 px-5 overflow-hidden scroll-mt-16">
        <div className="absolute inset-0 grid-lines opacity-40" />
        <div className="absolute -top-20 left-0 w-[500px] h-[500px] rounded-full bg-primary/15 blur-[130px]" />
        <div className="relative max-w-6xl mx-auto">
          <Reveal className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider mb-5">
              <Icon name="Flame" size={16} /> Осталось 3 места
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase">
              Запишись на курс — осталось 3 места в <span className="text-gradient">июле</span>
            </h2>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Info panel */}
            <Reveal className="flex">
              <div className="w-full rounded-2xl border border-border bg-card p-7 sm:p-8">
                <div className="space-y-1">
                  {courseInfo.map((c, i) => (
                    <div
                      key={c.label}
                      className={`flex items-start gap-4 py-4 ${i < courseInfo.length - 1 ? 'border-b border-border' : ''}`}
                    >
                      <div className="grid place-items-center w-11 h-11 rounded-xl bg-primary/10 border border-primary/25 shrink-0">
                        <Icon name={c.icon} size={22} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{c.label}</div>
                        <div className="font-semibold leading-snug">{c.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal delay={120} className="flex">
              <form onSubmit={submit} className="w-full rounded-2xl border border-primary/40 bg-card p-7 sm:p-8 glow-blue flex flex-col">
                <h3 className="font-display text-2xl font-semibold uppercase mb-6">Заявка на курс</h3>
                <div className="space-y-4 flex-1">
                  <Input
                    placeholder="Ваше имя"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="h-13 bg-background border-border text-base"
                  />
                  <Input
                    type="tel"
                    placeholder="Номер телефона"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="h-13 bg-background border-border text-base"
                  />
                  <Select value={form.experience} onValueChange={(v) => setForm({ ...form, experience: v })}>
                    <SelectTrigger className="h-13 bg-background border-border text-base">
                      <SelectValue placeholder="Ваш опыт в авторемонте" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Начинающий">Начинающий</SelectItem>
                      <SelectItem value="Механик">Механик</SelectItem>
                      <SelectItem value="Владелец СТО">Владелец СТО</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit" size="lg" className="w-full h-14 mt-6 text-base font-semibold rounded-lg glow-blue hover:scale-[1.02] transition-transform">
                  <Icon name="Zap" size={20} /> Записаться на курс
                </Button>
                <p className="flex items-start gap-2 text-sm text-muted-foreground mt-4">
                  <Icon name="Lock" size={15} className="text-primary shrink-0 mt-0.5" />
                  Перезвоним в течение 30 минут в рабочее время. Без спама. Никаких скрытых платежей.
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-20 sm:py-28 px-5 overflow-hidden bg-secondary/20">
        <div className="relative max-w-3xl mx-auto">
          <Reveal className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase">
              Часто задаваемые <span className="text-gradient">вопросы</span>
            </h2>
          </Reveal>
          <Reveal>
            <Accordion type="single" collapsible className="space-y-3">
              {faq.map((f, i) => (
                <AccordionItem
                  key={f.q}
                  value={`item-${i}`}
                  className="rounded-xl border border-border bg-card px-5 data-[state=open]:border-primary/50"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative py-10 px-5 border-t border-border text-center pb-24 sm:pb-10">
        <div className="flex items-center justify-center gap-2.5 mb-3">
          <div className="grid place-items-center w-9 h-9 rounded-lg bg-primary">
            <Icon name="Snowflake" size={20} className="text-primary-foreground" />
          </div>
          <span className="font-display text-lg font-bold uppercase tracking-wide">
            Авто<span className="text-primary">Климат</span>
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          Курс по диагностике и ремонту автокондиционеров · Уссурийск · © 2026
        </p>
      </footer>

      {/* MOBILE FIXED CTA */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-50 p-3 bg-background/90 backdrop-blur-lg border-t border-border">
        <Button onClick={scrollToForm} className="w-full h-13 py-4 text-base font-semibold rounded-lg glow-blue">
          <Icon name="Zap" size={20} /> Записаться на курс
        </Button>
      </div>
    </div>
  );
};

export default Index;