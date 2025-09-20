import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-col">                    <p>
                        Hosting confiable y moderno para tu negocio digital.<br />
                        Tecnología de vanguardia con soporte excepcional.
                    </p>
                    <div className="footer-socials">
                        <a href="#"><span>Twitter</span></a>
                        <a href="#"><span>LinkedIn</span></a>
                        <a href="#"><span>GitHub</span></a>
                    </div>
                </div>
                <div className="footer-col">
                    <h4>Servicios</h4>
                    <ul>
                        <li><a href="#">Hosting Web</a></li>
                        <li><a href="#">Servidores VPS</a></li>
                        <li><a href="#">Hosting WordPress</a></li>
                        <li><a href="#">Dominios</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Empresa</h4>
                    <ul>
                        <li><a href="#">Sobre Nosotros</a></li>
                        <li><a href="#">Contacto</a></li>
                        <li><a href="#">Área Cliente</a></li>
                        <li><a href="#">Soporte</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Contacto</h4>
                    <ul>
                        <li><span>info@naaynet.com</span></li>
                        <li><span>+34 900 123 456</span></li>
                        <li><span>Madrid, España</span></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 NaayNet Hosting. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}
export default Footer;