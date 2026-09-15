import React from "react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="status">
          <span className="status-dot"></span>
          Available for opportunities
        </div>

        <h1>
          Hi, I'm
          <br />
          <span>Al Amin</span>
        </h1>

        <p>
          Full-Stack Web Developer crafting modern,
          responsive and high-performance digital
          experiences with clean code and thoughtful design.
        </p>

        <div className="buttons">
          <a href="#projects" className="btn btn-primary">
            View My Work →
          </a>

          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
        </div>
      </div>

      <div className="tech one">JS</div>
      <div className="tech two">⚛</div>
      <div className="tech three">&lt;/&gt;</div>
      <div className="tech four">#</div>
    </section>
  );
}

export default Hero;