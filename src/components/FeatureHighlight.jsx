import { FaTools } from "react-icons/fa"
import * as Icons from "react-icons/fi"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Info, AlertTriangle } from "lucide-react"
import clsx from "clsx"

export default function FeatureHighlight({
  title,
  subtitle,
  description,
  icon = "FiZap",
  videoUrl,
  toolLink,
  advantages = [],
  cautions = [],
  isDark = false // novo: controle externo do modo dark
}) {
  const IconComponent = Icons[icon] || FaTools

  const getEmbedUrl = (url) => {
    if (url.includes("watch?v=")) {
      return url.replace("watch?v=", "embed/");
    }
    return url;
  }
  
  return (
    <section
      className={clsx(
        "w-full px-16 py-20 border-b space-y-12 transition-all duration-500 rounded-2xl",
        isDark
          ? "bg-gradient-to-br from-[#2e1065] to-[#1e293b] text-slate-100 border-slate-700"
          : "bg-gradient-to-br from-slate-100 to-white text-slate-800 border-slate-200"
      )}
    >
      {/* Bloco principal com vídeo e texto */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Coluna do texto */}
        <div
          className={clsx(
            "space-y-6",
            "lg:text-left",
            "text-center lg:text-left self-start"
          )}
        >
          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <IconComponent
              className={clsx(
                "w-8 h-8",
                isDark ? "text-purple-300" : "text-blue-600"
              )}
            />
            <h2
              className={clsx(
                "text-4xl font-bold leading-tight",
                isDark ? "text-purple-100" : "text-slate-900"
              )}
            >
              {title}
            </h2>
          </div>

          <p
            className={clsx(
              "text-lg font-semibold",
              isDark ? "text-slate-300" : "text-slate-600"
            )}
          >
            {subtitle}
          </p>
          <p
            className={clsx(
              "text-base",
              isDark ? "text-slate-300" : "text-slate-700"
            )}
          >
            {description}
          </p>

          <div className="flex justify-center lg:justify-start">
          <Button
            onClick={() => window.open(toolLink, "_blank", "noopener,noreferrer")}
            className={clsx(
              "text-base px-6 py-3",
              isDark
                ? "bg-purple-700 hover:bg-purple-600 text-white"
                : "bg-blue-600 hover:bg-blue-500 text-white"
            )}
          >
            Acessar Ferramenta
          </Button>
          </div>
        </div>

        {/* Coluna do vídeo centralizada */}
        <div className="flex items-center justify-center">
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              key={videoUrl}
              src={`${getEmbedUrl(videoUrl)}?rel=0`}
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
          <Card
            className={clsx(
              "border-l-4 shadow-sm",
              isDark
                ? "border-purple-400 bg-slate-800"
                : "border-green-500 bg-white"
            )}
          >
            <CardHeader
              className={clsx(
                "flex items-center gap-2 font-semibold",
                isDark ? "text-purple-200" : "text-green-700"
              )}
            >
              <Info size={20} />
              Vantagens
            </CardHeader>
            <CardContent>
              <ul
                className={clsx(
                  "space-y-2 list-disc pl-5 text-left",
                  isDark ? "text-slate-200" : "text-slate-700"
                )}
              >
                {advantages.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {/* Pontos de Atenção */}
        {cautions.length > 0 && (
          <Card
            className={clsx(
              "border-l-4 shadow-sm",
              isDark
                ? "border-yellow-400 bg-slate-800"
                : "border-yellow-500 bg-white"
            )}
          >
            <CardHeader
              className={clsx(
                "flex items-center gap-2 font-semibold",
                isDark ? "text-yellow-200" : "text-yellow-700"
              )}
            >
              <AlertTriangle size={20} />
              Pontos de Atenção
            </CardHeader>
            <CardContent>
              <ul
                className={clsx(
                  "space-y-2 list-disc pl-5 text-left",
                  isDark ? "text-slate-200" : "text-slate-700"
                )}
              >
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
