import React from "react";
import { Container } from "react-bootstrap";
import Cloud1 from "../assets/img/png/black-cloud-layer-3.png";
import Cloud2 from "../assets/img/png/black-cloud-layer-4.png";
import Candle1 from "../assets/img/svg/inverse-hammer.svg";
import Candle2 from "../assets/img/svg/bullish-engulfing.svg";
import Candle3 from "../assets/img/svg/bullish-engulfing-2.svg";
import Candle4 from "../assets/img/svg/doge.svg";
import Candle5 from "../assets/img/svg/bullish-engulfing-3.svg";
import Slider from "react-slick";

const Roadmap = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    variableWidth: true,
    speed: 8000,
    pauseOnHover: true,
    autoplaySpeed: 0,
    cssEase: "linear",
  };
  return (
    <>
      <div className="-mb-01">
        <img
          src={Cloud1}
          className="cloud-layer w-100 -mb-01"
          alt="black-cloud-layer"
        />
      </div>
      <div className="py-68-143 bg-black">
        <Container className="mb-141">
          <div data-aos="zoom-in" className="max-895 mx-auto">
            <h2 className="mb-21 clr-white ff-inter fw-900 fs-64 lh-77 text-center">
              ROADMAP
            </h2>
            <p className="mb-0 ff-inter fw-normal fs-16 lh-30 text-center clr-white opacity_07">
              Our roadmap isn't just a journey; it's a comedic adventure through
              the cryptoverse, filled with twists, turns, and plenty of laughs
              along the way. Here's a glimpse into what the future holds for
              Let's Hug GG ($LHGG)
            </p>
          </div>
        </Container>
        <Slider {...settings} className="d-flex justify-content-between">
          <div className=" d-flex gap-4 max-229 align-items-end">
            <img src={Candle1} alt="candle-stick" />
            <div className="mb-4">
              <h4 className="mb-2 ff-inter fw-900 fs-24 lh-30 clr-white">
                Token Launch (Q1 2024)
              </h4>
              <h5 className="mb-0 opacity_07 fw-normal fs-16 lh-30 clr-white">
                Launch $LHGG token, establish initial liquidity.
              </h5>
            </div>
          </div>
          <div className=" d-flex gap-4 max-281 align-items-center">
            <img src={Candle2} alt="candle-stick" />
            <div>
              <h4 className="mb-2 ff-inter fw-900 fs-24 lh-30 clr-white">
                Community Building (Q2 2024)
              </h4>
              <h5 className="mb-0 opacity_07 fw-normal fs-16 lh-30 clr-white">
                Grow vibrant community through humor and engagement.
              </h5>
            </div>
          </div>
          <div className=" d-flex gap-4 max-281 align-items-start ">
            <img src={Candle3} alt="candle-stick" />
            <div className="mt-13">
              <h4 className="mb-2 ff-inter fw-900 fs-24 lh-30 clr-white">
                Governance Implementation (Q3 2024)
              </h4>
              <h5 className="mb-0 opacity_07 fw-normal fs-16 lh-30 clr-white">
                Introduce community governance mechanisms.
              </h5>
            </div>
          </div>
          <div className=" d-flex gap-4 max-281 align-items-end">
            <img src={Candle4} alt="candle-stick" className="mb-31" />
            <div>
              <h4 className="mb-2 ff-inter fw-900 fs-24 lh-30 clr-white">
                Partnerships and Influencer Collaborations (Q4 2024)
              </h4>
              <h5 className="mb-0 opacity_07 fw-normal fs-16 lh-30 clr-white">
                Forge strategic partnerships and collaborations.
              </h5>
            </div>
          </div>
          <div className=" d-flex gap-4 max-281 align-items-center">
            <img src={Candle5} alt="candle-stick" />
            <div>
              <h4 className="mb-2 ff-inter fw-900 fs-24 lh-30 clr-white">
                Utility Expansion (Q1 2025)
              </h4>
              <h5 className="mb-0 opacity_07 fw-normal fs-16 lh-30 clr-white">
                Explore new use cases and integrations for $LHGG.
              </h5>
            </div>
          </div>
        </Slider>
      </div>
      <div className="-mt-01">
        <img
          src={Cloud2}
          className="cloud-layer w-100 -mt-01"
          alt="black-cloud-layer"
        />
      </div>
    </>
  );
};

export default Roadmap;
