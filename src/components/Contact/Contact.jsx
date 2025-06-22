import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <p>
          Have a question, proposal, or just want to say hello? Feel free to reach out!
        </p>

        <form
          action="https://formspree.io/f/xpwrjvvy"
          method="POST"
          className="contact-form"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="6" required></textarea>

          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <p><strong>Email:</strong> ibrahimnuhu0@gmail.com</p>
          <p><strong>Location:</strong> Dhaka, Bangladesh</p>
          <div className="social-links">
            <a href="https://github.com/ibrahimnuhu0" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/ibrahim-nuhu-963b0512b/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
