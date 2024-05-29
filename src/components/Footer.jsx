import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import dextools from "../assets/img/svg/dextools-icon.svg";
import xIcon from "../assets/img/svg/x-icon.svg";
import telegram from "../assets/img/svg/telegram-icon.svg";
import Dextools2 from "../assets/img/svg/dextools-2.svg";
import { TelegramIcon, TwitterICon } from "../assets/Svgicon";

const Footer = () => {
  return (
    <>
      {/* yellow-box */}
      <div className="bg-orange py-39">
        <Container>
          <Row className=" iconBox justify-content-center">
            <Col
              lg={4}
              sm={6}
              className=" d-flex justify-content-center justify-content-sm-start"
            >
              <a
                href="https://x.com/"
                target="_blank"
                className=" d-flex align-items-center gap-22 hero-icon"
              >
                <TwitterICon />
                <span className=" ff-inter fw-semibold fs-48 lh-58 clr-white">
                  twitter
                </span>
              </a>
            </Col>
            <Col
              lg={4}
              sm={6}
              className="d-flex justify-content-lg-start justify-content-sm-end mt-sm-0 mt-4 justify-content-center"
            >
              <a
                href="https://web.telegram.org/"
                target="_blank"
                className=" d-flex align-items-center gap-22 hero-icon"
              >
                <TelegramIcon />
                <span className=" ff-inter fw-semibold fs-48 lh-58 clr-white">
                  Telegram
                </span>
              </a>
            </Col>
            <Col
              lg={4}
              md={6}
              className=" d-flex justify-content-lg-end justify-content-md-start mt-lg-0 mt-4 justify-content-center"
            >
              <a
                href="https://info.dextools.io/"
                target="_blank"
                className=" d-flex align-items-center gap-22 hero-icon"
              >
                <img
                  src={Dextools2}
                  className="dextool-size"
                  alt="Dextools-icon"
                />
                <span className=" ff-inter fw-semibold fs-48 lh-58 clr-white">
                  DEXTOOLS
                </span>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
      {/* footer */}
      <div className="bg-black py-153-131">
        <Container>
          <Row className=" justify-content-between">
            <Col
              md={3}
              sm={4}
              className=" d-flex justify-content-center justify-content-sm-start"
            >
              <div className=" align-items-center d-flex flex-column">
                <h1 className=" ff-inter fw-900 fs-79 lh-95 clr-white mb-41 pointer">
                  G<span className="clr-orange">G</span>
                </h1>
                <h5 className=" ff-inter fs-16 lh-24 clr-white mb-4 mb-sm-0">
                  @copyright2024
                </h5>
                <div className=" d-flex d-sm-none align-items-center gap-21">
                  <a
                    className="nav-logo"
                    href="https://info.dextools.io/"
                    target="_blank"
                  >
                    <img src={dextools} alt="dextools-logo" />
                  </a>
                  <a className="nav-logo" href="https://x.com/" target="_blank">
                    <img src={xIcon} alt="x-logo" />
                  </a>
                  <a
                    className="nav-logo"
                    href="https://web.telegram.org/"
                    target="_blank"
                  >
                    <img src={telegram} alt="telegram-logo" />
                  </a>
                </div>
              </div>
            </Col>
            <Col
              md={2}
              sm={3}
              className="mt-13 d-flex justify-content-sm-end justify-content-center"
            >
              <ul className="ps-0 mb-0 d-flex flex-column gap-3 position-relative orange-line">
                <li className=" ff-inter fw-bold fs-16 lh-24 clr-white mb-sm-3 ">
                  QUICK LINKS
                </li>
                <li>
                  <a
                    target="_blank"
                    className=" ff-inter fw-normal fs-16 lh-24 clr-white social-link position-relative"
                    href="https://x.com/"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className=" ff-inter fw-normal fs-16 lh-24 clr-white social-link position-relative"
                    href="https://web.telegram.org/"
                  >
                    Telegram
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className=" ff-inter fw-normal fs-16 lh-24 clr-white social-link position-relative"
                    href="https://www.dextools.io/"
                  >
                    DexTools
                  </a>
                </li>
              </ul>
            </Col>
            <Col
              md={4}
              sm={5}
              xs={12}
              className=" d-sm-flex justify-content-sm-end h-100 mt-26 d-none"
            >
              <div className=" d-flex align-items-center gap-21">
                <a
                  className="nav-logo"
                  href="https://info.dextools.io/"
                  target="_blank"
                >
                  <img src={dextools} alt="dextools-logo" />
                </a>
                <a className="nav-logo" href="https://x.com/" target="_blank">
                  <img src={xIcon} alt="x-logo" />
                </a>
                <a
                  className="nav-logo"
                  href="https://web.telegram.org/"
                  target="_blank"
                >
                  <img src={telegram} alt="telegram-logo" />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
