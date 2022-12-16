import React, { useState, useEffect } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";

const Comprehensive = () => {
  const [packag, setPackage] = useState([]);
  useEffect(() => {
    axios
      .get("https://persian-blue-hen-slip.cyclic.app/Comprehensive")
      .then((res) => {
        setPackage(res.data);
      });
  }, []);

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        style={{
          fontSize: "45px",
          color: "rgb(56,159,221)",
          backgroundColor: "transparent",
          position: "absolute",
          right: "-18px",
        }}
      >
        <IoIosArrowDropright onClick={onClick} />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;

    return (
      <div
        style={{
          fontSize: "45px",
          color: "rgb(56,159,221)",
          backgroundColor: "transparent",
          position: "absolute",
          left: "-18px",
          zIndex: "999",
        }}
      >
        <IoIosArrowDropleft onClick={onClick} />
      </div>
    );
  }

  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <WebseriesWrapper>
      <div>
        <h1 style={{ color: "black" }}>Explore Our Comprehensive Guides for More Details</h1>
      </div>
      <Slider
        {...settings}
        style={{
          margin: "auto",
          alignItems: "center",
          width: "100%",
          display: "flex",
        }}
      >
        {packag &&
          packag.map((ele) => (
            <WeseriesCard key={ele.id}>
              <img src={ele.image}></img>

              <h3 style={{ backgroundColor: "gray" }}>{ele.title}</h3>

            </WeseriesCard>
          ))}
      </Slider>
    </WebseriesWrapper>
  );
}

export default Comprehensive



const WebseriesWrapper = styled.div`
  margin-top:50px;
   margin-bottom:50px;
  h1 {
    margin-bottom: 8px;
    font-size: 28px;
    font-weight: 700;
    line-height: 30.8px;
  }
 

`;

const WeseriesCard = styled.div`
   padding:0px 5px;
   margin-top:10px;
 
 
  img {
    align-items:center;
    height:210px;
    object-fit: cover;
    object-position:center;
    width:100%;
    border-radius: 4px;
  
  }
  h3{
    font-weight:700;
    margin-bottom:8px;
    font-size:20px;
  }
 
`;
