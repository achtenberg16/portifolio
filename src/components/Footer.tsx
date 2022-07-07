import github from "../assets/github.svg"
import raffo from "../assets/raffo.svg"
import Linkedin from "../assets/Linkedin.svg"
import useWindowSize from "../hooks/useWindowSize"
import footerImg from "../assets/footerIMG.jpg"

export default function Footer () {
  const { width = 0 } = useWindowSize()
  return (
  <footer className="bg-gray-900 text-white px-[13%] mt-[40px] pt-[50px] relative">
    <div className="flex justify-start gap-10 lg:mt-[120px]">
    <div>
        <strong className="text-[56px] font-medium leading-[50px] max-w-[150px] block lg:text-[92px] lg:leading-[94px] lg:max-w-[474px]">
          Tem alguma ideia?
        </strong>
        <p className="mt-2 mb-[32px] font-light lg:text-lg">
          Vamos construí-la juntos! 
        </p>
        <a 
          className="font-medium mb-10 block lg:text-lg lg:mt-8"
          href="mailto:alessandro.achtenberg16@gmail.com">
          alessandro.achtenberg16@gmail.com</a>
        <div className="flex gap-[15px]">
          <a href="https://github.com/achtenberg16">
            <img className="bg-white rounded" src={github} alt="icone do github" width="48px"/>
          </a>
          <a href="https://www.linkedin.com/in/alessandroacht/">
            <img src={Linkedin} alt="icone do Linkedin" width="48px"/>
          </a>
        </div>
     </div>
      {width > 1118 && <img src={footerImg} />}
    </div>
    <div  className="mt-[129px] flex flex-col gap-[12px] text-center">
      <p className="text-xs font-extralight">Developed by Alessandro Achtenberg</p>
      <p className="text-xs font-extralight flex gap-2 justify-center items-center">Design by  
      <a href="https://rafo.work/">
        <img src={raffo} alt="icone do designer"/>
      </a></p>
    </div>
  </footer>)
}