import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

function Contact() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);
  const notificationIdRef = useRef(0);
  const notificationTimersRef = useRef(new Map());

  const [sending, setSending] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const dismissNotification = (id) => {
    window.clearTimeout(notificationTimersRef.current.get(id));
    notificationTimersRef.current.delete(id);
    setNotifications((current) =>
      current.filter((notification) => notification.id !== id)
    );
  };

  const showNotification = (type, title, message) => {
    const id = notificationIdRef.current + 1;
    notificationIdRef.current = id;

    setNotifications((current) => [
      ...current,
      { id, type, title, message },
    ]);

    notificationTimersRef.current.set(
      id,
      window.setTimeout(() => dismissNotification(id), 5200)
    );
  };

  useEffect(() => {
    const timers = notificationTimersRef.current;

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
      timers.clear();
    };
  }, []);

  const getValue = (ref) => {
    return ref.current?.value?.trim() || "";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const name = getValue(nameRef);
    const email = getValue(emailRef);
    const phone = getValue(phoneRef);
    const message = getValue(messageRef);

    const missingFields = [
      { value: name, label: "name", ref: nameRef },
      { value: email, label: "email address", ref: emailRef },
      { value: phone, label: "phone number", ref: phoneRef },
      { value: message, label: "message", ref: messageRef },
    ].filter((field) => !field.value);

    if (missingFields.length > 0) {
      const missingLabels = missingFields.map((field) => field.label);
      const lastMissingLabel = missingLabels[missingLabels.length - 1];
      const missingFieldList =
        missingLabels.length === 1
          ? lastMissingLabel
          : `${missingLabels.slice(0, -1).join(", ")} and ${lastMissingLabel}`;

      missingFields[0].ref.current?.focus();
      showNotification(
        "warning",
        missingFields.length === 1
          ? "One detail is missing"
          : "Required details are missing",
        `Please fill in your ${missingFieldList} before sending.`
      );
      return;
    }

    if (emailRef.current?.validity.typeMismatch) {
      emailRef.current?.focus();
      showNotification(
        "warning",
        "Check your email address",
        "Enter a valid email address so I can reply to you."
      );
      return;
    }

    const normalizedPhone = phone.replace(/[\s().-]/g, "");

    if (
      phone &&
      (!/^\+?[\d\s().-]+$/.test(phone) ||
        !/^\+?\d{7,15}$/.test(normalizedPhone))
    ) {
      phoneRef.current?.focus();
      showNotification(
        "warning",
        "Check your phone number",
        "Use 7-15 digits. You can include a country code, spaces, +, parentheses or hyphens."
      );
      return;
    }

    if (!window.emailjs) {
      showNotification(
        "error",
        "Email service unavailable",
        "Please try again in a little while."
      );
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

      showNotification(
        "success",
        "Message sent successfully",
        "Thanks for reaching out. I'll get back to you soon."
      );

      if (nameRef.current) nameRef.current.value = "";
      if (emailRef.current) emailRef.current.value = "";
      if (phoneRef.current) phoneRef.current.value = "";
      if (messageRef.current) messageRef.current.value = "";
    } catch (error) {
      console.error("EmailJS error:", error);
      showNotification(
        "error",
        "Message could not be sent",
        "Something went wrong. Please try again later."
      );
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
          <form
            className="form"
            id="contactForm"
            noValidate
            onSubmit={handleSubmit}
          >
            <div className="contact-input-row">
              <input
                className="write-field"
                id="nameBox"
                ref={nameRef}
                type="text"
                aria-label="Your Name"
                autoComplete="name"
                placeholder="Your Name"
                required
              />

              <input
                className="write-field"
                id="emailBox"
                ref={emailRef}
                type="email"
                aria-label="Your Email"
                autoComplete="email"
                inputMode="email"
                placeholder="Your Email"
                required
              />
            </div>

            <input
              className="write-field"
              id="phoneBox"
              ref={phoneRef}
              type="tel"
              aria-label="Your Phone"
              autoComplete="tel"
              inputMode="tel"
              placeholder="Your Phone *"
              required
            />

            <textarea
              className="write-field message-field"
              id="messageBox"
              ref={messageRef}
              aria-label="Your Message"
              placeholder="Your Message"
              required
            />

            <button
              type="submit"
              className="btn btn-primary"
              disabled={sending}
            >
              {sending ? "Sending..." : "Send Message →"}
            </button>
          </form>

          {/* <p className="form-note">
            Your message will be sent securely to{" "}
            <strong>alamin.dev01@gmail.com</strong>.
          </p> */}

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

      {notifications.length > 0 &&
        createPortal(
          <div
            className="notification-stack"
            aria-live="polite"
            aria-relevant="additions"
          >
            {notifications.map((notification) => (
              <div
                className="notification-card"
                data-type={notification.type}
                key={notification.id}
                role={notification.type === "error" ? "alert" : "status"}
              >
                <div className="notification-icon" aria-hidden="true">
                  {notification.type === "success" && (
                    <svg viewBox="0 0 24 24">
                      <path d="m5 12 4 4L19 6" />
                    </svg>
                  )}
                  {notification.type === "warning" && (
                    <svg viewBox="0 0 24 24">
                      <path d="M12 9v4m0 4h.01M10.3 3.9 1.8 18.5A1.7 1.7 0 0 0 3.3 21h17.4a1.7 1.7 0 0 0 1.5-2.5L13.7 3.9a2 2 0 0 0-3.4 0Z" />
                    </svg>
                  )}
                  {notification.type === "error" && (
                    <svg viewBox="0 0 24 24">
                      <path d="M12 8v5m0 4h.01M10.3 3.9 1.8 18.5A1.7 1.7 0 0 0 3.3 21h17.4a1.7 1.7 0 0 0 1.5-2.5L13.7 3.9a2 2 0 0 0-3.4 0Z" />
                    </svg>
                  )}
                </div>

                <div className="notification-content">
                  <p className="notification-title">{notification.title}</p>
                  <p className="notification-message">{notification.message}</p>
                </div>

                <button
                  className="notification-close"
                  type="button"
                  aria-label="Dismiss notification"
                  onClick={() => dismissNotification(notification.id)}
                >
                  <svg viewBox="0 0 20 20" aria-hidden="true">
                    <path d="m5 5 10 10M15 5 5 15" />
                  </svg>
                </button>

                <span className="notification-progress" aria-hidden="true" />
              </div>
            ))}
          </div>,
          document.body
        )}
    </section>
  );
}

export default Contact;