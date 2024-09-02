import suzana from "../../assets/suzana.png"
import row from "../../assets/row.svg"

export const Home = () => {
  return (
    <section id="home">
      <div className="flex items-center justify-center">
        <h1 className="font-poppins text-[100px] font-medium text-zinc-800 leading-none text-center">
          <p>Psicanalista</p>
          <p className="font-poppins text-[100px] font-medium text-zinc-800">
            Suzana <span className="text-primary-100">Melo</span>.
          </p>
        </h1>
      </div>
      <div className="flex items-center justify-center relative">
        <div className="flex-1 absolute left-[50px] font-poppins text-[32px] leading-tight text-zinc-800">
          <p className="font-bold text-[40px]">+ 15 Anos</p>
          <p>de experiência</p>
        </div>
        <img src={suzana} alt="" className="max-w-full h-auto self-center" />
        <div className="flex flex-col absolute right-[50px] font-poppins text-[32px] text-zinc-800 text-right  leading-tight">
          <p className="font-ribeye text-[60px] leading-[0]">“</p>
          <p>Descubra a força do seu</p>
          <div className="flex flex-col items-end">
            <p>inconsciente</p>
            <img src={row} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
