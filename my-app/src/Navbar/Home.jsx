import { Box, Heading, Input, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { ShowContext } from "../Context/ShowContext";
import "./Homepage.css";
import { Countries } from "./Countries";
import styled from "styled-components";
import { FaMapMarkerAlt } from "react-icons/fa";

const Homepage = () => {
    const { show, setShow } = useContext(ShowContext);
    const [result, setResults] = useState("");
    const [data, setData] = useState([]);

    const handleResult = (e) => {
        setResults(e.target.value);
    };

    useEffect(() => {
        if (result === "") {
            setData([]);
        } else {
            let show_data = Countries.filter((item) => {
                return item.country.toLowerCase().indexOf(result) !== -1 ? true : false;
            });
            setData(show_data);
        }
    }, [result]);
    // console.log(data)

    return (
        <div>
            <Box>
                <Box position={"relative"} width="100%">
                    <img
                        id="banner"
                        src="https://ak-d.tripcdn.com/images/1i66w2224teao7wyo344C_W_670_10000.jpg?proc=source/trip"
                        alt=""
                    />

                    {!show && (
                        <Box position={"absolute"}>
                            <Heading mb={"12px"} size="lg" color={"white"}>
                                India's Largest Community of Travellers
                            </Heading>
                            <Input value={result}
                                width={"80%"}
                                onChange={handleResult}
                                backgroundColor={"white"}
                                placeholder=" destinations, hotels or activities"
                            />
                            <Resulter id="suggestion" limit={5}>
                                {data.map((item) => {
                                    return (
                                        <Box border={"1px solid silver"} padding={"2"} >
                                            <Text display={"flex"} alignItems={"center"} gap={3}>
                                                <FaMapMarkerAlt /> {item.country}
                                            </Text>
                                        </Box>
                                    );
                                })}
                            </Resulter>
                        </Box>
                    )}
                </Box>
            </Box>
            <br />
            {/* here import home part down part */}
        </div>
    );
};

export const Resulter = styled.div`
  position: absolute;
  top: 100%;
  left: 10%;
  max-height: ${({ limit }) => `${limit * 34}px`};
  border: 1px solid grey;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: white;
  width: 80%;
  overflow: scroll;
`;

export default Homepage;
