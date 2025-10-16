import React from "react";
import Link from "next/link";
const Project = () => {
  return (
    <section id="Project">
      <div className="container">
        <div className="padding">
          <div className="title">
            <h1>PROJECTS I HAVE COMPLETED</h1>
          </div>
          <div className="project-main">
            <div className="card-main ">
              <div className="card-img">
                <img src="./blackdimond.png" />
              </div>
              <div className="card-title">
                <h1>Black Diamond</h1>
              </div>
              <div className="card-des">
                <p>E-commerce</p>
              </div>
              <div className="card-btn">
                <button>
                  {" "}
                  <a
                    href="https://blackdiamondsalon.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See Live{" "}
                  </a>
                  <div className="arrow-wrapper">
                    <div className="arrow"></div>
                  </div>
                </button>
              </div>
            </div>
            <div className="card-main ">
              <div className="card-img">
                <img src="./da.png" />
              </div>
              <div className="card-title">
                <h1>Blue Bug DA</h1>
              </div>
              <div className="card-des">
                <p>Digital Agency</p>
              </div>
              <div className="card-btn">
                <button>
                  {" "}
                  <a href="https://bluebugda.vercel.app" target="_blank" rel="noopener noreferrer">
                    See Live{" "}
                  </a>
                  <div className="arrow-wrapper">
                    <div className="arrow"></div>
                  </div>
                </button>
              </div>
            </div>
            <div className="card-main ">
              <div className="card-img">
                <img src="./yuma.png" />
              </div>
              <div className="card-title">
                <h1>Yuma</h1>
              </div>
              <div className="card-des">
                <p>E-commerce</p>
              </div>
              <div className="card-btn">
                <button>
                  {" "}
                  <a
                    href="https://yumanepal.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See Live{" "}
                  </a>
                  <div className="arrow-wrapper">
                    <div className="arrow"></div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="more-btn">
            <Link href="/project">
              <button className="readmore-btn">
                <span className="book-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="rgb(86, 69, 117)"
                    viewBox="0 0 126 75"
                    className="book"
                  >
                    <rect
                      strokeWidth="3" // corrected
                      stroke="#fff"
                      rx="7.5"
                      height="70"
                      width="121"
                      y="2.5"
                      x="2.5"
                    />
                    <line
                      strokeWidth="3" // corrected
                      stroke="#fff"
                      y2="75"
                      x2="63.5"
                      x1="63.5"
                    />
                    <path
                      strokeLinecap="round" // corrected
                      strokeWidth="4" // corrected
                      stroke="#fff"
                      d="M25 20H50"
                    />
                    <path
                      strokeLinecap="round"
                      strokeWidth="4"
                      stroke="#fff"
                      d="M101 20H76"
                    />
                    <path
                      strokeLinecap="round"
                      strokeWidth="4"
                      stroke="#fff"
                      d="M16 30L50 30"
                    />
                    <path
                      strokeLinecap="round"
                      strokeWidth="4"
                      stroke="#fff"
                      d="M110 30L76 30"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 65 75"
                    className="book-page" // corrected
                  >
                    <path
                      strokeLinecap="round"
                      strokeWidth="4"
                      stroke="#fff"
                      d="M40 20H15"
                    />
                    <path
                      strokeLinecap="round"
                      strokeWidth="4"
                      stroke="#fff"
                      d="M49 30L15 30"
                    />
                    <path
                      strokeWidth="3"
                      stroke="#fff"
                      d="M2.5 2.5H55C59.1421 2.5 62.5 5.85786 62.5 10V65C62.5 69.1421 59.1421 72.5 55 72.5H2.5V2.5Z"
                    />
                  </svg>
                </span>
                <span className="text"> See more </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
