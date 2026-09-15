import React from "react";

function Services() {
  const services = [
    {
      icon: "💻",
      title: "Web Development",
      description:
        "Building modern, responsive and high-performance websites with clean and maintainable code.",
    },
    {
      icon: "🛍️",
      title: "Shopify Development",
      description:
        "Shopify theme customization, app integration, Liquid development and troubleshooting.",
    },
    {
      icon: "⚙️",
      title: "Technical Support",
      description:
        "Troubleshooting web issues, debugging integrations and providing reliable technical solutions.",
    },
    {
      icon: "🔗",
      title: "API Integration",
      description:
        "Connecting websites and applications with APIs and third-party services for seamless functionality.",
    },
  ];

  return (
    <section id="services">
      <div className="container">
        <div className="reveal">
          <div className="section-title">
            My <span>Services</span>
          </div>

          <p className="section-subtitle">
            Services I provide to help businesses build, improve and maintain
            their digital experiences.
          </p>
        </div>

        <div className="services">
          {services.map((service) => (
            <div className="glass service reveal" key={service.title}>
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;