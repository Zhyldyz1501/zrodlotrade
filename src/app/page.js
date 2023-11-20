"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Switcher from "./components/Switcher/Switcher";
import AboutUs from "./components/AboutUs/AboutUs";
import Products from "./components/Products/Products";
import Projects from "./components/Projects/Projects";
import ClientsOne from "./components/ClientsOne/ClientsOne";
import GetInTouch from "./components/GetInTouch/GetInTouch";
import Video from "./components/Video/Video";
import "../../node_modules/react-modal-video/css/modal-video.css";
import "react-18-image-lightbox/style.css";

function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.add("light");
    }
  }, []);

  const handleContactButtonClick = () => {
    const phoneNumber = "+48600793088";

    const uri = `tel:${phoneNumber}`;

    window.location.href = uri;
  };

  return (
    <>
      <Navbar navClass="nav-light" />

      <section
        className="py-36 md:py-64 w-full table relative bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('/images/bg4.png')" }}
      >
        <div className="absolute top-0 start-0 w-full h-full z-0 pointer-events-none overflow-hidden">
          <video
            src="/images/mainvideo.mp4"
            className="absolute top-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2 w-screen h-[56.25vw] min-h-screen min-w-[177.77vw]"
            autoPlay
            loop
          ></video>
          {/* ?background=1&autoplay=1&loop=1&byline=0&title=0 */}
        </div>
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 text-center">
            <Image
              src="/images/logo-dark.png"
              width={122}
              height={134}
              className="mx-auto"
              alt=""
            />
            <h4 className="text-white lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium my-6 position-relative">
              We Collaborate Easy & Fast
            </h4>
            <p className="text-white opacity-50 mb-0 max-w-xl text-lg mx-auto">
              Zrodlo Trade is your all-in-one answer to take your European
              business to the next level.
            </p>

            <div className="relative mt-8">
              <Link
                href="#offer"
                className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="relative">
        <div className="absolute block w-full h-auto bottom-[25px] z-1 start-0">
          <Link href="#offer">
            <i className="mdi mdi-arrow-down absolute top-0 start-0 end-0 text-center inline-flex items-center justify-center rounded-full bg-white dark:bg-slate-900 h-12 w-12 mx-auto shadow-md dark:shadow-gray-800"></i>
          </Link>
        </div>

        <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-white dark:text-slate-900">
          <svg
            className="w-full h-auto scale-[2.0] origin-top"
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>

      <section className="relative md:py-24 py-16">
        <Projects id={""} className={"container relative md:mt-24 mt-16"} />
        <Video
          handleContactButtonClick={handleContactButtonClick}
          className={"container-fluid relative md:mt-24 mt-16"}
        />
        <div className=" md:mt-24 mt-16">
          <AboutUs id={""} className={"container relative"} />
        </div>
        <div className=" md:mt-24 mt-16">
          <Products id={""} className={"container relative"} />
        </div>
        <div className=" md:mt-24 mt-16">
          <ClientsOne />
        </div>
        <div className=" md:mt-24 mt-16">
          <GetInTouch handleContactButtonClick={handleContactButtonClick} />
        </div>
      </section>
      <Footer />
      <Switcher />
    </>
  );
}
export default Home;
