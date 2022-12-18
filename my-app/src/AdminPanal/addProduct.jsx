import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  useToast,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { ShowContext } from "../Context/ShowContext";

const AddProdct = () => {
  const intProductData = {
    image: "",
    type: "",
    title: "",
    location: "",
    button: "",
    price: ``,
    person: "/person",
    quotes: "Get Quotes",
    brand_logo: "",
    brand_name: "",
  };

  const postPackages = async (url, data) => {
    try {
      return await axios.post(url, data);
    } catch (error) {
      console.log(error);
    }
  };

  const [form, setForm] = useState(intProductData);
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleClick = () => {
    if (
      form.image &&
      form.type &&
      form.title &&
      form.location &&
      form.button &&
      form.price &&
      form.brand_logo &&
      form.brand_name
    ) {
      postPackages("https://fantastic-lab-coat-moth.cyclic.app/Package", form)
        .then(
          () => (
            setForm(intProductData),
            toast({
              title: "Package Added.",
              status: "success",
              duration: 9000,
              isClosable: true,
            })
          )
        )
        .catch(() => setForm(intProductData));
    }
  };

  return (
    <Box>
      <Box w={"50%"} margin={"auto"} mt={10}>
        <FormControl>
          <FormLabel>Product Name : </FormLabel>
          <Input name="title" onChange={handleChange} value={form.title} />
          <FormLabel>Package Image Link : </FormLabel>
          <Input
            type="url"
            name="image"
            onChange={handleChange}
            value={form.image}
          />
          <FormLabel>Product Type : </FormLabel>
          <Input name="type" onChange={handleChange} value={form.type} />
          <FormLabel>Product Location : </FormLabel>
          <Input
            name="location"
            onChange={handleChange}
            value={form.location}
          />
          <FormLabel>Product Validity : </FormLabel>
          <Select
            placeholder="Select Validity"
            name="button"
            onChange={handleChange}
            value={form.button}
          >
            <option value="1D-1N">1D-1N</option>
            <option value="2D-1N">2D-1N</option>
            <option value="1D-2N">1D-2N</option>
            <option value="2D-3N">2D-3N</option>
            <option value="3D-2N">3D-2N</option>
            <option value="4D-3N">4D-3N</option>
            <option value="3D-4N">3D-4N</option>
            <option value="5D-4N">5D-4N</option>
            <option value="4D-5N">4D-5N</option>
          </Select>
          <FormLabel>Product Price : </FormLabel>
          <Input
            type="number"
            name="price"
            onChange={handleChange}
            value={form.price}
          />
          <FormLabel>Product Brand Logo : </FormLabel>
          <Input
            type="url"
            name="brand_logo"
            onChange={handleChange}
            value={form.brand_logo}
          />
          <FormLabel>Product Brand Name : </FormLabel>
          <Input
            name="brand_name"
            onChange={handleChange}
            value={form.brand_name}
          />
        </FormControl>
        <Flex justifyContent={"center"} mt={4}>
          <Button
            onClick={handleClick}
            bgColor={"blue.500"}
            _hover={{ bgColor: "blue.400" }}
            color={"whiteAlpha.900"}
          >
            ADD PACKAGES
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default AddProdct;
