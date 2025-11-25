# Cybersecurity Portfolio Design Guidelines

## Design Approach
**Reference-Based Approach**: Draw inspiration from HackTheBox, TryHackMe, NASA interfaces, Cyberpunk 2077 UI, and space/astro themes. Create a futuristic, cyberpunk aesthetic with premium quality befitting a top cybersecurity engineer.

## Core Visual Theme
- **Primary Aesthetic**: Dark mode cyberpunk with neon accents (blues, purples, greens), futuristic tech interface
- **Light Mode**: Clean cyber aesthetic with refined tech elements
- **Glass Effects**: Glassmorphism cards with blurred backgrounds and glowing borders
- **Gradients**: Vibrant neon gradients for emphasis and depth
- **Glow Effects**: Neon borders, glowing icons, luminous interactive elements

## Typography
- **Headings**: Bold, futuristic sans-serif fonts with optional glitch effects
- **Body**: Clean, readable modern sans-serif (high contrast for cybersecurity theme)
- **Special Effects**: Animated typing text in hero, glitch text treatments for emphasis
- **Hierarchy**: Clear distinction between section titles, card headers, and body content

## Layout System
- **Spacing**: Use Tailwind units of 4, 8, 12, 16, 24 for consistent rhythm (p-4, m-8, gap-12, py-16, my-24)
- **Containers**: Max-width containers (max-w-6xl to max-w-7xl) for desktop, full-width sections with internal padding
- **Sections**: Generous vertical padding (py-16 to py-24) with responsive scaling

## Background & Atmosphere
**Animated Background** (select one high-performance option):
- Cyber map with glowing nodes and connection lines
- Particle network with dynamic connections
- Matrix rain effect with falling characters
- Nebula with parallax scrolling layers
- Cyber radar sweep animation
- Orbiting geometric elements

Background should be subtle enough to not compete with content but immersive enough to establish the cybersecurity theme.

## Section Specifications

### Hero Section
- Full viewport height with animated background
- Centered content: "Ayman Mourtada" name with large, bold typography
- Subtitle: "Cybersecurity Engineer" with animated typing or glitch effect
- Interactive cyber-themed background element
- Two primary CTAs: "Projects" and "Contact" with blurred glass backgrounds when over imagery
- Neon accent elements framing the hero content

### About Section
- Glassmorphism card with glowing border
- Concise bio paragraph
- Key facts grid: Location, Skills Focus, Availability
- Subtle icon accents

### Experience Timeline
- Vertical timeline with animated connector line
- Timeline nodes with glow effects
- Cards for: CTF achievements, internships, engineering studies, projects
- Scroll-triggered animations revealing content progressively
- Date markers with futuristic styling

### Projects Gallery
- Grid layout: 3 columns desktop, 2 tablet, 1 mobile
- 6+ project cards with:
  - Cyberpunk-styled borders with hover glow
  - Title, short description, tech stack badges
  - Card tilt effect on hover
  - Click to open modal with full project details
- Modal: Full-screen overlay with glassmorphism, detailed project info, close button

### Skills Matrix
- Grid or category-based layout
- Categories: Offensive Security, Cryptography, Programming (Python, JS, Bash), Tools (Nmap, Burp, Wireshark, Metasploit), AI Tools (TensorFlow, OpenCV)
- Animated icons for each skill/tool
- Progress bars or proficiency indicators with neon fill animations
- Hover interactions revealing additional details

### Education Timeline
- Similar to experience timeline but focused on academic milestones
- Institutions: UIR, UEMF, SMIA
- Degree information, dates, key achievements

### Contact Section
- Two-column layout: Form + Info/Links
- Interactive form with glowing input borders on focus
- Fields: Name, Email, Subject, Message
- Client-side validation with cyberpunk error styling
- Social links: GitHub, LinkedIn, Email, Phone with icon buttons
- Hover effects: Neon glow on icons and submit button

## Component Library

### Cards
- Glassmorphism with backdrop blur
- Subtle borders with neon glow on hover
- Internal padding: p-6 to p-8
- Rounded corners (rounded-lg to rounded-xl)

### Buttons
- Primary: Solid with neon gradient or glowing border
- Secondary: Outline with neon stroke
- Hover: Intensity increase, subtle scale transform
- Glass buttons on hero: Blurred background, no color hover states

### Icons
- Use Font Awesome or Heroicons via CDN
- Consistent sizing (w-5 h-5 for inline, w-8 h-8 for features)
- Glow effects on interactive icons

### Forms
- Dark inputs with glowing borders on focus
- Placeholder text with reduced opacity
- Validation states with neon red/green indicators

## Interactive Elements

### Scroll Animations
- Section fade-in and slide-up on viewport entry
- Use Intersection Observer for performance
- Stagger timeline item animations
- Parallax effects for background layers

### Hover Effects
- Card tilt (3D transform)
- Border glow intensity
- Icon pulse or rotation
- Button scale and glow

### Language Switcher
- Toggle button (EN/FR) in header
- Smooth content transitions
- Flag icons or text labels with active state glow

### Theme Toggle
- Light/dark mode switcher in header
- Icon toggle (sun/moon or similar cyber icon)
- Smooth color transitions across all elements

## Responsive Behavior
- **Mobile**: Single column, stacked timeline, hamburger menu if needed
- **Tablet**: Two-column grids, maintained animations
- **Desktop**: Full multi-column layouts, enhanced parallax effects
- Touch-friendly interactions on mobile (larger tap targets, swipe-friendly modals)

## Performance Considerations
- Canvas animations optimized with requestAnimationFrame
- Lazy load background effects
- Debounce scroll listeners
- Optimize particle count for mobile devices
- Preload critical assets

## Images
No large hero images needed - the animated background provides the visual impact. Use icon assets and tool logos throughout skills/tech stack sections. Profile photo can be included in About section as a circular element with neon border.