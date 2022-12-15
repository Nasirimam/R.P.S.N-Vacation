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

const Signup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [yourEmail, setYourEmail] = useState("");
  const [yourPassword, setYourPassword] = useState("");
  const [yourName, setYourName] = useState("");
  const [loading, setloading] = useState(false);
  const [error, setError] = useState("");
  const { isAuth, setIsAuth } = useContext(ShowContext);


  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        setIsAuth(true);
      })
      .catch((error) => {
        alert("Try again");
      });
  };







  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);
    createUserWithEmailAndPassword(auth, yourEmail, yourPassword)
      .then((res) => {
        setIsAuth(true);
        // console.log(res)
        alert("Signup Successful !");
        setloading(false);
      })
      .then((err) => {
        setError(err);
      });
  };

  return (
    <>
      <Box onClick={onOpen} color="#2f9bdb">
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
          <ModalHeader>Sign Up</ModalHeader>
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
            onClick={signInWithGoogle}
          >
            <FcGoogle style={{ paddingRight: "5px" }} size={28} />
            Log in with google
          </Button>
          <Box textAlign="center">OR</Box>

          <ModalCloseButton />

          <ModalBody pb={6}>

            <FormControl mt={4}>
              <FormLabel color="blackAlpha.900">Full Name</FormLabel>
              <Input
                type="text"
                placeholder="Full Name"
                onChange={(e) => setYourName(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel color="blackAlpha.900">Enter Email Address</FormLabel>
              <Input
                type="email"
                placeholder="Enter Email"
                onChange={(e) => setYourEmail(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel color="blackAlpha.900">Enter Password</FormLabel>
              <Input
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
            By signng up , you agree to R.P.S.N vaccation's terms and conditions
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
            color="blackAlpha.900"
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
