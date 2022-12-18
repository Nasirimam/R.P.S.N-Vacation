import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const OrderItem = () => {
  const getOrderData = async (url) => {
    return await axios.get(url);
  };

  const deleteOrder = async (url, id) => {
    return await axios.delete(`${url}/${id}`);
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    if (data.length === 0) {
      getOrderData("https://powerful-lingerie-fawn.cyclic.app/booking").then(
        (e) => setData(e.data)
      );
    }
  }, [data.length]);

  const handleDelete = (id) => {
    deleteOrder("https://powerful-lingerie-fawn.cyclic.app/booking", id)
      .then((e) => getOrderData())
      .catch((e) => getOrderData());
  };

  console.log(data);

  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>S.No</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Number</Th>
            <Th>Guest City</Th>
            <Th>No Of Guest</Th>
            <Th>No Of Rooms</Th>
            <Th>Check In Date</Th>
            <Th>Package ID</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((elem) => (
            <Tr>
              <Td>{elem.id}</Td>
              <Td>{elem.name}</Td>
              <Td>{elem.email}</Td>
              <Td>{elem.contect}</Td>
              <Td>{elem.city}</Td>
              <Td>{elem.people}</Td>
              <Td>{elem.room}</Td>
              <Td>{elem.date}</Td>
              <Td>{elem.packegeID}</Td>
              <Td>
                <Button
                  onClick={() => handleDelete(elem.id)}
                  bgColor={"red.500"}
                  _hover={{ bgColor: "red.400" }}
                  color={"whiteAlpha.900"}
                >
                  Delete
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default OrderItem;
