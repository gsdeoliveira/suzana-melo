import suzana from "../../assets/suzana-consultas.png"

export const Consultas = () => {
  return (
    <section
      className="bg-zinc-300 rounded-[72px] flex gap-5 mt-[100px] z-10 relative bottom-96"
      id="consultas"
    >
      <div className="pl-16 pt-16 pb-16">
        <p className="uppercase text-zinc-600 text-[24px] font-medium">
          Como funciona
        </p>
        <h2 className="text-[100px] font-poppins font-semibold text-zinc-800 leading-none mb-10">
          Consultas<span className="text-[#1F98B3]">.</span>
        </h2>
        <div className="flex flex-col gap-5">
          <div>
            <h3 className="text-zinc-800 font-semibold text-[24px]">
              Duração das Sessões:
            </h3>
            <p className="text-zinc-700 text-[18px]">
              Cada sessão tem aproximadamente 50 minutos, com foco exclusivo nas
              necessidades do paciente.
            </p>
          </div>
          <div>
            <h3 className="text-zinc-800 font-semibold text-[24px]">
              Frequência Recomendada:
            </h3>
            <p className="text-zinc-700 text-[18px]">
              Para resultados mais efetivos, recomenda-se uma frequência semanal
              ou quinzenal, dependendo do caso.
            </p>
          </div>
          <div>
            <h3 className="text-zinc-800 font-semibold text-[24px]">
              Confidencialidade:
            </h3>
            <p className="text-zinc-700 text-[18px]">
              O sigilo profissional é a base da minha prática. Todas as
              informações compartilhadas em consulta são tratadas com a mais
              absoluta confidencialidade."
            </p>
          </div>
        </div>
      </div>

      <div className="relative top-40">
        <img src={suzana} alt="" />
      </div>
    </section>
  )
}
