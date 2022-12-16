import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./Book.module.css";
import { Button, ButtonGroup } from '@chakra-ui/react'


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



export const Book = () => {

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
          <div className={styles.box}>
            <div>
              <img src='https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1660316705_image_cover_1.jpg'
                className={styles.imge} />
            </div>
            <div className={styles.title}>
              PACKAGE
            </div>
            <div className={styles.des}>
              Learn Sketchinng & Go On Guided Foreset Walks Around The Himalayan Trails | Cosmix Greeks, Dharamkot
            </div>
            <div className={styles.bydiv}>
              <span className={styles.by}>
                <i class="fa-solid fa-location-dot"></i>
              </span> <span className={styles.byname}>Himachal Pradesh</span>
              <span className={styles.spbtn}>
                <Button className={styles.btn}>3D{" "}-{" "}2N</Button>
              </span>
              <div className={styles.pri}>
                <div className={styles.prdiv}>
                  <span className={styles.pr}>₹ {" "} 8500 <span className={styles.per}>{" "}/ person </span></span>
                </div>
                <div className={styles.smbox} >
                  Get
                  Quotes
                </div>

              </div>
            </div>

            <div style={{ width: "20rem", color: "black" }}>
              <hr />
            </div>
            <div className={styles.ls}>

              <img src='https://cdn1.tripoto.com/media/filter/mss/img/1358539/UserPhoto/1553849222_logo.jpg'
                className={styles.lsimg} />
              <span className={styles.lstex} color="black">
                Tripoto Verified Partner
              </span>


            </div>
          </div>






          <div className={styles.box}>
            <div>
              <img src='https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1660666126_image_covera.jpg'
                className={styles.imge} />
            </div>
            <div className={styles.title}>
              PACKAGE

            </div>
            <div className={styles.des}>
              Embrace Minimalistic Community Life & Learn A Traditional Martial Art | Beyond Community
            </div>
            <div className={styles.bydiv}>
              <span className={styles.by}>
                <i class="fa-solid fa-location-dot"></i>
              </span> <span className={styles.byname} styles={{ color: "black" }}>Sonalika Debnath</span>
              <span className={styles.spbtn}>
                <Button className={styles.btn} styles={{ color: "black" }}>3D{" "}-{" "}2N</Button>
              </span>
              <div className={styles.pri} styles={{ color: "black" }}>
                <div className={styles.prdiv} styles={{ color: "black" }}>
                  <span className={styles.pr} styles={{ color: "black" }}>₹ {" "} 8500 <span styles={{ color: "black" }} className={styles.per}>{" "}/ person </span></span>
                </div>
                <div className={styles.smbox} style={{ marginRight: "5.4rem", color: "black" }}>
                  Get
                  Quotes
                </div>

              </div>
            </div>
            <div style={{ width: "20rem", color: "black" }}>
              <hr />
            </div>
            <div className={styles.ls} styles={{ color: "black" }}>

              <img src='https://cdn1.tripoto.com/media/filter/mss/img/1358539/UserPhoto/1553849222_logo.jpg'
                className={styles.lsimg} styles={{ color: "black" }} />
              <span className={styles.lstex} styles={{ color: "black" }}>
                Tripoto Verified Partner
              </span>


            </div>
          </div>





          <div className={styles.box}>
            <div>
              <img src='https://cdn1.tripoto.com/media/filter/tst/img/2163002/Image/1638778652_image_cover_b.jpg'
                className={styles.imge} />
            </div>
            <div className={styles.title}>
              PACKAGE

            </div>
            <div className={styles.des}>
              Leaarn To Cook A Traditional Rajasthani Meal At A 200 Year-old Luxury Haveli
            </div>
            <div className={styles.bydiv}>
              <span className={styles.by}>
                <i class="fa-solid fa-location-dot"></i>
              </span> <span className={styles.byname}>Rajasthan</span>
              <span className={styles.spbtn}>
                <Button className={styles.btn} style={{ marginLeft: "5rem" }}>3D{" "}-{" "}2N</Button>
              </span>
              <div className={styles.pri}>
                <div className={styles.prdiv}>
                  <span className={styles.pr}>₹ {" "} 8500 <span className={styles.per}>{" "}/ person </span></span>
                </div>
                <div className={styles.smbox} style={{ marginRight: "3.4rem" }}>
                  Get
                  Quotes
                </div>

              </div>

            </div>
            <div style={{ width: "22rem" }}>
              <hr />
            </div>
            <div className={styles.ls}>

              <img src='https://cdn1.tripoto.com/media/filter/mss/img/1358539/UserPhoto/1553849222_logo.jpg'
                className={styles.lsimg} />
              <span className={styles.lstex}>
                Tripoto Verified Partner
              </span>


            </div>
          </div>




          <div className={styles.box}>
            <div>
              <img src='https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1654504108_ce_c1.jpg'
                className={styles.imge} />
            </div>
            <div className={styles.title}>
              PACKAGE

            </div>
            <div className={styles.des}>
              Trek To Triund And Stay At The Residence Of Kangra's Maharaja | Clouds End Villa, Dharamshala
            </div>
            <div className={styles.bydiv}>
              <span className={styles.by}>
                <i class="fa-solid fa-location-dot"></i>
              </span> <span className={styles.byname}>Rashmi Sharma</span>
              <span className={styles.spbtn}>
                <Button className={styles.btn}>3D{" "}-{" "}2N</Button>
              </span>
              <div className={styles.pri}>
                <div className={styles.prdiv}>
                  <span className={styles.pr}>₹ {" "} 8500 <span className={styles.per}>{" "}/ person </span></span>
                </div>
                <div className={styles.smbox} style={{ marginRight: "6rem" }}>
                  Get
                  Quotes
                </div>

              </div>
            </div>
            <div style={{ width: "19rem" }}>
              <hr />
            </div>
            <div className={styles.ls}>

              <img src='https://cdn1.tripoto.com/media/filter/mss/img/1358539/UserPhoto/1553849222_logo.jpg'
                className={styles.lsimg} />
              <span className={styles.lstex}>
                Tripoto Verified Partner
              </span>


            </div>
          </div>











          <div className={styles.box}>
            <div>
              <img src='https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1645772836_image_cover.jpg'
                className={styles.imge} />
            </div>
            <div className={styles.title}>
              PACKAGE

            </div>
            <div className={styles.des}>
              Stargaze & Enjoy A Picnic In the Hills As You Stay At A Unique A-Framed Cottage | Urna Boutique Stay
            </div>
            <div className={styles.bydiv}>
              <span className={styles.by}>
                <i class="fa-solid fa-location-dot"></i>
              </span> <span className={styles.byname}>Aparajita
              </span>
              <span className={styles.spbtn}>
                <Button className={styles.btn} style={{ marginLeft: "5rem" }}>3D{" "}-{" "}2N</Button>
              </span>
              <div className={styles.pri}>
                <div className={styles.prdiv}>
                  <span className={styles.pr}>₹ {" "} 8500 <span className={styles.per}>{" "}/ person </span></span>
                </div>
                <div className={styles.smbox} style={{ marginRight: "4rem" }}>
                  Get
                  Quotes
                </div>

              </div>
            </div>
            <div style={{ width: "21rem" }}>
              <hr />
            </div>
            <div className={styles.ls}>

              <img src='https://cdn1.tripoto.com/media/filter/mss/img/1358539/UserPhoto/1553849222_logo.jpg'
                className={styles.lsimg} />
              <span className={styles.lstex}>
                Tripoto Verified Partner
              </span>


            </div>
          </div>



          <div className={styles.box}>
            <div>
              <img src='https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1657734830_image_cover_a.jpg'
                className={styles.imge} />
            </div>
            <div className={styles.title}>
              PACKAGE

            </div>
            <div className={styles.des}>
              Explore One Of Asia's Spookiest Spots While Unwinding Amidst Nature
            </div>
            <div className={styles.bydiv}>
              <span className={styles.by}>
                <i class="fa-solid fa-location-dot"></i>
              </span> <span className={styles.byname}>Divyangna(Nomadic_Missy)
              </span>
              <span className={styles.spbtn}>
                <Button className={styles.btn}>3D{" "}-{" "}2N</Button>
              </span>
              <div className={styles.pri}>
                <div className={styles.prdiv}>
                  <span className={styles.pr}>₹ {" "} 8500 <span className={styles.per}>{" "}/ person </span></span>
                </div>
                <div className={styles.smbox} style={{ marginRight: "1rem" }}>
                  Get Quotes
                </div>

              </div>

            </div>
            <div style={{ width: "23rem" }}>
              <hr />
            </div>
            <div className={styles.ls}>

              <img src='https://cdn1.tripoto.com/media/filter/mss/img/1358539/UserPhoto/1553849222_logo.jpg'
                className={styles.lsimg} />
              <span className={styles.lstex}>
                Tripoto Verified Partner
              </span>


            </div>
          </div>




        </Slider>
      </div>
    </div>
  )
}
