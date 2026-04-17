import Image from "next/image";
import './scrollAni.css';

const tools = [
  { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Tailwind", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Vercel", icon: "https://assets.vercel.com/image/upload/v1662130559/front/favicon/vercel/180x180.png" },
  { name: "Netlify", icon: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
];


const ScrollSkill = () => {
    return (
        <div className="tools-scroll overflow-hidden">
  <div className="tools-track flex gap-6 animate-scroll">
    {[...tools, ...tools].map((tool, index) => (
      <div
        key={index}
        className="tool-pill flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10"
      >
        <Image 
          width={30} height={30}
          src={tool.icon}
          alt={tool.name}
          className="w-5 h-5 dark:invert"
        />
        <span className="text-sm">{tool.name}</span>
      </div>
    ))}
  </div>
</div>
    );
};

export default ScrollSkill;