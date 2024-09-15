import suzana from "../../assets/suzana.png"
import row from "../../assets/row.svg"

export const Home = () => {
  return (
    <section id="home">
      <div className="flex items-center justify-center p-5">
        <h1 className="font-poppins text-[54px] sm:text-[72px] xl:text-[100px] font-medium text-zinc-800 leading-none text-center">
          <p>Psicanalista</p>
          <p className="font-poppins text-[54px] sm:text-[72px] xl:text-[100px] font-medium text-zinc-800">
            Suzana <span className="text-primary-100">Melo</span>.
          </p>
        </h1>
      </div>
      <div className="flex items-start md:items-center justify-center relative">
        <div className="flex-1 absolute left-[10px] xl:left-[50px] top-10 md:top-1/4 font-poppins text-[12px] sm:text-[18px] lg:text-[32px] leading-tight text-zinc-800">
          <p className="font-bold text-[14px] sm:text-[18px] lg:text-[40px]">+ 15 Anos</p>
          <p>de experiência</p>
        </div>
        <img src={suzana} alt="" className="max-w-full h-auto self-center mt-20" />
        <div className="flex flex-col absolute xl:right-[50px] right-[10px] top-10 md:top-1/4 font-poppins text-[12px] sm:text-[18px] lg:text-[32px] text-zinc-800 text-right  leading-tight">
          <p className="font-ribeye text-[60px] leading-[0]">“</p>
          <p>Descubra a força do seu</p>
          <div className="flex flex-col items-end">
            <p>inconsciente</p>
            <img src={row} alt="" className='max-w-[100px] md:max-w-full' />
          </div>
        </div>
      </div>
    </section>
  )
}
