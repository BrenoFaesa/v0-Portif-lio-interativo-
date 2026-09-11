"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "Portfólio Interativo",
      description: "Meu portfólio online para apresentar minhas habilidades, experiências e projetos.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-E8994l6nSqgMdBhXqu4G57oG2JAoIL.png",
      technologies: ["Next.js", "TypeScript", "Vercel"],
      liveUrl: "https://v0-interactive-portfolio-jdkjgel33-breno110604-2586s-projects.vercel.app",
      featured: true,
    },
    {
      title: "Adivinha Cores",
      description: "Jogo interativo desenvolvido para testar e aprimorar o reconhecimento de cores.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qDjQjVy0UvddCsHWnPT8BOp3NMVMfR.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://brenofaesa.github.io/adivinhacores",
      featured: true,
    },
    {
      title: "Trabalho Todo API",
      description: "Projeto em grupo para gerenciamento de tarefas por meio de uma API.",
      image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      technologies: ["Java", "API", "GitHub"],
      githubUrl: "https://github.com/Rhyan-Java/Trabalho-todo-api-c2.git",
      featured: false,
    },
    {
      title: "Sistema de Biblioteca",
      description: "Projeto em grupo para gerenciamento de livros e operações de uma biblioteca.",
      image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      technologies: ["Java", "GitHub"],
      githubUrl: "https://github.com/AndreRibeiroRodrigues/Sistema-de-Biblioteca.git",
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Projetos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi durante minha jornada
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <CardHeader className="p-0">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {project.featured && <Badge className="absolute top-4 left-4 bg-primary">Destaque</Badge>}
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <CardTitle className="text-xl mb-3 text-card-foreground">{project.title}</CardTitle>

                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.githubUrl && (
                    <Button asChild size="sm" variant="outline" className="group/btn bg-transparent">
                      <a href={project.githubUrl} target="_blank" rel="noreferrer">
                        <Github className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                        Código
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button asChild size="sm" className="group/btn">
                      <a href={project.liveUrl} target="_blank" rel="noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                        Ver Projeto
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}
