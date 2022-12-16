import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./Watch.module.css";


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
      style={{ ...style, display: "block", background: "grey", border: "soild red" }}
      onClick={onClick}
    />
  );
}



export const Watch = () => {

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
    <div>
      <div>
        <Slider {...settings}>
          <div className={styles.box} style={{ color: "black" }}>
            <div className={styles.imgdiv} style={{ color: "black" }}>
              <img src='https://image.mux.com/65Mxwlku9ue7VTvDW8F72z1U5VIOiEaz/thumbnail.jpg?width=600&height=600&time=2.0'
                className={styles.imge} />
            </div>

            <div className={styles.des} style={{ color: "black" }}>
              Best Weekend Getaways From
              Mumbai Under 250 Kms
            </div>
            <div className={styles.bydiv}>
              <span className={styles.by} style={{ color: "black" }}>By</span> <span style={{ color: "black" }} className={styles.byname}>Namita Mittal</span>
            </div>

          </div>






          <div className={styles.box}>
            <div className={styles.imgdiv}>
              <img src="https://cdn1.tripoto.com/media/filter/tst/gen/1789711/Image/1634027797_thumbnail.jpg"
                className={styles.imge} />
            </div>

            <div className={styles.des} style={{ color: "black" }}>
              Narendra Bhawan:Palace Hotel In Bikaner
            </div>
            <div className={styles.bydiv}>
              <span className={styles.by} style={{ color: "black" }}>By</span> <span style={{ color: "black" }} className={styles.byname}>namita Mittal</span>
            </div>
          </div>





          <div className={styles.box}>
            <div className={styles.imgdiv}>
              <img src="https://image.mux.com/iFVXAVPcgtz02Zcmt2ExiBVFZbYw7iMhN/thumbnail.jpg?width=600&height=600&time=3.01"
                className={styles.imge} />
            </div>

            <div className={styles.des} style={{ color: "black" }}>
              5-Day Jaipur Itinerary To See The City Of Maharajas
            </div>
            <div className={styles.bydiv}>
              <span className={styles.by} style={{ color: "black" }}>By</span> <span style={{ color: "black" }} className={styles.byname}>Nimita Mittal</span>
            </div>
          </div>




          <div className={styles.box}>
            <div className={styles.imgdiv}>
              <img src='https://image.mux.com/VZNhkabs2mLwRfjO6j600Q7OmfLxm5VmV/thumbnail.jpg?width=600&height=600&time=2.0'
                className={styles.imge} />
            </div>

            <div className={styles.des} style={{ color: "black" }}>
              5 Beautiful Places In Delhi That Are Seriously Underrated
            </div>
            <div className={styles.bydiv}>
              <span className={styles.by} style={{ color: "black" }}>By</span> <span style={{ color: "black" }} className={styles.byname}>Nimita Mittal</span>
            </div>
          </div>



















          <div className={styles.box}>
            <div className={styles.imgdiv}>
              <img src='https://cdn1.tripoto.com/media/filter/tst/gen/1789711/Image/1634027829_thumbnail.jpg'
                className={styles.imge} />
            </div>

            <div className={styles.des}>
              10 Best Budget Hotels InDia
            </div>
            <div className={styles.bydiv}>
              <span className={styles.by}>By</span> <span className={styles.byname}>Nimita Mittal</span>
            </div>
          </div>




        </Slider>
      </div>
    </div>
  )
}
