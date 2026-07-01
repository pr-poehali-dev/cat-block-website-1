import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const cats = [
  {
    url: 'https://cdn.poehali.dev/projects/34dff7d9-fdbd-40df-a59d-077a0bd10df2/files/35460c54-5ae5-4457-a04f-27cde5f35517.jpg',
    name: 'Рыжик',
    desc: 'Солнечный проказник с зелёными глазами',
  },
  {
    url: 'https://cdn.poehali.dev/projects/34dff7d9-fdbd-40df-a59d-077a0bd10df2/files/2004bbcf-8cd5-400b-96c9-cfb0a09ae445.jpg',
    name: 'Дымок',
    desc: 'Британский плюшевый мечтатель',
  },
  {
    url: 'https://cdn.poehali.dev/projects/34dff7d9-fdbd-40df-a59d-077a0bd10df2/files/56b55c08-a44a-4737-b36a-a0a3488fcb2e.jpg',
    name: 'Соня',
    desc: 'Любит уют, плед и подремать',
  },
];

const navLinks = [
  { id: 'home', label: 'Главная' },
  { id: 'gallery', label: 'Галерея' },
  { id: 'about', label: 'О сайте' },
  { id: 'contacts', label: 'Контакты' },
];

const Index = () => {
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((p) => (p + 1) % cats.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-mesh overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-white/60 border-b border-white/40">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 py-4">
          <button onClick={() => scrollTo('home')} className="flex items-center gap-2 group">
            <span className="text-3xl transition-transform group-hover:rotate-12">🐱</span>
            <span className="font-display text-2xl text-gradient">МУР</span>
          </button>
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="px-4 py-2 rounded-full text-sm font-semibold text-foreground/70 hover:text-primary hover:bg-primary/10 transition-colors"
              >
                {l.label}
              </button>
            ))}
            <Button onClick={() => scrollTo('gallery')} className="ml-2 rounded-full font-bold">
              Смотреть котиков
            </Button>
          </div>
          <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={28} />
          </button>
        </nav>
        {menuOpen && (
          <div className="md:hidden px-5 pb-4 flex flex-col gap-1 animate-fade-in">
            {navLinks.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-left px-4 py-3 rounded-2xl font-semibold hover:bg-primary/10"
              >
                {l.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative pt-36 pb-20 px-5">
        <div className="absolute top-24 -left-10 text-[120px] opacity-20 animate-float select-none">🐾</div>
        <div className="absolute bottom-10 right-4 text-[90px] opacity-20 animate-float select-none" style={{ animationDelay: '2s' }}>🐾</div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6">
              <Icon name="Sparkles" size={16} /> Самые милые пушистики
            </span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-tight mb-6">
              Мир, где живут <span className="text-gradient">котики</span>
            </h1>
            <p className="text-lg text-foreground/70 mb-8 max-w-md">
              Уютная галерея с автоматическим слайдшоу самых обаятельных котов. Заряжайся мурчащим настроением!
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" onClick={() => scrollTo('gallery')} className="rounded-full font-bold text-base h-14 px-8">
                <Icon name="Images" size={20} /> Открыть галерею
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollTo('about')} className="rounded-full font-bold text-base h-14 px-8 border-2">
                О сайте
              </Button>
            </div>
          </div>

          {/* SLIDESHOW */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary via-secondary to-accent rounded-[2.5rem] blur-2xl opacity-40 animate-slow-spin" />
            <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl ring-4 ring-white">
              {cats.map((cat, i) => (
                <div
                  key={cat.name}
                  className={`absolute inset-0 transition-opacity duration-1000 ${i === active ? 'opacity-100' : 'opacity-0'}`}
                >
                  <img
                    src={cat.url}
                    alt={cat.name}
                    className={`w-full h-full object-cover ${i === active ? 'animate-ken-burns' : ''}`}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="font-display text-3xl text-white">{cat.name}</p>
                    <p className="text-white/80 text-sm">{cat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-2 mt-5">
              {cats.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2.5 rounded-full transition-all ${i === active ? 'w-8 bg-primary' : 'w-2.5 bg-primary/30'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl sm:text-5xl mb-3">Наша <span className="text-gradient">галерея</span></h2>
            <p className="text-foreground/60 text-lg">Знакомьтесь с нашими пушистыми звёздами</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cats.map((cat, i) => (
              <div
                key={cat.name}
                className="group relative rounded-[1.75rem] overflow-hidden shadow-lg bg-white ring-1 ring-black/5 hover:-translate-y-2 transition-transform duration-300 animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={cat.url} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <p className="font-display text-2xl text-gradient">{cat.name}</p>
                    <span className="text-2xl">😻</span>
                  </div>
                  <p className="text-foreground/60 text-sm mt-1">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-5">
        <div className="max-w-5xl mx-auto rounded-[2.5rem] bg-gradient-to-br from-primary to-secondary p-1 shadow-2xl">
          <div className="rounded-[2.25rem] bg-white p-10 sm:p-14">
            <div className="grid sm:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="font-display text-4xl sm:text-5xl mb-5">О <span className="text-gradient">сайте</span></h2>
                <p className="text-foreground/70 text-lg leading-relaxed">
                  МУР — это уголок тепла и умиления в интернете. Мы собираем самых милых котиков и показываем их в красивом слайдшоу, чтобы каждый твой день начинался с улыбки.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: 'Heart', label: 'Сделано с любовью' },
                  { icon: 'Camera', label: 'Живые фото' },
                  { icon: 'Zap', label: 'Автослайдшоу' },
                  { icon: 'Smile', label: 'Заряд позитива' },
                ].map((f) => (
                  <div key={f.label} className="rounded-2xl bg-muted p-5 text-center">
                    <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-2">
                      <Icon name={f.icon} size={24} />
                    </div>
                    <p className="font-semibold text-sm">{f.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-20 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-5xl">📮</span>
          <h2 className="font-display text-4xl sm:text-5xl mt-4 mb-3">Напиши <span className="text-gradient">нам</span></h2>
          <p className="text-foreground/60 text-lg mb-8">Есть котик-кандидат в галерею? Будем рады!</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:hello@mur.cat" className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-white shadow-lg ring-1 ring-black/5 font-semibold hover:-translate-y-1 transition-transform">
              <Icon name="Mail" size={20} className="text-primary" /> hello@mur.cat
            </a>
            <a href="#" className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-white shadow-lg ring-1 ring-black/5 font-semibold hover:-translate-y-1 transition-transform">
              <Icon name="Send" size={20} className="text-secondary" /> Telegram
            </a>
            <a href="#" className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-white shadow-lg ring-1 ring-black/5 font-semibold hover:-translate-y-1 transition-transform">
              <Icon name="Instagram" size={20} className="text-accent" /> Instagram
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-5 text-center">
        <p className="font-display text-2xl text-gradient mb-1">МУР 🐾</p>
        <p className="text-foreground/50 text-sm">© 2026 · Сделано с мурчанием и любовью</p>
      </footer>
    </div>
  );
};

export default Index;
