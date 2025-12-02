import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Trophy, Briefcase, Code } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function ExperienceSection() {
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

  const experiences = [
    {
      icon: Trophy,
      title: t.experience.ctf,
      description: t.experience.ctfDesc,
      color: 'primary',
      testId: 'ctf',
      link: '#ctf-achievements', // Add anchor link to CTF achievements
    },
    {
      icon: Briefcase,
      title: t.experience.internship,
      description: t.experience.internshipDesc,
      color: 'accent',
      testId: 'internship'
    },
    {
      icon: Code,
      title: t.experience.projects,
      description: t.experience.projectsDesc,
      color: 'primary',
      testId: 'personal-projects'
    }
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="min-h-screen flex items-center py-24 bg-muted/20"
      data-testid="section-experience"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-16 gradient-text ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
          data-testid="text-experience-title"
        >
          {t.experience.title}
        </h2>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.testId}
                className={`relative ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="hidden md:block absolute left-6 top-8 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent animate-pulse-glow" />

                <Card
                  className="ml-0 md:ml-20 glass border-border/50 hover:border-primary/50 transition-all"
                  data-testid={`card-experience-${exp.testId}`}
                >
                  <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                    <div className={`p-3 rounded-lg bg-${exp.color}/10`}>
                      <exp.icon className={`w-6 h-6 text-${exp.color}`} />
                    </div>
                    <CardTitle data-testid={`text-experience-${exp.testId}-title`}>
                      {exp.title}
                      {exp.link && (
                        <a
                          href={exp.link}
                          className="ml-3 text-xs text-blue-500 underline hover:text-blue-700 transition-colors duration-150"
                        >
                          View CTF Achievements
                        </a>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed" data-testid={`text-experience-${exp.testId}-desc`}>
                      {exp.description}
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
