import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

const DeleteItem = () => {
  const [id, setId] = useState("");
  const toast = useToast();

  const handleChange = (e) => {
    setId(e.target.value);
  };

  const deleteByid = async (url) => {
    return await axios.delete(url);
  };

  const handleClick = () => {
    if (id) {
      deleteByid(`https://fantastic-lab-coat-moth.cyclic.app/Package/${id}`)
        .then(
          (e) => (
            setId(""),
            toast({
              title: "Package Deleted",
              status: "warning",
              duration: 9000,
              isClosable: true,
            })
          )
        )
        .catch(
          (e) => (
            setId(""),
            toast({
              title: "Package Deleted",
              status: "warning",
              duration: 9000,
              isClosable: true,
            })
          )
        );
    }
  };

  return (
    <Box w={"50%"} margin={"auto"}>
      <FormControl mt={6}>
        <FormLabel>Delete Product</FormLabel>
        <Input
          placeholder="Give The Product ID"
          onChange={handleChange}
          value={id}
        />
      </FormControl>
      <Flex mt={4} justifyContent={"center"}>
        <Button
          onClick={handleClick}
          bgColor={"red.500"}
          _hover={{ bgColor: "red.400" }}
          color={"whiteAlpha.900"}
        >
          Delete
        </Button>
      </Flex>
    </Box>
  );
};

export default DeleteItem;
