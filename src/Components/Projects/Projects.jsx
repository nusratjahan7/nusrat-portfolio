import Image from 'next/image';
import './Projects.css';
import digi from '@/assets/digitool.png';
import keenKeeper from '@/assets/keenkeeper.png';
import hero from '@/assets/hero-apps.png';
import terra from '@/assets/terra.png';
import Link from 'next/link';

const projects = [
    {
        num: "01", img: digi,
        tags: ["React", "Tailwind CSS", "ES6+"],
        name: "DigiTools",
        desc: "DigiTools Web is a modern and responsive web application that provides a collection of useful digital tools in one place.",
        git: "https://github.com/nusratjahan7/Payoo-Resources",
        live: "https://digitools-web.vercel.app/",
    },
    {
        num: "02", img: keenKeeper,
        tags: ["React", "Next.js", "Recharts"],
        name: "KeenKeeper",
        desc: "FriendTrack helps you track your relationships, set contact goals, and log interactions so you never lose touch with friends.",
        git: "https://github.com/nusratjahan7/kin-keeper",
        live: "https://kin-keeper-nu.vercel.app/",
    },
    {
        num: "03", img: hero,
        tags: ["React", "Tailwind CSS", "Hooks"],
        name: "AppVault",
        desc: "Hero Apps is a collection of multiple small web applications built to practice and strengthen core JavaScript and frontend development skills.",
        git: "https://github.com/nusratjahan7/hero-apps",
        live: "https://hero-apps-three.vercel.app/",
    },
    {
        num: "04", img: terra,
        tags: ["React", "Tailwind", "ES6+"],
        name: "TerraVerde",
        desc: "TerraVerde is a premium agricultural website with a cinematic and modern design. It presents sustainable farming solutions through smooth animations, clean UI, and a nature-inspired color palette.",
         git: "https://github.com/nusratjahan7/terra-verde",
        live: "https://terra-verde-vert.vercel.app/",
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