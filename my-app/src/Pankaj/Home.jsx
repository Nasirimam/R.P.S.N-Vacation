import React from "react";
import styles from "./Home.module.css";
import { Swiper, SwiperSlide } from "swiper";
import "swiper/css";
import { Input } from "@chakra-ui/react";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Inspotlight } from "./Insportlight/Inspotlight";
import { Find } from "./Find/Find";
import { Place } from "./Place/Place";
import { Check } from "./Check/Check";
import { Travel } from "./Travel/Travel";
import { Readmore } from "./Creator/Readmore";
import { Creator } from "./Creator/Creator";
import { Plan } from "./Plan/Plan";
import { Watch } from "./Watch/Watch";
import { Book } from "./Book/Book";

export const Home = () => {
  return (
    <div>
      <div className={styles.bottomhome}>
        {/* <div className={styles.bandown}>
          <div>
            <img src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192329_aa.png" />
          </div>
          <div>
            <img src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192307_cc.png" />
          </div>
          <div>
            <img src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192273_bb.png" />
          </div>
          <div>
            <img src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192344_dd.png" />
          </div>
        </div> */}
        <div className={styles.container}>
          <div className={styles.cont}>
            <h2 style={{ textAlign: "left", fontSize: "28px", color: "black" }}>
              In the Spotlight: Partnerships
            </h2>
            <div>
              <Inspotlight />
            </div>
            <div className={styles.divgif}>
              <img
                src="https://cdn1.tripoto.com/media/transfer/img/2224454/Image/1656479622_header_web2.gif"
                className={styles.gif}
              />
            </div>

            <div className={styles.find}>
              <div>
                <h2
                  style={{
                    textAlign: "left",
                    fontSize: "28px",
                    marginBottom: "1rem",
                    color: "black",
                  }}
                >
                  Find Best Places to Visit in India in August & September
                </h2>
              </div>
              <div>
                <Find />
              </div>
            </div>

            <div className={styles.place}>
              <div>
                <h2
                  style={{
                    textAlign: "left",
                    fontSize: "28px",
                    marginBottom: "1rem",
                    color: "black",
                  }}
                >
                  Plan International Trips for August & September
                </h2>
              </div>
              <div>
                <Place />
              </div>
            </div>

            <div className={styles.checkout}>
              <div>
                <h2
                  style={{
                    textAlign: "left",
                    fontSize: "28px",
                    marginBottom: "1rem",
                    color: "black",
                  }}
                >
                  Check Out Best Hotels and Properties for Every Type of
                  Traveller
                </h2>
              </div>
              <div>
                <Check />
              </div>
            </div>

            <div className={styles.travel}>
              <div>
                <h2
                  style={{
                    textAlign: "left",
                    fontSize: "28px",
                    marginBottom: "1rem",
                    color: "black",
                  }}
                >
                  Travel and Learn with Tripoto's Mindful Retreats
                </h2>
              </div>
              <div>
                <Travel />
              </div>
            </div>

            <div className={styles.book}>
              <div>
                <h2
                  style={{
                    textAlign: "left",
                    fontSize: "28px",
                    marginBottom: "1rem",
                    color: "black",
                  }}
                >
                  Book Budget Tour Packages Curated For You
                </h2>
              </div>
              <div>
                <Book />
              </div>
            </div>

            {/* <div className={styles.creator}>
              <div>
                <h2
                  style={{
                    textAlign: "left",
                    fontSize: "28px",
                    marginBottom: "1rem",
                    color: "black",
                  }}
                >
                  In the Spotlight: Tripoto Creators of the Month - July 2022
                </h2>
              </div>
              <div>
                <Creator />

                <div className={styles.creimg}>
                  <div>
                    <img
                      src="https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1660286748_12.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1660290817_13.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1660290935_11.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div> */}

            <div className={styles.plan}>
              <div>
                <h2
                  style={{
                    textAlign: "left",
                    fontSize: "28px",
                    marginBottom: "1rem",
                    color: "black",
                  }}
                >
                  Plan Your Next Trip Using Tripoto's Complete Destination
                  Guides
                </h2>
              </div>
              <div>
                <Plan />
              </div>
            </div>

            <div className={styles.watch}>
              <div>
                <h2
                  style={{
                    textAlign: "left",
                    fontSize: "28px",
                    marginBottom: "1rem",
                    color: "black",
                  }}
                >
                  Watch Tripoto's Top Travel Vlogs of the Week
                </h2>
              </div>

              <div>
                <Watch />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
