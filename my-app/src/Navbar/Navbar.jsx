import {
  Avatar,
  Box,
  Button,
  Heading,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShowContext } from "../Context/Context";
import styles from "./Navbar.module.css";
import image from "../Logo/rb.jpg"
export function Navbar() {
  const [color, setColor] = useState(false);
  const { show, setShow } = useContext(ShowContext);



  const changeColor = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
  }, []);
  return (
    <Box
      id={styles.navbar}
      style={
        show
          ? { backgroundColor: "#2f9bdb", transition: "all 0.5s ease-out" }
          : { backgroundColor: "transparent", transition: "all 0.5s ease-out" }
      }
    >
      <Box>
        <NavLink to="/">
          <Image width="100px" height="30px" src={image} />
          {/* https://cdn1.tripoto.com/assets/2.9/img/logo/tripoto.svg */}
        </NavLink>
      </Box>
      <Box>
        {show && (
          <Input
            className={styles.navSearch}
            transition="all 0.5s ease-out"
            bg="white"
            placeholder="Search for itineraries, destinations, hotels or activities"
            width="500px"
            height="30px"
          />
        )}
      </Box>
      <Box>
        <Menu>
          <MenuButton as={Box}>Inspiration </MenuButton>
          <MenuList color="black" fontSize="14px">
            <MenuItem >
              <NavLink to="/inspiration/singapore">Visit Singapore</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to="inspiration/beach">Beaches</NavLink>
            </MenuItem>
            <MenuItem>Mountain</MenuItem>
            <MenuItem>Heritage</MenuItem>
            <MenuItem>Weekend Guide</MenuItem>
            <MenuItem>Upcoming Festivals</MenuItem>
            <MenuItem>Honeymoon Packages</MenuItem>
            <MenuItem>Wildlife Tourism</MenuItem>
            <MenuItem>Roadlife Trips</MenuItem>
            <MenuItem>Getaways Guide</MenuItem>
            <MenuItem>Luxury Travel</MenuItem>
            <MenuItem>Explore More</MenuItem>
          </MenuList>
        </Menu>
        <NavLink to="#">Forum</NavLink>
        <NavLink to="/packages">Packages</NavLink>
        <Menu>
          <MenuButton as={Box}>Publish trip </MenuButton>
          <MenuList color="black" fontSize="14px">
            <MenuItem >
              <NavLink to="">Create New</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to="">Upload phtos/videos</NavLink>
            </MenuItem>
            <MenuItem>Import Blog</MenuItem>
          </MenuList>
        </Menu>
        <NavLink to="">Sign in</NavLink>
      </Box>
    </Box>
  );
}
