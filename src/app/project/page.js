"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Loader from "../component/Loding";
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
    slug: "SEMS",
    title: "SEMS",
    des: "Student Event Management Website",
    imgsrc: "./yuma.png",
    liveLink: "https://systemeventmanagementsystem.netlify.app/html/homepage",
  },
];

const ProjectPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // loader duration
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

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

                <button
                  className="project-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(project.liveLink, "_blank");
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
