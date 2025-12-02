import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Layers, Award, Code } from "lucide-react";

// --- Types ---

type AchievementItem = {
  name: string;
  date?: string;
  description?: string;
  location?: string;
  role?: string;
  format?: string;
  platform?: string;
  platforms?: string[];
  tools?: string[];
  categories?: string[];
  skills?: string[];
};

type AchievementSection = {
  title: string;
  icon: any;
  color: string;
  items: AchievementItem[];
};

// --- Data ---

const achievements: AchievementSection[] = [
  {
    title: "CTF Competitions & Cyber Exercises",
    icon: Trophy,
    color: "primary",
    items: [
      {
        name: "Cyber Odyssey 2024 CTF Finalist",
        date: "December 2024",
        location: "Kouribga(On-site)",
        description:
          "Qualified for the national Cyber Odyssey CTF finals based on strong preliminary performance. Advanced to the on-site finals demonstrating solid cybersecurity skills."

      },
      {
        name: "ENSET CHALLENGE CTF Final Showdown Finalist",
        date: "May 2025",
        location: "ENSET Mohammedia (On-site)",
        description:
          "Reached a prestigious 2‑day final after tough qualifying rounds, competing against top teams.",
        skills: [
          "Advanced penetration testing",
          "forensics",
          "cryptography",
          "team collaboration"
        ]
      },
      {
        name: "Blockchain & Cryptocurrency Days CTF Finalist",
        date: "2025",
        location: "INPT Rabat (On-site)",
        description:
          "Specialized event focusing on blockchain technology and smart contract security.",
        skills: ["Blockchain technology", "cryptocurrency security", "smart contract auditing"]
      },
      {
        name: "IT-WAVE CTF Competition Finalist",
        date: "April 2025",
        location: "Solicod, Tangier (On-site)",
        description: "Qualified for the finals after an excellent preliminary phase.",
        skills: ["Network security", "web exploitation", "reverse engineering"]
      },
      {
        name: "DFIR212 Cyber Threat Exercise Participant",
        date: "2024",
        location: "Rabat (On-site)",
        description: "Hands-on Digital Forensics & Incident Response exercise.",
        platform: "SecDojo cyber range",
        skills: ["Incident response", "digital forensics", "threat containment"]
      },
      {
        name: "DGSSI & ANCA-CERT National Exercise (Participant)",
        date: "April 2025",
        format: "Online / Multi-platform",
        description: "National-level cyber exercise with Moroccan authorities.",
        platforms: ["Splunk", "Cisco", "Trend Micro Vision One"],
        skills: ["SIEM analysis", "threat hunting", "cloud security", "incident response"]
      },
      {
        name: "AISEC CTF ENSA Marrakech Participant",
        date: "2023",
        format: "Online Qualifier",
        description: "12-hour Jeopardy-style international qualifier.",
        categories: [
          "Web Security",
          "Cryptography",
          "Reverse Engineering",
          "Forensics",
          "Binary Exploitation",
          "OSINT"
        ],
        skills: ["Multi-domain cybersecurity challenges"]
      }
    ]
  },
  {
    title: "Hackathons & Innovation Challenges",
    icon: Layers,
    color: "green",
    items: [
      {
        name: "Winner – 48h Innovation Challenge | UIR 2021",
        role: "Team Leader & Developer",
        description:
          "Won first place after 48 hours of intense work. Built and pitched an innovative solution under pressure.",
        skills: ["Rapid prototyping", "creative problem-solving", "team leadership"]
      },
      {
        name: "Finalist – AMSA5 Triple‑S Competition | UEMF 2020",
        role: "Machine Learning Engineer",
        description:
          "Finalist with a real-time mask detection project using CNN.",
        tools: ["Python", "TensorFlow", "OpenCV"],
        skills: [
          "Computer Vision",
          "Deep Learning",
          "Convolutional Neural Networks",
          "Real-time Processing"
        ]
      },
      {
        name: "Participant – ADITI African Innovation Day | ENSAM 2021",
        role: "Mechatronics Contributor",
        description: "International innovation event focused on mechatronics.",
        skills: ["Cross-disciplinary collaboration", "engineering design", "innovation"]
      }
    ]
  },
  {
    title: "Certifications & Training",
    icon: Award,
    color: "yellow",
    items: [
      { name: "AWS Academy Graduate – Cloud Security Foundations" },
      { name: "Cloud Security & Infrastructure Track – OpenClassrooms" },
      { name: "Fortinet NSE 1 & 2 – Network Security Associate" },
      { name: "Cisco Ethical Hacking Certification" }
    ]
  },
  {
    title: "Technical Skills Summary",
    icon: Code,
    color: "purple",
    items: [
      {
        name: "Security Domains",
        skills: [
          "Penetration Testing & Red Teaming",
          "Digital Forensics & Incident Response (DFIR)",
          "Cloud Security (AWS, Trend Micro)",
          "Blockchain & Cryptocurrency Security",
          "Network Security & Monitoring"
        ]
      },
      {
        name: "Tools & Platforms",
        skills: ["Splunk", "Cisco Security", "Trend Micro Vision One", "SecDojo"]
      },
      { name: "Programming", skills: ["Python", "TensorFlow", "OpenCV"] },
      { name: "Cloud", skills: ["AWS Security Services"] },
      { name: "Methodologies", skills: ["CTF challenges", "cyber ranges", "ethical hacking"] },
      {
        name: "Soft Skills",
        skills: [
          "Team Leadership & Collaboration",
          "Rapid Problem-Solving",
          "Innovation & Creative Thinking",
          "Technical Communication"
        ]
      }
    ]
  }
];

// --- Component ---

export default function AchievementsSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="py-24 bg-muted/20 min-h-screen"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-20 gradient-text transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Achievements & Skills
        </h2>
        <div className="flex justify-center mb-10">
          <a href="#ctf-achievements" className="text-base text-blue-500 hover:underline font-medium transition-colors duration-150">
            Jump to CTF Achievements
          </a>
        </div>
        <div className="space-y-24">
          {achievements.map((section, index) => (
            <div
              key={section.title}
              id={section.title === "CTF Competitions & Cyber Exercises" ? "ctf-achievements" : undefined}
              className={`transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Section Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-xl bg-${section.color}/10`}>
                  <section.icon className={`w-7 h-7 text-${section.color}`} />
                </div>
                <h3 className="text-2xl font-bold">{section.title}</h3>
              </div>
              {/* Items */}
              <div className="grid gap-6 md:grid-cols-2">
                {section.items.map((item, idx) => (
                  <Card
                    key={item.name + idx}
                    className="glass border-border/50 hover:border-primary/50 transition-all"
                  >
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold">
                        {item.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex flex-wrap gap-2 text-sm">
                        {item.date && <Badge variant="secondary">{item.date}</Badge>}
                        {item.location && <Badge>{item.location}</Badge>}
                        {item.role && <Badge>{item.role}</Badge>}
                        {item.format && <Badge>{item.format}</Badge>}
                        {item.platform && <Badge>{item.platform}</Badge>}
                        {item.platforms && item.platforms.map((p) => <Badge key={p}>{p}</Badge>)}
                        {item.tools && item.tools.map((t) => <Badge key={t}>{t}</Badge>)}
                        {item.categories && item.categories.map((c) => <Badge key={c}>{c}</Badge>)}
                      </div>
                      {item.skills && (
                        <div className="flex flex-wrap gap-2 mt-1">
                          {item.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="border-primary text-primary bg-transparent text-xs font-normal">{skill}</Badge>
                          ))}
                        </div>
                      )}
                      {item.description && (
                        <div className="text-muted-foreground text-sm leading-relaxed max-w-3xl">
                          {item.description}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
