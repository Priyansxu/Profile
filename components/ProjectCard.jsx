import Image from "next/image";
import Link from "next/link";
import React from "react";
import aizen from "../public/aizen.jpg";

const ProjectCard = () => {
  const projects = [
    {
      id: 1,
      image: aizen,
      title: "Aizen",
      description: "Create beautiful images and gifs of your source code",
      link: "/work/aizen",
    },
  ];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <div key={project.id} className="rounded-lg mb-12 flex flex-col items-center">
          <Link href={project.link}>
            <a>
              <Image
                loading="lazy"
                src={project.image}
                alt={project.title}
                width="200"
                className="rounded-md drop-shadow-2xl hover:scale-110"
              />
            </a>
          </Link>
          <div className="flex flex-col items-center">
            <h1 className="font-semibold text-[1.5rem] mt-3 text-gray-700 dark:text-white">
              {project.title}
            </h1>
            <p className="max-w-[90%] text-gray-400 font-light text-center">
              {project.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
