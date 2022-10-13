import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  ListGroup,
  Row,
} from "react-bootstrap";

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

export default function Contact() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);
  return (
    <section className="contact py-5">
      <Container>
        <Row className="g-4">
          <Col xs={12} className="text-center">
            <h2>Contact US</h2>
            <div className="mb-4">Don't Hesitate to get in touch!</div>
          </Col>
          <Col md={6}>
            <Form>
              <FloatingLabel
                controlId="name"
                label="Full name"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="John Doe" />
              </FloatingLabel>
              <FloatingLabel
                controlId="email"
                label="Email address"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel
                controlId="phone"
                label="Phone number"
                className="mb-3"
              >
                <Form.Control type="tel" placeholder="+20123456789" />
              </FloatingLabel>
              <FloatingLabel
                controlId="message"
                label="Message"
                className="mb-3"
              >
                <Form.Control
                  as="textarea"
                  className="message"
                  placeholder="Leave a Message here"
                />
              </FloatingLabel>
              <Form.Check
                type="switch"
                id="services"
                label="Accept Terms & Policy"
                className="mb-3"
              />
              <Button
                variant="primary"
                className="w-100"
                disabled={isLoading}
                onClick={!isLoading ? handleClick : null}
              >
                {isLoading ? "Sending..." : "Send"}
              </Button>
            </Form>
          </Col>
          <Col md={6} className="d-flex flex-column">
            <ListGroup variant="flush" className="h-auto">
              <ListGroup.Item>
                <span className="fw-bold">Address:</span> bla bla street.
              </ListGroup.Item>
              <ListGroup.Item>
                <span className="fw-bold">Phone:</span>{" "}
                <a href="tel:0147852369">0147852369</a>
              </ListGroup.Item>
              <ListGroup.Item>
                <span className="fw-bold">E-mail:</span>{" "}
                <a href="mailto:blabla@domain.com">blabla@domain.com</a>
              </ListGroup.Item>
              <ListGroup.Item>
                <span className="fw-bold">Fax:</span>{" "}
                <a href="fax:9632.5874.3310">+9632.5874.3310</a>
              </ListGroup.Item>
            </ListGroup>
            <span className="map h-100 d-flex fw-bold fs-5 justify-content-center align-items-center bg-dark text-light rounded">
              MAP
            </span>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
