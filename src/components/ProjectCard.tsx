import React from "react"
import GithubIcon from '../assets/GithubIcon'
import DeployIcon from '../assets/DeployiCon'

interface IcardProps {
  title: string;
  stacks: {name: string; bgColor: string}[]
  githubLink: string;
  deployLink: string;
  img: any
}

export default function ProjectCard (props: IcardProps) {
  return (
    <div className="flex flex-col gap-5 items-baseline">
      <h2 className="font-normal text-[38px]">{props.title}</h2>
      <div className="flex gap-[10px]">
        {
          props.stacks.map(stack => {
            const textColor = stack.bgColor === "bg-yellow-500" ? "text-gray-900" : "text-white"
            return (
              <span className={`py-2 px-4 rounded-full text-base font-light ${textColor +  " " + stack.bgColor}`}>
              {stack.name}
              </span>
            )
          })
        }
      </div>
      <img className="rounded-[18px]" src={props.img}></img>
      <div className="flex gap-5 px-4 mt-3 md:gag-[26px]">
        <a className="flex gap-1 items-center"
        href={props.githubLink}
        target="_blank"
        >
          GitHub {<GithubIcon />}
        </a>
        <a className="flex gap-1.5 items-center"
         href={props.deployLink}
         target="_blank"
        >
          Deploy {<DeployIcon />}
        </a>
      </div>
    </div>
  )
}