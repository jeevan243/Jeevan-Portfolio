import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import jeevanPic from "../../Assets/jeevan_prasad.png";
import Particle from "../Particle";
import Type from "./Type";
 import "../../../src/style.css"

// import {
//   AiFillGithub,
//   AiFillInstagram,
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Shivarathri Jeevan Prasad</strong>
              </h1>

              <div style={{ padding: 50, paddingLeft: 50, paddingBottom: 0, textAlign: "left" }}>
                <Type />
                <p style={{ paddingTop: 40, textAlign: "justify" }}> I enjoy having my developments live on the internet. I've had an interest in web development since I was in college. I made the decision to begin my professional career in this field. </p>
              </div>
              {/* <div style={{ paddingLeft: 50,paddingBottom:0, textAlign: "left",color:"#cd5ff8" , fontWeight:"bold",fontSize:"16px" }}> 
                CONNECT WITH ME : 
              <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/kavya-2021"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/lakshmi-kavya-527736161"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/lakshmi_kavya_96/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
              </div> */}

            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={jeevanPic} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>

    </section>
  );
}

export default Home;
