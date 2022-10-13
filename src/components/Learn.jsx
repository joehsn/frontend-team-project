import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa";

import { placeImage } from "../assets";

export default function Learn({
  bg,
  text,
  invert,
  btn,
  imgSource,
  title,
  breif,
  link,
}) {
  return (
    <section
      className={`learn bg-${bg || "light"} text-${text || "dark"} py-5`}
    >
      <Container>
        <Row className={`flex-column-reverse flex-lg-row${invert || ""}`}>
          <Col
            lg={6}
            className="d-flex flex-column justify-content-center align-items-lg-start"
          >
            <h2>{`${title || "Learn the Fundamentals"}`}</h2>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos,
              reiciendis ipsum rerum ex eius laborum.
            </p>
            <p>
              {`${
                breif ||
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam cumque laborum libero quo aut voluptatem omnis aliquid quia qui exercitationem nesciunt molestiae  fuga, rem voluptate! Accusamus consectetur inventore voluptatibus."
              }`}
            </p>
            <Button href="#nothing" variant={`${btn || "dark"} mt-3`}>
              {`${link || "Read More"}`} <FaChevronRight />
            </Button>
          </Col>
          <Col lg={6}>
            <img
              src={imgSource || placeImage}
              alt="bla bla bla"
              className="img-fluid mb-3 mb-lg-0"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
