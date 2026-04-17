"use client"
import './skill.css';
import Image from "next/image";
import { motion } from 'framer-motion';

const skills = [
    { name: "HTML5", level: "Foundation", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", level: "Styling", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", level: "Core Lang", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", level: "UI Library", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", level: "Framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Tailwind", level: "CSS Framework", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
    { name: "Git & GitHub", level: "Version Control", icon: "https://devicon-website.vercel.app/api/github/original.svg?color=%23FFFFFF" },
    { name: "Vercel", level: "Deployment", icon: "https://assets.vercel.com/image/upload/v1662130559/front/favicon/vercel/180x180.png" },
    { name: "Netlify", level: "Hosting", icon: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" },
    { name: "Figma", level: "UI Design", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
];

const Skill = () => {
    return (
        <section id="skills">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.5 }}
                className="section-tag">// Tech Stack</motion.div>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, amount: 0.5 }}
                className="section-title">
                Tools & <em>Skills</em>
            </motion.h2>
            <div className="divider"></div>

            <div className="skills-grid reveal">
                {skills.map((skill, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="skill-chip" key={index}>
                        <div className="skill-icon inline-flex items-center justify-center">
                            <Image src={skill.icon} alt={skill.name} height={40} width={30} />
                        </div>
                        <div className="skill-name">{skill.name}</div>
                        <div className="skill-level">{skill.level}</div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skill;