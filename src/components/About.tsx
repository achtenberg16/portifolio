import VetorAboutMin from "../assets/VetorAboutMin"
import Avatar from '../assets/avatar.jpg'
import useWindowSize from "../hooks/useWindowSize"
import jsIcon from "../assets/js.svg"
import reactIcon from "../assets/react.svg"
import mysqlIcon from "../assets/mysql.svg"

export default function About () {
  const {width = 0} = useWindowSize()
  return(
    <div id="sobre" className="max-w-[1200px] w-[74%] mx-auto mt-[151px]">
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
      <div>
        <h2 className="text-[36px] md:text-[52px] mt-[32px] lg:mt-[-100px]">
          Skills
        </h2>
        <div className="flex gap-[15px] md:gap-[30px]">
          <span className="flex flex-col items-center text-gray-900">
            <img className="bg-lightBlue p-[14px] rounded-[20px]" width="84px" src={reactIcon}/> React
            </span>
          <span className="flex flex-col items-center text-gray-900">
            <img className="p-[14px] bg-green-300 rounded-[20px]" width="80px" src={jsIcon}/> JS
            </span>
          <span className="flex flex-col items-center text-gray-900">
            <img className="py-[24px] px-[10px] bg-blue-600 rounded-[20px]" src={mysqlIcon}/>Mysql
            </span>
        </div>
      </div>
    </div>
  ) 
}