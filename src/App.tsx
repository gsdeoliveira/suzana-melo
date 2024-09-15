import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { Consultas } from "./components/sections/consultas"
import { Contato } from "./components/sections/contato"
import { Home } from "./components/sections/home"
import { Servicos } from "./components/sections/servicos"
import { Sobre } from "./components/sections/sobre"

function App() {
  return (
    <div className="max-w-[1800px] pt-8">
      <Header />
      <main className="md:mt-[120px]">
        <Home />
        <div className="bg-rows pb-96">
          <Sobre />
          <Servicos />
        </div>
        <Consultas />
        <Contato />
      </main>
      <Footer />
    </div>
  )
}

export default App
