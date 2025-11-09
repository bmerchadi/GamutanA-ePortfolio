"use client"

import { ChevronDown, Zap } from "lucide-react"

interface HeroProps {
  setActiveSection: (section: string) => void
}

export default function Hero({ setActiveSection }: HeroProps) {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-cyan-900/20 pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />

      <div className="relative max-w-4xl mx-auto text-center z-10">
        <div className="mb-8 inline-block">
          <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center neon-glow">
            <span className="text-5xl">⚡</span>
          </div>
        </div>

        <h1 className="text-5xl sm:text-7xl font-bold text-foreground mb-4 text-balance bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
          Adrian C. Gamutan
        </h1>

        <div className="flex items-center justify-center gap-2 mb-4">
          <Zap size={24} className="text-secondary" />
          <p className="text-xl sm:text-2xl font-semibold text-secondary">Tech Support & Developer</p>
          <Zap size={24} className="text-secondary" />
        </div>

        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
          Building innovative solutions with Java, C++, C#, Web Development, and Assembly. Passionate about creating
          technology that makes an impact.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <button
            onClick={() => setActiveSection("certifications")}
            className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg font-semibold hover:shadow-lg neon-glow transition-all duration-300 transform hover:scale-105"
          >
            View Certifications
          </button>
          <button
            onClick={() => setActiveSection("")}
            className="px-8 py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-all duration-300 neon-glow-accent"
          >
            Learn More
          </button>
        </div>

        <div className="animate-bounce">
          <ChevronDown size={32} className="text-accent mx-auto" />
        </div>
      </div>
    </section>
  )
}
