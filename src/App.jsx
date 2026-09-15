import React, { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    // =========================
    // PAGE LOADER
    // =========================
    const loaderTimer = setTimeout(() => {
      const loader = document.getElementById("pageLoader");

      if (loader) {
        loader.classList.add("hide");
      }
    }, 450);

    // =========================
    // NAVBAR SCROLL
    // =========================
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");

      if (!navbar) return;

      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    // =========================
    // REVEAL ANIMATION
    // =========================
    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });

    requestAnimationFrame(() => {
      revealElements.forEach((element) => {
        const rect = element.getBoundingClientRect();

        if (rect.top < window.innerHeight * 0.92) {
          element.classList.add("active");
        }
      });
    });

    // =========================
    // SKILL PROGRESS
    // =========================
    const skillElements = document.querySelectorAll(".skill");

    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const progress = entry.target.querySelector(".progress div");

          if (progress) {
            const width = progress.getAttribute("data-width");

            if (width) {
              progress.style.width = `${width}%`;
            }
          }

          skillObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.4,
      }
    );

    skillElements.forEach((element) => {
      skillObserver.observe(element);
    });

    // =========================
    // STATS COUNTER
    // =========================
    const stats = document.querySelector(".stats");

    const animateCounter = (element) => {
      const target = Number(element.getAttribute("data-count"));

      if (Number.isNaN(target)) return;

      const duration = 1400;
      const startTime = performance.now();

      const updateCounter = (currentTime) => {
        const progress = Math.min(
          (currentTime - startTime) / duration,
          1
        );

        const easedProgress =
          1 - Math.pow(1 - progress, 3);

        const currentValue = Math.floor(
          target * easedProgress
        );

        if (target === 100) {
          element.textContent = `${currentValue}%`;
        } else {
          element.textContent = `${currentValue}+`;
        }

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          if (target === 100) {
            element.textContent = "100%";
          } else {
            element.textContent = `${target}+`;
          }
        }
      };

      requestAnimationFrame(updateCounter);
    };

    let statsObserver;

    if (stats) {
      statsObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const statElements =
              entry.target.querySelectorAll("[data-count]");

            statElements.forEach((element) => {
              animateCounter(element);
            });

            observer.unobserve(entry.target);
          });
        },
        {
          threshold: 0.5,
        }
      );

      statsObserver.observe(stats);
    }

    // =========================
    // MAGNETIC BUTTONS
    // =========================
    const magneticButtons =
      document.querySelectorAll(".btn");

    const magneticMove = (event) => {
      const button = event.currentTarget;
      const rect = button.getBoundingClientRect();

      const x =
        event.clientX -
        rect.left -
        rect.width / 2;

      const y =
        event.clientY -
        rect.top -
        rect.height / 2;

      button.style.transform =
        `translate(${x * 0.08}px, ${y * 0.08}px)`;
    };

    const magneticLeave = (event) => {
      event.currentTarget.style.transform = "";
    };

    magneticButtons.forEach((button) => {
      button.addEventListener("mousemove", magneticMove);
      button.addEventListener("mouseleave", magneticLeave);
    });

    // =========================
    // GLASS TILT
    // =========================
    const glassElements =
      document.querySelectorAll(".glass");

    const tiltMove = (event) => {
      const element = event.currentTarget;
      const rect = element.getBoundingClientRect();

      const x =
        (event.clientX -
          rect.left -
          rect.width / 2) /
        (rect.width / 2);

      const y =
        (event.clientY -
          rect.top -
          rect.height / 2) /
        (rect.height / 2);

      element.style.transform =
        `perspective(900px) rotateX(${y * -2.5}deg) rotateY(${x * 2.5}deg) translateY(-2px)`;
    };

    const tiltLeave = (event) => {
      event.currentTarget.style.transform = "";
    };

    glassElements.forEach((element) => {
      element.addEventListener("mousemove", tiltMove);
      element.addEventListener("mouseleave", tiltLeave);
    });

    // =========================
    // CLEANUP
    // =========================
    return () => {
      clearTimeout(loaderTimer);

      window.removeEventListener(
        "scroll",
        handleScroll
      );

      revealObserver.disconnect();
      skillObserver.disconnect();

      if (statsObserver) {
        statsObserver.disconnect();
      }

      magneticButtons.forEach((button) => {
        button.removeEventListener(
          "mousemove",
          magneticMove
        );

        button.removeEventListener(
          "mouseleave",
          magneticLeave
        );
      });

      glassElements.forEach((element) => {
        element.removeEventListener(
          "mousemove",
          tiltMove
        );

        element.removeEventListener(
          "mouseleave",
          tiltLeave
        );
      });
    };
  }, []);

  return (
    <>
      <div
        className="fixed-background"
        aria-hidden="true"
      />

      <div
        className="page-loader"
        id="pageLoader"
        aria-hidden="true"
      >
        <div className="loader-ring"></div>

        <div className="loader-text">
          AL <span>AMIN</span>
        </div>
      </div>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;