"use client";
import React from "react";
import Link from "next/link";

const projectData = [
  {
    slug: "BlackDiamond",
    title: "Black Diamond",
    des: "E-commerce Salon Website",
    imgsrc: "./blackdimond.png",
    liveLink: "https://blackdiamondsalon.com/", 
  },
  {
    slug: "BlueBugDA",
    title: "Blue Bug DA",
    des: "Digital Agency",
    imgsrc: "./da.png",
    liveLink: "https://bluebugda.vercel.app", 
  },
  {
    slug: "Yuma",
    title: "Yuma",
    des: "E-commerce Clothing Website",
    imgsrc: "./yuma.png",
    liveLink: "https://yumanepal.com/",
  },
];

const ProjectPage = () => {
  return (
    <section id="project-page">
      <div className="container">
        <div className="titles">
          <h1>Project</h1>
        </div>
        <div className="mainproject">
          {projectData.map((project, index) => (
            <Link
              href={`/project/${project.slug}`}
              key={index}
              className="project-detail"
            >
              <div className="card-content">
                <img src={project.imgsrc} alt={project.title} />
                <h1 className="project-title">{project.title}</h1>
                <p className="project-des">{project.des}</p>

                {/* ✅ Button that goes to live project */}
                <button
                  className="project-btn"
                  onClick={(e) => {
                    e.preventDefault(); // stop card link click
                    window.open(project.liveLink, "_blank"); // open live site
                  }}
                >
                  Live Project
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
