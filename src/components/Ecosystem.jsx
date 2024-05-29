import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Dextools from "../assets/img/svg/gray-dextools.svg";
import Horse from "../assets/img/svg/horse.svg";
import Twiter from "../assets/img/svg/twit.svg";
import Telegram from "../assets/img/svg/tele.svg";
import Graph from "../assets/img/svg/graph.svg";
import NewsPaper from "../assets/img/png/news-paper.webp";
import Commonbtn from "../common/Comonbtn";
import Paper from "../assets/img/svg/paper.svg";
import Spex from "../assets/img/svg/spex.svg";

const Ecosystem = () => {
  return (
    <div className="py-203-150 position-relative z-3 Candele-bg-img-2">
      <Container className="mt-68">
        <Row>
          <Col
            lg={6}
            className=" d-flex justify-content-center justify-content-lg-start"
          >
            <img
              src={NewsPaper}
              alt="NewsPaper-reading-men"
              className=" w-100 Newspaper"
            />
          </Col>
          <Col lg={6} className="mt-5 mt-lg-0">
            <div className="text-center text-lg-start">
              <div className=" d-lg-flex align-items-center gap-xl-4 gap-3 mb-13 d-none">
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
                ECOSYSTEM
              </h2>
              <p className=" mb-33 ff-inter fw-normal fs-16 lh-24 clr-black opacity_08">
                The $LHGG ecosystem is built upon the principles of inclusivity,
                humor, and innovation. Our community-driven approach empowers
                members to actively participate in governance, decision-making,
                and promotional activities. Through social media campaigns,
                memes, and creative content, we seek to amplify the message of
                embracing humor in the crypto space and challenging conventional
                narratives. Together, we aspire to foster a vibrant and engaging
                ecosystem where laughter reigns supreme.
              </p>
              <Commonbtn
                color={"clr-black"}
                buttonName={"comonBtn2"}
                name={"Buy $GrayGensler"}
              />
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
        </Row>
      </Container>
      {/* position-image */}
      <img
        src={Paper}
        alt="Newspaper-img"
        className="paper d-none d-sm-block"
      />
      <img
        className="spex-position-2 d-none d-lg-block"
        src={Spex}
        alt="eye-spex-image"
      />
    </div>
  );
};

export default Ecosystem;
