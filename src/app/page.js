import About from "@/Components/About/About";
import Banner from "@/Components/Banner/Banner";
import ScrollSkill from "@/Components/Skill/ScrollSkill";
import Skill from "@/Components/Skill/Skill";


export default function Home() {
  return (
    <div>
      <Banner />
      <ScrollSkill />
      <About />
      <Skill />
    </div>
  );
}
