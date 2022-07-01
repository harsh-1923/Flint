import React from "react";
import { Fade, Zoom, Slide } from "react-awesome-reveal";
import { Link, useNavigate } from "react-router-dom";
import "./homepage.css";

import Navbar from "../../Components/Navbar/Navbar.jsx";
import IPHONE_12_CROP from "../../assets/IPHONE_12_CROP.png";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <Slide direction={"down"}>
        <Navbar />
      </Slide> */}
      <div className="homepage-wrapper">
        <div className="hp-sec-1">
          <div className="hp-sec-1-title">
            <h1 className="hp-sec-1-title-primary">
              collaborative workspaces.
              <br /> with anyone. <br /> from anywhere. <br /> on any device.
            </h1>
            <h2 className="hp-sec-1-title-secondary">
              create and collaborate on workspaces
            </h2>
            <button
              className="btn-primary hp-login-btn"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Get Started for free
            </button>
            <p className="hp-text">
              already have an account?{" "}
              <Link to="/login" className="link">
                <u>Sign in</u>
              </Link>
            </p>
          </div>
        </div>
        <div className="hp-sec-2">
          <div className="hp-sec-2-title-wrapper">
            <h1 className="hp-sec-2-title">
              the <span className="hp-sec-2-title-focus">product</span> for all
              your <span className="hp-sec-2-title-focus">productivity</span>{" "}
              needs
            </h1>
          </div>
          <div className="hp-sec-2-level-2">
            <img className="hp-sec-2-img" src={IPHONE_12_CROP} />
          </div>
        </div>
        <div className="hp-sec-3">lkjasdbvjh qwb</div>
      </div>
    </>
  );
};

export default HomePage;

{
  /* <div className="homepage-wrapper">
        <div  className="h"></div>
        <Zoom duration={1000} cascade={true}>
          <div className="homepage-overlay">h</div>
          <h1 className="homepage-title-primary">
            collaborative workspaces.
            <br /> with anyone. <br /> from anywhere. <br /> on any device.
          </h1>

          <h2 className="homepage-title-secondary">
            create and collaborate on workspaces
          </h2>

          <button
            className="btn-primary hp-login-btn"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Get Started for free
          </button>

          <p className="hp-text">
            already have an account?{" "}
            <Link to="/login" className="link">
              <u>Sign in</u>
            </Link>
          </p>
        </Zoom>
      </div> */
}
