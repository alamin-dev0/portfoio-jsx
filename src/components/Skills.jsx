import React from "react";

function Skills() {
  const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Shopify", level: 90 },
    { name: "Git / GitHub", level: 80 },
    { name: "API Integration", level: 85 },
  ];

  return (
    <section id="skills">
      <div className="container">
        <div className="reveal">
          <div className="section-title">
            My <span>Skills</span>
          </div>

          <p className="section-subtitle">
            Technologies and tools I use to build modern, responsive and
            reliable web experiences.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="glass skill reveal" key={skill.name}>
              <div className="skill-top">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              <div className="progress">
                <div
                  data-width={skill.level}
                  style={{ width: 0 }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;