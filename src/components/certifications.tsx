"use client"
import { Award } from "lucide-react"

export default function Certifications() {
  const certifications = [
    {
      id: 1,
      title: "Python for Everybody",
      issuer: "Coursera",
      date: "2024",
      description: "Comprehensive Python programming course covering fundamentals to advanced concepts",
      icon: "🐍",
    },
    {
      id: 2,
      title: "Web Development Specialization",
      issuer: "Coursera",
      date: "2024",
      description: "Full-stack web development including HTML, CSS, JavaScript, and backend technologies",
      icon: "🌐",
    },
    {
      id: 3,
      title: "Data Structures and Algorithms",
      issuer: "Coursera",
      date: "2024",
      description: "Master fundamental data structures and algorithmic problem-solving techniques",
      icon: "📊",
    },
    {
      id: 4,
      title: "Introduction to Computer Science",
      issuer: "Coursera",
      date: "2024",
      description: "Core concepts of computer science and computational thinking",
      icon: "💻",
    },
    {
      id: 5,
      title: "Database Design and SQL",
      issuer: "Coursera",
      date: "2024",
      description: "Learn database design principles and SQL query optimization",
      icon: "🗄️",
    },
    {
      id: 6,
      title: "Cloud Computing Fundamentals",
      issuer: "Coursera",
      date: "2024",
      description: "Understanding cloud infrastructure and deployment strategies",
      icon: "☁️",
    },
  ]

  const scrollCerts = [...certifications, ...certifications, ...certifications]

  return (
    <section className="py-20 px-4 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center justify-center gap-6 mb-4">
          <Award className="text-secondary" size={32} />
          <h2 className="text-4xl font-bold text-foreground text-center text-balance">Coursera Certifications</h2>
          <Award className="text-secondary" size={32} />
        </div>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Continuous learning through professional certifications
        </p>

        <div className="relative overflow-hidden">
          <div className="flex gap-6 infinite-scroll">
            {scrollCerts.map((cert, index) => (
              <div
                key={`${cert.id}-${index}`}
                className="flex-shrink-0 w-80 bg-background rounded-lg p-8 border-2 border-border hover:border-primary transition-all duration-300 neon-glow hover:neon-glow-accent"
              >
                <div className="text-5xl mb-4">{cert.icon}</div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {cert.issuer} • {cert.date}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-muted-foreground mt-8 text-sm">Hover to pause scrolling</p>
      </div>
    </section>
  )
}
