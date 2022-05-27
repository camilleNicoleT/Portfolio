import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../components/data";

export default function Home() {

  return (
    <section id="projects" className="body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-10">
        <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-0 text-light">
            Projects
          </h1>
           </div>
        <div className="flex flex-wrap m-5">
          {projects.map((project) => (
                      <a
              href={project.link}
              key={project.image}
              className="m:w-1/2 w-100 p-4 h-100 ">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h4 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h4>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
)}

