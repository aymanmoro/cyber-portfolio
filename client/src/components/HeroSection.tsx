import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  const { t } = useLanguage();
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = [t.hero.title, t.hero.subtitle];
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentIndex < currentTitle.length) {
          setDisplayedText(currentTitle.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentIndex > 0) {
          setDisplayedText(currentTitle.slice(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          setIsDeleting(false);
          setTitleIndex((titleIndex + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, titleIndex, titles]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative"
      data-testid="section-hero"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="space-y-8 animate-fade-in">
          <div className="inline-block">
            <div className="px-6 py-2 glass rounded-full border border-primary/30 mb-8">
              <p className="text-sm text-muted-foreground" data-testid="text-welcome">
                {t.hero.welcome}
              </p>
            </div>
          </div>

          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold gradient-text mb-4"
            data-testid="text-name"
          >
            {t.hero.name}
          </h1>

          <div className="h-20 flex items-center justify-center">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-mono text-foreground"
              data-testid="text-title"
            >
              <span>{displayedText}</span>
              <span className="animate-pulse">|</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              data-testid="button-view-projects"
              className="glass hover:glass neon-glow animate-pulse-glow"
            >
              {t.hero.cta1}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              data-testid="button-contact"
              className="glass hover:glass border-primary/50"
            >
              {t.hero.cta2}
            </Button>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          data-testid="button-scroll-down"
        >
          <ChevronDown className="w-8 h-8 text-primary" />
        </button>
      </div>
    </section>
  );
}
