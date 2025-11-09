"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "certifications", label: "Certifications" },
    { id: "education", label: "Education" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-black border-b border-primary/30 shadow-lg neon-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center neon-glow">
              <span className="text-primary-foreground font-bold text-lg">AG</span>
            </div>
            <span className="font-serif font-bold text-foreground hidden sm:inline text-lg">Adrian Gamutan</span>
          </div>

          <div className="hidden md:flex gap-8 flex-1 justify-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`text-sm font-medium transition-all duration-300 relative ${
                  activeSection === item.id ? "text-primary neon-glow-accent" : "text-foreground hover:text-primary"
                } hover:scale-110 border rounded p-2`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary"></div>
                )}
              </button>
            ))}
          </div>

          <div className="hidden md:flex flex-shrink-0">
            <a
              href="mailto:adrian@example.com"
              className="px-6 py-2 bg-gradient-to-r from-primary via-accent to-secondary text-primary-foreground font-medium rounded-lg neon-glow-secondary hover:scale-105 transition-transform duration-300"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} className="text-primary" /> : <Menu size={24} className="text-primary" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-primary/30">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id)
                  setIsOpen(false)
                }}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeSection === item.id
                    ? "bg-primary text-primary-foreground neon-glow"
                    : "text-foreground hover:bg-primary/20"
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="mailto:adrian@example.com"
              className="block w-full text-center px-4 py-2 bg-gradient-to-r from-primary via-accent to-secondary text-primary-foreground font-medium rounded-lg neon-glow-secondary mt-4"
            >
              Contact Me
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
