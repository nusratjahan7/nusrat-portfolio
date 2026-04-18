import About from "@/Components/About/About";
import Banner from "@/Components/Banner/Banner";
import Contact from "@/Components/Contact/Contact";
import Projects from "@/Components/Projects/Projects";
import ScrollSkill from "@/Components/Skill/ScrollSkill";
import Skill from "@/Components/Skill/Skill";


export default function Home() {
  return (
    <div>
      <Banner />
      <ScrollSkill />
      <About />
      <Skill />
      <Projects />
      <Contact />
    </div>
  );
}
