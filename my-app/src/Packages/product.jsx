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
  Select,
} from "@chakra-ui/react";
import { MdLocationOn } from "react-icons/md";
import { useState } from "react";

const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.nasirReducer.products);

  const [page, setPage] = useState(1);
  const [width, setWidth] = useState(null);
  const [limit, setLimit] = useState(9);
  const [sort, setSort] = useState("asc");
  const [filter, setFilter] = useState(
    "OYO Total Holidays&brand_name=Destynasia Venture&brand_name=TUI India&brand_name=Tripoto Verified Partner&brand_name=IFLy Vacation PVT Ltd.&brand_name=Explore More Holidays&brand_name=IFLy Vacation PVT Ltd."
  );

  const getProduct = async (url) => {
    return await fetch(url);
  };

  useEffect(() => {
    dispatch(getProductRequest());
    getProduct(
      `https://fantastic-lab-coat-moth.cyclic.app/Package?_limit=${limit}&_page=${page}&_sort=price&_order=${sort}&brand_name=${filter}`
    )
      .then((e) => e.json())
      .then((e) => dispatch(getProductSuccess(e)))
      .catch((e) => dispatch(getProductFailed()));
  }, [page, limit, width, sort, filter]);

  useEffect(() => {
    setWidth(window.screen.width);
    if (width < 1280) {
      setLimit(8);
    } else {
      setLimit(9);
    }
  }, [limit, width]);

  const handleChange = (e) => {
    setSort(e.target.value);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <Box w={"100%"}>
      <Image
        src="https://cdn1.tripoto.com/assets/2.9/img/home_banner_road.jpg"
        w={"100%"}
        mb={5}
      />
      <Flex>
        <Box
          w={{
            base: "50%",
            sm: "40%",
            md: "30%",
            xl: "20%",
            "2xl": "20%",
          }}
          ml={"10%"}
          mb={6}
        >
          <Select placeholder="Sort With Price" onChange={handleChange}>
            <option value="asc">Low To High</option>
            <option value="desc">High To Low</option>
          </Select>
        </Box>
        <Box
          w={{
            base: "50%",
            sm: "40%",
            md: "30%",
            xl: "20%",
            "2xl": "20%",
          }}
          ml={"10%"}
          mb={6}
        >
          <Select placeholder="Filter with Brand" onChange={handleFilter}>
            <option value="OYO Total Holidays">OYO</option>
            <option value="Destynasia Venture">Destynasia</option>
            <option value="TUI India">TUI India</option>
            <option value="Tripoto Verified Partner">
              Tripoto Verified Partner
            </option>
            <option value="IFLy Vacation PVT Ltd.">
              IFLy Vacation PVT Ltd.
            </option>
            <option value="Explore More Holidays">Explore More Holidays</option>
            <option value="SFM Travels">SFM Travels</option>
          </Select>
        </Box>
      </Flex>
      <SimpleGrid
        columns={{
          base: 1,
          sm: 2,
          md: 2,
          xl: 3,
          "2xl": 3,
        }}
        w="80%"
        margin={"auto"}
        spacing={5}
      >
        {products.map((elem) => (
          <Box
            key={elem.id}
            // border="2px solid red"
            p={3}
            borderRadius={10}
            boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
          >
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
                color={"blue.400"}
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
                bgColor={"blue.300"}
                _hover={{ bgColor: "blue.300" }}
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
                variant="outline"
                borderColor={"blue.400"}
                border="1px"
                color={"blue.400"}
              >
                Book Now
              </Button>
            </Flex>
            <Flex>
              <Avatar
                size={{
                  base: "xs",
                  sm: "xs",
                  md: "sm",
                  xl: "sm",
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
      <Flex justifyContent={"center"} alignItems={"center"} mt={8} gap={4}>
        <Button
          disabled={page <= 1}
          onClick={() => setPage((prev) => prev - 1)}
          borderColor={"blue.400"}
          bgColor={"blue.300"}
        >
          Prev
        </Button>
        <Button
          colorScheme="whiteAlpha"
          bgColor={"whiteAlpha.900"}
          variant="outline"
          border="1px"
          borderColor={"blue.400"}
          color={"blue.400"}
        >
          {page}
        </Button>
        <Button
          disabled={products.length < 8}
          onClick={() => setPage((prev) => prev + 1)}
          borderColor={"blue.400"}
          bgColor={"blue.300"}
        >
          Next
        </Button>
      </Flex>
    </Box>
  );
};

export default Product;
