import { LuArrowUpRight } from "react-icons/lu";

export default function About() {
  return (
    <section id="about" className="lg:pt-[80px] lg:px-[60px] p-[30px]">
      <h1 className="text-[#8296BD] text-[17px]">
        I am a frontend developer passionate about crafting smooth,
        user-friendly, and precisely built interfaces. What I enjoy most is
        finding the balance between design and development—creating interfaces
        that not only look good but also work efficiently and intuitively.
        <br />
        <br />
        Currently, I work as a junior frontend developer, using React,
        TypeScript, Tailwind CSS, and Firebase to build modern,
        mobile-responsive web applications that solve real-world problems. My
        best project so far is Interon, a platform that helps users prepare for
        interviews. I learned the most from this project—about user experience,
        design, functionality, and working with Firebase.
        <br />
        <br />
        I’m also familiar with deploying applications via Vercel and Netlify,
        building Telegram bots, and creating responsive layouts.
        <br />
        <br />
        In my free time, I enjoy exploring new technologies, building
        mini-projects, playing chess, and improving interactive user
        experiences.
      </h1>
      <a
        target="_blank"
        href={
          "https://firebasestorage.googleapis.com/v0/b/ibs-homework-website.appspot.com/o/Saidxon_Xokimxonov_Resume.pdf?alt=media&token=03be1f17-82f6-4bea-8aa3-41b8eb6445dc"
        }
        className="flex mt-[50px] text-[#8296BD] hover:text-white cursor-pointer text-xl gap-2"
      >
        Open resume <LuArrowUpRight />
      </a>
    </section>
  );
}
