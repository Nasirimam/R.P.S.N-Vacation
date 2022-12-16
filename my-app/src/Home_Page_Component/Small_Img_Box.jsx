import { Grid } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react'
function Small_Img_Box() {
  const outer_div = {
    width: "85%",
    margin:"auto",
    marginTop:"50px",
  };

//   const inner_div = {
//     display: "flex",
//   };

  return (
    <div style={outer_div}>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        
         <Image src='https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192329_aa.png' alt='Dan Abramov' w="100%" h="70px" />
         <Image src='https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192329_aa.png' alt='Dan Abramov' w="100%" h="70px" />
         <Image src='https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192329_aa.png' alt='Dan Abramov' w="100%" h="70px" />
         <Image src='https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192329_aa.png' alt='Dan Abramov' w="100%" h="70px" />
      </Grid>
    </div>
  );
}

export default Small_Img_Box;
