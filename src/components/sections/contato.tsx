import { FaWhatsapp } from "react-icons/fa"
import { RiMapPin2Line } from "react-icons/ri"
import { MdOutlineEmail } from "react-icons/md"

export const Contato = () => {
  return (
    <section
      id="contato"
      className="flex flex-col md:flex-row justify-between items-center -mt-[200px] md:-mt-[100px]"
    >
      <div className="basis-5/12 md:py-10">
        <div className="bg-primary-100 flex flex-col sm:flex-row p-5 items-start md:pl-[50px] pr-5 py-10">
          <h2 className="text-[54px] sm:text-[72px] xl:text-[100px] vertical-text font-poppins font-semibold text-zinc-800">
            Contato
          </h2>
          <div className="space-y-5 text-zinc-800 text-sm">
            <p>
              Entre em contato para agendar uma sessão ou para tirar qualquer
              dúvida. Vamos juntos trilhar o caminho para o autoconhecimento e
              bem-estar.
            </p>
            <div className="flex items-center justify-start gap-3">
              <FaWhatsapp size={20} />
              <p>+55 85 9999-9999</p>
            </div>
            <div className="flex items-center justify-start gap-3">
              <MdOutlineEmail size={20} />
              <p>suzanamelo@gmail.com</p>
            </div>
            <div className="flex items-center justify-start gap-3">
              <RiMapPin2Line size={20} />
              <p>Rua Ali Perto, 18</p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex-1 md:pr-[50px] w-full">
        <div className="bg-white shadow-2xl px-5 sm:px-10 py-5 w-full">
          <h3 className="uppercase font-poppins mb-10 text-[20px] xl:text-[24px] font-medium">
            Nos envie um email
          </h3>
          <form action="" className="grid grid-cols-2 gap-5 rounded">
            <div className="flex flex-col gap-1">
              <label htmlFor="nome" className="font-poppins font-medium">
                Nome
              </label>
              <input
                type="text"
                name="nome"
                id="nome"
                placeholder="Seu nome"
                className="bg-zinc-200 p-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="sobrenome" className="font-poppins font-medium">
                Sobrenome
              </label>
              <input
                type="text"
                name="sobrenome"
                id="sobrenome"
                placeholder="Seu sobrenome"
                className="bg-zinc-200 p-2"
              />
            </div>
            <div className="flex flex-col gap-1 col-span-1">
              <label htmlFor="telefone" className="font-poppins font-medium">
                Telefone
              </label>
              <input
                type="text"
                name="telefone"
                id="telefone"
                placeholder="Seu telefone"
                className="bg-zinc-200 p-2"
              />
            </div>
            <div />
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="font-poppins font-medium">
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Seu email"
                className="bg-zinc-200 p-2"
              />
            </div>
            <div />
            <div className="flex flex-col gap-1 col-span-2">
              <label htmlFor="mensagem" className="font-poppins font-medium">
                Mensagem
              </label>
              <textarea
                name="mensagem"
                id="mensagem"
                placeholder="Sua mensagem"
                className="bg-zinc-200 p-2 h-32"
              />
            </div>
            <button className="bg-gradient-to-b col-span-2 md:col-span-1 from-primary-100 to-primary-300 px-5 py-2 text-zinc-800 font-poppins text-[18px] uppercase font-semibold rounded">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
