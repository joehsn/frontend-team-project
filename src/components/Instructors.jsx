import React from "react";
import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import { model1, model2, model3 } from "../assets";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const instructors = [
  { name: "Heba Hassan", img: model1 },
  { name: "Shymaa Adam", img: model2 },
  { name: "Folana Akram", img: model3 },
];

export default function Instructors() {
  return (
    <section className="py-5 bg-primary">
      <Container>
        <h1 className="h3 text-center text-white">Our instructors</h1>
        <div className="lead text-center text-white mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </div>
        <Row className="gy-3">
          {instructors.map((instructor, index) => (
            <Col md={4} key={index}>
              <Card bg="light" className="overflow-hidden">
                <Card.Img
                  variant="top"
                  src={instructor.img}
                  alt={`${instructor.name}'s selfie`}
                  className="instructor-img"
                />
                <Card.Body>
                  <Card.Title>{instructor.name}</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <ButtonGroup
                    size="lg"
                    aria-label={`${instructor.name}'s social media accounts`}
                    className="w-100"
                  >
                    <Button
                      aria-label={`${instructor.name}'s twitter account`}
                      variant="dark"
                      href={`#${instructor.name
                        .toLowerCase()
                        .replace(" ", "-")}`}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <FaTwitterSquare />
                    </Button>
                    <Button
                      aria-label={`${instructor.name}'s Facebook account`}
                      variant="dark"
                      href={`#${instructor.name
                        .toLowerCase()
                        .replace(" ", "-")}`}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <FaFacebookSquare />
                    </Button>
                    <Button
                      aria-label={`${instructor.name}'s Linkedin account`}
                      variant="dark"
                      href={`#${instructor.name
                        .toLowerCase()
                        .replace(" ", "-")}`}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <FaLinkedin />
                    </Button>
                    <Button
                      aria-label={`${instructor.name}'s Instagram account`}
                      variant="dark"
                      href={`#${instructor.name
                        .toLowerCase()
                        .replace(" ", "-")}`}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <FaInstagram />
                    </Button>
                  </ButtonGroup>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
