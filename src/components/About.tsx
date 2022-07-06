import VetorAboutMin from "../assets/VetorAboutMin"
import Avatar from '../assets/avatar.jpg'
import useWindowSize from "../hooks/useWindowSize"
export default function About () {
  const {width = 0} = useWindowSize()
  return(
    <div className="max-w-[1200px] w-[74%] mx-auto mt-[151px]">
      <h2 className="text-[56px] leading-[50px] font-normal relative">Sobre<br />mim 
        <span className="absolute bottom-[-15px] left-[-3px]">
          <VetorAboutMin />
        </span>
      </h2>
      <div className="mt-[67px] flex items-end gap-[30px] flex-wrap-reverse jus">
        <p className="pl-[12px] max-w-[498px] border-l-[5px]  border-gray-900 rounded-l text-base md:text-2xl md:pl-5">
          Tenho 20 anos, estou em transição de carreira, vindo da área administrativa onde desenvolvi experiência com gestão de pessoas, gestão de empresas e negociação com cliente. 
        <br /> <br />
        Hoje construo aplicações fullstack!</p>
        <img src={Avatar} className="" width={width > 1258 ? 400 : 300 }/>
      </div>
    </div>
  ) 
}