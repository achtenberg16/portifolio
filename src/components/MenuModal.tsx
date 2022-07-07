import React from "react"
import { motion } from "framer-motion"

export default function MenuModal () {
  return (
    <motion.div
     initial={{ opacity: 0, x: '-100%' }}
     animate={{ opacity: 1, x: 0 }}
     transition={{ duration: 0.25 }}
     exit={{ opacity: 0, x: '-100%' }}
     className="w-[177px] h-[197px] bg-gray-100 absolute rounded-[18px] flex items-center justify-center top-[42px] right-[-12px]"
    >
      <ul className="flex flex-col gap-1 py-5 px-4">
        <li><a href="#projetos" className="text-yellow">Projetos</a></li>
        <li><a href="#sobre" className="text-lightBlue">Sobre mim</a></li>
        <li><a href="#contato" className="text-emerald">Contato</a></li>
      </ul>
    </motion.div>
  )
}