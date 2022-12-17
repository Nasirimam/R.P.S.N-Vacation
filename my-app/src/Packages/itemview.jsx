import {
  Box,
  Square,
  Image,
  Heading,
  Flex,
  Avatar,
  Center,
  Divider,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  FaBinoculars,
  FaGem,
  FaHamburger,
  FaHiking,
  FaHome,
  FaMountain,
  FaPersonBooth,
  FaTree,
  FaWifi,
} from "react-icons/fa";
import { useParams } from "react-router-dom";

const ItemView = ({ data }) => {

  return (
    <Box border={"0px solid blue"}>
      <Box w={"100%"}>
        <Image src={data.image} w={"100%"} borderRadius={0} />
      </Box>
      <Box mt={2} mb={3}>
        <Heading>{data.title}</Heading>
      </Box>
      <Flex>
        <Avatar
          size={{
            base: "xs",
            sm: "xs",
            md: "sm",
            xl: "sm",
            "2xl": "md",
          }}
          name={data.brand_name}
          src={data.brand_logo}
        />
        <Center
          fontSize={{
            base: "16px",
            sm: "13px",
            md: "16px",
            xl: "20px",
            "2xl": "20px",
          }}
        >
          {data.brand_name}
        </Center>
      </Flex>
      <Divider />
      <Flex
        mt={2}
        justifyContent={"space-between"}
        alignItems={"center"}
        px={4}
      >
        <Button
          color={"whiteAlpha.900"}
          bgColor={"blue.400"}
          _hover={{ bgColor: "blue.300" }}
          w={28}
        >
          {data.button}
        </Button>
        <Center fontSize={20} fontWeight={"bold"}>
          {data.price}/person
        </Center>
      </Flex>
      <Box>
        <Box fontSize={18} fontWeight={"semibold"} color={"gray.500"}>
          Location
        </Box>
        <Box
          fontSize={20}
          fontWeight={"semibold"}
          color={"blackAlpha.900"}
          mb={4}
        >
          {data.location}
        </Box>
      </Box>
      <Box fontSize={18} fontWeight={"semibold"} color={"gray.500"}>
        Highlights
      </Box>
      <Flex
        wrap={"wrap"}
        columnGap={8}
        rowGap={3}
        fontSize={18}
        fontWeight={"semibold"}
      >
        <Center gap={2}>
          <FaHamburger />
          Meals
        </Center>
        <Center gap={2}>
          <FaBinoculars />
          Sightseeing
        </Center>
        <Center gap={2}>
          {" "}
          <FaHome />
          Homestay
        </Center>
        <Center gap={2}>
          <FaHiking />
          Adventure
        </Center>
        <Center gap={2}>
          <FaMountain /> Hill Station
        </Center>
        <Center gap={2}>
          <FaTree /> Nature
        </Center>
        <Center gap={2}>
          <FaPersonBooth /> Wellness
        </Center>
        <Center gap={2}>
          <FaGem /> Hidden Gem
        </Center>
        <Center gap={2}>
          <FaWifi />
          Wi-Fi
        </Center>
      </Flex>
    </Box>
  );
};

export default ItemView;
