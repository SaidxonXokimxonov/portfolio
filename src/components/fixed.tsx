import {FaGithub, FaInstagram, FaLinkedin, FaTelegram} from 'react-icons/fa'

function Fixed() {
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
       <div className="flex items-center gap-3"><span className="w-[70px] bg-white h-[1px] "></span><a href="" >About</a></div>
       <div className="flex items-center gap-3"><span className="w-[30px] bg-gray-500 h-[1px] "></span><a href="" className="text-gray-500">Skills</a></div>
       <div className="flex items-center gap-3"><span className="w-[30px] bg-gray-500 h-[1px] "></span><a href="" className="text-gray-500">Projects</a></div>
      </div>
      
      <div className="flex gap-6 text-gray-700 text-[28px]">
        <a href=""><FaGithub className="hover:text-white transition-all"/></a>
        <a href=""><FaTelegram className="hover:text-white transition-all"/></a>
        <a href=""><FaInstagram className="hover:text-white transition-all"/></a>
        <a href=""><FaLinkedin className="hover:text-white transition-all"/></a>
      </div>


    </div>
  );
}

export default Fixed;
