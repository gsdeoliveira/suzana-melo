import { Header } from "./components/header"
import { Consultas } from "./components/sections/consultas"
import { Home } from "./components/sections/home"
import { Servicos } from "./components/sections/servicos"
import { Sobre } from "./components/sections/sobre"

function App() {
  return (
    <div className="max-w-[1600px] py-8">
      <Header />
      <main className="mt-[120px]">
        <Home />
        <div className="bg-rows pb-96">
          <Sobre />
          <Servicos />
        </div>
        <Consultas />
      </main>
    </div>
  )
}

export default App
