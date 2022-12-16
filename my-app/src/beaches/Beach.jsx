import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components"
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

import Topbeach from "./Topbeach";
import Package from "./Package";
import Comprehensive from "./Comprehensive"
import { ShowContext } from "../Context/ShowContext";
const Beach = () => {
  const { show, setShow } = useContext(ShowContext)
  const [beachgrid, setBeachgrid] = useState([]);
  const [vlogData, setVlogData] = useState([]);
  useEffect(() => {
    axios
      .get(" https://persian-blue-hen-slip.cyclic.app/hotels")
      .then((res) => {
        setBeachgrid(res.data);
        setVlogData(res.data);

      });
  }, []);
  useEffect(() => {
    setShow(true)
  }, [])

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div style={{ fontSize: "45px", color: "rgb(56,159,221)", backgroundColor: "transparent", position: "absolute", right: "-18px" }}>
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
    <BeachWrapper>
      <br />
      <br />
      <br />
      <h1 style={{ color: "black", padding: "5px" }}>Best Beaches Around The World</h1>
      <h3 style={{ color: "GrayText", padding: "20px" }}>The crunch of white sand beneath your feet and the thundering ocean beckoning you into its cool waters. Explore all you need to know about taking a perfect trip to the beach!
      </h3>
      <text style={{ color: "black", padding: "10px" }}>
        Sand, waves and wind make a perfect getaway from the hustle bustle of city life. Beaches can make anyone happy. Just take a beach vacation anywhere in the world and you will find your happiness in the waves. You can choose from a variety of destinations for your next beach holiday in India or anywhere. Pick a beach resort according to your budget and spend time with the family or go for a solo trip on picture perfect shores that nature has blessed us with. Enjoy the sunrise, go for water sports or just sit idle on sandy floors of these beautiful beaches.
      </text>
      <br />
      <h1 style={{ color: "black", marginTop: "10px" }}>Tripoto's Top Beach Picks for January, February, March 2022</h1>
      <BeachGridWrapper>
        {beachgrid &&
          beachgrid.map((ele) => (
            <div key={ele.id}>
              <img src={ele.image}></img>
              <h3 style={{ color: "GrayText" }}>{ele.title}</h3>
              <h5 style={{ color: "GrayText" }}>
                <span style={{ color: "GrayText" }}>By</span>
                {ele.by}
              </h5>
            </div>
          ))}
      </BeachGridWrapper>

      <Topbeach />
      <Package />
      <Comprehensive />
      <div>
        <h1 style={{ fontFamily: "sans-serif", color: "black" }}>
          Top Tripoto Vlogs for Beaches This Week
        </h1>
        <VlogWrapper>
          {vlogData &&
            vlogData.map((ele) => (
              <div key={ele.id}>
                <img src={ele.image}></img>
                <h3 style={{ color: "GrayText" }}>{ele.title}</h3>
                <h5>
                  <span style={{ color: "GrayText" }}>By</span>
                  {ele.by}
                </h5>
              </div>
            ))}
        </VlogWrapper>
      </div>
    </BeachWrapper >
  );
};

export default Beach;

const BeachWrapper = styled.div`
  margin: auto;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 2px, rgba(0, 0, 0, 0.1) 0px 2px 3px -3px, rgba(0, 0, 0, 0.1) 0px -3px 0px inset;
  width: 97%;
  font-family: sans-serif;
  backgroundColor:gray;
  h1{
    font-size:29px;
    font-weight:700;
    margin-bottom:8px;
  }
  text {
    line-height: 20px;
    letter-spacing: 0.6px;
  }
  @media (max-width: 790px) {
    width: 95%;
  }
`;

const BeachGridWrapper = styled.div`
  display: grid;
  gap: 10px;
  
  grid-template-columns: repeat(3, 1fr);
  img {
    width: 100%;
    height: 220px;
    border-radius: 8px;
  }

  h3 {
    font-weight: 700;
  }

  span {
    color: black;
    font-weight: 500;
    margin-right: 4px;
  }

  h5 {
    color: rgb(56, 159, 221);
    margin-left: 4px;
    margin-top: 5px;
    font-size: 16px;
    font-weight: 500;
  }
 

  @media (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
    img {
      width: 100%;
      height: 25rem;
      object-fit: cover;
      object-position: center;
    }
  }
`;

const VlogWrapper = styled.div`
  display: flex;
  margin: auto;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  margin-bottom:40px;
  div {
    width: 23%;
  }
  img {
    width: 100%;
    height: 11rem;
    border-radius: 5px;
    object-fit: cover;
    object-position: center;
  }

  h3 {
    font-size: 18px;
    font-weight: 700;
  }

  span {
    color: black;
    font-weight: 500;
    margin-right: 4px;
  }

  h5 {
    color: rgb(56, 159, 221);
    margin-left: 4px;
    margin-top: -5px;
    font-size: 16px;
    font-weight: 500;
  }

  @media (max-width: 1000px) {
    flex-direction: column;

    div {
      width: 100%;
    }
    img {
      height: 25rem;
      object-fit: cover;
      object-position: center;
    }
  }
`;
