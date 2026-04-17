import { motion } from 'framer-motion';
import './banner.css'
import Stats from './Stats';

const Banner = () => {
    return (
        <section className="hero min-h-screen flex flex-col md:flex-row  items-center" id="home">
            <div className="hero-bg"></div>
            <div className="hero-grid"></div>

            <div className="hero-content relative z-2 max-w-3xl !mb-20 md:!mt-0">
                <div className="hero-badge inline-flex items-center gap-2 bg-[rgba(200,245,66,0.08)] border border-[rgba(200,245,66,0.2)] rounded-full !px-4 !py-2 text-sm text-(--accent)">Available for opportunities</div>
                <h1 className='font1'>
                    Frontend<br />
                    <em>Developer</em><br />
                    & Creator
                </h1>
                <p className="hero-subtitle">
                    Hi, I'm <strong>Nusrat Jahan</strong> — an frontend developer passionate about crafting beautiful, interactive web experiences with modern technologies.
                </p>
                <div className="hero-actions">
                    <a href="#projects" className="btn-primary text-sm rounded-full">
                        View Projects
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                    <a href="#contact" className="btn-ghost text-sm rounded-full">Get in touch</a>
                </div>
            </div>

            <div className="hero-stats hidden md:flex md:flex-col absolute ">
                <div className="stat-card">
                    <div className="stat-number">10+</div>
                    <div className="stat-label">Projects Built</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">10+</div>
                    <div className="stat-label">Tools Learned</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">∞</div>
                    <div className="stat-label">Curiosity</div>
                </div>
            </div>

            <Stats />

            <div className="scroll-indicator absolute right-1 top-50">
                <div className="scroll-line"></div>
                Scroll to explore
            </div>
        </section>
    );
};

export default Banner;