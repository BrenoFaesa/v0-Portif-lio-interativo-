"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, GraduationCap, Calendar } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Sobre Mim</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça um pouco mais sobre minha jornada e experiências
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">Educação</h3>
                    <p className="text-muted-foreground">FAESA - Centro Universitário</p>
                  </div>
                </div>
                <p className="text-card-foreground">
                  Estudante dedicado, sempre em busca de novos conhecimentos e oportunidades de crescimento acadêmico e
                  profissional.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">Localização</h3>
                    <p className="text-muted-foreground">Cariacica, Espírito Santo</p>
                  </div>
                </div>
                <p className="text-card-foreground">
                  Baseado no Espírito Santo, região conhecida por sua rica cultura e crescente ecossistema tecnológico.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-card-foreground mb-4">Minha Jornada</h3>
                <p className="text-card-foreground leading-relaxed">
                  Sou um estudante apaixonado por tecnologia, sempre buscando aprender e aplicar novos conhecimentos.
                  Minha jornada na FAESA tem sido fundamental para desenvolver minhas habilidades técnicas e
                  profissionais.
                </p>
                <p className="text-card-foreground leading-relaxed mt-4">
                  Acredito no poder da tecnologia para transformar ideias em soluções reais que impactem positivamente a
                  vida das pessoas.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">Objetivos</h3>
                    <p className="text-muted-foreground">Crescimento Contínuo</p>
                  </div>
                </div>
                <p className="text-card-foreground">
                  Focado em desenvolver projetos inovadores e construir uma carreira sólida na área de tecnologia.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
