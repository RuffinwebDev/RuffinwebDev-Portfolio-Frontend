import InstagramIcon from "@mui/icons-material/Instagram";
import { ReactNode } from "react";

interface socialMediaLinksProps {
  name: string;
  icon: string;
  url: string;
}

const socialMediaLinks: socialMediaLinksProps[] = [
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
    url: "https://www.linkedin.com/in/elijah-ruffin-2400a8216/",
  },
  {
    name: "Github",
    icon: "/media/github.svg",
    url: "https://github.com/ruffinweb/",
  },
  {
    name: "Discord",
    icon: "/media/discord.svg",
    url: "https://docs.python.org/3/",
  },
];

export default socialMediaLinks;
