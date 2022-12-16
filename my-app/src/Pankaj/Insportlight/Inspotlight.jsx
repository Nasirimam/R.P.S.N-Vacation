import React, {Component} from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./Inspotlight.module.css";
import { useNavigate } from 'react-router-dom';


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
  


export const Inspotlight = () => {
  const navigate = useNavigate();


  const gotodeta = () => {
navigate("/details")
  }

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
          <div className={styles.box} onClick={gotodeta}>
            <div>
            <img src='https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1660817736_078_commonarea_07_min.jpg'
          className={styles.imge} />
            </div>
            <div className={styles.title}>
            GOSTOPS
            </div>
          <div className={styles.des}>
          Experience The Best Of
Monsoon With These
Trendy GOSTOPS Stays
Under Rs 2,000
          </div>

          </div>






          <div className={styles.box}>
          <div>
            <img src='https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1659608221_d0f7de4a_b1d9_40e0_bba0_d0527a824e78.jpg'
          className={styles.imge} />
            </div>
            <div className={styles.title}>
            SINGAPORE TOURISM BOARD

            </div>
          <div className={styles.des}>
          The Panchi Befikra Contest Is
Live And Here's Why You
Should Participate!
          </div>
          </div>





          <div className={styles.box}>
          <div>
            <img src='https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1660808085_shutterstock_1611239635_min.jpg'
          className={styles.imge} />
            </div>
            <div className={styles.title}>
            SAUDI TOURISM AUTHORITY

            </div>
          <div className={styles.des}>
          This Quiz on Saudi Will Help You Design Your Best Adventure!
          </div>
          </div>




          <div className={styles.box}>
          <div>
            <img src='https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1660310642_j_1.jpg'
          className={styles.imge} />
            </div>
            <div className={styles.title}>
            NIYO GLOBAL
            </div>
          <div className={styles.des}>
          India&#x27;s Top Travel Influencers Share Their Best Secrets for Budget International Trips!
          </div>
          </div>


      




        



          <div className={styles.box}>
          <div>
            <img src='https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1660807748_shutterstock_1876968394_1_min.jpg'
          className={styles.imge} />
            </div>
            <div className={styles.title}>
            SAUDI TOURISM AUTHORITY
            </div>
          <div className={styles.des}>
          Offering a Mix of Culture and Modernity, Riyadh Is Perfect for Every Kind of Traveller
          </div>
          </div>



          <div className={styles.box}>
          <div>
            <img src='https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1660807837_shutterstock_1967521477_min.jpg'
          className={styles.imge} />
            </div>
            <div className={styles.title}>
            SAUDI TOURISM AUTHORITY
            </div>
            <div className={styles.des}>
            સાઉદીઃ કેવી રીતે કરવો આ અનોખા દેશનો યાદગાર પ્રવાસ
          </div>
          </div>



          <div className={styles.box}>
          <div>
            <img src='https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1659354694_yaopey_yong_flmptucjkto_unsplash.jpg'
          className={styles.imge} />
            </div>
            <div className={styles.title}>
            AMBERSTUDENTS
            </div>
          <div className={styles.des}>
          Student in London? Here’s Your Guide to Affordable and Exciting Ways to Explore The City!
          </div>
          </div>


          <div className={styles.box}>
          <div>
            <img src='https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1660807878_saudi_farasan.jpg'
          className={styles.imge} />
            </div>
            <div className={styles.title}>
            SAUDI TOURISM AUTHORITY
            </div>
          <div className={styles.des}>
          সমুদ্র, স্থাপত্য ও ইতিহাসের এক অনন্য মেলবন্ধন - সৌদি আরব ভ্রমণের একটি সম্পূর্ণ ট্রাভেল গাইড
          </div>
          </div>
        </Slider>
        </div>
    </div>
  )
}
