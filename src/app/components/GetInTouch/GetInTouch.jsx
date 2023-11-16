"use client";
import React from "react";
import Link from "next/link";
import { FiPhone } from "react-icons/fi";

const GetInTouch = ({ className, title }) => {
  const handleContactButtonClick = () => {
     
       const phoneNumber = "+48600793088"; 

       const uri = `tel:${phoneNumber}`;

       window.location.href = uri;
     };
  return (
    <div className={className}>
      <div className="grid grid-cols-1 text-center">
        {title ? (
          <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">
            Contact us
          </h6>
        ) : (
          ""
        )}
        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
          Have Questions? Get in touch!
        </h3>

        <p className="text-slate-400 max-w-xl mx-auto">
          We are always eager to explore international partnerships and
          collaborations that transcend borders. Contact us to discuss how we
          can work together to achieve global success.
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
  );
 }
export default GetInTouch;
