import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box, Typography } from "@mui/material";
import { cotton_two, fabrics_three, yarns, } from '../assetss/index';
import { useTranslation } from "react-i18next";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  const {t} = useTranslation("products")
    return (
      <Box
        width="80%"
        display="flex"
        flexDirection="row"
        sx={{
          marginLeft: "10%",
          marginRight: "8%",
          marginTop: { xs: "40px", sm: "40px", lg: "70px" },
          marginBottom: { xs: "40px", sm: "40px", lg: "70px" },
        }}
      >
        <Box sx={{ width: "60%" }}>
          <ImageList variant="quilted" cols={2} rowHeight={360}>
            {itemData.map((item) => (
              <ImageListItem
                key={item.img}
                cols={item.cols || 1}
                rows={item.rows || 1}
              >
                <img
                  {...srcset(item.img, 121, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
        <Box
          borderRadius="15px"
          padding="20px"
          mt="25px"
          textAlign="start"
          sx={{ width: "40%", marginLeft: "30px" }}
        >
          <Typography
            sx={{
              fontSize: { lg: "35px", md: "30px", sm: "25px", xs: "18px" },
              textAlign: "center",
            }}
            fontWeight={800}
            color="primary"
          >
            {t("textone")}
          </Typography>
          <br />
          <hr
            style={{
              width: "60%",
              marginRight: "auto",
              marginLeft: "auto",
              marginBottom: "30px",
              backgroundColor: "#0750b7",
              height: "1px",
              border: "none",
              borderRadius: "2px",
            }}
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontSize: { lg: "25px", md: "20px", sm: "16px", xs: "12px" },
                marginTop: "15px",
              }}
            >
              {t("texttwo")}
              <br />({t("textthree")})
            </Typography>
            <Typography
              sx={{
                fontSize: { lg: "25px", md: "20px", sm: "16px", xs: "12px" },
                marginTop: "15px",
              }}
            >
              {t("textfour")}
            </Typography>
            <Typography
              sx={{
                fontSize: { lg: "25px", md: "20px", sm: "16px", xs: "12px" },
                marginTop: "15px",
              }}
            >
              {t("textfive")}
            </Typography>
            <Typography
              sx={{
                fontSize: { lg: "25px", md: "20px", sm: "16px", xs: "12px" },
                marginTop: "15px",
              }}
            >
              {t("textsix")}
            </Typography>
            <Typography
              sx={{
                fontSize: { lg: "25px", md: "20px", sm: "16px", xs: "12px" },
                marginTop: "15px",
              }}
            >
              {t("textseven")}
            </Typography>
            <Typography
              sx={{
                fontSize: { lg: "25px", md: "20px", sm: "16px", xs: "12px" },
                marginTop: "15px",
              }}
            >
              {t("texteight")}
            </Typography>
            <Typography
              sx={{
                fontSize: { lg: "25px", md: "20px", sm: "16px", xs: "12px" },
                marginTop: "15px",
              }}
            >
              {t("textnine")}
            </Typography>
            <Typography
              sx={{
                fontSize: { lg: "25px", md: "20px", sm: "16px", xs: "12px" },
                marginTop: "15px",
              }}
            >
              {t("textten")}
            </Typography>
            <Typography
              sx={{
                fontSize: { lg: "25px", md: "20px", sm: "16px", xs: "12px" },
                marginTop: "15px",
              }}
            >
              {t("texteleven")}
            </Typography>
          </Box>
        </Box>
      </Box>
    );
}

const itemData = [
  {
    img: cotton_two,
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: fabrics_three,
    title: "Basketball",
  },
  {
    img: yarns,
    title: "Fern",
  },
];
