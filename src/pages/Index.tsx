import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const heroImg =
  'https://cdn.poehali.dev/projects/34dff7d9-fdbd-40df-a59d-077a0bd10df2/files/1b9c4ef9-db4b-4420-9d3c-bf6dfd104656.jpg';

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
        <div className="relative z-10 max-w-6xl mx-auto px-5 py-32 w-full">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Практический курс · Уссурийск
            </span>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold uppercase leading-[0.95] mb-6">
              Диагностика и ремонт
              <span className="block text-gradient">автокондиционеров</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Освой востребованную профессию с нуля. Работа с манометрической станцией, поиск утечек, заправка и ремонт систем кондиционирования — на реальных автомобилях.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" className="h-14 px-8 text-base font-semibold rounded-lg glow-blue hover:scale-[1.03] transition-transform">
                <Icon name="Zap" size={20} /> Записаться на курс
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base font-semibold rounded-lg border-2 border-border bg-secondary/40 hover:bg-secondary">
                Программа курса
              </Button>
            </div>

            <div className="flex flex-wrap gap-8">
              {[
                { icon: 'Gauge', value: 'Практика', label: 'на реальном оборудовании' },
                { icon: 'Award', value: 'Сертификат', label: 'по итогам обучения' },
                { icon: 'Wallet', value: 'от 60 000 ₽', label: 'средний доход мастера' },
              ].map((s) => (
                <div key={s.value} className="flex items-center gap-3">
                  <div className="grid place-items-center w-11 h-11 rounded-lg bg-secondary border border-border">
                    <Icon name={s.icon} size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-display text-lg font-semibold uppercase leading-none">{s.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-muted-foreground animate-bounce">
          <Icon name="ChevronDown" size={28} />
        </div>
      </section>
    </div>
  );
};

export default Index;
