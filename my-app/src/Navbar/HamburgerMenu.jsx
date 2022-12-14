import {
    Avatar,
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Image,
    useDisclosure,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { ShowContext } from "../Context/Context";

function HamburgerMenu() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [placement, setPlacement] = React.useState("top");
    const { show, setShow } = useContext(ShowContext);


    return (
        <>
            <Box display={"flex"} justifyContent="space-between" padding={"10px"} backgroundColor="#2f9bdb">
                <NavLink to="/">
                    <Image src="https://cdn1.tripoto.com/assets/2.9/img/logo/tripoto.svg" />
                </NavLink>
            </Box>

            <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent bgColor="#2f9bdb">
                    <DrawerHeader borderBottomWidth="1px">
                        <NavLink to="/">
                            <Image src="https://cdn1.tripoto.com/assets/2.9/img/logo/tripoto.svg" />
                        </NavLink>
                    </DrawerHeader>
                    <DrawerBody
                        display="flex"
                        flexDirection="column"
                        gap="20px"
                        color={"white"}
                    >
                        <NavLink to="/inspiration/singapore" isOpen={onClose}>
                            Visit Singapore
                        </NavLink>
                        <NavLink to="inspiration/beach">Beaches</NavLink>
                        <NavLink to="/packages">Packages</NavLink>

                        <br />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}

export default HamburgerMenu;
