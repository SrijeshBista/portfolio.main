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
                    href="https://www.instagram.com/srijesh_bista_/"
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
                    href="https://www.facebook.com/srijesh.bista/"
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
