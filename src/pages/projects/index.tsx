import { useState, useEffect } from "react";
import { ProjectCard } from "./project-card";
import { fetchProjects } from "../../config/request";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export interface Project {
  id: string;
  link: string;
  img: string;
  name: string;
  year: number;
  description: string;
  github: string;
  technologies: string;
  shortDescription: string;
}

export const AllProjects = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const navigate = useNavigate();

  async function getData() {
    try {
      setIsLoading(true);
      const res = await fetchProjects();
      setAllProjects(res as Project[]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="min-h-screen bg-[#0F172A] text-white py-12 px-4 sm:px-6 lg:px-8">
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-[#1e293b] transition"
      >
        <BsArrowLeft /> Back to Home
      </button>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Project Portfolio
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-300">
            Explore my collection of projects showcasing various technologies
            and solutions
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-slate-800 rounded-xl h-80 animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        <div className="mt-16 text-center">
          <p className="text-slate-400">
            Showing {allProjects.length} of {allProjects.length} projects
          </p>
        </div>
      </div>
    </div>
  );
};
