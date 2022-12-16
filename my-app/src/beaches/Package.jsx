import React, { useState, useEffect } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import styled from "styled-components";

const Package = () => {
  const [packag, setPackage] = useState([]);
  useEffect(() => {
    axios
      .get("https://persian-blue-hen-slip.cyclic.app/Package")
      .then((res) => {
        setPackage(res.data);
        console.log(res.data)
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
          bottom: "285px"
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
          bottom: "285px"
        }}
      >
        <IoIosArrowDropleft onClick={onClick} />
      </div>
    );
  }

  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <WebseriesWrapper>
      <div>
        <h1 style={{ color: "Black" }}>Packages</h1>
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
              <PackageWrapper style={{ color: "GrayText" }}>{ele.type}</PackageWrapper>
              <TitleWrapper style={{ color: "GrayText" }}>{ele.title}</TitleWrapper>
              <LoactionWrapper>
                <LogoWrapper>
                  <FaMapMarkerAlt />
                  <h5 style={{ color: "GrayText" }}>{ele.location}</h5>
                </LogoWrapper>
                <DaybuttonWrapper style={{ color: "white" }}>
                  {ele.button}
                </DaybuttonWrapper>

              </LoactionWrapper>
              <PriceWrapper>
                <PersonWrapper>
                  <h3 style={{ color: "GrayText" }}>{ele.price}</h3>
                  <h6 style={{ color: "GrayText" }}>{ele.person}</h6>
                </PersonWrapper>
                <Getquotes >
                  {ele.quotes}
                </Getquotes>

              </PriceWrapper>

              <hr style={{ marginTop: "5px" }}></hr>
              <LogoImage>
                <img src={ele.brand_logo}></img>
                <h3 style={{ color: "GrayText" }}>{ele.brand_name}</h3>
              </LogoImage>

            </WeseriesCard>
          ))}
      </Slider>
    </WebseriesWrapper>
  );
};

export default Package;



export const WebseriesWrapper = styled.div`
  margin-top:50px;
   margin-bottom:50px;
  h1 {
    margin-bottom: 8px;
    font-size: 28px;
    font-weight: 700;
    line-height: 30.8px;
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

`;

export const PackageWrapper = styled.h5`
   color:rgb(53,147,145);
   font-size:14px;
   margin-top:5px;
   font-weight:bold;
`

export const TitleWrapper = styled.h4`
   font-weight:700;
   font-size:18px;
   letter-spacing:0.6px;
`

export const LoactionWrapper = styled.div`
   display:flex;
   justify-content: space-between;
   color:rgb(53,147,145);
   margin-top:5px;
`
export const LogoWrapper = styled.div`
  display:flex;

`
export const DaybuttonWrapper = styled.button`
  color:white;
  background-color: rgb(53,147,145);
  border-radius:13px;
  padding:3px 8px;
  font-size:13px;
`

export const LogoImage = styled.div`
display:flex;
align-items: center;
margin-top:10px;
  img{
    width:30px;
    height:30px;
    border-radius: 50%;
  }
  h3{
    padding-left:5px;
    font-size:14px;
  }
`

export const PriceWrapper = styled.div`
  display:flex;
  justify-content: space-between;
  margin-top:15px;
  margin-bottom:10px;
`

export const PersonWrapper = styled.div`
  display:flex;
  h3{
    font-weight:bold;
    font-size:18px;
  }
  h6{
    margin-left:4px;
  }
`
export const Getquotes = styled.button`
   border:1px solid rgb(53,147,145);
   border-radius:6px;
   color:gray;
   padding:3px 7px;
   font-size:16px;

`
