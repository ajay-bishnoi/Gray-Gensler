import React, { useEffect, useState } from "react";
import { Container, Nav } from "react-bootstrap";
import dextools from "../assets/img/svg/dextools-icon.svg";
import xIcon from "../assets/img/svg/x-icon.svg";
import telegram from "../assets/img/svg/telegram-icon.svg";
import Commonbtn from "../common/Comonbtn";

const NavBar = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    document.body.style.overflow = show ? "visible" : "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);
  return (
    <>
      <Nav className="Nav-pt-35" data-aos="fade-down">
        <Container>
          <div className=" d-flex justify-content-between align-items-center">
            <h3 className="mb-0 fw-900 fs-40 lh-48 clr-white pointer">
              Gxxx Gxxxxxx
            </h3>
            <div
              className={`d-flex  align-items-center  gap-46 mobile-view 
               ${show ? "" : " start-0"}`}
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
              <Commonbtn
                color={"clr-white"}
                buttonName={"comonBtn"}
                name={"Buy On Uniswap"}
              />
            </div>
            <div
              className={` menu d-lg-none ${show ? "" : "cross"}`}
              onClick={() => setShow(!show)}
            >
              <span></span>
              <span className=" my-2"></span>
              <span></span>
            </div>
          </div>
        </Container>
      </Nav>
    </>
  );
};

export default NavBar;
