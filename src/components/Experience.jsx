import React from "react";

function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="reveal">
          <div className="section-title">
            My <span>Experience</span>
          </div>

          <p className="section-subtitle">
            My professional journey and development experience.
          </p>
        </div>

        <div className="timeline">
          <div className="timeline-item reveal">
            <div className="date">CURRENT</div>

            <h3>Software Support / Web Developer</h3>

            <p>
              Working with web technologies, Shopify, technical support, API
              integrations, theme customization and troubleshooting.
            </p>
          </div>

          <div className="timeline-item reveal">
            <div className="date">DEVELOPMENT</div>

            <h3>Frontend Web Development</h3>

            <p>
              Building responsive websites using HTML, CSS, JavaScript,
              Tailwind CSS and modern UI development techniques.
            </p>
          </div>

          <div className="timeline-item reveal">
            <div className="date">LEARNING</div>

            <h3>Programming Journey</h3>

            <p>
              Started with HTML and CSS and gradually expanded into
              JavaScript, React, APIs, Git, GitHub and backend technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;