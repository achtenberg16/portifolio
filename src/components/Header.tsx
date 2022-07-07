import React, { useState } from "react"
import HeaderLogo from "../assets/HeaderLogo"
import HeaderMenuIconClosed from "../assets/MenuIconClosed"
import HeaderMenuOpen from "../assets/HeaderMenuOpen"
import MenuModal from "./MenuModal"

export default function Header (): JSX.Element {
  const [menuIsOpen, setMenuIsopen] = useState(false)
 return (
  <>
  <header className="flex justify-between max-w-[1200px] w-[74%] mx-auto mt-[30px] relative">
    <div className="flex gap-3 items-center">
      <HeaderLogo /><p>Achtenberg</p>
    </div>
    <button
    onClick={() => {
      setMenuIsopen(!menuIsOpen)
    }}
    >
      {menuIsOpen? <HeaderMenuOpen /> : <HeaderMenuIconClosed />}
    </button>
    {
    menuIsOpen && (
      <MenuModal />
    )
   }
  </header>
  </>
 )
}