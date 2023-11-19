// "use client";
// import React, { useState, useEffect } from "react";
// import { setVisitorPreferences, getVisitorPreferences } from "../../../../utils/prefernces";
// import Link from "next/link";

// const CookieModal = () => {
  
// const [preferencesSet, setPreferencesSet] = useState(false);

// const acceptCookies = () => {
//   setVisitorPreferences({ theme: "dark" }, { display: false });
//   setPreferencesSet(true);
// };

// useEffect(() => {
//   if (!preferencesSet) {
//     const visitorPreferences = getVisitorPreferences();
//     // Do something with the preferences if needed
//     setPreferencesSet(true);
//   }
// }, [preferencesSet]);

  
//   return (
//     <div
//       className="cookie-popup fixed max-w-lg bottom-3 end-3 start-3 sm:start-0 mx-auto bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md py-6 px-6 z-50"
//       // style={{ display: display ? "block" : "none" }}
//     >
//       <p className="text-slate-400">
//         This website uses{" "}
//         <Link
//           href="https://policies.google.com/technologies/cookies"
//           target="_blank"
//           className="text-emerald-600 dark:text-emerald-500 font-semibold"
//         >
//           cookies
//         </Link>{" "}
//         to provide you a great user experience. By using it, you&nbsp;
//         <button
//           onClick={acceptCookies}
//           className="absolute border-none bg-none cursor-pointer font-semibold text-emerald-600 dark:text-emerald-500 "
//         >
//           Accept cookies.
//         </button>
//       </p>
//     </div>
//   );
// }
// export default CookieModal;
