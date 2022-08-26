import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-container" id="contact">
      <h1> Contact Me </h1>
      <div className="form-container">
        <form action="">
          <input type="text" name="name" placeholder="Name..." required />
          <input type="email" name="email" placeholder="Email..." required />
          <textarea name="message" rows="7" placeholder="Message..." required />
          <div className="button-container">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
}
