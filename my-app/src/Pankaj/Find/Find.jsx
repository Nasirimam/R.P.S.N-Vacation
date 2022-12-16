import React, {Component} from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./Find.module.css";


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
  


export const Find = () => {

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
          <div className={styles.box}>
            <div>
            <img src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1658862164_1455274435_udaipur3_jpg.jpg'
          className={styles.imge} />
            </div>
          
          <div className={styles.des}>
          Tripoto's Destination Of
The Month:Udaipur
          </div>
          <div className={styles.bydiv}>
                <span className={styles.by}>By</span> <span className={styles.byname}>Tripoto</span>
          </div>

          </div>






          <div className={styles.box}>
          <div>
            <img src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1659027857_1658481747_depositphotos_95512066_stock_illustration_incredible_india_background.jpeg'
          className={styles.imge} />
            </div>
         
          <div className={styles.des}>
          Cheapest Domestic
Flights For Aug&Sept
2022
          </div>
          <div className={styles.bydiv}>
                <span className={styles.by}>By</span> <span className={styles.byname}>Tanisha Mundra</span>
          </div>
          </div>





          <div className={styles.box}>
          <div>
            <img src="https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1658862269_1467796889_1467796887893_5_2.jpg"
          className={styles.imge} />
            </div>
         
          <div className={styles.des}>
         Here Are The Best Places To Vist In August In India
          </div>
          <div className={styles.bydiv}>
                <span className={styles.by}>By</span> <span className={styles.byname}>Disha kapkoti</span>
          </div>
          </div>




          <div className={styles.box}>
          <div>
            <img src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1658863582_1657213046_satyan_chawla_pti5yh3a4l8_unsplash.jpg'
          className={styles.imge} />
            </div>
           
          <div className={styles.des}>
        Trips Under 10K INR That You Need To Bookmark For August
          </div>
          <div className={styles.bydiv}>
                <span className={styles.by}>By</span> <span className={styles.byname}>Tripoto</span>
          </div>
          </div>


      




        



          <div className={styles.box}>
          <div>
            <img src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1658862360_1470344082_14410876714_8fb5c0e392_o.png'
          className={styles.imge} />
            </div>
           
          <div className={styles.des}>
         Heven Hill Station That You Can Escape In This August
          </div>
          <div className={styles.bydiv}>
                <span className={styles.by}>By</span> <span className={styles.byname}>Deepti Divya</span>
          </div>
          </div>



          <div className={styles.box}>
          <div>
            <img src="https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1658862537_1658847371_mg_7852.jpg"
          className={styles.imge} />
            </div>
           
            <div className={styles.des}>
           This Town In MP  Will SoonGain "WILD"  Popularity
          </div>
          <div className={styles.bydiv}>
                <span className={styles.by}>By</span> <span className={styles.byname}>Sujay Jamkhandi</span>
          </div>
          </div>



          <div className={styles.box}>
          <div>
            <img src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1656331454_1560494791_motorcycle_2937056_1280.jpg'
          className={styles.imge} />
            </div>
           
          <div className={styles.des}>
          Things To Remmber Before Planning A Monsoon Bike Trip
          </div>
          <div className={styles.bydiv}>
                <span className={styles.by}>By</span> <span className={styles.byname}>Adete Dhaiya</span>
          </div>
          </div>


          <div className={styles.box}>
          <div>
            <img src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1656331979_1465388810_mussoorie_goa_634.jpg'
          className={styles.imge} />
            </div>
          
          <div className={styles.des}>
          Why You Should Vist Goa In Monsoon
          </div>
          <div className={styles.bydiv}>
                <span className={styles.by}>By</span> <span className={styles.byname}>Vinnie Singh</span>
          </div>
          </div>
        </Slider>
        </div>
    </div>
  )
}
