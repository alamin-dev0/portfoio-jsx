import React from "react";

function Projects() {
  const projects = [
    {
      icon: "🛡️",
      title: "Navidium Shipping Protection",
      description:
        "Shipping protection solution with Shopify integration, custom widgets, checkout functionality and technical support.",
      tags: ["Shopify", "JavaScript", "Liquid"],
    },
    {
      icon: "🛒",
      title: "E-Commerce Website",
      description:
        "Modern e-commerce experience focused on responsive design, usability and smooth shopping interactions.",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      icon: "⚛️",
      title: "React Web Application",
      description:
        "Responsive React-based application built with reusable components and modern frontend development practices.",
      tags: ["React", "JavaScript", "CSS"],
    },
  ];

  return (
    <section id="projects">
      <div className="container">
        <div className="reveal">
          <div className="section-title">
            My <span>Projects</span>
          </div>

          <p className="section-subtitle">
            Some of the projects and web experiences I have worked on.
          </p>
        </div>

        <div className="projects">
          {projects.map((project) => (
            <div className="glass project reveal" key={project.title}>
              <div className="project-image">{project.icon}</div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <a href="#contact" className="btn btn-outline">
                  Discuss Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;