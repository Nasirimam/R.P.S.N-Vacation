import { Box, Flex, Image } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Checkout from "./checkout";
import ItemView from "./itemview";

const SinglePage = () => {
  const param = useParams();

  const [data, setData] = useState({});

  const getSingleProduct = () => {
    return axios.get(
      `https://fantastic-lab-coat-moth.cyclic.app/Package/${param.id}`
    );
  };

  useEffect(() => {
    getSingleProduct()
      .then((e) => setData(e.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <Box>
      <Image
        src="https://cdn1.tripoto.com/assets/2.9/img/home_banner_road.jpg"
        w={"100%"}
        h="200px"
        mb={5}
      />
      <br />
      <Flex
        mt={10}
        gap={2}
        w={"95%"}
        margin={"auto"}
        flexDir={{ base: "column", sm: "column", md: "row" }}
      >
        <Box flex={2}>
          <ItemView data={data} />
        </Box>
        <Box flex={1}>
          <Checkout data={data} />
        </Box>
      </Flex>
    </Box>
  );
};

export default SinglePage;
