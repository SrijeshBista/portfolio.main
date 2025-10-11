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
                    href="https://www.facebook.com/srijesh.bista/"
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
                <button className="ig">
                  <a
                    href="https://www.instagram.com/srijesh_bista_/"
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
