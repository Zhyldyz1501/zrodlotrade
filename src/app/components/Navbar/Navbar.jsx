import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Link as Link1 } from "react-scroll";
import Image from "next/image";
import * as Icon from "react-feather";
import { FaEnvelope, FaLocationArrow, FaPhone} from "react-icons/fa";

const Navbar = ()  =>{
  const [isMenu, setisMenu] = useState(false);
  const [navbarSticky, setNavbarSticky] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", windowScroll);
    }
    window.scrollTo(0, 0);
  }, []);
  function windowScroll() {
    setNavbarSticky(
      document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50
    );
  }

  const toggleMenu = () => {
    setisMenu(!isMenu);
    if (document.getElementById("navigation")) {
      const anchorArray = Array.from(
        document.getElementById("navigation").getElementsByTagName("a")
      );
      anchorArray.forEach((element) => {
        element.addEventListener("click", (elem) => {
          const target = elem.target.getAttribute("href");
          if (target !== "") {
            if (elem.target.nextElementSibling) {
              var submenu = elem.target.nextElementSibling.nextElementSibling;
              submenu.classList.toggle("open");
            }
          }
        });
      });
    }
  };
  return (
    <nav
      id="topnav"
      className={`${navbarSticky ? "nav-sticky" : " defaultscroll"}`}
    >
      <div className="container relative">
        <Link className="logo" href="/">
          <Image
            src="/images/logo-dark.png"
            width={138}
            height={24}
            className="inline-block dark:hidden"
            alt=""
          />
          <Image
            src="/images/logo-dark.png"
            width={138}
            height={24}
            className="hidden dark:inline-block"
            alt=""
          />
        </Link>

        <div className="menu-extras">
          <div className="menu-item">
            <Link
              href="#"
              className={`navbar-toggle ${isMenu ? "open" : ""}`}
              id="isToggle"
              onClick={() => toggleMenu()}
            >
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </Link>
          </div>
        </div>
        <div id="navigation" style={{ display: isMenu ? "block" : "none" }}>
          <ul className="navigation-menu justify-end" id="navmenu-nav">
            <li className="has-submenu">
              <Link1
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className="sub-menu-item"
              >
                About Us
              </Link1>
            </li>
            <li className="has-submenu">
              <Link1
                activeClass="active"
                to="products"
                spy={true}
                smooth={true}
                duration={500}
                className="sub-menu-item"
              >
                Products
              </Link1>
            </li>
            <li className="has-submenu">
              <Link1
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                className="sub-menu-item"
              >
                Projects
              </Link1>
            </li>
            <li className="has-submenu">
              <Link1
                activeClass="active"
                to="review"
                spy={true}
                smooth={true}
                duration={500}
                className="sub-menu-item"
              >
                Review
              </Link1>
            </li>
            <li className="has-submenu">
              <Link
                href="#aboutUs"
                className="sub-menu-item"
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => setModal(!modal)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {modal ? (
          <div
            id="contactModal"
            className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40 flex items-center justify-center"
          >
            <div className="relative w-full h-auto max-w-md p-4">
              <div className="relative bg-white dark:bg-slate-900 rounded-lg shadow dark:shadow-gray-800">
                <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                  <h5 className="text-xl font-semibold">Contact Us</h5>
                  <button
                    type="button"
                    onClick={() => setModal(!modal)}
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ms-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="p-6 text-center">
                  <div className="grid lg:grid-cols-12 lg:gap-6">
                    <div className="lg:col-span-6 mb-5">
                      <div className="text-start">
                        <h1 className="font-semibold">Adress:</h1>
                        <div className="form-icon relative mt-2">
                          <FaLocationArrow className="w-4 h-4 absolute top-3 start-4" />
                          <h3 className="ps-11 w-full py-2 px-3 h-10">
                            01-227, Warszawa, ul. Jana Szymczaka 1/LU 1.
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-6 mb-5">
                      <div className="text-start">
                        <h1 className="font-semibold">Phone:</h1>
                        <div className="form-icon relative mt-2">
                          <FaPhone className="w-4 h-4 absolute top-3 start-4" />
                          <h3 className="ps-11 w-full py-2 px-3 h-10">
                            +48 600 793 088
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1">
                    <div className="mb-5">
                      <div className="text-start">
                        <h1 className="font-semibold">Email:</h1>
                        <div className="form-icon relative mt-2">
                          <FaEnvelope className="w-4 h-4 absolute top-3 start-4" />
                          <h3 className="ps-11 w-full py-2 px-3 h-10">
                            zrodlotrade@gmail.com
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
}
export default Navbar;
