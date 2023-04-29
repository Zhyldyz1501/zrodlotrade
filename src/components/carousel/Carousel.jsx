import React, {useState} from 'react';
import Carousel from "react-material-ui-carousel";
import {  Box, Typography, Avatar, CardMedia } from "@mui/material";
import { cotton, fabrics, fabrics_two, logo } from '../../assetss';
import CarouselItem from './CarouselItem';
import { useTranslation } from 'react-i18next';


const Carousels = () => {
  const {t} = useTranslation("home")

  const arr = [
    {
      value: cotton,
    },
    {
      value: fabrics,
    },
    {
      value: fabrics_two,
    },
  ];

  return (
    <Box
      width="100%"
      height={{ lg: "100%", sm: "70%", md: "90%", xs: "70%" }}
      boxSizing="border-box"
    >
      <Box
        width={{ lg: "60%", sm: "40%", md: "40%", xs: "50%" }}
        top={{ lg: "60%", sm: "60%", md: "50%", xs: "50%" }}
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
          backgroundColor: "rgba(0,0,0, 0.4)",
          borderRadius: "20px",
          color: "white",
          fontWeight: "bold",
          padding: "30px",
          textAlign: "center",
        }}
      >
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
        <Typography
          fontSize={{ lg: "50px", md: "35px", sm: "20px" }}
          fontWeight={{ lg: "bold", md: "bold", sm: "normal" }}
          style={{
            transition: "transform .3s cubicBezier(.3, 0, .3, 1)",
            opacity: ".3s linear",
            transitionDelay: "calc( 20ms * var(--char-index) )",
          }}
        >
          {t("textone")}
        </Typography>
        <hr
          style={{
            width: "60%",
            marginRight: "auto",
            marginLeft: "auto",
            backgroundColor: "#0750b7",
            height: "3px",
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
          {t("texttwo")}
        </Typography>
      </Box>

      <Carousel boxSizing="border-box">
        {arr.map((image, id) => (
          <CarouselItem image={image} key={id} />
        ))}
      </Carousel>
    </Box>
  );
}

export default Carousels