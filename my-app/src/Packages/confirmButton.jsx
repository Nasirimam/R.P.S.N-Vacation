import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Center,
  Square,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ConfirmButton = ({ data, formData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const navigate = useNavigate();
  const toast = useToast();

  const pro = data.id;

  const intUserDetail = {
    name: formData.name,
    email: formData.email,
    contect: formData.number,
    city: formData.city,
    people: formData.people,
    children: formData.children,
    room: formData.room,
    date: formData.date,
    packegeID: pro,
  };

  const orderdone = async (url, data) => {
    try {
      return await axios.post(url, data);
    } catch (error) {
      console.log(error);
    }
  };

  const [userData, setUserData] = useState(null);

  const handleClickCofirm = () => {
    setUserData({ ...intUserDetail, packegeID: pro });
  };

  const handleClickonYes = () => {
    orderdone(`https://powerful-lingerie-fawn.cyclic.app/booking`, userData)
      .then((e) => console.log(e))
      .then((e) =>
        toast({
          title: "Package Added.",
          status: "success",
          duration: 9000,
          isClosable: true,
        })
      )
      .then(() => navigate("/packages"))
      .catch((e) => console.log(e));
  };

  return (
    <>
      <Button
        onClick={() => (onOpen(), handleClickCofirm())}
        w={"90%"}
        h={"50px"}
        fontSize={20}
        rightIcon={<FaArrowCircleRight />}
        bgColor={"blue.400"}
        _hover={{ bgColor: "blue.300" }}
        color={"whiteAlpha.900"}
        disabled={
          formData.name.length == 0 ||
          formData.email.length == 0 ||
          formData.number.length == 0 ||
          formData.city.length == 0 ||
          formData.people.length == 0 ||
          formData.date.length == 0
        }
      >
        Confirm
      </Button>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader color={"blue.400"}>
            {formData.name} Please Check Your Details
          </AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody display={"flex"} flexDir={"column"} gap={2}>
            <Box fontSize={16} fontWeight={"semibold"}>
              <span style={{ color: "#3182CE" }}>Name : </span>
              {formData.name}
            </Box>
            <Box fontSize={16} fontWeight={"semibold"}>
              <span style={{ color: "#3182CE" }}>Email : </span>
              {formData.email}
            </Box>
            <Box fontSize={16} fontWeight={"semibold"}>
              <span style={{ color: "#3182CE" }}>Number : </span>

              {formData.number}
            </Box>
            <Box fontSize={16} fontWeight={"semibold"}>
              <span style={{ color: "#3182CE" }}>City : </span>

              {formData.city}
            </Box>
            <Box fontSize={16} fontWeight={"semibold"}>
              <span style={{ color: "#3182CE" }}>Number of Rooms : </span>

              {formData.room}
            </Box>
            <Box fontSize={16} fontWeight={"semibold"}>
              <span style={{ color: "#3182CE" }}>Number of Guest : </span>

              {formData.people}
            </Box>
            <Box fontSize={16} fontWeight={"semibold"}>
              <span style={{ color: "#3182CE" }}>Number of Children : </span>

              {formData.children}
            </Box>
            <Box fontSize={16} fontWeight={"semibold"}>
              <span style={{ color: "#3182CE" }}>Check In Date : </span>
              {formData.date}
            </Box>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose} colorScheme="red">
              No
            </Button>
            <Button
              bgColor={"blue.400"}
              _hover={{ bgColor: "blue.300" }}
              color={"whiteAlpha.900"}
              ml={3}
              onClick={handleClickonYes}
            >
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default ConfirmButton;
