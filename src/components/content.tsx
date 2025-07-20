import About from "./about";
import Skills from "./skills";
import Projects from "./projects";
import ContactForm from "./contact";

function Content() {



  return (
    <div className="lg:w-[55%] bg-[rgb(15,23,42)]">
      <About />
      <Skills />
      <Projects />
      <ContactForm />
    </div>
  );
}

export default Content;
