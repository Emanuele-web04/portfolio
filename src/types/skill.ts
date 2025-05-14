import { IconType } from "react-icons"

export enum SkillType {
    ios = "iOS",
    web = "Web",
    general = "General",
    softwares = "Softwares"
} 

export type Skill = {
    type: SkillType
    skill: SkillInfo
}

export type SkillInfo = {
    name: string
    icon: IconType | string
    color: string
}