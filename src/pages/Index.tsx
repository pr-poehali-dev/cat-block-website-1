import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const heroImg =
  'https://cdn.poehali.dev/projects/34dff7d9-fdbd-40df-a59d-077a0bd10df2/files/1b9c4ef9-db4b-4420-9d3c-bf6dfd104656.jpg';

const bullets = [
  '2 недели интенсивной практики на реальных авто',
  'Группа до 6 человек — внимание каждому',
  'Работа с R134a и R1234yf (современные японские авто)',
  'Сертификат по окончании курса',
  'Поддержка мастера после обучения в Telegram-чате',
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
