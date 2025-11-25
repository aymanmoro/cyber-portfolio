import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Lock, Code, Wrench, Brain } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function SkillsSection() {
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

  const skillCategories = [
    {
      icon: Shield,
      title: t.skills.offensiveSec.title,
      skills: t.skills.offensiveSec.skills,
      color: 'primary',
      testId: 'offensive'
    },
    {
      icon: Lock,
      title: t.skills.crypto.title,
      skills: t.skills.crypto.skills,
      color: 'accent',
      testId: 'crypto'
    },
    {
      icon: Code,
      title: t.skills.programming.title,
      skills: t.skills.programming.skills,
      color: 'primary',
      testId: 'programming'
    },
    {
      icon: Wrench,
      title: t.skills.tools.title,
      skills: t.skills.tools.skills,
      color: 'accent',
      testId: 'tools'
    },
    {
      icon: Brain,
      title: t.skills.ai.title,
      skills: t.skills.ai.skills,
      color: 'primary',
      testId: 'ai'
    }
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="min-h-screen flex items-center py-24 bg-muted/20"
      data-testid="section-skills"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-16 gradient-text ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
          data-testid="text-skills-title"
        >
          {t.skills.title}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={category.testId}
              className={`glass border-border/50 hover:border-${category.color}/50 transition-all ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`card-skill-${category.testId}`}
            >
              <CardHeader className="flex flex-row items-center gap-3 space-y-0 pb-2">
                <div className={`p-3 rounded-lg bg-${category.color}/10 neon-glow-${category.color === 'primary' ? '' : 'accent'}`}>
                  <category.icon className={`w-6 h-6 text-${category.color}`} />
                </div>
                <CardTitle className="text-lg" data-testid={`text-skill-${category.testId}-title`}>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className={`bg-${category.color}/10 text-${category.color} border-${category.color}/20 hover-elevate`}
                      data-testid={`badge-skill-${category.testId}-${skillIndex}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
