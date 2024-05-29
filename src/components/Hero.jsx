import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import GGman from "../assets/img/png/hero-img.webp";
import Commonbtn from "../common/Comonbtn";
import { FileIcon, TelegramIcon, TwitterICon } from "../assets/Svgicon";
import Dextools2 from "../assets/img/svg/dextools-2.svg";

const Hero = () => {
  const [inputValue, setInputValue] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setInputValue(file.name);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <>
      <div data-aos="zoom-in" className="py-136-128 position-relative z-3">
        <Container>
          <div className="max-w-538">
            <h1 className="mb-0 ff-inter fw-900 fs-108 lh-130 clr-white">
              G<span className="clr-orange">G</span>
            </h1>
            <h6 className="mb-62 clr-white ff-inter opacity_08 fs-20 lh-24 fw-semibold">
              Join The{" "}
              <span className="clr-orange "> Worldwide Blockchain</span>{" "}
              Protest Against Corrupt Government Bodies
            </h6>
            <div className="mb-36 d-flex align-items-center gap-20">
              <Commonbtn
                color={"clr-black"}
                buttonName={"comonBtn2"}
                name={"Buy $GrayGensler"}
              />
              <Commonbtn
                color="clr-white"
                buttonName="comonBtn"
                name="How To Buy?"
              />
            </div>
            <div className="input-container w-100 d-flex align-items-center">
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="dwqjddj324dnewdne3dewrrets"
                className="ff-inter fw-normal fs-20 lh-30 clr-white bg-transparent border-0"
              />
              <label htmlFor="file-upload" className="file-upload-label">
                <FileIcon />
              </label>
              <input
                type="file"
                id="file-upload"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </div>
          </div>
        </Container>
        {/* poisiton-image */}
        <img src={GGman} className="hero-img z-n1" alt="hero-image" />
      </div>
      {/* yellow-box */}
      <div className="bg-orange py-39 -mt-33">
        <Container>
          <Row className=" iconBox justify-content-center">
            <Col
              data-aos="flip-up"
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
              data-aos="flip-up"
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
              data-aos="flip-up"
              lg={4}
              md={6}
              className=" d-flex justify-content-lg-end  mt-lg-0 mt-4 justify-content-center"
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
    </>
  );
};

export default Hero;
