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
                        <Box fontSize="10px" h="10px">India's Largest Travel Community</Box>
                        <Box mt="1rem" display="flex" gap={1}>
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
                <Box>
                    <VStack mt="20px" align='stretch'>
                        <Box fontWeight="500" fontSize="14px">About Tripoto</Box>
                        <Box h="14px" cursor="pointer" fontSize="12px">How It Works</Box>
                        <Link to="">
                            <Box h="14px" cursor="pointer" fontSize="12px">FAQ’s</Box>
                        </Link>
                        <Link to="">
                            <Box h="14px" cursor="pointer" fontSize="12px">Privacy Policy</Box>
                        </Link>
                        <Link to="">
                            <Box h="14px" cursor="pointer" fontSize="12px">Terms & Conditions</Box>
                        </Link>
                        <Box h="14px" cursor="pointer" fontSize="12px">Careers</Box>
                        <Box h="14px" cursor="pointer" fontSize="12px">Contact Us</Box>
                    </VStack>
                </Box>
                <Box>
                    <VStack mt="20px" align='stretch'>
                        <Box fontWeight="500" fontSize="14px">Products</Box>
                        <Box h="14px" cursor="pointer" fontSize="12px">Tour Packages</Box>
                        <Box h="14px" cursor="pointer" fontSize="12px">Travel Guides</Box>
                        <Box h="14px" cursor="pointer" fontSize="12px">Trips & Itineraries</Box>
                        <Box h="14px" cursor="pointer" fontSize="12px">Weekend Getaways</Box>
                        <Box h="14px" cursor="pointer" fontSize="12px">Places to Visit</Box>
                        <Box h="14px" cursor="pointer" fontSize="12px">Other Travel Categories</Box>
                        <Box h="14px" cursor="pointer" fontSize="12px">Tripoto Forum</Box>
                        <Box h="14px" cursor="pointer" fontSize="12px">Honeymoon Packages </Box>
                    </VStack>
                </Box>
                <Box>
                    <VStack mt="20px" align='stretch'>
                        <Box fontWeight="500" fontSize="14px">Important Travel Links</Box>
                        <Box h="14px" cursor="pointer" fontSize="12px">Goa Tourism</Box>
                        <Box h="14px" cursor="pointer" fontSize="12px">Dubai Tourism</Box>
                        <Box h="14px" cursor="pointer" fontSize="12px">Singapore Tourism</Box>
                        <Box h="14px" cursor="pointer" fontSize="12px">Kerala Tourism</Box>
                        <Box h="14px" cursor="pointer" fontSize="12px">Manali Tourism</Box>
                        <Box h="14px" cursor="pointer" fontSize="12px">Bali Tourism</Box>
                        <Box h="14px" cursor="pointer" fontSize="12px">Sri Lanka Tourism</Box>
                        <Box h="14px" cursor="pointer" fontSize="12px">Honeymoon Destinations In India </Box>
                    </VStack>
                </Box>
                <Box>
                    <VStack mt="20px" align='stretch'>
                        <Box fontWeight="500" fontSize="14px">Partner Programs</Box>
                        <Box h="14px" cursor="pointer" fontSize="12px">Buy Travel Leads</Box>
                        <Box h="14px" cursor="pointer" fontSize="12px">Partner With Us</Box>
                        <Box h="14px" cursor="pointer" fontSize="12px">Earn Credits</Box>
                        <Box h="14px" cursor="pointer" fontSize="12px">Get Paid To Travel</Box>
                        <Box h="14px" cursor="pointer" fontSize="12px">Import Blog To Itinerary</Box>
                    </VStack>
                </Box>
            </Box>
        </div>
    )
}

export default Footer