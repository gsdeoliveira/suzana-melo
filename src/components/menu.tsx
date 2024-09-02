import { ReactNode } from "react"

interface MenuProps {
  children: ReactNode
}

export const Menu = ({ children }: MenuProps) => {
  return (
    <ul className="flex items-center justify-between px-10 py-1 font-poppins font-medium">
      {children}
    </ul>
  )
}
