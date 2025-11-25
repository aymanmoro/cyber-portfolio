import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function ContactSection() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: t.contact.form.success,
      description: t.contact.successMessage,
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      icon: Mail,
      label: t.contact.info.email,
      value: 'ayman.mourtada@example.com',
      href: 'mailto:ayman.mourtada@example.com',
      testId: 'email'
    },
    {
      icon: Phone,
      label: t.contact.info.phone,
      value: '+212 6XX XXX XXX',
      href: 'tel:+212600000000',
      testId: 'phone'
    },
    {
      icon: Github,
      label: t.contact.info.github,
      value: 'github.com/aymanmourtada',
      href: 'https://github.com',
      testId: 'github'
    },
    {
      icon: Linkedin,
      label: t.contact.info.linkedin,
      value: 'linkedin.com/in/aymanmourtada',
      href: 'https://linkedin.com',
      testId: 'linkedin'
    }
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center py-24 bg-muted/20"
      data-testid="section-contact"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4" data-testid="text-contact-title">
            {t.contact.title}
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="text-contact-subtitle">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="glass border-primary/20" data-testid="card-contact-form">
            <CardHeader>
              <CardTitle>{t.contact.form.send}</CardTitle>
              <CardDescription>{t.contact.formDescription}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">{t.contact.form.name}</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.contact.form.namePlaceholder}
                    required
                    className="glass border-primary/20 focus:border-primary/50"
                    data-testid="input-name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{t.contact.form.email}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.contact.form.emailPlaceholder}
                    required
                    className="glass border-primary/20 focus:border-primary/50"
                    data-testid="input-email"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">{t.contact.form.subject}</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t.contact.form.subjectPlaceholder}
                    required
                    className="glass border-primary/20 focus:border-primary/50"
                    data-testid="input-subject"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t.contact.form.message}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.contact.form.messagePlaceholder}
                    required
                    rows={5}
                    className="glass border-primary/20 focus:border-primary/50"
                    data-testid="input-message"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full neon-glow"
                  data-testid="button-submit"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? t.contact.form.sending : t.contact.form.send}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {socialLinks.map((link) => (
              <Card
                key={link.testId}
                className="glass border-accent/20 hover:border-accent/50 transition-all hover-elevate"
                data-testid={`card-contact-${link.testId}`}
              >
                <CardContent className="p-6">
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                    data-testid={`link-${link.testId}`}
                  >
                    <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      <link.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground" data-testid={`text-${link.testId}-label`}>
                        {link.label}
                      </p>
                      <p className="font-medium group-hover:text-accent transition-colors" data-testid={`text-${link.testId}-value`}>
                        {link.value}
                      </p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
