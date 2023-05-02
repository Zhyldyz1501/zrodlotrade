import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaHome,
} from "react-icons/fa";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../assetss";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const {t} = useTranslation("footer")
  return (
    <Box
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        padding: "0px",
        margin: "0px",
        boxSizing: "border-box",
        width: "100%",
        height: "100%",
      }}
    >
      <div>
        <div>
          <Box
            src={logo}
            alt="zrodlotrade"
            component="img"
            alignSelf="center"
            sx={{
              height: 150,
              width: 160,
              maxHeight: { xs: 103, md: 197, lg: 270 },
              maxWidth: { xs: 120, md: 270, lg: 340 },
              marginLeft: "40px",
            }}
          />
          <p className="font-medium text-gray-500 ml-8">{t("textfive")}</p>
        </div>
      </div>
      <div className="lg:col-span-2  flex mt-2 py-4 ml-8">
        <div className="lg:mr-10">
          <ul className="font-medium text-gray-500 ml-25">
            <Link to="/">
              <li className="mr-24 py-4 lg:mr-50 ">{t("textone")} </li>
            </Link>
            <Link to="/about">
              <li className="mr-24 py-6 lg:mr-50"> {t("texttwo")} </li>
            </Link>
            <Link to="/products">
              <li className="mr-24 py-4 lg:mr-50">{t("textthree")}</li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-wrap">
          <Link to="/contact">
            <h6 className="font-medium text-gray-500 py-4">{t("textfour")}</h6>
          </Link>
          <ul className="flex-wrap">
            <li className="py-2 flex space-between">
              <FaEnvelope size={18} />
              <span className="ml-4"> zrodlotrade@gmail.com</span>
            </li>

            <li className="py-2 flex space-between">
              <FaPhone size={18} /> <span className="ml-4">+48600793088</span>
            </li>
            <li className="flex space-between py-3">
              <FaHome size={22} />
              <span className="ml-4">
                01-227, Warszawa, ul. Jana Szymczaka 1/LU 1,
              </span>
            </li>
          </ul>
        </div>
      </div>
    </Box>
  );
};

export default Footer;
