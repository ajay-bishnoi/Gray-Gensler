import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MenonCall from "../assets/img/png/calling-men.webp";
import Dextools from "../assets/img/svg/gray-dextools.svg";
import Horse from "../assets/img/svg/horse.svg";
import Twiter from "../assets/img/svg/twit.svg";
import Telegram from "../assets/img/svg/tele.svg";
import Graph from "../assets/img/svg/graph.svg";
import Spex from "../assets/img/svg/spex.svg";

const About = () => {
  return (
    <div
      data-aos="fade-up"
      className="py-218-177 about-bg position-relative z-3"
    >
      <Container>
        <Row>
          <Col lg={6} className=" d-flex justify-content-center">
            <img
              src={MenonCall}
              alt="calling-men"
              className=" w-100 calling-men-size"
            />
          </Col>
          <Col lg={6} className="mt-5 mt-lg-0">
            <div className="text-center text-lg-start">
              <div className=" d-lg-flex align-items-center gap-xl-4 gap-3 mb-26 d-none">
                <a
                  className="hero-icon"
                  target="_blank"
                  href="https://www.dextools.io/app/en/pairs"
                >
                  <img src={Dextools} alt="social-icon-dextools" />
                </a>
                <a
                  className="hero-icon"
                  target="_blank"
                  href="https://uniswap.org/"
                >
                  <img src={Horse} alt="social-icon-horse" />
                </a>
                <a className="hero-icon" target="_blank" href="https://x.com/">
                  <img src={Twiter} alt="social-icon-twiter" />
                </a>
                <a
                  className="hero-icon"
                  target="_blank"
                  href="https://telegram.org/"
                >
                  <img src={Telegram} alt="social-icon-telegaram" />
                </a>
                <a
                  className="hero-icon"
                  target="_blank"
                  href="https://dune.com/discover/content/trending"
                >
                  <img src={Graph} alt="social-icon-graph" />
                </a>
              </div>
              <h2 className="mb-20 clr-black ff-inter fw-900 fs-64 lh-77">
                ABOUT US
              </h2>
              <div>
                <p className="mb-xl-3 mb-2 ff-inter fw-normal fs-16 lh-24 clr-black opacity_08">
                  In the ever-evolving landscape of cryptocurrency, where
                  markets can swing on a tweet and sentiments wield as much
                  power as technical analysis, one figure has recently stepped
                  into the spotlight: Gary Gensler, or as we affectionately call
                  him, GG. With his recent comments on Bitcoin, Gensler stirred
                  the pot of fear, uncertainty, and doubt (FUD), sending
                  shockwaves through the crypto community.
                </p>
                <p className="mb-xl-3 mb-2 ff-inter fw-normal fs-16 lh-24 clr-black opacity_08">
                  But fear not, for in the midst of this whirlwind of emotions,
                  there emerges a beacon of levity and laughter: Let's Hug GG
                  ($LHGG).Hug GG We're not your average token; we're a humorous
                  response to the serious business of crypto. Inspired by
                  Gensler's remarks and the ensuing FUD frenzy, $LHGG aims to
                  inject a healthy dose of humor into the conversation while
                  playfully encouraging individuals to consider selling their
                  Bitcoins.
                </p>
                <p className="mb-xl-3 mb-2 ff-inter fw-normal fs-16 lh-24 clr-black opacity_08">
                  ou see, we believe that in times of uncertainty, a good laugh
                  can be the best antidote. And what better way to address fear
                  than with a hug—from behind, of course! Our slogan, "If you
                  sell your BTC, we'll let you hug GG from behind so tightly,"
                  embodies our playful approach to tackling the anxiety
                  surrounding Bitcoin and the broader crypto market.
                </p>
                <p className="mb-0 ff-inter fw-normal fs-16 lh-24 clr-black opacity_08">
                  So, buckle up and get ready for a rollercoaster ride of
                  giggles, hugs, and maybe even a few profitable trades along
                  the way. Because in the world of $LHGG, laughter isn't just
                  the best medicine—it's the best investment strategy.
                </p>
              </div>
              <div className=" d-flex align-items-center justify-content-center mt-3 h-lg-82 gap-sm-4 gap-2 flex-wrap d-lg-none">
                <a
                  className="social-icon"
                  target="_blank"
                  href="https://www.dextools.io/app/en/pairs"
                >
                  <img
                    className="w-100 h-100"
                    src={Dextools}
                    alt="social-icon-dextools"
                  />
                </a>
                <a
                  className="social-icon"
                  target="_blank"
                  href="https://uniswap.org/"
                >
                  <img
                    className="w-100 h-100"
                    src={Horse}
                    alt="social-icon-horse"
                  />
                </a>
                <a
                  className="social-icon"
                  target="_blank"
                  href="https://x.com/"
                >
                  <img
                    className="w-100 h-100"
                    src={Twiter}
                    alt="social-icon-twiter"
                  />
                </a>
                <a
                  className="social-icon"
                  target="_blank"
                  href="https://telegram.org/"
                >
                  <img
                    className="w-100 h-100"
                    src={Telegram}
                    alt="social-icon-telegaram"
                  />
                </a>
                <a
                  className="social-icon"
                  target="_blank"
                  href="https://dune.com/discover/content/trending"
                >
                  <img
                    className="w-100 h-100"
                    src={Graph}
                    alt="social-icon-graph"
                  />
                </a>
              </div>
            </div>
          </Col>
          <h5 className="mb-0 fw-900 fs-32 lh-32 clr-gray set-fudingtext-2 ff-Grandstander ">
            I love FUDing
          </h5>
          <h5 className="mb-0 fw-900 fs-32 lh-32 clr-gray set-fudingtext-3 ff-Grandstander d-none d-lg-block">
            I love FUDing
          </h5>
        </Row>
      </Container>
      {/* position-image */}
      <img
        className="spex-position d-none d-md-block"
        src={Spex}
        alt="eye-spex-image"
      />
      <h5 className="mb-0 fw-900 fs-32 lh-32 clr-gray set-fudingtext ff-Grandstander ">
        I love FUDing
      </h5>
    </div>
  );
};

export default About;
