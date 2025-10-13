"use client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Nav = () => {
  const [hamopen, sethamopen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const hamburgeropen = () => sethamopen(true);
  const hamburgerclose = () => sethamopen(false);

  // ✅ Scroll or redirect to section
  const handleScroll = (sectionId) => {
    if (pathname === "/") {
      // Already on home → smooth scroll
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Not on home → go home first, then scroll after navigation
      router.push(`/#${sectionId}`);
    }
    sethamopen(false);
  };

  return (
    <header>
      <nav>
        <div className="nav-container">
          <div className="nav-main">
            <div className="logo">
              <Link href="/">
                <img src="../Srijeshbistalogo.png" alt="logo" />
              </Link>
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
            <Link href="/" onClick={hamburgerclose}>
              Home
            </Link>
          </li>

          <li>
            <a onClick={() => handleScroll("aboutme")}>About</a>
          </li>

          <li>
            <a onClick={() => handleScroll("Techiwork")}>Skill</a>
          </li>

          <li>
            <Link href="/project" onClick={hamburgerclose}>
              Project
            </Link>
          </li>

          <li>
            <a onClick={() => handleScroll("contact")}>Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Nav;
