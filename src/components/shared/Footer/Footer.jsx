import "./Footer.css";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const ICON_SIZE = 26;

function Footer() {
  return (
    <footer className="infohub-footer mt-auto">
      <div className="container-fluid px-3 px-md-4">
        <div className="row g-4 text-center text-white-50 align-items-center">
          <div className="col-12 col-md-4 infohub-footer__text">
            InfoHub — hub de herramientas API
          </div>
          <div className="col-12 col-md-4 footer-social-icons">
            <a href="https://www.linkedin.com/feed/" aria-label="Perfil de LinkedIn" rel="noopener noreferrer">
              <FaLinkedin size={ICON_SIZE} />
            </a>
            <a href="https://github.com/matti434" aria-label="Perfil de GitHub" rel="noopener noreferrer">
              <FaGithub size={ICON_SIZE} />
            </a>
            <a href="https://www.instagram.com/matiaslazarte_18/" aria-label="Perfil de Instagram" rel="noopener noreferrer">
              <FaInstagram size={ICON_SIZE} />
            </a>
            <a href="mailto:matiasnicolaslazarte@gmail.com" aria-label="Enviar correo" rel="noopener noreferrer">
              <SiGmail size={ICON_SIZE} />
            </a>
          </div>
          <div className="col-12 col-md-4 infohub-footer__text">
            © 2026 InfoHub™
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
