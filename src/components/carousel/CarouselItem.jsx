import React from 'react';
import {Paper, Button, Box} from '@mui/material'

const CarouselItem = ({image, id, value}) => {
  return (
    <Paper>
      <Box
        boxSizing="border-box"
        style={{ height: "1000px", width: "100%", objectFit: "cover" }}
      >
        <img
          src={image.value}
          alt="carouselPhotos"
          style={{ height: "1000px", width: "100%", objectFit: "cover" }}
        />
      </Box>
    </Paper>
  );
}

export default CarouselItem;