import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import purplleBack from "../../Assets/Projects/flatheads-backend.jpg";
import desertCart from "../../Assets/Projects/americaneagle.jpg";
import webjinkeplayer from "../../Assets/Projects/webjinkeplayer.jpg"
import leadoff from "../../Assets/Projects/leadfoff/leadoff.jpg";
import letslockr from "../../Assets/Projects/letslockr/letslockr.jpg";
import lockrFinance from "../../Assets/Projects/lockrfinance/lockrfinance.jpg";
import chaceDashboard from "../../Assets/Projects/chaceDashboard/chacedashboard.jpg";
import lockrDashboard from "../../Assets/Projects/lockrDashboard/lockrdashboard.jpg"

function Projects() {
  return (
    <Container id="work-experience" fluid className="project-section">
      <Particle />
      <Container id="work-experience">
        <h1 className="project-heading">
          <strong className="purple">Work Experience </strong>
        </h1>
        <h2 className="project-heading">
          Chace Technologies Private Limited </h2>
        <p style={{ font: '20px', color: 'white' }}>Working for Chace Technologies as a Software
          developer since 1+ years.</p>

        <p style={{ color: "white" }}>
        Here are some of the products on which I've worked at Chace.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leadoff}
              isBlog={false}
              isDeploy={true}
              isAblog={true}
              title="Leadoff"
              description="Leadoff is a world-class unlisted equity market gateway, where investors of all levels can buy unlisted shares online securely. We are teleporting you to the front row to access some of the most lucrative companies before IPO. Join a new generation of investors."
              links="https://www.joinleadoff.com/"
              link="#"
              blog="https://decentro.tech/blog/https-decentro-tech-blog-leadoff-case-study/"
              techstack="TECH-STACK: MongoDB, PostgreSQL, Fastify, Express.js, Node.js, Typescript, Prisma ORM, Next.js, Tilwind CSS"
              storage="DATABASE: PostgreSQL, PG Admin, MongoDb"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={letslockr}
              isBlog={false}
              isDeploy={true}
              isAblog={true}
              title="Lets Lockr"
              description="Lockr is building banking for eCommerce Merchants and Startups. Your account comes with
              Checking account
              Savings account
              Credit cards (Virtual & Physical)
              Check payments
              Domestic and international wire transfers"
              link="#"
              links="https://www.letslockr.com/"
              blog="https://www.producthunt.com/products/get-paid-in-us-dollars-anytime-anywhere"
              techstack="TECH-STACK: PostgreSQL, Fastify, Express.js, Node.js, Typescript, Prisma ORM"
              storage="DATABASE: PostgreSQL, PG Admin"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lockrFinance}
              isBlog={false}
              isDeploy={true}
              isAblog={true}
              title="Lockr Finance"
              description="Lockr Finance is a crypto lending project that allows users to borrow USDC in exchange for their BTC / ETH. Lockr is the best place to borrow against Bitcoin and Ether without spending it."
              link="#"
              links="http://lockrfinance.com/"
              blog="https://medium.com/@lockrfinance"
              techstack="TECH-STACK: PostgreSQL, Fastify, Express.js, Node.js, Typescript, Prisma ORM, Next.js, Tilwind CSS"
              storage="DATABASE: PostgreSQL, PG Admin, MongoDb"

            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chaceDashboard}
              isBlog={false}
              isDeploy={true}
              isAblog={true}
              title="Chace Dashboard"
              description="Chace Dashboard is a dashboard from which an admin can access all users and unlisted shares data of the leadoff users."
              link="#"
              links="https://partner.chace.co.in/"
              blog="#"
              techstack="TECH-STACK: PostgreSQL, Fastify, Express.js, Node.js, Typescript, Prisma ORM, Next.js, Tilwind CSS"
              storage="DATABASE: PostgreSQL, PG Admin"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lockrDashboard}
              isBlog={false}
              isDeploy={true}
              isAblog={true}
              title="Lockr Dahsboard"
              description="Lockr Dashboard is a dashboard from which an admin can access all users and users data of the lockr."
              link="#"
              links="https://partner.letslockr.com/"
              blog="#"
              techstack="TECH-STACK: PostgreSQL, Fastify, Express.js, Node.js, Typescript, Prisma ORM, Next.js, Tilwind CSS"
              storage="DATABASE: PostgreSQL, PG Admin"
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <h1 className="projects" style={{color:'white'}}>
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webjinkeplayer}
              isBlog={false}
              isDeploy={true}
              isAblog={true}
              title="Soundcloud"
              description="SoundCloud is an online audio distribution platform and music sharing website that enables its users to upload, promote, and share audio, as well as a digital signal processor enabling listeners to stream audio."
              links="https://web-jinke-music.vercel.app/"
              link="https://github.com/BhaveshSuthar00/soundCld-client-side"
              // blog="https://medium.com"
              techstack="TECH-STACKS : ReactJs, MongoDB, Express.js, Node.js, react-jinke-music-player"
              storage="DATABASE: MongoDB Atlas & Served by Heroku."

            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={purplleBack}
              isBlog={false}
              isDeploy={true}
              isAblog={true}
              title="Flatheads"
              description="Flatheads is an online application that acts as an e-commerce platform for people to purchase various sneakers. We were a six-person team that worked on this project for five days. My Participation This Project has a Product page. We developed both the frontend and backend for this project."
              link="https://github.com/jeevan243/flatheads"
              links="https://flatheads-official.herokuapp.com/"
              blog="https://medium.com/@reddymanish809/flatheads-clone-unit-4-4056d57a664e"
              techstack="TECH-STACKS: EJS, CSS, MongoDB, ES6 JS, Express.js, Node.js."
              storage="DATABASE: MongoDB Atlas"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={desertCart}
              isBlog={false}
              isDeploy={true}
              isAblog={true}
              title="American Eagle"
              description="It is an e-commerce web application that allows users to buy men's and women's clothing online. We were a five-person team that worked on this project for five days. The Landing Page is my contribution to this project. We have built a complete e-commerce flow."
              link="https://github.com/jeevan243/American-Eagle-Web"
              links="https://american-eagle-web-clone.vercel.app/"
              blog="https://medium.com/@jeevanprasad243/our-project-american-eagle-clone-f5e2894b57d4"
              techstack="TECH-STACKS : HTML, CSS, DOM, JavaScript"
              storage="DATABASE : Local Storage"

            />
          </Col>
        </Row>
      </Container>
     
    </Container>
  );
}

export default Projects;
