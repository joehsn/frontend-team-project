import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FaLaptopCode, FaUser, FaBoxes, FaStar } from "react-icons/fa";

export default function Boxes() {
  return (
    <section className="boxes my-5">
      <Container>
        <Row className="gy-3">
          {[<FaLaptopCode />, <FaBoxes />, <FaUser />, <FaStar />].map(
            (icon, index) => (
              <Col md={6} lg={3} key={index}>
                <Card bg={index % 2 === 0 ? "dark" : "primary"} text="white">
                  <Card.Body>
                    <Card.Title>
                      {icon} Card No.{index + 1}
                    </Card.Title>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis impedit libero aut culpa necessitatibus placeat id
                    distinctio.
                  </Card.Body>
                  <Card.Footer>
                    <Button
                      variant={index % 2 === 0 ? "primary" : "dark"}
                      className="w-100"
                      href="#nothing"
                    >
                      Read more
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            )
          )}
        </Row>
      </Container>
    </section>
  );
}
