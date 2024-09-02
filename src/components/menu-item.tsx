import { ReactNode } from "react"

interface MenuItemProps {
  active?: boolean
  href?: string
  children: ReactNode
}

export const MenuItem = ({ active, href, children }: MenuItemProps) => {
  return (
    <li>
      <a
        href={href}
        className={` ${active && "bg-gradient-to-b from-primary-100 to-primary-300 text-zinc-800 rounded-[72px] px-10 py-1 font-semibold"} text-white font-medium cursor-pointer transition-bg`}
      >
        {children}
      </a>
    </li>
  )
}
