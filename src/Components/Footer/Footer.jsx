import './footer.css'
 
const Footer = () => {
    return (
        <footer>
            <p className="footer-logo font1">Nusrat<span>.</span></p>
            <p className="footer-copy">© {new Date().getFullYear()} Nusrat Jahan — Frontend Developer</p>
        </footer>
    );
};

export default Footer;