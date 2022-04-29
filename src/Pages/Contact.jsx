import React from "react";

export default function Contact() {
  return (
    <div className="contact">
      <div className="rightSide">
        <h1>Send me message</h1>
        <div className="firstLine">
          <input placeholder="Your name" type="text" />
          <input placeholder="Your e-mail" type="text" />
        </div>
        <div>
          <input className="subject" placeholder="Subject" type="text" />
        </div>
        <div>
          <input className="message" placeholder="Message" type="text" />
        </div>
        <button>Send Message</button>
      </div>
      <div className="leftSide">
        <h1>My Contacts</h1>
        <p>Phone: +37441703113</p>
        <p>E-mail: rafaelafrikyan95@gmail.com</p>
        <p>Social network:</p>
        <div className="icons">
     
            <img
              src="https://www.svgrepo.com/show/303615/github-icon-1-logo.svg"
              alt=""
            />
         

          <img
            src="data:image/png;base64,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"
            alt=""
          />
          <img src="http://cdn.onlinewebfonts.com/svg/img_395161.png" alt="" />
        </div>
      </div>
    </div>
  );
}
