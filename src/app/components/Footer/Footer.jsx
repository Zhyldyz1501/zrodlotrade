"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Link as Link1 } from 'react-scroll';

import * as Icon from "react-feather";

import {
  FaRegEnvelope,
  FaLinkedin,
  FaWhatsapp,
  FaPhone
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
      route: "about",
      title: "About us",
    },
    {
      liClass: "mt-[10px]",
      route: "products",
      title: "Products",
    },
    {
      route: "projects",
      title: "Projects",
      liClass: "mt-[10px]",
    },
    {
      route: "blog",
      title: "Blog",
      liClass: "mt-[10px]",
    },
    {
      route: "review",
      title: "Reviews",
      liClass: "mt-[10px]",
    },
  ];

  const phoneNumber = '+48600793088'
  const whatsappURI = `https://wa.me/${phoneNumber}`
  const uri = `tel:${phoneNumber}`;

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

                  <div className="lg:col-span-2 md:col-span-3">
                    <h5 className="tracking-[1px] text-gray-100 font-semibold">
                      Company
                    </h5>
                    <ul className="list-none footer-list mt-6">
                      {footerCompany.map((data, index) => (
                        <li key={index} className={data.liClass}>
                          <Link1
                            activeClass="active"
                            to={data.route}
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out flex items-center"
                          >
                            <MdKeyboardArrowRight className="text-xl me-1" />
                            {data.title}
                          </Link1>
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
                          <Link1
                            href={data.route}
                            className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out flex items-center"
                          >
                            <MdKeyboardArrowRight className="text-xl me-1" />{" "}
                            {data.title}
                          </Link1>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-1 md:col-span-4">
                    <h5 className="tracking-[1px] text-gray-100 font-semibold">
                      Contact Us
                    </h5>
                    <p className="mt-6">Get in touch with Our company</p>
                    <ul className="list-none mt-5 space-x-1 space-y-1">
                      <li className="inline">
                        <Link
                          href="https://www.linkedin.com/in/azamat-ismailov/"
                          target="_blank"
                          className="h-11 w-11 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                        >
                          <FaLinkedin className="text-sm" />
                        </Link>
                      </li>
                      <li className="inline">
                        <Link
                          href={whatsappURI}
                          target="_blank"
                          className="h-11 w-11 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                        >
                          <FaWhatsapp className="text-sm" />
                        </Link>
                      </li>
                      <li className="inline">
                        <Link
                          href={uri}
                          target="_blank"
                          className="h-11 w-11 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                        >
                          <FaPhone className="me-1 text-sm" />
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