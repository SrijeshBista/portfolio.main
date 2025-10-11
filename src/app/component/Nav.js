"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Nav = () => {
  const [hamopen, sethamopen] = useState(false);

  const hamburgeropen = () => sethamopen(true);
  const hamburgerclose = () => sethamopen(false);

  // Smooth scroll to section and close hamburger
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    sethamopen(false);
  };

  return (
    <>
      <header>
        <nav>
          <div className="nav-container">
            <div className="nav-main">
              <div className="logo">
                <img src="../Srijeshbistalogo.png" alt="logo" />
              </div>

              <div className="hamburger">
                <div className="nav-btn">
                  <button className="btn">
                    <a onClick={() => handleScroll("contact")}>
                      <span className="btn-text-one">Get In Touch</span>
                      <span className="btn-text-two">Now!</span>
                    </a>
                  </button>
                </div>

                <div className="icon">
                  <button onClick={hamburgeropen}>
                    <GiHamburgerMenu />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* nav detail */}
        <div className={`nav-inside ${hamopen ? "active" : ""}`}>
          <button className="close-btn" onClick={hamburgerclose}>
            <IoClose />
          </button>

          <ul>
            <li>
              <a onClick={() => handleScroll("banner")}>Home</a>
            </li>

            <li>
              <a onClick={() => handleScroll("aboutme")}>About</a>
            </li>

            <li>
              <a onClick={() => handleScroll("Techiwork")}>Skill</a>
            </li>

            <li>
              <a onClick={() => handleScroll("Project")}>Project</a>
            </li>

            <li>
              <a onClick={() => handleScroll("contact")}>Contact</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Nav;
