import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Target, Briefcase } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function AboutSection() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center py-24"
      data-testid="section-about"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-16 gradient-text ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
          data-testid="text-about-title"
        >
          {t.about.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card
            className={`glass border-primary/20 hover:border-primary/40 transition-all ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.2s' }}
            data-testid="card-about-bio"
          >
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-bio">
                {t.about.bio}
              </p>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {[
              { icon: MapPin, label: t.about.location, value: t.about.locationValue, testId: 'location' },
              { icon: Target, label: t.about.focus, value: t.about.focusValue, testId: 'focus' },
              { icon: Briefcase, label: t.about.availability, value: t.about.availabilityValue, testId: 'availability' }
            ].map((item, index) => (
              <Card
                key={item.testId}
                className={`glass border-accent/20 hover:border-accent/40 transition-all ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                data-testid={`card-${item.testId}`}
              >
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground" data-testid={`text-${item.testId}-label`}>
                      {item.label}
                    </p>
                    <p className="text-lg font-semibold" data-testid={`text-${item.testId}-value`}>
                      {item.value}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
