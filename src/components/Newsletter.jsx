import React from "react";
import { Container, InputGroup, Form, Button, Col, Row } from "react-bootstrap";

export default function Newsletter() {
  return (
    <section className="newsletter bg-primary text-light px-1 py-4 py-lg-5">
      <Container>
        <Row>
          <Col md={6} sm={12} className="text-center text-md-start">
            <h1 className="h4 mb-3 mb-md-0">Sing up for our newsletter</h1>
          </Col>
          <Col md={6} sm={12}>
            <Form>
              <InputGroup>
                <Form.Control
                  size="lg"
                  id="newsletter"
                  type="email"
                  name="your email"
                  placeholder="Your email here..."
                  aria-label="Your email here..."
                  aria-describedby="newsletter-btn"
                  required
                />
                <Button variant="dark" id="newsletter-btn" type="submit">
                  Subscribe
                </Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
