"use client"
import Image from 'next/image';
import './about.css';
import animatedImg from '@/assests/animated.png';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about">
            <motion.div
                className="section-tag"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
            >// Who I Am</motion.div>

            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
            >About <em>Me</em></motion.h2>

            <div className="divider"></div>

            <div className="about-grid grid md:grid-cols-2">
                <motion.div
                    className="about-image-wrap"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="about-image-box">
                        <Image src={animatedImg} height={700} alt="animated image" />
                    </div>
                    <div className="about-image-accent">
                        Frontend<br />Developer<br />✦
                    </div>
                </motion.div>

                <motion.div
                    className="about-text"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <p>
                        Hi there! I'm <strong>Nusrat Jahan</strong>, a passionate and driven frontend developer based in Bangladesh. I'm at the beginning of my journey in web development, but my enthusiasm and dedication to learning are limitless.
                    </p>
                    <p>
                        I'm currently mastering the art of building modern, responsive, and visually stunning web applications. I specialize in <strong>HTML, CSS, JavaScript</strong>, and frameworks like <strong>React</strong> and <strong>Next.js</strong>. My goal is to turn ideas into reality through clean, efficient, and beautiful code.
                    </p>
                    <p>
                        While I'm yet to take on professional client work, I've been actively building projects to sharpen my skills and demonstrate what I'm capable of. I believe <strong>the best time to start is now</strong>, and every project I build brings me one step closer to my dream career.
                    </p>
                    <p>
                        I'm eager to collaborate, contribute to real-world projects, and grow as a developer. If you're looking for someone who is <strong>motivated, quick to learn, and genuinely passionate</strong> — let's connect!
                    </p>

                    <motion.div
                        className="education-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.1 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="edu-icon">🎓</div>
                        <div>
                            <div className="edu-title">BAF Shaheen College Kurmitola</div>
                            <div className="edu-sub">Higher School Certificate (HSC)</div>
                            <div className="edu-badge">Academic Background</div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;