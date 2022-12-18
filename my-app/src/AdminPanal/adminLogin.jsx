import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Input,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  const handleChange = (e) => {
    setPass(e.target.value);
  };

  const handleAdminLogin = () => {
    if (pass) {
      if (pass == "12345678") {
        navigate("/admin");
      } else {
        toast({
          title: "Wrong Password",
          description: "Type Correct Password",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    }
  };

  return (
    <>
      <Box colorScheme="red" onClick={onOpen} cursor={"pointer"}>
        Admin
      </Box>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Confirm Admin Password
            </AlertDialogHeader>

            <AlertDialogBody>
              <Input
                type={"password"}
                isRequired
                colorScheme={"blackAlpha"}
                onChange={handleChange}
              />
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Back
              </Button>
              <Button
                onClick={() => (onClose(), handleAdminLogin())}
                ml={3}
                bgColor={"blue.500"}
                _hover={{ bgColor: "blue.400" }}
                color={"whiteAlpha.900"}
              >
                Confirm
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export default AdminLogin;
