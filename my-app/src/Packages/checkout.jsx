import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Select,
  Spacer,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaArrowCircleRight, FaRupeeSign } from "react-icons/fa";
import ConfirmButton from "./confirmButton";

const Checkout = ({ data }) => {
  const intData = {
    email: "",
    name: "",
    number: "",
    city: "",
    people: "1",
    children: "0",
    room: "1",
    date: "",
  };

  const [formData, setFormData] = useState(intData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  let numberinprice = "";

  if (data.price) {
    {
      for (let i = 0; i < data.price.length; i++) {
        if (
          data.price[i] == "1" ||
          data.price[i] == "2" ||
          data.price[i] == "3" ||
          data.price[i] == "4" ||
          data.price[i] == "5" ||
          data.price[i] == "6" ||
          data.price[i] == "7" ||
          data.price[i] == "8" ||
          data.price[i] == "9" ||
          data.price[i] == "0"
        ) {
          numberinprice = numberinprice + data.price[i];
        }
      }
    }
  }

  let x = +formData.people;
  let y = +numberinprice;

  let total = y * x;

  return (
    <Box
      border={"0px solid red"}
      borderRadius={8}
      p={3}
      boxShadow={
        "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
      }
    >
      <Heading
        size={"md"}
        w="90%"
        textAlign={"center"}
        mb={4}
        color={"blue.400"}
      >
        Enter Your Details and Proceed To Book
      </Heading>
      <Flex
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={4}
      >
        <Input
          width="90%"
          placeholder="Email"
          type={"email"}
          isRequired
          name="email"
          onChange={handleChange}
        />
        <Input
          width="90%"
          placeholder="Full Name"
          isRequired
          onChange={handleChange}
          name="name"
        />
        <Input
          width="90%"
          placeholder="Contact Number"
          name="number"
          isRequired
          onChange={handleChange}
          type={"number"}
        />
        <Input
          width="90%"
          placeholder="Departure City"
          name="city"
          isRequired
          onChange={handleChange}
        />
        <Select
          placeholder="Number Of People"
          width="90%"
          isRequired
          color={"gray.500"}
          name="people"
          onChange={handleChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </Select>
        <Select
          placeholder="Children (6-9)Years Optional"
          width="90%"
          color={"gray.500"}
          name="children"
          onChange={handleChange}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </Select>
        <Select
          placeholder="Number Of Rooms Default Room = '1'"
          width="90%"
          color={"gray.500"}
          name="room"
          onChange={handleChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </Select>
        <Input
          placeholder="Selct Check-in Time"
          size="md"
          isRequired
          type="datetime-local"
          width="90%"
          color={"gray.500"}
          onChange={handleChange}
          name="date"
        />
        <Spacer />
        <Flex
          fontSize={20}
          fontWeight={"bold"}
          //   border={"1px solid red"}
          w="90%"
          justifyContent={"space-between"}
        >
          <Box>Amount:</Box>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <FaRupeeSign />
            {total}
          </Box>
        </Flex>
        <Box fontSize={12}>Taxes and discounts are calculated at checkout.</Box>
        {formData.name.length == 0 ||
        formData.email.length == 0 ||
        formData.number.length == 0 ||
        formData.city.length == 0 ||
        formData.people.length == 0 ||
        formData.date.length == 0 ? (
          <Box fontSize={12} color={"red"}>
            Fill All Crediantial To Enable Button
          </Box>
        ) : null}
        <ConfirmButton data={data} formData={formData} />
        <Box fontSize={12}>
          I accept the Terms of Use and Privacy Policy of Tripoto.
        </Box>
      </Flex>
    </Box>
  );
};

export default Checkout;
