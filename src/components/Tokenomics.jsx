import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlackCloudLayer from "../assets/img/png/black-cloud-layer-1.png";
import BlackCloudLayer2 from "../assets/img/png/black-cloud-layer-2.png";

const Tokenomics = () => {
  return (
    <>
      <div className="-mb-01">
        <img
          src={BlackCloudLayer}
          className="cloud-layer w-100 -mb-01"
          alt="black-layer"
        />
      </div>
      <div className="py-82-51 bg-black">
        <Container>
          <Row>
            <Col xl={5} lg={6}>
              <div
                data-aos="flip-right"
                className=" d-flex flex-column justify-content-center align-items-center align-items-lg-start"
              >
                <h2 className="mb-21 clr-white ff-inter fw-900 fs-64 lh-77 text-center text-lg-start">
                  TOKENOMICS
                </h2>
                <p className=" ff-inter fw-normal fs-16 lh-30 clr-white opacity_08 mb-21 text-center text-lg-start">
                  Let's Hug GG ($LHGG) operates on a deflationary tokenomics
                  model designed to incentivize selling Bitcoin. With a fixed
                  total supply and a burn mechanism in place, each transaction
                  contributes to reducing the circulating supply of $LHGG,
                  thereby increasing its scarcity and value over time.
                  Additionally, a portion of transaction fees is allocated to
                  liquidity pools, ensuring stability and liquidity for $LHGG
                  holders.
                </p>
                <div className=" d-flex align-items-center gray-border gap-2">
                  <ul className="ps-0 mb-0 d-flex flex-column gap-12">
                    <li className=" fw-normal clr-white fs-20 lh-30 ff-inter">
                      Token Name:
                    </li>
                    <li className=" fw-normal clr-white fs-20 lh-30 ff-inter">
                      Token Symbol:
                    </li>
                    <li className=" fw-normal clr-white fs-20 lh-30 ff-inter">
                      Token Supply:
                    </li>
                    <li className=" fw-normal clr-white fs-20 lh-30 ff-inter">
                      Token Type:
                    </li>
                  </ul>
                  <ul className="ps-0 mb-0 d-flex flex-column gap-12">
                    <li className=" fw-bold clr-white fs-20 lh-30 ff-inter">
                      Let’s Hug GG
                    </li>
                    <li className=" fw-bold clr-white fs-20 lh-30 ff-inter">
                      $LHGG
                    </li>
                    <li className=" fw-bold clr-white fs-20 lh-30 ff-inter">
                      1 Billion $LHGG
                    </li>
                    <li className=" fw-bold clr-white fs-20 lh-30 ff-inter">
                      Solana SPL Token
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col
              xl={7}
              lg={6}
              className=" d-flex flex-wrap justify-content-lg-end justify-content-center h-100 mt-5 mt-lg-0"
            >
              <div className=" d-flex flex-wrap justify-content-xl-center justify-content-center justify-content-lg-start max-616 mt-21">
                <div className="d-flex  flex-wrap justify-content-md-between justify-content-center w-100 gap-14">
                  <div
                    data-aos="flip-up"
                    className="token-yello-box d-flex flex-column align-items-center justify-content-center"
                  >
                    <h5 className=" ff-inter fw-semibold fs-20 lh-30 clr-black mb-2">
                      Marketing & Partnerships
                    </h5>
                    <h4 className=" ff-inter fw-semibold fs-32 lh-30 clr-black mb-0">
                      5%
                    </h4>
                  </div>
                  <div
                    data-aos="flip-up"
                    className="token-yello-box-2 d-sm-flex d-none flex-column align-items-center justify-content-center"
                  >
                    <h5 className=" ff-inter fw-semibold fs-20 lh-30 clr-black mb-2">
                      Reserve
                    </h5>
                    <h4 className=" ff-inter fw-semibold fs-32 lh-30 clr-black mb-0">
                      5%
                    </h4>
                  </div>
                  <div
                    data-aos="flip-up"
                    className="token-yello-box-3 d-xl-flex d-lg-none d-none d-sm-flex flex-column align-items-center justify-content-center"
                  >
                    <h5 className=" ff-inter fw-semibold fs-20 lh-30 clr-black mb-2 ">
                      Public Sale
                    </h5>
                    <h4 className=" ff-inter fw-semibold fs-32 lh-30 clr-black mb-0">
                      45%
                    </h4>
                  </div>
                </div>
                <div className="d-sm-none d-flex w-100 gap-12 justify-content-center mt-18">
                  <div
                    data-aos="flip-up"
                    className="token-yello-box-2 d-flex  flex-column align-items-center justify-content-center"
                  >
                    <h5 className=" ff-inter fw-semibold fs-20 lh-30 clr-black mb-2">
                      Reserve
                    </h5>
                    <h4 className=" ff-inter fw-semibold fs-32 lh-30 clr-black mb-0">
                      5%
                    </h4>
                  </div>
                  <div
                    data-aos="flip-up"
                    className="token-yello-box-3 d-flex flex-column align-items-center justify-content-center"
                  >
                    <h5 className=" ff-inter fw-semibold fs-20 lh-30 clr-black mb-2 ">
                      Public Sale
                    </h5>
                    <h4 className=" ff-inter fw-semibold fs-32 lh-30 clr-black mb-0">
                      45%
                    </h4>
                  </div>
                </div>
                {/*  */}
                <div className=" d-flex gap-14 flex-wrap justify-content-md-between justify-content-center w-100 mt-18">
                  <div
                    data-aos="flip-up"
                    className="token-yello-box d-flex flex-column align-items-center justify-content-center"
                  >
                    <h5 className=" ff-inter fw-semibold fs-20 lh-30 clr-black mb-2">
                      Community Development
                    </h5>
                    <h4 className=" ff-inter fw-semibold fs-32 lh-30 clr-black mb-0">
                      15%
                    </h4>
                  </div>
                  <div
                    data-aos="flip-up"
                    className="token-yello-box-3 d-xl-none d-lg-flex d-none flex-column align-items-center justify-content-center"
                  >
                    <h5 className=" ff-inter fw-semibold fs-20 lh-30 clr-black mb-2 ">
                      Public Sale
                    </h5>
                    <h4 className=" ff-inter fw-semibold fs-32 lh-30 clr-black mb-0">
                      45%
                    </h4>
                  </div>
                  <div
                    data-aos="flip-up"
                    className="token-yello-box d-flex flex-column align-items-center justify-content-center"
                  >
                    <h5 className=" ff-inter fw-semibold fs-20 lh-30 clr-black mb-2">
                      Ecosystem Fund
                    </h5>
                    <h4 className=" ff-inter fw-semibold fs-32 lh-30 clr-black mb-0">
                      10%
                    </h4>
                  </div>
                </div>
                {/*  */}
                <div
                  data-aos="flip-up"
                  className="token-yello-box d-flex flex-column align-items-center justify-content-center mt-14"
                >
                  <h5 className=" ff-inter fw-semibold fs-20 lh-30 clr-black mb-2">
                    Team & Adisors
                  </h5>
                  <h4 className=" ff-inter fw-semibold fs-32 lh-30 clr-black mb-0">
                    20%
                  </h4>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="-mt-01">
        <img
          src={BlackCloudLayer}
          className=" w-100 cloud-layer rotate-180 -mt-01"
          alt="black-cloud-layer"
        />
      </div>
    </>
  );
};

export default Tokenomics;
