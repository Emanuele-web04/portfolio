import React from "react";
import { websites } from "@/data/websites";
import Image from "next/image";
import { LuCircleArrowOutUpRight } from "react-icons/lu";
import Link from "next/link";
import { skills } from "@/data/skills";
import { SkillType } from "@/types/skill";
import SkillsPlaceholder from "./SkillsPlaceholder";

const ios = skills.filter((skill) => skill.type === SkillType.ios)
const web = skills.filter((skill) => skill.type === SkillType.web)
const general = skills.filter((skill) => skill.type === SkillType.general)
const softwares = skills.filter((skill) => skill.type === SkillType.softwares)

const SkillsContent = () => { 
    
  return (
    <ul className="flex flex-col space-y-4">
        <SkillsPlaceholder title={SkillType.ios} skills={ios}/>
        <SkillsPlaceholder title={SkillType.web} skills={web}/>
        <SkillsPlaceholder title={SkillType.general} skills={general}/>
        <SkillsPlaceholder title={SkillType.softwares} skills={softwares}/>
    </ul>
  );
};

export default SkillsContent;
