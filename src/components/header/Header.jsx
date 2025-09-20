import React, { useState } from "react";
import "./Header.css";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="gaming-header">
      <div className="logo-container">
        <h1 className="title">Naaynet Hosting</h1>
      </div>
      <div
        className="menu-toggle"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Abrir menú"
      >
        <span />
        <span />
        <span />
      </div>
      <nav className={`nav-buttons${menuOpen ? " open" : ""}`}>
        <a href="/Home" onClick={() => setMenuOpen(false)}>Inicio</a>
        <a href="/Shop" onClick={() => setMenuOpen(false)}>Nosotros</a>
        <a href="/We" onClick={() => setMenuOpen(false)}>Planes</a>
        <a href="https://discord.gg/GP75PPYf" onClick={() => setMenuOpen(false)}>Discord</a>
      </nav>
    </header>
  );
}

export default Header;