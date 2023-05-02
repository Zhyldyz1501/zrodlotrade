import React from 'react';
import {  Box, Typography } from "@mui/material";
import { contact, logo } from "../assetss/index";
import { FaPhone, FaEnvelope, FaBuilding } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const {t} = useTranslation("contact")
  return (
    <Box
      boxSizing="border-box"
      style={{ height: "1000px", width: "100%", objectFit: "cover" }}
    >
      <img
        src={contact}
        alt="contactUs"
        style={{ height: "1000px", width: "100%", objectFit: "cover" }}
      />
      <Box
        width={{ lg: "60%", sm: "40%", md: "40%", xs: "70%" }}
        top={{ lg: "60%", sm: "60%", md: "60%", xs: "50%" }}
        left={{ lg: "50%", sm: "50%", md: "50%", xs: "50%" }}
        boxSizing="border-box"
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          alignItems: "center",
          position: "absolute",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          backgroundColor: "rgb(0,0,0)",
          backgroundColor: "rgba(0,0,0, 0.4)",
          borderRadius: "20px",
          color: "white",
          fontWeight: "bold",
          padding: "30px",
          textAlign: "center",
        }}
      >
        <Typography
          fontSize={{ lg: "35px", md: "35px", sm: "20px" }}
          fontWeight={{ lg: "bold", md: "bold", sm: "normal" }}
          style={{
            transition: "transform .3s cubicBezier(.3, 0, .3, 1)",
            opacity: ".3s linear",
            transitionDelay: "calc( 20ms * var(--char-index) )",
          }}
        >
          {t("textone")}
          <br />
        </Typography>
        <hr
          style={{
            width: "60%",
            marginRight: "auto",
            marginLeft: "auto",
            backgroundColor: "#0750b7",
            height: "2px",
            border: "none",
            borderRadius: "2px",
          }}
        />
        <Typography
          fontSize={{ lg: "40px", sm: "15px", md: "25px" }}
          margin={{ lg: "10px", sm: "5px" }}
          style={{
            transition: "transform .3s cubicBezier(.3, 0, .3, 1)",
            opacity: ".3s linear",
            transitionDelay: "calc( 20ms * var(--char-index) )",
          }}
        >
          <ul>
            <li className="py-2 flex space-between">
              <FaEnvelope sx={{ size: { lg: 55, sm: 55, xs: 45, md: 45 } }} />
              <span className="ml-4"> zrodlotrade@gmail.com</span>
            </li>

            <li className="py-2 flex space-between">
              <FaPhone sx={{ size: { lg: 55, sm: 55, xs: 45, md: 45 } }} />{" "}
              <span className="ml-4">+48600793088</span>
            </li>
            <li className="flex space-between py-3">
              <FaBuilding size={35} sx={{ size: { lg: 185, md: 45 } }} />
              <span className="ml-4">
                {t("texttwo")}
              </span>
            </li>
          </ul>
        </Typography>
        <Box
          src={logo}
          alt="zrodlotrade"
          component="img"
          sx={{
            height: 253,
            width: 370,
            maxHeight: { xs: 113, md: 207, lg: 280 },
            maxWidth: { xs: 130, md: 280, lg: 350 },
          }}
        />
      </Box>
    </Box>
  );
}

export default Contact