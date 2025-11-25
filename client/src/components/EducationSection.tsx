import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { GraduationCap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function EducationSection() {
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
      id="education"
      ref={sectionRef}
      className="min-h-screen flex items-center py-24"
      data-testid="section-education"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-16 gradient-text ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
          data-testid="text-education-title"
        >
          {t.education.title}
        </h2>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30 hidden md:block" />

          <div className="space-y-12">
            {t.education.institutions.map((institution, index) => (
              <div
                key={index}
                className={`relative ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="hidden md:block absolute left-6 top-8 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent animate-pulse-glow" />

                <Card
                  className="ml-0 md:ml-20 glass border-border/50 hover:border-primary/50 transition-all"
                  data-testid={`card-education-${index}`}
                >
                  <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <CardTitle data-testid={`text-education-${index}-name`}>
                          {institution.name}
                        </CardTitle>
                        <span className="text-sm text-muted-foreground px-3 py-1 rounded-full bg-primary/10" data-testid={`text-education-${index}-period`}>
                          {institution.period}
                        </span>
                      </div>
                      <CardDescription className="text-base font-medium mb-2" data-testid={`text-education-${index}-degree`}>
                        {institution.degree}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground" data-testid={`text-education-${index}-description`}>
                      {institution.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
