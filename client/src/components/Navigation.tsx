import { Moon, Sun, Globe, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useEffect } from 'react';
import CVButtonNav from './CVButtonNav';

export function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass border-b border-border' : ''
        }`}
        data-testid="nav-main"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-xl font-bold gradient-text hover-elevate px-2 py-1 rounded-md transition-all"
              data-testid="button-logo"
            >
              AM
            </button>

            <div className="hidden md:flex items-center gap-1">
              {['about', 'experience', 'projects', 'skills', 'education', 'contact'].map((section) => (
                <Button
                  key={section}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(section)}
                  data-testid={`button-nav-${section}`}
                  className="hover-elevate neon-glow animate-pulse-glow"
                >
                  {t.nav[section as keyof typeof t.nav]}
                </Button>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={() => scrollToSection('achievements')}
                data-testid="button-nav-achievements"
                className="ml-2 font-semibold text-primary border-primary hover:bg-primary/10 hover:text-primary neon-glow animate-pulse-glow"
              >
                Achievements
              </Button>
              <CVButtonNav />
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
                data-testid="button-language-toggle"
                className="hover-elevate"
              >
                <Globe className="w-4 h-4" />
                <span className="sr-only">Toggle language</span>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                data-testid="button-theme-toggle"
                className="hover-elevate"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden hover-elevate"
                data-testid="button-mobile-menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 glass md:hidden"
          style={{ top: '64px' }}
          data-testid="mobile-menu"
        >
          <div className="flex flex-col items-center justify-center h-full gap-4 p-8">
            {['about', 'experience', 'projects', 'skills', 'education', 'contact'].map((section) => (
              <Button
                key={section}
                variant="ghost"
                size="lg"
                onClick={() => scrollToSection(section)}
                className="w-full max-w-xs text-lg hover-elevate neon-glow animate-pulse-glow"
                data-testid={`button-mobile-nav-${section}`}
              >
                {t.nav[section as keyof typeof t.nav]}
              </Button>
            ))}
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('achievements')}
              className="w-full max-w-xs text-lg font-semibold text-primary border-primary hover:bg-primary/10 hover:text-primary neon-glow animate-pulse-glow"
              data-testid="button-mobile-nav-achievements"
            >
              Achievements
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
