"use client"

import { ArrowDown } from "lucide-react"

export default function HeroSection() {
  return (
    <div className="flex justify-center items-center min-h-screen w-full py-4 sm:py-10 px-4 sm:px-6">
      <div className="flex h-auto sm:h-[80vh] w-full max-w-9xl flex-col md:flex-row shadow-lg rounded-lg overflow-hidden">
        {/* Diagonal split with image section */}
        <div className="relative w-full h-[40vh] sm:h-auto md:w-1/2 bg-white">
          {/* Main image with diagonal cut */}
          <div className="relative h-full w-full">
            {/* Imagem com formato trapezoidal - mantido exatamente como estava */}
            <div
              className="h-full w-full overflow-hidden"
              style={{
                clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
              }}
            >
              <img
                src="/assets/images/hero1.jpg"
                alt="Homem sorrindo"
                className="h-full w-full object-cover"
                style={{
                  filter: "brightness(0.9)", // Escurece levemente a imagem para manter o efeito visual
                }}
              />
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="flex w-full flex-col justify-center bg-white p-6 sm:p-8 md:p-12 lg:p-16 md:w-1/2">
          <div className="w-full md:max-w-lg ">
            {/* Content */}
            <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl font-semibold bg-gradient-to-br from-green-700 to-green-500 text-transparent bg-clip-text">
              Portfólio de Ferramentas
            </h1>

            <p className="mb-3 sm:mb-6 text-base sm:text-lg text-slate-700">
            O uso de tecnologias na educação tem crescido, facilitando a criação de conteúdos e a interação em sala de aula. Na BEĨ Educação, reunimos ferramentas pedagógicas para apoiar professores, com orientações práticas e uma curadoria de plataformas com suas principais vantagens e desvantagens.
            </p>

           

            {/* Button - centralizado em mobile, sem ocupar toda a largura */}
            <div className="flex justify-center sm:justify-start">
              <button
                onClick={() => {
                  document.getElementById("content")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="group relative flex items-center rounded-full bg-[#0F172A] px-4 sm:px-6 py-2.5 sm:py-3 text-white 
                    transition-all duration-300 ease-out hover:bg-[#1E293B] hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="mr-2 sm:mr-4 text-sm sm:text-base font-medium uppercase">Acesse o Conteúdo</span>
                <span
                  className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#00E676] 
                    transition-all duration-300 ease-out group-hover:bg-[#00C764]"
                >
                  <ArrowDown
                    size={18}
                    className="text-[#0F172A] transition-all duration-300 ease-out group-hover:rotate-360"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


