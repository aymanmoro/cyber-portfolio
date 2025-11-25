export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      education: "Education",
      contact: "Contact"
    },
    hero: {
      welcome: "Welcome to my portfolio",
      name: "Ayman Mourtada",
      title: "Cybersecurity Engineer",
      subtitle: "Penetration Testing | CTF Player | Security Research",
      cta1: "View Projects",
      cta2: "Contact Me"
    },
    about: {
      title: "About Me",
      bio: "Passionate cybersecurity engineer specializing in offensive security, penetration testing, and vulnerability research. With a strong foundation in ethical hacking and a proven track record in CTF competitions, I thrive on breaking systems to make them stronger.",
      location: "Location",
      locationValue: "Morocco",
      focus: "Focus",
      focusValue: "Offensive Security & CTFs",
      availability: "Status",
      availabilityValue: "Open to Opportunities"
    },
    experience: {
      title: "Experience Timeline",
      ctf: "CTF Achievements",
      ctfDesc: "Competed in multiple cybersecurity CTF competitions, achieving top rankings in regional and international events. Specialized in web exploitation, cryptography, and reverse engineering challenges.",
      internship: "Security Internship",
      internshipDesc: "Conducted penetration testing and vulnerability assessments for enterprise applications. Identified and reported critical security flaws, contributing to improved security posture.",
      projects: "Personal Projects",
      projectsDesc: "Developed security tools and automation scripts for reconnaissance, exploitation, and post-exploitation phases. Created educational content for the security community."
    },
    projects: {
      title: "Featured Projects",
      viewDetails: "View Details",
      close: "Close",
      techStack: "Tech Stack",
      projects: [
        {
          title: "Network Scanner Pro",
          description: "Advanced network reconnaissance tool with automated vulnerability scanning capabilities",
          techStack: ["Python", "Nmap", "Scapy"],
          details: "A comprehensive network scanning solution that integrates multiple reconnaissance techniques. Features include port scanning, service enumeration, OS detection, and automated vulnerability assessment using CVE databases."
        },
        {
          title: "Web App Security Analyzer",
          description: "Automated web application security testing framework with reporting",
          techStack: ["Python", "Burp Suite", "SQLMap"],
          details: "Full-featured web application security scanner that identifies OWASP Top 10 vulnerabilities. Includes automated crawling, parameter fuzzing, SQL injection detection, XSS testing, and detailed PDF reporting."
        },
        {
          title: "Crypto Challenge Solver",
          description: "Toolkit for solving cryptographic challenges in CTF competitions",
          techStack: ["Python", "OpenSSL", "SageMath"],
          details: "Collection of cryptanalysis tools and attack implementations for common cryptographic vulnerabilities. Includes RSA attacks, AES weaknesses, hash collisions, and custom cipher breaking algorithms."
        },
        {
          title: "Reverse Engineering Toolkit",
          description: "Suite of tools for binary analysis and malware reverse engineering",
          techStack: ["Python", "Ghidra", "Radare2"],
          details: "Automated binary analysis toolkit featuring static and dynamic analysis capabilities. Includes deobfuscation scripts, pattern matching for malware signatures, and API call tracking."
        },
        {
          title: "Password Audit System",
          description: "Enterprise password strength auditing and breach detection tool",
          techStack: ["Python", "Hashcat", "MongoDB"],
          details: "Comprehensive password security assessment tool that checks against common patterns, leaked databases, and performs offline cracking simulations. Provides detailed reporting and remediation recommendations."
        },
        {
          title: "IoT Security Scanner",
          description: "Automated security assessment tool for IoT devices and protocols",
          techStack: ["Python", "Wireshark", "Arduino"],
          details: "Specialized scanner for identifying vulnerabilities in IoT ecosystems. Tests for weak authentication, insecure protocols, default credentials, and common firmware vulnerabilities."
        }
      ]
    },
    skills: {
      title: "Skills Matrix",
      offensiveSec: {
        title: "Offensive Security",
        skills: ["Penetration Testing", "Web App Security", "Network Exploitation", "Social Engineering"]
      },
      crypto: {
        title: "Cryptography",
        skills: ["RSA Attacks", "AES Analysis", "Hash Functions", "Protocol Security"]
      },
      programming: {
        title: "Programming",
        skills: ["Python", "JavaScript", "Bash", "C/C++"]
      },
      tools: {
        title: "Security Tools",
        skills: ["Burp Suite", "Metasploit", "Nmap", "Wireshark", "Ghidra"]
      },
      ai: {
        title: "AI & ML",
        skills: ["TensorFlow", "OpenCV", "Scikit-learn", "Adversarial ML"]
      }
    },
    education: {
      title: "Education",
      institutions: [
        {
          name: "UIR - Université Internationale de Rabat",
          degree: "Master's in Cybersecurity",
          period: "2021 - 2023",
          description: "Advanced studies in network security, cryptography, and secure software development"
        },
        {
          name: "UEMF - Université Euro-Méditerranéenne de Fès",
          degree: "Bachelor's in Computer Science",
          period: "2018 - 2021",
          description: "Foundation in computer science, algorithms, and software engineering"
        },
        {
          name: "SMIA - Sciences Mathématiques et Informatique Appliquée",
          degree: "Preparatory Studies",
          period: "2016 - 2018",
          description: "Mathematical and computational foundations"
        }
      ]
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Have a project or opportunity? Let's talk about it.",
      formDescription: "Fill out the form below to get in touch",
      successMessage: "Thank you! We'll get back to you soon.",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "your.email@example.com",
        subject: "Subject",
        subjectPlaceholder: "What is this about?",
        message: "Message",
        messagePlaceholder: "Your message here...",
        send: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully!",
        error: "Failed to send message. Please try again."
      },
      info: {
        email: "Email",
        phone: "Phone",
        github: "GitHub",
        linkedin: "LinkedIn"
      }
    },
    footer: {
      copyright: "© {year} Ayman Mourtada. Built with React & TypeScript."
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À Propos",
      experience: "Expérience",
      projects: "Projets",
      skills: "Compétences",
      education: "Formation",
      contact: "Contact"
    },
    hero: {
      welcome: "Bienvenue sur mon portfolio",
      name: "Ayman Mourtada",
      title: "Ingénieur en Cybersécurité",
      subtitle: "Tests d'Intrusion | Joueur CTF | Recherche en Sécurité",
      cta1: "Voir les Projets",
      cta2: "Me Contacter"
    },
    about: {
      title: "À Propos de Moi",
      bio: "Ingénieur en cybersécurité passionné, spécialisé dans la sécurité offensive, les tests d'intrusion et la recherche de vulnérabilités. Avec une solide base en hacking éthique et un parcours éprouvé dans les compétitions CTF, je m'épanouis en cassant les systèmes pour les rendre plus forts.",
      location: "Localisation",
      locationValue: "Maroc",
      focus: "Spécialisation",
      focusValue: "Sécurité Offensive & CTFs",
      availability: "Statut",
      availabilityValue: "Ouvert aux Opportunités"
    },
    experience: {
      title: "Parcours Professionnel",
      ctf: "Réussites CTF",
      ctfDesc: "Participé à de multiples compétitions CTF de cybersécurité, obtenant des classements élevés dans des événements régionaux et internationaux. Spécialisé dans l'exploitation web, la cryptographie et les défis d'ingénierie inversée.",
      internship: "Stage en Sécurité",
      internshipDesc: "Réalisé des tests d'intrusion et des évaluations de vulnérabilités pour des applications d'entreprise. Identifié et rapporté des failles de sécurité critiques, contribuant à l'amélioration de la posture de sécurité.",
      projects: "Projets Personnels",
      projectsDesc: "Développé des outils de sécurité et des scripts d'automation pour les phases de reconnaissance, d'exploitation et de post-exploitation. Créé du contenu éducatif pour la communauté sécurité."
    },
    projects: {
      title: "Projets en Vedette",
      viewDetails: "Voir Détails",
      close: "Fermer",
      techStack: "Stack Technique",
      projects: [
        {
          title: "Network Scanner Pro",
          description: "Outil avancé de reconnaissance réseau avec capacités de scan de vulnérabilités",
          techStack: ["Python", "Nmap", "Scapy"],
          details: "Solution complète de scan réseau intégrant plusieurs techniques de reconnaissance. Fonctionnalités incluant scan de ports, énumération de services, détection OS, et évaluation automatisée des vulnérabilités via bases CVE."
        },
        {
          title: "Analyseur Sécurité Web",
          description: "Framework automatisé de test de sécurité d'applications web avec rapports",
          techStack: ["Python", "Burp Suite", "SQLMap"],
          details: "Scanner de sécurité web complet identifiant les vulnérabilités OWASP Top 10. Inclut crawling automatisé, fuzzing de paramètres, détection d'injection SQL, tests XSS, et rapports PDF détaillés."
        },
        {
          title: "Solveur Défis Crypto",
          description: "Boîte à outils pour résoudre des défis cryptographiques en compétitions CTF",
          techStack: ["Python", "OpenSSL", "SageMath"],
          details: "Collection d'outils de cryptanalyse et implémentations d'attaques pour vulnérabilités cryptographiques courantes. Inclut attaques RSA, faiblesses AES, collisions de hash, et algorithmes de cassage de chiffres personnalisés."
        },
        {
          title: "Toolkit Ingénierie Inversée",
          description: "Suite d'outils pour l'analyse binaire et reverse engineering de malwares",
          techStack: ["Python", "Ghidra", "Radare2"],
          details: "Toolkit automatisé d'analyse binaire avec capacités d'analyse statique et dynamique. Inclut scripts de désobfuscation, correspondance de motifs pour signatures malware, et suivi d'appels API."
        },
        {
          title: "Système Audit Mots de Passe",
          description: "Outil d'audit de robustesse et détection de fuites pour entreprises",
          techStack: ["Python", "Hashcat", "MongoDB"],
          details: "Outil complet d'évaluation de sécurité des mots de passe vérifiant motifs courants, bases de données de fuites, et simulations de cracking hors ligne. Fournit rapports détaillés et recommandations."
        },
        {
          title: "Scanner Sécurité IoT",
          description: "Outil d'évaluation automatisée pour appareils et protocoles IoT",
          techStack: ["Python", "Wireshark", "Arduino"],
          details: "Scanner spécialisé pour identifier vulnérabilités dans écosystèmes IoT. Teste authentification faible, protocoles non sécurisés, identifiants par défaut, et vulnérabilités firmware courantes."
        }
      ]
    },
    skills: {
      title: "Matrice de Compétences",
      offensiveSec: {
        title: "Sécurité Offensive",
        skills: ["Tests d'Intrusion", "Sécurité Web", "Exploitation Réseau", "Ingénierie Sociale"]
      },
      crypto: {
        title: "Cryptographie",
        skills: ["Attaques RSA", "Analyse AES", "Fonctions de Hachage", "Sécurité Protocoles"]
      },
      programming: {
        title: "Programmation",
        skills: ["Python", "JavaScript", "Bash", "C/C++"]
      },
      tools: {
        title: "Outils Sécurité",
        skills: ["Burp Suite", "Metasploit", "Nmap", "Wireshark", "Ghidra"]
      },
      ai: {
        title: "IA & ML",
        skills: ["TensorFlow", "OpenCV", "Scikit-learn", "ML Adversarial"]
      }
    },
    education: {
      title: "Formation",
      institutions: [
        {
          name: "UIR - Université Internationale de Rabat",
          degree: "Master en Cybersécurité",
          period: "2021 - 2023",
          description: "Études avancées en sécurité réseau, cryptographie et développement logiciel sécurisé"
        },
        {
          name: "UEMF - Université Euro-Méditerranéenne de Fès",
          degree: "Licence en Informatique",
          period: "2018 - 2021",
          description: "Fondation en informatique, algorithmes et génie logiciel"
        },
        {
          name: "SMIA - Sciences Mathématiques et Informatique Appliquée",
          degree: "Études Préparatoires",
          period: "2016 - 2018",
          description: "Fondations mathématiques et computationnelles"
        }
      ]
    },
    contact: {
      title: "Contactez-Moi",
      subtitle: "Vous avez un projet ou une opportunité ? Discutons-en.",
      formDescription: "Remplissez le formulaire ci-dessous pour me contacter",
      successMessage: "Merci ! Je vous répondrai bientôt.",
      form: {
        name: "Nom",
        namePlaceholder: "Votre nom",
        email: "Email",
        emailPlaceholder: "votre.email@exemple.com",
        subject: "Sujet",
        subjectPlaceholder: "De quoi s'agit-il ?",
        message: "Message",
        messagePlaceholder: "Votre message ici...",
        send: "Envoyer",
        sending: "Envoi...",
        success: "Message envoyé avec succès !",
        error: "Échec de l'envoi. Veuillez réessayer."
      },
      info: {
        email: "Email",
        phone: "Téléphone",
        github: "GitHub",
        linkedin: "LinkedIn"
      }
    },
    footer: {
      copyright: "© {year} Ayman Mourtada. Créé avec React & TypeScript."
    }
  }
};

export type Language = 'en' | 'fr';
export type TranslationKey = typeof translations.en;
