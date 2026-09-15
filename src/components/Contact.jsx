import React, { useRef, useState } from "react";

function Contact() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);

  const [sending, setSending] = useState(false);

  const getValue = (ref) => {
    return ref.current?.innerText?.trim() || "";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const name = getValue(nameRef);
    const email = getValue(emailRef);
    const phone = getValue(phoneRef);
    const message = getValue(messageRef);

    if (!name || !email || !message) {
      alert("Please fill in your name, email and message.");
      return;
    }

    if (!window.emailjs) {
      alert("Email service is not available. Please try again later.");
      return;
    }

    setSending(true);

    try {
      const templateParams = {
        name,
        email,
        phone,
        message,
        to_email: "alamin.dev01@gmail.com",
      };

      await window.emailjs.send(
        "service_t1hpsxz",
        "template_xcoh1yi",
        templateParams
      );

      try {
        await window.emailjs.send(
          "service_t1hpsxz",
          "template_fzbdjfn",
          templateParams
        );
      } catch (thankYouError) {
        console.error("Thank-you email error:", thankYouError);
      }

      alert("Message sent successfully!");

      if (nameRef.current) nameRef.current.innerText = "";
      if (emailRef.current) emailRef.current.innerText = "";
      if (phoneRef.current) phoneRef.current.innerText = "";
      if (messageRef.current) messageRef.current.innerText = "";
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="reveal">
          <div className="section-title">
            Contact <span>Me</span>
          </div>

          <p className="section-subtitle">
            Have a project, opportunity or question? Send me a message and
            I'll get back to you.
          </p>
        </div>

        <div className="glass contact-wrapper reveal">
          <form className="form" id="contactForm" onSubmit={handleSubmit}>
            <div className="contact-input-row">
              <div
                className="write-field"
                id="nameBox"
                ref={nameRef}
                contentEditable="true"
                role="textbox"
                aria-label="Your Name"
                data-placeholder="Your Name"
              ></div>

              <div
                className="write-field"
                id="emailBox"
                ref={emailRef}
                contentEditable="true"
                role="textbox"
                aria-label="Your Email"
                data-placeholder="Your Email"
              ></div>
            </div>

            <div
              className="write-field"
              id="phoneBox"
              ref={phoneRef}
              contentEditable="true"
              role="textbox"
              aria-label="Your Phone"
              data-placeholder="Your Phone"
            ></div>

            <div
              className="write-field message-field"
              id="messageBox"
              ref={messageRef}
              contentEditable="true"
              role="textbox"
              aria-label="Your Message"
              data-placeholder="Your Message"
            ></div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={sending}
            >
              {sending ? "Sending..." : "Send Message →"}
            </button>
          </form>

          <p className="form-note">
            Your message will be sent securely to{" "}
            <strong>alamin.dev01@gmail.com</strong>.
          </p>

          <div className="socials">
            <a
              href="mailto:alamin.dev01@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Email
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;