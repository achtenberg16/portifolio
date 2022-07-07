import React from "react"
import ProjectCard from "./ProjectCard"
import shoppingCardPNG from '../assets/shoppingCart.png'
import TriviaPNG from "../assets/trivia.png"
import TrybeTunesPNG from "../assets/trybetunes.png"

interface IcardProps {
   title: string;
   stacks: {name: string; bgColor: string}[]
   githubLink: string;
   deployLink: string;
   img: any
 } 

const Projectslist: IcardProps[] = [{
 title: "Shopping cart",
 stacks: [{name: "React", bgColor: "bg-lightBlue"},
 {name: "Javascript", bgColor: "bg-yellow-500"}
],
 githubLink: "https://github.com/achtenberg16/Shopping-Cart",
 deployLink: "https://achtenberg16.github.io/Shopping-Cart/",
 img: shoppingCardPNG
},
{
   title: "Trivia",
   stacks: [{name: "React", bgColor: "bg-lightBlue"},
   {name: "Javascript", bgColor: "bg-yellow-500"},
   {name: "RTL", bgColor: "bg-green-500"}
  ],
   githubLink: "https://github.com/achtenberg16/TriviaQuest",
   deployLink: "https://trivia-quest-h5nkh9kfk-achtenberg16.vercel.app/",
   img: TriviaPNG
  },
  {
   title: "TrybeTunes",
   stacks: [{name: "React", bgColor: "bg-lightBlue"},
   {name: "API", bgColor: "bg-purple"},
  ],
   githubLink: "https://github.com/achtenberg16/trybe-tunes",
   deployLink: "https://achtenberg16.github.io/trybe-tunes/",
   img: TrybeTunesPNG
  }
]

export default function Projects () {
 return (
   <div id="projetos" className="flex flex-col items-start max-w-[1200px] w-[74%] mx-auto">
      <h1 className="text-gray-900 text-[56px] leading-[50px] my-10 md:text-[92px] md:leading-[82px] xl:mt-[200px]">Ultimos<br />Projetos</h1>
     <div className="flex gap-[47px] flex-wrap">
      {Projectslist.map(project => <ProjectCard {...project}/>)}
     </div>
   </div>
 )
}