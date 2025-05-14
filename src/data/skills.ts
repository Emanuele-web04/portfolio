import { Skill } from "@/types/skill";
import { SkillType } from "@/types/skill";
import { FaSwift } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { FaPython } from "react-icons/fa6";
import { RiFirebaseFill } from "react-icons/ri";
import { TbApi } from "react-icons/tb";
import { SiXcode } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaAppStoreIos, FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { GrSwift } from "react-icons/gr";
import { BiLogoTypescript } from "react-icons/bi";

export const skills: Skill[] = [
    { type: SkillType.ios, skill: { name: "Swift/SwiftUI", icon: FaSwift, color: "#F05138" }},
    { type: SkillType.ios, skill: { name: "SwiftData", icon: GrSwift, color: "#000" }},
    { type: SkillType.general, skill: { name: "C", icon: "/c-language.png", color: "#707EC8" }},
    { type: SkillType.web, skill: { name: "NextJS", icon: RiNextjsFill, color: "#000" }},
    { type: SkillType.web, skill: { name: "React", icon: FaReact, color: "#39C1D7" }},
    { type: SkillType.web, skill: { name: "Javascript", icon: RiJavascriptFill, color: "#F0DB4F" }},
    { type: SkillType.web, skill: { name: "Typescript", icon: BiLogoTypescript, color: "#007ACC" }},
    { type: SkillType.web, skill: { name: "Tailwind", icon: SiTailwindcss, color: "#00ACC1" }},
    { type: SkillType.general, skill: { name: "Python", icon: "/python.png", color: "#0277BD" }},
    { type: SkillType.general, skill: { name: "Firebase", icon: RiFirebaseFill, color: "#F05138" }},
    { type: SkillType.general, skill: { name: "RestAPI", icon: TbApi, color: "#000" }},
    { type: SkillType.softwares, skill: { name: "Figma", icon: "/figma.png", color: "#ED7D87" }},
    { type: SkillType.softwares, skill: { name: "XCode", icon: SiXcode, color: "#189BEB" }},
    { type: SkillType.softwares, skill: { name: "VSCode", icon: VscVscode, color: "#23A8F2" }},
    { type: SkillType.softwares, skill: { name: "Connect", icon: FaAppStoreIos, color: "#189BEB" }},
    { type: SkillType.softwares, skill: { name: "GitHub", icon: FaGithub, color: "#7754C7" }},
    { type: SkillType.softwares, skill: { name: "RevenueCat", icon: "/revenue.png", color: "#7754C7" }},
]