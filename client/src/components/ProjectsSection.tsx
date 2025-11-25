import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink } from 'lucide-react';

export function ProjectsSection() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
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
      id="projects"
      ref={sectionRef}
      className="min-h-screen flex items-center py-24"
      data-testid="section-projects"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-16 gradient-text ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
          data-testid="text-projects-title"
        >
          {t.projects.title}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.projects.projects.map((project, index) => (
            <Card
              key={index}
              className={`glass border-border/50 hover:border-primary/50 transition-all cursor-pointer hover-elevate ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProject(index)}
              data-testid={`card-project-${index}`}
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between gap-2" data-testid={`text-project-${index}-title`}>
                  <span>{project.title}</span>
                  <ExternalLink className="w-4 h-4 text-primary" />
                </CardTitle>
                <CardDescription data-testid={`text-project-${index}-description`}>
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20"
                      data-testid={`badge-project-${index}-tech-${techIndex}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-2xl glass border-primary/30" data-testid="dialog-project-details">
            {selectedProject !== null && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl" data-testid="text-modal-project-title">
                    {t.projects.projects[selectedProject].title}
                  </DialogTitle>
                  <DialogDescription data-testid="text-modal-project-description">
                    {t.projects.projects[selectedProject].description}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 mt-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-3 text-muted-foreground">
                      {t.projects.techStack}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {t.projects.projects[selectedProject].techStack.map((tech, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20"
                          data-testid={`badge-modal-tech-${index}`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-muted-foreground leading-relaxed" data-testid="text-modal-project-details">
                      {t.projects.projects[selectedProject].details}
                    </p>
                  </div>

                  <Button
                    onClick={() => setSelectedProject(null)}
                    className="w-full"
                    data-testid="button-close-modal"
                  >
                    {t.projects.close}
                  </Button>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
