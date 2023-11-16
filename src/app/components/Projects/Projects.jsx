import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { servicesData } from "../../mocks/Data/data";
import { FaArrowRight } from "react-icons/fa";
import { FiCamera } from "react-icons/fi";

function Projects() {
  return (
    <div id="projects" className="container relative md:mt-10 mt-3">
      <div className="grid grid-cols-1 pb-8 text-center">
        <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">
          Services
        </h6>
        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
          What we offer ?
        </h3>

        <p className="text-slate-400 max-w-xl mx-auto">
          Our extensive network across Europe allows us to source an array of
          high-quality products from various countries. Whether it is artisanal
          cheese from France, precision machinery from Germany, or fashionable
          textiles from Italy, we have got the connections to fulfill your
          inventory needs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-6 gap-[30px]">
        {servicesData.map((item, index) => {
          return (
            <div
              key={index}
              className="p-6 hover:shadow-xl hover:shadow-gray-100 dark:hover:shadow-gray-800 transition duration-500 rounded-2xl mt-6 "
            >
              <div
                className="w-21 h-19  bg-indigo-600/5-cover
                   text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800"
              >
                <div className="icon absolute z-10 opacity-0 group-hover:opacity-100 top-4 end-4 transition-all duration-500">
                  <Link
                    href="#"
                    className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full lightbox"
                  >
                    <FiCamera className="w-4 h-4" />
                  </Link>
                </div>
                <Image
                  src={item.image}
                  className="w-18 h-17"
                  width={100}
                  height={100}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  alt="fabric"
                />
              </div>

              <div className="content mt-7">
                <Link
                  href="/page-services"
                  className="title h5 text-lg font-medium hover:text-indigo-600"
                >
                  {item.title}
                </Link>
                <p className="text-slate-400 mt-3">{item.desc}</p>

                <div className="mt-5">
                  <Link
                    href="/page-services"
                    className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500"
                  >
                    Read More <FaArrowRight className="ms-2 text-[10px]" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
