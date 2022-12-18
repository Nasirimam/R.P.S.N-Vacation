import { Box, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";
import OrderItem from "./orders";

const AdminNav = ({ setShowPage }) => {
  return (
    <Box mb={10}>
      <Flex justifyContent={"space-evenly"} color={"blue.400"}>
        <Heading
          borderBottomColor={"blue.400"}
          borderBottom={"2px"}
          cursor={"pointer"}
          onClick={() => setShowPage("AddProdct")}
          size={"md"}
        >
          Add Packages
        </Heading>
        <Heading
          borderBottomColor={"blue.400"}
          borderBottom={"2px"}
          cursor={"pointer"}
          onClick={() => setShowPage("OrderItem")}
          size={"md"}
        >
          Orders
        </Heading>
        <Heading
          borderBottomColor={"blue.400"}
          borderBottom={"2px"}
          cursor={"pointer"}
          onClick={() => setShowPage("DeleteItem")}
          size={"md"}
        >
          Delete
        </Heading>
      </Flex>
    </Box>
  );
};
export default AdminNav;
