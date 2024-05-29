import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MenWithPhoto from "../assets/img/png/Men-Photo.webp";
import Commonbtn from "../common/Comonbtn";
import Textbook from "../assets/img/svg/text-book.svg";

const Utility = () => {
  return (
    <>
      <div className="py-144-15 position-relative z-3 Candele-bg-img-3">
        <Container>
          <Row className=" flex-column-reverse flex-lg-row align-items-center">
            <Col lg={6} className=" mt-lg-0 mt-5">
              <div data-aos="fade-right" className="text-center text-lg-start">
                <h2 className="mb-20 clr-black ff-inter fw-900 fs-64 lh-77">
                  UTILITY
                </h2>
                <p className=" mb-27 ff-inter fw-normal fs-16 lh-24 clr-black opacity_08">
                  The utility of $LHGG extends beyond its humorous appeal.
                  Holders of $LHGG gain access to exclusive merchandise, events,
                  and community perks. Furthermore, $LHGG serves as a medium of
                  exchange within our ecosystem, facilitating transactions and
                  interactions among community members. Through strategic
                  partnerships and integrations, we aim to expand the utility of
                  $LHGG, creating additional avenues for adoption and growth.
                </p>
                <Commonbtn
                  color={"clr-black"}
                  buttonName={"comonBtn2"}
                  name={"Buy $GrayGensler"}
                />
              </div>
            </Col>
            <Col
              data-aos="fade-left"
              lg={6}
              className=" d-flex justify-content-center justify-content-lg-end"
            >
              <img
                src={MenWithPhoto}
                alt="Men-With-Photo"
                className="set-men w-100"
              />
            </Col>
          </Row>
        </Container>
        {/* poisition image */}
        <img src={Textbook} alt="text-book" className="text-book" />
        <h5 className="mb-0 fw-900 fs-32 lh-32 clr-gray set-fudingtext-5 ff-Grandstander d-none d-md-block">
          I love FUDing
        </h5>
        <h5 className="mb-0 fw-900 fs-32 lh-32 clr-gray set-fudingtext-6 ff-Grandstander d-none d-xl-block">
          I love FUDing
        </h5>
        <h5 className="mb-0 fw-900 fs-32 lh-32 clr-gray set-fudingtext-7 ff-Grandstander  d-none d-lg-block ">
          I love FUDing
        </h5>
      </div>
      {/* yellow - box */}
      <div className="bg-orange py-42-50 m-26-4 yello-box">
        <Container>
          <h3
            data-aos="zoom-in"
            className="m-0 ff-inter fs-36 lh-44 fw-900 clr-black text-center"
          >
            PLACE YOURSELF ON THE RIGHT SIDE OF HISTORY
          </h3>
        </Container>
      </div>
    </>
  );
};

export default Utility;
