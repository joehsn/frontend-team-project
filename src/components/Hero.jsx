import React from "react";
import { Container, Col, Button, Row } from "react-bootstrap";
import svgImg from "../assets/undraw_ideas_re_7twj.svg";
export default function Hero() {
  return (
    <header className="bg-dark text-light px-1 py-5 p-md-0 pt-md-5 text-center text-md-start">
      <Container>
        <Row>
          <Col
            md={8}
            className="d-flex flex-column align-items-center align-items-md-start justify-content-center pb-2"
          >
            <h1>
              Front end <span className="text-warning">Developer</span>
            </h1>
            <div className="lead my-4 text-white-50 pe-md-5">
              {/* Needs to style in css file*/}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              praesentium, laborum adipisci ullam inventore quam.
            </div>
            <Button variant="primary" size="lg" className="px-4">
              Explore
            </Button>
          </Col>
          <Col md={4} className="d-none d-md-block">
            <img src={svgImg} alt="IDEAS" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </header>
  );
}
