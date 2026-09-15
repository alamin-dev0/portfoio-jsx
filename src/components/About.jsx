import React from "react";

function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="reveal">
          <div className="section-title">
            About <span>Me</span>
          </div>

          <p className="section-subtitle">
            I build modern websites and web applications focused on
            performance, usability and clean user experiences.
          </p>
        </div>

        <div className="about-grid">
          <div className="glass about-card reveal">
            <p>
              I'm Al Amin, a Web Developer passionate about turning ideas
              into beautiful and functional digital products.
              <br />
              <br />
              My journey started with HTML and CSS and grew into JavaScript,
              React, Tailwind CSS, APIs, Shopify development and technical
              support.
              <br />
              <br />
              Currently working as Software Support / Developer, I enjoy
              solving real-world problems and building reliable web
              experiences.
            </p>
          </div>

          <div className="stats">
            <div className="glass stat reveal">
              <h3 data-count="20">0+</h3>
              <p>Projects</p>
            </div>

            <div className="glass stat reveal">
              <h3 data-count="3">0+</h3>
              <p>Years Learning</p>
            </div>

            <div className="glass stat reveal">
              <h3 data-count="12">0+</h3>
              <p>Technologies</p>
            </div>

            <div className="glass stat reveal">
              <h3 data-count="100">0%</h3>
              <p>Passion</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;