import React, { useEffect, useState } from "react";
import axios from "axios";
import Project from "./Project";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

export default function ProjectShowcase() {
  const [firstThree, setFirstThree] = useState([]);
  const [remaining, setRemaining] = useState([]);

  useEffect(() => {
    axios.get("https://test.api.dpmsign.com/api/product")
      .then(res => {
        const allProjects = res.data.data.products;
        setFirstThree(allProjects.slice(0, 3));
        setRemaining(allProjects.slice(3));
      })
      .catch(err => {
        console.error("Error fetching project data:", err);
      });
  }, []);

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
    mobile: { breakpoint: { max: 768, min: 0 }, items: 1 }
  };

  return (
    <div className="w-11/12 mx-auto py-10">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-2">Project Showcase</h2>
      <p className="text-center text-sm md:text-base text-gray-600 mb-8">
        Here's a glimpse of some projects we've completed for our clients
      </p>
<hr
          className="h-1 w-3/12 md:w-1/12 mb-7 bg-[#45B6E7] mx-auto mt-1 rounded"
          style={{ height: "6px" }}
        />
      {/* First 3 projects */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {firstThree.map(project => (
          <Project key={project.productId} project={project} />
        ))}
      </div>

      {/* Carousel for remaining */}
      {remaining.length > 0 && (
        <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000}>
          {remaining.map(project => (
            <Project key={project.productId} project={project} />
          ))}
        </Carousel>
      )}
     <div className="w-full mx-auto flex justify-center">
        <Link to='/ourproducts'>
         <button className="btn btn-active btn-primary">Check Our Products</button>
        </Link>
     </div>
    </div>
  );
}
