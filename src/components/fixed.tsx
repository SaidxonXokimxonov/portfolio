import { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";

function Fixed() {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const offsetTop = section.offsetTop;
        console.log(offsetTop);

        if (window.scrollY >= offsetTop - 200) {
          current = section.getAttribute("id")!;
        }
      });

      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkClass = (id: string) =>
    `transition-colors text-[16px] text-sm ${
      activeId === id ? "text-[white] font-bold" : "text-gray-500"
    }`;

  return (
    <div className="bg-[#0F172A] lg:py-[50px] lg:px-[70px] flex flex-col gap-[50px] py-[70px] lg:p-0 justify-center lg:justify-around font-inter lg:w-[45%] text-white lg:fixed top-0 left-0 lg:h-screen p-[30px]">
      <div>
        <h1 className="text-5xl font-medium">I'm Saidxon</h1>
        <h2 className="text-2xl mt-4">Frontend Developer</h2>
        <h3 className="text-[16px] w-[70%] mt-6">
          I build accessible, pixel-perfect digital experiences for the web.
        </h3>
      </div>
      <div className="hidden lg:flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <span
            className={`${
              activeId === "about" ? "w-[70px]" : "w-[30px]"
            } w-[30px] bg-white h-[1px] `}
          ></span>
          <a href="#about" className={`${getLinkClass("about")}`}>
            About
          </a>
        </div>
        <div className="flex items-center gap-3">
          <span
            className={`${
              activeId === "skills" ? "w-[70px]" : "w-[30px]"
            } w-[30px] bg-white h-[1px] `}
          ></span>

          <a href="#skills" className={`${getLinkClass("skills")}`}>
            Skills
          </a>
        </div>
        <div className="flex items-center gap-3">
          <span
            className={`${
              activeId === "project" ? "w-[70px]" : "w-[30px]"
            } w-[30px] bg-white h-[1px] `}
          ></span>

          <a href="#project" className={`${getLinkClass("project")}`}>
            Projects
          </a>
        </div>
        <div className="flex items-center gap-3">
          <span
            className={`${
              activeId === "contact" ? "w-[70px]" : "w-[30px]"
            } w-[30px] bg-white h-[1px] `}
          ></span>

          <a href="#contact" className={`${getLinkClass("contact")}`}>
            Contact
          </a>
        </div>
      </div>

      <div className="flex gap-6 text-gray-700 text-[28px]">
        <a href="https://github.com/SaidxonXokimxonov" target="_blank">
          <FaGithub className="hover:text-white transition-all" />
        </a>
        <a href="https://t.me/xokimxonov_s">
          <FaTelegram className="hover:text-white transition-all" />
        </a>
        <a href="https://www.instagram.com/xokimxonov__">
          <FaInstagram className="hover:text-white transition-all" />
        </a>
        <a href="https://www.linkedin.com/in/saidxon-xokimxonov-78380b270/">
          <FaLinkedin className="hover:text-white transition-all" />
        </a>
      </div>
    </div>
  );
}

export default Fixed;
