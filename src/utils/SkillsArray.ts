interface Skill {
  name: string;
  icon: string;
  tagLink: string;
}

// Define the array using the Skill interface
const SkillsArray: Skill[] = [
  {
    name: "Python",
    icon: "/media/python.svg",
    tagLink: "https://docs.python.org/3/",
  },
  {
    name: "Django",
    icon: "/media/django.svg",
    tagLink: "https://www.djangoproject.com/start/overview/",
  },
  {
    name: "Flask",
    icon: "/media/flask.svg",
    tagLink: "https://flask.palletsprojects.com/en/3.0.x/",
  },
  {
    name: "NodeJS",
    icon: "/media/nodejs.svg",
    tagLink: "https://nodejs.org/en/about",
  },
  { name: "React", icon: "/media/react.svg", tagLink: "https://react.dev/" },
  {
    name: "HTML",
    icon: "/media/html.svg",
    tagLink: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    icon: "/media/css.svg",
    tagLink: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "Material UI",
    icon: "/media/mui.svg",
    tagLink: "https://mui.com/material-ui/getting-started/",
  },
   {
    name: "Nginx",
    icon: "/media/nginx.svg",
    tagLink: "https://www.nginx.com/solutions/",
  },
  {
    name: "Powershell",
    icon: "/media/powershell.svg",
    tagLink: "https://learn.microsoft.com/en-us/powershell/",
  },
  {
    name: "Bash",
    icon: "/media/bash.svg",
    tagLink: "https://www.gnu.org/software/bash/manual/bash.html",
  },
  {
    name: "SQLite",
    icon: "/media/sqlite.svg",
    tagLink: "https://www.sqlite.org/about.html",
  },
  {
    name: "PostgreSQL",
    icon: "/media/postgresql.svg",
    tagLink: "https://www.postgresql.org/about/",
  },

  {
    name: "Docker",
    icon: "/media/docker.svg",
    tagLink: "https://docs.docker.com/",
  },
  {
    name: "AWS",
    icon: "/media/aws.svg",
    tagLink: "https://aws.amazon.com/serverless/",
  },
  {
    name: "Jira",
    icon: "/media/jira.svg",
    tagLink: "https://aws.amazon.com/serverless/",
  },
];

export default SkillsArray;
