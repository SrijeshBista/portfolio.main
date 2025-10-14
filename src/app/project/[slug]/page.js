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
    imgfourth: "/mobilebd.png", // <-- mobile image
    imgfifth: "/tabbd.png",
    liveLink: "https://blackdiamondsalon.com/",
  },
  {
    slug: "BlueBugDA",
    title: "Blue Bug DA",
    des: "Digital Agency",
    imgsrc: "/da.png",
    liveLink: "#",
    imgsecond: "/da-1.png",
    imgthird: "/da-2.png",
    imgfourth: "/da-3.png",// <-- mobile image
    imgfifth: "/da-4.png",
  },
  {
    slug: "Yuma",
    title: "Yuma",
    des: "E-commerce Clothing Website",
    imgsrc: "/yuma.png",
    imgsecond: "/homeyuma.png",
    imgthird: "/yuma-2.png",
    imgfourth: "/yuma-3.png",// <-- mobile image
    imgfifth: "/yuma-4.png",
    liveLink: "https://yumanepal.com/",
  },
];

const Page = () => {
  const { slug } = useParams();
  const project = projectData.find((p) => p.slug === slug);

  const [mainImage, setMainImage] = useState(project?.imgsrc);

  if (!project) return <h1>Project Not Found</h1>;

  return (
    <section id="insider">
      <div className="container">
        <div className="main-insider">
          {/* Upper main image */}
          <div className="projectupper">
            <img
              src={mainImage}
              alt={project.title}
              className={mainImage === project.imgfourth ? "contain-fit" : ""}
            />
          </div>

          {/* Details and thumbnails */}
          <div className="projectdown">
            <div className="titels">
              <h1>{project.title}</h1>
              <p>{project.des}</p>
            </div>

            {/* Thumbnail images */}
            <div className="imges">
              {[project.imgsecond, project.imgthird, project.imgfourth, project.imgfifth].map(
                (img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${project.title}-${index}`}
                    onMouseEnter={() => setMainImage(img)} // change main image on hover
                    onMouseLeave={() => setMainImage(project.imgsrc)} // revert on leave
                  />
                )
              )}
            </div>

            {/* Live project button */}
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
