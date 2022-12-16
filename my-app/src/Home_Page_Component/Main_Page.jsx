import React from "react";
// import HomePage_img from "./home_page_img";
import Small_Img_Box from "./Small_Img_Box";
import "../App.css"
import Slider from "./Slider";
import Find_best_place from "./Find_best_place";
import Exclusive_box from "./Exclusive_box";



function HomePage_Component(){

    return(
        <div>
          {/* <HomePage_img/> */}
          <Slider/>
          <Small_Img_Box/>
          <Find_best_place/>
          <Exclusive_box/>
        </div>
    )
}
export default HomePage_Component