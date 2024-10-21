import Image from "next/image";
import Link from 'next/link';
import '@fontsource/ibm-plex-sans';
import { FloatingNav } from "../components/floatingnav";
import { HoverBorderGradient } from "../components/hover-border-gradient";
import { ProjectsCarousel } from "../components/carousel";



export default function Home() {
  return (

    <div className="background-white">

      <FloatingNav
        navItems={[
          { name: "Home", link: "#" },
          { name: "About", link: "#about" },
          { name: "Projects", link: "#projects" },
        ]}
        buttonLink="/resume.pdf"
        buttonText="Resume"
      />
      
      {/* Title Card */}
      <div className="h-screen w-full flex flex-col items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <div className="p-4 max-w-7xl mx-auto relative z-10 w-full text-center">
          <h1 className="font-sans text-5xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Max Xu <br />
          </h1>
          <h3 className="font-sans md:text-3xl font-normal text-base text-neutral-300 max-w-lg mx-auto">
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-pink-500">
              Color
            </span>{" "}
            the world.
          </h3>
          {/* Down Link */}
          <a className="down mt-6" href="#about" data-scroll>
            <i className="icon fa fa-chevron-down" aria-hidden="true"></i>
          </a>
        </div>
      </div>

      <div id="about" className="flex flex-col md:flex-row mx-auto py-20 px-4 md:px-8 lg:px-10">
        <div className="md:w-1/2 flex flex-col justify-center items-start h-[50vh] md:ml-[20vh] mb-8 md:mb-0 mt-[13vh]">
          <h2 className="font-sans text-2xl md:text-5xl mb-4 text-black dark:text-white">
            Driven to{" "}
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-yellow-500 to-red-500">
              create.
            </span>
          </h2>
          <p className="font-sans text-3xl md:text-2xl text-neutral-700 dark:text-neutral-300 text-base md:text-lg">
            With over{" "}
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-blue-500">
              5
            </span>{" "}
            years of experience, and after developing programs used/viewed more
            than{" "}
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-cyan-500 to-green-500">
              250,000
            </span>{" "}
            times, I'm a developer passionate about making an <b>impact</b>.
            As a dedicated developer and a strong advocate for continuous learning, I strive to harness technology to create solutions that address{" "}
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-red-500">
              real-world
            </span>{" "}
            challenges. Through my work, I aim to further my interests, career, and set an example for future developers.
          </p>

          <p className="mb-4"></p> 

          <div className="flex items-center space-x-4">
            <a href="/resume.pdf" download>
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black bg-black text-white dark:text-white flex items-center space-x-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"/></svg>
                <span className="font-sans">Resume</span>
              </HoverBorderGradient>
            </a>


            <a href="https://github.com/hxu64/" target="_blank" rel="noopener noreferrer">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 496 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                </svg>
                <span className="font-sans">GitHub</span>
              </HoverBorderGradient>
            </a>

            <a href="https://www.linkedin.com/in/hmaxxu/" target="_blank" rel="noopener noreferrer">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
              >
                <div className="flex items-center">
                  {/* Black icon for light mode */}
                  <svg 
                    className="block dark:hidden" 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="#000"
                  >
                    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z"/>
                  </svg>

                  {/* White icon for dark mode */}
                  <svg 
                    className="hidden dark:block" 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="#ffffff"
                  >
                    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z"/>
                  </svg>
                </div>

                <span className="font-sans">LinkedIn</span>
              </HoverBorderGradient>
            </a>
          </div>
          
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src="/images/maxxu.png"
            alt="Picture of Max Xu"
            className="max-w-full h-[75vh] object-cover"
          />
        </div>
      </div>
      
      <div id="projects"></div>
      <ProjectsCarousel />


    </div>
  );
}

