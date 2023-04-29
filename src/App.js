import {Suspense} from "react";
import { Home, About, Products, Contact, Footer } from "./pages";
import { Box } from "@mui/material";
import ResponsiveAppBar from "./components/layout/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SpinnerCircular } from "spinners-react";

function App() {
  return (
    <Suspense
      fallback={<SpinnerCircular
          size={90}
          thickness={180}
          speed={180}
          color="rgba(57, 66, 172, 1)"
          secondaryColor="rgba(57, 124, 172, 0.54)"
          style={{ display: "flex", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%) " }}
        />}
    >
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        padding="0px"
        margin="0px"
        boxSizing="border-box"
        width="100%"
      >
        <Router>
          <ResponsiveAppBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <hr width="80%" />
          <hr width="80%" />
          <Footer />
        </Router>
      </Box>
    </Suspense>
  );
}

export default App;
