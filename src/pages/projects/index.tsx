import { useEffect, useState } from "react";
import { fetchProjects } from "../../config/request";
import type { Project } from "../../components/projects";
import { Link } from "react-router-dom";

export function AllProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getData() {
    try {
      setIsLoading(true);
      const res = await fetchProjects();
      setProjects(res as Project[]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0c1120] to-[#0a0f1d] flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full border-4 border-t-transparent border-r-transparent border-b-[#0ea5e9] border-l-[#0ea5e9] animate-spin"></div>
          <p className="mt-6 text-[#94a3b8] text-lg tracking-wide font-light">
            Loading creative works
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0c1120] to-[#0a0f1d] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-4">
            Project <span className="font-medium">Gallery</span>
          </h1>
          <p className="text-[#94a3b8] max-w-xl mx-auto font-light tracking-wide">
            A curated collection of my recent work
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group"
            >
              <Link to={`/projects/${project.id}`}>
                <div className="relative h-full bg-[#0f172a] border border-[#1e293b] rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#0ea5e9]/30">
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0c1120] via-transparent to-transparent z-10"></div>
                    <img
                      src={project.img}
                      alt={project.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 24 24' fill='none' stroke='%231e293b' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Ccircle cx='8.5' cy='8.5' r='1.5'%3E%3C/circle%3E%3Cpolyline points='21 15 16 10 5 21'%3E%3C/polyline%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h2 className="text-xl font-medium text-white group-hover:text-[#0ea5e9] transition-colors">
                          {project.name}
                        </h2>
                        <p className="text-[#94a3b8] mt-1">{project.year}</p>
                      </div>
                      
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0f172a] border border-[#1e293b] transition-colors duration-300 group-hover:bg-[#0ea5e9] group-hover:border-[#0ea5e9] text-[#94a3b8] group-hover:text-white">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-5 w-5"
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center">
            <div className="h-px w-16 bg-[#1e293b] mr-4"></div>
            <span className="text-[#64748b] text-sm font-light tracking-wide">
              {projects.length} projects
            </span>
            <div className="h-px w-16 bg-[#1e293b] ml-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}