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
                <p style={{ paddingTop: 40, textAlign: "justify" }}>I've been interested in web development since I was in college, which led to a career as a Full-Stack Web Developer with a focus on MERN Stack, JavaScript, HTML, and CSS.  </p>
                <p style={{ paddingTop: 40, textAlign: "justify" }}>Towards the end of the course at Masai, I joined Chace Technologies. Chace, the parent company, has multiple products. I have worked on the projects Lockr, Leadoff, Chace Dashboard, Lockr Dashboard, and Lockr Finance. For these project’s tech stack, we used NodeJs, Typescript, Javascript, Fatsify, PostgreSQL, Nextjs, Tailwind CSS, MongoDb, and Prisma ORM. I performed well on all projects.</p>
              </div>
            </Col>
            <Col md={5} style={{ display :"flex", alignItems: "center", justifyContent: "center" }}>
              <img src={jeevanPic} alt="home pic" className="img-fluid1" />
            </Col>
          </Row>
        </Container>
      </Container>

    </section>
  );
}

export default Home;
