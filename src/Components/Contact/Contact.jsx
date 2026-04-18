import { FiGithub } from 'react-icons/fi';
import './contact.css';
import { FaArrowRight, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import Link from 'next/link';

const Contact = () => {
    return (
        <section id="contact">
            <div className="contact-inner">
                <div className="section-tag">// Let's Connect</div>
                <h2 className="section-title">Get In <em>Touch</em></h2>
                <p className="contact-desc">
                    I'm actively looking for opportunities to grow and contribute. Whether you have a project, internship, or just want to say hi — my inbox is always open!
                </p>

                <div className="contact-email-block reveal">
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
                </div>

                <div className="contact-links reveal">
                    <Link href="https://github.com/nusratjahan7" className="contact-link" target="_blank" rel="noopener noreferrer">
                        <FiGithub />
                        GitHub
                    </Link>
                    <Link href="https://linkedin.com/in/nusratjahan77" className="contact-link" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                        LinkedIn
                    </Link>
                    <Link
                        href="https://mail.google.com/mail/?view=cm&to=nusratjahan77222@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-link">
                        <IoMdMail />
                        Email
                    </Link>
                    <Link
                        href="https://instagram.com/nuraisa_nusrat"
                        className="contact-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram />
                        Instagram
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Contact;