'use client'
import { FiGithub } from 'react-icons/fi';
import { motion } from 'framer-motion';
import './contact.css';
import { FaArrowRight, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import Link from 'next/link';



const contactLinks = [
    {
        label: "GitHub",
        href: "https://github.com/nusratjahan7",
        icon: <FiGithub />,
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/nusratjahan77",
        icon: <FaLinkedin />,
    },
    {
        label: "Email",
        href: "https://mail.google.com/mail/?view=cm&to=nusratjahan77222@gmail.com",
        icon: <IoMdMail />,
    },
    {
        label: "Instagram",
        href: "https://instagram.com/nuraisa_nusrat",
        icon: <FaInstagram />,
    },
];


const Contact = () => {
    return (
        <section id="contact">
            <div className="contact-inner">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="section-tag">// Let's Connect</motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="section-title">Get In <em>Touch</em></motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="contact-desc">
                    I'm actively looking for opportunities to grow and contribute. Whether you have a project, internship, or just want to say hi — my inbox is always open!
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="contact-email-block reveal">
                    <h3>Ready to work together?</h3>
                    <p>I'm open to internships, freelance projects, and collaborative work. Let's build something great.</p>
                    <Link
                        href="https://mail.google.com/mail/?view=cm&to=nusratjahan77222@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary rounded-full" style={{ display: 'inline-flex' }}>
                        Say Hello 👋
                        <FaArrowRight />
                    </Link>
                </motion.div>
                <div className="contact-links reveal">
                    {contactLinks.map((item, index) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Link
                                href={item.href}
                                className="contact-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <motion.span
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    {item.icon}
                                </motion.span>
                                {item.label}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;