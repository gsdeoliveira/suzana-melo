import { FaWhatsapp } from "react-icons/fa"
import { RiMapPin2Line } from "react-icons/ri"
import { MdOutlineEmail } from "react-icons/md"

import logo from "../assets/logo.png"

export const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-zinc-400 flex flex-col gap-10 p-[50px] mt-[100px]">
      <div className="flex items-center justify-between gap-10">
        <div className="basis-6/12">
          <div className="flex flex-col">
            <img src={logo} alt="logo" width={135} height={60} />
            <p>
              Na psicanálise, investigamos os aspectos inconscientes que afetam
              nossas escolhas e comportamentos. Meu trabalho é proporcionar um
              espaço de acolhimento, reflexão e compreensão, para que o paciente
              possa lidar melhor com suas questões emocionais e psicológicas.
            </p>
          </div>
        </div>
        <div className="flex gap-20">
          <div className="flex flex-col gap-3">
            <h3 className="uppercase text-white font-medium text-[20px]">
              Navegação
            </h3>
            <ul>
              <li>Home</li>
              <li>Sobre</li>
              <li>Serviços</li>
              <li>Consultas</li>
              <li>Contato</li>
            </ul>
          </div>
          <div className="flex flex-col  gap-3">
            <h3 className="uppercase text-white font-medium text-[20px]">
              Contato
            </h3>
            <div>
              <p>55 85 99999-9999</p>
              <p>suzanamelo@gmail.com</p>
              <p>Rua Ali Perto,18 - Aldeota</p>
              <p>Fortaleza - CE</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <FaWhatsapp size={30} />
        <MdOutlineEmail size={30} />
        <RiMapPin2Line size={30} />
      </div>
      <div className="flex justify-between">
        <p>© Alguns direitos reservados.</p>
        <p>Política de Privacidade | Termos de Uso</p>
      </div>
    </footer>
  )
}
