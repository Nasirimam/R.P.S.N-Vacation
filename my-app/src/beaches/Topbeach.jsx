import React, { useState, useEffect } from 'react'
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io"
import styled from "styled-components"
const Topbeach = () => {
  const [topBeach, setTopBeach] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/india")
      .then((res) => {
        setTopBeach(res.data);
      });
  }, []);

  function SampleNextArrow(props) {

    const { onClick } = props;
    return (
      <div style={{ fontSize: "45px", color: "rgb(56,159,221)", backgroundColor: "transparent", position: "absolute", right: "-18px", }}>
        <IoIosArrowDropright
          onClick={onClick}


        />
      </div>


    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;

    return (
      <div style={{ fontSize: "45px", color: "rgb(56,159,221)", backgroundColor: "transparent", position: "absolute", left: "-18px", zIndex: "999" }}>
        <IoIosArrowDropleft
          onClick={onClick}


        />
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
        <h1 style={{ color: "black" }}>Top Beach Properties You Need to Experience This Year</h1>

      </div>
      <Slider {...settings} style={{ margin: "auto", alignItems: "center", width: "100%", display: "flex" }}>

        {
          topBeach && topBeach.map((ele) => <WeseriesCard key={ele.id}>
            <img src={ele.image}></img>
            <h6 style={{ color: "GrayText" }}>{ele.prop}</h6>
            <h3 style={{ color: "GrayText" }}>{ele.title}</h3>
            <h5 style={{ color: "GrayText" }}> <span style={{ color: "GrayText" }}>By</span>{ele.by}</h5>
          </WeseriesCard>)
        }

      </Slider>
    </WebseriesWrapper>
  )
}

export default Topbeach




export const WebseriesWrapper = styled.div`
  margin-top:50px;
   margin-bottom:50px;
  h1 {
    margin-bottom: 8px;
    font-size: 28px;
    font-weight: 700;
    line-height: 30.8px;
  }
  text {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
  }

  span {
    color: black;
    margin-right: 2px;
  }

  h5 {
    color: rgb(56, 159, 221);
    line-height:15px;
   
  }
  h6{
    color:rgb(255,145,108);
    font-size:14px;
    margin-top:4px;
  }
`;

export const WeseriesCard = styled.div`
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
  }
  h5{
    font-size:16px;
  }
`;
