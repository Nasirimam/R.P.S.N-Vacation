import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import AddProdct from "./addProduct";
import AdminNav from "./Adminnav";
import DeleteItem from "./Delete";
import OrderItem from "./orders";

const Admin = () => {
  const [showPage, setShowPage] = useState("AddProdct");

  return (
    <Box>
      <Box>
        <Image
          src="https://cdn1.tripoto.com/assets/2.9/img/home_banner_road.jpg"
          w={"100%"}
          mb={5}
          h={"200px"}
        />
        ;
      </Box>
      <Box>
        <AdminNav setShowPage={setShowPage} />
      </Box>
      <Box>
        {showPage == "AddProdct" ? <AddProdct /> : null}
        {showPage == "OrderItem" ? <OrderItem /> : null}
        {showPage == "DeleteItem" ? <DeleteItem /> : null}
      </Box>
    </Box>
  );
};

export default Admin;
