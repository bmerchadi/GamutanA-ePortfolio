"use client"

import { Zap, Code2, Cpu, Wrench } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Java", "C++", "C#", "Assembly"],
      icon: Cpu,
    },
    {
      category: "Web Development",
      skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
      icon: Code2,
    },
    {
      category: "Tools & Technologies",
      skills: ["Git", "VS Code", "Visual Studio", "Database Design", "RESTful APIs"],
      icon: Wrench,
    },
    {
      category: "Soft Skills",
      skills: ["Problem Solving", "Team Collaboration", "Communication", "Adaptability"],
      icon: Zap,
    },
  ]

  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center text-balance">Technical Skills</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                className="bg-card rounded-lg p-8 border border-border hover:border-primary transition-all duration-300 hover:neon-glow group"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Icon size={32} className="text-secondary group-hover:text-accent transition-colors" />
                  <h3 className="text-2xl font-bold text-primary">{category.category}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 text-foreground rounded-full text-sm font-medium border border-primary/40 hover:border-accent hover:from-primary/30 hover:to-secondary/30 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
