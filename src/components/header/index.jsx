import React, { useEffect, useState } from "react";
import { AppBar, Box, Button, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { logout } from "../../state-management/admin/login/loginActions";
import DrawerRight from "../DrawerRight";
import { Container10 } from "../shared/CustomContainer";
import { useStyles } from "./header.style";
import { adminLinks, menuListDesktop } from "./headerData";
import "./header.css";

const Header = () => {
  const classes = useStyles();
  const location = useLocation();
  const path = location.pathname;
  const isAdmin = path.includes("admin");

  const [shrink, setShrink] = useState(false);
  const token = localStorage.getItem("token");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("lg")); // Detect medium or smaller screens

  const handleLogout = () => {
    dispatch(logout());
    navigate("/admin/login");
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShrink(true);
    } else {
      setShrink(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (path === "/admin/login" || path === "/admin/login/") return null;

  return (
    <Box className={classes.backside}>
      <AppBar
        position="fixed"
        className={`${classes.appBar} ${shrink ? classes.appBarShrink : ""}`}
      >
        <Container10>
          <Toolbar>
            {/* Logo */}
            <Box className={classes.logoLeftSide}>
              <NavLink to="/">
                <img src={require(`${process.env.REACT_APP_IMAGES_PATH}/images/logo.png`)} alt="Logo" />
              </NavLink>
            </Box>

            {/* Phone Icon */}
            {!isAdmin && !isMediumScreen && (
              <Box className={classes.phoneIcon}>
                <PhoneInTalkIcon />
              </Box>
            )}

            {/* Navigation */}
            {!isMediumScreen ? (
              <nav className="navbar">
                <ul className="menu">
                  {menuListDesktop.map((item, index) => (
                    <li key={index}>
                      {item.link == "/products" ? <a>{item.title}</a> : 
                      <NavLink to={item.link} >{item.title}</NavLink>}
                      {item.subMenu && (
                        <ul className="submenu">
                          {item.subMenu.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <NavLink to={subItem.link}>{subItem.title}</NavLink>
                              {subItem.subMenu && (
                                <ul className="submenu">
                                  {subItem.subMenu.map((subSubItem, subSubIndex) => (
                                    <li key={subSubIndex}>
                                      <NavLink to={subSubItem.link}>{subSubItem.title}</NavLink>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            ) : (
              <Box className="ml-auto">
                <DrawerRight menu={menuListDesktop} adminLinks={adminLinks} isAdmin={isAdmin} />
              </Box>
            )}

            {/* Logout Button */}
            {token && (
              <Button onClick={handleLogout} color="inherit">Logout</Button>
            )}
          </Toolbar>
        </Container10>
      </AppBar>
    </Box>
  );
};

export default Header;
