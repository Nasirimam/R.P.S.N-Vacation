import React, {Component} from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./Place.module.css";


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
  


export const Place = () => {

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
            <img src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1658864126_1657780099_cover1.jpg'
          className={styles.imge} />
            </div>
          
          <div className={styles.des}>
          All You Need To Know
About Thailand Visa For
Indians 2022
          </div>
          <div className={styles.bydiv}>
                <span className={styles.by}>By</span> <span className={styles.byname}>Tripoto</span>
          </div>

          </div>






          <div className={styles.box}>
          <div>
            <img src="https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1658863969_1493707507_15798144758_5a93457ae4_o.jpg"
          className={styles.imge} />
            </div>
         
          <div className={styles.des}>
          Add These Offbeat
Places In Europe To Your
List
          </div>
          <div className={styles.bydiv}>
                <span className={styles.by}>By</span> <span className={styles.byname}>Tanisha Mundra</span>
          </div>
          </div>





          <div className={styles.box}>
          <div>
            <img src="https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1653585757_1648645960_5.jpg"
          className={styles.imge} />
            </div>
         
          <div className={styles.des}>
         Travel Solo To These SE Asian Countries Under 25K INR
          </div>
          <div className={styles.bydiv}>
                <span className={styles.by}>By</span> <span className={styles.byname}>Disha kapkoti</span>
          </div>
          </div>




          <div className={styles.box}>
          <div>
            <img src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1651046452_1545558276_erdap_2129568_1280.jpg'
          className={styles.imge} />
            </div>
           
          <div className={styles.des}>
       You Can Travel To Serbia From india  Without A Visa
          </div>
          <div className={styles.bydiv}>
                <span className={styles.by}>By</span> <span className={styles.byname}>Tripoto</span>
          </div>
          </div>


      




        



          <div className={styles.box}>
          <div>
            <img src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1658863871_1499420095_800px_kawah_ijen_ijen_crater_7540434086.jpg'
          className={styles.imge} />
            </div>
           
          <div className={styles.des}>
         Head To This Kalediosocpic Volanic Lake In Indionasia
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
            <img src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1658864365_1529568428_1469857553_1.jpg'
          className={styles.imge} />
            </div>
           
          <div className={styles.des}>
          This August, Take A trip To Vietname Like Never Before
          </div>
          <div className={styles.bydiv}>
                <span className={styles.by}>By</span> <span className={styles.byname}>Adete Dhaiya</span>
          </div>
          </div>


         
         
        </Slider>
        </div>
    </div>
  )
}
