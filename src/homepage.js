import React from "react";
import "./homepage.css";
import brandlog from "./asserts/logo.png";
import trf from "./asserts/1.png";
import awardImg from "./asserts/2.png";
import pumpsImg from "./asserts/3.png";
import phone from "./asserts/telephone-of-old-design.svg";
import fb from "./asserts/facebook-app-logo.svg";
import web from "./asserts/globe.svg";
function homepage() {
  return (
    <div className="top__container">
      <div className="hero">
        <div className="brand__name">
          <img src={brandlog} alt="brand logo" className="brand__name__logo" />
        </div>
        <div className="herosection__container">
          <div className="tro__container">
            <img src={trf} alt="troimage" className="tro__img" />
          </div>
          <div className="img__and__text__container">
            <h3 className="award__name">
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </h3>
            <ul className="acom">
              <li>
                CRI's energy efficient products are well recognized by various
                Government Institutions, as trustworthy products for various
                projects across the globe to save energy.
              </li>
              <li>
                CRI. is the highest contributor in the country for the projects
                of EESL &#40; Energy Efficiency Services Limited &#41; to
                replace the old inefficient pumps with 5 Star rated energy
                efficient smart pumps with IoT enabled control panel.
              </li>
            </ul>
            <img src={awardImg} alt="award img" className="award__img" />
            <p className="paragraph">
              Government of India has awarded the "National Energy Conservation
              Award 2018." Mr. G. Selvaraj, Joint of CRI, Group received the
              award from Smt. Sumitra Mahajan, Apeaker of Lok Sabha &#38; Shri.
              Raj Kumar Singh, Honorable Minister of State.
            </p>{" "}
          </div>
        </div>
      </div>
      <div className="second__section">
        <p className="top_text">
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING DF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>
        <img src={pumpsImg} alt="pumpsimage" className="pumps" />
        <p className="bottom_text">
          Valves - Pumps - Pipes - loT Drives &#38; Controllers - Wires &#38;
          Cables - Solar Systems - Motors
        </p>
        <div className="lin"></div>
        <div className="footer">
          <div className="footer__heading">
            C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
          </div>
          <div className="footer__products">
            <p className="text">CHEMICALS &#38; PROCESS </p>
            <p className="line" style={{ color: "rgb(171, 29, 29)" }}>
              |
            </p>
            <p className="text">POWER </p>
            <p className="line" style={{ color: "rgb(171, 29, 29)" }}>
              |
            </p>
            <p className="text">WATER &#38; WASTE WATER</p>
            <p className="line" style={{ color: "rgb(171, 29, 29)" }}>
              |
            </p>
            <p className="text">OILS &#38; GAS </p>
            <p className="line" style={{ color: "rgb(171, 29, 29)" }}>
              |
            </p>
            <p className="text">PHARMA </p>
            <p className="line" style={{ color: "rgb(171, 29, 29)" }}>
              |
            </p>
            <p className="text">SUGARS &#38; DISTILLERIES </p>
            <p className="line" style={{ color: "rgb(171, 29, 29)" }}>
              |
            </p>
            <p className="text">PAPER &#38; PULP </p>
            <p className="line" style={{ color: "rgb(171, 29, 29)" }}>
              |
            </p>
            <p className="text">MARINE &#38; DEFENCE </p>
            <p className="line" style={{ color: "rgb(171, 29, 29)" }}>
              |
            </p>
            <p className="text">METAL &#38; MINING </p>
            <p className="line" style={{ color: "rgb(171, 29, 29)" }}>
              |
            </p>
            <p className="text">FOOD &#38; BEVERAGE </p>
            <p className="line" style={{ color: "rgb(171, 29, 29)" }}>
              |
            </p>
            <p className="text">PETROCHEMICAL &#38; REFINERIES</p>
            <p className="line" style={{ color: "rgb(171, 29, 29)" }}>
              |
            </p>
            <p className="text">SOLAR </p>
            <p className="line" style={{ color: "rgb(171, 29, 29)" }}>
              |
            </p>
            <p className="text">BUILDING </p>
            <p className="line" style={{ color: "rgb(171, 29, 29)" }}>
              |
            </p>
            <p className="text">HVAC </p>
            <p className="line" style={{ color: "rgb(171, 29, 29)" }}>
              |
            </p>
            <p className="text">FIRE FIGHTING</p>
            <p className="line" style={{ color: "rgb(171, 29, 29)" }}>
              |
            </p>
            <p className="text">AGRICULTURE &#38; RESIDENTIAL</p>
          </div>
          <div className="red__bg">
            <div className="call">
              <a href="#" className="link">
                <img
                  src={phone}
                  alt=""
                  className="logo"
                  style={{ padding: "10px 5px 10px 5px" }}
                />
                Toll free 1800 200 1234
              </a>
            </div>
            <div className="fb">
              <a href="#" className="link">
                <img
                  src={fb}
                  alt=""
                  className="logo"
                  style={{ padding: "10px 5px 10px 5px" }}
                />
                www.facebook.com/cripumps
              </a>
            </div>
            <div className="web">
              <a href="#" className="link">
                <img
                  src={web}
                  alt=""
                  className="logo"
                  style={{ padding: "10px 5px 10px 5px" }}
                />
                www.crigroups.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default homepage;
