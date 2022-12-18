import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./Plan.module.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "grey",
        border: "soild red",
      }}
      onClick={onClick}
    />
  );
}

export const Plan = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className={styles.maindiv} style={{ color: "black" }}>
        <Slider {...settings}>
          <div className={styles.box} style={{ color: "black" }}>
            <div>
              <img src="https://cdn1.tripoto.com/media/filter/tst/img/1756031/Image/1599216481_rajasthan.jpg" />
            </div>
          </div>

          <div className={styles.box} style={{ color: "black" }}>
            <div>
              <img
                src="https://cdn1.tripoto.com/media/filter/tst/img/1756031/Image/1599216560_kerala.jpg"
                className={styles.imge}
              />
            </div>
          </div>

          <div className={styles.box} style={{ color: "black" }}>
            <div>
              <img
                src="https://cdn1.tripoto.com/media/filter/tst/img/1756031/Image/1599216649_andaman.jpg"
                className={styles.imge}
              />
            </div>
          </div>

          <div className={styles.box} style={{ color: "black" }}>
            <div>
              <img
                src="https://cdn1.tripoto.com/media/filter/tst/img/1339961/Image/1613732339_1_10.jpg"
                className={styles.imge}
              />
            </div>
          </div>

          <div className={styles.box} style={{ color: "black" }}>
            <div>
              <img
                src="https://cdn1.tripoto.com/media/filter/tst/img/1339961/Image/1613732387_3_7.jpg"
                className={styles.imge}
              />
            </div>
          </div>

          <div className={styles.box} style={{ color: "black" }}>
            <div>
              <img
                src="https://cdn1.tripoto.com/media/filter/tst/img/1339961/Image/1613732417_2_10.jpg"
                className={styles.imge}
              />
            </div>
          </div>

          <div className={styles.box}>
            <div>
              <img
                src="https://cdn1.tripoto.com/media/filter/tst/img/1339961/Image/1613732456_dubai.jpg"
                className={styles.imge}
              />
            </div>
          </div>
          <div className={styles.box} style={{ color: "black" }}>
            <div>
              <img
                src="https://cdn1.tripoto.com/media/filter/tst/img/1339961/Image/1613732480_4_4.jpg"
                className={styles.imge}
              />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
