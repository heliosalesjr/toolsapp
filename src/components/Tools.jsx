"use client"
import { useState } from "react"
import FeatureHighlight from "./FeatureHighlight"
import data from "@/data/tools.json"
import { Button } from "@/components/ui/button"

export default function Tools() {
  const [activeTag, setActiveTag] = useState(null)

  const filteredTools = activeTag
    ? data.filter(tool => tool.tags.includes(activeTag))
    : data

  return (
    <section className="space-y-16 px-6 py-12 bg-white text-center " id="content">
      {/* Título principal e subtítulo */}
      <div className="space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold bg-gradient-to-br from-green-700 to-green-500 text-transparent bg-clip-text">Ferramentas Criativas</h1>
        <p className="text-lg text-slate-600">
          Explore diversas ferramentas para criação de conteúdo, mídia e jogos interativos.
        </p>
      </div>

      {/* Botões de filtro */}
      <div className="flex justify-center gap-4 flex-wrap">
        <Button
          variant={activeTag === "1" ? "default" : "outline"}
          onClick={() => setActiveTag("1")}
        >
          Texto e Escrita
        </Button>
        <Button
          variant={activeTag === "2" ? "default" : "outline"}
          onClick={() => setActiveTag("2")}
        >
          Mídia e Multimídia
        </Button>
        <Button
          variant={activeTag === "3" ? "default" : "outline"}
          onClick={() => setActiveTag("3")}
        >
          Jogos e Quizes
        </Button>
        <Button
          variant={!activeTag ? "default" : "outline"}
          onClick={() => setActiveTag(null)}
        >
          Mostrar Todas
        </Button>
      </div>

      {/* Renderização das ferramentas */}
      <div className="space-y-8">
        {filteredTools.map((tool, index) => (
          <FeatureHighlight
          key={`tool-${index}`}
          {...tool}
          index={index}
          isDark={index % 2 === 1} // 👈 alterna claro/escuro com base na posição
        />
        ))}
      </div>
    </section>
  )
}
