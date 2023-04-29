import React from 'react';
import { Box, Stack } from '@mui/material';
import Carousels from "../components/carousel/Carousel";
import { About, Products } from './index.js';
import Footer from './Footer';



const Home = () => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      padding={0}
      margin={0}
      boxSizing="border-box"
      width="100%"
    >
      <Stack
        width="100%"
        height="30%"
        gap={2}
        direction={{ xs: "column", lg: "row" }}
        display="flex"
        flexDirection="column"
        flexWrap="wrap"
        alignItems="center"
        marginBottom="50px"
      >
        <Carousels />
      </Stack>
      <hr width="80%" />
      <hr width="80%" />
      <About />
      <hr width="80%" />
      <hr width="80%" />
      <Products />
      <hr width="80%" />
    </Box>
  );
}

export default Home;