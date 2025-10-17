import React from "react";
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="padding">
          <div className="contact-main">
            <div className="text">
              <hr />
              <h1>Want to Bring Your Idea to Life?</h1>
              <hr />
            </div>
            <div className="icon">
              <p>Shall We Chat?</p>
              <div className="social-media">
                <button className="git">
                  <a
                    href="https://github.com/SrijeshBista"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>{" "}
                </button>
              </div>
              <div className="social-media">
                <button className="mail">
                  <a
                    href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CiMail />
                  </a>{" "}
                </button>
              </div>
              <div className="social-media">
                <button className="linkdin">
                  <a
                    href="https://www.linkedin.com/in/srijesh-bista-670662309/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>{" "}
                </button>
              </div>
              <div className="social-media">
                <button className="what">
                  <a
                    href="https://wa.me/9779765982888?text=Hello%20Srijesh,%20I%20want%20to%20chat%20with%20you!"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp />
                  </a>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
