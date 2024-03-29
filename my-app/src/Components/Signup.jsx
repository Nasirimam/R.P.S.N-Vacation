import React from "react";
import {
  Box,
  Input,
  Modal,
  ModalCloseButton,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  FormControl,
  FormLabel,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { auth } from "../firebase-config";
import { useContext } from "react";
import { ShowContext } from "../Context/ShowContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  updateCurrentUser,
  signOut,
} from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import Login from "./Login";
import { Navigate } from "react-router-dom";

const Signup = () => {
  //this is for popup window
  const { isOpen, onOpen, onClose } = useDisclosure();

  //this is login input refrence
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  //this contain email, password and name of users
  const [yourEmail, setYourEmail] = useState("");
  const [yourPassword, setYourPassword] = useState("");
  const [yourName, setYourName] = useState("");

  //this contain loding and error
  const [loading, setloading] = useState(false);
  const [error, setError] = useState("");

  //for authentication
  const { isAuth, setIsAuth } = useContext(ShowContext);

  //This Is a signup function

  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);
    createUserWithEmailAndPassword(auth, yourEmail, yourPassword)
      .then((res) => {
        setIsAuth(true);
        console.log(res);
        alert("Signup Successful !");
        <Navigate to="/Login" />;
        setloading(false);
      })
      .catch((err) => {});
  };

  return (
    <>
      <Box onClick={onOpen} color="red.500">
        Sign Up
      </Box>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size="xs"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="blackAlpha.900">Sign Up</ModalHeader>
          <Button
            backgroundColor="rgb(74,102,160)"
            color="white"
            _hover={{ bg: "rgb(74,102,160)" }}
            letterSpacing="0.6px"
            fontFamily="sans-serif"
            fontWeight="500"
            width="89%"
            margin="auto"
            marginTop="5px"
            marginBottom="5px"
          >
            <FaFacebookF style={{ paddingRight: "5px" }} size={22} />
            Log in with Facebook
          </Button>

          <Button
            backgroundColor="blue.400"
            fontWeight="500"
            letterSpacing="0.6px"
            fontFamily="sans-serif"
            width="89%"
            margin="auto"
            marginTop="5px"
            marginBottom="5px"
            // onClick={signInWithGoogle}
          >
            <FcGoogle style={{ paddingRight: "5px" }} size={28} />
            Log in with google
          </Button>
          <Box textAlign="center" color="blackAlpha.900">
            OR
          </Box>

          <ModalCloseButton />

          <ModalBody pb={6}>
            <FormControl mt={4}>
              <FormLabel color="blackAlpha.900">Full Name</FormLabel>
              <Input
                color="blackAlpha.900"
                type="text"
                placeholder="Full Name"
                onChange={(e) => setYourName(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel color="blackAlpha.900">Enter Email Address</FormLabel>
              <Input
                color="blackAlpha.900"
                type="email"
                placeholder="Enter Email"
                onChange={(e) => setYourEmail(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel color="blackAlpha.900">Enter Password</FormLabel>
              <Input
                color="blackAlpha.900"
                type="password"
                placeholder="Enter Password"
                onChange={(e) => setYourPassword(e.target.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button bg="#f27669" color="white" w="100%" onClick={handleSubmit}>
              Submit
            </Button>
          </ModalFooter>
          <Box
            textAlign="center"
            fontsize="5px"
            gap="5px"
            // color="gray"
            alignItems={"center"}
            justifyContent={"center"}
            margin="auto"
            color="blackAlpha.900"
          >
            By signing up, you agree to R.P.S.N vaccation's terms and conditions
            and privacy policy.
          </Box>
          <br />
          <Box
            textAlign="center"
            fontSize="13px"
            display="flex"
            alignItems={"center"}
            gap="5px"
            justifyContent={"center"}
            color="black"
          >
            Already registered? <Login />
          </Box>
          <br />
        </ModalContent>
      </Modal>
    </>
  );
};

export default Signup;
