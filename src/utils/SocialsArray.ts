import InstagramIcon from "@mui/icons-material/Instagram";
import { ReactNode } from "react";

interface Social {
  name: string;
  icon: string;
  url: string;
}

const SocialsArray: Social[] = [
  {
    name: "X",
    icon: "/media/twitter.svg",
    url: "https://docs.python.org/3/",
  },
  {
    name: "Youtube",
    icon: "/media/youtube.svg",
    url: "https://docs.python.org/3/",
  },
  {
    name: "LinkenIn",
    icon: "/media/linkedin.svg",
    url: "https://docs.python.org/3/",
  },
  {
    name: "Github",
    icon: "/media/github.svg",
    url: "https://docs.python.org/3/",
  },
  {
    name: "Instagram",
    icon: "/media/instagram.svg",
    url: "https://docs.python.org/3/",
  },
  {
    name: "Tiktok",
    icon: "/media/tiktok.svg",
    url: "https://docs.python.org/3/",
  },
  {
    name: "Discord",
    icon: "/media/discord.svg",
    url: "https://docs.python.org/3/",
  },
];

export default SocialsArray;
