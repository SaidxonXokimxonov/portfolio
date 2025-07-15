import About from "./about";
import Skills from "./skills";
import Projects from "./projects";

function Content() {
  return (
    <div className="lg:w-[55%] bg-[rgb(15,23,42)]">
     <About/>
     <Skills/>
     <Projects />
    </div>
  );
}

export default Content;
