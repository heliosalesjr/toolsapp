import { FaTools } from "react-icons/fa"


import * as Icons from "react-icons/fi"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Info, AlertTriangle } from "lucide-react"

export default function FeatureHighlight({
  title,
  subtitle,
  description,
  icon = "FiZap",
  videoUrl,
  toolLink,
  advantages = [],
  cautions = []
}) {
  const IconComponent = Icons[icon] || FaTools

  return (
    <section className="w-full px-6 py-20 bg-gradient-to-br from-slate-100 to-white text-slate-800 border-b border-slate-200 space-y-12">
      {/* Bloco principal com vídeo e texto */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Coluna do texto */}
        <div className="space-y-6 self-start">
          <div className="flex items-center gap-4">
            <IconComponent className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl font-bold text-slate-900 leading-tight">{title}</h2>
          </div>

          <p className="text-lg text-slate-600">{subtitle}</p>
          <p className="text-base text-slate-700">{description}</p>

          <Button asChild className="text-base px-6 py-3">
            <a href={toolLink} target="_blank" rel="noopener noreferrer">
              Acessar Ferramenta
            </a>
          </Button>
        </div>

        {/* Coluna do vídeo centralizada verticalmente */}
        <div className="flex items-center justify-center">
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              src={`https://www.youtube.com/embed/${videoUrl}?rel=0`}
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Bloco com cards de vantagens e atenção */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Vantagens */}
        {advantages.length > 0 && (
          <Card className="border-l-4 border-green-500 shadow-sm">
            <CardHeader className="flex items-center gap-2 text-green-700 font-semibold">
              <Info size={20} />
              Vantagens
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc pl-5 text-slate-700">
                {advantages.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {/* Pontos de Atenção */}
        {cautions.length > 0 && (
          <Card className="border-l-4 border-yellow-500 shadow-sm">
            <CardHeader className="flex items-center gap-2 text-yellow-700 font-semibold">
              <AlertTriangle size={20} />
              Pontos de Atenção
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc pl-5 text-slate-700">
                {cautions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  )
}
