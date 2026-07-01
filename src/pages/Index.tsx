import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import Reveal from '@/components/Reveal';

const heroImg =
  'https://cdn.poehali.dev/projects/34dff7d9-fdbd-40df-a59d-077a0bd10df2/files/1b9c4ef9-db4b-4420-9d3c-bf6dfd104656.jpg';

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
              <Button size="lg" className="h-14 px-8 text-base font-semibold rounded-lg glow-blue hover:scale-[1.03] transition-transform">
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

      {/* MOBILE FIXED CTA */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-50 p-3 bg-background/90 backdrop-blur-lg border-t border-border">
        <Button className="w-full h-13 py-4 text-base font-semibold rounded-lg glow-blue">
          <Icon name="Zap" size={20} /> Записаться на курс
        </Button>
      </div>
    </div>
  );
};

export default Index;