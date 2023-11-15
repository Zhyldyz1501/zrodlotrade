"use client";
import React, { useState } from "react";
import Link from "next/link";

const CookieModal = () => {
  const [display, setDisplay] = useState(true);

  const acceptCookies = () => {
    document.cookie = "cookieAccepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    setDisplay(false);
  };

  
  return (
    <div
      className="cookie-popup fixed max-w-lg bottom-3 end-3 start-3 sm:start-0 mx-auto bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md py-6 px-6 z-50"
      style={{ display: display ? "block" : "none" }}
    >
      <p className="text-slate-400">
        This website uses{" "}
        <Link
          href="https://policies.google.com/technologies/cookies"
          target="_blank"
          className="text-emerald-600 dark:text-emerald-500 font-semibold"
        >
          cookies
        </Link>{" "}
        to provide you a great user experience. By using it, you&nbsp;
        <button
          onClick={acceptCookies}
          className="absolute border-none bg-none cursor-pointer font-semibold text-emerald-600 dark:text-emerald-500 "
        >
          Accept cookies.
        </button>
      </p>
    </div>
  );
}
export default CookieModal;
