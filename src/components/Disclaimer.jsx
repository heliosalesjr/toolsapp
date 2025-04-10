export default function TeacherSupport() {
    return (
      <section className="relative bg-emerald-100 overflow-hidden">
        {/* Imagem de fundo */}
        <img
          src="/assets/images/grafismo_branco.png" // substitua pelo caminho real da imagem
          alt="Professor com tecnologia"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
  
        {/* Conteúdo com sobreposição */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center text-slate-900 space-y-6">
          <h2 className="text-4xl font-bold leading-tight">
            Tecnologia a favor do aprendizado
          </h2>
          <p className="text-lg leading-relaxed">
            As ferramentas digitais não substituem o papel do professor, mas podem enriquecer a prática pedagógica e tornar o ensino mais interativo e acessível.
            <br /><br />
            A BEĨ Educação também se dedica a auxiliar educadores na implementação dessas tecnologias, por meio das nossas formações pedagógicas, garantindo que elas sejam utilizadas de forma estratégica para melhorar o aprendizado dos alunos.
            <br /><br />
            Se você deseja saber mais sobre como utilizar essas ferramentas na sua prática ou busca apoio para integrá-las às suas aulas, estamos aqui para ajudar.
            <br /><br />
            <strong>Juntos, podemos transformar o ensino e potencializar o aprendizado!</strong>
          </p>
        </div>
      </section>
    )
  }
  