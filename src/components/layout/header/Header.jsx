import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { logo } from "../../../assetss/index";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import i18next from "i18next";
import { Select } from "@mui/material";




const pages = ["Home", "About us", "Contact us"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const { i18n, t } = useTranslation(["header"])
   
  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  }


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="default" width="100%">
      <Container maxWidth="true">
        <Toolbar disableGutters>
          <Select
            sx={{
              position: "relative",
              left: { xs: "0%", sm: "0%", md: "85%", lg: "90%" },
            }}
            value={localStorage.getItem("i18nextLng")}
            onChange={handleLanguageChange}
          >
            <MenuItem value="en">EN</MenuItem>
            <MenuItem value="pl">PL</MenuItem>
          </Select>
          <Box
            src={logo}
            alt="zrodlotrade"
            component="img"
            sx={{
              height: 163,
              width: 170,
              maxHeight: { xs: 80, md: 160, lg: 183 },
              maxWidth: { xs: 70, md: 170, lg: 210 },
              display: { xs: "none", md: "none" },
              mr: 1,
              marginLeft: "30px",
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".5rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                id="menuItem"
                onClick={handleCloseNavMenu}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Link to="/">
                  <Button>{t("home")}</Button>
                </Link>
                <Link to="/about">
                  <Button>{t("aboutus")}</Button>
                </Link>
                <Link to="/products">
                  <Button>{t("ourproducts")}</Button>
                </Link>
                <Link to="/contact">
                  <Button>{t("contactus")}</Button>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <Box
            src={logo}
            alt="zrodlotrade"
            component="img"
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1,
              height: 163,
              width: 170,
              maxHeight: { xs: 103, md: 160, lg: 183 },
              maxWidth: { xs: 120, md: 170, lg: 210 },
              marginTop: "10px",
            }}
          />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link to="/">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "default", display: "block" }}
              >
                {t("home")}
              </Button>
            </Link>
            <Link to="/about">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "default", display: "block" }}
              >
                {t("aboutus")}
              </Button>
            </Link>
            <Link to="/products">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "default", display: "block" }}
              >
                {t("ourproducts")}
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "default", display: "block" }}
              >
                {t("contactus")}
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

