import { Box, Typography } from "@mui/material";
import { logo, aboutUs } from '../assetss/index';
import { useTranslation } from "react-i18next";

const About = () => {
  
  const { t } = useTranslation(["about"]);

  return (
    <Box
      display="flex"
      flexDirection="row"
      width="80%"
      mt="4%"
      ml="9%"
      mr="8%"
      mb="5%"
    >
      <Box
        width={{ lg: "50%", sm: "50%", md: "50%", xs: "50%" }}
        display="flex"
        position="relative"
        left="50%"
      >
        <img
          src={aboutUs}
          alt="aboutUs"
          style={{ height: "1000px", width: "100%", objectFit: "cover" }}
        />
        <Box
          src={logo}
          alt="zrodlotrade"
          component="img"
          alignSelf="center"
          position="relative"
          right="80%"
          top="40%"
          sx={{
            height: 180,
            width: 190,
            maxHeight: { xs: 103, md: 207, lg: 280 },
            maxWidth: { xs: 120, md: 280, lg: 350 },
          }}
        />
      </Box>

      <Box
        width={{ lg: "50%", sm: "50%", md: "50%", xs: "50%" }}
        boxSizing="border-box"
        style={{
          height: "1000px",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          alignItems: "center",
          position: "relative",
          right: "50%",
          zIndex: 2,
          backgroundColor: "rgba(0,0,0, 0.1)",
          color: "inherit",

          padding: "30px",
          textAlign: "center",
        }}
      >
        <Box display="flex" flexDirection="column" marginTop="30px">
          <Typography
            sx={{
              fontSize: { lg: "35px", md: "30px", sm: "25px", xs: "18px" },
            }}
            fontWeight={800}
            color="primary"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
          >
            {t("header")}
          </Typography>
          <hr
            style={{
              width: "60%",
              marginRight: "auto",
              marginLeft: "auto",
              marginTop: "18px",
              marginBottom: "30px",
              backgroundColor: "#0750b7",
              height: "1px",
              border: "none",
              borderRadius: "2px",
            }}
          />
          <Typography
            sx={{
              fontSize: { lg: "23.5px", md: "18px", sm: "14px", xs: "11px" },
            }}
          >
            {t("texttwo")}
          </Typography>
          <br />
          <Typography
            sx={{
              fontSize: { lg: "23.5px", md: "18px", sm: "14px", xs: "11px" },
            }}
          >
            {t("textthree")}
          </Typography>
          <br />
          <Typography
            sx={{
              fontSize: { lg: "23.5px", md: "18px", sm: "14px", xs: "11px" },
            }}
          >
            {t("textfour")}
          </Typography>
          <br />
        </Box>
      </Box>
    </Box>
  );
};

export default About;
