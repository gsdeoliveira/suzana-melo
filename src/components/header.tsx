import { useEffect, useState } from "react"
import logo from "../assets/logo.png"
import { Menu } from "./menu"
import { MenuItem } from "./menu-item"

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      let currentSection = activeSection

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        const scrollPosition = window.scrollY + window.innerHeight / 2

        if (
          scrollPosition >= sectionTop &&
          scrollPosition <= sectionTop + sectionHeight
        ) {
          currentSection = section.getAttribute("id")!
        }
      })

      if (currentSection !== activeSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [activeSection])

  return (
    <header className="bg-zinc-800 rounded-[72px] fixed z-50 left-[50px] right-[50px] max-w-[1600px] mx-auto">
      <Menu>
        <MenuItem href="#home" active={activeSection === "home"}>
          Home
        </MenuItem>
        <MenuItem href="#sobre" active={activeSection === "sobre"}>
          Sobre
        </MenuItem>
        <MenuItem href="#servicos" active={activeSection === "servicos"}>
          Serviços
        </MenuItem>
        <MenuItem>
          <img src={logo} alt="logo" width={135} height={60} />
        </MenuItem>
        <MenuItem href="#consultas" active={activeSection === "consultas"}>
          Consultas
        </MenuItem>
        <MenuItem href="#contato" active={activeSection === "contato"}>
          Contato
        </MenuItem>
      </Menu>
    </header>
  )
}
