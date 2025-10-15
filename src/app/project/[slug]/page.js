"use client";
import { useState } from "react";
import { useParams } from "next/navigation";

const projectData = [
  {
    slug: "BlackDiamond",
    title: "Black Diamond",
    des: "E-commerce Salon Website",
    imgsrc: "/blackdimond.png",
    imgsecond: "/aboutusbd.png",
    imgthird: "/bdsecondpic.png",
    imgfourth: "/mobilebd.png",
    imgfifth: "/tabbd.png",
    liveLink: "https://blackdiamondsalon.com/",
  },
  {
    slug: "BlueBugDA",
    title: "Blue Bug DA",
    des: "Digital Agency",
    imgsrc: "/da.png",
    liveLink: "https://SrijeshBista.github.io/bluebugda",
    imgsecond: "/laptopmainda.png",
    imgthird: "/laptoptest.png",
    imgfourth: "/mobileda.png",
    imgfifth: "/tabda.png",
  },
  {
    slug: "Yuma",
    title: "Yuma",
    des: "E-commerce Clothing Website",
    imgsrc: "/yuma.png",
    imgsecond: "/homeyuma.png",
    imgthird: "/aboutyuma.png",
    imgfourth: "/mobileyuma.png",
    imgfifth: "/tabyuma.png",
    liveLink: "https://yumanepal.com/",
  },
];

const Page = () => {
  const { slug } = useParams();
  const project = projectData.find((p) => p.slug === slug);

  const [mainImage, setMainImage] = useState(project?.imgsrc);
  const [activeImage, setActiveImage] = useState(project?.imgsrc);

  if (!project) return <h1>Project Not Found</h1>;

  const isMobileOrTab =
    mainImage === project.imgfourth || mainImage === project.imgfifth;

  return (
    <section id="insider">
      <div className="container">
        <div className="main-insider">
          {/* Main Image */}
          <div className="projectupper">
            <img
              src={mainImage}
              alt={project.title}
              className={isMobileOrTab ? "contain-fit" : "cover-fit"}
            />
          </div>

          {/* Project Info */}
          <div className="projectdown">
            <div className="titels">
              <h1>{project.title}</h1>
              <p>{project.des}</p>
            </div>

            {/* Thumbnails (Now includes first image) */}
            <div className="imges">
              {[project.imgsrc, project.imgsecond, project.imgthird, project.imgfourth, project.imgfifth].map(
                (img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${project.title}-${index}`}
                    className={activeImage === img ? "active" : ""}
                    onClick={() => {
                      setMainImage(img);
                      setActiveImage(img);
                    }}
                  />
                )
              )}
            </div>

            {/* Live Project */}
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <button>Live Project</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
