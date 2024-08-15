import { useState } from "react";
import { Button } from "./Button";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectChange = (project) => {
    setSelectedProject(project);
  };

  const projectOptions = [
    { name: "HVAC", tools: ["Autocad", "Revit"] },
    { name: "Plumbing", tools: ["Autocad", "Revit"] },
    { name: "FireFighting", tools: ["Autocad", "Revit"] },
    { name: "Solid Works", tools: [] },
  ];

  return (
    <section id="projects" className="mt-[10rem]">
      <div className="text-center w-full flex justify-center">
        <h1
          data-aos="fade-up"
          data-aos-duration="3000"
          className="border-[1px] text-2xl text-white  bg-gray-800 hove font-bold text-center p-3 w-[400px] rounded-2xl  "
        >
          Projects
        </h1>
      </div>

      <div className="text-white text-center mt-16 text-[20px] font-bold font-serif flex flex-wrap justify-center  ">
        {projectOptions.map((project) => (
          <div key={project.name} className="mr-4">
            <Button button={project.name} click={() => handleProjectChange(project.name)} />
            <div className={`flex mt-3 text-center flex-row ${selectedProject === project.name ? "" : "hidden"} justify-center w-full`}>
              {project.tools.map((tool) => (
                <button key={tool} className="bg-blue-500 text-white px-4 mt-4 py-2 rounded-xl hover:bg-slate-700 border-none mr-3 w-[50%] cursor-pointer">
                  {tool}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
