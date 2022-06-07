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
        <div className="flex flex-col col-4 m-5">
          {projects.map((project) => (
            <div>
                      <div
              key={project.image}
              className="m:w-1/2 w-100 p-2 h-100 "> </div>
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  src={project.image}
                />
               
                <div className="px-5 py-2 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h4 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h4> 
                  <a  href={project.link} className="title-font text-lg font-medium text-white mb-2">
                 <h1>{project.title}</h1>   
                  </a>
                  <p className="leading-relaxed">{project.description}</p>
                  <a className="title-font text-lg font-medium text-white mb-3" href={project.github}> 
                 <h6> GitHub Repository</h6>
                  </a>
                </div>
              </div>
              </div>
            
          ))}
        </div>
      </div>
    </section>
)}

