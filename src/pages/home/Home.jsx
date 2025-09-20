import "./Home.css";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

function Home() {

    return (
        <>
        <Header
         /> 
            <div className="hero">
                <div className="badge">⚡ Hosting de Nueva Generación</div>

                <h1>
                    Tu Sitio Web en las <span>Mejores Manos</span>
                </h1>

                <div className="subtitle">
                    Hosting ultra-rápido, seguro y escalable. Impulsa tu presencia digital
                    con la tecnología más avanzada del mercado.
                </div>

                <div className="buttons">
                    <a href="#" className="btn primary">
                        Ver Planes →
                    </a>
                    <a href="#" className="btn secondary">
                        Conocer Más
                    </a>
                </div>

                <div className="features">
                    <div className="feature">
                        <div className="icon">
                            {/* Escudo (Seguridad) */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                width="40"
                                height="40"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M12 6.253v13.5m0-13.5L6.75 9m5.25-2.747L17.25 9m-5.25 10.753A8.966 8.966 0 016 12.75V6.253l6-3.003 6 3.003v6.497a8.966 8.966 0 01-6 7.753z"
                                />
                            </svg>
                        </div>
                        <h3>Máxima Seguridad</h3>
                        <p>Protección avanzada y copias de seguridad automáticas</p>
                    </div>

                    <div className="feature">
                        <div className="icon">
                            {/* Rayo (Velocidad) */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                width="40"
                                height="40"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                />
                            </svg>
                        </div>
                        <h3>Velocidad Extrema</h3>
                        <p>Servidores SSD y CDN global para máximo rendimiento</p>
                    </div>

                    <div className="feature">
                        <div className="icon">
                            {/* Globo (Alcance Global) */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                width="40"
                                height="40"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M12 3a9 9 0 100 18 9 9 0 000-18zm0 0c2.5 0 4.5 4 4.5 9s-2 9-4.5 9m0-18c-2.5 0-4.5 4-4.5 9s2 9 4.5 9"
                                />
                            </svg>
                        </div>
                        <h3>Alcance Global</h3>
                        <p>Centros de datos en múltiples continentes</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Home;