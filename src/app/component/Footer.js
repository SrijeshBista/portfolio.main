import React from "react";
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-top">
            <h1>LET’S BUILD.</h1>
          </div>
          <div className="footer-main">
            <div className="footer-left">
              <p>
                If you have any projects to discuss feel free to get in touch!
              </p>
              <p>
                &copy; {new Date().getFullYear()} All rights reserved , Srijesh
                Bista.
              </p>
            </div>
            <div className="footer-right">
              <div className="social-media">
                <button className="git">
                  <a
                    href="https://github.com/SrijeshBista"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> <p>: Git Hub</p>
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
                  <p> : LinkDin</p>
                  </a>{" "}
                </button>
              </div>
              <div className="social-media">
                <button className="ig">
                  <a
                    href="https://wa.me/9779765982888?text=Hello%20Srijesh,%20I%20want%20to%20chat%20with%20you!"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp />
                  <p> : Whatsapp</p>
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
                    <CiMail /> <p> : srijeshbista367@gmail.com</p>
                  </a>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
