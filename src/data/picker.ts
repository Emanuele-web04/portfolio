import { title } from "process"
import { IconType } from "react-icons"
import { FaAppStore } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci"
import { BsSuitcaseLg } from "react-icons/bs";

type PickerElement = {
    title: string
    icon: IconType
    route: string
}

export const routePicker: PickerElement[] = [
    {
        title: "iOS Apps",
        icon: FaAppStore,
        route: "/"
    },
    {
        title: "Websites",
        icon: CiGlobe,
        route: "website"
    },
    {
        title: "Experience",
        icon: BsSuitcaseLg,
        route: "experience"
    },
]