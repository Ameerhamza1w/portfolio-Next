import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";

// Skills Component can be defined here as well or imported if needed
export const Skills = () => {
  return (
    <div>
      <h2 className="mt-24 mb-24 text-center text-4xl font-bold underline text-cyan-600">My Skills</h2>
      <ul>
        <li className="text-2xl text-white font-semibold ml-16">HTML</li>
        <div className='w-[90%] ml-16 mb-3 h-4 bg-green-600 rounded-2xl'></div>

        <li className="text-2xl text-white font-semibold ml-16">CSS</li>
        <div className='w-[70%] ml-16 mb-3 h-4 bg-blue-600 rounded-2xl'></div>

        <li className="text-2xl text-white font-semibold ml-16">Java</li>
        <div className='w-[70%] ml-16 mb-3 h-4 bg-red-600 rounded-2xl'></div>

        <li className="text-2xl text-white font-semibold ml-16">TypeScript</li>
        <div className='w-[70%] ml-16 mb-3 h-4 bg-yellow-600 rounded-2xl'></div>

        <li className="text-2xl text-white font-semibold ml-16">React</li>
        <div className='w-[50%] ml-16 mb-3 h-4 bg-purple-600 rounded-2xl'></div>

        <li className="text-2xl text-white font-semibold ml-16">Next.js</li>
        <div className='w-[50%] ml-16 mb-3 h-4 bg-teal-600 rounded-2xl'></div>
      </ul>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h2 className="mt-24 text-center text-4xl font-bold underline text-cyan-600">About Me</h2>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <Image
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="/ah.jpeg"
            width={400}
            height={300}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white hover:text-yellow-500">
              Hello
            </h1>
            <p className="mb-8 leading-relaxed text-cyan-200">
              I am an Electrical Engineering graduate from Iqra University with a strong
              foundation in engineering principles and a passion for technology
              and innovation. Currently, I am expanding my skill set by pursuing
              a Diploma in AI Cloud Engineering, with a focus on AI, Metaverse,
              and Web 3.0 technologies, at the Governor's House. This program is
              giving me hands-on experience with cutting-edge tools and
              methodologies that are shaping the future of technology. I am
              excited to apply my knowledge in both electrical engineering and
              emerging tech fields to drive impactful solutions and contribute
              to forward-thinking projects.
            </p>
            <div className="flex justify-center">
              <a href="https://www.linkedin.com/in/ameerhamzamemon" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex text-[30px] text-blue-400 border-0 py-2 px-6 rounded text-lg">
                  <FaLinkedin />
                </button>
              </a>
              <a href="https://github.com/Ameerhamza1w/Todo_App.git" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex text-[30px] text-white border-0 py-2 px-6 rounded text-lg">
                  <FaGithub />
                </button>
              </a>
              <a href="https://github.com/Ameerhamza1w/Todo_App.git" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex text-[30px] text-white border-0 py-2 px-6 rounded text-lg">
                  <IoLogoVercel />
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Skills />
    </div>
  );
};

export default About;
