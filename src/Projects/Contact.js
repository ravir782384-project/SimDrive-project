import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = () => {
    if(name===""||email===""||message===""){
        alert("kuch tho bharo pehele bhai/behen");
    }
    else{
    alert(`Crew has recevied your message!! We'll be in touch soon`);
    setName("");
    setEmail("");
    setMessage("");
    }
  };

  return (
    <div className="contact-page">

     <span className="contact-tag">
  CONTACT <span className="tag-accent">PIT CREW</span>
</span>
      <p className="contact-desc">
        Need setup advice? Have a question about compatibility? 
        Our team of sim racing experts is standing by.
      </p>

      <div className="contact-divider"></div>
      <div className="contact-form">

        <div className="form-group">
          <label>NAME</label>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>EMAIL</label>
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>MESSAGE</label>
          <textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="5"
          ></textarea>
        </div>

        <button className="contact-btn" onClick={submitForm}>
          SEND MESSAGE
        </button>

      </div>

    </div>
  );
}

export default Contact;