import { Grid } from "@chakra-ui/react";
import {
  Image,
  Box,
  Text,
  Link,
  Heading,
  Badge,
  Flex,
  Spacer,
  Button,
} from "@chakra-ui/react";

function Exclusive_box() {
  const outer_div = {
    width: "85%",
    margin: "auto",
    marginTop: "50px",
  };

  return (
    <div style={outer_div}>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <Box>
          <Image
            src="https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1653391344_ln_c1.jpg"
            alt="Dan"
            w="100%"
            h="190px"
            borderRadius="5px"
          />
          <Heading as="h4" size="md" marginTop="25px">
            10 Best Places To Experience The Chills This Winter
          </Heading>
          <Box>
            <Flex marginLeft="0px">
              <Badge
                borderRadius="full"
                h="6"
                px="5"
                color="teal"
                colorScheme="white"
                display="flex"
              >
                <Image
                  src="https://cdn-icons-png.flaticon.com/128/2288/2288494.png"
                  alt="D"
                />
                <Text marginTop="5px">Manali</Text>
              </Badge>
              <Spacer />
              <Badge borderRadius="full" h="6" px="5" colorScheme="teal">
                4D-3N
              </Badge>
            </Flex>

            <Flex>
              <Box>
                <Heading as="h4" size="md" marginTop="15px">
                  9,875/person
                </Heading>
              </Box>
              <Spacer />
              <Button colorScheme="teal" variant="outline" marginTop="9px">
                Book Now
              </Button>
            </Flex>
            <Box marginTop="10px">
              <Flex>
                <Image
                  src="https://cdn1.tripoto.com/media/filter/mss/img/2165009/UserPhoto/1628574904_tripoto_s_mindful_retreats.jpg"
                  borderRadius="full"
                  width="8%"
                ></Image>
                <Text>Triopto's Mindfull Retreats</Text>
                <Image src="https://cdn-icons-png.flaticon.com/128/7641/7641727.png" borderRadius="full"
                  width="5%" height="7%"/>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Grid>
    </div>
  );
}

export default Exclusive_box;
