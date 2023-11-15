"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import * as Icon from "react-feather";

import {
  FaRegEnvelope,
  FaLinkedin,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

const Footer = () => {
  const footerLinks = [
    {
      liClass: "",
      route: "/page-terms",
      title: "Terms of Services",
    },
    {
      liClass: "mt-[10px]",
      route: "/page-privacy",
      title: "Privacy Policy",
    } 
  ];
  const footerCompany = [
    {
      liClass: "",
      route: "/page-aboutus",
      title: "About us",
    },
    {
      liClass: "mt-[10px]",
      route: "/page-services",
      title: "Services",
    },
    {
      route: "/page-team",
      title: "Team",
      liClass: "mt-[10px]",
    },
    {
      route: "/page-pricing",
      title: "Pricing",
      liClass: "mt-[10px]",
    },
    {
      route: "/portfolio-creative-four",
      title: "Project",
      liClass: "mt-[10px]",
    },
    {
      route: "/blog",
      title: "Blog",
      liClass: "mt-[10px]",
    },
    // {
    //   route: "/auth-login",
    //   title: "Login",
    //   liClass: "mt-[10px]",
    // },
  ];
  return (
    <div>
      <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
        <div className="container relative">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <div className="py-[60px] px-0">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                  <div className="lg:col-span-4 md:col-span-12">
                    <Link href="/#" className="text-[22px] focus:outline-none">
                      <Image
                        src="/images/logo-dark.png"
                        width={138}
                        height={24}
                        alt=""
                      />
                    </Link>
                    <p className="mt-6 text-gray-300">
                      Whether you are looking for international collaborations,
                      distribution channels, or market expansion opportunities,
                      we are open to exploring partnerships that foster global
                      growth.
                    </p>
                  </div>

                  <div className="lg:col-span-2 md:col-span-4">
                    <h5 className="tracking-[1px] text-gray-100 font-semibold">
                      Company
                    </h5>
                    <ul className="list-none footer-list mt-6">
                      {footerCompany.map((data, index) => (
                        <li key={index} className={data.liClass}>
                          <Link
                            href={data.route}
                            className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out flex items-center"
                          >
                            <MdKeyboardArrowRight className="text-xl me-1" />{" "}
                            {data.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-3 md:col-span-4">
                    <h5 className="tracking-[1px] text-gray-100 font-semibold">
                      Usefull Links
                    </h5>
                    <ul className="list-none footer-list mt-6">
                      {footerLinks.map((data, index) => (
                        <li key={index} className={data.liClass}>
                          <Link
                            href={data.route}
                            className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out flex items-center"
                          >
                            <MdKeyboardArrowRight className="text-xl me-1" />{" "}
                            {data.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-3 md:col-span-4">
                    <h5 className="tracking-[1px] text-gray-100 font-semibold">
                      Contact Us
                    </h5>
                    <p className="mt-6">Get in touch with Our company</p>
                    <ul className="list-none mt-5 space-x-1 space-y-1">
                      <li className="inline">
                        <Link
                          href="http://linkedin.com/company/shreethemes"
                          target="_blank"
                          className="h-11 w-11 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                        >
                          <FaLinkedin className="text-sm" />
                        </Link>
                      </li>
                      <li className="inline">
                        <Link
                          href="https://www.facebook.com"
                          target="_blank"
                          className="h-11 w-11 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                        >
                          <FaFacebookF className="text-sm" />
                        </Link>
                      </li>
                      <li className="inline">
                        <Link
                          href="https://www.instagram.com"
                          target="_blank"
                          className="h-11 w-11 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                        >
                          <FaInstagram className="text-sm" />
                        </Link>
                      </li>
                      <li className="inline">
                        <Link
                          href="mailto:zrodlotrade@gmail.com"
                          target="_blank"
                          className="h-11 w-11 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                        >
                          <FaRegEnvelope className=" text-sm" />
                        </Link>
                      </li>
                    </ul>
                    {/* <form>
                      <div className="grid grid-cols-1">
                        <div className="foot-subscribe my-3">
                          <label className="form-label">
                            Write your email{" "}
                            <span className="text-red-600">*</span>
                          </label>
                          <div className="form-icon relative mt-2">
                            <Icon.Mail className="w-4 h-4 absolute top-3 start-4" />
                            <input
                              type="email"
                              className="form-input ps-12 rounded w-full py-2 px-3 h-10 bg-gray-800 border-0 text-gray-100 focus:shadow-none focus:ring-0"
                              placeholder="Email"
                              name="email"
                              required=""
                            />
                          </div>
                        </div>

                        <button
                          type="submit"
                          id="submitsubscribe"
                          name="send"
                          className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
                        >
                          Subscribe
                        </button>
                      </div>
                    </form> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-[30px] px-0 border-t border-slate-800">
          <div className="container relative text-center">
            <div className="grid md:grid-cols-2 items-center">
              <div className="md:text-start text-center">
                <p className="mb-0">© {new Date().getFullYear()} ZrodloTrade</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;