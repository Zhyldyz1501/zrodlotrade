import "../app/assetss/css/tailwind.css";
import "../app/assetss/css/material.css";
import {
  Nunito,
  Work_Sans,
  EB_Garamond,
  Kaushan_Script,
  Alex_Brush,
} from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});
const work_sans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});
const eb_garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  weight: ["400"],
  display: "swap",
});

const kaushan = Kaushan_Script({
  subsets: ["latin"],
  variable: "--font-kaushan",
  weight: ["400"],
  display: "swap",
});

const alex = Alex_Brush({
  subsets: ["latin"],
  variable: "--font-alex",
  weight: ["400"],
  display: "swap",
});

export const metadata = {
  title: "Źródło Trade",
  description: "Make business with Zrodlo Trade",
  icons: {
    icon: "/favlogo.png", // relative to /public
  },
  
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="LTR">
      <body
        className={`${nunito.variable} ${work_sans.variable} ${eb_garamond.variable} ${kaushan.variable} ${alex.variable} font-nunito text-base text-black dark:text-white dark:bg-slate-900`}
      >{children}
      </body>
    </html>
  );
}
