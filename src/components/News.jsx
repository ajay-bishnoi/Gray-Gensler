import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProfilePic from "../assets/img/svg/profile-pic.svg";
import { ComentIcon, Like, Retweet, Share, Verified } from "../assets/Svgicon";
import Mobile from "../assets/img/svg/moblie.svg";
import Laptop from "../assets/img/svg/laptop.svg";

const News = () => {
  return (
    <div className="py-125-96 position-relative z-3 Candele-bg-img">
      <Container>
        <h2 className="mb-96 clr-black ff-inter fw-900 fs-64 lh-77 text-center">
          LATEST NEWS
        </h2>
        <Row className="row-gap-27">
          <Col lg={4} sm={6}>
            <div className="newsBox">
              <div className=" d-flex align-items-center mb-21 gap-14">
                <img src={ProfilePic} alt="profile-pic" className=" pointer" />
                <div className="">
                  <h5 className=" ff-inter fw-900 fs-16 lh-19 clr-black mb-1">
                    Joe Bidenn{" "}
                    <span className="ms-1">
                      <Verified />
                    </span>
                  </h5>
                  <h6 className="mb-0 ff-inter fw-normal fs-14 lh-24 clr-black opacity_08">
                    I am giving back in the community.
                  </h6>
                </div>
              </div>
              <p className="mb-27 ff-inter fw-normal fs-16 lh-24 clr-black opacity_08">
                Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape
                salvia vexillologist. Kickstarter sartorial post-ironic
                biodiesel cold-pressed a activated subway. Af dsa kickstarter
                squid.
              </p>
              <div className=" d-flex align-items-center justify-content-between">
                <div className=" d-flex gap-1 align-items-center">
                  <ComentIcon />
                  <h6 className=" mb-0 fw-normal fs-14 lh-16 clr-gray2 lt-spacing ff-sf">
                    28
                  </h6>
                </div>
                <div className=" d-flex gap-1 align-items-center">
                  <Retweet />
                  <h6 className=" mb-0 fw-normal fs-14 lh-16 clr-gray2 lt-spacing ff-sf">
                    5
                  </h6>
                </div>
                <div className=" d-flex gap-1 align-items-center">
                  <Like />
                  <h6 className=" mb-0 fw-normal fs-14 lh-16 clr-gray2 lt-spacing ff-sf">
                    21
                  </h6>
                </div>
                <Share />
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6}>
            <div className="newsBox">
              <div className=" d-flex align-items-center mb-21 gap-14">
                <img src={ProfilePic} alt="profile-pic" className=" pointer" />
                <div className="">
                  <h5 className=" ff-inter fw-900 fs-16 lh-19 clr-black mb-1">
                    Joe Bidenn{" "}
                    <span className="ms-1">
                      <Verified />
                    </span>
                  </h5>
                  <h6 className="mb-0 ff-inter fw-normal fs-14 lh-24 clr-black opacity_08">
                    I am giving back in the community.
                  </h6>
                </div>
              </div>
              <p className="mb-27 ff-inter fw-normal fs-16 lh-24 clr-black opacity_08">
                Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape
                salvia vexillologist. Kickstarter sartorial post-ironic
                biodiesel cold-pressed a activated subway. Af dsa kickstarter
                squid.
              </p>
              <div className=" d-flex align-items-center justify-content-between">
                <div className=" d-flex gap-1 align-items-center">
                  <ComentIcon />
                  <h6 className=" mb-0 fw-normal fs-14 lh-16 clr-gray2 lt-spacing ff-sf">
                    28
                  </h6>
                </div>
                <div className=" d-flex gap-1 align-items-center">
                  <Retweet />
                  <h6 className=" mb-0 fw-normal fs-14 lh-16 clr-gray2 lt-spacing ff-sf">
                    5
                  </h6>
                </div>
                <div className=" d-flex gap-1 align-items-center">
                  <Like />
                  <h6 className=" mb-0 fw-normal fs-14 lh-16 clr-gray2 lt-spacing ff-sf">
                    21
                  </h6>
                </div>
                <Share />
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6}>
            <div className="newsBox">
              <div className=" d-flex align-items-center mb-21 gap-14">
                <img src={ProfilePic} alt="profile-pic" className=" pointer" />
                <div className="">
                  <h5 className=" ff-inter fw-900 fs-16 lh-19 clr-black mb-1">
                    Joe Bidenn{" "}
                    <span className="ms-1">
                      <Verified />
                    </span>
                  </h5>
                  <h6 className="mb-0 ff-inter fw-normal fs-14 lh-24 clr-black opacity_08">
                    I am giving back in the community.
                  </h6>
                </div>
              </div>
              <p className="mb-27 ff-inter fw-normal fs-16 lh-24 clr-black opacity_08">
                Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape
                salvia vexillologist. Kickstarter sartorial post-ironic
                biodiesel cold-pressed a activated subway. Af dsa kickstarter
                squid.
              </p>
              <div className=" d-flex align-items-center justify-content-between">
                <div className=" d-flex gap-1 align-items-center">
                  <ComentIcon />
                  <h6 className=" mb-0 fw-normal fs-14 lh-16 clr-gray2 lt-spacing ff-sf">
                    28
                  </h6>
                </div>
                <div className=" d-flex gap-1 align-items-center">
                  <Retweet />
                  <h6 className=" mb-0 fw-normal fs-14 lh-16 clr-gray2 lt-spacing ff-sf">
                    5
                  </h6>
                </div>
                <div className=" d-flex gap-1 align-items-center">
                  <Like />
                  <h6 className=" mb-0 fw-normal fs-14 lh-16 clr-gray2 lt-spacing ff-sf">
                    21
                  </h6>
                </div>
                <Share />
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6}>
            <div className="newsBox">
              <div className=" d-flex align-items-center mb-21 gap-14">
                <img src={ProfilePic} alt="profile-pic" className=" pointer" />
                <div className="">
                  <h5 className=" ff-inter fw-900 fs-16 lh-19 clr-black mb-1">
                    Joe Bidenn{" "}
                    <span className="ms-1">
                      <Verified />
                    </span>
                  </h5>
                  <h6 className="mb-0 ff-inter fw-normal fs-14 lh-24 clr-black opacity_08">
                    I am giving back in the community.
                  </h6>
                </div>
              </div>
              <p className="mb-27 ff-inter fw-normal fs-16 lh-24 clr-black opacity_08">
                Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape
                salvia vexillologist. Kickstarter sartorial post-ironic
                biodiesel cold-pressed a activated subway. Af dsa kickstarter
                squid.
              </p>
              <div className=" d-flex align-items-center justify-content-between">
                <div className=" d-flex gap-1 align-items-center">
                  <ComentIcon />
                  <h6 className=" mb-0 fw-normal fs-14 lh-16 clr-gray2 lt-spacing ff-sf">
                    28
                  </h6>
                </div>
                <div className=" d-flex gap-1 align-items-center">
                  <Retweet />
                  <h6 className=" mb-0 fw-normal fs-14 lh-16 clr-gray2 lt-spacing ff-sf">
                    5
                  </h6>
                </div>
                <div className=" d-flex gap-1 align-items-center">
                  <Like />
                  <h6 className=" mb-0 fw-normal fs-14 lh-16 clr-gray2 lt-spacing ff-sf">
                    21
                  </h6>
                </div>
                <Share />
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6}>
            <div className="newsBox">
              <div className=" d-flex align-items-center mb-21 gap-14">
                <img src={ProfilePic} alt="profile-pic" className=" pointer" />
                <div className="">
                  <h5 className=" ff-inter fw-900 fs-16 lh-19 clr-black mb-1">
                    Joe Bidenn{" "}
                    <span className="ms-1">
                      <Verified />
                    </span>
                  </h5>
                  <h6 className="mb-0 ff-inter fw-normal fs-14 lh-24 clr-black opacity_08">
                    I am giving back in the community.
                  </h6>
                </div>
              </div>
              <p className="mb-27 ff-inter fw-normal fs-16 lh-24 clr-black opacity_08">
                Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape
                salvia vexillologist. Kickstarter sartorial post-ironic
                biodiesel cold-pressed a activated subway. Af dsa kickstarter
                squid.
              </p>
              <div className=" d-flex align-items-center justify-content-between">
                <div className=" d-flex gap-1 align-items-center">
                  <ComentIcon />
                  <h6 className=" mb-0 fw-normal fs-14 lh-16 clr-gray2 lt-spacing ff-sf">
                    28
                  </h6>
                </div>
                <div className=" d-flex gap-1 align-items-center">
                  <Retweet />
                  <h6 className=" mb-0 fw-normal fs-14 lh-16 clr-gray2 lt-spacing ff-sf">
                    5
                  </h6>
                </div>
                <div className=" d-flex gap-1 align-items-center">
                  <Like />
                  <h6 className=" mb-0 fw-normal fs-14 lh-16 clr-gray2 lt-spacing ff-sf">
                    21
                  </h6>
                </div>
                <Share />
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6}>
            <div className="newsBox">
              <div className=" d-flex align-items-center mb-21 gap-14">
                <img src={ProfilePic} alt="profile-pic" className=" pointer" />
                <div className="">
                  <h5 className=" ff-inter fw-900 fs-16 lh-19 clr-black mb-1">
                    Joe Bidenn{" "}
                    <span className="ms-1">
                      <Verified />
                    </span>
                  </h5>
                  <h6 className="mb-0 ff-inter fw-normal fs-14 lh-24 clr-black opacity_08">
                    I am giving back in the community.
                  </h6>
                </div>
              </div>
              <p className="mb-27 ff-inter fw-normal fs-16 lh-24 clr-black opacity_08">
                Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape
                salvia vexillologist. Kickstarter sartorial post-ironic
                biodiesel cold-pressed a activated subway. Af dsa kickstarter
                squid.
              </p>
              <div className=" d-flex align-items-center justify-content-between">
                <div className=" d-flex gap-1 align-items-center">
                  <ComentIcon />
                  <h6 className=" mb-0 fw-normal fs-14 lh-16 clr-gray2 lt-spacing ff-sf">
                    28
                  </h6>
                </div>
                <div className=" d-flex gap-1 align-items-center">
                  <Retweet />
                  <h6 className=" mb-0 fw-normal fs-14 lh-16 clr-gray2 lt-spacing ff-sf">
                    5
                  </h6>
                </div>
                <div className=" d-flex gap-1 align-items-center">
                  <Like />
                  <h6 className=" mb-0 fw-normal fs-14 lh-16 clr-gray2 lt-spacing ff-sf">
                    21
                  </h6>
                </div>
                <Share />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {/* position-image */}
      <img src={Mobile} alt="mobile-img" className="mobile" />
      <img src={Laptop} alt="laptop-img" className="laptop d-none d-lg-block" />
    </div>
  );
};

export default News;
