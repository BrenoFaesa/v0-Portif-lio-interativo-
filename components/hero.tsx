"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in-up">
          <div className="mb-8">
            <div className="relative w-32 h-32 mx-auto mb-6 animate-float">
              <Image
                src="/breno-profile.jpg"
                alt="Breno Porto Caparrosa"
                fill
                className="rounded-full object-cover border-4 border-primary/20"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">Breno Porto Caparrosa</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">Desenvolvedor & Estudante na FAESA</p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Apaixonado por tecnologia e inovação, criando soluções digitais que fazem a diferença. Localizado em
              Cariacica, Espírito Santo.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="group">
              <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Entre em Contato
            </Button>
            <div className="flex gap-4">
              <Button variant="outline" size="icon">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Button variant="ghost" onClick={scrollToAbout} className="animate-bounce">
            <ArrowDown className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
