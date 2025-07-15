import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchProjects } from "../../config/request";
import type { Project } from "../../components/projects";

export function SingleProject() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function getData() {
    try {
      setIsLoading(true);
      const res = await fetchProjects();
      const found = (res as Project[]).find((item) => item.id === projectId);
      
      if (found) {
        setProject(found);
      } else {
        setError("Project not found");
      }
    } catch (err) {
      setError("Failed to load project");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, [projectId]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0F172A] text-white flex flex-col justify-center items-center">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-t-[#64748B] border-r-[#64748B] border-b-[#0EA5E9] border-l-[#0EA5E9] rounded-full animate-spin"></div>
          <p className="mt-4 text-[#94A3B8]">Loading project...</p>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-[#0F172A] text-white flex flex-col justify-center items-center px-4">
        <div className="max-w-md text-center">
          <div className="text-6xl mb-4">🚫</div>
          <h2 className="text-2xl font-bold text-[#E2E8F0] mb-2">{error || "Project not found"}</h2>
          <p className="text-[#94A3B8] mb-6">
            The project you're looking for doesn't exist or might have been removed.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-[#1E293B] hover:bg-[#334155] rounded-lg text-[#E2E8F0] font-medium transition-colors duration-300"
          >
            ← Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F172A] text-white px-4 py-16">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[#94A3B8] hover:text-[#E2E8F0] transition-colors duration-300 group"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to all projects
        </button>
        
        {/* Project header with gradient */}
        <div className="relative overflow-hidden rounded-2xl shadow-xl">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1E293B] to-[#0F172A]"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#0EA5E9] opacity-10 rounded-full transform translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#8B5CF6] opacity-10 rounded-full transform -translate-x-20 translate-y-20"></div>
          
          {/* Content */}
          <div className="relative flex flex-col md:flex-row items-center gap-8 p-8 z-10">
            {/* Project image */}
            <div className="relative">
              <img
                src={project.img}
                alt={project.name}
                className="w-40 h-40 object-cover rounded-xl border-2 border-[#334155] shadow-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 24 24' fill='none' stroke='%2364748B' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Ccircle cx='8.5' cy='8.5' r='1.5'%3E%3C/circle%3E%3Cpolyline points='21 15 16 10 5 21'%3E%3C/polyline%3E%3C/svg%3E";
                }}
              />
              <div className="absolute inset-0 border-2 border-[#64748B] rounded-xl opacity-30 pointer-events-none"></div>
            </div>
            
            {/* Project info */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1E293B] rounded-full mb-4">
                <span className="text-[#0EA5E9]">●</span>
                <span className="text-sm font-medium">{project.year}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#E2E8F0] to-[#94A3B8] bg-clip-text text-transparent">
                {project.name}
              </h1>
              
              <p className="mt-3 text-[#94A3B8] max-w-xl">
                {project.shortDescription || "An innovative project showcasing cutting-edge technology"}
              </p>
              
              <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white text-[#0F172A] font-semibold px-5 py-3 rounded-lg hover:bg-gray-200 transition-all duration-300 hover:translate-y-[-2px] shadow-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                  Visit Project
                </a>
                
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#1E293B] text-[#E2E8F0] font-medium px-5 py-3 rounded-lg hover:bg-[#334155] transition-all duration-300 hover:translate-y-[-2px] border border-[#334155] shadow-lg"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Project details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Description card */}
          <div className="lg:col-span-2 bg-[#1E293B] p-6 rounded-xl shadow-lg border border-[#334155]">
            <div className="flex items-center gap-2 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0EA5E9]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <h2 className="text-xl font-semibold text-[#E2E8F0]">Project Overview</h2>
            </div>
            <div className="text-[#CBD5E1] leading-relaxed space-y-4">
              {project.description.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          
          {/* Details sidebar */}
          <div className="space-y-6">
            {/* Technologies card */}
            <div className="bg-[#1E293B] p-6 rounded-xl shadow-lg border border-[#334155]">
              <div className="flex items-center gap-2 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0EA5E9]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <h2 className="text-xl font-semibold text-[#E2E8F0]">Technologies</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies?.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-[#0F172A] text-[#94A3B8] rounded-full text-sm border border-[#334155]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Features card */}
            <div className="bg-[#1E293B] p-6 rounded-xl shadow-lg border border-[#334155]">
              <div className="flex items-center gap-2 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0EA5E9]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <h2 className="text-xl font-semibold text-[#E2E8F0]">Key Features</h2>
              </div>
              <ul className="space-y-2 text-[#CBD5E1]">
                {project.features?.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#0EA5E9] mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}