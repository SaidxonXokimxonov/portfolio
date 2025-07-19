import { useEffect, useState } from "react";
import { fetchProjects } from "../config/request";
import { Link, useNavigate } from "react-router-dom";
import { LuArrowRight } from "react-icons/lu";

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

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const navigate = useNavigate();

  async function getData() {
    const res = await fetchProjects();
    setProjects(res as Project[]);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="max-w-6xl mt-[80px] mx-auto">
      <div className="w-[95%] flex flex-wrap justify-center gap-8 mx-auto sm:mx-0 sm:ps-[60px] pb-[30px]">
        {projects?.slice(0, 3)?.map((item) => (
          <Link
            key={item.id}
            to={`/projects/${item.id}`}
            className="w-[320px] sm:w-full flex items-center flex-col sm:flex-row gap-4 rounded-xl 
                         bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-cyan-500/30
                         p-4 cursor-pointer transition-all duration-300 sm:h-[130px] relative
                         "
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Year badge - visible only on mobile */}
            <div className="absolute top-4 right-4 sm:hidden">
              <span className="text-xs font-semibold bg-blue-600 px-2 py-1 rounded">
                {item.year}
              </span>
            </div>

            <div className="relative  overflow-hidden rounded-lg border border-red-700 w-[220px] sm:w-[170px] h-[150px] sm:h-full">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-500"
                style={{
                  transform: hoveredId === item.id ? "scale(1.05)" : "scale(1)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
            </div>

            <div className="text-white flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="hidden sm:block text-sm text-slate-400 mb-1">
                    {item.year}
                  </h2>
                  <h1 className="text-xl font-bold group-hover:text-cyan-400 transition-colors">
                    {item.name}
                  </h1>
                </div>

                <div
                  className={`hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-cyan-600/20 transition-all duration-300 ${
                    hoveredId === item.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <svg
                    className="w-4 h-4 text-cyan-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {item?.technologies
                  .split(" ")
                  .slice(0, 4)
                  .map((item) => {
                    return (
                      <span className="text-xs bg-slate-900/50 text-cyan-300 px-2 py-1 rounded">
                        {item}
                      </span>
                    );
                  })}
                {item?.technologies?.split(" ").length > 4 && (
                  <span className="text-xs bg-slate-900/50 text-slate-400 px-2 py-1 rounded">
                    +{item?.technologies?.split(" ").length - 4}
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
        <div className="w-full">
          <button
            onClick={() => navigate("/projects")}
            className="flex items-center text-[#8296BD] hover:text-white cursor-pointer text-xl gap-x-2"
          >
            See All Projects <LuArrowRight className="mt-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
