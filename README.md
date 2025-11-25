# Ayman Mourtada - Cybersecurity Portfolio

A modern, interactive cybersecurity-themed portfolio website built with cutting-edge web technologies.

## 🚀 Features

### Visual Design
- **Futuristic Cyberpunk Theme**: Dark mode with neon blues, purples, and greens inspired by HackTheBox, TryHackMe, and Cyberpunk 2077
- **Animated Particle Background**: Interactive particle network with glowing connections that responds to mouse movement
- **Glassmorphism Effects**: Beautiful frosted glass cards with subtle blur and neon borders
- **Smooth Animations**: Scroll-triggered animations, typing effects, glitch text, and pulsing glows
- **Responsive Design**: Flawlessly adapts to mobile, tablet, and desktop screens

### Interactive Features
- **Animated Hero Section**: Dynamic typing effect cycling through titles
- **Timeline Visualizations**: Vertical timelines for experience and education with animated nodes
- **Project Gallery**: 6 featured projects with detailed modal views
- **Skills Matrix**: Categorized skill badges with hover effects
- **Contact Form**: Fully functional contact form with client-side validation
- **Multi-Language Support**: Seamless EN/FR language switching
- **Theme Toggle**: Light/dark mode with smooth transitions

### Technical Excellence
- **Performance Optimized**: Canvas animations use requestAnimationFrame for smooth 60fps
- **SEO Ready**: Complete meta tags and Open Graph support
- **Accessibility**: Semantic HTML, ARIA labels, and keyboard navigation support
- **Type Safety**: Full TypeScript implementation with strict typing
- **Modern Stack**: React 18, TypeScript, Tailwind CSS, Vite

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern UI library with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Shadcn UI** - High-quality component library
- **Lucide React** - Beautiful icon system
- **Wouter** - Lightweight routing

### Build Tools
- **Vite** - Lightning-fast build tool
- **PostCSS** - CSS processing
- **ESLint** - Code linting

### Features
- Canvas API for particle animations
- Intersection Observer for scroll animations
- Local storage for theme/language persistence
- CSS custom properties for theming

## 📁 Project Structure

```
client/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── ui/              # Shadcn UI primitives
│   │   ├── AboutSection.tsx
│   │   ├── CanvasBackground.tsx
│   │   ├── ContactSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navigation.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── SkillsSection.tsx
│   ├── contexts/            # React contexts
│   │   ├── LanguageContext.tsx
│   │   └── ThemeContext.tsx
│   ├── hooks/               # Custom hooks
│   ├── lib/                 # Utilities
│   │   └── translations.ts  # EN/FR translations
│   ├── pages/               # Page components
│   │   └── Home.tsx
│   ├── App.tsx              # Root component
│   ├── index.css            # Global styles & animations
│   └── main.tsx             # Entry point
├── public/                  # Static assets
└── index.html              # HTML template
```

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ installed

### Installation

1. Clone the repository or download the files

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

### Building for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

## 🎨 Customization

### Colors
The cyberpunk color scheme is defined in `client/src/index.css`:
- Primary: Neon blue (#63B3ED / hsl(217, 91%, 65%))
- Accent: Neon purple (#C084FC / hsl(273, 80%, 68%))
- Background: Deep dark blue (#0B0F19)

### Content
All content is managed through the translation system in `client/src/lib/translations.ts`. Edit this file to:
- Update personal information
- Add/modify projects
- Change skills and technologies
- Customize section content
- Add more languages

### Animations
Custom animations are defined in `client/src/index.css`:
- `.animate-fade-in` - Fade in with upward motion
- `.animate-fade-in-scale` - Fade in with scale effect
- `.animate-pulse-glow` - Pulsing neon glow
- `.glass` - Glassmorphism effect
- `.neon-glow` - Neon glow shadow
- `.gradient-text` - Animated gradient text

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components are fully responsive and optimized for touch interactions on mobile devices.

## ⚡ Performance

- Canvas particle count adapts to screen size (mobile: ~50, desktop: ~100)
- Intersection Observer for efficient scroll animations
- Lazy loading for heavy components
- Optimized re-renders with React.memo where appropriate
- CSS containment for animation performance

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This portfolio template is free to use for personal and commercial projects.

## 🙏 Credits

Design inspired by:
- HackTheBox
- TryHackMe
- Cyberpunk 2077 UI
- NASA interfaces
- Modern tech aesthetics

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
