import { Box, Image, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaInstagram, FaFacebookSquare, FaTwitterSquare, FaYoutube, FaPinterestSquare, FaSatelliteDish } from "react-icons/fa"
import style from "./Footer.module.css"
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <div>
            <br />
            <hr />
            <Box id={style.footer} >
                <Box>
                    <Box align={"stretch"}>
                        <Box><Image src='https://cdn1.tripoto.com/assets/2.9/img/logo/header-blue.svg' /></Box>
                        <Box fontSize="10px" h="10px" color={"black"}>India's Largest Travel Community</Box>
                        <Box mt="1rem" display="flex" gap={1} backgroundColor="black">
                            <a href="https://www.facebook.com/">
                                <FaFacebookSquare cursor="pointer" size={25} />
                            </a>
                            <a href="">
                                <FaTwitterSquare cursor="pointer" size={25} />
                            </a>

                            <a href="https://www.instagram.com/">
                                <FaInstagram cursor="pointer" size={25} />
                            </a>
                            <a href="https://www.youtube.com/">
                                <FaYoutube cursor="pointer" size={25} />
                            </a>
                            <a href="">
                                <FaPinterestSquare cursor="pointer" size={25} />
                            </a>
                            <FaSatelliteDish cursor="pointer" size={25} />
                        </Box>
                        <Box mt="1rem" ml="1rem"><Image cursor="pointer" w="120px" h="60px" src='https://cdn1.tripoto.com/assets/2.9/img/logo/download-android-app.svg' /></Box>
                    </Box>
                </Box>
                <Box >
                    <VStack mt="20px" align='stretch' color={"black"}>
                        <Box fontWeight="500" fontSize="14px" color={"black"}>About Tripoto</Box>
                        <Box h="14px" cursor="pointer" fontSize="12px" color={"black"}>How It Works</Box>
                        <Link to="">
                            <Box h="14px" cursor="pointer" fontSize="12px" color={"black"}>FAQ’s</Box>
                        </Link>
                        <Link to="">
                            <Box h="14px" cursor="pointer" fontSize="12px" color={"black"}>Privacy Policy</Box>
                        </Link>
                        <Link to="">
                            <Box h="14px" cursor="pointer" fontSize="12px" color={"black"}>Terms & Conditions</Box>
                        </Link>
                        <Box h="14px" cursor="pointer" fontSize="12px" color={"black"}>Careers</Box>
                        <Box h="14px" cursor="pointer" fontSize="12px" color={"black"}>Contact Us</Box>
                    </VStack>
                </Box>
                <Box>
                    <VStack mt="20px" align='stretch'>
                        <Box fontWeight="500" fontSize="14px" color={"black"}>Products</Box>
                        <Box h="14px" cursor="pointer" fontSize="12px" color={"black"}>Tour Packages</Box>
                        <Box h="14px" cursor="pointer" fontSize="12px" color={"black"}>Travel Guides</Box>
                        <Box h="14px" cursor="pointer" fontSize="12px" color={"black"}>Trips & Itineraries</Box>
                        <Box h="14px" cursor="pointer" fontSize="12px" color={"black"}>Weekend Getaways</Box>
                        <Box h="14px" cursor="pointer" fontSize="12px" color={"black"}>Places to Visit</Box>
                        <Box h="14px" cursor="pointer" fontSize="12px" color={"black"}>Other Travel Categories</Box>
                        <Box h="14px" cursor="pointer" fontSize="12px" color={"black"}>Tripoto Forum</Box>
                        <Box h="14px" cursor="pointer" fontSize="12px"  color={"black"}>Honeymoon Packages </Box>
                    </VStack>
                </Box>
                <Box>
                    <VStack mt="20px" align='stretch'>
                        <Box fontWeight="500" fontSize="14px"  color={"black"}>Important Travel Links</Box>
                        <Box h="14px" cursor="pointer" fontSize="12px"  color={"black"}>Goa Tourism</Box>
                        <Box h="14px" cursor="pointer" fontSize="12px"  color={"black"}>Dubai Tourism</Box>
                        <Box h="14px" cursor="pointer" fontSize="12px"  color={"black"}>Singapore Tourism</Box>
                        <Box h="14px" cursor="pointer" fontSize="12px"  color={"black"}>Kerala Tourism</Box>
                        <Box h="14px" cursor="pointer" fontSize="12px"  color={"black"}>Manali Tourism</Box>
                        <Box h="14px" cursor="pointer" fontSize="12px"  color={"black"}>Bali Tourism</Box>
                        <Box h="14px" cursor="pointer" fontSize="12px"  color={"black"}>Sri Lanka Tourism</Box>
                        <Box h="14px" cursor="pointer" fontSize="12px"  color={"black"}>Honeymoon Destinations In India </Box>
                    </VStack>
                </Box>
                <Box>
                    <VStack mt="20px" align='stretch'>
                        <Box fontWeight="500" fontSize="14px"  color={"black"}>Partner Programs</Box>
                        <Box h="14px" cursor="pointer" fontSize="12px"  color={"black"}>Buy Travel Leads</Box>
                        <Box h="14px" cursor="pointer" fontSize="12px"  color={"black"}>Partner With Us</Box>
                        <Box h="14px" cursor="pointer" fontSize="12px"  color={"black"}>Earn Credits</Box>
                        <Box h="14px" cursor="pointer" fontSize="12px"  color={"black"}>Get Paid To Travel</Box>
                        <Box h="14px" cursor="pointer" fontSize="12px"  color={"black"}>Import Blog To Itinerary</Box>
                    </VStack>
                </Box>
            </Box>
        </div>
    )
}

export default Footer