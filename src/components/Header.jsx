import React from "react";

export default function Header() {
  return (
    <header>
      <nav aria-label="Main navigation">
        <a
          href="#top"
          className="brand"
          aria-label="Johnson Emmanuel, back to top"
        >
          <span aria-hidden="true">je.</span>Johnson Emmanuel
        </a>
        <div className="links">
          <a href="#work">Selected work</a>
          <a href="#about">About</a>
          <a className="nav-contact" href="#contact">
            Let's talk <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
