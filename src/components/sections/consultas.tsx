import suzana from "../../assets/suzana-consultas.png"

export const Consultas = () => {
  return (
    <section
      className="bg-zinc-300 rounded-xl sm:rounded-[72px] flex flex-col md:flex-row md:justify-between md:gap-5 mt-[100px] z-10 relative bottom-96"
      id="consultas"
    >
      <div className="md:pl-16 md:pt-16 lg:pb-0 sm:p-10 p-5 py-10 flex-1">
        <p className="uppercase text-zinc-600 text-[20px] xl:text-[24px] font-medium">
          Como funciona
        </p>
        <h2 className="text-[54px] sm:text-[72px] xl:text-[100px] font-poppins font-semibold text-zinc-800 leading-none mb-10">
          Consultas<span className="text-[#1F98B3]">.</span>
        </h2>
        <div className="flex flex-col gap-5">
          <div>
            <h3 className="text-zinc-800 font-semibold text-[20px] xl:text-[24px]">
              Duração das Sessões:
            </h3>
            <p className="text-zinc-700 text-[16px] xl:text-[18px]">
              Cada sessão tem aproximadamente 50 minutos, com foco exclusivo nas
              necessidades do paciente.
            </p>
          </div>
          <div>
            <h3 className="text-zinc-800 font-semibold text-[20px] xl:text-[24px]">
              Frequência Recomendada:
            </h3>
            <p className="text-zinc-700 text-[16px] xl:text-[18px]">
              Para resultados mais efetivos, recomenda-se uma frequência semanal
              ou quinzenal, dependendo do caso.
            </p>
          </div>
          <div>
            <h3 className="text-zinc-800 font-semibold text-[20px] xl:text-[24px]">
              Confidencialidade:
            </h3>
            <p className="text-zinc-700 text-[16px] xl:text-[18px]">
              O sigilo profissional é a base da minha prática. Todas as
              informações compartilhadas em consulta são tratadas com a mais
              absoluta confidencialidade."
            </p>
          </div>
        </div>
      </div>

      <div className="relative md:top-40 md:w-1/2">
        <img src={suzana} alt="" className='w-full' />
      </div>
    </section>
  )
}
