import React from "react"
import { motion } from "framer-motion"

export default function MenuModal () {
  return (
    <motion.div
     initial={{ opacity: 0, x: '-100%' }}
     animate={{ opacity: 1, x: 0 }}
     transition={{ duration: 0.25 }}
     exit={{ opacity: 0, x: '-100%' }}
     className="bg-yellow-50 w-72 fixed top-0 h-full"
    >
      <ul className="flex flex-col gap-1 py-5 px-4">
        <li><a href="#">Home</a></li>
        <li><a href="#">Ultimos Projetos</a></li>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Skills</a></li>
      </ul>
    </motion.div>
  )
}