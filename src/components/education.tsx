"use client"
export default function Education() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center text-balance">Education</h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-primary/30"></div>

          {/* Education Item */}
          <div className="ml-24">
            <div className="relative mb-12">
              {/* Timeline Dot */}
              <div className="absolute -left-20 top-2 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-md"></div>

              <div className="bg-card rounded-lg p-8 border border-border hover:shadow-lg transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-primary">Bachelor of Science in Computer Science</h3>
                  <span className="text-sm text-muted-foreground mt-2 sm:mt-0">Expected Graduation: 2025</span>
                </div>

                <p className="text-lg font-semibold text-foreground mb-3">Mapua Malayan Colleges Mindanao</p>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  Comprehensive computer science curriculum covering software development, data structures, algorithms,
                  database systems, and web technologies. Strong emphasis on practical problem-solving and real-world
                  applications.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Core Coursework</p>
                    <ul className="text-sm space-y-1 text-foreground">
                      <li>• Data Structures & Algorithms</li>
                      <li>• Database Systems</li>
                      <li>• Web Development</li>
                      <li>• Software Engineering</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Programming Focus</p>
                    <ul className="text-sm space-y-1 text-foreground">
                      <li>• Java & Object-Oriented Design</li>
                      <li>• C++ & Systems Programming</li>
                      <li>• Assembly Language</li>
                      <li>• Full-Stack Web Development</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
