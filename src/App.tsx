"use client"

import { useState } from "react"
import Navigation from "./components/navigation"
import Hero from "./components/hero"
import About from "./components/about"
import Skills from "./components/skills"
import Certifications from "./components/certifications"
import Education from "./components/education"
import Footer from "./components/footer"
import "./globals.css"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")

  return (
    <main className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero setActiveSection={setActiveSection} />
      <About />
      <Skills />
      <Certifications />
      <Education />
      <Footer />
    </main>
  )
}
