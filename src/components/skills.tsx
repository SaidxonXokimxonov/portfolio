import { FaHtml5, FaCss3, FaJs, FaReact, FaSass } from "react-icons/fa";
import {
  BiLogoTypescript,
  BiLogoRedux,
  BiLogoTailwindCss,
} from "react-icons/bi";

export default function Skills() {
  return (
    <div className="text-[#8296BD] mt-[50px] lg:mt-[100px] justify-center flex flex-wrap">
      <div className="w-[140px] hover:text-white transition-all h-[140px] flex justify-center items-center flex-col gap-1 cursor-pointer">
        <FaHtml5 className="text-4xl" />
        <h5 className="text-2xl">Html</h5>
      </div>
      <div className="w-[140px] hover:text-white transition-all h-[140px] flex justify-center items-center flex-col gap-1 cursor-pointer">
        <FaCss3 className="text-4xl" />
        <h5 className="text-2xl">Css</h5>
      </div>
      <div className="w-[140px] hover:text-white transition-all h-[140px] flex justify-center items-center flex-col gap-1 cursor-pointer">
        <FaSass className="text-4xl" />
        <h5 className="text-2xl">Sass</h5>
      </div>
      <div className="w-[140px] hover:text-white transition-all h-[140px] flex justify-center items-center flex-col gap-1 cursor-pointer">
        <BiLogoTailwindCss className="text-4xl" />
        <h5 className="text-2xl">Tailwind</h5>
      </div>
      <div className="w-[140px] hover:text-white transition-all h-[140px] flex justify-center items-center flex-col gap-1 cursor-pointer">
        <FaJs className="text-4xl" />
        <h5 className="text-2xl">Java Script</h5>
      </div>
      <div className="w-[140px] hover:text-white transition-all h-[140px] flex justify-center items-center flex-col gap-1 cursor-pointer">
        <BiLogoTypescript className="text-4xl" />
        <h5 className="text-2xl">Type Script</h5>
      </div>
      <div className="w-[140px] hover:text-white transition-all h-[140px] flex justify-center items-center flex-col gap-1 cursor-pointer">
        <FaReact className="text-4xl" />
        <h5 className="text-2xl">React</h5>
      </div>
      <div className="w-[140px] hover:text-white transition-all h-[140px] flex justify-center items-center flex-col gap-1 cursor-pointer">
        <BiLogoRedux className="text-4xl" />
        <h5 className="text-2xl">Redux</h5>
      </div>
    </div>
  );
}
