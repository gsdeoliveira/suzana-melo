import { CardServico } from '../card-servico'

export const Servicos = () => {
  return (
    <section className="flex flex-col sm:flex-row gap-10 mt-[120px] p-5 md:px-[50px]" id="servicos">
      <h2 className="text-[54px] sm:text-[72px] xl:text-[100px] text-center vertical-text font-poppins font-semibold text-zinc-800">
        Serviços
      </h2>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center justify-items-stretch gap-5 xl:gap-10">
        <CardServico>Atendimento Individual</CardServico>
        <CardServico>Atendimento Online</CardServico>
        <CardServico>Terapia de Casal</CardServico>
        <CardServico>Workshops e Palestras</CardServico>
        <CardServico>Terapia Familiar</CardServico>
        <CardServico>Grupos de Terapia</CardServico>
        <CardServico>Workshops e Palestras</CardServico>
        <CardServico>Terapia Familiar</CardServico>
        <CardServico>Grupos de Terapia</CardServico>
      </div>
    </section>
  )
}
