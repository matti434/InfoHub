import "./Footer.css";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const ICON_SIZE = 22;

function Footer() {
  return (
    <footer className="infohub-footer border-top py-4 mt-auto">
      <div className="container-fluid px-3 g-5">
        <div className="container-fluid row g-4 text-center small text-white-50">
          <div className="col-12 col-md-4">
            InfoHub — API tools hub
          </div>
          <div className="col-12 col-md-4 footer-social-icons">
            <a href="https://www.linkedin.com/feed/" aria-label="LinkedIn" rel="noopener noreferrer">
              <FaLinkedin size={ICON_SIZE} />
            </a>
            <a href="https://github.com/matti434" aria-label="GitHub" rel="noopener noreferrer">
              <FaGithub size={ICON_SIZE} />
            </a>
            <a href="https://www.instagram.com/matiaslazarte_18/" aria-label="Instagram" rel="noopener noreferrer">
              <FaInstagram size={ICON_SIZE} />
            </a>
            <a href="mailto:matiasnicolaslazarte@gmail.com" aria-label="Enviar correo" rel="noopener noreferrer">
              <SiGmail size={ICON_SIZE} />
            </a>
          </div>
          <div className="col-12 col-md-4">
            © 2026InfoHub™
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
