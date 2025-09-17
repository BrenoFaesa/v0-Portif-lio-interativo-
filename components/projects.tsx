"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Code } from "lucide-react"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "Sistema de Gestão Acadêmica",
      description:
        "Plataforma completa para gerenciamento de notas, frequência e comunicação entre alunos e professores.",
      image: "/academic-management-system-dashboard.jpg",
      technologies: ["React", "Node.js", "PostgreSQL", "Express"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
    },
    {
      title: "App de Controle Financeiro",
      description: "Aplicativo mobile para controle de gastos pessoais com gráficos e relatórios detalhados.",
      image: "/financial-control-mobile-app-interface.jpg",
      technologies: ["React Native", "Firebase", "Chart.js"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
    },
    {
      title: "E-commerce Local",
      description: "Loja virtual para pequenos comerciantes locais com sistema de pagamento integrado.",
      image: "/local-ecommerce-website-design.jpg",
      technologies: ["Next.js", "Stripe", "MongoDB", "Tailwind"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
    },
    {
      title: "Portfolio Interativo",
      description: "Site pessoal com animações e design responsivo para apresentação profissional.",
      image: "/interactive-portfolio-website-design.jpg",
      technologies: ["Next.js", "Framer Motion", "TypeScript"],
      githubUrl: "#",
      liveUrl: "#",
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
                  <Button size="sm" variant="outline" className="group/btn bg-transparent">
                    <Github className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                    Código
                  </Button>
                  <Button size="sm" className="group/btn">
                    <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                    Ver Projeto
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group bg-transparent">
            <Code className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
            Ver Todos os Projetos
          </Button>
        </div>
      </div>
    </section>
  )
}
