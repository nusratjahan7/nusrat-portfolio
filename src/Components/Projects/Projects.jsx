import Image from 'next/image';
import './Projects.css';
import digi from '@/assests/digitool.png';
import keenKeeper from '@/assests/keenkeeper.png';
import Link from 'next/link';

const projects = [
    {
        num: "01", img: digi,
        bg: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        tags: ["React", "Tailwind CSS", "JavaScript"],
        name: "DigiTools",
        desc: "DigiTools Web is a modern and responsive web application that provides a collection of useful digital tools in one place.",
        git: "https://github.com/nusratjahan7/Payoo-Resources",
        live: "https://digitools-web.vercel.app/",
    },
    {
        num: "02", img: keenKeeper,
        bg: "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",
        tags: ["React", "Next.js", "Recharts"],
        name: "KeenKeeper",
        desc: "Real-time weather application using OpenWeather API. Features current conditions, 5-day forecast, and animated weather icons.",
        git: "https://github.com/nusratjahan7/kin-keeper",
        live: "https://kin-keeper-nu.vercel.app/",
    },
    {
        num: "03", 
        bg: "linear-gradient(135deg, #0d1117, #161b22, #1f2937)",
        tags: ["React", "localStorage", "Hooks"],
        name: "TaskFlow — Todo App",
        desc: "A sleek task management app with drag-and-drop, categories, and local persistence. Demonstrates React state management and hooks.",

    },
    {
        num: "04", emoji: "📝",
        bg: "linear-gradient(135deg, #1a0533, #2d1b69, #11998e)",
        tags: ["Next.js", "Tailwind", "Markdown"],
        name: "BlogSpace — Blog Platform",
        desc: "A minimal blog platform built with Next.js featuring SSG, markdown support, dark mode, and SEO optimization.",

    },
    {
        num: "05", emoji: "🧮",
        bg: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
        tags: ["HTML", "CSS", "JavaScript"],
        name: "CalcPro — Calculator",
        desc: "A beautiful, fully functional calculator with keyboard support, history, and multiple themes.",

    },
];

const Projects = () => {
    return (
        <section id="projects">
            <div className="section-tag">// My Work</div>
            <h2 className="section-title">Recent <em>Projects</em></h2>
            <div className="divider"></div>

            <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                {projects.map((project) => (
                    <div
                        key={project.num}
                        className={`project-card ${project.featured ? "featured" : ""} reveal`}
                    >
                        <div className="project-thumbnail">
                            {project.img ? (
                                <Image
                                    src={project.img}
                                    alt={project.name}
                                    className="project-thumbnail-bg object-cover w-full h-full"
                                />
                            ) : (
                                <div
                                    className="project-thumbnail-bg"
                                    style={{ background: project.bg }}
                                ></div>
                            )}
                            <div className="project-num">{project.num}</div>
                            <div className="project-emoji">{project.emoji}</div>
                        </div>

                        <div className="project-body ">
                            <div>
                                <div className="project-tags">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="project-tag">{tag}</span>
                                    ))}
                                </div>
                                <div className="project-name">{project.name}</div>
                                <p className="project-desc">{project.desc}</p>
                            </div>
                            <div className="project-footer ">
                                <div className="project-links">
                                    {project.git && (
                                        <Link href={project.git} target="_blank" rel="noopener noreferrer">
                                            <button className="proj-link border rounded-full">GitHub</button>
                                        </Link>
                                    )}
                                    {project.live && (
                                        <Link href={project.live} target="_blank" rel="noopener noreferrer">
                                            <button className="proj-link border rounded-full">Live Demo</button>
                                        </Link>
                                    )}
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;