import React, { useState } from "react";
import "./ContactForm.css";
function ContactForm() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
  });
  const { name, email, number } = user;
  function changeUser(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  function getUserData(e) {
    e.preventDefault();
    console.log(user);
    setUser({
      name: "",
      email: "",
      number: "",
    });
  }
  return (
    <div className="container">
      <div className="container-form">
        <h1 className="contact">Contact Us</h1>
        <p>
          LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.{" "}
        </p>
        <div className="form-con">
          <div className="container-logo">
            <div className="btn-container">
              <button className="contact-btn">VIA SUPPORT CHAT</button>
              <button className="contact-btn">VIA CALL</button>
            </div>
            <div className="via-form">VIA EMAIL FORM</div>
            <div>
              <form onSubmit={getUserData}>
                <label className="name">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={changeUser}
                />

                <label className="email" style={{ marginRight: "350px" }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={changeUser}
                />

                <label className="number" style={{ marginRight: "250px" }}>
                  Phone Number
                </label>
                <input
                  type="text"
                  name="number"
                  value={number}
                  onChange={changeUser}
                />
                <button className="submit">Submit</button>
              </form>
            </div>
          </div>
          <div>
            <img src="/images/Service 24_7-pana 1.svg" alt="from" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
