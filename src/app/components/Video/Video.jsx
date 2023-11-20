import React from 'react';
import { FiPhone } from "react-icons/fi";

function Video({handleContactButtonClick }) {
  return (
    <div className="container-fluid relative md:mt-24 mt-16">
      <div className="grid grid-cols-1 py-36 bg-center bg-no-repeat bg-cover">
        <div className="absolute top-0 start-0 w-full h-full z-0 pointer-events-none overflow-hidden">
          <video
            src="/images/fabrics.mp4"
            autoPlay
            loop
            className="absolute top-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2 w-screen h-[56.25vw] min-h-screen min-w-[177.77vw]"
          ></video>
          {/* ?background=1&autoplay=1&loop=1&byline=0&title=0 */}
        </div>
        <div className="absolute inset-0 bg-slate-900/70"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 text-center">
            <h3 className="mb-4 md:text-3xl text-2xl text-white font-medium">
              Partner with Zrodlo Trade – Your One-Stop Solution.
            </h3>

            <p className="text-white/80 max-w-xl mx-auto">
              Unlock the Best of Europe with Zrodlo Trade!
            </p>
            <div className="mt-6">
              <button
                onClick={handleContactButtonClick}
                className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-4"
              >
                <FiPhone className="me-1 text-lg" /> Contact us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video