import React from 'react'
import Image from 'next/image'

const Projects = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-cyan-600 lg:w-1/3 lg:mb-0 mb-4">
              These are some of my projects 
            </h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto text-cyan-200 leading-relaxed text-base">
              A collection of my work demonstrating skills in various technologies.
            </p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2 m-2 rounded-lg overflow-hidden border-2 border-transparent hover:border-yellow-500 hover:shadow-lg transition-all duration-300 ease-in-out">
                <Image
                  width={300}
                  height={300}
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="/cu.png" 
                />
              </div>
              <div className="md:p-2 p-1 w-1/2 m-2 rounded-lg overflow-hidden border-2 border-transparent hover:border-yellow-500 hover:shadow-lg transition-all duration-300 ease-in-out">
                <Image
                  width={300}
                  height={300}
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="/atm.png" 
                />
              </div>
              <div className="md:p-2 p-1 w-full m-2 rounded-lg overflow-hidden border-2 border-transparent hover:border-yellow-500 hover:shadow-lg transition-all duration-300 ease-in-out">
                <Image
                  width={900}
                  height={300}
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="/Todo.jpg" 
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full m-2 rounded-lg overflow-hidden border-2 border-transparent hover:border-yellow-500 hover:shadow-lg transition-all duration-300 ease-in-out">
                <Image
                  width={300}
                  height={300}
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="/cal.png" 
                />
              </div>
              <div className="md:p-2 p-1 w-1/2 m-2 rounded-lg overflow-hidden border-2 border-transparent hover:border-yellow-500 hover:shadow-lg transition-all duration-300 ease-in-out">
                <Image
                  width={300}
                  height={300}
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="/nggg.png" 
                />
              </div>
              <div className="md:p-2 p-1 w-1/2 m-2 rounded-lg overflow-hidden border-2 border-transparent hover:border-yellow-500 hover:shadow-lg transition-all duration-300 ease-in-out">
                <Image
                  width={300}
                  height={300}
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="/re.png" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
