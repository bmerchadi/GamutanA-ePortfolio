"use client"

export default function About() {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-8 text-balance">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate Computer Science student at Mapua Malayan Colleges Mindanao, dedicated to mastering
              multiple programming paradigms and technologies. My journey in tech is driven by curiosity and a desire to
              solve real-world problems through code.
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With a strong foundation in both low-level programming (Assembly) and high-level languages, I bring a
              comprehensive understanding of how systems work from the ground up. I'm particularly interested in web
              development and creating intuitive user experiences.
            </p>
          </div>

          <div className="bg-background rounded-lg p-8 border border-border">
            <h3 className="text-2xl font-bold text-primary mb-6">Quick Facts</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-xl">📍</span>
                <span className="text-muted-foreground">Mapua Malayan Colleges Mindanao</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-xl">🎓</span>
                <span className="text-muted-foreground">Bachelor of Science in Computer Science</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-xl">🚀</span>
                <span className="text-muted-foreground">Passionate about continuous learning</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-xl">💡</span>
                <span className="text-muted-foreground">Problem solver and creative thinker</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
