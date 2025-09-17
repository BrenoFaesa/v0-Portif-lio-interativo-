"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Palette, Zap } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: "Desenvolvimento",
      description: "Linguagens e frameworks para desenvolvimento",
      skills: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python"],
    },
    {
      icon: Globe,
      title: "Web Technologies",
      description: "Tecnologias para desenvolvimento web",
      skills: ["HTML5", "CSS3", "Tailwind CSS", "REST APIs", "GraphQL", "Webpack"],
    },
    {
      icon: Database,
      title: "Banco de Dados",
      description: "Sistemas de gerenciamento de dados",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Supabase", "Prisma"],
    },
    {
      icon: Palette,
      title: "Design & UX",
      description: "Ferramentas de design e experiência do usuário",
      skills: ["Figma", "Adobe XD", "UI/UX Design", "Prototyping", "User Research"],
    },
    {
      icon: Zap,
      title: "Ferramentas",
      description: "Produtividade e desenvolvimento",
      skills: ["Git", "Docker", "VS Code", "Postman", "Vercel", "AWS"],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Habilidades</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologias e ferramentas que utilizo para criar soluções digitais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
