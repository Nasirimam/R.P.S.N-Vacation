import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductFailed,
  getProductRequest,
  getProductSuccess,
} from "../Reducer/action";
import {
  Box,
  SimpleGrid,
  Image,
  Square,
  Flex,
  Button,
  Avatar,
  Center,
} from "@chakra-ui/react";
import { MdLocationOn } from "react-icons/md";
import { useState } from "react";

const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.nasirReducer.products);

  // const store = useSelector((store) => store);

  const [page, setPage] = useState(1);

  console.log(products);

  const getProduct = async (url) => {
    return await fetch(url);
  };

  useEffect(() => {
    dispatch(getProductRequest());
    getProduct(
      `https://fantastic-lab-coat-moth.cyclic.app/Package?_limit=9&_page=${page}`
    )
      .then((e) => e.json())
      .then((e) => dispatch(getProductSuccess(e)))
      .catch((e) => dispatch(getProductFailed()));
  }, [page]);

  return (
    <Box w={"80%"} margin={"auto"}>
      <SimpleGrid
        columns={{
          base: 1,
          sm: 2,
          md: 2,
          xl: 3,
          "2xl": 3,
        }}
        spacing={4}
      >
        {products.map((elem) => (
          <Box key={elem.id} border="2px solid red" p={3} borderRadius={5}>
            <Image src={elem.image} w="100%" h={"50%"} />
            <Box
              fontSize={{
                base: "18px",
                sm: "12px",
                md: "20px",
                xl: "18px",
                "2xl": "20px",
              }}
              mb={1}
            >
              {elem.title}
            </Box>
            <Flex justify={"space-between"} mb={2}>
              <Button
                variant={"ghost"}
                fontSize={{
                  base: "18px",
                  sm: "12px",
                  md: "18px",
                  xl: "md",
                  "2xl": "md",
                }}
                size={{
                  base: "sm",
                  sm: "xs",
                  md: "sm",
                  xl: "md",
                  "2xl": "md",
                }}
                leftIcon={<MdLocationOn />}
              >
                {elem.location}
              </Button>
              <Button
                fontSize={{
                  base: "18px",
                  sm: "12px",
                  md: "sm",
                  xl: "md",
                  "2xl": "md",
                }}
                size={{
                  base: "sm",
                  sm: "xs",
                  md: "sm",
                  xl: "md",
                  "2xl": "md",
                }}
              >
                {elem.button}
              </Button>
            </Flex>
            <Flex justify={"space-between"} alignItems={"center"} mb={1}>
              <Box
                fontSize={{
                  base: "18px",
                  sm: "12px",
                  md: "16px",
                  xl: "20px",
                  "2xl": "22px",
                }}
              >
                {elem.price} onwards
              </Box>
              <Button
                fontSize={{
                  base: "18px",
                  sm: "12px",
                  md: "sm",
                  xl: "md",
                  "2xl": "md",
                }}
                size={{
                  base: "md",
                  sm: "xs",
                  md: "sm",
                  xl: "md",
                  "2xl": "md",
                }}
                borderRadius={10}
              >
                Book Now
              </Button>
            </Flex>
            <Flex>
              <Avatar
                size={{
                  base: "xs",
                  sm: "xs",
                  md: "md",
                  xl: "md",
                  "2xl": "md",
                }}
                name={elem.brand_name}
                src={elem.brand_logo}
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
                {elem.brand_name}
              </Center>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
      <Flex justifyContent={"center"} alignItems={"center"}>
        <Button
          disabled={page <= 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Prev
        </Button>
        <Button>{page}</Button>
        <Button
          disabled={products.length != 9}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </Button>
      </Flex>
    </Box>
  );
};

export default Product;
