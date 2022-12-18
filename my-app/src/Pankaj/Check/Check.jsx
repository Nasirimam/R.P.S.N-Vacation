import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./Check.module.css";

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

export const Check = () => {
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
      <div>
        <Slider {...settings}>
          <div className={styles.box}>
            <div>
              <img
                src="https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1658864670_1511440192_ononono.jpg"
                className={styles.imge}
              />
            </div>
            <div className={styles.title}>BUDGET STAYS</div>
            <div className={styles.des}>
              These Hostels In Udaipur Are Perfect For Every Backpacker
            </div>
            <div className={styles.bydiv}>
              <span className={styles.by}>By</span>{" "}
              <span className={styles.byname}>Adebte Dhayina</span>
            </div>
          </div>

          <div className={styles.box}>
            <div>
              <img
                src="https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1658865127_1542805937_gc13_min.png"
                className={styles.imge}
              />
            </div>
            <div className={styles.title}>BUDGET STAYS</div>
            <div className={styles.des}>
              This Lakeside Hostel Is The Perfect Escape From Delhi
            </div>
            <div className={styles.bydiv}>
              <span className={styles.by}>By</span>{" "}
              <span className={styles.byname}>Sonalika Debnath</span>
            </div>
          </div>

          <div className={styles.box}>
            <div>
              <img
                src="https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1656332499_1656096038_manalsu_2.jpg"
                className={styles.imge}
              />
            </div>
            <div className={styles.title}>BUDGET STAYS</div>
            <div className={styles.des}>
              This Lakeside Hostel Is The Perfect Escape From Delhi
            </div>
            <div className={styles.bydiv}>
              <span className={styles.by}>By</span>{" "}
              <span className={styles.byname}>Arkko Banarjee</span>
            </div>
          </div>

          <div className={styles.box}>
            <div>
              <img
                src="https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1658864962_1658078162_untitled_design_4.jpg"
                className={styles.imge}
              />
            </div>
            <div className={styles.title}>LUXURY STAYS</div>
            <div className={styles.des}>
              Mayfair,Gangtok:Find Luxury At Sikkim's Capital City
            </div>
            <div className={styles.bydiv}>
              <span className={styles.by}>By</span>{" "}
              <span className={styles.byname}>Rashmi Sharma</span>
            </div>
          </div>

          <div className={styles.box}>
            <div>
              <img
                src="https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1658865183_1658328821_96973001.jpg"
                className={styles.imge}
              />
            </div>
            <div className={styles.title}>LUXURY STAYS</div>
            <div className={styles.des}>
              Bookmark These Luxury Stays In Karnataka
            </div>
            <div className={styles.bydiv}>
              <span className={styles.by}>By</span>{" "}
              <span className={styles.byname}>Aparajita</span>
            </div>
          </div>

          <div className={styles.box}>
            <div>
              <img
                src="https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1658865473_1624930163_204510997_1547710488915140_4246753834666811348_n.jpg"
                className={styles.imge}
              />
            </div>
            <div className={styles.title}>HOMESTAYS</div>
            <div className={styles.des}>
              This Father-Son Duo Turned Their Farm IntoAHomestay
            </div>
            <div className={styles.bydiv}>
              <span className={styles.by}>By</span>{" "}
              <span className={styles.byname}>Divyangna(Nomadic_Missy)</span>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
