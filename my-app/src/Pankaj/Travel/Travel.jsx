import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./Travel.module.css";
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



export const Travel = () => {

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
              <img src='https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1653391344_ln_c1.jpg'
                className={styles.imge} />
            </div>
            <div className={styles.title} styles={{ color: "black" }}>
              PACKAGE
            </div>
            <div className={styles.des} styles={{ color: "black" }}>
              Explore An Artist's Estate & Stay In A Kathkuni Home Hidden In Manali's Forests | North
            </div>
            <div className={styles.bydiv}>
              <span className={styles.by} styles={{ color: "black" }}>
                <i class="fa-solid fa-location-dot"></i>
              </span> <span className={styles.byname} styles={{ color: "black" }}>Manali</span>
              <span className={styles.spbtn}>
                <Button className={styles.btn} style={{ marginLeft: "1rem", color: "black" }}>3D{" "}-{" "}2N</Button>
              </span>
              <div className={styles.pri}>
                <div className={styles.prdiv} styles={{ color: "black" }}>
                  <span className={styles.pr} styles={{ color: "black" }}>₹ {" "} 9,850 <span styles={{ color: "black" }} className={styles.per}>{" "}/ person </span></span>
                </div>
                <div className={styles.smbox} styles={{ color: "black" }} >
                  Book Now
                </div>

              </div>
            </div>

            <div style={{ width: "20rem" }}>
              <hr />
            </div>
            <div className={styles.ls}>

              <img src='https://cdn1.tripoto.com/media/filter/mss/img/1358539/UserPhoto/1553849222_logo.jpg'
                className={styles.lsimg} styles={{ color: "black" }} />
              <span className={styles.lstex} styles={{ color: "black" }}>
                Tripoto Mindful retreats
              </span>
              <span><div styles={{ color: "black" }} className={styles.check}><i style={{ color: "#fff" }} class="fa-solid fa-check" ></i></div></span>


            </div>
          </div>






          <div className={styles.box}>
            <div>
              <img src='https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1657734830_image_cover_a.jpg'
                className={styles.imge} />
            </div>
            <div className={styles.title} styles={{ color: "black" }}>
              PACKAGE

            </div>
            <div className={styles.des} styles={{ color: "black" }}>
              Explore One Of Asia's Spookiest Spots While Unwinding Amidst Nature | Seegreen Lodges, Mussoorie
            </div>
            <div className={styles.bydiv} styles={{ color: "black" }}>
              <span className={styles.by} styles={{ color: "black" }}>
                <i class="fa-solid fa-location-dot"></i>
              </span> <span className={styles.byname} styles={{ color: "black" }}>Mussoorie</span>
              <span className={styles.spbtn} styles={{ color: "black" }}>
                <Button className={styles.btn} style={{ marginRight: "3.6rem", color: "black" }}>3D{" "}-{" "}2N</Button>
              </span>
              <div className={styles.pri} styles={{ color: "black" }}>
                <div className={styles.prdiv} styles={{ color: "black" }}>
                  <span className={styles.pr} styles={{ color: "black" }}>₹ {" "} 7,500 <span styles={{ color: "black" }} className={styles.per}>{" "}/ person </span></span>
                </div>
                <div className={styles.smbox} style={{ marginRight: "5rem", color: "black" }}>
                  Book Now
                </div>

              </div>
            </div>
            <div style={{ width: "20rem" }}>
              <hr />
            </div>
            <div className={styles.ls} styles={{ color: "black" }}>

              <img src='https://cdn1.tripoto.com/media/filter/mss/img/1358539/UserPhoto/1553849222_logo.jpg'
                className={styles.lsimg} />
              <span className={styles.lstex} styles={{ color: "black" }}>
                Tripoto Mindful retreats
              </span>
              <span><div className={styles.check} styles={{ color: "black" }}><i style={{ color: "#fff" }} class="fa-solid fa-check" ></i></div></span>


            </div>
          </div>





          <div className={styles.box}>
            <div>
              <img src='https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1660666126_image_covera.jpg'
                className={styles.imge} />
            </div>
            <div className={styles.title} styles={{ color: "black" }}>
              PACKAGE

            </div>
            <div className={styles.des} styles={{ color: "black" }}>
              Embrace Minimalistic Community Life & Learn A Traditional Martial Art | Beyond Commuunity, Auroville
            </div>
            <div className={styles.bydiv} styles={{ color: "black" }}>
              <span className={styles.by} styles={{ color: "black" }}>
                <i class="fa-solid fa-location-dot"></i>
              </span> <span className={styles.byname} styles={{ color: "black" }}>Auroville</span>
              <span className={styles.spbtn}>
                <Button className={styles.btn} style={{ marginLeft: "2rem", color: "black" }}>3D{" "}-{" "}2N</Button>
              </span>
              <div className={styles.pri}>
                <div className={styles.prdiv}>
                  <span className={styles.pr} styles={{ color: "black" }}>₹ {" "} 8500 <span styles={{ color: "black" }} className={styles.per}>{" "}/ person </span></span>
                </div>
                <div styles={{ color: "black" }} className={styles.smbox} style={{ marginRight: "3.4rem" }}>
                  Book Now
                </div>

              </div>

            </div>
            <div style={{ width: "22rem", color: "black" }}>
              <hr />
            </div>
            <div className={styles.ls} styles={{ color: "black" }}>

              <img src='https://cdn1.tripoto.com/media/filter/mss/img/1358539/UserPhoto/1553849222_logo.jpg'
                className={styles.lsimg} styles={{ color: "black" }} />
              <span className={styles.lstex} styles={{ color: "black" }}>
                Tripoto Mindful retreats
              </span>
              <span><div className={styles.check}><i style={{ color: "#fff" }} class="fa-solid fa-check" ></i></div></span>


            </div>
          </div>







          <div className={styles.box}>
            <div>
              <img src='https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1660316705_image_cover_1.jpg'
                className={styles.imge} />
            </div>
            <div className={styles.title} styles={{ color: "black" }}>
              PACKAGE

            </div>
            <div className={styles.des} styles={{ color: "black" }}>
              Learn Sketching & Go On Guided Forest WAlk Around  The Himalayan Trails | Cosmic Greek, Dharamkot
            </div>
            <div className={styles.bydiv} styles={{ color: "black" }}>
              <span className={styles.by} styles={{ color: "black" }}>
                <i class="fa-solid fa-location-dot"></i>
              </span> <span className={styles.byname} styles={{ color: "black" }}>Himachal Pradesh</span>
              <span className={styles.spbtn} styles={{ color: "black" }}>
                <Button className={styles.btn} style={{ marginLeft: "-4rem", color: "black" }}>3D{" "}-{" "}2N</Button>
              </span>
              <div className={styles.pri} styles={{ color: "black" }}>
                <div className={styles.prdiv} styles={{ color: "black" }}>
                  <span className={styles.pr} styles={{ color: "black" }}>₹ {" "} 8500 <span className={styles.per}>{" "}/ person </span></span>
                </div>
                <div className={styles.smbox} style={{ marginRight: "6rem" }} styles={{ color: "black" }}>
                  Book Now
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
                Tripoto Mindful retreats
              </span>
              <span><div className={styles.check}><i style={{ color: "#fff" }} class="fa-solid fa-check" ></i></div></span>


            </div>
          </div>









          <div className={styles.box}>
            <div>
              <img src='https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1660316705_image_cover_1.jpg'
                className={styles.imge} />
            </div>
            <div className={styles.title} styles={{ color: "black" }}>
              PACKAGE

            </div>
            <div className={styles.des} styles={{ color: "black" }}>
              Learn Sketching & Go On Guided Forest WAlk Around  The Himalayan Trails | Cosmic Greek, Dharamkot
            </div>
            <div className={styles.bydiv} styles={{ color: "black" }}>
              <span className={styles.by} styles={{ color: "black" }}>
                <i class="fa-solid fa-location-dot"></i>
              </span> <span className={styles.byname} styles={{ color: "black" }}>Himachal Pradesh</span>
              <span className={styles.spbtn} styles={{ color: "black" }}>
                <Button className={styles.btn} style={{ marginLeft: "-4rem", color: "black" }}>3D{" "}-{" "}2N</Button>
              </span>
              <div className={styles.pri} styles={{ color: "black" }}>
                <div className={styles.prdiv} styles={{ color: "black" }}>
                  <span className={styles.pr} styles={{ color: "black" }}>₹ {" "} 8500 <span className={styles.per}>{" "}/ person </span></span>
                </div>
                <div className={styles.smbox} style={{ marginRight: "6rem" }} styles={{ color: "black" }}>
                  Book Now
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
                Tripoto Mindful retreats
              </span>
              <span><div className={styles.check}><i style={{ color: "#fff" }} class="fa-solid fa-check" ></i></div></span>


            </div>
          </div>






          <div className={styles.box}>
            <div>
              <img src='https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1660316705_image_cover_1.jpg'
                className={styles.imge} />
            </div>
            <div className={styles.title} styles={{ color: "black" }}>
              PACKAGE

            </div>
            <div className={styles.des} styles={{ color: "black" }}>
              Learn Sketching & Go On Guided Forest WAlk Around  The Himalayan Trails | Cosmic Greek, Dharamkot
            </div>
            <div className={styles.bydiv} styles={{ color: "black" }}>
              <span className={styles.by} styles={{ color: "black" }}>
                <i class="fa-solid fa-location-dot"></i>
              </span> <span className={styles.byname} styles={{ color: "black" }}>Himachal Pradesh</span>
              <span className={styles.spbtn} styles={{ color: "black" }}>
                <Button className={styles.btn} style={{ marginLeft: "-4rem", color: "black" }}>3D{" "}-{" "}2N</Button>
              </span>
              <div className={styles.pri} styles={{ color: "black" }}>
                <div className={styles.prdiv} styles={{ color: "black" }}>
                  <span className={styles.pr} styles={{ color: "black" }}>₹ {" "} 8500 <span className={styles.per}>{" "}/ person </span></span>
                </div>
                <div className={styles.smbox} style={{ marginRight: "6rem" }} styles={{ color: "black" }}>
                  Book Now
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
                Tripoto Mindful retreats
              </span>
              <span><div className={styles.check}><i style={{ color: "#fff" }} class="fa-solid fa-check" ></i></div></span>


            </div>
          </div>





          <div className={styles.box}>
            <div>
              <img src='https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1660316705_image_cover_1.jpg'
                className={styles.imge} />
            </div>
            <div className={styles.title} styles={{ color: "black" }}>
              PACKAGE

            </div>
            <div className={styles.des} styles={{ color: "black" }}>
              Learn Sketching & Go On Guided Forest WAlk Around  The Himalayan Trails | Cosmic Greek, Dharamkot
            </div>
            <div className={styles.bydiv} styles={{ color: "black" }}>
              <span className={styles.by} styles={{ color: "black" }}>
                <i class="fa-solid fa-location-dot"></i>
              </span> <span className={styles.byname} styles={{ color: "black" }}>Himachal Pradesh</span>
              <span className={styles.spbtn} styles={{ color: "black" }}>
                <Button className={styles.btn} style={{ marginLeft: "-4rem", color: "black" }}>3D{" "}-{" "}2N</Button>
              </span>
              <div className={styles.pri} styles={{ color: "black" }}>
                <div className={styles.prdiv} styles={{ color: "black" }}>
                  <span className={styles.pr} styles={{ color: "black" }}>₹ {" "} 8500 <span className={styles.per}>{" "}/ person </span></span>
                </div>
                <div className={styles.smbox} style={{ marginRight: "6rem" }} styles={{ color: "black" }}>
                  Book Now
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
                Tripoto Mindful retreats
              </span>
              <span><div className={styles.check}><i style={{ color: "#fff" }} class="fa-solid fa-check" ></i></div></span>


            </div>
          </div>





          <div className={styles.box}>
            <div>
              <img src='https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1660316705_image_cover_1.jpg'
                className={styles.imge} />
            </div>
            <div className={styles.title} styles={{ color: "black" }}>
              PACKAGE

            </div>
            <div className={styles.des} styles={{ color: "black" }}>
              Learn Sketching & Go On Guided Forest WAlk Around  The Himalayan Trails | Cosmic Greek, Dharamkot
            </div>
            <div className={styles.bydiv} styles={{ color: "black" }}>
              <span className={styles.by} styles={{ color: "black" }}>
                <i class="fa-solid fa-location-dot"></i>
              </span> <span className={styles.byname} styles={{ color: "black" }}>Himachal Pradesh</span>
              <span className={styles.spbtn} styles={{ color: "black" }}>
                <Button className={styles.btn} style={{ marginLeft: "-4rem", color: "black" }}>3D{" "}-{" "}2N</Button>
              </span>
              <div className={styles.pri} styles={{ color: "black" }}>
                <div className={styles.prdiv} styles={{ color: "black" }}>
                  <span className={styles.pr} styles={{ color: "black" }}>₹ {" "} 8500 <span className={styles.per}>{" "}/ person </span></span>
                </div>
                <div className={styles.smbox} style={{ marginRight: "6rem" }} styles={{ color: "black" }}>
                  Book Now
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
                Tripoto Mindful retreats
              </span>
              <span><div className={styles.check}><i style={{ color: "#fff" }} class="fa-solid fa-check" ></i></div></span>


            </div>
          </div>



          <div className={styles.box}>
            <div>
              <img src='https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1660316705_image_cover_1.jpg'
                className={styles.imge} />
            </div>
            <div className={styles.title} styles={{ color: "black" }}>
              PACKAGE

            </div>
            <div className={styles.des} styles={{ color: "black" }}>
              Learn Sketching & Go On Guided Forest WAlk Around  The Himalayan Trails | Cosmic Greek, Dharamkot
            </div>
            <div className={styles.bydiv} styles={{ color: "black" }}>
              <span className={styles.by} styles={{ color: "black" }}>
                <i class="fa-solid fa-location-dot"></i>
              </span> <span className={styles.byname} styles={{ color: "black" }}>Himachal Pradesh</span>
              <span className={styles.spbtn} styles={{ color: "black" }}>
                <Button className={styles.btn} style={{ marginLeft: "-4rem", color: "black" }}>3D{" "}-{" "}2N</Button>
              </span>
              <div className={styles.pri} styles={{ color: "black" }}>
                <div className={styles.prdiv} styles={{ color: "black" }}>
                  <span className={styles.pr} styles={{ color: "black" }}>₹ {" "} 8500 <span className={styles.per}>{" "}/ person </span></span>
                </div>
                <div className={styles.smbox} style={{ marginRight: "6rem" }} styles={{ color: "black" }}>
                  Book Now
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
                Tripoto Mindful retreats
              </span>
              <span><div className={styles.check}><i style={{ color: "#fff" }} class="fa-solid fa-check" ></i></div></span>


            </div>
          </div>




        </Slider>
      </div>
    </div>
  )
}
