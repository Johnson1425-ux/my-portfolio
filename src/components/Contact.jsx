import React, { useState } from "react";

const email = "johnsonemmanuel1425@gmail.com";

export default function Contact() {
  const [copyStatus, setCopyStatus] = useState("");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus("Email address copied.");
    } catch {
      setCopyStatus(
        "Copy unavailable. Select the email address to copy it, or use the email link.",
      );
    }
  }

  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div>
        <span className="eyebrow">03 / Let's work together</span>
        <h2 id="contact-title">
          Have an idea?
          <br />
          Let's build it.
        </h2>
        <p>
          Tell me what you need, your timeline, and what success looks like.
        </p>
      </div>
      <div className="contact-details">
        <a
          className="button"
          href={`mailto:${email}?subject=Freelance%20project%20inquiry`}
        >
          Email Johnson <span aria-hidden="true">↗</span>
        </a>
        <a className="email-address" href={`mailto:${email}`}>
          {email}
        </a>
        <button className="copy-email" type="button" onClick={copyEmail}>
          Copy email address
        </button>
        <p className="copy-status" role="status" aria-live="polite">
          {copyStatus}
        </p>
      </div>
    </section>
  );
}
