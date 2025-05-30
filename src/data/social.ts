import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { IconType } from "react-icons";
import { BsYoutube } from "react-icons/bs";

type Social = {
    icon: IconType
    link: string
}

export const socials: Social[] = [
    {
        icon: FaXTwitter,
        link: "https://x.com/emanueledpt"
    },
    {
        icon: IoLogoGithub,
        link: "https://github.com/Emanuele-web04"
    },
    {
        icon: FaLinkedin,
        link: "https://www.linkedin.com/in/emanuele-di-pietro-12b464284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
        icon: BsYoutube,
        link: "https://www.youtube.com/@emanueledpt"
    }
]