import { useEffect, useState } from "react";
import { fetchProjects } from "../config/request";
import { Link } from "react-router-dom";

export interface Project {
  id: string;
  link: string;
  img: string;
  name: string;
  year: number
  description: string
  github: string;
  technologies: string[];
  features: string[];
  categories: string[];
  shortDescription: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  async function getData() {
    const res = await fetchProjects();
    setProjects(res as Project[]);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-[95%] flex sm:flex-col sm:justify-start gap-8 justify-center flex-wrap mt-[70px] mx-auto sm:mx-0  sm:ps-[60px] pb-[30px]">
      {projects.map((item) => {
        return (
          <Link to={`projects/${item.id}`} className="w-[320px] sm:w-full flex items-center sm:border-none border border-[#8296BD] flex-col sm:flex-row gap-4 rounded hover:backdrop-brightness-120 p-4 cursor-pointer transition-all sm:h-[130px]">
            <img
              src={item.img}
              alt=""
              className="w-[220px] sm:w-[170px] sm:h-full h-[150px]  rounded border"
            />
            <div className="text-white">
              <h2 className="hidden sm:block">{item.year}</h2>
              <h1 className="text-xl">{item.name}</h1>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
