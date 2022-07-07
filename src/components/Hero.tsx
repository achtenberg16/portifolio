import heroIcon from "../assets/heroImg.png"
import Vetor from "../assets/Vetor"
import useWindowSize from '../hooks/useWindowSize'
import VetorLarge from "../assets/VetorLarge"
import Arrow from '../assets/Arrow'

export default function Hero () {

  const { width = 0 } = useWindowSize()
  
  return (
    <div className="flex flex-col items-center Bg-gradient max-w-[1200px] min-w-[327px] w-[74%] mx-auto rounded-[20px] mt-10 gap-2 py-[30px] px-6">
      <div className="bg-white-200 rounded-full h-[100px] w-[100px] flex items-center justify-center">
        <img
        className="rounded-lg w-16" 
        src={heroIcon}
         alt="foto do perfil"></img>
      </div>
     
      <p className="text-[25px] md:text-[44px] text-center text-gray-900">
        Olá, eu sou Alessandro!
        </p>
      
      <p className="text-gray-900 text-center text-[32px] leading-10 md:text-[60px] md:leading-[71px]">
        Desenvolvo {" "}
        <span className="text-blue-text relative">ideias
          <span 
          className="absolute bottom-0 md:bottom-[-5px] left-0">
          {
            width >= 768 ? <VetorLarge /> : <Vetor />
          }
          </span>
        </span> e ajudo a evoluir seu negócio através de software!
        </p>

        <div  className="flex items-center gap-2 mt-[42px]">
          <a className="bg-gray-900 rounded-[32px] text-sm px-9 py-2 text-white leading-5 md:text-xl"
          href="https://www.linkedin.com/in/alessandroacht/" target="_blank">
            Contato
          </a>
          <a href="https://drive.google.com/file/d/1VteJ4lfwWUEb7Zf26UsQfVLMg-ll_w8E/view?usp=sharing" className="flex items-center md:text-lg">
            Download CV<Arrow /></a>
        </div>
    </div>
  )
}