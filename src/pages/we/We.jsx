import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Users, Target, Award, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import "./We.css";

const We = () => {
  const values = [
    {
      icon: <Users size={32} className="icon" />,
      title: "Equipo Experto",
      description: "Profesionales con años de experiencia en hosting y tecnología web."
    },
    {
      icon: <Target size={32} className="icon" />,
      title: "Enfoque en Resultados",
      description: "Nos comprometemos con el éxito de tu proyecto digital."
    },
    {
      icon: <Award size={32} className="icon" />,
      title: "Calidad Garantizada",
      description: "Servicios de primera calidad con tecnología de vanguardia."
    },
    {
      icon: <Heart size={32} className="icon" />,
      title: "Pasión por el Servicio",
      description: "Cuidamos cada detalle para brindarte la mejor experiencia."
    }
  ];

  const team = [
    {
      name: "Ana García",
      role: "CEO & Fundadora",
      description: "15 años de experiencia en el sector tecnológico."
    },
    {
      name: "Carlos López",
      role: "CTO",
      description: "Experto en infraestructura cloud y arquitectura de sistemas."
    },
    {
      name: "María Rodríguez",
      role: "Head of Support",
      description: "Especialista en atención al cliente y soporte técnico."
    }
  ];

  return (
    <div className="nosotros-page">
      <Header />
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero">
          <h1>
            Conoce a <span className="gradient-text">NaayNet Hosting</span>
          </h1>
          <p>
            Somos una empresa comprometida con ofrecer soluciones de hosting innovadoras 
            y confiables para impulsar tu presencia digital al siguiente nivel.
          </p>
        </section>

        {/* Story Section */}
        <section className="story">
          <div className="story-text">
            <h2>Nuestra Historia</h2>
            <p>
              NaayNet nació en 2020 con la visión de democratizar el acceso a hosting 
              de alta calidad. Comenzamos como un pequeño equipo de entusiastas de la 
              tecnología que creía firmemente en que cada proyecto digital merece la 
              mejor infraestructura.
            </p>
            <p>
              Desde entonces, hemos crecido hasta convertirnos en una empresa líder 
              en el sector, sirviendo a miles de clientes en todo el mundo con 
              tecnología de vanguardia y un servicio excepcional.
            </p>
            <Link to="/contacto" className="btn btn-primary">
              Trabajar Juntos
            </Link>
          </div>
          <div className="story-stats">
            <div className="stat">
              <div className="number">5000+</div>
              <div className="label">Clientes Satisfechos</div>
            </div>
            <div className="stat">
              <div className="number">99.9%</div>
              <div className="label">Uptime Garantizado</div>
            </div>
            <div className="stat">
              <div className="number">24/7</div>
              <div className="label">Soporte Técnico</div>
            </div>
            <div className="stat">
              <div className="number">15+</div>
              <div className="label">Países Atendidos</div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values">
          <h2>Nuestros Valores</h2>
          <p>Los principios que guían cada decisión que tomamos</p>
          <div className="cards-grid">
            {values.map((value, i) => (
              <div key={i} className="card">
                <div className="card-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="team">
          <h2>Nuestro Equipo</h2>
          <p>Profesionales apasionados por la tecnología y el servicio al cliente</p>
          <div className="cards-grid">
            {team.map((member, i) => (
              <div key={i} className="card">
                <div className="card-avatar">
                  <Users size={32} className="icon" />
                </div>
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p>{member.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How We Work Section */}
        <section className="how-we-work">
          <h2>Cómo Trabajamos</h2>
          <p>Nuestro proceso está diseñado para garantizar tu éxito</p>
          <div className="steps">
            <div className="step">
              <div className="step-circle">1</div>
              <h3>Análisis de Necesidades</h3>
              <p>Evaluamos tus requerimientos específicos para recomendarte la solución perfecta.</p>
            </div>
            <div className="step">
              <div className="step-circle">2</div>
              <h3>Implementación Rápida</h3>
              <p>Configuramos tu hosting de manera rápida y eficiente, minimizando cualquier tiempo de inactividad.</p>
            </div>
            <div className="step">
              <div className="step-circle">3</div>
              <h3>Soporte Continuo</h3>
              <p>Te acompañamos en cada paso con soporte técnico especializado y disponible 24/7.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default We;
